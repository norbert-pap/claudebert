---
name: sync
version: 1.0.0
description: |
  Check upstream sources for new skills, techniques, and updates relevant to claudebert.
  Fetches changelogs, diffs skill files, and presents structured cherry-pick recommendations.
  Sources: gstack, addyosmani/agent-skills, anthropics/skills, awesome lists, and custom
  watchlist. Use when asked to "sync", "check for updates", "what's new in agent skills",
  or run on a weekly schedule.
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - AskUserQuestion
  - WebFetch
  - WebSearch
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

The watchlist defines which upstream sources to check. Each source has a type and a relevance filter.

**Default watchlist** (stored in `~/.claudebert/sync-watchlist.json`):

```json
{
  "sources": [
    {
      "id": "gstack",
      "type": "github-repo",
      "repo": "garrytan/gstack",
      "path": "",
      "description": "Original upstream for claudebert skills",
      "skill_mapping": {
        "plan-ceo-review": "prod-review",
        "plan-eng-review": "eng-review",
        "review": "code-review",
        "qa": "qa",
        "design-review": "design-review",
        "browse": "browse",
        "setup-browser-cookies": "setup-browser-cookies"
      },
      "adaptation_rules": [
        "Replace gstack → claudebert",
        "Replace .gstack/ → .claudebert/",
        "Remove Contributor Mode, session tracking, Greptile, upgrade preamble",
        "Keep Completeness Principle philosophy"
      ]
    },
    {
      "id": "agent-skills",
      "type": "github-repo",
      "repo": "addyosmani/agent-skills",
      "path": "skills/",
      "description": "Production-grade engineering skills by Addy Osmani",
      "watch_for": ["security-and-hardening", "performance-optimization", "debugging-and-error-recovery", "code-review-and-quality", "shipping-and-launch", "frontend-ui-engineering"]
    },
    {
      "id": "anthropic-skills",
      "type": "github-repo",
      "repo": "anthropics/skills",
      "path": "",
      "description": "Anthropic official skill spec and reference skills"
    },
    {
      "id": "awesome-agent-skills",
      "type": "github-repo",
      "repo": "VoltAgent/awesome-agent-skills",
      "path": "",
      "description": "1000+ community-curated agent skills"
    },
    {
      "id": "awesome-claude-toolkit",
      "type": "github-repo",
      "repo": "rohitg00/awesome-claude-code-toolkit",
      "path": "",
      "description": "Comprehensive Claude Code toolkit — skills, plugins, agents"
    },
    {
      "id": "designpowers",
      "type": "github-repo",
      "repo": "Owl-Listener/designpowers",
      "path": "skills/",
      "description": "Multi-agent design system — cognitive a11y, motion, tokens, voice, responsive, inclusive personas",
      "watch_for": ["cognitive-accessibility", "motion-choreography", "token-architecture", "voice-and-tone", "responsive-patterns", "inclusive-personas", "interaction-design", "adaptive-interfaces", "design-taste"]
    }
  ]
}
```

### Managing the watchlist

Users can add sources:
- "Add {repo} to my sync watchlist" → append to `sync-watchlist.json`
- "Remove {repo} from watchlist" → remove from `sync-watchlist.json`
- "Show my watchlist" → print current sources

---

## Step 0: Load sync state

```bash
SYNC_FILE=~/.claudebert/sync-state.json
if [ -f "$SYNC_FILE" ]; then
  cat "$SYNC_FILE"
else
  echo '{"last_sync": "never", "sources": {}}'
fi
```

```bash
# Load or initialize watchlist
WATCHLIST=~/.claudebert/sync-watchlist.json
if [ ! -f "$WATCHLIST" ]; then
  echo "No watchlist found — will create with defaults"
fi
```

If the watchlist doesn't exist, create it with the default sources above.

Note the last sync date for each source.

---

## Step 1: Check each source for changes

For each source in the watchlist, check what changed since last sync.

### GitHub repo sources

```bash
# Get commits since last sync date
gh api "repos/{repo}/commits?since={last_sync_date}&per_page=30" --jq '.[].commit | {date: .author.date, message: .message}' 2>/dev/null
```

If `last_sync_date` is "never", fetch the last 10 commits only.

**For repos with a CHANGELOG.md:**
```bash
gh api repos/{repo}/contents/CHANGELOG.md --jq '.content' | base64 -d 2>/dev/null | head -100
```

**For repos without a changelog** (awesome lists, etc.):
```bash
# Get recent commit messages — these ARE the changelog
gh api "repos/{repo}/commits?per_page=15" --jq '.[].commit.message' 2>/dev/null | head -30
```

### Collect all changes into a structured list

For each source, produce:
```
Source: {id} ({repo})
Changes since: {last_sync_date}
New commits: N

Potentially relevant:
- {commit message / changelog entry}
- {commit message / changelog entry}
```

---

## Step 2: Relevance filter

Not every upstream change matters. Filter by relevance to claudebert:

### For gstack (direct upstream)

| Category | Relevant? |
|----------|-----------|
| Skill content changes (prompts, workflow, checklist) | YES |
| Cognitive patterns, review methodology | YES |
| Browse binary bug fixes | YES (rebuild needed) |
| Browse source changes | YES |
| Test infrastructure, evals | NO |
| Upgrade/update system | NO |
| Contributor mode | NO |
| Greptile integration | NO |
| New skills | MAYBE — evaluate fit |

### For agent-skills

| Category | Relevant? |
|----------|-----------|
| Changes to watched skills (security, perf, debugging, etc.) | YES |
| New skills in lifecycle phases claudebert covers | MAYBE |
| Changes to define/plan phase skills | NO (superpowers covers this) |
| Meta skills, context engineering | NO |
| Reference checklists | YES — could update our skills |

### For anthropic-skills

| Category | Relevant? |
|----------|-----------|
| Spec changes (SKILL.md format) | YES — format compliance |
| New reference skills | MAYBE — evaluate quality |
| Tooling changes | NO |

### For awesome lists

| Category | Relevant? |
|----------|-----------|
| New skills with 100+ stars in review/QA/security/perf | YES — evaluate |
| New skill registries or directories | YES — add to watchlist |
| Framework-specific skills | NO (unless user's stack) |
| General tools/plugins | NO |

**Drop anything that doesn't pass the filter.** Only present relevant changes to the user.

---

## Step 3: Deep-dive relevant changes

For each change that passed the relevance filter, fetch the actual content:

### Skill file changes (gstack, agent-skills)

```bash
# Fetch the upstream skill file
gh api repos/{repo}/contents/{path}/SKILL.md --jq '.content' | base64 -d 2>/dev/null
```

Compare with the corresponding claudebert skill (if a mapping exists):
```bash
cat ~/.claude/skills/claudebert/{mapped-skill}/SKILL.md
```

Produce a structured diff summary:
- What was added/changed/removed
- Is it an improvement, lateral move, or regression?
- Does it conflict with claudebert's existing approach?

### New skills (no existing mapping)

Read the full skill file. Evaluate:
1. Does claudebert already cover this? → Skip
2. Does it fill a gap in the pipeline? → Recommend as new skill
3. Does it improve an existing skill? → Recommend as cherry-pick
4. Is it high quality? (structured, tested, not just a prompt dump) → Flag quality

### Awesome list entries

For new entries with high star counts:
```bash
# Check the repo
gh api repos/{owner}/{repo} --jq '{stars: .stargazers_count, description: .description, updated: .updated_at}'
```

Only surface repos with 50+ stars and recent activity (updated in last 30 days).

---

## Step 4: Present recommendations

Group findings by action type and present via AskUserQuestion.

### New technique / improvement for existing skill

> **{source}: {change title}**
>
> {1-2 sentence plain-English description}
>
> **Affects:** `claudebert/{skill}`
> **What changed:** {specific diff summary}
>
> A) **Cherry-pick** — apply this improvement to our skill
> B) **Skip** — not relevant for us
> C) **Defer** — interesting but not now
>
> RECOMMENDATION: {A/B/C} because {reason}

### New skill candidate

> **{source}: New skill — {name}**
>
> {what it does, 2-3 sentences}
>
> **Gap it fills:** {where it fits in the claudebert pipeline}
> **Quality:** {high/medium/low based on structure and depth}
> **Stars:** {if from awesome list}
>
> A) **Add to claudebert** — create a new skill based on this
> B) **Watch** — add to watchlist for future evaluation
> C) **Skip** — not a fit
>
> RECOMMENDATION: {A/B/C} because {reason}

### New source discovered

> **New skill source: {name}**
>
> {description}
> **URL:** {url}
>
> A) **Add to watchlist** — check this source on future syncs
> B) **Skip** — not useful
>
> RECOMMENDATION: {A/B} because {reason}

Process recommendations one at a time. Apply cherry-picks immediately when approved.

**Adaptation rules when cherry-picking from gstack:**
- Replace all `gstack` references with `claudebert`
- Replace `.gstack/` paths with `.claudebert/`
- Remove Contributor Mode, session tracking, Greptile, upgrade preamble
- Keep Completeness Principle philosophy
- Make framework-specific language generic
- Keep the skill's existing preamble

**Adaptation rules when cherry-picking from agent-skills:**
- Adapt to claudebert's Fix-First approach where applicable
- Match claudebert's AskUserQuestion format
- Add Linear logging phase if the skill produces findings
- Keep the diagnostic decision trees and anti-rationalization tables (these are high-value)

---

## Step 5: Web scan (optional, on request)

If the user asks for a broader scan or says "what's new out there":

```
WebSearch: "claude code skills" new 2026
WebSearch: "agent skills" new techniques 2026
WebSearch: site:reddit.com/r/ClaudeCode skills
```

Summarize top 5 most interesting finds. For each, evaluate fit with claudebert and recommend watchlist additions.

Also check:
- skillsmp.com for trending skills
- Vercel skills.sh for new popular packages
- Simon Willison's blog for recent skills coverage

---

## Step 6: Update sync state

After all recommendations are processed:

```bash
cat > ~/.claudebert/sync-state.json << 'SYNCEOF'
{
  "last_sync": "{today YYYY-MM-DD}",
  "sources": {
    "gstack": {
      "last_checked": "{today}",
      "last_version": "{version}",
      "changes_applied": [],
      "changes_skipped": [],
      "changes_deferred": []
    },
    "agent-skills": {
      "last_checked": "{today}",
      "last_commit": "{sha}",
      "changes_applied": [],
      "changes_skipped": [],
      "changes_deferred": []
    }
  }
}
SYNCEOF
```

Fill in actual values for each source checked.

---

## Step 7: Summary

```
## Sync Complete

Last sync: {previous date} → {today}
Sources checked: {N}

| Source | Changes Found | Applied | Skipped | Deferred |
|--------|--------------|---------|---------|----------|
| gstack | N | N | N | N |
| agent-skills | N | N | N | N |
| anthropic-skills | N | N | N | N |
| awesome lists | N | N | N | N |

### Applied
- {change 1} → claudebert/{skill}
- {change 2} → claudebert/{skill}

### Deferred (re-run /sync to revisit)
- {change 1}

### New watchlist additions
- {source 1}

Next recommended sync: {1 week from today}
```

If changes were applied, remind:
```bash
cd ~/.claude/skills/claudebert && git add -A && git status
```

---

## Scheduling

To run this weekly, use the `/schedule` skill:

```
/schedule create "weekly-sync" --cron "0 9 * * 1" --prompt "Run /sync and save the report to ~/.claudebert/sync-reports/{date}.md. If there are cherry-pick worthy changes, list them clearly."
```

This runs every Monday at 9am and saves a report. The user reviews deferred items and cherry-picks on their own schedule.

---

## Important Rules

1. **Signal over noise.** Only surface changes that are genuinely useful to claudebert. 3 good recommendations > 15 "might be interesting" items.
2. **Respect existing quality.** Don't recommend replacing a well-structured claudebert skill with a lower-quality upstream version just because it's newer.
3. **Adaptation is required.** Never blindly copy upstream content — adapt to claudebert's conventions (Fix-First, AskUserQuestion format, Linear logging, severity tiers).
4. **Deferred items persist.** Changes marked "defer" should resurface on the next sync.
5. **Track what was skipped.** If a change was skipped with reason, don't recommend it again unless the upstream version has changed further.
6. **Web scan is opt-in.** Don't run web searches by default — they're slow and noisy. Only when the user asks for a broader scan.
7. **Commit after applying changes.** Remind the user to commit to the claudebert repo after cherry-picks.
