---
name: ship
description: |
  Ship workflow: merge base branch, run tests, review diff, bump VERSION,
  update CHANGELOG, commit, push, create PR. Use when asked to "ship", "deploy",
  "push to main", "create a PR", or "get it deployed".
triggers:
  - ship it
  - create a pr
  - push to main
  - deploy this
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - Agent
  - AskUserQuestion
---

# /ship — Ship Workflow

Fully automated ship workflow. Do NOT ask for confirmation at each step — run straight through and output the PR URL at the end.

**Only stop for:**
- On the base branch (abort)
- Merge conflicts that can't be auto-resolved
- In-branch test failures
- MINOR or MAJOR version bump needed (ask)

---

## Step 0: Detect base branch

```bash
git remote get-url origin 2>/dev/null
```

Determine the base branch:
1. `gh pr view --json baseRefName -q .baseRefName` — if succeeds, use it
2. `gh repo view --json defaultBranchRef -q .defaultBranchRef.name` — if succeeds, use it
3. Git fallback: `git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's|refs/remotes/origin/||'`
4. Default to `main`

If on the base branch → **abort**: "You're on the base branch. Ship from a feature branch."

---

## Step 1: Pre-flight

```bash
git status
git diff <base>...HEAD --stat
git log <base>..HEAD --oneline
```

---

## Step 2: Merge base branch (BEFORE tests)

```bash
git fetch origin <base> && git merge origin/<base> --no-edit
```

Auto-resolve simple conflicts (VERSION, CHANGELOG ordering). Stop on complex conflicts.

---

## Step 3: Run tests

Run the test suite. Detect the framework first:

```bash
[ -f package.json ] && (grep -q '"vitest"' package.json && echo "vitest" || grep -q '"jest"' package.json && echo "jest") || true
[ -f Gemfile ] && echo "rspec/minitest"
[ -f go.mod ] && echo "go test"
[ -f pyproject.toml ] || [ -f pytest.ini ] && echo "pytest"
```

Run tests and capture output. On failure, check whether it's in-branch or pre-existing:
```bash
git diff origin/<base>...HEAD --name-only
```
- **In-branch failure** → STOP. Show the failure. Developer must fix.
- **Pre-existing failure** → Ask: fix now, add TODO, or skip.

---

## Step 4: Diff review

Spawn a subagent to review the diff in isolation (prevents context rot on large PRs):

```
Agent: Review git diff origin/<base>...HEAD for: (1) obvious bugs, (2) missing error handling at system boundaries, (3) security issues with user input. Output findings as a bulleted list. Max 10 items.
```

Auto-fix: dead code, N+1 queries, stale comments.
Stop for: architecture concerns, security issues needing user judgment.

---

## Step 5: VERSION bump with drift detection

Before bumping, classify state by comparing `VERSION` vs base branch and `package.json`:

```bash
BASE_VERSION=$(git show origin/<base>:VERSION 2>/dev/null | tr -d '\r\n[:space:]' || echo "0.0.0")
CURRENT_VERSION=$(cat VERSION 2>/dev/null | tr -d '\r\n[:space:]' || echo "0.0.0")
PKG_VERSION=""
PKG_EXISTS=0
if [ -f package.json ]; then
  PKG_EXISTS=1
  PKG_VERSION=$(node -e 'const p=require("./package.json");process.stdout.write(p.version||"")' 2>/dev/null \
    || bun -e 'const p=require("./package.json");process.stdout.write(p.version||"")' 2>/dev/null)
fi
echo "BASE: $BASE_VERSION  VERSION: $CURRENT_VERSION  package.json: ${PKG_VERSION:-<none>}"

if [ "$CURRENT_VERSION" = "$BASE_VERSION" ]; then
  if [ "$PKG_EXISTS" = "1" ] && [ -n "$PKG_VERSION" ] && [ "$PKG_VERSION" != "$CURRENT_VERSION" ]; then
    echo "STATE: DRIFT_UNEXPECTED"
  else
    echo "STATE: FRESH"
  fi
else
  if [ "$PKG_EXISTS" = "1" ] && [ -n "$PKG_VERSION" ] && [ "$PKG_VERSION" != "$CURRENT_VERSION" ]; then
    echo "STATE: DRIFT_STALE_PKG"
  else
    echo "STATE: ALREADY_BUMPED"
  fi
fi
```

**Dispatch on STATE:**
- **FRESH** → proceed with bump below
- **ALREADY_BUMPED** → skip bump, reuse `CURRENT_VERSION`
- **DRIFT_STALE_PKG** → a prior ship bumped `VERSION` but failed to sync `package.json`. Run repair block, do NOT re-bump:
  ```bash
  REPAIR=$(cat VERSION | tr -d '\r\n[:space:]')
  node -e 'const fs=require("fs"),p=require("./package.json");p.version=process.argv[1];fs.writeFileSync("package.json",JSON.stringify(p,null,2)+"\n")' "$REPAIR"
  echo "Drift repaired: package.json synced to $REPAIR"
  ```
- **DRIFT_UNEXPECTED** → stop. `package.json` was edited manually bypassing ship. Reconcile and re-run.

**Bump logic (FRESH only):**
- MICRO: < 50 lines changed, trivial tweaks
- PATCH: 50+ lines, no feature signals
- MINOR: new routes/pages/migrations, 500+ lines → **ask user**
- MAJOR: breaking changes → **ask user**

Write to both files:
```bash
echo "$NEW_VERSION" > VERSION
node -e 'const fs=require("fs"),p=require("./package.json");p.version=process.argv[1];fs.writeFileSync("package.json",JSON.stringify(p,null,2)+"\n")' "$NEW_VERSION"
```

---

## Step 6: CHANGELOG

Read the existing `CHANGELOG.md` format. Generate an entry from `git log <base>..HEAD --oneline`. Group by feat/fix/chore. Prepend the new entry.

---

## Step 7: Commit, push, PR

```bash
git add -p  # stage only intentional changes
git commit -m "chore: release v$NEW_VERSION"
git push -u origin $(git branch --show-current)
gh pr create --title "..." --body "..."
```

PR body must include: summary of changes, test results, version bump rationale.

Output the PR URL.
