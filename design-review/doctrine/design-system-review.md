# Design System Coherence — Kholmatova

Distilled from "Design Systems" (Alla Kholmatova, Smashing Magazine). Load during Layer 2 design system extraction and cross-page consistency checks.

## Two Pattern Types

Every design system has both — if either is inconsistent, the system is incomplete:
- **Functional patterns** — buttons, fields, nav, cards, modals (what users interact with)
- **Perceptual patterns** — color, typography, spacing, animation, voice/tone (how the product feels)

## Evaluating Functional Patterns

- **Purpose test:** does each component have a clear, distinct purpose that differentiates it from other components? Near-duplicates serving the same purpose = system failure
- **Content structure:** each pattern should have defined slots (required vs. optional) with clear hierarchy
- **The "do I want others to change?" test:** if changing one instance means all similar instances should update, they're the same pattern. If not, they're separate patterns
- **Specificity scale:** patterns sit on a spectrum from specific (less reusable, more tailored) to generic (more reusable, more generic-looking). The choice should be deliberate
- **Button hierarchy:** primary should appear only once per screen. "If the interface were read aloud, which action would be announced first?" = your primary
- **CTA framework:** CTA-Buttons (action on current page), CTA-Links (action leaves context), Embedded Links (in-content navigation). Each should be visually distinct
- **Naming by purpose, not appearance.** "Hero banner" > "Big blue header." Names should signal when and why to use the pattern

## Evaluating Perceptual Patterns

- **Color must have consistent meaning, not just consistent values.** If blue means "interactive" in one place and "decorative heading" elsewhere = confusion. Audit by role, not by hex value
- **Consolidate similar values.** 62 shades of gray should become 3 named tokens (base, light, dark). Use base + increments (20% lighter/darker) for predictable variation
- **Misusing a color weakens its intended purpose.** E.g., using "celebration gradient" in promotions dilutes celebration
- **Typography needs usage patterns, not just a scale.** Which sizes for which purposes, which pairings
- **Spacing needs density guidance, not just a scale.** Define modes: Spacious (promotional), Regular (default), Compact (supporting functions)
- **Animation:** define purpose (transition/emphasis/reveal) and feel (bouncy=energetic, ease=calm). Use base timing + incremental steps. Consistency of feel > consistency of exact values
- **Voice and tone:** voice = consistent personality. Tone shifts by context (celebratory for success, practical for errors)

## Signature Patterns

The distinctive, memorable elements that define a product's character. These are what users recall first and associate most strongly with the brand.
- **Be most careful changing these** — strong brand association
- **Identify by asking:** What styles come to mind first? What moments appear in user feedback? Where is the design off-brand?

## AI/LLM Readability — Pandya

Design systems that aren't explicitly machine-readable cause compounding drift when LLMs build UI. After ~5 AI sessions, fabricated values multiply: new color shades, inconsistent spacing, upstream drift. Evaluate:

**Token architecture:**
- Are all visual values tokenized? Zero hardcoded hex, px spacing, raw font-size in component CSS = gold standard
- Three-layer indirection: upstream design system tokens → project aliases (with fallbacks) → component references. This insulates against upstream renames and enables theming
- If the project uses any LLM-assisted UI development, hardcoded values are a critical red flag, not just a consistency issue

**Spec coverage:**
- Do structured spec files exist in the repo (not wikis, not Figma comments)? Specs that move with code in the same diff stay current
- Component specs should cover: when to use / when not to, anatomy, tokens used, states (default/hover/active/focus/disabled/error), cross-references (uses/used-by)
- Tier structure: foundations+tokens → atoms/molecules/organisms → patterns. Foundations must be correct before components

**Enforcement:**
- Is there a token audit script that catches violations? CI-gated = strong, manual = weak, none = drift guaranteed
- Does the project instruction file (CLAUDE.md, .cursorrules, etc.) direct AI to read specs before writing UI code?

**When to flag:** If the project uses AI-assisted development (check for CLAUDE.md, .cursorrules, AI-related CI steps, or ask), evaluate the full LLM-readability stack. If not, note token architecture quality but don't flag missing specs as a gap.

## System Coherence Red Flags

1. Near-duplicate components serving the same purpose
2. Colors used inconsistently (same color, different meanings across pages)
3. Off-system values (hex codes that don't map to any token)
4. Interactive states (hover/focus/selected/disabled) inconsistent across elements
5. Different naming in design files vs. code vs. documentation
6. No clear process for adding/reviewing/retiring patterns
7. Principles that are generic platitudes ("be user-friendly") rather than actionable guides
8. Pattern library that only one discipline (dev or design) maintains
9. Too many similar things — 5 card variants where 2 would suffice
10. Hardcoded values in component CSS when tokens exist — especially in AI-assisted codebases where fabrication compounds across sessions
