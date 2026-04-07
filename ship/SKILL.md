---
name: ship
version: 1.0.0
description: |
  Pre-launch checklist and shipping gate. Runs a structured audit across six dimensions
  (code quality, security, performance, accessibility, infrastructure, documentation)
  before merge or deploy. Generates a go/no-go recommendation. Use when asked to "ship",
  "pre-launch check", "ready to merge?", "is this ready?", or "launch checklist".
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
<!-- claudebert/ship -->

## Preamble (run first)

```bash
_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
echo "BRANCH: $_BRANCH"
```

## AskUserQuestion Format

**ALWAYS follow this structure for every AskUserQuestion call:**
1. **Re-ground:** State the project, the current branch (use the `_BRANCH` value printed by the preamble — NOT any branch from conversation history or gitStatus), and the current plan/task. (1-2 sentences)
2. **Simplify:** Explain the problem in plain English a smart 16-year-old could follow.
3. **Recommend:** `RECOMMENDATION: Choose [X] because [one-line reason]`
4. **Options:** Lettered options: `A) ... B) ... C) ...`

---

## Step 0: Detect base branch & context

```bash
git branch --show-current

BASE=$(gh pr view --json baseRefName -q .baseRefName 2>/dev/null || gh repo view --json defaultBranchRef -q .defaultBranchRef.name 2>/dev/null || echo "main")
echo "BASE: $BASE"

# Branch stats
git log $BASE..HEAD --oneline
git diff $BASE...HEAD --stat

# Check if PR exists
gh pr view --json number,title,url,reviewDecision,statusCheckRollup 2>/dev/null || echo "No PR"

# Check CI status
gh pr checks 2>/dev/null || echo "No CI checks"
```

---

## Step 1: Intake

Ask one question:

> **Ship check on `{_BRANCH}` — what's the target?**
>
> A) **Merge to {base}** — this branch is ready to merge, run pre-merge checklist
> B) **Deploy to production** — already merged, run pre-deploy checklist
> C) **Just audit** — run the checklist and report, I'll decide what to do
>
> RECOMMENDATION: Choose A for feature branches, B for release branches, C if unsure.

Store as `SHIP_MODE`.

---

## Phase 1: Gather context

1. Read CLAUDE.md and AGENTS.md files.
2. Get the full diff against base:
   ```bash
   git diff $BASE...HEAD
   ```
3. Read PR description if exists:
   ```bash
   gh pr view --json body -q .body 2>/dev/null
   ```
4. Check for previous claudebert review artifacts:
   ```bash
   # Check for code review, security review, perf review, QA reports
   ls .claudebert/ 2>/dev/null
   gh pr view --json comments --jq '.comments[].body' 2>/dev/null | grep -l "Generated with claudebert" || true
   ```
5. Identify which claudebert reviews have already run (from PR comments or local reports).

---

## Phase 2: Six-Dimension Audit

Run each dimension. For each, produce a **PASS / WARN / FAIL** verdict.

### Dimension 1: Code Quality

```bash
# Check for linting/type errors
npm run lint 2>/dev/null || yarn lint 2>/dev/null || true
npm run typecheck 2>/dev/null || npx tsc --noEmit 2>/dev/null || true
```

Checklist:
- [ ] Lint passes with no errors
- [ ] Type check passes with no errors
- [ ] No `TODO` or `FIXME` comments introduced without tracking (check against TODOS.md)
- [ ] No `console.log` / debug statements left in production code
- [ ] No commented-out code blocks
- [ ] Test suite passes:
  ```bash
  npm test 2>/dev/null || yarn test 2>/dev/null || true
  ```
- [ ] New code has test coverage (check if tests exist for new files/functions)
- [ ] If claudebert/code-review ran: were all findings addressed?

**Verdict:** FAIL if lint/type/test errors. WARN if TODOs or missing tests. PASS otherwise.

### Dimension 2: Security

```bash
# Quick vulnerability scan
npm audit --production 2>/dev/null | tail -5 || true
```

Checklist:
- [ ] No secrets/credentials in diff:
  ```bash
  git diff $BASE...HEAD | grep -iE '(password|secret|api.?key|private.?key)\s*[:=]' || echo "Clean"
  ```
- [ ] No `eval()` or dynamic code execution with user input
- [ ] Auth/authz checks present on new endpoints
- [ ] Input validation on new user-facing inputs
- [ ] No known vulnerable dependencies (critical/high)
- [ ] If claudebert/security-review ran: were all CRITICAL/HIGH findings addressed?

**Verdict:** FAIL if secrets in code or critical vulns. WARN if high vulns or missing validation. PASS otherwise.

### Dimension 3: Performance

Checklist:
- [ ] No N+1 queries introduced (database calls inside loops)
- [ ] List endpoints have pagination
- [ ] No synchronous I/O in request handlers
- [ ] Images optimized (next/image, sharp, or equivalent)
- [ ] No large bundle imports (`import _ from 'lodash'` etc.)
- [ ] If claudebert/perf-review ran: were all CRITICAL findings addressed?

**Verdict:** FAIL if N+1 or unbounded queries. WARN if missing optimization. PASS otherwise.

### Dimension 4: Accessibility

Checklist:
- [ ] Interactive elements have keyboard support (no click-only handlers)
- [ ] Images have alt text
- [ ] Form inputs have labels
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Focus management on modals/dialogs (trap focus, return on close)
- [ ] No `outline: none` without replacement focus style

**Verdict:** FAIL if interactive elements lack keyboard support. WARN if missing alt/labels. PASS otherwise.

### Dimension 5: Infrastructure

```bash
# Check CI status
gh pr checks 2>/dev/null || echo "No CI"

# Check for migration files
git diff $BASE...HEAD --name-only | grep -i migrat || echo "No migrations"
```

Checklist:
- [ ] CI passes (all checks green)
- [ ] If database migrations exist: are they reversible?
- [ ] If environment variables added: are they documented and set in all environments?
- [ ] If new dependencies added: are they justified and maintained?
  ```bash
  git diff $BASE...HEAD -- '**/package.json' '**/Gemfile' '**/requirements.txt' '**/go.mod' || true
  ```
- [ ] No breaking changes to public APIs without version bump

**Verdict:** FAIL if CI fails or irreversible migration without rollback plan. WARN if new env vars undocumented. PASS otherwise.

### Dimension 6: Documentation

Checklist:
- [ ] README updated if user-facing behavior changed
- [ ] API documentation updated if endpoints changed
- [ ] CHANGELOG updated (if project maintains one)
- [ ] CLAUDE.md / AGENTS.md updated if development workflow changed
- [ ] PR description explains the "why" (not just the "what")

**Verdict:** WARN if docs are stale relative to changes. PASS otherwise. (Documentation alone never causes FAIL.)

---

## Phase 3: Go/No-Go Recommendation

Aggregate the six dimensions into a single recommendation:

### Decision Matrix

| Scenario | Recommendation |
|----------|---------------|
| All PASS | **GO** — Ship it |
| Any WARN, no FAIL | **GO WITH NOTES** — Ship, but address warnings soon |
| 1 FAIL (non-security) | **HOLD** — Fix the failure, then re-check |
| Any security FAIL | **NO-GO** — Fix before merge, no exceptions |
| 2+ FAILs | **NO-GO** — Multiple blockers need resolution |

### Rollback Strategy

For SHIP_MODE=deploy, include a rollback section:

```
## Rollback Plan

If issues are detected post-deploy:

1. **Immediate rollback:** [revert commit / feature flag off / redeploy previous version]
2. **Data rollback:** [is database migration reversible? any data backfill needed?]
3. **Communication:** [who to notify — team channel, oncall, stakeholders]
4. **Monitoring:** [what metrics to watch for 30 min post-deploy]
```

---

## Phase 4: Output

Present the ship report:

```
## Ship Check: {branch}

| Dimension | Verdict | Notes |
|-----------|---------|-------|
| Code Quality | PASS/WARN/FAIL | {one-line summary} |
| Security | PASS/WARN/FAIL | {one-line summary} |
| Performance | PASS/WARN/FAIL | {one-line summary} |
| Accessibility | PASS/WARN/FAIL | {one-line summary} |
| Infrastructure | PASS/WARN/FAIL | {one-line summary} |
| Documentation | PASS/WARN/FAIL | {one-line summary} |

### Recommendation: GO / GO WITH NOTES / HOLD / NO-GO

{explanation — what's blocking or what to watch}

### Previous Reviews
- Code review: {ran/not run} — {summary if ran}
- Security review: {ran/not run}
- Perf review: {ran/not run}
- QA: {ran/not run}
- Design review: {ran/not run}

### Warnings (address soon)
- {warning details}

### Blockers (fix before shipping)
- {blocker details}
```

If SHIP_MODE is `merge` or `deploy`, ask:

> **Ship check complete: {recommendation}. What next?**
>
> A) **Merge now** — create or merge the PR
> B) **Fix blockers first** — I'll address the issues, then re-check
> C) **Done** — just needed the report
>
> RECOMMENDATION: {based on the recommendation above}

If user chooses A and recommendation is GO or GO WITH NOTES:
```bash
# If PR exists, merge it
gh pr merge --squash --auto 2>/dev/null || echo "Merge requires manual approval"
```

If user chooses B, list the specific blockers as actionable items.

---

## Phase 5: Log to Linear

After the ship check is complete, ask the user:

> **Want me to log blockers/warnings to Linear?**
>
> A) **Yes** — create issues for unresolved items
> B) **No** — just keep the report
>
> RECOMMENDATION: Choose A if there are blockers or warnings that need tracking.

**If yes:**

1. For each blocker or warning, create a Linear issue using `save_issue` with:
   - **Title:** `[Ship] {short description}`
   - **Description:** Markdown with dimension, verdict, details, and recommended fix
   - **Labels:** use existing labels if available

2. Print a summary: "Logged N issues to Linear."

---

## Important Rules

1. **Run what you can, skip what you can't.** If a command fails (no test suite, no linter), note it as "not available" and move on. Don't block the whole check on one missing tool.
2. **Leverage prior reviews.** If claudebert already ran code-review, security-review, or perf-review on this branch, reference their findings. Don't redo their work — check if their findings were addressed.
3. **Be decisive.** GO or NO-GO. Don't hedge with "it depends" — commit to a recommendation and explain why.
4. **Proportional depth.** Small PRs (< 100 lines) get a quick pass. Large PRs (> 500 lines) get thorough treatment.
5. **No emojis.** Keep it professional.
6. **Security is non-negotiable.** A security FAIL is always a NO-GO, regardless of everything else.
