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
