# Animation & Interaction Polish — Emil Kowalski

Design engineering doctrine for animation decisions, component interaction quality, and the invisible details that compound into software that feels right. Load during Layer 2 interaction states audit, or during Layer 1 when a provocation questions motion quality.

> "All those unseen details combine to produce something that's just stunning, like a thousand barely audible voices all singing in tune." — Paul Graham

## Core Belief

Beauty is leverage. People select tools based on overall experience, not just functionality. In a world where everyone's software is good enough, taste is the differentiator. Most details users never consciously notice — that's the point. The aggregate of invisible correctness creates interfaces people love without knowing why.

## The Animation Decision Framework

Answer these in order before writing any animation:

### 1. Should this animate at all?

| Frequency | Decision |
|-----------|----------|
| 100+ times/day (keyboard shortcuts, command palette) | No animation. Ever. |
| Tens of times/day (hover effects, list nav) | Remove or drastically reduce |
| Occasional (modals, drawers, toasts) | Standard animation |
| Rare/first-time (onboarding, celebrations) | Can add delight |

**Never animate keyboard-initiated actions.** They're repeated hundreds of times daily. Animation makes them feel slow and disconnected.

### 2. What's the purpose?

Every animation must answer "why does this animate?" Valid purposes:
- **Spatial consistency** — toast enters/exits same direction
- **State indication** — morphing feedback shows the change
- **Explanation** — marketing animation showing how it works
- **Feedback** — button scales on press, confirming the UI heard the user
- **Preventing jarring changes** — elements appearing without transition feel broken

If the purpose is just "it looks cool" and the user will see it often, don't animate.

### 3. Easing

- Element entering or exiting → **ease-out** (starts fast, feels responsive)
- Moving/morphing on screen → **ease-in-out**
- Hover/color change → **ease**
- Constant motion (marquee, progress) → **linear**
- Default → **ease-out**

**Critical:** Use custom easing curves. Built-in CSS easings lack punch.
- Strong ease-out: `cubic-bezier(0.23, 1, 0.32, 1)`
- Strong ease-in-out: `cubic-bezier(0.77, 0, 0.175, 1)`
- iOS-like drawer: `cubic-bezier(0.32, 0.72, 0, 1)`

**Never use ease-in for UI animations.** It starts slow — the exact moment the user is watching most closely. A dropdown with ease-in at 300ms *feels* slower than ease-out at 300ms.

### 4. Duration

| Element | Duration |
|---------|----------|
| Button press feedback | 100–160ms |
| Tooltips, small popovers | 125–200ms |
| Dropdowns, selects | 150–250ms |
| Modals, drawers | 200–500ms |
| Marketing/explanatory | Can be longer |

**Rule:** UI animations should stay under 300ms.

### Perceived Performance

Speed in animation directly affects how users perceive app performance:
- A fast-spinning spinner makes loading *feel* faster (same load time)
- A 180ms select feels more responsive than a 400ms one
- Instant tooltips after the first one is open make the whole toolbar feel faster
- ease-out at 200ms *feels* faster than ease-in at 200ms

## Component Polish Rules

### Buttons must feel responsive
Add `scale(0.97)` on `:active`. Subtle (0.95–0.98). Any pressable element.

### Never animate from scale(0)
Nothing in the real world appears from nothing. Start from `scale(0.95)` or higher, combined with opacity.

### Popovers must be origin-aware
Scale from trigger, not center. Use Radix/Base UI transform-origin variables.
**Exception:** Modals stay `transform-origin: center` — they're not anchored to a trigger.

### Tooltips: skip delay on subsequent hovers
First tooltip delays to prevent accidental activation. Once one is open, adjacent tooltips open instantly with no animation. Feels faster without defeating the delay's purpose.

### Asymmetric enter/exit timing
Slow where the user is deciding (hold-to-delete: 2s linear), fast where the system is responding (release: 200ms ease-out). This applies broadly.

### Stagger group entries
When multiple elements enter together, stagger 30–80ms between items. Longer delays make the interface feel slow. Never block interaction during stagger.

## Technical Rules

### Only animate transform and opacity
These skip layout and paint, running on GPU. Animating padding, margin, height, width triggers all three rendering steps.

### CSS transitions over keyframes for interruptible UI
Transitions retarget mid-animation. Keyframes restart from zero. For anything triggered rapidly (toasts, toggles), transitions produce smoother results.

### CSS animations beat JS under load
CSS animations run off main thread. When the browser is busy, JS animations (requestAnimationFrame) drop frames. Use CSS for predetermined animations; JS for dynamic, interruptible ones.

### Blur masks imperfect transitions
When a crossfade feels off despite trying different easings, add subtle `filter: blur(2px)` during the transition. Blends two states into one perceived transformation. Keep under 20px (expensive in Safari).

### Spring animations for physical interactions
Use springs for drag with momentum, gestures that can be interrupted, and elements that should feel "alive." Keep bounce subtle (0.1–0.3). Avoid bounce in most UI contexts.

## Accessibility

### prefers-reduced-motion
Reduced motion means fewer and gentler, not zero. Keep opacity and color transitions. Remove movement and position animations.

### Touch hover states
Gate hover animations behind `@media (hover: hover) and (pointer: fine)`. Touch devices trigger hover on tap, causing false positives.

## Review Checklist

When auditing animation/interaction quality, flag:

| Issue | Fix |
|-------|-----|
| `transition: all` | Specify exact properties |
| `scale(0)` entry | Start from `scale(0.95)` + opacity |
| `ease-in` on UI element | Switch to `ease-out` or custom curve |
| `transform-origin: center` on popover | Set to trigger location (modals exempt) |
| Animation on keyboard action | Remove animation entirely |
| Duration > 300ms on UI element | Reduce to 150–250ms |
| Hover animation without `@media (hover: hover)` | Add media query |
| Keyframes on rapidly-triggered element | Use CSS transitions |
| Same enter/exit speed | Make exit faster than enter |
| Elements all appear at once | Add stagger (30–80ms) |
| No `:active` state on buttons | Add `scale(0.97)` press feedback |
| No `prefers-reduced-motion` handling | Add reduced motion styles |
| Animating layout properties (height, margin) | Switch to transform + opacity |
