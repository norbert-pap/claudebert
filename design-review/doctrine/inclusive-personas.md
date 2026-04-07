# Inclusive Personas — adapted from designpowers

"Nothing About Us Without Us." Design for the margins and the centre benefits. Design for the centre and the margins get excluded. Load during QA persona walkthroughs or design-review when evaluating who the design serves.

## The Ability Spectrum

When reviewing a design, consider users across three condition types:

### Permanent
- **Vision:** blind, low vision, colour blind
- **Hearing:** deaf, hard of hearing
- **Motor:** limited fine motor, limited reach, tremor, paralysis
- **Cognitive:** learning differences, memory challenges, attention differences
- **Speech:** non-verbal, speech differences

### Temporary
- Broken arm, ear infection, concussion, medication effects, post-surgery

### Situational
- Bright sunlight, noisy environment, one hand occupied (holding child, coffee), driving, multitasking, emotional distress, unfamiliar language, slow connection

## Scenario Intersections

These reveal universal design opportunities:

| Situational user | Has similar needs to | Design implication |
|---|---|---|
| Sighted user in bright sunlight | Low-vision user | High contrast, large text |
| Parent holding a baby | User with limited hand mobility | Large touch targets, one-hand reachable |
| Non-native speaker | User with cognitive processing difference | Plain language, clear icons |
| User in a noisy pub | Deaf user | Captions, visual feedback (not audio-only) |
| User on slow 3G | User on assistive technology | Fast loading, progressive enhancement |
| Stressed user under time pressure | User with anxiety/attention differences | Clear hierarchy, minimal decisions, undo |

## Quick Persona Checklist for Reviews

When reviewing any interface, run through these 5 proxy users:

1. **Screen reader user** — Does every interactive element have a label? Does focus order make sense? Are decorative images hidden?
2. **Keyboard-only user** — Can every action be completed without a mouse? Is focus visible? Are there no keyboard traps?
3. **Low-vision user (200% zoom)** — Does the layout reflow without horizontal scroll? Is text readable? Do touch targets remain adequate?
4. **Cognitive load user** — How many decisions per screen? What must be remembered vs. displayed? Is the next step obvious?
5. **One-handed mobile user** — Are primary actions in the thumb zone? Are touch targets 44px+? Can forms be completed one-handed?

## Anti-Patterns

| Pattern | Problem |
|---------|---------|
| "Our users are everyone" | If everyone is your user, nobody is |
| Personas without disabilities | You've excluded a quarter of the population |
| Edge cases treated as afterthoughts | Edge cases reveal design quality. They come first |
| Accessibility as a final checklist | It's a design constraint, not a QA pass |
| "We'll add accessibility later" | Retrofitting costs 10x. Design it in |
