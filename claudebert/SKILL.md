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

## Step 1: Where are you?

Ask one question using AskUserQuestion:

> **claudebert on `{_BRANCH}` — where are you in the process?**
>
> A) **Product review** — I have an idea or spec to challenge and scope
> B) **Eng review** — scope is set, need to lock in the execution plan
> C) **Code review** — implementation is done, review the diff (includes deep security + perf dives when needed)
> D) **QA** — code is reviewed, test functionality on the live site
> E) **Design review** — test visual design on the live site
> F) **Sync** — check upstream sources for new skills and techniques
>
> RECOMMENDATION: Pick where you are right now.

---

## Step 2: Route

Based on the answer, invoke the corresponding skill:

- **A** → invoke `/prod-review`
- **B** → invoke `/eng-review`
- **C** → invoke `/code-review`
- **D** → invoke `/qa`
- **E** → invoke `/design-review`
- **F** → invoke `/sync`

Use the Skill tool to invoke the selected skill. Pass through any additional context the user provided.
