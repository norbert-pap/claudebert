---
name: security-review
version: 1.0.0
description: |
  Pre-landing security audit. Analyzes diff against the base branch for OWASP Top 10
  vulnerabilities, injection vectors, auth/authz gaps, secrets exposure, and dependency
  risks. Fix-First approach: obvious issues auto-fixed, ambiguous ones batched for your
  decision. Use when asked to "security review", "audit security", "check for vulnerabilities",
  or "security check".
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
<!-- claudebert/security-review -->

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
# Current branch
git branch --show-current

# Diff stats
BASE=$(gh pr view --json baseRefName -q .baseRefName 2>/dev/null || gh repo view --json defaultBranchRef -q .defaultBranchRef.name 2>/dev/null || echo "main")
echo "BASE: $BASE"
git diff $BASE...HEAD --stat
```

---

## Step 1: Intake

Ask one question:

> **Security review on `{_BRANCH}` — what should I do with findings?**
>
> A) **Comment on PR** — post findings as a comment on the pull request
> B) **Report locally** — just tell me what you find, don't post anything
>
> RECOMMENDATION: Choose A if a PR exists, B otherwise.

Store as `OUTPUT_MODE` (one of: `pr`, `local`).

---

## Phase 1: Gather context

1. Read all relevant CLAUDE.md and AGENTS.md files:
   ```bash
   find $(git rev-parse --show-toplevel) -name "CLAUDE.md" -o -name "AGENTS.md" 2>/dev/null
   ```
2. Get the full diff:
   ```bash
   git diff $BASE...HEAD
   ```
3. Get commit history:
   ```bash
   git log $BASE..HEAD --oneline
   ```
4. Identify the technology stack from package.json, Gemfile, requirements.txt, go.mod, etc.
5. Check for existing security configuration (.eslintrc security rules, .snyk, .npmrc, dependabot.yml).

---

## Phase 2: Security Audit

Review every changed file against each axis below. Only flag issues **introduced or modified by this diff** — pre-existing problems are out of scope.

### Three-Tier Boundary System

Classify every finding by tier:

| Tier | Meaning | Action |
|------|---------|--------|
| **CRITICAL** | Exploitable in production as-is | Must fix before merge |
| **HIGH** | Exploitable under realistic conditions | Should fix before merge |
| **MEDIUM** | Defense-in-depth gap, hardening opportunity | Fix or accept with rationale |

Drop anything below MEDIUM. This is a security review, not a style review.

### Axis 1: Injection (OWASP A03)

- **SQL injection:** Raw string interpolation in queries, missing parameterization
- **Command injection:** User input passed to `exec`, `spawn`, `system`, `child_process` without sanitization
- **Template injection:** User input rendered in server-side templates without escaping
- **Path traversal:** User input used in file paths without normalization (e.g., `../../../etc/passwd`)
- **Log injection:** User input written to logs without sanitization (can forge log entries)
- **Header injection:** User input in HTTP headers (CRLF injection)

**What to look for in the diff:**
```
# Dangerous patterns (language-agnostic)
- String concatenation/interpolation in database queries
- User input flowing to shell commands
- User input in file system operations
- `eval()`, `Function()`, `exec()` with dynamic input
- `dangerouslySetInnerHTML` or equivalent with user data
```

### Axis 2: Broken Authentication & Session Management (OWASP A07)

- Passwords stored in plaintext or weak hash (MD5, SHA1 without salt)
- Missing rate limiting on auth endpoints
- Session tokens in URLs or logs
- Missing session invalidation on password change/logout
- JWT without expiry, weak signing algorithm (none, HS256 with weak secret)
- Missing CSRF protection on state-changing endpoints

### Axis 3: Broken Access Control (OWASP A01)

- Missing authorization checks on endpoints (can user A access user B's data?)
- IDOR (Insecure Direct Object Reference) — user-supplied IDs used without ownership check
- Missing role checks on admin/privileged endpoints
- Client-side-only authorization (no server-side enforcement)
- Overly permissive CORS configuration (`Access-Control-Allow-Origin: *` with credentials)

### Axis 4: Security Misconfiguration (OWASP A05)

- Debug mode enabled in production config
- Default credentials or API keys in code
- Verbose error messages exposing internals (stack traces, query details)
- Missing security headers (CSP, HSTS, X-Frame-Options, X-Content-Type-Options)
- Overly permissive file permissions

### Axis 5: Sensitive Data Exposure (OWASP A02)

- Secrets, API keys, tokens, passwords hardcoded in source
- Sensitive data in logs (PII, credentials, tokens)
- Missing encryption for data at rest or in transit
- Sensitive data in URLs (query parameters)
- `.env` files, credential files, or private keys committed

**Scan for secrets:**
```bash
# Check diff for common secret patterns
git diff $BASE...HEAD | grep -iE '(password|secret|token|api.?key|private.?key|credential)\s*[:=]' || true
git diff $BASE...HEAD | grep -E '(AKIA[0-9A-Z]{16}|sk-[a-zA-Z0-9]{20,}|ghp_[a-zA-Z0-9]{36})' || true
```

### Axis 6: Input Validation (OWASP A03/A08)

- Missing validation on user input at API boundaries
- Accepting unbounded input (no max length on strings, no limits on arrays/uploads)
- Type coercion vulnerabilities (e.g., `"0" == false` in loose comparisons)
- Missing content-type validation on file uploads
- ReDoS-vulnerable regular expressions

### Axis 7: Dependency Risk

```bash
# Check for known vulnerabilities
cd $(git rev-parse --show-toplevel)
npm audit --json 2>/dev/null | head -100 || true
pip-audit 2>/dev/null | head -50 || true
bundle audit check 2>/dev/null | head -50 || true
```

**Triage decision tree for dependency vulnerabilities:**
1. Is the vulnerable code path reachable from your application? → If no, document and skip.
2. Is there a patched version available? → If yes, recommend upgrade.
3. Is the vulnerability in a dev-only dependency? → If yes, lower priority.
4. Can the vulnerability be mitigated without upgrading? → Document the mitigation.

---

## Phase 3: Score, Classify & Fix

For each finding, assign tier (CRITICAL / HIGH / MEDIUM) and classify as:

**AUTO-FIX** (apply directly, no question):
- Missing input sanitization with clear fix (e.g., parameterized query)
- Hardcoded secrets that should be env vars
- Missing `httpOnly` / `secure` flags on cookies
- `dangerouslySetInnerHTML` or equivalent with user input
- Missing Content-Security-Policy or other security headers in new code

**ASK** (needs user decision):
- Architectural auth/authz gaps
- CORS policy changes
- Rate limiting strategy
- Encryption approach for sensitive data
- Dependency upgrade with potential breaking changes
- Any fix that changes API behavior

---

## Phase 4: Apply Fixes & Output

### Step 4a: Auto-fix all AUTO-FIX items

Apply each fix directly using Edit tool. For each one, output a one-line summary:
`[AUTO-FIXED] [file:line] Vulnerability → what you did`

### Step 4b: Batch-ask about ASK items

If there are ASK items remaining, present them in ONE AskUserQuestion:

Example format:
```
I auto-fixed N security issues. M need your input:

1. [CRITICAL] app/api/users/route.ts:42 — No authorization check on user data endpoint
   Any logged-in user can read any other user's data by changing the ID in the URL.
   Fix: Add ownership check comparing session user ID to requested resource
   → A) Fix  B) Skip

2. [HIGH] lib/auth.ts:88 — JWT signed with HS256 using short secret
   An attacker could brute-force the signing key and forge tokens.
   Fix: Switch to RS256 with proper key pair
   → A) Fix  B) Skip

RECOMMENDATION: Fix both — #1 is a direct data exposure, #2 is a token forgery risk.
```

### Step 4c: Apply user-approved fixes

### Step 4d: Output Summary

#### If OUTPUT_MODE=local

```
## Security Review: {branch}

Security Audit: N issues (X auto-fixed, Y asked)

| Tier | Count | Auto-fixed | User-reviewed |
|------|-------|------------|---------------|
| CRITICAL | ... | ... | ... |
| HIGH | ... | ... | ... |
| MEDIUM | ... | ... | ... |

Findings:
- [tier] {file}:{line} — {vulnerability} → {outcome}

Axes checked: Injection, Auth, Access Control, Misconfiguration, Data Exposure, Input Validation, Dependencies.
```

#### If OUTPUT_MODE=pr

Post a comment on the PR:

```bash
gh pr comment --body "$(cat <<'EOF'
### Security review

Security Audit: N issues (X auto-fixed, Y user-reviewed)

| Tier | Count |
|------|-------|
| CRITICAL | ... |
| HIGH | ... |
| MEDIUM | ... |

**Findings:**
1. [tier] {file}:{line} — {vulnerability} → {outcome}

{link to file and line with full sha1}

Axes checked: Injection, Auth, Access Control, Misconfiguration, Data Exposure, Input Validation, Dependencies.

Generated with claudebert/security-review
EOF
)"
```

**Link format requirements:**
- Must use full git SHA (not HEAD or short sha)
- Format: `https://github.com/{owner}/{repo}/blob/{full-sha}/{path}#L{start}-L{end}`

```bash
git rev-parse HEAD
gh repo view --json nameWithOwner -q .nameWithOwner
```

If no issues found:

```
### Security review

No security issues found. Checked: Injection, Auth, Access Control, Misconfiguration, Data Exposure, Input Validation, Dependencies.

Generated with claudebert/security-review
```

---

## Phase 5: Log to Linear

After the review is complete, ask the user:

> **Want me to log these findings to Linear?**
>
> A) **Yes** — create issues in Linear for findings
> B) **No** — just keep the review as-is
>
> RECOMMENDATION: Choose B for minor issues, A for CRITICAL/HIGH findings.

**If yes:**

1. For each finding, create a Linear issue using `save_issue` with:
   - **Title:** `[Security] {short description}`
   - **Description:** Markdown with file, line, vulnerability type, tier, exploitation scenario, and recommended fix
   - **Labels:** use existing labels if available (e.g. `security`, `bug`)

2. Print a summary: "Logged N issues to Linear."

---

## Important Rules

1. **Review the diff, not the whole codebase.** Focus on what changed.
2. **Quality over quantity.** A real CRITICAL finding is worth more than 10 speculative MEDIUMs.
3. **Be specific.** File, line number, what's exploitable, how an attacker would use it.
4. **Explain the attack.** For each finding, describe in one sentence how it could be exploited.
5. **No false alarms.** If you're not confident it's exploitable, drop it.
6. **Respect existing security patterns.** If the codebase uses a particular auth/validation pattern consistently, don't flag correct usage of that pattern.
7. **Fix-first, not read-only.** AUTO-FIX items are applied directly. ASK items are only applied after user approval.
8. **No emojis in PR comments.** Keep it professional and scannable.
9. **Link everything.** Every issue needs a file:line reference.
