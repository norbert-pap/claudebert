# Touch & Mobile Design — Hoober

Distilled from "Touch Design for Mobile Interfaces" (Steven Hoober, Smashing Magazine). Load during Layer 2 responsive audit and interaction state checks for any mobile/touch interface.

## The Center-Out Principle

**The single most important finding:** people touch and look at the center of the screen first, most, and best. Touch accuracy is highest in center, degrades toward edges.
- Place primary content and actions in the center
- Allow users to scroll content up to center for interaction
- Touch at edges is less accurate — provide larger targets in headers/footers

## Zone-Based Touch Target Sizing

**A single minimum size is insufficient.** Targets must vary by screen position:

| Zone | Minimum Target | Why |
|------|---------------|-----|
| Center of screen | 7mm / 20pt | Most accurate zone |
| Tabs | 9mm / 28pt | Mid-range accuracy |
| Top masthead | 11mm / 31pt | Edge, less accurate |
| Bottom chyron | 12mm / 34pt | Least accurate, largest needed |
| Between tappable items | ≥7mm gap | Prevents accidental taps |

**Why platform guidelines (Apple 44pt, Google 48dp) are insufficient:** they assume a single universal minimum. In reality, edge targets need nearly twice the size of center targets.

**The contact patch:** average fingertip contact is ~11mm diameter oval, not a point. Touch registers at the electrical centroid, shifted ~1.6mm toward the center of the hand.

## How People Hold Phones

- ~50% one-handed (thumb), ~36% cradled (index finger), ~10% two-handed (two thumbs)
- **People constantly shift grips** based on task and context — design for ALL hold methods
- The "thumb zone" heat maps are oversimplified. Don't rely on them exclusively
- Phone cases reduce reach and accuracy at edges — use wide margins

## Multi-Encoding (Critical)

**Never rely on a single channel to communicate interactivity:**
- Add text labels to ALL icons. Icons alone are not reliably understood
- Add shape and contrast to interactive text. Don't rely on color alone
- Communicate purpose through shape + contrast + color + position + size
- Make interactive items look like familiar forms: buttons, tabs, form inputs
- **Design the entire container as the tappable area** — never just a word or icon within it

## Touch Interaction Rules

- **Tap is primary.** Always allow tapping as fallback for any gesture
- **Gestures beyond tap and scroll are not reliably discoverable.** Swipe-to-delete, long-press = hidden features most users never find
- **OS edge gestures conflict with app gestures.** Don't place swipe actions near screen edges
- **Design for accidental taps:** single-action buttons, displaced confirmation, reversible actions
- **Provide undo, not "Are you sure?"** — confirmation dialogs train reflexive "OK" tapping

## Mobile Layout Principles

- **Three-zone screen template:** primary in center, secondary along edges, tertiary hidden in corners. Never hide primary functions in Zone 3
- **Floating mastheads (top) and chyrons (bottom):** keep context/nav visible during scroll. Only 3–4 items fit in each bar
- **Lists are the default mobile pattern.** Accept it; design the best possible list
- **Left-aligned text always** (RTL: right-aligned). Never justified on mobile
- **Cards waste space:** borders and gaps between cards stop smooth scanning. Use lists when comparison matters

## Anti-Patterns to Flag

- Icons without text labels (hamburger menu icon is NOT coded as "menu")
- Outline icons and thin font weights at small sizes (unreadable in glare/motion)
- Transient/auto-hiding notifications (easily missed — keep onscreen until dismissed)
- Disabling elements without explanation (hide or explain, don't gray out silently)
- Responsive tables converted to images (never)
- Responsive tables where each row becomes a card (destroys cross-row comparison)
- Horizontal scrolling tables without clear affordance
- Bottom tab bars on iOS (users perceive them as action buttons, not tabs)
- Tabs at the bottom of the screen (place at top)

## Testing Mobile Designs

- **Never review mobile designs on a desktop monitor.** Always test on actual devices
- Email mockups to phones at 100% scale. Try to read text and tap targets
- Test on actual mobile networks, not just Wi-Fi (latency is inherently higher)
- Check that OS accessibility settings (reduce motion, larger text) are respected
