---
name: code-review
version: 1.0.0
description: |
  Pre-landing code review. Analyzes diff against the base branch for bugs, edge cases,
  CLAUDE.md compliance, security issues, and structural problems. Fix-First approach:
  obvious issues auto-fixed, ambiguous ones batched for your decision. Includes design
  review for frontend changes. Use when asked to "review", "code review", "review this PR",
  "review my changes", or "check this code".
allowed-tools:
  - Bash
  - Read
  - Edit
  - Write
  - Grep
  - Glob
  - AskUserQuestion
  - Agent
---
<!-- claudebert/code-review -->

## Preamble (run first)

```bash
_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
echo "BRANCH: $_BRANCH"
```

## AskUserQuestion Format

**ALWAYS follow this structure for every AskUserQuestion call:**
1. **Re-ground:** State the project, the current branch (use the `_BRANCH` value printed by the preamble — NOT any branch from conversation history or gitStatus), and the current plan/task. (1-2 sentences)
2. **Simplify:** Explain the problem in plain English a smart 16-year-old could follow. No raw function names, no internal jargon, no implementation details. Use concrete examples and analogies. Say what it DOES, not what it's called.
3. **Recommend:** `RECOMMENDATION: Choose [X] because [one-line reason]`
4. **Options:** Lettered options: `A) ... B) ... C) ...`

---

## Completeness Principle

When reviewing code, bias toward the complete implementation. If a shortcut saves modest human effort but costs only minutes more with AI assistance, flag the gap. 100% test coverage is the vibe code unlock — tests make shipping safe and fast.

## Session State

Read `SESSION-PROTOCOL.md` for the full protocol. In brief:
- **At start:** Read `.claudebert/session-state.md` if it exists — prior skills may have flagged issues or made decisions relevant to this review
- **At end:** Append a summary of findings and decisions to the session state file
- If eng-review ran before this, reference its architecture decisions when reviewing code structure

## Step 0: Detect base branch

Determine which branch this PR targets. Use the result as "the base branch" in all subsequent steps.

1. Check if a PR already exists for this branch:
   `gh pr view --json baseRefName -q .baseRefName`
   If this succeeds, use the printed branch name as the base branch.

2. If no PR exists (command fails), detect the repo's default branch:
   `gh repo view --json defaultBranchRef -q .defaultBranchRef.name`

3. If both commands fail, fall back to `main`.

Print the detected base branch name. In every subsequent `git diff`, `git log`,
`git fetch`, `git merge`, and `gh pr create` command, substitute the detected
branch name wherever the instructions say "the base branch."

## Step 0b: Detect context

```bash
# Current branch
git branch --show-current

# Check if PR exists
gh pr view --json number,title,baseRefName,url 2>/dev/null

# Detect base branch
BASE=$(gh pr view --json baseRefName -q .baseRefName 2>/dev/null || gh repo view --json defaultBranchRef -q .defaultBranchRef.name 2>/dev/null || echo "main")
echo "BASE: $BASE"

# Diff stats
git diff $BASE...HEAD --stat
```

---

## Step 1: Intake

Ask one question:

> **Code review on `{_BRANCH}` — what should I do with findings?**
>
> A) **Comment on PR** — post findings as a comment on the pull request
> B) **Report locally** — just tell me what you find, don't post anything
>
> RECOMMENDATION: Choose A if a PR exists, B otherwise.

Store as `OUTPUT_MODE` (one of: `pr`, `local`).

---

## Phase 1: Gather context

1. Read all relevant CLAUDE.md and AGENTS.md files (root + any in directories touched by the diff):
   ```bash
   # Find all CLAUDE.md and AGENTS.md files in the repo
   find $(git rev-parse --show-toplevel) -name "CLAUDE.md" -o -name "AGENTS.md" 2>/dev/null
   ```
   Read all of them — instructions may be scoped per-directory.
2. Get the full diff:
   ```bash
   git diff $BASE...HEAD
   ```
3. Get commit history for context:
   ```bash
   git log $BASE..HEAD --oneline
   ```
4. If a PR exists, read the PR description:
   ```bash
   gh pr view --json body -q .body
   ```

---

## Phase 2: Five-Axis Review

Review the diff thoroughly using a structured five-axis framework. For each finding, assign a severity label:

| Label | Meaning | Action |
|-------|---------|--------|
| **Critical** | Will break in production, security vulnerability, data loss | Must fix before merge |
| **High** | Bug or significant quality issue under realistic conditions | Should fix before merge |
| **Nit** | Minor improvement, style preference backed by CLAUDE.md | Fix if convenient |
| **FYI** | Observation, not actionable — context for the author | No action needed |

Only findings scored **Critical** or **High** enter the Fix-First flow (Phase 3). Nits are listed in the report. FYIs are footnotes.

### Axis 1: Correctness

The code does what it claims to do.

- Off-by-one errors, null/undefined access, race conditions
- Missing error handling on new codepaths
- Incorrect conditional logic, unreachable code
- Broken data flow (wrong variable, stale state, missing updates)
- What happens with empty input, null, zero, negative values?
- What happens at boundaries (max length, overflow, concurrent access)?
- What if an external call fails, times out, or returns unexpected data?

### Axis 2: Readability & Simplicity

A new team member can understand this code without the author explaining it.

- DRY violations (same logic duplicated)
- Naming clarity (variables/functions named for what they do)
- Unnecessary complexity (over-engineering, premature abstraction)
- Missing or stale comments/diagrams in modified code
- Chesterton's Fence — understand why code exists before flagging it

### Axis 3: Architecture

The change fits the system's structure and doesn't create debt.

- CLAUDE.md & AGENTS.md compliance (check each instruction against the changes; AGENTS.md files may exist at multiple directory levels — apply the most specific one; only flag violations clearly called out; ignore rules that don't apply)
- Coupling introduced between modules that were previously independent
- Abstraction level — does a new helper/class earn its existence, or is it premature?
- API surface — does the change expand the public API unnecessarily?
- DESIGN.md compliance — if `DESIGN.md` or `design-system.md` exists, check frontend changes against its design tokens, component patterns, and anti-patterns

### Axis 4: Security

No new attack surface introduced.

- New user inputs without validation or sanitization
- SQL/command/template injection vectors
- Authorization gaps (can user A access user B's data?)
- Secrets or credentials in code
- XSS vectors (user data rendered without escaping)

For a deep security audit, recommend `/security-review` after this review.

### Axis 5: Performance

No unnecessary degradation introduced.

- Database/API calls inside loops (N+1)
- Unbounded data fetching (missing LIMIT/pagination)
- Large synchronous operations in request handlers
- Bundle size impact (new large dependencies)

For a deep performance audit, recommend `/perf-review` after this review.

---

## Phase 3: Classify & Fix

### What is NOT an issue:
- Pre-existing problems not introduced by this diff
- Things a linter/typechecker/compiler would catch
- Style preferences not backed by CLAUDE.md or AGENTS.md
- Intentional changes in functionality related to the PR's purpose
- General "you should add tests" without specific gap identified

### Fix-First Classification

For each **Critical** or **High** finding, classify as **AUTO-FIX** or **ASK**:

**AUTO-FIX** (apply directly, no question):
- Dead code removal, stale comments
- Missing error handling on straightforward paths
- Obvious DRY violations (exact duplicate code)
- Simple naming fixes

**ASK** (needs user decision):
- Security issues, race conditions
- Architectural decisions
- Ambiguous design choices
- Anything where reasonable people could disagree

---

## Phase 4: Apply Fixes & Output

### Step 4a: Auto-fix all AUTO-FIX items

Apply each fix directly using Edit tool. For each one, output a one-line summary:
`[AUTO-FIXED] [file:line] Problem → what you did`

### Step 4b: Batch-ask about ASK items

If there are ASK items remaining, present them in ONE AskUserQuestion:

- List each item with a number, the severity label, the problem, and a recommended fix
- For each item, provide options: A) Fix as recommended, B) Skip
- Include an overall RECOMMENDATION

Example format:
```
I auto-fixed N issues. M need your input:

1. [Critical] app/services/generator.ts:42 — Race condition in status transition
   Fix: Add optimistic locking check
   → A) Fix  B) Skip

2. [High] app/services/generator.ts:88 — LLM output not validated before DB write
   Fix: Add JSON schema validation
   → A) Fix  B) Skip

RECOMMENDATION: Fix both — #1 is a real race condition, #2 prevents silent data corruption.
```

If 3 or fewer ASK items, you may use individual AskUserQuestion calls instead of batching.

### Step 4c: Apply user-approved fixes

Apply fixes for items where the user chose "Fix." Output what was fixed.

If no ASK items exist (everything was AUTO-FIX), skip the question entirely.

### Step 4d: Output Summary

#### If OUTPUT_MODE=local

Present findings directly:

```
## Code Review: {branch}

Review: N findings (X auto-fixed, Y asked, Z nits)

| Severity | Count |
|----------|-------|
| Critical | ... |
| High | ... |
| Nit | ... |

Auto-fixed:
- [AUTO-FIXED] {file}:{line} — {problem} → {fix}

Asked (user chose fix/skip):
- {file}:{line} — {description} → {outcome}

Nits:
- [Nit] {file}:{line} — {observation}

Axes checked: Correctness, Readability, Architecture, Security, Performance.
```

#### If OUTPUT_MODE=pr

Post a comment on the PR using `gh`:

```bash
gh pr comment --body "$(cat <<'EOF'
### Code review

Review: N findings (X auto-fixed, Y user-reviewed, Z nits)

| Severity | Count |
|----------|-------|
| Critical | ... |
| High | ... |
| Nit | ... |

**Auto-fixed:**
1. {file}:{line} — {problem} → {fix}

**User-reviewed:**
1. {file}:{line} — {description} → {outcome}

**Nits:**
1. [Nit] {file}:{line} — {observation}

{link to file and line with full sha1}

Axes checked: Correctness, Readability, Architecture, Security, Performance.

Generated with claudebert/code-review
EOF
)"
```

**Link format requirements:**
- Must use full git SHA (not HEAD or short sha)
- Format: `https://github.com/{owner}/{repo}/blob/{full-sha}/{path}#L{start}-L{end}`
- Include 1 line of context before and after the issue

```bash
# Get full SHA for links
git rev-parse HEAD
# Get repo info
gh repo view --json nameWithOwner -q .nameWithOwner
```

If no issues found:

```
### Code review

No issues found. Checked across five axes: Correctness, Readability, Architecture, Security, Performance.

Generated with claudebert/code-review
```

---

## Phase 4.5: Documentation Staleness Check

Cross-reference the diff against documentation files. For each `.md` file in the repo root (README.md, ARCHITECTURE.md, CONTRIBUTING.md, CLAUDE.md, etc.):

1. Check if code changes in the diff affect features, components, or workflows described in that doc file.
2. If the doc file was NOT updated in this branch but the code it describes WAS changed, flag it as an informational finding:
   "Documentation may be stale: [file] describes [feature/component] but code changed in this branch."

This is informational only — never critical. Skip silently if no documentation files exist.

---

## Phase 4.6: Design Review (conditional, diff-scoped)

Check if the diff touches frontend files (CSS, HTML, JSX, TSX, Vue, Svelte, or view templates).

**If no frontend files changed:** Skip silently.

**If frontend files changed:**

1. **Check for DESIGN.md.** If `DESIGN.md` or `design-system.md` exists in the repo root, read it. Patterns blessed there are not flagged.

2. **Read each changed frontend file** (full file, not just diff hunks).

3. **Apply a quick design checklist** against the changed files:
   - `outline: none` without replacement focus style → AUTO-FIX
   - `!important` overuse (3+ in one file) → flag
   - `font-size` below 16px for body text → flag
   - Blacklisted fonts (Papyrus, Comic Sans, Lobster, Impact, Jokerman) → flag
   - Purple gradient backgrounds → flag as AI slop
   - Generic hero copy ("Revolutionize your workflow") → flag as AI slop
   - 3-column feature grid with icons in colored circles → flag as AI slop
   - Missing `cursor: pointer` on clickable elements → flag

4. **Include findings** in the review output under a "Design Review" header. Mechanical CSS fixes follow the AUTO-FIX flow; design judgment calls go to ASK.

For a comprehensive visual audit, recommend `/design-review` after implementation.

---

## Phase 6: Log to Linear

After the review is complete, ask the user:

> **Want me to log these findings to Linear?**
>
> A) **Yes** — create issues in Linear for findings
> B) **No** — just keep the review as-is
>
> RECOMMENDATION: Choose B for minor issues, A for significant bugs.

**If yes:**

1. For each finding, create a Linear issue using `save_issue` with:
   - **Title:** `[Review] {short description}`
   - **Description:** Simple markdown with file, line, explanation, severity, and branch
   - **Labels:** use existing labels if available (e.g. `bug`, `review`)

2. Print a summary: "Logged N issues to Linear."

---

## Important Rules

1. **Review the diff, not the whole codebase.** Focus on what changed.
2. **Quality over quantity.** 3 real issues > 15 nitpicks.
3. **Be specific.** File, line number, what's wrong, why it matters.
4. **Skip what tools catch.** Linters, type checkers, and CI handle formatting/types.
5. **Respect intent.** If a change is clearly intentional and related to the PR purpose, don't flag it.
6. **No emojis in PR comments.** Keep it professional and scannable.
7. **Link everything.** Every issue needs a file:line reference.
8. **Fix-first, not read-only.** AUTO-FIX items are applied directly. ASK items are only applied after user approval.
