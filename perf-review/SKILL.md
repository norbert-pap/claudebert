---
name: perf-review
version: 1.0.0
description: |
  Pre-landing performance review. Analyzes diff against the base branch for N+1 queries,
  unbounded data fetching, missing caching, bundle size regressions, Core Web Vitals impact,
  and memory leaks. Fix-First approach. Use when asked to "perf review", "performance review",
  "check performance", or "is this slow".
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
<!-- claudebert/perf-review -->

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

## Step 0: Detect base branch

Determine which branch this PR targets. Use the result as "the base branch" in all subsequent steps.

1. Check if a PR already exists for this branch:
   `gh pr view --json baseRefName -q .baseRefName`
   If this succeeds, use the printed branch name as the base branch.

2. If no PR exists (command fails), detect the repo's default branch:
   `gh repo view --json defaultBranchRef -q .defaultBranchRef.name`

3. If both commands fail, fall back to `main`.

Print the detected base branch name.

## Step 0b: Detect context

```bash
git branch --show-current

BASE=$(gh pr view --json baseRefName -q .baseRefName 2>/dev/null || gh repo view --json defaultBranchRef -q .defaultBranchRef.name 2>/dev/null || echo "main")
echo "BASE: $BASE"
git diff $BASE...HEAD --stat
```

---

## Step 1: Intake

Ask one question:

> **Performance review on `{_BRANCH}` — what should I do with findings?**
>
> A) **Comment on PR** — post findings as a comment on the pull request
> B) **Report locally** — just tell me what you find, don't post anything
>
> RECOMMENDATION: Choose A if a PR exists, B otherwise.

Store as `OUTPUT_MODE` (one of: `pr`, `local`).

---

## Phase 1: Gather context

1. Read all relevant CLAUDE.md and AGENTS.md files.
2. Get the full diff:
   ```bash
   git diff $BASE...HEAD
   ```
3. Identify the stack (package.json, Gemfile, etc.) — this determines which anti-patterns to check.
4. Check for existing performance budgets or config:
   ```bash
   # Look for performance config
   find $(git rev-parse --show-toplevel) -maxdepth 3 \( -name "lighthouse*" -o -name ".lighthouserc*" -o -name "webpack.config*" -o -name "next.config*" -o -name "vite.config*" \) 2>/dev/null
   ```
5. Read changed files fully (not just diff hunks) — performance issues often depend on surrounding code.

---

## Phase 2: Performance Audit

Review every changed file. Only flag issues **introduced or modified by this diff**.

### Performance Budgets (reference targets)

| Metric | Target | Red Flag |
|--------|--------|----------|
| JS bundle (gzipped) | < 200 KB | > 350 KB |
| CSS bundle (gzipped) | < 50 KB | > 100 KB |
| LCP (Largest Contentful Paint) | < 2.5s | > 4s |
| INP (Interaction to Next Paint) | < 200ms | > 500ms |
| CLS (Cumulative Layout Shift) | < 0.1 | > 0.25 |
| API response (p95) | < 200ms | > 1s |
| Database query | < 50ms | > 200ms |
| Image size | < 200 KB | > 1 MB |

These are reference targets — the project's own budgets take precedence if defined.

### Severity Tiers

| Tier | Meaning | Example |
|------|---------|---------|
| **CRITICAL** | User-visible degradation, measurable in production | N+1 query on list page, unbounded fetch |
| **HIGH** | Likely degradation under realistic load | Missing index on filtered column, sync file I/O in request path |
| **MEDIUM** | Suboptimal but won't cause incidents | Missing cache headers, redundant re-renders |

Drop anything below MEDIUM.

### Diagnostic Decision Tree

For each changed file, walk through:

```
What type of code changed?
├── Database query / ORM call
│   ├── Inside a loop? → N+1 (CRITICAL)
│   ├── No LIMIT clause on user-facing list? → Unbounded fetch (CRITICAL)
│   ├── Filtering on non-indexed column? → Missing index (HIGH)
│   └── SELECT * when only 2 fields needed? → Over-fetching (MEDIUM)
│
├── API endpoint / route handler
│   ├── Sequential awaits that could be parallel? → Waterfall (HIGH)
│   ├── No pagination on list endpoint? → Unbounded response (CRITICAL)
│   ├── Heavy computation in request path? → Should be async/queued (HIGH)
│   └── Missing cache headers on static-ish data? → Cache opportunity (MEDIUM)
│
├── Frontend component (React/Vue/Svelte)
│   ├── Large dependency imported at top level? → Bundle bloat (HIGH)
│   ├── Expensive computation in render without memo? → Wasted cycles (MEDIUM)
│   ├── Missing key prop on list items? → Reconciliation thrash (MEDIUM)
│   ├── Layout shift from dynamic content without dimensions? → CLS (HIGH)
│   └── Event handler creating new closure every render? → Re-render cascade (MEDIUM)
│
├── Image / media handling
│   ├── Unoptimized image served to browser? → Missing optimization (HIGH)
│   ├── No width/height or aspect-ratio on images? → CLS (HIGH)
│   ├── Large image without lazy loading below fold? → LCP impact (HIGH)
│   └── No srcset/responsive images? → Wasted bandwidth (MEDIUM)
│
├── Data processing / background job
│   ├── Loading entire dataset into memory? → Memory pressure (HIGH)
│   ├── No streaming for large payloads? → Memory spike (HIGH)
│   └── Missing batch processing? → Throughput bottleneck (MEDIUM)
│
└── Configuration / infrastructure
    ├── Missing connection pooling? → Connection exhaustion (CRITICAL)
    ├── No timeout on external calls? → Cascading failure (HIGH)
    └── Verbose logging in hot path? → I/O overhead (MEDIUM)
```

### Common Anti-Patterns Checklist

Scan the diff specifically for these:

1. **N+1 queries** — Database/API call inside a `.map()`, `.forEach()`, or loop
2. **Unbounded data** — `findMany()` / `SELECT` without `LIMIT` or pagination on user-facing endpoints
3. **Sequential awaits** — `await a(); await b();` where `a` and `b` are independent
4. **Missing image optimization** — `<img>` without next/image, sharp, or equivalent pipeline
5. **Synchronous file I/O** — `readFileSync`, `writeFileSync` in request handlers
6. **Regex on hot path** — Complex regex compiled inside a loop instead of outside
7. **Unnecessary re-renders** — Props that change identity every render (inline objects/arrays/functions)
8. **Large imports** — `import _ from 'lodash'` instead of `import get from 'lodash/get'`
9. **Missing connection/resource cleanup** — DB connections, file handles, streams not closed
10. **Blocking the event loop** — Heavy computation without `setImmediate` / worker threads

---

## Phase 3: Score, Classify & Fix

For each finding, assign tier (CRITICAL / HIGH / MEDIUM) and classify as:

**AUTO-FIX** (apply directly, no question):
- Sequential awaits → `Promise.all`
- `import _ from 'lodash'` → tree-shakeable import
- Missing `key` prop on list items
- `readFileSync` in request handler → `readFile` (async)
- Missing `loading="lazy"` on below-fold images
- Missing `width`/`height` on images (when dimensions are deterministic)

**ASK** (needs user decision):
- N+1 query resolution (eager loading vs. dataloader vs. caching — architecture choice)
- Adding database indexes (requires migration)
- Pagination strategy (cursor vs. offset, page size)
- Caching strategy (in-memory vs. Redis vs. CDN)
- Code splitting / dynamic import boundaries
- Moving computation to background job / queue

---

## Phase 4: Apply Fixes & Output

### Step 4a: Auto-fix all AUTO-FIX items

Apply each fix directly using Edit tool. For each one, output a one-line summary:
`[AUTO-FIXED] [file:line] Problem → what you did`

### Step 4b: Batch-ask about ASK items

Present in ONE AskUserQuestion:

```
I auto-fixed N performance issues. M need your input:

1. [CRITICAL] app/api/users/route.ts:35 — N+1: fetches each user's avatar in a loop
   On a page with 100 users, this makes 101 database queries instead of 2.
   Fix options:
   → A) Eager load with JOIN  B) Add DataLoader  C) Skip

2. [HIGH] lib/reports.ts:112 — Loads entire CSV into memory for processing
   A 50MB report would spike memory to ~200MB. Currently no limit on file size.
   → A) Stream with readline  B) Add file size limit (10MB)  C) Skip

RECOMMENDATION: Fix 1A (simplest, solves it), Fix 2A (streaming handles any size).
```

### Step 4c: Apply user-approved fixes

### Step 4d: Output Summary

#### If OUTPUT_MODE=local

```
## Performance Review: {branch}

Performance Audit: N issues (X auto-fixed, Y asked)

| Tier | Count | Auto-fixed | User-reviewed |
|------|-------|------------|---------------|
| CRITICAL | ... | ... | ... |
| HIGH | ... | ... | ... |
| MEDIUM | ... | ... | ... |

Findings:
- [tier] {file}:{line} — {problem} → {outcome}

Checked: N+1 queries, unbounded data, sequential awaits, bundle size, image optimization,
memory usage, caching, Core Web Vitals impact.
```

#### If OUTPUT_MODE=pr

Post a comment on the PR:

```bash
gh pr comment --body "$(cat <<'EOF'
### Performance review

Performance Audit: N issues (X auto-fixed, Y user-reviewed)

| Tier | Count |
|------|-------|
| CRITICAL | ... |
| HIGH | ... |
| MEDIUM | ... |

**Findings:**
1. [tier] {file}:{line} — {problem} → {outcome}

{link to file and line with full sha1}

Checked: N+1 queries, unbounded data, sequential awaits, bundle size, image optimization,
memory usage, caching, Core Web Vitals impact.

Generated with claudebert/perf-review
EOF
)"
```

**Link format requirements:**
- Must use full git SHA
- Format: `https://github.com/{owner}/{repo}/blob/{full-sha}/{path}#L{start}-L{end}`

```bash
git rev-parse HEAD
gh repo view --json nameWithOwner -q .nameWithOwner
```

If no issues found:

```
### Performance review

No performance issues found. Checked: N+1 queries, unbounded data, sequential awaits,
bundle size, image optimization, memory usage, caching, Core Web Vitals impact.

Generated with claudebert/perf-review
```

---

## Phase 5: Log to Linear

After the review is complete, ask the user:

> **Want me to log these findings to Linear?**
>
> A) **Yes** — create issues in Linear for findings
> B) **No** — just keep the review as-is
>
> RECOMMENDATION: Choose B for medium issues, A for CRITICAL/HIGH findings.

**If yes:**

1. For each finding, create a Linear issue using `save_issue` with:
   - **Title:** `[Perf] {short description}`
   - **Description:** Markdown with file, line, the problem in plain English, expected impact, and recommended fix with tradeoffs
   - **Labels:** use existing labels if available (e.g. `performance`, `optimization`)

2. Print a summary: "Logged N issues to Linear."

---

## Important Rules

1. **Review the diff, not the whole codebase.** Focus on what changed.
2. **Measure, don't guess.** If you can run a quick benchmark or size check, do it. "This might be slow" is weaker than "this queries the DB 100 times for a page that shows 100 items."
3. **Be specific.** File, line number, what's slow, how slow, what it should be instead.
4. **Quantify impact.** "N+1 on a 100-item list = 101 queries" is better than "N+1 detected."
5. **No premature optimization.** Don't flag cold paths, admin-only endpoints, or one-time setup code unless the impact is extreme.
6. **Respect existing patterns.** If the codebase has an established caching/pagination strategy, recommend using it rather than inventing a new one.
7. **Fix-first, not read-only.** AUTO-FIX items are applied directly. ASK items are only applied after user approval.
8. **No emojis in PR comments.**
9. **Link everything.** Every issue needs a file:line reference.
