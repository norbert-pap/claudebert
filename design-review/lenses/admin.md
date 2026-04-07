# Admin / Dashboard / Internal Tool Lens

Apply when reviewing admin panels, dashboards, back-office tools, CRMs, or internal systems.

## Evaluation Criteria

- **Information density is a feature, not a flaw.** Don't apply marketing-site whitespace standards to a dashboard. Users want to see data
- **Eliminate, automate, simplify on every workflow.** For every form and flow: what can be removed? What can be inferred from existing data? What can be simplified with defaults?
- **How many clicks to the most common action?** If the #1 workflow takes 5 clicks, something is wrong
- **Data-ink ratio** (Tufte) — no chartjunk, no decoration pretending to be data. Every pixel in a chart should encode information
- **Destructive actions protected?** Confirm dialogs, undo, soft delete. **Bulk actions efficient?** Select-all, batch operations
- **Boring is good. Clarity over personality.** Admin tools should be invisible infrastructure. If the UI has personality, it better not slow people down
- **Tables over cards when comparison matters.** Cards are for browsing; tables are for analyzing

## Lens-Specific Provocations

- "What's the #1 thing someone does in this tool every day? How many clicks does it take? Can we get it to 1?"
- "Is there any decoration in this dashboard that isn't encoding data? Cut it."
- "Walk me through a destructive action. What happens if I accidentally delete the wrong thing?"
- "What's the most repeated task in this tool? Is it a modal or page navigation when it should be in-place editing or an expandable row?"
- "Show me the sorting and filtering. Does the back button undo the last filter, or nuke all of them? Do settings persist on refresh?"
- "Pick any two pages in this tool. Do the same components (buttons, cards, tables) look and behave identically? If blue means 'interactive' here, does it mean the same thing everywhere?"
- "The person who approves the budget for this tool logs in once a month. The person who uses it daily has 200 records open. Does the same interface serve both, or does the executive dashboard exist separately from the operator's workspace?"
- "What's the P95 workflow — the power user who processes 100 items a day? Are there keyboard shortcuts, bulk actions, and saved filters, or are they clicking through the same modal 100 times?"
