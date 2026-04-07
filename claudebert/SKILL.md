---
name: claudebert
version: 1.0.0
description: |
  Single entrypoint for the full claudebert workflow. Asks where you are in the
  process and routes to the right skill. Use when asked to run "claudebert",
  "start the flow", "what's next", or "run the pipeline".
allowed-tools:
  - AskUserQuestion
  - Bash
  - Skill
---
<!-- claudebert — workflow orchestrator -->

## Preamble (run first)

```bash
_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
echo "BRANCH: $_BRANCH"
```

---

## Session State

claudebert skills share context through a session state file. The orchestrator initializes it; each skill reads it at start and appends findings at end. This means code-review knows what eng-review decided, security-review knows what code-review found, and ship knows what every prior skill flagged.

### Initialize session state

```bash
mkdir -p .claudebert
SESSION_FILE=".claudebert/session-state.md"
if [ ! -f "$SESSION_FILE" ] || [ "$(head -1 "$SESSION_FILE" 2>/dev/null)" != "# claudebert session — $_BRANCH" ]; then
  cat > "$SESSION_FILE" << STATEEOF
# claudebert session — $_BRANCH
Started: $(date +%Y-%m-%d\ %H:%M)

## Decisions
<!-- Each skill appends its key decisions here -->

## Findings
<!-- Each skill appends its findings summary here -->

## Open Questions
<!-- Unresolved items that later skills should be aware of -->
STATEEOF
  echo "Session state initialized: $SESSION_FILE"
else
  echo "Session state exists: $SESSION_FILE"
  cat "$SESSION_FILE"
fi
```

If a session state already exists for this branch, show it — the user may be continuing a pipeline.

---

## Step 1: Where are you?

Ask one question using AskUserQuestion:

> **claudebert on `{_BRANCH}` — where are you in the process?**
>
> A) **Product review** — I have an idea or spec to challenge and scope
> B) **Eng review** — scope is set, need to lock in the execution plan
> C) **Code review** — implementation is done, review the diff
> D) **Security review** — check for vulnerabilities before merge
> E) **Perf review** — check for performance issues before merge
> F) **QA** — code is reviewed, test functionality on the live site
> G) **Design review** — test visual design on the live site
> H) **Ship** — run pre-launch checklist, get go/no-go
> I) **Debug** — systematic triage of a bug or test failure
>
> RECOMMENDATION: Pick where you are right now.

---

## Step 2: Route

Based on the answer, invoke the corresponding skill:

- **A** → invoke `/prod-review`
- **B** → invoke `/eng-review`
- **C** → invoke `/code-review`
- **D** → invoke `/security-review`
- **E** → invoke `/perf-review`
- **F** → invoke `/qa`
- **G** → invoke `/design-review`
- **H** → invoke `/ship`
- **I** → invoke `/debug`

Use the Skill tool to invoke the selected skill. Pass through any additional context the user provided.
