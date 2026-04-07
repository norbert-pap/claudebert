---
name: sync
version: 2.0.0
description: |
  Check upstream sources for new skills and techniques relevant to claudebert.
  Fetches recent commits, filters for relevance, presents cherry-pick recommendations.
  Use when asked to "sync", "check for updates", or "what's new in agent skills".
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
<!-- claudebert/sync -->

## Preamble (run first)

```bash
_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
echo "BRANCH: $_BRANCH"
mkdir -p ~/.claudebert
```

---

## Watchlist

Stored in `~/.claudebert/sync-watchlist.json`. If it doesn't exist, create it with these defaults:

| Source | Repo | What to watch |
|--------|------|---------------|
| gstack | garrytan/gstack | Skill content, cognitive patterns, browse changes |
| agent-skills | addyosmani/agent-skills | Security, perf, debugging, code review, frontend |
| anthropic-skills | anthropics/skills | Spec changes, new reference skills |
| awesome-agent-skills | VoltAgent/awesome-agent-skills | High-star new skills |
| awesome-claude-toolkit | rohitg00/awesome-claude-code-toolkit | New tools, plugins |
| designpowers | Owl-Listener/designpowers | Cognitive a11y, motion, tokens, voice, responsive |

Users can say "add {repo} to watchlist" or "remove {repo} from watchlist".

---

## Step 1: Load state and check sources

```bash
SYNC_FILE=~/.claudebert/sync-state.json
if [ -f "$SYNC_FILE" ]; then cat "$SYNC_FILE"; else echo '{"last_sync": "never"}'; fi
```

For each source, fetch recent commits:

```bash
# Use last_sync date, or 7 days ago if "never"
SINCE=$(date -v-7d -u +%Y-%m-%dT%H:%M:%SZ 2>/dev/null || date -d '7 days ago' -u +%Y-%m-%dT%H:%M:%SZ)
gh api "repos/{repo}/commits?since=$SINCE&per_page=20" --jq '.[].commit | "- " + (.message | split("\n")[0])' 2>/dev/null | head -15
```

Collect into a structured list per source.

---

## Step 2: Filter for relevance

**Only surface changes relevant to claudebert's review pipeline.** Drop everything else.

| Relevant | Not relevant |
|----------|-------------|
| Skill content changes (prompts, workflows) | Test infrastructure, evals |
| Review methodology, cognitive patterns | Upgrade systems, contributor modes |
| Browse binary/source improvements | Framework-specific tooling |
| Security/perf/a11y techniques | Meta skills, context engineering |
| New skills filling pipeline gaps | Skills for define/plan phase (superpowers covers this) |
| Spec format changes (anthropic) | General tools/plugins |

For awesome lists: only surface repos with 50+ stars and recent activity.

---

## Step 3: Present recommendations

For each relevant change, present via AskUserQuestion:

> **{source}: {change title}**
>
> {1-2 sentence description}
> **Affects:** `claudebert/{skill}` (or "new skill candidate")
>
> A) **Cherry-pick** — apply this improvement
> B) **Skip** — not relevant
> C) **Defer** — interesting but not now
>
> RECOMMENDATION: {A/B/C} because {reason}

Apply cherry-picks immediately when approved. When cherry-picking from gstack, replace `gstack` → `claudebert` and `.gstack/` → `.claudebert/`, remove gstack-specific features (contributor mode, Greptile, session tracking).

---

## Step 4: Update state and summarize

```bash
cat > ~/.claudebert/sync-state.json << 'EOF'
{
  "last_sync": "{today YYYY-MM-DD}",
  "sources_checked": {N},
  "changes_applied": [{list}],
  "changes_deferred": [{list}]
}
EOF
```

Print summary:

```
## Sync Complete — {date}

Sources checked: {N} | Relevant changes: {N} | Applied: {N} | Deferred: {N}

Applied:
- {change} → claudebert/{skill}

Deferred (re-run /sync to revisit):
- {change}
```

If changes were applied: `cd ~/.claude/skills/claudebert && git add -A && git status`

---

## Important Rules

1. **Signal over noise.** 3 good recommendations > 15 noise items.
2. **Respect existing quality.** Don't replace well-structured skills with lower-quality upstream.
3. **Adapt, don't copy.** Match claudebert's conventions (Fix-First, AskUserQuestion format, severity labels).
4. **Deferred items resurface.** On next sync, re-present deferred items if upstream changed further.
