---
name: design-doc
version: 1.0.0
description: |
  Generate or update a DESIGN.md for a project. Extracts design tokens, component
  patterns, anti-patterns, and brand decisions from the live codebase. The resulting
  file is consumed by design-review, code-review, and ship as the source of truth for
  design decisions. Use when asked to "create design doc", "init design system",
  "generate DESIGN.md", "document the design", or "set up design rules".
allowed-tools:
  - Bash
  - Read
  - Write
  - Edit
  - Grep
  - Glob
  - AskUserQuestion
  - Agent
---
<!-- claudebert/design-doc -->

## Preamble (run first)

```bash
_BRANCH=$(git branch --show-current 2>/dev/null || echo "unknown")
echo "BRANCH: $_BRANCH"
_ROOT=$(git rev-parse --show-toplevel 2>/dev/null || echo ".")
echo "ROOT: $_ROOT"
```

## AskUserQuestion Format

**ALWAYS follow this structure for every AskUserQuestion call:**
1. **Re-ground:** State the project, the current branch, and what you're doing. (1-2 sentences)
2. **Simplify:** Explain in plain English.
3. **Recommend:** `RECOMMENDATION: Choose [X] because [one-line reason]`
4. **Options:** Lettered options: `A) ... B) ... C) ...`

---

## Purpose

`DESIGN.md` is the single source of truth for a project's design decisions. It captures:

- **Design tokens** — colors, fonts, spacing, radii actually used
- **Component patterns** — how the project builds UI (which library, which patterns are blessed)
- **Anti-patterns** — things explicitly NOT to do (AI slop, generic patterns, banned fonts)
- **Brand decisions** — tone, identity, what makes this product visually distinct
- **Interaction patterns** — how animations, transitions, and states work

Other claudebert skills consume it:
- `/design-review` defers to it where project-level guidance exists
- `/code-review` checks frontend changes against its tokens and anti-patterns (Axis 3: Architecture)
- `/ship` checks it in the Documentation dimension

---

## Step 0: Check for Existing DESIGN.md

```bash
ls "$_ROOT/DESIGN.md" "$_ROOT/design-system.md" "$_ROOT/docs/design.md" 2>/dev/null || echo "NONE"
```

If a DESIGN.md already exists, ask:

> **DESIGN.md already exists. What should I do?**
>
> A) **Update** — extract current state from code and merge with existing decisions
> B) **Regenerate** — start fresh based on current codebase
> C) **Audit** — compare what the doc says vs. what the code actually does, flag drift
>
> RECOMMENDATION: Choose C to see what's drifted before changing anything.

If no DESIGN.md exists, proceed to Phase 1.

---

## Phase 1: Extract Design System from Code

### 1a: Identify the frontend stack

```bash
# Package.json for JS projects
cat "$_ROOT/package.json" 2>/dev/null | head -50

# Look for CSS/styling approach
find "$_ROOT/src" "$_ROOT/app" "$_ROOT/components" -maxdepth 3 \
  \( -name "*.css" -o -name "*.scss" -o -name "*.module.css" -o -name "tailwind.config*" -o -name "theme.*" -o -name "tokens.*" \) \
  2>/dev/null | head -20

# Look for design system config
find "$_ROOT" -maxdepth 2 \( -name "tailwind.config*" -o -name "theme.ts" -o -name "theme.js" -o -name "tokens.ts" -o -name "tokens.js" -o -name "stitches.config*" -o -name "styled-system*" \) 2>/dev/null
```

### 1b: Extract design tokens from config

**Tailwind projects:**
```bash
cat "$_ROOT/tailwind.config."* 2>/dev/null
cat "$_ROOT/app/globals.css" 2>/dev/null | head -100
```
Extract: custom colors, fonts, spacing overrides, border-radius, breakpoints.

**CSS custom properties:**
```bash
grep -rh '--[a-z]' "$_ROOT/src" "$_ROOT/app" --include="*.css" 2>/dev/null | sort -u | head -50
```

**Theme files:**
Read any `theme.ts`, `theme.js`, `tokens.*` files.

### 1c: Extract actual usage from components

```bash
# Font families in use
grep -rh 'font-family\|fontFamily\|font-' "$_ROOT/src" "$_ROOT/app" --include="*.css" --include="*.tsx" --include="*.jsx" 2>/dev/null | sort -u | head -20

# Color values in use
grep -roh '#[0-9a-fA-F]\{3,8\}\|rgb[a]\?([^)]*)\|hsl[a]\?([^)]*)' "$_ROOT/src" "$_ROOT/app" --include="*.css" --include="*.tsx" 2>/dev/null | sort | uniq -c | sort -rn | head -30

# Component library usage
grep -rh "from ['\"]@" "$_ROOT/src" "$_ROOT/app" --include="*.tsx" --include="*.jsx" 2>/dev/null | sort | uniq -c | sort -rn | head -20
```

### 1d: Extract component patterns

```bash
# What components exist?
find "$_ROOT/src/components" "$_ROOT/components" "$_ROOT/app" -maxdepth 3 -name "*.tsx" -o -name "*.jsx" 2>/dev/null | head -30

# shadcn/ui components installed?
ls "$_ROOT/components/ui/" 2>/dev/null || ls "$_ROOT/src/components/ui/" 2>/dev/null || echo "No shadcn/ui"
```

---

## Phase 2: Interview the User

Ask 3-5 targeted questions based on what you extracted. Present one at a time.

### Question 1: Brand Identity

> **What makes this product visually distinct?**
>
> I extracted these design tokens from your code: {summary of colors, fonts, spacing}.
>
> A) **These are intentional** — document them as the design system
> B) **These are defaults** — I haven't made deliberate design choices yet
> C) **Mixed** — some are intentional, let me tell you which
>
> RECOMMENDATION: Choose whichever is honest — the DESIGN.md should reflect reality.

### Question 2: Anti-Patterns

> **Are there design patterns you want to explicitly ban?**
>
> Common anti-patterns to consider:
> - AI slop (purple gradients, generic hero copy, 3-column feature grids with colored circle icons)
> - Generic component libraries used without customization
> - Specific color/font/layout choices that clash with the brand
>
> A) **Yes** — let me list them
> B) **Use the standard AI slop list** — ban the common generic patterns
> C) **No restrictions** — I don't have strong opinions yet
>
> RECOMMENDATION: Choose B as a safe starting point.

### Question 3: Interaction Patterns

> **How should interactions feel?**
>
> A) **Snappy and minimal** — fast transitions (100-150ms), subtle feedback, no decoration
> B) **Smooth and polished** — deliberate easing (200-300ms), spring animations, delight moments
> C) **Match the framework defaults** — use whatever the component library provides
>
> RECOMMENDATION: Choose A for professional tools, B for consumer products.

### Optional Question 4: Component Strategy (if relevant)

> **What's your component strategy?**
>
> I see you're using {library}. How should new components be built?
>
> A) **Use {library} components as-is** — customize via props/tokens only
> B) **Wrap {library} components** — create project-specific wrappers with defaults
> C) **Build custom** — use {library} as reference but build from scratch
>
> RECOMMENDATION: Choose B for consistency without lock-in.

---

## Phase 3: Generate DESIGN.md

Write the file to the repo root using the following template, filled with extracted + user-provided data:

```markdown
# Design System

> Single source of truth for design decisions. Consumed by claudebert skills
> (design-review, code-review, ship) and humans alike.

## Brand Identity

**Product:** {name}
**Personality:** {1-3 adjectives from interview}
**The "Only" test:** This is the only ___ that ___.

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| primary | {value} | {where it's used} |
| ... | ... | ... |

### Typography

| Role | Font | Size | Weight |
|------|------|------|--------|
| Headings | {font} | {scale} | {weight} |
| Body | {font} | {size} | {weight} |
| Mono | {font} | {size} | {weight} |

### Spacing

Base unit: {4px/8px}
Scale: {list of values actually used}

### Border Radius

| Usage | Value |
|-------|-------|
| Buttons | {value} |
| Cards | {value} |
| Inputs | {value} |

### Token Architecture

Tokens should follow a three-layer model:

**Layer 1: Global tokens** — raw values, named by what they ARE:
`--color-green-500`, `--space-4`, `--radius-md`
These never appear in component CSS directly.

**Layer 2: Semantic tokens** — map globals to roles, named by what they DO:
`--color-surface`, `--color-text-primary`, `--color-accent`
Theming happens here — dark mode swaps semantic mappings, not global values.

**Layer 3: Component tokens** (optional) — map semantic to component context:
`--button-bg`, `--card-bg`

Naming convention: `--{category}-{property}-{variant}-{state}`

### Breakpoints

| Name | Value |
|------|-------|
| sm | {value} |
| md | {value} |
| lg | {value} |

## Component Patterns

**Library:** {library name and version}
**Strategy:** {from interview — use as-is / wrap / custom}

### Blessed Patterns
- {pattern 1 — e.g., "Use shadcn/ui Dialog for all modals"}
- {pattern 2}

### Avoid
- {anti-pattern 1}
- {anti-pattern 2}

## Interaction Patterns

**Feel:** {from interview — snappy / smooth / framework defaults}
**Default transition:** {duration and easing}
**Loading states:** {skeleton / spinner / blur}
**Empty states:** {illustration / text / CTA}
**Error states:** {inline / toast / page}

## Anti-Patterns (DO NOT)

- [ ] Purple/indigo gradient backgrounds
- [ ] Generic hero copy ("Revolutionize your workflow")
- [ ] 3-column feature grid with colored circle icons
- [ ] Oversized padding (> 6rem between sections)
- [ ] Stock illustrations / generic SVG decorations
- [ ] {project-specific anti-patterns from interview}

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| {today} | Initial DESIGN.md created | Extracted from codebase + interview |
```

---

## Phase 4: Verify

After writing, do a quick sanity check:

1. Do the documented tokens match what's actually in the CSS/config?
2. Are the blessed components actually installed/available?
3. Do the anti-patterns make sense for this project?

If anything is wrong, fix it before finishing.

---

## Phase 5: Output

Present a summary:

```
## DESIGN.md Created

- Tokens: {N} colors, {N} fonts, {N} spacing values documented
- Components: {library} with {N} blessed patterns
- Anti-patterns: {N} items on the ban list
- Interaction feel: {snappy/smooth/defaults}

Other claudebert skills will now reference this file:
- /design-review — defers to your tokens and anti-patterns
- /code-review — checks frontend changes against Axis 3 (Architecture)
- /ship — verifies documentation is current

Update DESIGN.md whenever you make deliberate design changes.
Add new decisions to the Decisions Log with dates and rationale.
```

---

## Audit Mode (existing DESIGN.md)

When the user chose "Audit" in Step 0:

1. Read the existing DESIGN.md
2. Run the same extraction from Phase 1
3. Compare documented tokens vs. actual tokens
4. Report drift:

```
## DESIGN.md Audit

| Category | Documented | Actual | Status |
|----------|-----------|--------|--------|
| Primary color | #3B82F6 | #3B82F6 | Match |
| Body font | Inter | Inter, Roboto | DRIFT — Roboto not documented |
| Border radius | 8px | 8px, 12px, 16px | DRIFT — 12px and 16px not documented |
```

For each drift item, ask: update the doc, or fix the code?

---

## Important Rules

1. **Extract, don't invent.** Document what exists in the code, don't propose a new design system.
2. **Interview, don't assume.** Ask the user about intent before documenting defaults as decisions.
3. **Keep it short.** DESIGN.md should be < 150 lines. If it's longer, you're over-documenting.
4. **Decisions log matters.** Every significant design choice gets a dated entry with rationale.
5. **Anti-patterns are as important as patterns.** What NOT to do prevents drift.
6. **This is a living document.** Encourage the user to update it as decisions evolve.
