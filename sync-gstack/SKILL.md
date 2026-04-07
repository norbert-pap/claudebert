---
name: sync-gstack
version: 1.0.0
description: |
  Check gstack upstream for updates and cherry-pick relevant changes into claudebert skills.
  Fetches the gstack changelog, compares against last sync date, reads changed skill files,
  and presents a structured diff with recommendations. Use when asked to "sync gstack",
  "check gstack updates", "update from gstack", or periodically to stay current.
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - AskUserQuestion
  - WebFetch
  - Agent
---

## Preamble (run first)

```bash
_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
echo "BRANCH: $_BRANCH"
```

---

## Step 1: Check last sync

```bash
SYNC_FILE=~/.claudebert/gstack-sync.json
if [ -f "$SYNC_FILE" ]; then
  cat "$SYNC_FILE"
else
  echo '{"last_sync_date": "never", "last_sync_version": "unknown"}'
fi
```

Note the `last_sync_date` and `last_sync_version` for later comparison.

---

## Step 2: Fetch gstack changelog

Fetch the current gstack changelog from GitHub:

```bash
gh api repos/garrytan/gstack/contents/CHANGELOG.md --jq '.content' | base64 -d
```

Parse the changelog. Identify all versions released AFTER `last_sync_date`. If `last_sync_date` is "never", show the last 3 versions only.

---

## Step 3: Identify relevant changes

For each new changelog entry, categorize as:

| Category | Relevant? | Why |
|----------|-----------|-----|
| Skill content changes (prompts, workflow, checklist) | **YES** | Core value — these improve review/QA quality |
| Cognitive patterns, review methodology | **YES** | Improves review depth |
| Bug fixes in browse binary | **NO** | We use gstack's browse binary directly |
| Test infrastructure, evals | **NO** | gstack-internal tooling |
| Upgrade/update system | **NO** | claudebert doesn't use gstack's upgrade system |
| Contributor mode | **NO** | claudebert doesn't use contributor mode |
| Greptile integration | **NO** | We don't use Greptile |
| Ship/retro skills | **NO** | We don't have these skills |
| Completeness Principle / Boil the Lake | **YES** | Keep the philosophy — adapt branding to claudebert |
| New skills | **MAYBE** | Evaluate if they fit claudebert's workflow |

---

## Step 4: Fetch changed skill files

For each relevant change, fetch the current gstack skill file:

```bash
gh api repos/garrytan/gstack/contents/{skill-dir}/SKILL.md --jq '.content' | base64 -d
```

Compare with the corresponding claudebert skill. The mapping is:
- `gstack/plan-ceo-review` → `claudebert/prod-review`
- `gstack/plan-eng-review` → `claudebert/eng-review`
- `gstack/review` → `claudebert/code-review`
- `gstack/qa` → `claudebert/qa`
- `gstack/design-review` → `claudebert/design-review`
- `gstack/browse` → `claudebert/browse`
- `gstack/setup-browser-cookies` → `claudebert/setup-browser-cookies`

Read each claudebert skill:
```bash
cat ~/.claude/skills/claudebert/{skill}/SKILL.md
```

---

## Step 5: Present cherry-pick recommendations

For each relevant change, present as an AskUserQuestion:

> **gstack {version}: {change title}**
>
> {1-2 sentence description of what changed and why it matters}
>
> **Affected skill:** `claudebert/{skill}`
>
> A) **Cherry-pick** — apply this change to our skill
> B) **Skip** — not relevant for our use case
> C) **Defer** — interesting but not now
>
> RECOMMENDATION: {A or B} because {reason}

Process one change at a time. For changes the user approves (A), apply them immediately using Edit/Write tools.

**Important adaptation rules when cherry-picking:**
- Replace all `gstack` references with `claudebert`
- Replace all `.gstack/` paths with `.claudebert/`
- Replace `gstack-slug` with inline slug computation
- Keep Completeness Principle / Boil the Lake philosophy — adapt `CC+gstack` references to `Claude Code`
- Remove Contributor Mode sections
- Remove update check / upgrade preamble blocks
- Remove session tracking
- Remove Greptile integration
- Keep the skill's existing preamble (simple `_BRANCH` detection)
- Make framework-specific language generic (e.g., `ActiveRecord` → generic DB, `Rails` → generic)
- Keep test philosophy ("100% coverage is the vibe code unlock") when present

---

## Step 6: Update sync state

After all changes are processed:

```bash
mkdir -p ~/.claudebert
cat > ~/.claudebert/gstack-sync.json << 'EOF'
{
  "last_sync_date": "{today's date YYYY-MM-DD}",
  "last_sync_version": "{latest gstack version}",
  "changes_applied": ["{list of changes applied}"],
  "changes_skipped": ["{list of changes skipped}"],
  "changes_deferred": ["{list of changes deferred}"]
}
EOF
```

---

## Step 7: Summary

Print a summary:

```
## gstack Sync Complete

Last sync: {previous date} → {today}
gstack version: {previous} → {current}

Applied: N changes
- {change 1}
- {change 2}

Skipped: N changes
Deferred: N changes (re-run /sync-gstack to revisit)
```
