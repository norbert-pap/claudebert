# Interaction Pattern Checklists — Friedman & Silver/Smashing

Distilled from Smart Interface Design Patterns (Friedman, 2012–2023) and Form Design Patterns (Silver, Smashing). Load during Layer 2 mechanical audit for any interactive site/app.

## Web Forms

### Structure & Fields
- **Input budget:** max 7–8 fields visible on desktop, 3–4 on mobile. Track tap count to completion
- **Every field needs a visible label** above the input. Never use placeholder text as label (disappears on typing, fails contrast, mistaken for pre-filled value). Floating labels have all placeholder problems until activated
- **Text boxes look like text boxes:** good padding, bordered. Width hints at expected input length
- **Single column layout preferred.** One-thing-per-page for multi-step flows (proven by GDS to reduce drop-off)
- **Mark optional fields** (not required) — most fields should be required; marking the minority is clearer
- **Actionable copy:** "Choose password" not "Password". Microcopy in letter case on labels
- **Attribute profile per field:** required/optional, allowed chars, min/max length, prefilling, masking, auto-formatting, dependencies, detection by IP
- **Use `autocomplete` attributes** on common fields (name, email, address, credit card)
- **Avoid `<select>` dropdowns** for <10 options (use radios); use autocomplete/datalist for >10
- **Group related fields** with `<fieldset>` + `<legend>` (radio groups, date parts, address sections)
- **Guest checkout always available.** Forcing registration = #1 cart abandonment reason. Offer account creation after purchase
- **Persist data on refresh.** Explain time/documents needed for long forms upfront. Allow save-and-continue
- **Check-and-confirm page** before final submission for high-stakes actions (show everything with edit links)

### Validation Strategy (Silver's Framework)
- **Validate on submit, not on blur, not on keypress.** Blur validation fires errors while users are mid-task
- **Error summary at top of page** (linked to each invalid field) + inline error next to each field
- **Error messages must be specific and actionable:** "Enter email in format name@example.com" not "Invalid"
- **Never trigger new errors while user is typing.** Never disable submit buttons
- Scroll to first error on submit. Show error count in browser tab title
- Set `aria-invalid="true"` on invalid fields. Use live regions for screen reader announcements
- **Reward early, punish late** (Friedman's extension): valid field → validate on blur; invalid field → validate during entry after threshold

### Password & Auth Fields
- Show/hide password toggle instead of "confirm password" field
- Live checklist for password requirements (not post-submit errors)
- Passphrase > password. Enforce minimum length, don't impose arbitrary character rules
- Never prevent pasting into password fields (breaks password managers)

### Specific Field Types
- **Dates:** three separate inputs for day/month/year for memorable dates. Date picker only for future dates, always with text input fallback
- **Credit card:** use `inputmode="numeric"`, never `type="number"` (adds unwanted arrows)
- **Country/airport:** autocomplete combobox, not a `<select>`. Accept abbreviations (GB, UK)
- **Phone:** explain why you need it. Use `inputmode="tel"`
- **Address:** simple text inputs as default. Address finder as progressive enhancement, never as only option
- **Never auto-tab between fields** (disorients users, breaks paste, disrupts screen readers)

### Submit Button
- Button text describes the action: "Register" / "Place order" / "Send message" — never "Submit"
- Align with left edge of form fields. Never disable submit buttons
- Stop listening after first click to prevent double submission — except undo/steppers

## Disabled Buttons

- **Default: keep buttons enabled** and validate on submit instead
- If disabled: sufficient color contrast, keep focusable, show tooltip explaining why disabled
- Progress indicator or label change ("Updating...") while processing
- Stop listening after first click/tap (prevent double submissions) — except for undo/steppers
- Track how many users abandon the flow due to disabled state

## Inline Validation

- **Per-field threshold** before validation triggers (don't validate on first character)
- **Reward early, punish late:** valid field → validate on blur. Invalid field → validate during entry (after threshold)
- Never trigger new errors while user fills a form
- Error messages: specific, actionable ("Password needs 1 uppercase" not "Invalid password"), focusable, announced to screen readers
- Complement text messages with warning icons
- Error summary at top of page links to each error
- Server-side validation as fallback. Monitor error rates over time

## Autocomplete / Search

- Search box must look like a search box. Placeholder explains search types
- Show popular searches, categories, products on focus
- Lookahead pattern for queries. Highlight user's input within suggestions
- Show result count per suggestion/category. Display ratings and thumbnails when relevant
- Keyboard-navigable (Enter/Esc/up/down). Persist query on search results page
- Accept abbreviations (GB, UK, DE) and forgive minor typos
- Track synonyms, seasonal queries, misspellings via search logs

## Sorting & Filtering

- Default sort: "Relevance" or "Featured" — not alphabetical
- Display sorting above AND below content list. Indicate active sort clearly
- Persist sort/filter settings on refresh. Floating sort controls on mobile
- "Reset all" for filters. Show result count per filter value. Include "Any" option per filter
- Back button removes last-applied filter (not all filters)

## Back Button & URL State

- **Change URL for:** modal open state, filter/sort changes, multistep process steps, infinite scroll position, onboarding steps, product variations
- **Don't change URL for:** carousel/gallery slides, accordion state, truncated/expanded content
- Back button exits overlays/lightboxes without leaving current page
- Scroll position preserved when returning to a list from a detail view

## Authentication

- Don't let auth stand in the way of the first success moment. Delay sign-up until value is proven
- Magic sign-in or SMS verification over passwords when possible
- Passphrase > password. Live checklist for requirements, not post-submit errors
- Show/hide password toggle instead of "confirm password" field
- Honeypot + time traps over CAPTCHA. Long cookie expiry to reduce repeat sign-ins
- Social sign-in: clarify what permissions each service gets. Enable account merging
- Password recovery: rate-limit attempts. Remember last sign-in method via cookie

## Privacy & Permissions

- **Progressive permission requests:** ask only when needed, only when likely to get a yes
- Never auto-trigger native permission prompts (often dismissed permanently)
- Explain value for every permission: why needed, what it provides
- Centralized privacy hub with overview of all data. Easy revoke/modify
- Granular cookie consent: reject entire groups AND individual services. Avoid blocking page with consent
- Measure conversion impact of every pop-up (newsletter, chat, install) on a slow weekend
- "I'd rather not say" escape for gender, title, age. "Optional" for phone. Birthday or age confirmation over full birth date
- Data export and account deletion must be straightforward. Explain what happens to data and when it's irrevocably deleted
- 30-day account restore option after cancellation

## Onboarding & Offboarding

- **"Banana test":** replace all UI words with "banana" — can users still navigate by layout alone?
- Drive toward the first success moment, not a UI tour. Measure taps/clicks to get there
- Templates and example content over empty states. Just-in-time hints over first-look wizards
- "Get started" checklist to keep users engaged and track progress
- Minimum viable data: delay payment, plan selection, and optional fields until later
- Progressive onboarding: anonymous account first, then upgrade
- For new features: highlight at the right time (pain point), not at login
- **Offboarding:** easy cancellation, show compelling alternatives, display user's achievements, ask why they're leaving, allow data export, 30-day restore window

## Providing a Way Out

- Always offer a direct input alternative alongside widgets (type dates, manual input for autocomplete)
- Flexible dates/times rather than fixed slots. Full name instead of first/middle/last
- Steppers (+/−) alongside sliders for precision. Text input alongside date pickers
- Distribution of values to avoid dead ends (e.g., Airbnb pricing graph)
- Keep disabled buttons focusable with help text. Allow proceeding even if inline validation fails
- Snooze option for notifications (24h/48h/72h)

## Product Page (e-commerce)

- Front-load title with model, specs, sizes. 5–15 images per product with close-up/zoom and 360° views
- Pricing: large, bold, clear. Show final all-inclusive price with shipping, taxes, fees. Price-per-unit for varying amounts
- Estimated arrival date ("Tue, Mar 23") over generic delivery speed
- Stock availability prominent. Out-of-stock: offer notification, allow purchase of temporarily unavailable variants
- Returns/refunds and shipping costs linked near the price
- "Frequently bought with" and "Customers also bought" sections. Recently viewed items
- Add-to-cart: overlay preferred over new page navigation

## Video Player

- Large tap area for thumb on mobile. Increase thumb size on hover/tap
- Sections/chapters with jump-to. "Table of contents" with video jumps
- Running transcript. Subtitles on by default with language/size/color options
- 10–15s jump buttons plus keyboard arrows. "Skip" link for portions
- Shareable deep links to specific timestamps
- Continue playing on tab switch and mobile screen off. Retain position on refresh
- Loading indicator during buffering. Graceful end-state when video finishes

## Pricing Plans

- 3–4 plans max. Highlight recommended plan (larger/centered/colorful). Indicate target audience per plan
- Benefits over features in copy. "Start for free" / "Free for 30 days" over "Sign up" CTAs
- Monthly/annual toggle with savings shown. Currency switcher
- Feature comparison: accordion groups for scanning, allow table/list/slider view switching
- Custom plan / contact sales option prominent. Group discounts highlighted
- FAQ section. Supported payment options visible. Repeating CTAs top and bottom
- Adjust pricing page for already-signed-in users

## Reviews & Testimonials

- Specific qualities and improvements, never generic ("I love it!")
- Group by feature or impact. Diverse audience representation
- Include: photo, name, title, company, brand logo, "customer since," review date
- Authentic photos only — no stock. Video testimonials with captions/transcripts
- Place at checkout, feature comparison, and pricing pages — not just homepage
- Track and collect from third-party platforms (TripAdvisor, G2, etc.)
