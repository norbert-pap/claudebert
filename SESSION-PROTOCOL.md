# Session State Protocol

claudebert skills share context through `.claudebert/session-state.md`. This file accumulates decisions, findings, and open questions as the user moves through the pipeline.

## For every skill: Read at start

After the preamble, check for existing session state:

```bash
SESSION_FILE=".claudebert/session-state.md"
if [ -f "$SESSION_FILE" ]; then
  echo "SESSION STATE EXISTS — reading prior context"
  cat "$SESSION_FILE"
fi
```

Use this context to:
- Skip re-investigating issues already flagged by a prior skill
- Reference prior decisions ("eng-review decided X, so checking that X was implemented")
- Carry forward open questions

## For every skill: Write at end

After the output/report phase, append a summary to the session state:

```bash
SESSION_FILE=".claudebert/session-state.md"
if [ -f "$SESSION_FILE" ]; then
  cat >> "$SESSION_FILE" << APPENDEOF

### {skill-name} — $(date +%H:%M)
**Findings:** {N} issues ({X} auto-fixed, {Y} asked, {Z} deferred)
**Key decisions:**
- {decision 1}
- {decision 2}
**Open questions:**
- {any unresolved items for later skills}
APPENDEOF
fi
```

## What goes in session state

| Category | Example |
|----------|---------|
| **Decisions** | "eng-review: agreed to use cursor pagination, not offset" |
| **Findings** | "code-review: 3 issues (2 auto-fixed, 1 asked — user chose fix)" |
| **Open questions** | "security-review: CORS policy needs team discussion, deferred" |
| **Scope** | "prod-review: auth rewrite is out of scope for this PR" |

## What does NOT go in session state

- Full reports (those go to PR comments / local reports / Linear)
- Code diffs or file contents
- Anything over 3 lines per item

Keep it scannable. A skill should be able to read the full session state in 10 seconds.
