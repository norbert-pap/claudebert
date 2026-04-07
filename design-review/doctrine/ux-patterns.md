# UX Patterns — Cognitive Design Instincts

These are thinking instincts, not checklist items. Internalize, don't enumerate.

1. **Affordance clarity** — every interactive element communicates what it does before you touch it (Norman)
2. **Feedback loops** — every action needs a visible reaction. "Did that work?" is a trust violation (Norman)
3. **Desire lines** — pave the paths users already walk (Norman, Papanek)
4. **Cognitive load budget** — every screen has finite attention. Recognition over recall, progressive disclosure over info-dumping (Johnson)
5. **Mismatch scanning** — who does this exclude? Permanent, temporary, situational (Holmes)
6. **Hick's Law** — more choices = slower decisions. Equal-weight options = hierarchy failure (Yablonsky)
7. **Fitts's Law** — important targets big and close. Small/distant/crowded = interaction failure (Yablonsky)
8. **Jakob's Law** — users spend most time on other sites. Deviate from convention only when clearly better (Yablonsky)
9. **Eliminate, automate, simplify** — for every form and flow: remove the nonessential, infer what you can, simplify what's left
10. **Intrinsic responsiveness** — layout should be fluid by nature, not patched by breakpoints. Design for the most appropriate usage first, but serviceable on all non-extreme viewports (Pickering/Every Layout, Marcotte)
11. **Component composability** — atoms, molecules, organisms. Consistency from composability, not from policing (Frost)
12. **Data-ink ratio** — for data displays, maximize signal, eliminate chartjunk (Tufte)
13. **Grid as liberation** — rational layout creates clarity and trust. Arbitrary floating = visual noise (Muller-Brockmann)
14. **Orchestrated first use** — onboarding leads toward the outcome someone signed up for, not a UI tour. Tooltips for reminders and new features, not as a crutch for unclear design
15. **Mobile-first as prioritization** — not a responsive strategy, a thinking strategy. Forces you to identify what actually matters (Wroblewski)
16. **AI-native interaction** — agentic workflows, conversational interfaces, AI-assisted flows are a new interaction paradigm. AI features should feel integrated, not bolted on. The best AI interfaces make the AI invisible (Wroblewski, recent)
18. **Cognitive redistribution** — AI doesn't add intelligence, it shifts who carries cognitive responsibility. When AI absorbs cognition, it inherits responsibility — and the cost of mistakes rises. Propose structure and invite modification rather than presenting blank canvases. Users react faster than they invent (Usborne)
17. **Modal vs. page vs. inline** — four-step decision: (1) Does user need context from the underlying screen? If no → separate page. (2) Is the task simple and self-contained? If no → separate page or side panel. (3) Does user need to reference background data? If yes → nonmodal/panel. (4) If overlay: default to nonmodal, use modal only to slow users down and prevent errors. **Use modals for:** confirmations, destructive-action gates, single-field inputs, context-preserving quick tasks. **Never use modals for:** error messages, onboarding, feature announcements, complex multi-step flows, auto-triggered interruptions, nested modals. **For repetitive tasks in dense UIs:** prefer expandable sections or in-place editing over both modals and page navigations — users need reference points, copy-paste, and background data access (Friedman, Neufeld, Fessenden/NN-g)
19. **P50/P95 design** — the average user is a phantom. Digital behavior follows power-law distributions: a small minority (P95 "whales") generate disproportionate value versus the median (P50 "tourists"). Design simple on-ramps that serve P50 users with clean guided interfaces, then excavate deep wells of uncapped functionality for P95 users via progressive disclosure triggered by behavioral evidence (repeated use, batch sizes, shortcut adoption). Don't flatten the experience to one tier — the product that serves only the median loses its power users, and the product designed only for experts never grows. Monitor the P95/P50 ratio per feature to detect whether changes expand or compress the tail (Nielsen)
