// Component data — loaded by components.html

const DESIGN_SYSTEMS = ['Shadcn/UI', 'Radix UI', 'Material Design', 'Ant Design', 'Fluent', 'Chakra UI', 'Bootstrap', 'Canvas', 'Carbon', 'Atlassian', 'Dell', 'USWDS', 'Momentum', 'Clarity', 'Evergreen', 'Paste', 'GOV.UK', 'Lightning', 'Spectrum', 'Polaris', 'PatternFly', 'EUI', 'Ariakit', 'HeroUI', 'Visa', 'eBay', 'Flowbite', 'Cedar', 'Forma 36', 'Aurora', 'Instructure UI', 'NewsKit', 'Base Web'];

const DESIGN_SYSTEM_COMPANIES = { 'Shadcn/UI': 'shadcn', 'Radix UI': 'WorkOS', 'Material Design': 'Google', 'Ant Design': 'Ant Group', 'Fluent': 'Microsoft', 'Chakra UI': 'Segun Adebayo', 'Bootstrap': 'Open Source', 'Canvas': 'Workday', 'Carbon': 'IBM', 'Atlassian': 'Atlassian', 'Dell': 'Dell', 'USWDS': 'U.S. Government', 'Momentum': 'Cisco', 'Clarity': 'Broadcom', 'Evergreen': 'Segment', 'Paste': 'Twilio', 'GOV.UK': 'UK Government', 'Lightning': 'Salesforce', 'Spectrum': 'Adobe', 'Polaris': 'Shopify', 'PatternFly': 'Red Hat', 'EUI': 'Elastic', 'Ariakit': 'Open Source', 'HeroUI': 'Open Source', 'Visa': 'Visa', 'eBay': 'eBay', 'Flowbite': 'Themesberg', 'Cedar': 'REI', 'Forma 36': 'Contentful', 'Aurora': 'Government of Canada', 'Instructure UI': 'Instructure', 'NewsKit': 'News UK', 'Base Web': 'Uber' };

// Directory entries for the design systems page
const DESIGN_SYSTEM_DIRECTORY = [
  { name: 'Ant Design', company: 'Ant Group', url: 'https://ant.design/', link: 'ant.design', desc: 'A comprehensive enterprise-grade React component library and design language, widely adopted for building admin dashboards, internal tools, and data-intensive applications.' },
  { name: 'Ariakit', company: 'Open Source', url: 'https://ariakit.org/', link: 'ariakit.org', desc: 'An open-source library of unstyled, accessible React primitives built on WAI-ARIA patterns, providing low-level building blocks with full keyboard and screen reader support.' },
  { name: 'Atlassian Design System', company: 'Atlassian', url: 'https://atlassian.design/', link: 'atlassian.design', desc: "Atlassian's design system powering Jira, Confluence, and Trello with accessible React components, design tokens, and guidelines for collaborative enterprise products." },
  { name: 'Aurora', company: 'Government of Canada', url: 'https://design.gccollab.ca/', link: 'design.gccollab.ca', desc: "The Government of Canada's open-source design system providing accessible, bilingual web components and patterns for federal digital services." },
  { name: 'Base Web', company: 'Uber', url: 'https://baseweb.design/', link: 'baseweb.design', desc: "Uber's React component library implementing the Base design language, built for high-performance applications with strong focus on accessibility, themability, and composability." },
  { name: 'Bootstrap', company: 'Twitter / Open Source', url: 'https://getbootstrap.com/', link: 'getbootstrap.com', desc: "The world's most popular front-end framework, providing a responsive grid system, prebuilt components, and JavaScript plugins for rapid prototyping and production use." },
  { name: 'Canvas', company: 'Workday', url: 'https://canvas.workdaydesign.com/', link: 'canvas.workdaydesign.com', desc: "Workday's design system powering enterprise HCM and finance applications with accessible React components, built-in theming, internationalization, and design tokens." },
  { name: 'Carbon', company: 'IBM', url: 'https://carbondesignsystem.com/', link: 'carbondesignsystem.com', desc: "IBM's open-source design system implementing the IBM Design Language with reusable React components, design tokens, icons, and guidelines for accessible enterprise products." },
  { name: 'Cedar', company: 'REI', url: 'https://cedar.rei.com/', link: 'cedar.rei.com', desc: "REI's open-source design system for consistent outdoor retail experiences, providing Vue components, design tokens, and guidelines aligned with the co-op brand identity." },
  { name: 'Chakra UI', company: 'Segun Adebayo', url: 'https://chakra-ui.com/', link: 'chakra-ui.com', desc: 'A simple, modular, and accessible React component library providing building blocks for rapid application development with built-in dark mode and composable style props.' },
  { name: 'Clarity', company: 'Broadcom', url: 'https://clarity.design/', link: 'clarity.design', desc: "Broadcom's open-source design system for enterprise web applications, providing Angular and web components with built-in accessibility, responsive layouts, and a comprehensive icon set." },
  { name: 'Dell Design System', company: 'Dell', url: 'https://www.delldesignsystem.com/', link: 'delldesignsystem.com', desc: "Dell's enterprise design system offering a unified component library, design tokens, and UX guidelines for consistent digital experiences across Dell's product ecosystem." },
  { name: 'eBay Playbook', company: 'eBay', url: 'https://playbook.ebay.com/design-system', link: 'playbook.ebay.com', desc: "eBay's design system providing components, patterns, and guidelines for building consistent marketplace experiences across web and mobile platforms serving users worldwide." },
  { name: 'Elastic UI', company: 'Elastic', url: 'https://eui.elastic.co/', link: 'eui.elastic.co', desc: "Elastic's React design library providing typed components, theme utilities, and design tokens for building data-heavy applications like Kibana with consistent branding and aesthetics." },
  { name: 'Evergreen', company: 'Segment', url: 'https://evergreen.segment.com/', link: 'evergreen.segment.com', desc: "Segment's React UI framework for building ambitious web products, providing polished, production-ready components with sensible defaults and flexible theming for modern applications." },
  { name: 'Flowbite', company: 'Themesberg', url: 'https://flowbite.com/', link: 'flowbite.com', desc: 'An open-source component library built on Tailwind CSS, providing interactive UI components with vanilla JavaScript plus framework integrations for React, Vue, and Svelte.' },
  { name: 'Fluent', company: 'Microsoft', url: 'https://fluent2.microsoft.design/', link: 'fluent2.microsoft.design', desc: "Microsoft's cross-platform design system powering Microsoft 365, Windows, and Teams, introducing a unified design language with shared tokens and flexible adaptive components." },
  { name: 'Forma 36', company: 'Contentful', url: 'https://f36.contentful.com/', link: 'f36.contentful.com', desc: "Contentful's open-source design system for consistent CMS experiences, providing React components, design tokens, and guidelines tailored for content management interfaces and extensions." },
  { name: 'GOV.UK Design System', company: 'UK Government', url: 'https://design-system.service.gov.uk/', link: 'design-system.service.gov.uk', desc: "The UK Government's design system for building accessible, consistent public services with rigorously tested components, patterns, and guidance used across hundreds of government websites." },
  { name: 'HeroUI', company: 'Open Source', url: 'https://heroui.com/', link: 'heroui.com', desc: 'A modern React component library built on React Aria and Tailwind CSS, offering beautifully designed accessible components with dark mode, animations, and developer-friendly APIs.' },
  { name: 'Instructure UI', company: 'Instructure', url: 'https://instructure.design/', link: 'instructure.design', desc: "Instructure's open-source React component library powering Canvas LMS, offering accessible, themeable components with built-in RTL support and screen reader compatibility." },
  { name: 'Lightning Design System', company: 'Salesforce', url: 'https://www.lightningdesignsystem.com/', link: 'lightningdesignsystem.com', desc: "Salesforce's design system for building enterprise experiences on the Salesforce platform with accessible components, design tokens, and patterns for data-dense business applications." },
  { name: 'Material Design', company: 'Google', url: 'https://m3.material.io/', link: 'm3.material.io', desc: "Google's open-source design system featuring dynamic color, updated components, and adaptive layouts in Material 3 for Android, web, and cross-platform development." },
  { name: 'Momentum', company: 'Cisco', url: 'https://momentum.design/', link: 'momentum.design', desc: "Cisco's design system powering Webex and collaboration products, providing web components, design tokens, and icons focused on accessibility, theming, and cross-platform consistency." },
  { name: 'NewsKit', company: 'News UK', url: 'https://www.newskit.co.uk/', link: 'newskit.co.uk', desc: "News UK's open-source design system for building accessible, high-performance digital news products with composable React components and design tokens." },
  { name: 'Paste', company: 'Twilio', url: 'https://paste.twilio.design/', link: 'paste.twilio.design', desc: "Twilio's design system for building accessible, cohesive customer experiences, providing React components built on a robust token system with comprehensive documentation and guidelines." },
  { name: 'PatternFly', company: 'Red Hat', url: 'https://www.patternfly.org/', link: 'patternfly.org', desc: "Red Hat's open-source design system for enterprise products, providing accessible React components, layouts, and design guidelines purpose-built for complex, data-driven applications." },
  { name: 'Polaris', company: 'Shopify', url: 'https://polaris-react.shopify.com/', link: 'polaris-react.shopify.com', desc: "Shopify's design system for merchant-facing experiences, providing React components, design tokens, icons, and guidelines for building consistent, accessible commerce admin interfaces." },
  { name: 'Radix UI', company: 'WorkOS', url: 'https://www.radix-ui.com/', link: 'radix-ui.com', desc: 'An open-source library of unstyled, accessible UI primitives for React, providing the behavior and accessibility layer so developers can apply custom designs without defaults.' },
  { name: 'Shadcn/UI', company: 'shadcn', url: 'https://ui.shadcn.com/', link: 'ui.shadcn.com', desc: 'Beautifully designed, accessible components built on Radix UI and Tailwind CSS. Not a traditional library — you copy and paste source code directly into your project.' },
  { name: 'Spectrum', company: 'Adobe', url: 'https://spectrum.adobe.com/', link: 'spectrum.adobe.com', desc: "Adobe's design system powering Creative Cloud, Document Cloud, and Experience Cloud, providing accessible components, design tokens, and cross-platform guidelines for cohesive product experiences." },
  { name: 'USWDS', company: 'U.S. Government', url: 'https://designsystem.digital.gov/', link: 'designsystem.digital.gov', desc: 'The U.S. Web Design System provides accessible, mobile-friendly components and guidelines for building federal government websites that are consistent, trustworthy, and easy to use.' },
  { name: 'Visa Product Design', company: 'Visa', url: 'https://design.visa.com/', link: 'design.visa.com', desc: "Visa's design system for building consistent, accessible payment and financial experiences with components, patterns, and guidelines aligned with Visa's brand across digital products." },
];

// URL configuration for design system component links
// Each entry: { base, slugFn(optional), map(optional), suffix(optional) }
// slugFn: 'default' uses kebab-case, 'raw' uses lowercase term as-is
// map: overrides for specific terms { 'term': 'slug' }, null value = no link
const DESIGN_SYSTEM_URLS = {
  'Shadcn/UI':       { base: 'https://ui.shadcn.com/docs/components/' },
  'Radix UI':        { base: 'https://www.radix-ui.com/primitives/docs/components/', map: { 'form (preview)': 'form', 'one-time password field (preview)': 'one-time-password-field', 'password toggle field (preview)': 'password-toggle-field' } },
  'Material Design': { base: 'https://m3.material.io/components/', suffix: '/overview', map: { 'badge': 'badges', 'button': 'all-buttons', 'buttons': 'all-buttons', 'fab': 'floating-action-button', 'button groups': 'button-groups', 'navigation bar': 'navigation-bar', 'card': 'cards', 'date picker': 'date-pickers', 'dialog': 'dialogs', 'menu': 'menus', 'progress indicator': 'progress-indicators', 'radio button': 'radio-button', 'side sheet': 'side-sheets', 'slider': 'sliders', 'snackbar': 'snackbar', 'tab': 'tabs', 'text field': 'text-fields', 'tooltip': 'tooltips' } },
  'Ant Design':      { base: 'https://ant.design/components/', map: { 'autocomplete': 'auto-complete', 'button (toggle)': 'button', 'form.item label': 'form', 'input.textarea': 'input', 'modal confirm': 'modal', 'radio.group': 'radio', 'radio.group (button)': 'radio', 'color picker': 'color-picker', 'date picker': 'date-picker', 'float button': 'float-button', 'input number': 'input-number', 'time picker': 'time-picker', 'tree select': 'tree-select', 'qr code': 'qr-code', 'config provider': 'config-provider' } },
  'Fluent':          { urlFn: function(term) { var s = term.toLowerCase().replace(/[\s/'()]/g, ''); var o = { 'spin button': 'spin' }; return 'https://fluent2.microsoft.design/components/web/react/core/' + (o[term.toLowerCase()] || s) + '/usage'; } },
  'Chakra UI':       { base: 'https://v2.chakra-ui.com/docs/components/', map: { 'keyboard key (kbd)': 'kbd', 'show / hide': 'show-hide', 'simplegrid': 'simple-grid' } },
  'Bootstrap':       { urlFn: function(term) { var bsMap = { 'alert': '/components/alerts/', 'button': '/components/buttons/', 'collapse': '/components/collapse/', 'dropdown': '/components/dropdowns/', 'form check': '/forms/checks-radios/', 'form check (radio)': '/forms/checks-radios/', 'form control': '/forms/form-control/', 'form control (textarea)': '/forms/form-control/', 'form select': '/forms/select/', 'horizontal rule': null, 'modal': '/components/modal/', 'nav tabs': '/components/navs-tabs/', 'offcanvas': '/components/offcanvas/', 'placeholder': '/components/placeholders/', 'popover': '/components/popovers/', 'switch': '/forms/checks-radios/#switches', 'table': '/content/tables/', 'toast': '/components/toasts/', 'tooltip': '/components/tooltips/' }; var key = term.toLowerCase(); if (key in bsMap) return bsMap[key] === null ? null : 'https://getbootstrap.com/docs/5.3' + bsMap[key]; var slug = key.replace(/\s+/g, '-').replace(/[/'()]/g, ''); return 'https://getbootstrap.com/docs/5.3/components/' + slug; } },
  'Canvas':          { base: 'https://canvas.workdaydesign.com/components/', map: { 'primary button': 'buttons/button', 'secondary button': 'buttons/button', 'tertiary button': 'buttons/button', 'delete button': 'buttons/button', 'action bar': 'buttons/action-bar', 'segmented control': 'buttons/segmented-control', 'card': 'containers/card', 'side panel': 'containers/side-panel', 'table': 'containers/table', 'tabs': 'containers/tabs', 'text input': 'inputs/text-input', 'text area': 'inputs/text-area', 'select': 'inputs/select', 'checkbox': 'inputs/checkbox', 'radio': 'inputs/radio', 'switch': 'inputs/switch', 'color picker': 'inputs/color-picker', 'form field': 'inputs/form-field', 'status indicator': 'indicators/status-indicator', 'banner': 'indicators/banner', 'loading animation': 'indicators/loading-animation', 'skeleton': 'indicators/skeleton', 'toast': 'indicators/toast', 'count badge': 'indicators/count-badge', 'pagination': 'navigation/pagination', 'breadcrumbs': 'navigation/breadcrumbs', 'popup': 'popups/popup', 'modal': 'popups/modal', 'dialog': 'popups/dialog', 'menu': 'popups/menu', 'tooltip': 'popups/tooltip' } },
  'Carbon':          { base: 'https://carbondesignsystem.com/components/', suffix: '/usage', map: { 'notification': 'notification', 'date picker': 'date-picker', 'combo box': 'combo-box', 'multi select': 'multiselect', 'overflow menu': 'overflow-menu', 'menu buttons': 'menu-buttons', 'text input': 'text-input', 'number input': 'number-input', 'ui shell': 'UI-shell-header', 'progress bar': 'progress-bar', 'progress indicator': 'progress-indicator', 'radio button': 'radio-button', 'inline loading': 'inline-loading', 'data table': 'data-table', 'structured list': 'structured-list', 'content switcher': 'content-switcher', 'tree view': 'tree-view', 'code snippet': 'code-snippet' } },
  'Atlassian':       { base: 'https://atlassian.design/components/', map: { 'date time picker': 'datetime-picker', 'dropdown menu': 'dropdown-menu', 'dynamic table': 'dynamic-table', 'inline message': 'inline-message', 'modal dialog': 'modal-dialog', 'progress bar': 'progress-bar', 'section message': 'section-message', 'side navigation': 'side-navigation', 'text area': 'textarea', 'text field': 'textfield' } },
  'Dell':            { base: 'https://www.delldesignsystem.com/components/', map: { 'action menu': 'action-menu', 'date picker': 'date-picker', 'loading indicator': 'loading-indicator', 'message bar': 'message-bar', 'progress bar': 'progress-bar', 'radio button': 'radio-button', 'side navigation': 'side-navigation', 'text area': 'text-area', 'text input': 'text-input', 'view more/less': 'view-more-less' } },
  'USWDS':           { base: 'https://designsystem.digital.gov/components/', suffix: '/', map: { 'button group': 'button-group', 'combo box': 'combo-box', 'date picker': 'date-picker', 'radio buttons': 'radio-buttons', 'range slider': 'range-slider', 'side navigation': 'side-navigation', 'site alert': 'site-alert', 'step indicator': 'step-indicator', 'text input': 'text-input' } },
  'Momentum':        { base: 'https://momentum.design/en/components/', slugFn: 'raw' },
  'Clarity':         { base: 'https://clarity.design/documentation/', map: { 'button group': 'button-group', 'date picker': 'date-picker', 'progress bar': 'progress-bar', 'radio button': 'radio-button', 'range input': 'range-input', 'side panel': 'side-panel', 'toggle switch': 'toggle-switch', 'vertical nav': 'vertical-nav' } },
  'Evergreen':       { base: 'https://evergreen.segment.com/components/', map: { 'badge & pill': 'badge-and-pill', 'form field': 'form-field', 'side sheet': 'side-sheet', 'text input': 'text-input' } },
  'Paste':           { base: 'https://paste.twilio.design/components/', map: { 'alert dialog': 'alert-dialog', 'button group': 'button-group', 'date picker': 'date-picker', 'progress bar': 'progress-bar', 'radio group': 'radio-group', 'side panel': 'side-panel', 'sidebar navigation': 'sidebar-navigation', 'skeleton loader': 'skeleton-loader' } },
  'GOV.UK':          { base: 'https://design-system.service.gov.uk/components/', suffix: '/', map: { 'date input': 'date-input', 'notification banner': 'notification-banner', 'service navigation': 'service-navigation', 'text input': 'text-input' } },
  'Lightning':       { urlFn: function(term) { var m = { 'accordion': '8488c4-accordion', 'avatar': '06db88-avatar', 'badge': '51b9a1-badge', 'breadcrumbs': '63fa34-breadcrumbs', 'button': '64d649-button', 'button groups': '55a70c-button-groups', 'cards': '02e3e1-cards', 'carousel': '46b4a4-carousel', 'checkbox': '87c3e1-checkbox', 'checkbox toggle': '854038-checkbox-toggle', 'combobox': '20f64c-combobox', 'data table': 'b33d89-data-table', 'datepicker': '012baa-datepicker', 'form element': '700876-form-element', 'input': '788038-input', 'menu': '62cbc8-menu', 'modals': '290cfd-modals', 'progress bar': '44c8f4-progress-bar', 'prompt': '790ee4-prompt', 'radio group': '47fa5e-radio-group', 'select': '22bac7-select', 'slider': '49c72c-slider', 'spinners': '77e498-spinners', 'tabs': 'd29b1e-tabs', 'textarea': '9a87a2-textarea', 'toast': 'c6a324-toast', 'tooltip': 'b21e7e-tooltip', 'vertical navigation': '49f2db-vertical-navigation' }; var key = term.toLowerCase(); return m[key] ? 'https://www.lightningdesignsystem.com/2e1ef8501/p/' + m[key] : null; } },
  'Spectrum':        { base: 'https://opensource.adobe.com/spectrum-web-components/components/', suffix: '/' },
  'Polaris':         { base: 'https://polaris-react.shopify.com/components/', map: { 'action list': 'action-list', 'button group': 'button-group', 'data table': 'data-table', 'date picker': 'date-picker', 'progress bar': 'progress-bar', 'radio button': 'radio-button', 'range slider': 'range-slider', 'skeleton page': 'skeleton-page', 'text field': 'text-field' } },
  'PatternFly':      { base: 'https://www.patternfly.org/components/', map: { 'date picker': 'date-picker', 'expandable section': 'expandable-section', 'form select': 'form-select', 'text area': 'text-area', 'text input': 'text-input', 'toggle group': 'toggle-group' } },
  'EUI':             { base: 'https://eui.elastic.co/docs/components/display/', suffix: '/' },
  'Ariakit':         { base: 'https://ariakit.org/components/', slugFn: 'raw' },
  'HeroUI':          { base: 'https://heroui.com/docs/react/components/' },
  'Visa':            { base: 'https://design.visa.com/components/', suffix: '/' },
  'eBay':            { base: 'https://playbook.ebay.com/design-system/components/' },
  'Flowbite':        { base: 'https://flowbite.com/docs/components/', suffix: '/', map: { 'alerts': 'alerts', 'buttons': 'buttons', 'button group': 'button-group', 'dropdowns': 'dropdowns', 'input field': 'input-field', 'tables': 'tables', 'tooltips': 'tooltips' } },
  'Cedar':           { base: 'https://cedar.rei.com/components/' },
  'Forma 36':        { base: 'https://f36.contentful.com/components/' },
  'Aurora':          { base: 'https://design.gccollab.ca/component/', map: { 'alert': 'alerts', 'badge': 'badges', 'breadcrumb': 'breadcrumbs', 'button': 'buttons', 'card': 'cards', 'checkbox': 'forms', 'collapse': 'collapse', 'dropdown': 'dropdowns', 'form control': 'forms', 'modal': 'modals', 'navbar': 'navbars', 'navigation': 'navs', 'popover': 'popovers', 'progress bar': 'progress', 'radio button': 'forms', 'range': 'forms', 'select': 'forms', 'switch': 'forms', 'table': 'tables', 'tooltip': 'tooltips', 'carousel': 'carousels' } },
  'Instructure UI':  { urlFn: function(term) { return 'https://instructure.design/#' + term; } },
  'NewsKit':         { base: 'https://www.newskit.co.uk/components/', suffix: '/' },
  'Base Web':        { base: 'https://baseweb.design/components/', suffix: '/' },
};

// Data-driven URL resolver for design system component links
function getAkaUrl(system, term) {
  var config = DESIGN_SYSTEM_URLS[system];
  if (!config) return null;
  if (config.urlFn) return config.urlFn(term);
  var key = term.toLowerCase();
  var slug;
  if (config.map && key in config.map) {
    if (config.map[key] === null) return null;
    slug = config.map[key];
  } else if (config.slugFn === 'raw') {
    slug = key;
  } else {
    slug = key.replace(/\s+/g, '-').replace(/[/'()]/g, '');
  }
  return config.base + slug + (config.suffix || '');
}

const COMPONENTS = [
  {
    id: "accordion",
    name: "Accordion",
    category: "Disclosure",
    desc: "A vertically stacked set of interactive headings, each revealing or hiding a section of content when clicked.",
    what: `<p>Accordion organizes content into collapsible sections under labeled headers. Each section has a clickable trigger — typically a title with a chevron indicator — that expands or collapses the associated content panel. Depending on configuration, only one section can be open at a time (exclusive mode) or multiple sections can be open simultaneously. This pattern keeps long pages compact and scannable, letting users focus on the sections most relevant to them without being overwhelmed by all content at once.</p><p>The trade-off is that hidden content is harder to discover, so it works best when users have a clear mental model of what each section contains. Accordions are a strong choice for FAQ sections, grouped settings, and structured documentation where topics are clearly named and users are looking for something specific rather than reading everything linearly. When in doubt, consider whether showing the content directly might serve users better.</p>`,
    anatomy: [
      { title: "Container", desc: "Wraps all items and provides consistent visual grouping." },
      { title: "Trigger", desc: "The clickable header that toggles the panel open or closed." },
      { title: "Indicator", desc: "An icon (usually a chevron) that visually signals open/closed state." },
      { title: "Content Panel", desc: "The revealed section containing the body content." }
    ],
    use: [
      "FAQ sections where users scan for specific questions",
      "Settings panels with many grouped options",
      "Sidebar navigation with nested sub-items",
      "Product detail pages (specs, shipping, returns)",
      "Mobile layouts where vertical space is limited"
    ],
    avoid: [
      "When users need to see all content simultaneously for comparison",
      "For critical information that must always be visible",
      "When there are only 1–2 items — just show the content directly",
      "When the content inside is very short — the toggle overhead isn't worth it",
      "Complex multi-step forms where context from previous steps matters"
    ],
    icons: ["chevron-down", "chevron-up", "chevron-right", "plus", "minus"],
    states: [
      { name: "Collapsed", desc: "The default state — only the trigger is visible, content is hidden." },
      { name: "Expanded", desc: "Content panel is fully visible and the indicator (chevron) is rotated." },
      { name: "Focused", desc: "The trigger has keyboard focus — a visible focus ring is shown." },
      { name: "Disabled", desc: "The trigger is non-interactive; toggling is prevented." },
      { name: "Loading", desc: "Content is being fetched asynchronously before it can be shown." }
    ],
    prompt: `Create an Accordion component with collapsed and expanded states, supporting both single-open and multi-open modes. Include a visible chevron indicator that rotates on expand, and ensure full keyboard accessibility with arrow key navigation between triggers. Support a disabled state per item and an optional loading state for async content. Use design tokens for spacing, border, and transition timing.`,
    related: ["collapsible", "tabs", "separator"],
    aka: [
      { system: "Fluent", term: "Accordion" },
      { system: "Ant Design", term: "Collapse" },
      { system: "Chakra UI", term: "Accordion" },
      { system: "Bootstrap", term: "Accordion" },
      { system: "Radix UI", term: "Accordion" },
      { system: "Shadcn/UI", term: "Accordion" },
      { system: "Carbon", term: "Accordion" },
          { system: "Dell", term: "Accordion" },
          { system: "USWDS", term: "Accordion" },
          { system: "Momentum", term: "Accordion" },
          { system: "Clarity", term: "Accordion" },
          { system: "Paste", term: "Disclosure" },
          { system: "GOV.UK", term: "Accordion" },
          { system: "Lightning", term: "Accordion" },
          { system: "Spectrum", term: "Accordion" },
          { system: "Polaris", term: "Collapsible" },
          { system: "PatternFly", term: "Accordion" },
          { system: "EUI", term: "Accordion" },
          { system: "HeroUI", term: "Accordion" },
          { system: "Visa", term: "Accordion" },
          { system: "eBay", term: "Accordion" },
          { system: "Flowbite", term: "Accordion" },
          { system: "Cedar", term: "Accordion" },
          { system: "Forma 36", term: "Accordion" },
          { system: "Aurora", term: "Collapse" },
          { system: "NewsKit", term: "Accordion" },
    ],
    previews: [
      { label: "Single open", content: `<div class="prev-accordion">
      <div class="acc-item open">
        <button class="acc-trigger" onclick="this.closest('.acc-item').classList.toggle('open')">
          What is a design system? <span>+</span>
        </button>
        <div class="acc-content">A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.</div>
      </div>
      <div class="acc-item">
        <button class="acc-trigger" onclick="this.closest('.acc-item').classList.toggle('open')">
          Why use components? <span>+</span>
        </button>
        <div class="acc-content">Components enforce consistency, reduce duplication, and speed up development across teams.</div>
      </div>
      <div class="acc-item">
        <button class="acc-trigger" onclick="this.closest('.acc-item').classList.toggle('open')">
          When should I build custom UI? <span>+</span>
        </button>
        <div class="acc-content">Only when a standard component cannot meet your needs after exploring all its variants and configurations.</div>
      </div>
    </div>` },
      { label: "All closed", content: `<div class="prev-accordion">
      <div class="acc-item">
        <button class="acc-trigger" onclick="this.closest('.acc-item').classList.toggle('open')">
          What is a design system? <span>+</span>
        </button>
        <div class="acc-content">A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.</div>
      </div>
      <div class="acc-item">
        <button class="acc-trigger" onclick="this.closest('.acc-item').classList.toggle('open')">
          Why use components? <span>+</span>
        </button>
        <div class="acc-content">Components enforce consistency, reduce duplication, and speed up development across teams.</div>
      </div>
      <div class="acc-item">
        <button class="acc-trigger" onclick="this.closest('.acc-item').classList.toggle('open')">
          When should I build custom UI? <span>+</span>
        </button>
        <div class="acc-content">Only when a standard component cannot meet your needs after exploring all its variants and configurations.</div>
      </div>
    </div>` },
    ],
  },
  {
    id: "alert",
    name: "Alert",
    category: "Feedback",
    desc: "A static, non-interactive message that communicates important information, feedback, or status to the user.",
    what: `<p>Alerts draw attention to important information without requiring a user action. They are inline — they appear within the page layout rather than floating above it — and they persist until the condition they describe is resolved or dismissed. Alerts come in semantic variants: informational (blue), success (green), warning (yellow), and error (red). Each variant carries a different urgency level.</p><p>Because they live in the normal document flow, alerts are appropriate for status messages, system notices, and feedback that relates directly to the content surrounding it, rather than a global or transient event. Well-written alerts include both a short title and a descriptive message. An optional action link or button can direct users to the next step without requiring them to hunt through the interface. Keep the tone factual and the content actionable — vague alerts cause confusion rather than clarity.</p>`,
    anatomy: [
      { title: "Icon", desc: "Reinforces the alert type (info, success, warning, error) at a glance." },
      { title: "Title", desc: "A short, scannable summary of the message." },
      { title: "Description", desc: "Optional supporting text with more detail or instructions." },
      { title: "Action", desc: "Optional link or button for a direct next step." }
    ],
    use: [
      "Form validation summaries at the top of a form",
      "System status messages (e.g., 'Maintenance scheduled for tonight')",
      "Permission or access warnings on restricted pages",
      "Successful completion of a background task the user initiated",
      "Contextual tips or informational notices within a workflow"
    ],
    avoid: [
      "For ephemeral confirmations — use a Toast instead",
      "When the message requires user input or a decision — use an Alert Dialog",
      "Stacking many alerts at once — prioritize the most critical one",
      "As a replacement for empty states or placeholder content",
      "For marketing or promotional messages"
    ],
    icons: ["alert-triangle", "alert-circle", "check-circle", "info", "x-circle"],
    states: [
      { name: "Info", desc: "Neutral informational message, typically blue — no urgency implied." },
      { name: "Success", desc: "Confirms a positive outcome, typically green." },
      { name: "Warning", desc: "Signals a potential issue that needs attention, typically yellow." },
      { name: "Error", desc: "Indicates a failure or blocking condition, typically red." },
      { name: "Dismissible", desc: "An optional close button allows the user to remove the alert from the page." }
    ],
    prompt: `Create an Alert component with informational, success, warning, and error semantic variants. Include an optional title, body text, dismiss button, and action link. Ensure it is announced to screen readers using role="alert" or aria-live. Use design tokens for color, icon, and spacing per variant.`,
    related: ["toast", "alert-dialog", "badge"],
    aka: [
      { system: "Fluent", term: "Message bar" },
      { system: "Ant Design", term: "Alert" },
      { system: "Chakra UI", term: "Alert" },
      { system: "Bootstrap", term: "Alert" },
      { system: "Shadcn/UI", term: "Alert" },
      { system: "Canvas", term: "Banner" },
      { system: "Carbon", term: "Notification" },
          { system: "Atlassian", term: "Section message" },
          { system: "Dell", term: "Message bar" },
          { system: "USWDS", term: "Alert" },
          { system: "Momentum", term: "Banner" },
          { system: "Clarity", term: "Alert" },
          { system: "Evergreen", term: "Alert" },
          { system: "Paste", term: "Alert" },
          { system: "GOV.UK", term: "Notification banner" },
          { system: "Lightning", term: "Prompt" },
          { system: "Spectrum", term: "Alert Banner" },
          { system: "Polaris", term: "Banner" },
          { system: "PatternFly", term: "Alert" },
          { system: "EUI", term: "Callout" },
          { system: "HeroUI", term: "Alert" },
          { system: "Visa", term: "Section message" },
          { system: "eBay", term: "Alert notice" },
          { system: "Flowbite", term: "Alerts" },
          { system: "Cedar", term: "Banner" },
          { system: "Forma 36", term: "Note" },
          { system: "Aurora", term: "Alert" },
          { system: "Instructure UI", term: "Alert" },
          { system: "NewsKit", term: "Inline Message" },
    ],
    previews: [
      { label: "Info", content: `<div style="width:100%;max-width:480px;display:flex;align-items:flex-start;gap:12px;padding:14px 16px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;font-size:14px;color:#1e40af;">
  <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='flex-shrink:0;margin-top:1px;'><circle cx='12' cy='12' r='10'/><path d='M12 16v-4M12 8h.01'/></svg>
  <div><div style='font-weight:600;margin-bottom:2px;'>Heads up</div><div style='opacity:0.85;'>You can add components to your app using the CLI.</div></div>
</div>` },
      { label: "Success", content: `<div style="width:100%;max-width:480px;display:flex;align-items:flex-start;gap:12px;padding:14px 16px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:10px;font-size:14px;color:#166534;">
  <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='flex-shrink:0;margin-top:1px;'><path d='M22 11.08V12a10 10 0 1 1-5.93-9.14'/><path d='m9 11 3 3L22 4'/></svg>
  <div><div style='font-weight:600;margin-bottom:2px;'>Payment confirmed</div><div style='opacity:0.85;'>Your subscription has been updated successfully.</div></div>
</div>` },
      { label: "Warning", content: `<div style="width:100%;max-width:480px;display:flex;align-items:flex-start;gap:12px;padding:14px 16px;background:#fffbeb;border:1px solid #fde68a;border-radius:10px;font-size:14px;color:#92400e;">
  <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='flex-shrink:0;margin-top:1px;'><path d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/><path d='M12 9v4'/><path d='M12 17h.01'/></svg>
  <div><div style='font-weight:600;margin-bottom:2px;'>Action required</div><div style='opacity:0.85;'>Your billing information is outdated. Update it to avoid service interruption.</div></div>
</div>` },
      { label: "Error", content: `<div style="width:100%;max-width:480px;display:flex;align-items:flex-start;gap:12px;padding:14px 16px;background:#fef2f2;border:1px solid #fecaca;border-radius:10px;font-size:14px;color:#991b1b;">
  <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='flex-shrink:0;margin-top:1px;'><circle cx='12' cy='12' r='10'/><path d='m15 9-6 6'/><path d='m9 9 6 6'/></svg>
  <div><div style='font-weight:600;margin-bottom:2px;'>Upload failed</div><div style='opacity:0.85;'>The file exceeds the 10MB limit. Please choose a smaller file.</div></div>
</div>` },
    ],
  },
  {
    id: "alert-dialog",
    name: "Alert Dialog",
    category: "Overlay",
    desc: "A modal overlay that interrupts the user with a critical message requiring an explicit decision before they can continue.",
    what: `<p>Unlike a regular Dialog, an Alert Dialog is specifically designed for destructive or irreversible actions. It traps focus, blocks all background interaction, and forces the user to make an explicit choice — either confirm or cancel — before they can continue. It conveys urgency and consequence. The key distinction from a standard Dialog is intent: Alert Dialogs are reserved for moments where proceeding without acknowledgment would be genuinely harmful.</p><p>The confirm action is often styled destructively (red), while cancel is the prominent safe path — visually and positionally. The overlay backdrop should be opaque enough to communicate that the rest of the UI is inaccessible until a decision is made. Overusing this pattern dilutes its seriousness, so each instance should feel genuinely necessary. If users regularly dismiss alert dialogs without reading them, the pattern is being overused and loses its power to convey real consequence.</p>`,
    anatomy: [
      { title: "Title", desc: "A clear, direct statement of what is about to happen." },
      { title: "Description", desc: "Explains the consequences of the action." },
      { title: "Cancel action", desc: "The safe exit that dismisses the dialog without proceeding." },
      { title: "Confirm action", desc: "A clearly labeled, often destructively styled button." },
      { title: "Overlay", desc: "Darkened backdrop that blocks the rest of the UI." }
    ],
    use: [
      "Confirming permanent deletions (files, accounts, data)",
      "Irreversible actions like publishing or sending",
      "Before actions with significant side effects (e.g., 'This will notify all users')",
      "Security-sensitive operations (revoke access, reset passwords)",
      "When the user must acknowledge a blocking error or warning"
    ],
    avoid: [
      "For routine or easily reversible actions — this creates dialog fatigue",
      "When a simple toast confirmation is sufficient",
      "As a pattern for collecting form input — use a Dialog instead",
      "For informational messages that don't require a decision — use an Alert",
      "Too frequently — each use should feel genuinely important"
    ],
    icons: ["alert-triangle", "trash-2", "x", "check", "shield-alert"],
    states: [
      { name: "Open", desc: "Dialog is visible and blocking — overlay is active, focus is trapped inside." },
      { name: "Confirming", desc: "The confirm button is in a loading state while the destructive action processes." },
      { name: "Closed", desc: "Dialog is hidden; no DOM presence unless using a portal." },
      { name: "Confirm disabled", desc: "The confirm action is disabled until the user performs a required step, such as typing a name." },
      { name: "Error", desc: "The action failed; an inline error message is shown within the dialog." }
    ],
    prompt: `Create an Alert Dialog component for destructive or irreversible actions, with a title, descriptive message, and confirm/cancel buttons. Trap focus within the dialog and return focus to the trigger on close. Support a confirming (loading) state on the primary action and an optional confirm-disabled state requiring user input. Use design tokens for button colors (destructive red) and overlay backdrop.`,
    related: ["dialog", "alert", "sheet"],
    aka: [
      { system: "Material Design", term: "Dialogs" },
      { system: "Fluent", term: "Dialog" },
      { system: "Ant Design", term: "Modal confirm" },
      { system: "Radix UI", term: "Alert Dialog" },
      { system: "Shadcn/UI", term: "Alert Dialog" },
      { system: "Chakra UI", term: "Alert Dialog" },
      { system: "Canvas", term: "Modal" },
      { system: "Carbon", term: "Modal" },
          { system: "Atlassian", term: "Modal dialog" },
          { system: "Dell", term: "Modal" },
          { system: "USWDS", term: "Modal" },
          { system: "Momentum", term: "Dialog" },
          { system: "Clarity", term: "Modal" },
          { system: "Evergreen", term: "Dialog" },
          { system: "Paste", term: "Alert Dialog" },
          { system: "Lightning", term: "Modals" },
          { system: "Spectrum", term: "Alert Dialog" },
          { system: "Polaris", term: "Modal" },
          { system: "PatternFly", term: "Modal" },
          { system: "EUI", term: "Modal" },
          { system: "HeroUI", term: "AlertDialog" },
    ],
    previews: [
      { label: "Confirm", content: `<div class="prev-dialog">
  <div class="dialog-title">Discard changes?</div>
  <div class="dialog-desc">You have unsaved changes. If you leave now, all changes will be lost and cannot be recovered.</div>
  <div class="dialog-actions">
    <button class="prev-btn-outline prev-btn-md">Keep editing</button>
    <button class="prev-btn prev-btn-md">Discard changes</button>
  </div>
</div>` },
      { label: "Destructive", content: `<div class="prev-dialog">
  <div class="dialog-title">Delete project?</div>
  <div class="dialog-desc">This action cannot be undone. All files, collaborators, and history associated with <strong>Acme Dashboard</strong> will be permanently deleted.</div>
  <div class="dialog-actions">
    <button class="prev-btn-outline prev-btn-md">Cancel</button>
    <button class="prev-btn" style="background:#ef4444;color:#fff;font-size:13px;padding:7px 14px;">Delete project</button>
  </div>
</div>` },
    ],
  },
  {
    id: "avatar",
    name: "Avatar",
    category: "Data Display",
    desc: "A visual representation of a user or entity, shown as an image, initials, or fallback icon.",
    what: `<p>Avatars create a human connection by associating a face or identity with content. They commonly appear in navigation headers, comment threads, user lists, task assignments, and @mention chips. Avatars communicate at a glance who is involved without requiring you to read a name. They come in multiple sizes — typically small, medium, and large — tuned to different contexts like inline mentions versus full profile displays.</p><p>When no image is available, they fall back gracefully to a generated initial monogram or a generic icon. In group contexts, multiple avatars are often stacked in an overlapping cluster to indicate collaboration without enumerating every participant. The overlap pattern communicates "multiple people are involved" at a glance while keeping the footprint small. Always handle failed image loads gracefully, and never expose a broken image state to users — the fallback should activate automatically when the image URL cannot be resolved.</p>`,
    anatomy: [
      { title: "Image", desc: "The primary display — a profile photo or custom image." },
      { title: "Fallback", desc: "Initials or icon shown when the image fails to load or isn't provided." },
      { title: "Size variants", desc: "sm / md / lg sizes for different contexts." },
      { title: "Avatar Group", desc: "Stacked or clustered avatars representing multiple users." }
    ],
    use: [
      "User profiles in navigation headers or sidebars",
      "Comment threads and activity feeds",
      "Assignee or collaborator indicators on tasks",
      "Mention chips in rich text editors",
      "Team or member listing pages"
    ],
    avoid: [
      "When the identity isn't relevant to the context — decorative avatars add noise",
      "Without fallback handling — always define what happens when images fail",
      "Very small sizes for primary identification (under 20px becomes unrecognizable)",
      "As a substitute for a full user profile card when more info is needed",
      "Showing real photos without user consent or appropriate privacy handling"
    ],
    icons: ["user", "user-circle", "user-round", "image", "camera"],
    states: [
      { name: "Image loaded", desc: "The profile photo is displayed successfully." },
      { name: "Fallback initials", desc: "The image failed or wasn't provided — initials are shown instead." },
      { name: "Fallback icon", desc: "No name or image is available; a generic person icon is displayed." },
      { name: "Loading", desc: "Image is being fetched — a placeholder or shimmer is shown." },
      { name: "Group / stacked", desc: "Multiple avatars overlap in a cluster, with a count badge for overflow." },
      { name: "With indicator", desc: "A small status dot (green for online, grey for offline) is overlaid on the avatar." }
    ],
    prompt: `Create an Avatar component that supports an image, initials fallback, and generic icon fallback in that priority order. Include size variants (xs, sm, md, lg, xl) and an optional status indicator dot. Support a stacked group variant with overflow count. Use design tokens for background colors, border radius, and font sizing.`,
    related: ["badge", "tooltip", "hover-card"],
    aka: [
      { system: "Ant Design", term: "Avatar" },
      { system: "Fluent", term: "Avatar" },
      { system: "Chakra UI", term: "Avatar" },
      { system: "Base Web", term: "Avatar" },
      { system: "Radix UI", term: "Avatar" },
      { system: "Shadcn/UI", term: "Avatar" },
          { system: "Atlassian", term: "Avatar" },
          { system: "Momentum", term: "Avatar" },
          { system: "Evergreen", term: "Avatar" },
          { system: "Paste", term: "Avatar" },
          { system: "Lightning", term: "Avatar" },
          { system: "Spectrum", term: "Avatar" },
          { system: "Polaris", term: "Avatar" },
          { system: "PatternFly", term: "Avatar" },
          { system: "EUI", term: "Avatar" },
          { system: "HeroUI", term: "Avatar" },
          { system: "Visa", term: "Avatar" },
          { system: "eBay", term: "Avatar" },
          { system: "Flowbite", term: "Avatar" },
          { system: "Forma 36", term: "Avatar" },
          { system: "Instructure UI", term: "Avatar" },
    ],
    previews: [
      { label: "Default", content: `<div class="prev-avatar">
  <div class="avatar avatar-sm">MK</div>
  <div class="avatar">JD</div>
  <div class="avatar avatar-lg" style="background:#8b5cf6;color:#fff;">AS</div>
  <div class="avatar" style="background:#f97316;color:#fff;">PR</div>
</div>` },
      { label: "Sizes", content: `<div style="display:flex;align-items:center;gap:16px;">
  <div style="width:24px;height:24px;border-radius:50%;background:#3b82f6;color:#fff;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;">XS</div>
  <div style="width:32px;height:32px;border-radius:50%;background:#22c55e;color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;">SM</div>
  <div style="width:40px;height:40px;border-radius:50%;background:#8b5cf6;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;">MD</div>
  <div style="width:52px;height:52px;border-radius:50%;background:#ef4444;color:#fff;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;">LG</div>
  <div style="width:64px;height:64px;border-radius:50%;background:#f97316;color:#fff;display:flex;align-items:center;justify-content:center;font-size:19px;font-weight:700;">XL</div>
</div>` },
      { label: "Fallback", content: `<div style="display:flex;align-items:center;gap:16px;">
  <div style="width:40px;height:40px;border-radius:50%;background:#3b82f6;color:#fff;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:700;">JD</div>
  <div style="width:40px;height:40px;border-radius:50%;background:#e5e7eb;border:1px solid #d1d5db;display:flex;align-items:center;justify-content:center;"><svg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='#888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg></div>
  <div style="display:flex;margin-left:4px;">
    <div style="width:36px;height:36px;border-radius:50%;background:#1a0a2e;color:#a78bfa;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;border:2px solid #ffffff;margin-right:-10px;">AL</div>
    <div style="width:36px;height:36px;border-radius:50%;background:#166534;color:#bbf7d0;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;border:2px solid #ffffff;margin-right:-10px;">BC</div>
    <div style="width:36px;height:36px;border-radius:50%;background:#92400e;color:#fde68a;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;border:2px solid #ffffff;">+3</div>
  </div>
</div>` },
    ],
  },
  {
    id: "badge",
    name: "Badge",
    category: "Data Display",
    desc: "A small, visually distinct label used to annotate content with status, category, count, or metadata.",
    what: `<p>Badges are compact labels that add context to other elements without taking up significant space. They can communicate status (Active, Archived, Draft), category membership (Engineering, Design), numeric counts (3 unread messages), or feature flags (New, Beta, Deprecated). Because they're small, they rely on a combination of color and text to convey meaning — never color alone, since that fails for colorblind users.</p><p>Badges attach to other UI elements: a navigation item, a table row, a card header. They annotate rather than stand alone. Keep label text extremely short — one to three words is the practical maximum before a badge becomes hard to read. Numeric badges used for notification counts should cap at a reasonable maximum (like 99+) rather than displaying arbitrarily large numbers that overflow their container. Semantic color choices must be applied consistently across the product so users build reliable mental associations between color and meaning.</p>`,
    anatomy: [
      { title: "Color", desc: "Carries semantic meaning (green = success, red = error, etc.)." },
      { title: "Optional icon", desc: "A small icon can reinforce the label for quick scanning." },
      { title: "Label text", desc: "Short, scannable text — 1 to 3 words is ideal." }
    ],
    use: [
      "Status labels (Active, Archived, Draft, Published)",
      "Notification counts on navigation items",
      "Category or tag labels on list items and cards",
      "Feature flags (New, Beta, Deprecated)",
      "Role or permission indicators in user tables"
    ],
    avoid: [
      "For displaying long text — keep badges to 1–3 words max",
      "As a primary call-to-action — use a Button instead",
      "Relying only on color to convey meaning (fails accessibility)",
      "Overloading a single item with many badges — choose the most important",
      "Using badges for binary true/false data — a simple icon or checkmark is cleaner"
    ],
    icons: ["tag", "circle", "dot", "check", "x"],
    states: [
      { name: "Default", desc: "Solid background with high-contrast text — the most prominent style." },
      { name: "Outline", desc: "Transparent background with a border — a subtler, lower-emphasis style." },
      { name: "Success", desc: "Green semantic variant indicating a positive or active state." },
      { name: "Warning", desc: "Yellow/amber variant indicating a pending or cautionary state." },
      { name: "Danger", desc: "Red variant indicating an error, deprecated status, or destructive condition." }
    ],
    prompt: `Create a Badge component with semantic color variants (default, success, warning, danger, info) and style variants (solid, outline, subtle). Support size variants (sm, md) and an optional dot-only mode for compact status indicators. Ensure sufficient color contrast for accessibility. Use design tokens for color, border radius, font size, and padding.`,
    related: ["label", "avatar", "toggle"],
    aka: [
      { system: "Material Design", term: "Badge" },
      { system: "Ant Design", term: "Badge" },
      { system: "Fluent", term: "Badge" },
      { system: "Chakra UI", term: "Badge" },
      { system: "Bootstrap", term: "Badge" },
      { system: "Shadcn/UI", term: "Badge" },
      { system: "Canvas", term: "Count Badge" },
      { system: "Carbon", term: "Tag" },
          { system: "Atlassian", term: "Badge" },
          { system: "Dell", term: "Badge" },
          { system: "USWDS", term: "Tag" },
          { system: "Momentum", term: "Badge" },
          { system: "Clarity", term: "Badge" },
          { system: "Evergreen", term: "Badge & Pill" },
          { system: "Paste", term: "Badge" },
          { system: "GOV.UK", term: "Tag" },
          { system: "Lightning", term: "Badge" },
          { system: "Spectrum", term: "Badge" },
          { system: "Polaris", term: "Badge" },
          { system: "PatternFly", term: "Badge" },
          { system: "EUI", term: "Badge" },
          { system: "HeroUI", term: "Badge" },
          { system: "Visa", term: "Badge" },
          { system: "eBay", term: "Badge" },
          { system: "Flowbite", term: "Badge" },
          { system: "Forma 36", term: "Badge" },
          { system: "Aurora", term: "Badge" },
          { system: "Instructure UI", term: "Pill" },
    ],
    previews: [
      { label: "Variants", content: `<div style="display:flex;flex-direction:column;gap:20px;min-height:140px;">
  <div>
    <div class="prev-overline">Solid</div>
    <div class="prev-flex-wrap">
      <span class="badge badge-default">Default</span>
      <span class="badge badge-success">Success</span>
      <span class="badge badge-warn">Warning</span>
      <span class="badge badge-danger">Danger</span>
      <span class="badge badge-info">Info</span>
    </div>
  </div>
  <div>
    <div class="prev-overline">Outline</div>
    <div class="prev-flex-wrap">
      <span class="badge badge-outline">Default</span>
      <span class="badge badge-outline-success">Success</span>
      <span class="badge badge-outline-warn">Warning</span>
      <span class="badge badge-outline-danger">Danger</span>
      <span class="badge badge-outline-info">Info</span>
    </div>
  </div>
  <div>
    <div class="prev-overline">With dot indicator</div>
    <div class="prev-flex-wrap">
      <span class="badge badge-dot badge-success">Active</span>
      <span class="badge badge-dot badge-warn">Pending</span>
      <span class="badge badge-dot badge-danger">Offline</span>
      <span class="badge badge-dot badge-info">In review</span>
    </div>
  </div>
</div>` },
      { label: "Sizes", content: `<div style="display:flex;flex-direction:column;gap:20px;min-height:140px;">
  <div>
    <div class="prev-overline">Small</div>
    <div class="prev-flex-wrap">
      <span class="badge badge-sm badge-default">Default</span>
      <span class="badge badge-sm badge-success">Active</span>
      <span class="badge badge-sm badge-warn">Pending</span>
      <span class="badge badge-sm badge-danger">Error</span>
    </div>
  </div>
  <div>
    <div class="prev-overline">Default</div>
    <div class="prev-flex-wrap">
      <span class="badge badge-default">Default</span>
      <span class="badge badge-success">Active</span>
      <span class="badge badge-warn">Pending</span>
      <span class="badge badge-danger">Error</span>
    </div>
  </div>
  <div>
    <div class="prev-overline">Large</div>
    <div class="prev-flex-wrap">
      <span class="badge badge-lg badge-default">Default</span>
      <span class="badge badge-lg badge-success">Active</span>
      <span class="badge badge-lg badge-warn">Pending</span>
      <span class="badge badge-lg badge-danger">Error</span>
    </div>
  </div>
</div>` },
      { label: "Notification", content: `<div style="display:flex;gap:32px;align-items:center;min-height:140px;justify-content:center;">
  <div class="prev-center-col">
    <span class="badge-notif">
      <i data-lucide="bell" style="width:24px;height:24px;color:var(--text-muted);"></i>
      <span class="badge-notif-count">3</span>
    </span>
    <span style="font-size:11px;color:var(--text-muted);">Alerts</span>
  </div>
  <div class="prev-center-col">
    <span class="badge-notif">
      <i data-lucide="mail" style="width:24px;height:24px;color:var(--text-muted);"></i>
      <span class="badge-notif-count">12</span>
    </span>
    <span style="font-size:11px;color:var(--text-muted);">Inbox</span>
  </div>
  <div class="prev-center-col">
    <span class="badge-notif">
      <i data-lucide="message-square" style="width:24px;height:24px;color:var(--text-muted);"></i>
      <span class="badge-notif-count">99+</span>
    </span>
    <span style="font-size:11px;color:var(--text-muted);">Chat</span>
  </div>
  <div class="prev-center-col">
    <span class="badge-notif">
      <i data-lucide="shopping-cart" style="width:24px;height:24px;color:var(--text-muted);"></i>
      <span class="badge-notif-count">2</span>
    </span>
    <span style="font-size:11px;color:var(--text-muted);">Cart</span>
  </div>
</div>` },
      { label: "In Context", content: `<div style="display:flex;flex-direction:column;gap:16px;min-height:140px;">
  <div style="display:flex;flex-direction:column;border:1px solid var(--border);border-radius:8px;overflow:hidden;font-size:13px;">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid var(--border);">
      <span style="font-weight:600;color:var(--text);">Authentication API</span>
      <span class="badge badge-sm badge-success">Operational</span>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid var(--border);">
      <span style="font-weight:600;color:var(--text);">Payment Gateway</span>
      <span class="badge badge-sm badge-warn">Degraded</span>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-bottom:1px solid var(--border);">
      <span style="font-weight:600;color:var(--text);">Search Index</span>
      <span class="badge badge-sm badge-danger">Outage</span>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;">
      <span style="font-weight:600;color:var(--text);">CDN</span>
      <span class="badge badge-sm badge-dot badge-success">Healthy</span>
    </div>
  </div>
  <div style="display:flex;gap:6px;flex-wrap:wrap;">
    <span class="badge badge-sm badge-outline">react</span>
    <span class="badge badge-sm badge-outline">typescript</span>
    <span class="badge badge-sm badge-outline">design-system</span>
    <span class="badge badge-sm badge-info">v2.0</span>
    <span class="badge badge-sm badge-outline-warn">breaking</span>
  </div>
</div>` },
    ],
  },
  {
    id: "breadcrumb",
    name: "Breadcrumb",
    category: "Navigation",
    desc: "A secondary navigation aid that shows a user's location within a site or app hierarchy.",
    what: `<p>Breadcrumbs display the full navigational path from the root of a site or application down to the current page. Each step in the path is a clickable link, except for the final item which represents the current location and is non-interactive. This lets users understand exactly where they are within the information hierarchy and jump back up to any ancestor level in a single click — without relying on the browser back button, which only moves one step at a time.</p><p>Breadcrumbs are a secondary navigation aid: they complement primary navigation rather than replace it. They're most valuable in deep, multi-level content architectures like e-commerce catalogs, documentation sites, file management systems, and admin dashboards with many nested sections. When the path is very long, intermediate items can be collapsed into an ellipsis to keep the breadcrumb scannable. Breadcrumbs also serve SEO purposes by reflecting the URL hierarchy and helping search engines understand site structure.</p>`,
    anatomy: [
      { title: "Home link", desc: "Usually the first item — links back to the root or dashboard." },
      { title: "Path items", desc: "Intermediate levels in the hierarchy, each a clickable link." },
      { title: "Current page", desc: "The last item — non-interactive, represents the current location." },
      { title: "Separator", desc: "A visual divider between items (/, >, chevron)." }
    ],
    use: [
      "Deep content hierarchies (e-commerce, docs, file systems)",
      "Administration dashboards with nested sections",
      "Content sites with categories and subcategories",
      "Any page more than 2 levels deep from the root",
      "When users navigate to pages from search or external links"
    ],
    avoid: [
      "Flat sites or apps with only 1–2 levels of hierarchy",
      "Single-page apps where all content is on one level",
      "As a replacement for primary navigation",
      "Mobile views where space is limited and the path is already clear",
      "When the current page's title alone provides sufficient orientation"
    ],
    icons: ["chevron-right", "home", "slash", "folder", "file"],
    states: [
      { name: "Default", desc: "Ancestor items are displayed as clickable links." },
      { name: "Current page", desc: "The last item is non-interactive and visually distinguished (often bolder or higher contrast)." },
      { name: "Hover", desc: "An ancestor link shows an underline or color change on hover." },
      { name: "Collapsed", desc: "Intermediate items are hidden behind an ellipsis when the path is too long." },
      { name: "Focused", desc: "A link in the breadcrumb has keyboard focus — visible focus ring is shown." }
    ],
    prompt: `Create a Breadcrumb component using a nav element with aria-label="Breadcrumb" and an ordered list, where the current page item has aria-current="page". Support automatic collapsing of long paths behind an expandable ellipsis. Include configurable separators (slash, chevron, or custom). Use design tokens for link color, separator color, and spacing.`,
    related: ["pagination", "tabs"],
    aka: [
      { system: "Ant Design", term: "Breadcrumb" },
      { system: "Fluent", term: "Breadcrumb" },
      { system: "Chakra UI", term: "Breadcrumb" },
      { system: "Bootstrap", term: "Breadcrumb" },
      { system: "Base Web", term: "Breadcrumbs" },
      { system: "Shadcn/UI", term: "Breadcrumb" },
      { system: "Canvas", term: "Breadcrumbs" },
      { system: "Carbon", term: "Breadcrumb" },
          { system: "Atlassian", term: "Breadcrumbs" },
          { system: "Dell", term: "Breadcrumb" },
          { system: "USWDS", term: "Breadcrumb" },
          { system: "Clarity", term: "Breadcrumbs" },
          { system: "Paste", term: "Breadcrumb" },
          { system: "GOV.UK", term: "Breadcrumbs" },
          { system: "Lightning", term: "Breadcrumbs" },
          { system: "Spectrum", term: "Breadcrumbs" },
          { system: "PatternFly", term: "Breadcrumb" },
          { system: "EUI", term: "Breadcrumbs" },
          { system: "HeroUI", term: "Breadcrumbs" },
          { system: "Visa", term: "Breadcrumbs" },
          { system: "eBay", term: "Breadcrumb" },
          { system: "Flowbite", term: "Breadcrumb" },
          { system: "Cedar", term: "Breadcrumb" },
          { system: "Aurora", term: "Breadcrumb" },
          { system: "Instructure UI", term: "Breadcrumb" },
          { system: "NewsKit", term: "Breadcrumbs" },
    ],
    previews: [
      { label: "Default", content: `<div class="prev-breadcrumb">
  <span class="bc-item">Home</span>
  <span class="bc-sep">›</span>
  <span class="bc-item">Products</span>
  <span class="bc-sep">›</span>
  <span class="bc-item">Design Tools</span>
  <span class="bc-sep">›</span>
  <span class="bc-item current">Component Library</span>
</div>` },
      { label: "With icons", content: `<div style="display:flex;align-items:center;gap:6px;font-size:13px;">
  <span style="display:inline-flex;align-items:center;gap:4px;color:var(--text-muted);cursor:pointer;">
    <svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/><polyline points='9 22 9 12 15 12 15 22'/></svg>
    Home
  </span>
  <span style="color:var(--text-subtle);">›</span>
  <span style="display:inline-flex;align-items:center;gap:4px;color:var(--text-muted);cursor:pointer;">
    <svg width='13' height='13' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'/></svg>
    Design
  </span>
  <span style="color:var(--text-subtle);">›</span>
  <span style="color:var(--text);font-weight:500;">Components</span>
</div>` },
      { label: "Collapsed", content: `<div style="display:flex;align-items:center;gap:6px;font-size:13px;">
  <span style="color:var(--text-muted);cursor:pointer;">Home</span>
  <span style="color:var(--text-subtle);">›</span>
  <span style="color:var(--text-muted);cursor:pointer;border:1px solid var(--border);border-radius:4px;padding:1px 6px;font-size:12px;">…</span>
  <span style="color:var(--text-subtle);">›</span>
  <span style="color:var(--text-muted);cursor:pointer;">UI Kit</span>
  <span style="color:var(--text-subtle);">›</span>
  <span style="color:var(--text);font-weight:500;">Button</span>
</div>` },
    ],
  },
  {
    id: "button",
    name: "Button",
    category: "Action",
    desc: "An interactive element that triggers an action when clicked, pressed, or activated via keyboard.",
    what: `<p>Buttons are the primary mechanism for user-initiated actions. When clicked, pressed, or activated via keyboard, they trigger something: a form submits, a dialog opens, a file uploads, data changes. The label communicates what will happen — always a verb or short verb phrase. Variants establish a visual hierarchy across competing actions on a screen: primary (solid, high contrast) for the main call-to-action, secondary or outline for supporting actions, ghost for low-priority actions, and destructive (typically red) for actions that delete or cannot be undone.</p><p>A page should generally have only one primary button per section to avoid diluting the hierarchy. Button size variants (small, medium, large) allow them to fit appropriately in different contexts — a small button in a table row, a large one as a hero call-to-action. Icon-only buttons must always have an accessible label (aria-label or tooltip) so users relying on assistive technology can identify the action. Never use a button label like "Click here" — the label should describe the outcome, not the mechanics of interaction.</p>`,
    anatomy: [
      { title: "Variant", desc: "Primary, secondary, outline, ghost, or destructive — communicates priority." },
      { title: "Icon", desc: "Optional prefix or suffix icon that reinforces the action." },
      { title: "Label", desc: "Clear, action-oriented verb that describes what happens (Save, Delete, Continue)." },
      { title: "State", desc: "Default, hover, active, disabled, loading." }
    ],
    use: [
      "Submitting forms",
      "Triggering dialogs, drawers, or modals",
      "Primary call-to-action on a page",
      "Confirming or canceling operations",
      "Any user-initiated action that causes a state change"
    ],
    avoid: [
      "For navigation to a new page — use a Link instead",
      "More than one primary button per section — dilutes the visual hierarchy",
      "Vague labels like 'Click here' or 'Submit' — be specific about what happens",
      "As a container for other interactive elements",
      "Disabled buttons without explanation of why and how to enable them"
    ],
    icons: ["arrow-right", "plus", "check", "loader-2", "trash-2"],
    states: [
      { name: "Default", desc: "The resting, interactive state of the button." },
      { name: "Hover", desc: "Cursor is over the button — a subtle background or color shift signals interactivity." },
      { name: "Active / Pressed", desc: "The button is being clicked or pressed — a deeper background or inset shadow provides tactile feedback." },
      { name: "Focused", desc: "The button has keyboard focus — a visible focus ring is shown for accessibility." },
      { name: "Disabled", desc: "The button is non-interactive — reduced opacity, cursor: not-allowed." },
      { name: "Loading", desc: "An action is in progress — a spinner replaces or accompanies the label, and the button is non-interactive." }
    ],
    prompt: `Create a Button component with primary, secondary, ghost, and destructive variants, plus size variants (sm, md, lg). Include disabled, loading (spinner), hover, active, and focused states with a visible focus ring. Support optional leading and trailing icons. Ensure full keyboard accessibility and use design tokens for color, spacing, and border radius.`,
    related: ["toggle", "dropdown-menu", "popover"],
    aka: [
      { system: "Material Design", term: "Buttons" },
      { system: "Ant Design", term: "Button" },
      { system: "Fluent", term: "Button" },
      { system: "Chakra UI", term: "Button" },
      { system: "Bootstrap", term: "Button" },
      { system: "Shadcn/UI", term: "Button" },
      { system: "Canvas", term: "Primary Button" },
      { system: "Carbon", term: "Button" },
          { system: "Atlassian", term: "Button" },
          { system: "Dell", term: "Button" },
          { system: "USWDS", term: "Button" },
          { system: "Momentum", term: "Button" },
          { system: "Clarity", term: "Button" },
          { system: "Evergreen", term: "Button" },
          { system: "Paste", term: "Button" },
          { system: "GOV.UK", term: "Button" },
          { system: "Lightning", term: "Button" },
          { system: "Spectrum", term: "Button" },
          { system: "Polaris", term: "Button" },
          { system: "PatternFly", term: "Button" },
          { system: "EUI", term: "Button" },
          { system: "Ariakit", term: "Button" },
          { system: "HeroUI", term: "Button" },
          { system: "Visa", term: "Button" },
          { system: "eBay", term: "Button" },
          { system: "Flowbite", term: "Buttons" },
          { system: "Cedar", term: "Button" },
          { system: "Forma 36", term: "Button" },
          { system: "Aurora", term: "Button" },
          { system: "Instructure UI", term: "Button" },
          { system: "NewsKit", term: "Button" },
    ],
    previews: [
      { label: "Default", content: `<div class="prev-flex prev-items-center prev-gap-lg prev-wrap">
  <button class="prev-btn">Primary</button>
  <button class="prev-btn-outline">Secondary</button>
  <button class="prev-ghost-btn">Ghost</button>
  <button class="prev-btn-destructive">Destructive</button>
</div>` },
      { label: "Variants", content: `<div class="prev-flex prev-items-center prev-gap-md prev-wrap">
    <button class="prev-btn prev-inline-flex prev-gap-sm">
      <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M5 12h14'/><path d='m12 5 7 7-7 7'/></svg>
      Continue
    </button>
    <button class="prev-btn-outline prev-inline-flex prev-gap-sm">
      <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'/><polyline points='7 10 12 15 17 10'/><line x1='12' x2='12' y1='15' y2='3'/></svg>
      Download
    </button>
    <button class="prev-btn-icon"><svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='var(--text-muted)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><circle cx='12' cy='12' r='1'/><circle cx='19' cy='12' r='1'/><circle cx='5' cy='12' r='1'/></svg></button>
</div>` },
      { label: "Sizes", content: `<div class="prev-flex prev-items-center prev-gap-md prev-wrap">
  <button class="prev-btn prev-btn-sm">Small</button>
  <button class="prev-btn">Medium</button>
  <button class="prev-btn prev-btn-lg">Large</button>
</div>` },
      { label: "States", content: `<div class="prev-flex prev-items-center prev-gap-md prev-wrap">
  <button class="prev-btn">Default</button>
  <button class="prev-btn prev-not-allowed" disabled>Disabled</button>
  <button class="prev-btn prev-inline-flex prev-gap-sm">
    <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='animation:spin 1s linear infinite;'><path d='M21 12a9 9 0 1 1-6.219-8.56'/></svg>
    Loading...
  </button>
</div>` },
    ],
  },
  {
    id: "calendar",
    name: "Calendar",
    category: "Form",
    desc: "A visual date-picker component that lets users browse and select dates or date ranges from a grid view.",
    what: `<p>The Calendar renders a month grid with forward and backward navigation controls. Users can select single dates, multiple non-contiguous dates, or a continuous date range by clicking start and end points. It's most commonly used as the popover content inside a Date Picker trigger, opening when the user clicks a date input field. It can also be embedded directly inline — without a trigger — for interfaces where date selection is a primary interaction, like a booking calendar or a scheduling tool.</p><p>Day cells carry distinct states: today-highlighted, selected, in-range, disabled (for dates outside allowed bounds), and hovered. Disabled dates should be clearly visually differentiated from selectable ones — never just slightly dimmed, which can be ambiguous. Keyboard navigation is critical: arrow keys should move between days, Page Up/Down should move between months, and Home/End should jump to the first and last days of the week. Always pair the calendar with a text input fallback so users who know their exact date can type it directly without navigating the grid.</p>`,
    anatomy: [
      { title: "Month header", desc: "Displays the current month and year with prev/next navigation." },
      { title: "Navigation arrows", desc: "Move between months or years." },
      { title: "Day grid", desc: "A 7-column grid of all days in the month." },
      { title: "Day cell", desc: "Individual date — selectable, disabled, in-range, or today-marked." }
    ],
    use: [
      "Booking and scheduling flows",
      "Date range selection (hotel stays, report periods)",
      "Inline date pickers on forms where dates are a primary field",
      "Event calendars and availability views",
      "Any context where the user benefits from visualizing the full month"
    ],
    avoid: [
      "When users know the exact date — a plain text input is faster",
      "For dates far in the future or past — add a year picker or direct input",
      "For time selection — that requires a separate Time Picker",
      "On very small screens without a proper responsive layout",
      "When only the month and year matter — use simpler select dropdowns"
    ],
    icons: ["calendar", "calendar-days", "calendar-check", "chevron-left", "chevron-right"],
    states: [
      { name: "Default", desc: "Month grid is displayed; no date is selected." },
      { name: "Selected", desc: "A single day cell is highlighted as the chosen date." },
      { name: "Range start / end", desc: "In range-selection mode, the start and end dates are highlighted with distinct markers." },
      { name: "In range", desc: "Days between start and end are highlighted with a continuous fill." },
      { name: "Today", desc: "The current calendar date is visually marked, independent of selection." },
      { name: "Disabled", desc: "Dates outside the allowed range are visually muted and non-interactive." }
    ],
    prompt: `Create a Calendar component supporting single-date and date-range selection modes. Include month/year navigation, today highlight, disabled dates outside a min/max range, and keyboard navigation using arrow keys. Use aria-label on day cells and mark selected dates with aria-selected. Use design tokens for selected, in-range, today, and disabled day cell styles.`,
    related: ["input", "select", "popover"],
    aka: [
      { system: "Material Design", term: "Date Pickers" },
      { system: "Ant Design", term: "Calendar" },
      { system: "Shadcn/UI", term: "Calendar" },
      { system: "Carbon", term: "Date Picker" },
          { system: "Atlassian", term: "Date time picker" },
          { system: "Dell", term: "Date picker" },
          { system: "USWDS", term: "Date picker" },
          { system: "Momentum", term: "Calendar" },
          { system: "Clarity", term: "Date Picker" },
          { system: "Paste", term: "Date Picker" },
          { system: "GOV.UK", term: "Date input" },
          { system: "Lightning", term: "Datepicker" },
          { system: "Polaris", term: "Date picker" },
          { system: "PatternFly", term: "Date picker" },
          { system: "EUI", term: "Date Picker" },
          { system: "HeroUI", term: "DatePicker" },
          { system: "Visa", term: "Date and time selectors" },
          { system: "eBay", term: "Date picker" },
          { system: "Flowbite", term: "Datepicker" },
          { system: "Forma 36", term: "Calendar" },
    ],
    previews: [
      { label: "Default", content: `<div data-calendar style="background:#ffffff;border:1px solid var(--border);border-radius:10px;padding:16px;width:260px;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
    <button style="background:none;border:1px solid var(--border);border-radius:5px;color:var(--text-muted);padding:4px 8px;cursor:pointer;font-size:12px;">‹</button>
    <span class="prev-bold-title">March 2026</span>
    <button style="background:none;border:1px solid var(--border);border-radius:5px;color:var(--text-muted);padding:4px 8px;cursor:pointer;font-size:12px;">›</button>
  </div>
  <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;">
    <div class="prev-hint">Su</div><div class="prev-hint">Mo</div><div class="prev-hint">Tu</div><div class="prev-hint">We</div><div class="prev-hint">Th</div><div class="prev-hint">Fr</div><div class="prev-hint">Sa</div>
    <div></div><div></div><div data-cal-day class="prev-tab">1</div><div data-cal-day class="prev-tab">2</div><div data-cal-day class="prev-tab">3</div><div data-cal-day class="prev-tab">4</div><div data-cal-day class="prev-tab">5</div>
    <div data-cal-day class="prev-tab">6</div><div data-cal-day class="prev-tab">7</div><div data-cal-day class="prev-tab">8</div><div data-cal-day class="prev-tab">9</div><div data-cal-day class="prev-tab">10</div><div data-cal-day class="prev-tab">11</div><div data-cal-day class="prev-tab">12</div>
    <div data-cal-day class="prev-tab">13</div><div data-cal-day class="prev-tab">14</div><div data-cal-day class="prev-tab">15</div><div data-cal-day class="prev-tab">16</div><div data-cal-day class="prev-tab">17</div><div data-cal-day class="prev-tab">18</div><div data-cal-day class="prev-tab">19</div>
    <div data-cal-day class="prev-tab">20</div><div data-cal-day class="prev-tab">21</div><div data-cal-day class="prev-tab">22</div><div data-cal-day class="prev-tab">23</div><div data-cal-day class="prev-tab">24</div><div data-cal-day class="prev-tab">25</div><div data-cal-day class="prev-tab">26</div>
    <div data-cal-day class="prev-tab">27</div><div data-cal-day class="prev-tab">28</div><div data-cal-day class="prev-tab">29</div><div data-cal-day class="prev-tab">30</div><div data-cal-day class="prev-tab">31</div>
  </div>
</div>` },
      { label: "Range", content: `<div style="background:#ffffff;border:1px solid var(--border);border-radius:10px;padding:16px;width:260px;">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
    <button style="background:none;border:1px solid var(--border);border-radius:5px;color:#888;padding:4px 8px;cursor:pointer;font-size:12px;">‹</button>
    <span class="prev-bold-title">March 2026</span>
    <button style="background:none;border:1px solid var(--border);border-radius:5px;color:#888;padding:4px 8px;cursor:pointer;font-size:12px;">›</button>
  </div>
  <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;text-align:center;">
    <div class="prev-hint">Su</div><div class="prev-hint">Mo</div><div class="prev-hint">Tu</div><div class="prev-hint">We</div><div class="prev-hint">Th</div><div class="prev-hint">Fr</div><div class="prev-hint">Sa</div>
    <div></div><div></div><div class="prev-tab-muted">1</div><div class="prev-tab-muted">2</div><div class="prev-tab-muted">3</div><div class="prev-tab-muted">4</div><div class="prev-tab-muted">5</div>
    <div class="prev-tab-muted">6</div><div class="prev-tab-muted">7</div><div class="prev-tab-muted">8</div><div class="prev-tab-muted">9</div><div style="font-size:12px;padding:5px 2px;border-radius:5px;cursor:pointer;background:#0a0a0a;color:#fff;font-weight:600;border-radius:5px 0 0 5px;">10</div><div class="prev-tab-active">11</div><div class="prev-tab-active">12</div>
    <div class="prev-tab-active">13</div><div class="prev-tab-active">14</div><div style="font-size:12px;padding:5px 2px;cursor:pointer;background:#0a0a0a;color:#fff;font-weight:600;border-radius:0 5px 5px 0;">15</div><div class="prev-tab-muted">16</div><div class="prev-tab-muted">17</div><div class="prev-tab-muted">18</div><div class="prev-tab-muted">19</div>
  </div>
</div>` },
    ],
  },
  {
    id: "card",
    name: "Card",
    category: "Layout",
    desc: "A contained, surface-level container that groups related content and actions into a cohesive visual unit.",
    what: `<p>Cards act as visual containers that group related content and actions into a cohesive, bounded surface. They give content an elevated appearance — through background color, border, or shadow — that separates it from the page background and signals that everything within the card belongs together. A card typically has a header (title, subtitle, optional icon), a body (text, data, or media), and a footer (action buttons or metadata).</p><p>Cards are extremely flexible: they can represent a product listing, a dashboard widget, a user profile, a blog post preview, or almost any grouping of related content. The key criterion is that the items inside share a single conceptual identity — a card should represent one thing. Interactive cards that navigate or trigger actions should communicate their clickability clearly through cursor changes and hover states, and must be keyboard accessible. Avoid placing interactive elements inside an already-interactive card without careful thought about nested click target semantics.</p>`,
    anatomy: [
      { title: "Surface", desc: "The background, border, and shadow that define the card's boundary." },
      { title: "Header", desc: "Title, subtitle, and optional header actions or icons." },
      { title: "Content", desc: "The primary body — text, data, images, or any content." },
      { title: "Footer", desc: "Actions, metadata, or supplementary information." }
    ],
    use: [
      "Product or item listings in grids and feeds",
      "Dashboard widgets with metrics or charts",
      "User profiles, team member listings",
      "Blog post previews and article feeds",
      "Settings panels grouping related options"
    ],
    avoid: [
      "When items don't need visual separation — use a simple list instead",
      "Nesting cards inside cards more than one level deep",
      "Cards with too much content — if it's very long, use a page or section instead",
      "Making every piece of content a card — reserve cards for truly grouped units",
      "Using shadow to convey interactivity without an actual interactive trigger"
    ],
    icons: ["layout-panel-left", "credit-card", "file-text", "image", "more-horizontal"],
    states: [
      { name: "Default", desc: "The card is displayed at rest with standard background and border." },
      { name: "Hover", desc: "When the card is interactive, a hover state (border color shift or background change) signals clickability." },
      { name: "Selected", desc: "The card is in a chosen or checked state — used in selection grids or multi-select lists." },
      { name: "Loading", desc: "A skeleton version of the card is shown while content is being fetched." },
      { name: "Empty", desc: "The card has no data to display — an empty state message or illustration fills the body." }
    ],
    prompt: `Create a Card component with composable sub-components: CardHeader, CardTitle, CardDescription, CardContent, and CardFooter. Support interactive (clickable) and static variants, plus a selected state for use in grids. Include a loading skeleton variant. Use design tokens for background, border, border-radius, shadow, and spacing.`,
    related: ["separator", "skeleton", "badge"],
    aka: [
      { system: "Material Design", term: "Cards" },
      { system: "Ant Design", term: "Card" },
      { system: "Fluent", term: "Card" },
      { system: "Chakra UI", term: "Card" },
      { system: "Bootstrap", term: "Card" },
      { system: "Base Web", term: "Card" },
      { system: "Shadcn/UI", term: "Card" },
      { system: "Canvas", term: "Card" },
      { system: "Carbon", term: "Tile" },
          { system: "Dell", term: "Card" },
          { system: "USWDS", term: "Card" },
          { system: "Momentum", term: "Card" },
          { system: "Clarity", term: "Card" },
          { system: "Paste", term: "Card" },
          { system: "Lightning", term: "Cards" },
          { system: "Spectrum", term: "Card" },
          { system: "Polaris", term: "Card" },
          { system: "PatternFly", term: "Card" },
          { system: "EUI", term: "Card" },
          { system: "HeroUI", term: "Card" },
          { system: "Visa", term: "Content card" },
          { system: "eBay", term: "Card" },
          { system: "Flowbite", term: "Card" },
          { system: "Cedar", term: "Card" },
          { system: "Forma 36", term: "Card" },
          { system: "Aurora", term: "Card" },
          { system: "NewsKit", term: "Card" },
    ],
    previews: [
      { label: "Default", content: `<div class="prev-card">
  <div class="card-header">
    <div class="card-title">Project Alpha</div>
    <div class="card-subtitle">Last updated 2 hours ago</div>
  </div>
  <div class="card-body">Design system components are 73% complete. 4 open tasks remaining.</div>
  <div class="card-footer">
    <button class="prev-btn prev-input-sm">Open</button>
    <button class="prev-btn-outline prev-input-sm">Archive</button>
  </div>
</div>` },
      { label: "With media", content: `<div style="width:100%;max-width:280px;border:1px solid var(--border);border-radius:8px;overflow:hidden;background:#ffffff;">
  <div style="width:100%;height:100px;background:linear-gradient(135deg,#1e3a5f 0%,#1a0a2e 100%);display:flex;align-items:center;justify-content:center;">
    <svg width='32' height='32' viewBox='0 0 24 24' fill='none' stroke='#60a5fa' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><rect width='18' height='18' x='3' y='3' rx='2'/><path d='M3 9h18'/><path d='M9 21V9'/></svg>
  </div>
  <div style="padding:14px;">
    <div style="font-size:14px;font-weight:600;color:#0a0a0a;margin-bottom:4px;">Getting started</div>
    <div style="font-size:13px;color:#555;margin-bottom:12px;">Build your first component with the CLI in under 5 minutes.</div>
    <button class="prev-btn prev-input-sm">Read guide</button>
  </div>
</div>` },
      { label: "Horizontal", content: `<div style="width:100%;max-width:380px;border:1px solid var(--border);border-radius:8px;overflow:hidden;display:flex;background:#ffffff;">
  <div style="width:80px;flex-shrink:0;background:linear-gradient(135deg,#166534 0%,#1a0a2e 100%);display:flex;align-items:center;justify-content:center;">
    <svg width='28' height='28' viewBox='0 0 24 24' fill='none' stroke='#bbf7d0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'><path d='M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z'/><path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'/></svg>
  </div>
  <div style="padding:14px;flex:1;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px;">
      <div style="font-size:14px;font-weight:600;color:#0a0a0a;">API Usage</div>
      <span style="font-size:11px;font-weight:600;padding:2px 7px;border-radius:9999px;background:#f0fdf4;color:#166534;border:1px solid #bbf7d0;">Pro</span>
    </div>
    <div class="prev-text">12,450 / 50,000 requests this month</div>
  </div>
</div>` },
    ],
  },
  {
    id: "checkbox",
    name: "Checkbox",
    category: "Form",
    desc: "A form control that allows a user to select zero or more options from a set, or to toggle a single boolean value.",
    what: `<p>Checkboxes represent binary or multi-select state in a form. Checking a box includes an item or enables an option; unchecking removes it or disables it. Unlike radio buttons, checkboxes are independent of each other — selecting one has no effect on the others. They can also enter an indeterminate state, typically shown as a dash, which is used to represent a group where some but not all children are selected (common in "select all" patterns).</p><p>Checkboxes are for capturing state, not triggering immediate actions. The change takes effect when the surrounding form is submitted, not the moment the checkbox is clicked — this is their key semantic difference from a Switch, which applies changes instantly. The click target should extend to the full label text, not just the box control itself, to make interaction comfortable on both mouse and touch. Always pair a checkbox with a visible, descriptive label — an unlabeled checkbox is inaccessible and ambiguous.</p>`,
    anatomy: [
      { title: "Box", desc: "The visual control — square, matching the form's input style." },
      { title: "Check indicator", desc: "A checkmark or dash shown when selected or indeterminate." },
      { title: "Label", desc: "Describes what the checkbox controls. Always present." },
      { title: "Description", desc: "Optional helper text below the label for additional context." }
    ],
    use: [
      "Multi-select options from a list (filter categories, permissions)",
      "Toggling a single boolean preference ('Enable notifications')",
      "Agreeing to terms or conditions",
      "Selecting items for a bulk action",
      "Indeterminate state for 'select all' with partial selection"
    ],
    avoid: [
      "When only one option can be selected — use Radio Buttons instead",
      "For mutually exclusive yes/no choices — use a Switch or Toggle",
      "Without a visible label — unlabeled checkboxes are inaccessible",
      "Long lists of 6+ options without search/filter — consider a different input",
      "For triggering immediate actions — checkboxes should capture state, not cause effects"
    ],
    icons: ["check", "check-square", "square", "minus-square", "check-circle-2"],
    states: [
      { name: "Unchecked", desc: "The default state — the option is not selected." },
      { name: "Checked", desc: "The option is selected — a checkmark is shown inside the box." },
      { name: "Indeterminate", desc: "Some but not all children are selected — a dash is shown; used in select-all patterns." },
      { name: "Focused", desc: "The checkbox has keyboard focus — a visible focus ring is shown." },
      { name: "Disabled", desc: "The checkbox is non-interactive — greyed out, cannot be changed by the user." },
      { name: "Error", desc: "Form validation has failed — the checkbox and label are highlighted with an error color." }
    ],
    prompt: `Create a Checkbox component with unchecked, checked, indeterminate, focused, disabled, and error states. Always pair with a visible label and associate it using htmlFor/id. Support an indeterminate state for select-all parent patterns. Include an error message slot for form validation. Use design tokens for checkbox color, focus ring, and error state styling.`,
    related: ["radio-group", "switch", "label"],
    aka: [
      { system: "Material Design", term: "Checkbox" },
      { system: "Ant Design", term: "Checkbox" },
      { system: "Fluent", term: "Checkbox" },
      { system: "Chakra UI", term: "Checkbox" },
      { system: "Bootstrap", term: "Form Check" },
      { system: "Radix UI", term: "Checkbox" },
      { system: "Shadcn/UI", term: "Checkbox" },
      { system: "Canvas", term: "Checkbox" },
      { system: "Carbon", term: "Checkbox" },
          { system: "Atlassian", term: "Checkbox" },
          { system: "Dell", term: "Checkbox" },
          { system: "USWDS", term: "Checkbox" },
          { system: "Momentum", term: "Checkbox" },
          { system: "Clarity", term: "Checkbox" },
          { system: "Evergreen", term: "Checkbox" },
          { system: "Paste", term: "Checkbox" },
          { system: "GOV.UK", term: "Checkboxes" },
          { system: "Lightning", term: "Checkbox" },
          { system: "Spectrum", term: "Checkbox" },
          { system: "Polaris", term: "Checkbox" },
          { system: "PatternFly", term: "Checkbox" },
          { system: "Ariakit", term: "Checkbox" },
          { system: "HeroUI", term: "Checkbox" },
          { system: "Visa", term: "Checkbox" },
          { system: "eBay", term: "Checkbox" },
          { system: "Flowbite", term: "Checkbox" },
          { system: "Cedar", term: "Checkbox" },
          { system: "Forma 36", term: "Checkbox" },
          { system: "Aurora", term: "Checkbox" },
          { system: "Instructure UI", term: "Checkbox" },
          { system: "NewsKit", term: "Checkbox" },
    ],
    previews: [
      { label: "Default", content: `<div class="prev-checks">
  <label class="check-row"><div class="check-box checked">✓</div> Send email notifications</label>
  <label class="check-row"><div class="check-box checked">✓</div> Weekly digest</label>
  <label class="check-row"><div class="check-box"></div> SMS alerts</label>
  <label class="check-row"><div class="check-box" style="border-style:dashed;">—</div> All channels (partial)</label>
</div>` },
      { label: "Group", content: `<div style="display:flex;flex-direction:column;gap:6px;">
  <div style="font-size:12px;font-weight:600;color:#888;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.06em;">Notify me about</div>
  <label class="prev-check-row">
    <div class="check-box checked">✓</div>
    <div><div style="font-weight:500;">New comments</div><div class="prev-muted">When someone comments on your post</div></div>
  </label>
  <label class="prev-check-row">
    <div class="check-box checked">✓</div>
    <div><div style="font-weight:500;">Mentions</div><div class="prev-muted">When someone @mentions you</div></div>
  </label>
  <label class="prev-check-row">
    <div class="check-box"></div>
    <div><div style="font-weight:500;">Reminders</div><div class="prev-muted">Task due date reminders</div></div>
  </label>
</div>` },
      { label: "States", content: `<div style="display:flex;flex-direction:column;gap:8px;">
  <label class="prev-check-row"><div class="check-box"></div> Unchecked</label>
  <label class="prev-check-row"><div class="check-box checked">✓</div> Checked</label>
  <label class="prev-check-row"><div class="check-box" style="border-style:dashed;">—</div> Indeterminate</label>
  <label style="display:flex;align-items:center;gap:10px;font-size:14px;color:#aaa;cursor:not-allowed;"><div class="check-box" style="opacity:0.4;cursor:not-allowed;"></div> Disabled</label>
  <label style="display:flex;align-items:center;gap:10px;font-size:14px;color:#991b1b;cursor:pointer;"><div class="check-box" style="border-color:#ef4444;"></div> <span>Error state</span></label>
</div>` },
    ],
  },
  {
    id: "collapsible",
    name: "Collapsible",
    category: "Disclosure",
    desc: "A primitive that toggles the visibility of a content section, without the stacked list structure of an Accordion.",
    what: `<p>Collapsible is the single-section version of Accordion. It shows or hides one discrete block of content via a trigger element, without implying any structural relationship to other sections nearby. Think of it as a low-level building block for disclosure patterns — you control the trigger, the content, and the open/closed state independently. Where Accordion manages a list of multiple collapsible items with shared behavior, Collapsible is used for a single isolated toggle.</p><p>Common uses include an "Advanced options" panel, an expandable preview row in a table, or a "Read more" expansion on a truncated paragraph. It's a primitive: flexible, minimal by default, and composable with other elements. Because the open/closed state can be controlled externally, Collapsible is well-suited for scenarios where the disclosure state needs to be stored, shared, or synced — for example, persisting whether a sidebar panel is open between page navigations.</p>`,
    anatomy: [
      { title: "Trigger", desc: "Any element — button, link, header — that toggles visibility." },
      { title: "Content", desc: "The section shown or hidden by the trigger." }
    ],
    use: [
      "Advanced options or secondary content that most users won't need",
      "Expanding a preview row in a table to show more details",
      "Read-more patterns on truncated descriptions",
      "Optional configuration panels in settings",
      "When you want disclosure without the structured list of Accordion"
    ],
    avoid: [
      "When multiple related sections need to collapse — use an Accordion instead",
      "For critical information that should always be visible",
      "When the revealed content is very short — just show it",
      "As a navigation mechanism — use a proper navigation component",
      "To hide error messages or important warnings"
    ],
    icons: ["chevron-down", "chevron-up", "plus", "minus", "expand"],
    states: [
      { name: "Closed", desc: "The default state — only the trigger is visible, content is hidden." },
      { name: "Open", desc: "Content is fully visible; the trigger reflects the open state." },
      { name: "Focused", desc: "The trigger has keyboard focus — a focus ring is visible." },
      { name: "Disabled", desc: "The trigger is non-interactive; content cannot be toggled." }
    ],
    prompt: `Create a Collapsible component with a trigger button and a toggleable content area that animates open and closed. Use aria-expanded on the trigger and aria-hidden or conditional rendering on the content panel. Support a disabled state. Unlike Accordion, this is a standalone single section — keep it simple and composable. Use design tokens for transition timing and spacing.`,
    previews: [
      { label: "Settings", content: `<div class="prev-panel" style="gap:0;padding:0;max-width:420px;">
        <button onclick="var c=this.nextElementSibling;var open=c.style.display!=='none';c.style.display=open?'none':'flex';this.setAttribute('aria-expanded',!open);this.querySelector('.prev-chevron').style.transform=open?'rotate(0)':'rotate(180deg)'" aria-expanded="true" style="display:flex;align-items:center;gap:12px;width:100%;padding:16px 20px;background:none;border:1px solid #e2e2e2;border-radius:10px 10px 0 0;cursor:pointer;font-size:15px;font-family:inherit;color:#0a0a0a;text-align:left;">
          <svg class="prev-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="transition:transform 0.2s;transform:rotate(180deg);flex-shrink:0;"><path d="m6 9 6 6 6-6"/></svg>
          <span style="font-weight:600;">Advanced Settings</span>
        </button>
        <div style="display:flex;flex-direction:column;gap:20px;padding:20px 20px 24px;border:1px solid #e2e2e2;border-top:none;border-radius:0 0 10px 10px;">
          <label style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;font-size:14px;color:#333;">
            <div><div style="font-weight:500;">Email notifications</div><div style="font-size:12px;color:#888;margin-top:3px;">Receive updates about your account</div></div>
            <span style="width:40px;height:22px;background:#0a0a0a;border-radius:11px;position:relative;display:inline-block;flex-shrink:0;margin-left:16px;"><span style="width:18px;height:18px;background:#fff;border-radius:50%;position:absolute;top:2px;right:2px;"></span></span>
          </label>
          <div style="height:1px;background:#e5e7eb;"></div>
          <label style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;font-size:14px;color:#333;">
            <div><div style="font-weight:500;">Auto-save drafts</div><div style="font-size:12px;color:#888;margin-top:3px;">Automatically save your work every 30 seconds</div></div>
            <span style="width:40px;height:22px;background:#0a0a0a;border-radius:11px;position:relative;display:inline-block;flex-shrink:0;margin-left:16px;"><span style="width:18px;height:18px;background:#fff;border-radius:50%;position:absolute;top:2px;right:2px;"></span></span>
          </label>
          <div style="height:1px;background:#e5e7eb;"></div>
          <label style="display:flex;align-items:center;justify-content:space-between;cursor:pointer;font-size:14px;color:#333;">
            <div><div style="font-weight:500;">Developer mode</div><div style="font-size:12px;color:#888;margin-top:3px;">Show debug info and API responses</div></div>
            <span style="width:40px;height:22px;background:#d1d5db;border-radius:11px;position:relative;display:inline-block;flex-shrink:0;margin-left:16px;"><span style="width:18px;height:18px;background:#fff;border-radius:50%;position:absolute;top:2px;left:2px;"></span></span>
          </label>
        </div>
      </div>` },
      { label: "Read More", content: `<div class="prev-panel" style="gap:0;padding:0;max-width:460px;">
        <div style="padding:24px;border:1px solid #e2e2e2;border-radius:10px;">
          <div style="font-size:17px;font-weight:600;color:#0a0a0a;margin-bottom:12px;">About this project</div>
          <p style="font-size:14px;color:#555;line-height:1.7;margin:0;">This component library provides a comprehensive set of accessible, composable primitives for building modern user interfaces.</p>
          <div id="collapsible-readmore" style="display:none;margin-top:12px;">
            <p style="font-size:14px;color:#555;line-height:1.7;margin:0 0 12px 0;">Each component follows WAI-ARIA patterns and supports keyboard navigation out of the box. The library is framework-agnostic and can be adapted to React, Vue, or plain HTML.</p>
            <p style="font-size:14px;color:#555;line-height:1.7;margin:0;">Components are designed to be styled with CSS variables, making theme customization straightforward across your entire application.</p>
          </div>
          <button onclick="var c=document.getElementById('collapsible-readmore');var open=c.style.display!=='none';c.style.display=open?'none':'block';this.textContent=open?'Read more ↓':'Show less ↑'" style="background:none;border:none;color:#0a0a0a;font-size:14px;font-weight:600;cursor:pointer;padding:12px 0 0;font-family:inherit;">Read more ↓</button>
        </div>
      </div>` },
      { label: "Filters", content: `<div class="prev-panel" style="gap:0;padding:0;max-width:340px;">
        <button onclick="var c=this.nextElementSibling;var open=c.style.display!=='none';c.style.display=open?'none':'flex';this.querySelector('.prev-chevron').style.transform=open?'rotate(0)':'rotate(180deg)'" aria-expanded="true" style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:14px 20px;background:#f9fafb;border:1px solid #e2e2e2;border-radius:10px 10px 0 0;cursor:pointer;font-size:15px;font-family:inherit;color:#0a0a0a;">
          <span style="font-weight:600;">Price Range</span>
          <svg class="prev-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="transition:transform 0.2s;transform:rotate(180deg);"><path d="m6 9 6 6 6-6"/></svg>
        </button>
        <div style="display:flex;flex-direction:column;gap:14px;padding:18px 20px 22px;border:1px solid #e2e2e2;border-top:none;border-radius:0 0 10px 10px;">
          <label style="display:flex;align-items:center;gap:10px;font-size:14px;color:#333;cursor:pointer;"><input type="checkbox" checked style="accent-color:#0a0a0a;width:16px;height:16px;"> Under $25</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:14px;color:#333;cursor:pointer;"><input type="checkbox" checked style="accent-color:#0a0a0a;width:16px;height:16px;"> $25 – $50</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:14px;color:#333;cursor:pointer;"><input type="checkbox" style="accent-color:#0a0a0a;width:16px;height:16px;"> $50 – $100</label>
          <label style="display:flex;align-items:center;gap:10px;font-size:14px;color:#333;cursor:pointer;"><input type="checkbox" style="accent-color:#0a0a0a;width:16px;height:16px;"> Over $100</label>
        </div>
      </div>` }
    ],
    related: ["accordion", "sheet", "dialog"],
    aka: [
      { system: "Ant Design", term: "Collapse" },
      { system: "Radix UI", term: "Collapsible" },
      { system: "Shadcn/UI", term: "Collapsible" },
      { system: "Bootstrap", term: "Collapse" },
      { system: "Chakra UI", term: "Show / Hide" },
      { system: "Carbon", term: "Accordion" },
      { system: "Dell", term: "View more/less" },
      { system: "Paste", term: "Disclosure" },
      { system: "GOV.UK", term: "Details" },
      { system: "Polaris", term: "Collapsible" },
      { system: "PatternFly", term: "Expandable section" },
      { system: "Ariakit", term: "Disclosure" },
      { system: "HeroUI", term: "Disclosure" },
      { system: "Forma 36", term: "Collapse" },
    ],
  },
  {
    id: "combobox",
    name: "Combobox",
    category: "Form",
    desc: "An input that combines free-text entry with a searchable dropdown list of options.",
    what: `<p>Combobox merges a text input with a listbox, letting users either type to filter options or scroll and select from the full list. It's the right choice when a Select's fixed, unfiltered list would be too long to navigate comfortably — typically beyond 15 to 20 items — or when users may not know the exact name of the item they're looking for. As the user types, the list filters in real time to matching results.</p><p>The dropdown can display options fetched synchronously from a static list or asynchronously from an API based on the typed query. It also supports grouping, icons, and an empty state message for when no results match. Debouncing the query for async comboboxes is essential to avoid excessive API calls on every keystroke. The empty state should always be explicit — "No results for 'xyz'" is more helpful than a blank dropdown that users may assume is broken. Consider whether the user should be able to enter a completely custom value not in the list, or only select from the filtered options.</p>`,
    anatomy: [
      { title: "Input trigger", desc: "The text input that both accepts typed queries and shows the selected value." },
      { title: "Dropdown", desc: "The floating panel with filtered or full list of options." },
      { title: "Option item", desc: "Each selectable entry in the list, with optional grouping." },
      { title: "Empty state", desc: "Shown when no options match the query." }
    ],
    use: [
      "Country, timezone, or language selectors with 50+ options",
      "Tagging interfaces where users search existing tags",
      "Assigning from large user lists in collaboration tools",
      "Search-ahead fields for products, locations, or categories",
      "When options are fetched async based on typed input"
    ],
    avoid: [
      "Short lists of fewer than 8 options — use a Select instead",
      "When users always know exactly what to type — a plain Input is simpler",
      "Without an empty state — users need feedback when nothing matches",
      "For multi-select with many items — consider a dedicated multi-select or tag input",
      "On mobile where virtual keyboards make typing cumbersome"
    ],
    icons: ["chevron-down", "search", "check", "x", "list"],
    states: [
      { name: "Default", desc: "The input shows the placeholder or current value; the dropdown is hidden." },
      { name: "Focused / Open", desc: "The dropdown opens and the full list is shown, ready for filtering." },
      { name: "Typing", desc: "The list filters in real time as the user types a query." },
      { name: "Loading", desc: "Async options are being fetched — a spinner is shown inside the dropdown." },
      { name: "Empty", desc: "No options match the query — an informative empty state message is displayed." },
      { name: "Selected", desc: "A value has been chosen — it appears in the input field and the dropdown closes." }
    ],
    prompt: `Create a Combobox component combining a text input with a filterable dropdown list. Support async loading (with a spinner) and an empty state when no results match. Implement full keyboard navigation (arrow keys, Enter to select, Escape to close) and ARIA combobox pattern with aria-autocomplete, aria-expanded, and aria-activedescendant. Use design tokens for input, dropdown shadow, and highlight colors.`,
    related: ["select", "input", "dropdown-menu"],
    aka: [
      { system: "Ant Design", term: "AutoComplete" },
      { system: "Fluent", term: "Combobox" },
      { system: "Shadcn/UI", term: "Combobox" },
      { system: "Carbon", term: "Combo Box" },
          { system: "Atlassian", term: "Select" },
          { system: "Dell", term: "Dropdown" },
          { system: "USWDS", term: "Combo box" },
          { system: "Momentum", term: "Combobox" },
          { system: "Clarity", term: "Combobox" },
          { system: "Evergreen", term: "Combobox" },
          { system: "Paste", term: "Combobox" },
          { system: "Lightning", term: "Combobox" },
          { system: "Spectrum", term: "Combobox" },
          { system: "Polaris", term: "Combobox" },
          { system: "PatternFly", term: "Select" },
          { system: "EUI", term: "Combo Box" },
          { system: "Ariakit", term: "Combobox" },
          { system: "HeroUI", term: "ComboBox" },
          { system: "Visa", term: "Combobox" },
          { system: "eBay", term: "Combobox" },
          { system: "Flowbite", term: "Select" },
          { system: "Forma 36", term: "Autocomplete" },
          { system: "Instructure UI", term: "Select" },
          { system: "NewsKit", term: "Select" },
    ],
    previews: [
      { label: "Interactive", content: `<div data-combobox style="position:relative;width:100%;max-width:280px;padding-bottom:140px;">
  <label style="font-size:12px;font-weight:500;color:#555;display:block;margin-bottom:6px;">Search framework</label>
  <div style="display:flex;align-items:center;border:1px solid #ddd;border-radius:7px;background:#ffffff;padding:8px 12px;">
    <input type="text" placeholder="Type to filter…" style="font-size:13px;color:#0a0a0a;flex:1;border:none;outline:none;background:transparent;font-family:inherit;" />
    <span style="font-size:11px;color:#aaa;">▾</span>
  </div>
  <div data-combobox-list style="display:none;position:absolute;top:100%;left:0;right:0;margin-top:4px;background:#ffffff;border:1px solid #ddd;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.12);z-index:10;">
    <div data-combobox-option data-menu-item class="prev-list-item">React</div>
    <div data-combobox-option data-menu-item class="prev-list-item">Remix</div>
    <div data-combobox-option data-menu-item class="prev-list-item">Vue</div>
    <div data-combobox-option data-menu-item class="prev-list-item">Svelte</div>
    <div data-combobox-option data-menu-item class="prev-list-item">Solid</div>
    <div data-combobox-option data-menu-item class="prev-list-item">Angular</div>
  </div>
</div>` },
      { label: "Filtered", content: `<div style="position:relative;width:100%;max-width:280px;padding-bottom:140px;">
  <div style="display:flex;align-items:center;border:1px solid #0a0a0a;border-radius:7px;background:#ffffff;padding:8px 12px;">
    <span style="font-size:13px;color:#0a0a0a;flex:1;">Re</span>
    <span style="font-size:11px;color:#888;">▾</span>
  </div>
  <div style="position:absolute;top:calc(100% - 128px);left:0;right:0;background:#ffffff;border:1px solid #ddd;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.12);">
    <div data-menu-item style="padding:8px 12px;font-size:13px;cursor:pointer;color:#0a0a0a;background:#f3f4f6;">React</div>
    <div data-menu-item style="padding:8px 12px;font-size:13px;cursor:pointer;color:#555;background:transparent;">Remix</div>
  </div>
</div>` },
    ],
  },
  {
    id: "context-menu",
    name: "Context Menu",
    category: "Navigation",
    desc: "A menu of contextual actions revealed by right-clicking on an element.",
    what: `<p>Context menus surface a set of actions relevant to a specific element without occupying any permanent space in the UI. They mirror the OS-native right-click menu pattern that most desktop users already know, appearing at the pointer location when an element receives a right-click or long-press. Because they're hidden by default, context menus are a power-user affordance — they reward users who explore, but cannot be the only path to critical actions since many users will never right-click.</p><p>They're best used to offer shortcuts to operations that are also available through other visible UI, not as the sole access point for important functionality. Context menus should be populated dynamically based on what was right-clicked — showing the same generic list regardless of context undermines the usefulness of the pattern. Keep items concise and group related actions with separators. Destructive actions like Delete should appear at the bottom of the menu and, where possible, be visually distinguished in red.</p>`,
    anatomy: [
      { title: "Trigger", desc: "Any right-clickable element — the menu binds to onContextMenu." },
      { title: "Menu items", desc: "Action labels, optionally grouped with separators." },
      { title: "Keyboard shortcuts", desc: "Optional shortcut hints displayed alongside action labels." },
      { title: "Sub-menu", desc: "Nested menu for grouped actions." }
    ],
    use: [
      "File or item management (rename, move, delete)",
      "Text editor actions (cut, copy, paste, format)",
      "Canvas or design tool operations",
      "Table row actions in data-heavy interfaces",
      "Supplementary power-user shortcuts in complex tools"
    ],
    avoid: [
      "As the only way to access critical actions — hidden menus exclude non-power users",
      "On touch-only devices where right-click isn't available",
      "For actions that belong in a primary toolbar or button",
      "Overloading with too many items — keep to 5–7 actions maximum",
      "Without keyboard accessibility — all items must be reachable by keyboard"
    ],
    icons: ["more-horizontal", "more-vertical", "menu", "ellipsis"],
    states: [
      { name: "Hidden", desc: "Default state — the menu is not rendered until triggered." },
      { name: "Open", desc: "Menu is displayed at the pointer position after a right-click or long-press." },
      { name: "Item hover", desc: "A menu item is highlighted as the pointer moves over it." },
      { name: "Item disabled", desc: "An item is shown but non-interactive — greyed out with cursor: not-allowed." },
      { name: "Sub-menu open", desc: "A nested sub-menu has expanded to the side from the highlighted item." }
    ],
    prompt: `Create a Context Menu component triggered by right-click (or long-press on touch), positioned at the cursor location. Support menu items with optional icons, keyboard shortcuts, disabled states, dividers, and nested sub-menus. Implement keyboard navigation (arrow keys, Escape) and manage focus. Use design tokens for menu background, shadow, item hover, and disabled colors.`,
    related: ["dropdown-menu", "popover", "tooltip"],
    aka: [
      { system: "Material Design", term: "Menus" },
      { system: "Fluent", term: "Menu" },
      { system: "Ant Design", term: "Dropdown" },
      { system: "Radix UI", term: "Context Menu" },
      { system: "Shadcn/UI", term: "Context Menu" },
      { system: "Base Web", term: "ContextMenu" },
      { system: "Canvas", term: "Menu" },
      { system: "Carbon", term: "Overflow Menu" },
          { system: "Atlassian", term: "Dropdown menu" },
          { system: "Dell", term: "Action menu" },
          { system: "Momentum", term: "Menupopover" },
          { system: "Clarity", term: "Dropdown" },
          { system: "Evergreen", term: "Menu" },
          { system: "Paste", term: "Menu" },
          { system: "Lightning", term: "Menu" },
          { system: "Spectrum", term: "Action Menu" },
          { system: "Polaris", term: "Action list" },
          { system: "PatternFly", term: "Dropdown" },
          { system: "EUI", term: "Context Menu" },
          { system: "Ariakit", term: "Menu" },
          { system: "Visa", term: "Dropdown menu" },
          { system: "Flowbite", term: "Dropdowns" },
          { system: "Aurora", term: "Dropdown" },
          { system: "Instructure UI", term: "Menu" },
          { system: "NewsKit", term: "Menu" },
    ],
    previews: [
      { label: "Interactive", content: `<div data-ctx-area style="position:relative;background:#f9f9f9;border:2px dashed #ddd;border-radius:12px;padding:40px;text-align:center;min-height:200px;display:flex;align-items:center;justify-content:center;cursor:context-menu;">
  <span style="font-size:13px;color:#999;">Right-click anywhere in this area</span>
  <div data-ctx-menu style="display:none;position:absolute;background:#ffffff;border:1px solid #ddd;border-radius:9px;padding:6px;width:200px;box-shadow:0 8px 24px rgba(0,0,0,0.15);z-index:20;">
    <div data-menu-item class="prev-menu-row"><span>Cut</span><span class="prev-subtle">⌘X</span></div>
    <div data-menu-item class="prev-menu-row"><span>Copy</span><span class="prev-subtle">⌘C</span></div>
    <div data-menu-item class="prev-menu-row"><span>Paste</span><span class="prev-subtle">⌘V</span></div>
    <div class="prev-divider"></div>
    <div data-menu-item style="display:flex;justify-content:space-between;align-items:center;padding:6px 10px;border-radius:5px;font-size:13px;cursor:pointer;color:#ef4444;"><span>Delete</span><span class="prev-subtle">⌫</span></div>
    <div data-menu-item class="prev-menu-row"><span>Rename</span><span class="prev-subtle">F2</span></div>
  </div>
</div>` },
      { label: "Static", content: `<div style="background:#ffffff;border:1px solid #ddd;border-radius:9px;padding:6px;width:200px;box-shadow:0 4px 16px rgba(0,0,0,0.12);">
  <div data-menu-item class="prev-menu-row"><span>Cut</span><span class="prev-subtle">⌘X</span></div>
  <div data-menu-item class="prev-menu-row"><span>Copy</span><span class="prev-subtle">⌘C</span></div>
  <div data-menu-item class="prev-menu-row"><span>Paste</span><span class="prev-subtle">⌘V</span></div>
  <div class="prev-divider"></div>
  <div data-menu-item style="display:flex;justify-content:space-between;align-items:center;padding:6px 10px;border-radius:5px;font-size:13px;cursor:pointer;color:#ef4444;"><span>Delete</span><span class="prev-subtle">⌫</span></div>
  <div data-menu-item class="prev-menu-row"><span>Rename</span><span class="prev-subtle">F2</span></div>
</div>` },
    ],
  },
  {
    id: "dialog",
    name: "Dialog",
    category: "Overlay",
    desc: "A modal window that appears over the main content to present information or collect input, requiring user interaction before returning to the page.",
    what: `<p>Dialogs create a focused interaction layer by placing a modal window over the main content. They block the background to keep the user's attention on a specific, bounded task — creating a new item, editing a record, confirming an action, or viewing expanded detail. Unlike Alert Dialogs, they aren't limited to destructive or high-stakes actions. Dialogs are appropriate for any workflow that requires temporary, focused interaction without navigating to a new page.</p><p>They include a header with a title and optional close button, a body for content or forms, and a footer with action buttons. Focus is trapped within the dialog while it's open, and pressing Escape typically dismisses it. Return focus to the trigger element when the dialog closes so keyboard users don't lose their place in the page. Dialogs with long content should have a scrollable body region rather than growing unboundedly — a dialog taller than the viewport is difficult to use and signals that the content may belong on its own page instead.</p>`,
    anatomy: [
      { title: "Header", desc: "Title and optional close button." },
      { title: "Body", desc: "Form, content, or data being presented." },
      { title: "Footer", desc: "Action buttons (confirm, cancel, save)." },
      { title: "Overlay", desc: "Backdrop that visually separates the dialog from the page." }
    ],
    use: [
      "Create or edit forms that shouldn't leave the current page context",
      "Viewing expanded details from a list or card",
      "Multi-step wizards with limited steps (2–3)",
      "Quick actions like sharing, inviting, or configuring an item",
      "Media lightboxes or enlarged previews"
    ],
    avoid: [
      "Complex, long forms — they're better as dedicated pages",
      "When no user action is required — use a Drawer or Sheet",
      "Nesting dialogs inside dialogs — deeply confusing UX",
      "Full-page content — the modal should complement, not replace the page",
      "Auto-opening dialogs without a clear user trigger"
    ],
    icons: ["x", "check", "alert-circle", "info", "message-square"],
    states: [
      { name: "Closed", desc: "The dialog is hidden and not rendered in the DOM (or hidden via aria-hidden)." },
      { name: "Open", desc: "The dialog is visible; backdrop is active and focus is trapped inside." },
      { name: "Submitting", desc: "The primary action is in progress — confirm button is loading, form is non-interactive." },
      { name: "Error", desc: "An inline error is displayed within the dialog body after a failed operation." },
      { name: "Scroll locked", desc: "The page body scroll is locked while the dialog is open to prevent background scrolling." }
    ],
    prompt: `Create a Dialog (modal) component with a title, body content area, footer with actions, and a close button. Trap focus within the dialog when open and return focus to the trigger on close. Lock page body scroll while open. Use role="dialog", aria-modal="true", and aria-labelledby. Support size variants (sm, md, lg) and use design tokens for overlay, background, and shadow.`,
    related: ["alert-dialog", "sheet", "popover"],
    aka: [
      { system: "Material Design", term: "Dialogs" },
      { system: "Fluent", term: "Dialog" },
      { system: "Ant Design", term: "Modal" },
      { system: "Radix UI", term: "Dialog" },
      { system: "Shadcn/UI", term: "Dialog" },
      { system: "Bootstrap", term: "Modal" },
      { system: "Chakra UI", term: "Modal" },
      { system: "Canvas", term: "Dialog" },
      { system: "Carbon", term: "Modal" },
          { system: "Atlassian", term: "Modal dialog" },
          { system: "Dell", term: "Modal" },
          { system: "USWDS", term: "Modal" },
          { system: "Momentum", term: "Dialog" },
          { system: "Clarity", term: "Modal" },
          { system: "Evergreen", term: "Dialog" },
          { system: "Paste", term: "Modal" },
          { system: "Lightning", term: "Modals" },
          { system: "Spectrum", term: "Dialog" },
          { system: "Polaris", term: "Modal" },
          { system: "PatternFly", term: "Modal" },
          { system: "EUI", term: "Modal" },
          { system: "Ariakit", term: "Dialog" },
          { system: "HeroUI", term: "Modal" },
          { system: "Visa", term: "Dialog" },
          { system: "eBay", term: "Dialog" },
          { system: "Flowbite", term: "Modal" },
          { system: "Cedar", term: "Modal" },
          { system: "Forma 36", term: "Modal" },
          { system: "Aurora", term: "Modal" },
          { system: "Instructure UI", term: "Modal" },
          { system: "NewsKit", term: "Modal" },
    ],
    previews: [
      { label: "Default", content: `<div class="prev-dialog">
  <div class="dialog-title">Edit profile</div>
  <div class="dialog-desc">Make changes to your profile here. Click save when done.</div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">
    <div><label style="font-size:11px;font-weight:500;color:#888;display:block;margin-bottom:4px;">Display name</label><div class="input-field prev-text">Jane Smith</div></div>
  </div>
  <div class="dialog-actions">
    <button class="prev-btn-outline prev-btn-md">Cancel</button>
    <button class="prev-btn prev-btn-md">Save changes</button>
  </div>
</div>` },
      { label: "With form", content: `<div class="prev-dialog">
  <div class="dialog-title">Invite team member</div>
  <div class="dialog-desc">Enter the email address of the person you want to invite to this workspace.</div>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px;">
    <div><label style="font-size:11px;font-weight:500;color:#888;display:block;margin-bottom:4px;">Email address</label><div class="input-field prev-text">colleague@company.com</div></div>
    <div><label style="font-size:11px;font-weight:500;color:#888;display:block;margin-bottom:4px;">Role</label><div class="input-field prev-text">Member ▾</div></div>
  </div>
  <div class="dialog-actions">
    <button class="prev-btn-outline prev-btn-md">Cancel</button>
    <button class="prev-btn prev-btn-md">Send invite</button>
  </div>
</div>` },
    ],
  },
  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    category: "Navigation",
    desc: "A floating list of actions or navigation links that appears when a trigger element is clicked.",
    what: `<p>Dropdown menus reveal a list of related actions or navigation links from a button or interactive trigger element. They reduce visual clutter by keeping secondary actions hidden until the user explicitly requests them with a click. Once open, the menu floats above the page content and closes when the user selects an item, clicks outside, or presses Escape. Dropdown menus support grouping with separator lines, icons alongside labels, keyboard shortcut hints, and nested sub-menus for hierarchical actions.</p><p>They're distinct from Select components — Select is a form input for choosing a value, while a Dropdown Menu is for triggering actions or navigating. This distinction matters both semantically and for accessibility: a Select uses native form input semantics, while a Dropdown Menu uses menu/menuitem roles. Keyboard navigation should follow the ARIA menu pattern: arrow keys move between items, Enter activates the focused item, and Escape closes the menu without triggering an action. Avoid using dropdown menus as a way to hide primary actions — if users regularly need an item, it should be promoted to a visible button.</p>`,
    anatomy: [
      { title: "Trigger", desc: "A button, link, or icon that opens the menu on click." },
      { title: "Menu panel", desc: "A floating container that holds the list of items." },
      { title: "Menu item", desc: "Individual action or link — can include icons and shortcuts." },
      { title: "Separator", desc: "Visually groups related items within the menu." },
      { title: "Sub-menu", desc: "Nested menu for hierarchical actions." }
    ],
    use: [
      "Actions menu on rows in a data table (edit, duplicate, delete)",
      "User account menu in a navigation header",
      "More options menus (...) on cards or items",
      "Grouped navigation links for a section of a site",
      "Sort/filter controls with multiple options"
    ],
    avoid: [
      "When there are only 1–2 actions — show them directly as buttons",
      "For form option selection — use a Select or Combobox instead",
      "Nesting more than 2 levels of sub-menus — extremely hard to navigate",
      "For navigation menus with 10+ items — consider a dedicated nav component",
      "When actions are context-dependent on a right-click — use Context Menu"
    ],
    states: [
      { name: "Closed", desc: "The menu is hidden; only the trigger element is visible." },
      { name: "Open", desc: "The floating menu panel is displayed, anchored below the trigger." },
      { name: "Item hover", desc: "A menu item is highlighted as the pointer moves over it." },
      { name: "Item focused", desc: "A menu item has keyboard focus during keyboard navigation." },
      { name: "Item disabled", desc: "An item is visible but non-interactive — shown in a muted style." },
      { name: "Sub-menu open", desc: "A child menu has expanded to the side from a parent item." }
    ],
    prompt: `Create a Dropdown Menu component triggered by a button click, with a floating panel that supports menu items, separators, disabled items, checkboxes, radio groups, and nested sub-menus. Implement keyboard navigation (arrow keys, Enter, Escape) and ARIA menu pattern. Position the panel to avoid viewport clipping. Use design tokens for menu background, item hover, shadow, and spacing.`,
    related: ["context-menu", "select", "combobox"],
    aka: [
      { system: "Material Design", term: "Menus" },
      { system: "Ant Design", term: "Dropdown" },
      { system: "Radix UI", term: "Dropdown Menu" },
      { system: "Shadcn/UI", term: "Dropdown Menu" },
      { system: "Fluent", term: "Menu" },
      { system: "Bootstrap", term: "Dropdown" },
      { system: "Chakra UI", term: "Menu" },
      { system: "Canvas", term: "Menu" },
      { system: "Carbon", term: "Dropdown" },
          { system: "Atlassian", term: "Dropdown menu" },
          { system: "Dell", term: "Action menu" },
          { system: "Momentum", term: "Menupopover" },
          { system: "Clarity", term: "Dropdown" },
          { system: "Evergreen", term: "Menu" },
          { system: "Paste", term: "Menu" },
          { system: "Lightning", term: "Menu" },
          { system: "Spectrum", term: "Menu" },
          { system: "Polaris", term: "Action list" },
          { system: "PatternFly", term: "Dropdown" },
          { system: "EUI", term: "Context Menu" },
          { system: "Ariakit", term: "Menu" },
          { system: "HeroUI", term: "Dropdown" },
          { system: "Visa", term: "Dropdown menu" },
          { system: "eBay", term: "Dropdown" },
          { system: "Flowbite", term: "Dropdowns" },
          { system: "Forma 36", term: "Menu" },
          { system: "Aurora", term: "Dropdown" },
          { system: "Instructure UI", term: "Menu" },
          { system: "NewsKit", term: "Menu" },
    ],
    previews: [
      { label: "Interactive", content: `<div style="position:relative;max-width:200px;padding-bottom:160px;">
  <button data-dropdown-trigger class="prev-btn-outline" style="font-size:13px;padding:7px 14px;cursor:pointer;">Options ▾</button>
  <div data-dropdown-panel style="display:none;position:absolute;top:calc(100% + 4px);left:0;background:#ffffff;border:1px solid #ddd;border-radius:9px;padding:6px;width:180px;box-shadow:0 4px 16px rgba(0,0,0,0.12);z-index:10;">
    <div data-menu-item class="prev-option">Edit</div>
    <div data-menu-item class="prev-option">Duplicate</div>
    <div class="prev-divider"></div>
    <div data-menu-item style="padding:7px 10px;border-radius:5px;font-size:13px;cursor:pointer;color:#ef4444;">Delete</div>
  </div>
</div>` },
      { label: "With sections", content: `<div style="position:relative;padding-bottom:260px;max-width:220px;">
  <button data-dropdown-trigger class="prev-btn-outline" style="font-size:13px;padding:7px 14px;cursor:pointer;">My account ▾</button>
  <div data-dropdown-panel style="display:none;position:absolute;top:calc(100% + 4px);left:0;background:#ffffff;border:1px solid #ddd;border-radius:9px;padding:6px;width:210px;box-shadow:0 4px 16px rgba(0,0,0,0.12);z-index:10;">
    <div style="padding:6px 10px 2px;font-size:11px;font-weight:600;color:#aaa;text-transform:uppercase;letter-spacing:0.06em;">Account</div>
    <div data-menu-item class="prev-option">Profile</div>
    <div data-menu-item class="prev-option">Settings</div>
    <div class="prev-divider"></div>
    <div style="padding:6px 10px 2px;font-size:11px;font-weight:600;color:#aaa;text-transform:uppercase;letter-spacing:0.06em;">Team</div>
    <div data-menu-item class="prev-option">Invite members</div>
    <div data-menu-item class="prev-option">Team settings</div>
    <div class="prev-divider"></div>
    <div data-menu-item style="padding:7px 10px;border-radius:5px;font-size:13px;cursor:pointer;color:#ef4444;">Log out</div>
  </div>
</div>` },
    ],
  },
  {
    id: "hover-card",
    name: "Hover Card",
    category: "Overlay",
    desc: "A popover that appears on hover over a trigger, used to preview supplementary information about a link or element.",
    what: `<p>Hover Cards show a rich preview when a user hovers over a trigger element — typically a user mention, linked item, or reference chip. Unlike tooltips which are limited to a single line of plain text, hover cards can contain complex, structured content: a user's avatar, name, role, and stats; a linked issue's title, status, and description; or a preview image with metadata. They appear after a short delay (usually 300–500ms) to avoid triggering accidentally while the user moves the mouse across the screen.</p><p>Because they rely entirely on hover, they are desktop-only features — touch devices have no hover state, so hover card content must always be available through a fallback interaction such as tapping the trigger to open a full profile or detail view. The hover card should also close gracefully if the mouse moves away from both the trigger and the card itself, with a small grace period to allow users to move into the card without it disappearing. Never put critical actions inside a hover card — users should not have to rely on hovering to access important functionality.</p>`,
    anatomy: [
      { title: "Trigger", desc: "Usually a link or mention that reveals the card on hover." },
      { title: "Content", desc: "Rich preview — can include images, text, stats, and actions." },
      { title: "Delay", desc: "A short delay (300–500ms) prevents accidental triggers while moving the mouse." }
    ],
    use: [
      "User mentions in comments — show name, avatar, and role",
      "Link previews in documents or feeds",
      "Item references in a project management tool",
      "Stock or asset tickers with a quick price chart",
      "Tooltip replacements when more content context is needed"
    ],
    avoid: [
      "On touch devices — hover doesn't exist on mobile",
      "For critical information — users may never hover",
      "When the content requires user interaction — use a Popover instead",
      "For error messages or validation feedback — use inline messages",
      "If the hover area is very small — users can't reliably trigger it"
    ],
    icons: ["user", "info", "external-link", "calendar", "link-2"],
    states: [
      { name: "Hidden", desc: "Default state — the card is not visible." },
      { name: "Delayed open", desc: "The pointer has entered the trigger; the open delay timer is running (300–500ms)." },
      { name: "Open", desc: "The card is fully visible and anchored near the trigger." },
      { name: "Closing", desc: "Pointer has left both the trigger and card — a brief grace period before hiding." }
    ],
    prompt: `Create a Hover Card component that opens a rich preview card after a hover delay (300–500ms) and closes after a grace period when the pointer leaves. Support open delay and close delay props. Position the floating card to avoid viewport clipping. Ensure keyboard accessibility by also opening on focus. Use design tokens for card background, border, shadow, and animation.`,
    related: ["tooltip", "popover", "avatar"],
    aka: [
      { system: "Radix UI", term: "Hover Card" },
      { system: "Shadcn/UI", term: "Hover Card" },
          { system: "Clarity", term: "Signpost" },
          { system: "PatternFly", term: "Popover" },
          { system: "Ariakit", term: "Hovercard" },
    ],
    previews: [
      { label: "Default", content: `<div style="padding-top:60px;display:flex;align-items:center;gap:4px;font-size:13px;color:#888;position:relative;">
  Assigned to
  <div style="position:relative;display:inline-block;">
    <span style="color:#0a0a0a;font-weight:500;cursor:pointer;border-bottom:1px dashed #aaa;">@alice</span>
    <div style="position:absolute;bottom:calc(100%+8px);left:-8px;background:#ffffff;border:1px solid #ddd;border-radius:10px;padding:14px;width:220px;box-shadow:0 4px 16px rgba(0,0,0,0.12);">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
        <div style="width:36px;height:36px;border-radius:50%;background:#1a0a2e;color:#a78bfa;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;flex-shrink:0;">AL</div>
        <div>
          <div class="prev-bold-title">Alice Lee</div>
          <div style="font-size:11px;color:#888;">Design Lead</div>
        </div>
      </div>
      <div class="prev-muted">3 open tasks · Last active 1h ago</div>
    </div>
  </div>
</div>` },
    ],
  },
  {
    id: "input",
    name: "Input",
    category: "Form",
    desc: "A single-line text field for capturing user-typed data in forms and interfaces.",
    what: `<p>The Input is the most fundamental form element. It captures free-form text, numbers, email addresses, passwords, URLs, and other single-line values from the user. It pairs with a visible Label (which provides both a visual description and an accessible name for screen readers), optional hint text below the field (for format guidance), and inline validation feedback that appears when the user's entry doesn't meet the required format or constraints.</p><p>The type attribute shapes the input's behavior — email and url types get browser-level validation, password masks the characters, and number restricts input to numeric values. Always use the most specific type for the expected input, as it also triggers the appropriate mobile keyboard (numeric keypad for number, email keyboard layout for email). Validation should be triggered on blur rather than on every keystroke to avoid showing errors before the user has had a chance to finish typing. Pair error messages with the aria-describedby attribute so screen readers announce them when the invalid field is focused.</p>`,
    anatomy: [
      { title: "Label", desc: "Describes the expected input. Always present, never replaced by placeholder alone." },
      { title: "Input field", desc: "The text box where the user types." },
      { title: "Placeholder", desc: "Example value shown when the field is empty — supplemental, not a label." },
      { title: "Hint text", desc: "Format guidance or context below the field." },
      { title: "Error message", desc: "Validation feedback shown when the field is invalid." }
    ],
    use: [
      "Any form field requiring typed text (name, email, search, URL)",
      "Search bars",
      "Inline editing of names or titles",
      "Single-line settings fields (API keys, webhook URLs)",
      "Number, date, or password inputs with appropriate type attribute"
    ],
    avoid: [
      "For multi-line content — use Textarea instead",
      "When a predefined set of options exists — use Select or Combobox",
      "Placeholder text as a substitute for a label — it disappears on typing",
      "More fields than necessary — each field adds cognitive load",
      "Unmasked password fields without a visibility toggle"
    ],
    icons: ["search", "eye", "eye-off", "x-circle", "alert-circle"],
    states: [
      { name: "Default", desc: "The field is empty and ready for input." },
      { name: "Focused", desc: "The field has focus — a highlighted border or ring signals it is active." },
      { name: "Filled", desc: "The user has entered a value — the content is visible in the field." },
      { name: "Disabled", desc: "The field is non-interactive — greyed out, cannot be edited." },
      { name: "Read-only", desc: "The value is displayed but cannot be changed by the user." },
      { name: "Error", desc: "Validation has failed — the border turns red and an error message appears below." }
    ],
    prompt: `Create an Input component with default, focused, filled, error, disabled, and read-only states. Support optional leading icon, trailing icon or clear button, placeholder, hint text, and error message. Always associate a visible label via htmlFor/id. Support size variants (sm, md, lg). Use design tokens for border, focus ring, error color, and background.`,
    related: ["label", "textarea", "combobox"],
    aka: [
      { system: "Material Design", term: "Text Fields" },
      { system: "Ant Design", term: "Input" },
      { system: "Fluent", term: "Input" },
      { system: "Chakra UI", term: "Input" },
      { system: "Bootstrap", term: "Form Control" },
      { system: "Shadcn/UI", term: "Input" },
      { system: "Radix UI", term: "Form (Preview)" },
      { system: "Canvas", term: "Text Input" },
      { system: "Carbon", term: "Text Input" },
          { system: "Atlassian", term: "Text field" },
          { system: "Dell", term: "Text input" },
          { system: "USWDS", term: "Text input" },
          { system: "Momentum", term: "Input" },
          { system: "Clarity", term: "Input" },
          { system: "Evergreen", term: "Text Input" },
          { system: "Paste", term: "Input" },
          { system: "GOV.UK", term: "Text input" },
          { system: "Lightning", term: "Input" },
          { system: "Spectrum", term: "Textfield" },
          { system: "Polaris", term: "Text field" },
          { system: "PatternFly", term: "Text input" },
          { system: "EUI", term: "Form Controls" },
          { system: "HeroUI", term: "Input" },
          { system: "Visa", term: "Input" },
          { system: "eBay", term: "Text field" },
          { system: "Flowbite", term: "Input Field" },
          { system: "Cedar", term: "Input" },
          { system: "Forma 36", term: "TextInput" },
          { system: "Aurora", term: "Form Control" },
          { system: "Instructure UI", term: "TextInput" },
          { system: "NewsKit", term: "Text Field" },
    ],
    previews: [
      { label: "Default", content: `<div class="prev-input">
  <label class="input-label">Email address</label>
  <input class="input-field" type="email" placeholder="you@company.com" />
  <span class="input-hint">We'll send a confirmation to this address.</span>
</div>` },
      { label: "States", content: `<div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:320px;">
  <div>
    <label class="prev-label">Default</label>
    <input class="input-field" placeholder="Enter text…" style="width:100%;box-sizing:border-box;" />
  </div>
  <div>
    <label class="prev-label">Focused</label>
    <input class="input-field" value="jane@example.com" style="width:100%;box-sizing:border-box;border-color:#0a0a0a;outline:none;" />
  </div>
  <div>
    <label class="prev-label">Disabled</label>
    <input class="input-field" value="disabled@example.com" disabled style="width:100%;box-sizing:border-box;opacity:0.5;cursor:not-allowed;background:#f5f5f5;" />
  </div>
  <div>
    <label style="font-size:12px;font-weight:500;color:#ef4444;display:block;margin-bottom:5px;">Error</label>
    <input class="input-field" value="not-an-email" style="width:100%;box-sizing:border-box;border-color:#ef4444;" />
    <span style="font-size:12px;color:#ef4444;margin-top:4px;display:block;">Please enter a valid email address.</span>
  </div>
</div>` },
      { label: "With icons", content: `<div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:320px;">
  <div style="position:relative;">
    <label class="prev-label">Search</label>
    <div style="position:relative;">
      <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='position:absolute;left:10px;top:50%;transform:translateY(-50%);pointer-events:none;'><circle cx='11' cy='11' r='8'/><path d='m21 21-4.35-4.35'/></svg>
      <input class="input-field" placeholder="Search components…" style="width:100%;box-sizing:border-box;padding-left:32px;" />
    </div>
  </div>
  <div>
    <label class="prev-label">Password</label>
    <div style="position:relative;">
      <input class="input-field" type="password" value="hunter2" style="width:100%;box-sizing:border-box;padding-right:36px;" />
      <svg width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='#888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='position:absolute;right:10px;top:50%;transform:translateY(-50%);cursor:pointer;'><path d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z'/><circle cx='12' cy='12' r='3'/></svg>
    </div>
  </div>
</div>` },
    ],
  },
  {
    id: "label",
    name: "Label",
    category: "Form",
    desc: "A text element semantically associated with a form control, describing its purpose to users and assistive technologies.",
    what: `<p>Labels are the critical accessibility layer of every form. They programmatically associate descriptive text with an input control via the for and id attributes (or by nesting the input inside the label element), ensuring screen readers announce the field's name when a user focuses it. Without a label, assistive technology users have no way to know what a field is for. Labels also expand the click target — clicking the label text activates its associated input, which is especially important for small controls like checkboxes and radio buttons.</p><p>Placeholder text is not a substitute for a label: it disappears on typing, has lower contrast, and doesn't persist as an accessible name. Required fields should be clearly marked — a red asterisk (*) is a widely understood convention, but should always be accompanied by a legend explaining the symbol at the top of the form. Labels should be positioned consistently (above the field is most universal), and their font size should be large enough to read comfortably. Never truncate label text to save space — a truncated or ambiguous label is worse than a slightly longer layout.</p>`,
    anatomy: [
      { title: "Text", desc: "The descriptive name of the associated field." },
      { title: "Required indicator", desc: "An asterisk or 'Required' badge when the field is mandatory." },
      { title: "htmlFor / id association", desc: "The programmatic link between label and input." }
    ],
    use: [
      "Every form input, select, textarea, checkbox, and radio button",
      "Expanding clickable area for checkboxes and radio buttons",
      "Providing accessible names for custom form controls",
      "Always — there are almost no exceptions"
    ],
    avoid: [
      "Using placeholder text as the only label — it disappears and has low contrast",
      "Positioning labels far from their associated control",
      "Abbreviating label text to save space — clarity wins over brevity",
      "Using aria-label as a complete substitute when visible labels are possible",
      "Labels that don't accurately describe what the field expects"
    ],
    icons: ["tag", "type", "pencil"],
    states: [
      { name: "Default", desc: "The label is displayed next to or above its associated control." },
      { name: "Required", desc: "An asterisk or 'Required' indicator is shown when the associated field is mandatory." },
      { name: "Optional", desc: "An '(optional)' note is shown when most fields are required and this one is not." },
      { name: "Disabled", desc: "The label appears muted when its associated control is disabled." },
      { name: "Error", desc: "The label may be highlighted in an error color when its associated field has a validation error." }
    ],
    prompt: `Create a Label component that wraps or associates with a form control via htmlFor. Support a required indicator (asterisk) and an optional tag for fields in required-by-default forms. Display a muted style when the associated control is disabled. Ensure click on label focuses or activates the control. Use design tokens for font size, weight, color, and required indicator color.`,
    related: ["input", "checkbox", "radio-group"],
    aka: [
      { system: "Fluent", term: "Label" },
      { system: "Radix UI", term: "Label" },
      { system: "Shadcn/UI", term: "Label" },
      { system: "Chakra UI", term: "Form Control" },
      { system: "Ant Design", term: "Form.Item label" },
      { system: "Canvas", term: "Form Field" },
      { system: "Carbon", term: "Form" },
          { system: "Clarity", term: "Label" },
          { system: "Evergreen", term: "Form Field" },
          { system: "Paste", term: "Label" },
          { system: "Lightning", term: "Form Element" },
          { system: "Spectrum", term: "Field Label" },
          { system: "PatternFly", term: "Label" },
          { system: "HeroUI", term: "Label" },
    ],
    previews: [
      { label: "Default", content: `<div class="prev-form-col">
  <div>
    <label class="prev-label-dark">Full name</label>
    <div class="input-field" style="color:#555;">Jane Smith</div>
  </div>
  <div>
    <label class="prev-label-dark">Role</label>
    <div class="input-field" style="color:#555;">Designer</div>
  </div>
  <div>
    <label class="prev-label-muted">Bio <span style="font-weight:400;font-size:11px;">(optional)</span></label>
    <div class="input-field" style="color:#888;">No bio yet</div>
  </div>
</div>` },
      { label: "Required", content: `<div class="prev-form-col">
  <div style="font-size:12px;color:#888;margin-bottom:4px;"><span style="color:#ef4444;">*</span> Required fields</div>
  <div>
    <label class="prev-label-dark">Email address <span style="color:#ef4444;">*</span></label>
    <div class="input-field" style="color:#555;">jane@example.com</div>
  </div>
  <div>
    <label class="prev-label-dark">Company name <span style="color:#ef4444;">*</span></label>
    <div class="input-field" style="border-color:#ef4444;color:#555;"></div>
    <span style="font-size:12px;color:#ef4444;margin-top:4px;display:block;">This field is required.</span>
  </div>
  <div>
    <label class="prev-label-muted">Website <span style="font-weight:400;font-size:11px;">(optional)</span></label>
    <div class="input-field" style="color:#888;">https://</div>
  </div>
</div>` },
    ],
  },
  {
    id: "pagination",
    name: "Pagination",
    category: "Navigation",
    desc: "A navigation control that allows users to move between pages of a paginated dataset or content list.",
    what: `<p>Pagination breaks a large dataset into discrete, navigable pages instead of loading everything at once. It provides numbered page links so users can jump directly to any page, previous and next controls to move one page at a time, and often first and last shortcuts for jumping to the extremes of the dataset. Ellipsis items (…) compress long ranges of page numbers, showing only the window around the current page.</p><p>Pagination gives users a concrete sense of the dataset's size and their current position within it. It also enables linking to specific result pages and makes very large datasets feasible to render without performance issues. The current page should always be reflected in the URL so users can bookmark, share, or reload a specific result page without losing their position. Page size controls — letting users choose how many items per page — are a valuable complement to pagination when the audience varies between quick scanners and detail-focused researchers.</p>`,
    anatomy: [
      { title: "First / Last", desc: "Jump to the beginning or end of the dataset." },
      { title: "Previous / Next", desc: "Navigate one page backward or forward." },
      { title: "Page numbers", desc: "Clickable page numbers — typically show a window around the current page." },
      { title: "Ellipsis", desc: "Indicates skipped page numbers in large datasets." }
    ],
    use: [
      "Large datasets like search results, product listings, or user tables",
      "When loading all results at once would harm performance",
      "When users need to reference a specific page (e.g., 'results were on page 3')",
      "Administration tables with many rows",
      "Content archives with discrete pages"
    ],
    avoid: [
      "When infinite scroll provides a better UX (social feeds, image galleries)",
      "Very small datasets (under 20 items) — just show everything",
      "When Load More is a better progressive pattern",
      "On mobile for data tables — consider a different layout",
      "Paginating static content on a single page — use anchored sections instead"
    ],
    icons: ["chevron-left", "chevron-right", "chevrons-left", "chevrons-right", "more-horizontal"],
    states: [
      { name: "Default", desc: "Non-active page buttons are shown at their resting style." },
      { name: "Active / Current", desc: "The current page is visually highlighted — bold, filled, or contrasting." },
      { name: "Hover", desc: "A page button shows a hover state as the pointer moves over it." },
      { name: "Disabled", desc: "Previous is disabled on page 1; Next is disabled on the last page." },
      { name: "Ellipsis", desc: "Skipped page ranges are represented by a non-interactive ellipsis item." }
    ],
    prompt: `Create a Pagination component with previous/next buttons, numbered page buttons, and an ellipsis for skipped ranges. Mark the current page with aria-current="page" and disable Prev/Next at boundaries. Wrap in a nav element with aria-label. Support a compact mode for mobile. Use design tokens for active page color, button hover, and disabled states.`,
    related: ["table", "select"],
    aka: [
      { system: "Material Design", term: "Pagination" },
      { system: "Fluent", term: "Pagination" },
      { system: "Ant Design", term: "Pagination" },
      { system: "Shadcn/UI", term: "Pagination" },
      { system: "Bootstrap", term: "Pagination" },
      { system: "Canvas", term: "Pagination" },
      { system: "Carbon", term: "Pagination" },
          { system: "Atlassian", term: "Pagination" },
          { system: "Dell", term: "Pagination" },
          { system: "USWDS", term: "Pagination" },
          { system: "Evergreen", term: "Pagination" },
          { system: "Paste", term: "Pagination" },
          { system: "GOV.UK", term: "Pagination" },
          { system: "Polaris", term: "Pagination" },
          { system: "PatternFly", term: "Pagination" },
          { system: "EUI", term: "Pagination" },
          { system: "HeroUI", term: "Pagination" },
          { system: "Visa", term: "Pagination" },
          { system: "eBay", term: "Pagination" },
          { system: "Flowbite", term: "Pagination" },
          { system: "Cedar", term: "Pagination" },
          { system: "Forma 36", term: "Pagination" },
          { system: "Aurora", term: "Pagination" },
          { system: "Instructure UI", term: "Pagination" },
          { system: "NewsKit", term: "Pagination" },
    ],
    previews: [
      { label: "Default", content: `<div class="prev-pagination">
  <button class="page-btn" title="Previous">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  </button>
  <button class="page-btn">1</button>
  <button class="page-btn">2</button>
  <button class="page-btn active" aria-current="page">3</button>
  <button class="page-btn">4</button>
  <button class="page-btn">5</button>
  <button class="page-btn ellipsis">…</button>
  <button class="page-btn">12</button>
  <button class="page-btn" title="Next">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </button>
</div>` },
      { label: "Boundaries", content: `<div class="prev-pagination">
  <button class="page-btn" disabled title="First">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17-5-5 5-5"/><path d="m18 17-5-5 5-5"/></svg>
  </button>
  <button class="page-btn" disabled title="Previous">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  </button>
  <button class="page-btn active" aria-current="page">1</button>
  <button class="page-btn">2</button>
  <button class="page-btn">3</button>
  <button class="page-btn ellipsis">…</button>
  <button class="page-btn">20</button>
  <button class="page-btn" title="Next">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </button>
  <button class="page-btn" title="Last">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
  </button>
</div>` },
      { label: "Compact", content: `<div style="display:flex;align-items:center;gap:10px;font-family:inherit;">
  <button class="page-btn" title="Previous">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
  </button>
  <span style="font-size:14px;color:#525252;white-space:nowrap;">Page <strong style="color:#0a0a0a;font-weight:600;">3</strong> of 20</span>
  <button class="page-btn" title="Next">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  </button>
</div>` },
    ],
  },
  {
    id: "popover",
    name: "Popover",
    category: "Overlay",
    desc: "A non-modal floating panel anchored to a trigger element, used for rich supplementary content or interactive UI.",
    what: `<p>Popovers are floating panels anchored to a trigger element. They're richer than tooltips — they can contain forms, buttons, lists, images, and any structured UI — but less disruptive than dialogs because they don't trap focus or block background interaction. The user can dismiss them by clicking elsewhere, pressing Escape, or completing the task inside. This makes popovers ideal for secondary tasks that benefit from a focused space without fully interrupting the user's flow.</p><p>Positioning is typically automatic: the popover opens above, below, or to the side of its trigger depending on available viewport space, with an optional arrow indicating the anchor point. Because popovers don't trap focus, users can Tab out of them into the background — the popover should close gracefully when focus moves outside it. On small screens, popovers may need to be replaced with a bottom sheet or full-screen dialog pattern to ensure the content isn't clipped by the viewport edges. Always test popover positioning near the edges of the screen.</p>`,
    anatomy: [
      { title: "Trigger", desc: "The button or element that opens the popover." },
      { title: "Content panel", desc: "The floating container — can include any UI." },
      { title: "Close trigger", desc: "Close button or click-outside behavior." },
      { title: "Arrow", desc: "Optional pointer connecting the popover to its trigger." }
    ],
    use: [
      "Color pickers, date pickers, and emoji selectors",
      "Contextual filters or sorting controls",
      "Inline editing of a field without leaving the page",
      "'Add tag' or 'assign member' flows",
      "Help text or onboarding tips with interactive content"
    ],
    avoid: [
      "When the content is simple text — use a Tooltip instead",
      "For critical flows requiring focused attention — use a Dialog",
      "When nested deeply — popovers inside popovers are disorienting",
      "On small screens where the panel may overlap content unexpectedly",
      "When the action has irreversible consequences — require explicit confirmation"
    ],
    icons: ["info", "help-circle", "settings", "calendar", "edit-2"],
    states: [
      { name: "Closed", desc: "The popover is hidden; only the trigger is visible." },
      { name: "Open", desc: "The floating panel is visible and anchored to its trigger." },
      { name: "Repositioned", desc: "Automatic collision detection has flipped the popover to the opposite side to stay within the viewport." },
      { name: "Focused within", desc: "A form element or interactive item inside the popover has focus." },
      { name: "Closing", desc: "A click outside or Escape key has triggered dismissal; the panel may animate out." }
    ],
    prompt: `Create a Popover component that opens a floating panel anchored to a trigger button, supporting top, bottom, left, and right placements with automatic collision detection. Dismiss on outside click or Escape key and return focus to the trigger. Support rich content including forms, actions, and lists inside. Use design tokens for panel background, border, shadow, and z-index.`,
    related: ["tooltip", "hover-card", "dialog"],
    aka: [
      { system: "Fluent", term: "Popover" },
      { system: "Ant Design", term: "Popover" },
      { system: "Radix UI", term: "Popover" },
      { system: "Shadcn/UI", term: "Popover" },
      { system: "Bootstrap", term: "Popover" },
      { system: "Chakra UI", term: "Popover" },
      { system: "Canvas", term: "Popup" },
      { system: "Carbon", term: "Popover" },
          { system: "Atlassian", term: "Popup" },
          { system: "Dell", term: "Popover" },
          { system: "USWDS", term: "Tooltip" },
          { system: "Momentum", term: "Popover" },
          { system: "Clarity", term: "Signpost" },
          { system: "Evergreen", term: "Popover" },
          { system: "Paste", term: "Popover" },
          { system: "Lightning", term: "Tooltip" },
          { system: "Spectrum", term: "Popover" },
          { system: "Polaris", term: "Popover" },
          { system: "PatternFly", term: "Popover" },
          { system: "EUI", term: "Popover" },
          { system: "Ariakit", term: "Popover" },
          { system: "HeroUI", term: "Popover" },
          { system: "eBay", term: "Popover" },
          { system: "Flowbite", term: "Popover" },
          { system: "Cedar", term: "Popover" },
          { system: "Forma 36", term: "Popover" },
          { system: "Aurora", term: "Popover" },
          { system: "Instructure UI", term: "Popover" },
          { system: "NewsKit", term: "Popover" },
    ],
    previews: [
      { label: "Default", content: `<div style="display:flex;align-items:flex-end;justify-content:center;min-height:300px;padding-bottom:32px;font-family:inherit;">
  <div style="position:relative;">
    <button class="prev-btn-outline" style="font-size:14px;padding:8px 16px;display:flex;align-items:center;gap:7px;">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
      Assign to
    </button>
    <div style="position:absolute;bottom:calc(100% + 12px);left:50%;transform:translateX(-50%);background:#fff;border:1px solid #e5e5e5;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.10),0 2px 6px rgba(0,0,0,0.06);width:248px;overflow:hidden;">
      <div style="padding:10px 12px;border-bottom:1px solid #f0f0f0;">
        <input type="text" placeholder="Search people…" style="width:100%;box-sizing:border-box;font-size:13px;border:1px solid #e5e5e5;border-radius:7px;padding:6px 10px;outline:none;font-family:inherit;color:#0a0a0a;background:#fff;" />
      </div>
      <div style="padding:6px;">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;color:#a3a3a3;padding:5px 8px 4px;">Suggested</div>
        <div style="display:flex;align-items:center;gap:10px;padding:7px 8px;border-radius:7px;background:#f5f5f5;cursor:pointer;">
          <div style="width:28px;height:28px;border-radius:50%;background:#d1fae5;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#065f46;flex-shrink:0;">A</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:500;color:#0a0a0a;line-height:1.3;">Alice Chen</div>
            <div style="font-size:12px;color:#737373;">Design</div>
          </div>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:7px 8px;border-radius:7px;cursor:pointer;">
          <div style="width:28px;height:28px;border-radius:50%;background:#dbeafe;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#1e40af;flex-shrink:0;">M</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:500;color:#0a0a0a;line-height:1.3;">Marcus Kim</div>
            <div style="font-size:12px;color:#737373;">Engineering</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;padding:7px 8px;border-radius:7px;cursor:pointer;">
          <div style="width:28px;height:28px;border-radius:50%;background:#fce7f3;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:#9d174d;flex-shrink:0;">S</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:500;color:#0a0a0a;line-height:1.3;">Sara Lopez</div>
            <div style="font-size:12px;color:#737373;">Product</div>
          </div>
        </div>
      </div>
      <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%) rotate(45deg);width:9px;height:9px;background:#fff;border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;"></div>
    </div>
  </div>
</div>` },
      { label: "With form", content: `<div style="display:flex;align-items:flex-end;justify-content:center;min-height:280px;padding-bottom:32px;font-family:inherit;">
  <div style="position:relative;">
    <button class="prev-btn-outline" style="font-size:14px;padding:8px 16px;display:flex;align-items:center;gap:7px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
      Edit profile
    </button>
    <div style="position:absolute;bottom:calc(100% + 12px);left:50%;transform:translateX(-50%);background:#fff;border:1px solid #e5e5e5;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.10),0 2px 6px rgba(0,0,0,0.06);width:260px;overflow:hidden;">
      <div style="padding:14px 16px;border-bottom:1px solid #f0f0f0;">
        <div style="font-size:14px;font-weight:600;color:#0a0a0a;">Update display name</div>
      </div>
      <div style="padding:14px 16px;display:flex;flex-direction:column;gap:12px;">
        <div>
          <label style="display:block;font-size:12px;font-weight:500;color:#525252;margin-bottom:5px;">Display name</label>
          <input type="text" value="Alice Chen" style="width:100%;box-sizing:border-box;font-size:13px;border:1px solid #e5e5e5;border-radius:7px;padding:7px 10px;outline:none;font-family:inherit;color:#0a0a0a;background:#fff;" />
        </div>
        <div>
          <label style="display:block;font-size:12px;font-weight:500;color:#525252;margin-bottom:5px;">Username</label>
          <div style="display:flex;align-items:center;border:1px solid #e5e5e5;border-radius:7px;overflow:hidden;background:#fff;">
            <span style="padding:7px 8px 7px 10px;font-size:13px;color:#a3a3a3;background:#f5f5f5;border-right:1px solid #e5e5e5;">@</span>
            <input type="text" value="achen" style="flex:1;border:none;font-size:13px;padding:7px 10px;outline:none;font-family:inherit;color:#0a0a0a;background:#fff;" />
          </div>
        </div>
      </div>
      <div style="padding:10px 16px;border-top:1px solid #f0f0f0;display:flex;gap:8px;justify-content:flex-end;">
        <button class="prev-btn-outline" style="font-size:13px;padding:6px 14px;">Cancel</button>
        <button class="prev-btn" style="font-size:13px;padding:6px 14px;">Save</button>
      </div>
      <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%) rotate(45deg);width:9px;height:9px;background:#fff;border-right:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;"></div>
    </div>
  </div>
</div>` },
    ],
  },
  {
    id: "progress",
    name: "Progress",
    category: "Feedback",
    desc: "A visual indicator of completion percentage for a determinate task or process.",
    what: `<p>Progress bars communicate how far along a deterministic process is — from 0% to 100%. They're the right choice when the total work is quantifiable and the current completion can be measured, as opposed to an indeterminate spinner, which signals only that something is happening without indicating how long it will take. Progress bars reduce perceived wait time: research consistently shows users are more patient when they can see measurable forward movement.</p><p>They're commonly paired with a percentage label and a short description of the active step. A fill animation that moves smoothly (rather than jumping) reinforces the sense of continuous progress. The fill color can carry semantic meaning — green for healthy progress, yellow for a warning state, red for an error or failure. For multi-step processes, a segmented progress bar with one segment per step is more informative than a single undifferentiated fill, because it tells the user not just how much is done, but which stage they're currently in.</p>`,
    anatomy: [
      { title: "Label", desc: "Optional text showing percentage or step count." },
      { title: "Track", desc: "The full-width background bar representing the total." },
      { title: "Fill", desc: "The colored portion indicating completion so far." }
    ],
    use: [
      "File upload and download progress",
      "Multi-step form or onboarding completion",
      "Profile completeness indicators",
      "Task or project completion status",
      "Loading a resource where progress can be measured"
    ],
    avoid: [
      "When duration is unknown — use a Spinner or skeleton instead",
      "For very fast operations (under 300ms) — the flash is disorienting",
      "When a simple percentage number suffices",
      "Animating fake progress on indeterminate tasks — erodes trust",
      "Multiple competing progress bars on a single screen"
    ],
    icons: ["loader-2", "check-circle", "bar-chart", "trending-up"],
    states: [
      { name: "Empty (0%)", desc: "The fill is at zero — the process has not yet started." },
      { name: "In progress", desc: "The fill spans a portion of the track, reflecting partial completion." },
      { name: "Complete (100%)", desc: "The fill spans the full track — the process is finished." },
      { name: "Indeterminate", desc: "An animated fill bounces back and forth to indicate an unknown duration." },
      { name: "Error", desc: "The fill turns red to signal the process has failed." }
    ],
    prompt: `Create a Progress bar component with determinate (0–100%) and indeterminate (animated bouncing fill) modes. Use role="progressbar" with aria-valuenow, aria-valuemin, and aria-valuemax for accessibility. Support size variants (sm, md, lg height), an error state (red fill), and an optional label/percentage display. Use design tokens for track color, fill color, and border radius.`,
    related: ["skeleton", "toast"],
    aka: [
      { system: "Material Design", term: "Progress Indicators" },
      { system: "Fluent", term: "Progress bar" },
      { system: "Ant Design", term: "Progress" },
      { system: "Chakra UI", term: "Progress" },
      { system: "Bootstrap", term: "Progress" },
      { system: "Base Web", term: "ProgressBar" },
      { system: "Radix UI", term: "Progress" },
      { system: "Shadcn/UI", term: "Progress" },
      { system: "Canvas", term: "Loading Animation" },
      { system: "Carbon", term: "Progress Bar" },
          { system: "Atlassian", term: "Progress bar" },
          { system: "Dell", term: "Progress bar" },
          { system: "USWDS", term: "Step indicator" },
          { system: "Momentum", term: "Progressbar" },
          { system: "Clarity", term: "Progress Bar" },
          { system: "Paste", term: "Progress Bar" },
          { system: "Lightning", term: "Progress Bar" },
          { system: "Spectrum", term: "Progress Bar" },
          { system: "Polaris", term: "Progress bar" },
          { system: "PatternFly", term: "Progress" },
          { system: "EUI", term: "Loading" },
          { system: "HeroUI", term: "ProgressBar" },
          { system: "Visa", term: "Progress" },
          { system: "eBay", term: "Progress stepper" },
          { system: "Flowbite", term: "Progress" },
          { system: "Aurora", term: "Progress Bar" },
          { system: "Instructure UI", term: "ProgressBar" },
          { system: "NewsKit", term: "Progress Indicator" },
    ],
    previews: [
      { label: "Default", content: `<div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:360px;">
  <div>
    <div style="display:flex;justify-content:space-between;font-size:12px;color:#555;margin-bottom:6px;"><span>Uploading files</span><span>73%</span></div>
    <div class="prev-progress-bar"><div style="height:100%;width:73%;background:#0a0a0a;border-radius:9999px;"></div></div>
  </div>
  <div>
    <div style="display:flex;justify-content:space-between;font-size:12px;color:#555;margin-bottom:6px;"><span>Profile complete</span><span>40%</span></div>
    <div class="prev-progress-bar"><div style="height:100%;width:40%;background:#a78bfa;border-radius:9999px;"></div></div>
  </div>
  <div>
    <div style="display:flex;justify-content:space-between;font-size:12px;color:#166534;margin-bottom:6px;"><span>Build complete</span><span>100%</span></div>
    <div class="prev-progress-bar"><div style="height:100%;width:100%;background:#22c55e;border-radius:9999px;"></div></div>
  </div>
</div>` },
      { label: "Sizes", content: `<div style="display:flex;flex-direction:column;gap:14px;width:100%;max-width:360px;">
  <div>
    <div style="font-size:12px;color:#888;margin-bottom:6px;">Small (4px)</div>
    <div style="height:4px;background:#e5e7eb;border-radius:9999px;overflow:hidden;"><div style="height:100%;width:60%;background:#0a0a0a;border-radius:9999px;"></div></div>
  </div>
  <div>
    <div style="font-size:12px;color:#888;margin-bottom:6px;">Medium (8px)</div>
    <div class="prev-progress-bar"><div style="height:100%;width:60%;background:#0a0a0a;border-radius:9999px;"></div></div>
  </div>
  <div>
    <div style="font-size:12px;color:#888;margin-bottom:6px;">Large (12px)</div>
    <div style="height:12px;background:#e5e7eb;border-radius:9999px;overflow:hidden;"><div style="height:100%;width:60%;background:#0a0a0a;border-radius:9999px;"></div></div>
  </div>
</div>` },
      { label: "Indeterminate", content: `<div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:360px;">
  <div>
    <div style="font-size:12px;color:#555;margin-bottom:6px;">Processing…</div>
    <div style="height:8px;background:#e5e7eb;border-radius:9999px;overflow:hidden;position:relative;">
      <div style="position:absolute;height:100%;width:40%;background:#0a0a0a;border-radius:9999px;animation:indeterminate 1.4s ease-in-out infinite;left:-40%;"></div>
    </div>
  </div>
  <div>
    <div style="font-size:12px;color:#991b1b;margin-bottom:6px;">Upload failed</div>
    <div style="height:8px;background:#fee2e2;border-radius:9999px;overflow:hidden;"><div style="height:100%;width:45%;background:#ef4444;border-radius:9999px;"></div></div>
  </div>
</div>` },
    ],
  },
  {
    id: "radio-group",
    name: "Radio Group",
    category: "Form",
    desc: "A set of mutually exclusive options where selecting one automatically deselects all others.",
    what: `<p>Radio buttons let users pick exactly one option from a fixed, fully visible set. Their mutual exclusivity is enforced both visually and semantically — selecting any option automatically deselects whichever was previously selected, and the browser's native behavior prevents two radio buttons in the same group from both being checked. This makes the single-selection constraint immediately obvious without any additional explanation.</p><p>Radio buttons work best when the number of options is small enough that all can be displayed at once (typically 2–5), when the options are meaningfully different from each other, and when users benefit from being able to compare all choices before committing to one. Always pre-select a sensible default — a radio group with no selection forces the user to make a choice even when one option is clearly the most common. Keyboard navigation within a radio group uses arrow keys to move between options, not Tab, which should move focus to the next form element entirely.</p>`,
    anatomy: [
      { title: "Group label", desc: "Names the decision being made (e.g., 'Notification frequency')." },
      { title: "Radio input", desc: "The circular control — filled when selected, empty when not." },
      { title: "Option label", desc: "Describes each choice — click target extends to the full label." },
      { title: "Description", desc: "Optional supporting text per option." }
    ],
    use: [
      "Mutually exclusive choices with 2–5 options",
      "Settings like 'Notification preference: Immediate / Daily / Weekly'",
      "Subscription or pricing tier selection",
      "Survey questions with one valid answer",
      "When users benefit from seeing all options at once"
    ],
    avoid: [
      "More than 5–6 options — use a Select instead",
      "When multiple selections are valid — use Checkboxes",
      "For a simple on/off toggle — use a Switch",
      "Long descriptions per option — consider cards or a different selection pattern",
      "Defaulting to no selection when a sensible default exists — always pre-select one"
    ],
    icons: ["circle", "circle-dot", "check-circle"],
    states: [
      { name: "Unselected", desc: "The option is not chosen — an empty circle is displayed." },
      { name: "Selected", desc: "The option is chosen — a filled dot appears inside the circle." },
      { name: "Focused", desc: "The radio control has keyboard focus — a focus ring is shown." },
      { name: "Disabled unselected", desc: "The option is shown but cannot be selected — greyed out." },
      { name: "Disabled selected", desc: "The option is selected but cannot be changed — a locked state." },
      { name: "Error", desc: "The group has a validation error — a message is shown and the group is highlighted." }
    ],
    prompt: `Create a Radio Group component where items share a name attribute and enforce single selection. Use role="radiogroup" on the container and ensure arrow key navigation moves selection between options. Support disabled state per option and a group-level error message. Always pre-select a sensible default. Use design tokens for radio circle color, selected dot, focus ring, and error state.`,
    related: ["checkbox", "switch", "select"],
    aka: [
      { system: "Material Design", term: "Radio Button" },
      { system: "Fluent", term: "Radio group" },
      { system: "Ant Design", term: "Radio.Group" },
      { system: "Radix UI", term: "Radio Group" },
      { system: "Shadcn/UI", term: "Radio Group" },
      { system: "Bootstrap", term: "Form Check (radio)" },
      { system: "Chakra UI", term: "Radio" },
      { system: "Canvas", term: "Radio" },
      { system: "Carbon", term: "Radio Button" },
          { system: "Atlassian", term: "Radio" },
          { system: "Dell", term: "Radio button" },
          { system: "USWDS", term: "Radio buttons" },
          { system: "Momentum", term: "Radiogroup" },
          { system: "Clarity", term: "Radio Button" },
          { system: "Evergreen", term: "Radio" },
          { system: "Paste", term: "Radio Group" },
          { system: "GOV.UK", term: "Radios" },
          { system: "Lightning", term: "Radio Group" },
          { system: "Spectrum", term: "Radio Group" },
          { system: "Polaris", term: "Radio button" },
          { system: "PatternFly", term: "Radio" },
          { system: "Ariakit", term: "Radio" },
          { system: "HeroUI", term: "RadioGroup" },
          { system: "Visa", term: "Radio" },
          { system: "eBay", term: "Radio button" },
          { system: "Flowbite", term: "Radio" },
          { system: "Cedar", term: "Radio button" },
          { system: "Forma 36", term: "Radio" },
          { system: "Aurora", term: "Radio Button" },
          { system: "Instructure UI", term: "RadioInput" },
          { system: "NewsKit", term: "Radio Button" },
    ],
    previews: [
      { label: "Default", content: `<div style="display:flex;flex-direction:column;gap:6px;">
  <div style="font-size:12px;font-weight:600;color:#888;margin-bottom:4px;text-transform:uppercase;letter-spacing:0.06em;">Notification frequency</div>
  <label class="prev-check-row"><div class="radio-circle selected"></div> Immediately</label>
  <label class="prev-check-row"><div class="radio-circle"></div> Once a day</label>
  <label class="prev-check-row"><div class="radio-circle"></div> Once a week</label>
</div>` },
      { label: "Horizontal", content: `<div style="display:flex;flex-direction:column;gap:12px;">
  <div style="font-size:12px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.06em;">Plan type</div>
  <div style="display:flex;gap:20px;">
    <label style="display:flex;align-items:center;gap:8px;font-size:14px;color:#333;cursor:pointer;"><div class="radio-circle selected"></div> Monthly</label>
    <label style="display:flex;align-items:center;gap:8px;font-size:14px;color:#333;cursor:pointer;"><div class="radio-circle"></div> Annual</label>
    <label style="display:flex;align-items:center;gap:8px;font-size:14px;color:#333;cursor:pointer;"><div class="radio-circle"></div> Lifetime</label>
  </div>
</div>` },
      { label: "States", content: `<div style="display:flex;flex-direction:column;gap:8px;">
  <label class="prev-check-row"><div class="radio-circle"></div> Unselected</label>
  <label class="prev-check-row"><div class="radio-circle selected"></div> Selected</label>
  <label style="display:flex;align-items:center;gap:10px;font-size:14px;color:#aaa;cursor:not-allowed;"><div style="width:16px;height:16px;border-radius:50%;border:2px solid #ddd;flex-shrink:0;opacity:0.5;"></div> Disabled</label>
  <label style="display:flex;align-items:center;gap:10px;font-size:14px;color:#aaa;cursor:not-allowed;"><div style="width:16px;height:16px;border-radius:50%;border:2px solid #ddd;background:#f5f5f5;display:flex;align-items:center;justify-content:center;flex-shrink:0;opacity:0.5;"><div style="width:8px;height:8px;border-radius:50%;background:#ddd;"></div></div> Disabled selected</label>
  <div style="margin-top:4px;border-top:1px solid #fee2e2;padding-top:8px;">
    <label style="display:flex;align-items:center;gap:10px;font-size:14px;color:#991b1b;cursor:pointer;"><div style="width:16px;height:16px;border-radius:50%;border:2px solid #ef4444;flex-shrink:0;"></div> Error state</label>
    <span style="font-size:12px;color:#ef4444;display:block;margin-top:4px;margin-left:26px;">Please select an option.</span>
  </div>
</div>` },
    ],
  },
  {
    id: "scroll-area",
    name: "Scroll Area",
    category: "Layout",
    desc: "A container with custom-styled scrollbars that provides consistent cross-browser scroll behavior.",
    what: `<p>Scroll Area wraps a region of overflow content and replaces the native browser scrollbar with a custom-styled one. Native scrollbars vary dramatically in appearance across operating systems and browsers — wide on Windows, minimal on macOS, completely invisible by default on many mobile browsers. This component provides a consistent, design-system-aligned scrollbar across all platforms without using browser-specific CSS hacks. It supports both vertical and horizontal scrolling, custom scrollbar width and color, and a subtle auto-hide behavior that fades the scrollbar when the user isn't actively scrolling.</p><p>The core scrolling behavior remains native and accessible — only the visual styling of the scrollbar is customized, not the underlying scroll mechanics. This is important because native scroll has browser-optimized performance and inertia that custom implementations often fail to match. When implementing auto-hide scrollbars, ensure they always reappear during active scrolling and on focus, so users always have a visual affordance that scrolling is possible. Always show at least a faint indicator when content overflows, especially in fixed-height containers where users might not realize there is more content below.</p>`,
    anatomy: [
      { title: "Viewport", desc: "The clipped visible area." },
      { title: "Content", desc: "The full scrollable content that may overflow the viewport." },
      { title: "Scrollbar", desc: "Custom-styled vertical or horizontal scrollbar." },
      { title: "Corner", desc: "Optional corner piece when both axes scroll." }
    ],
    use: [
      "Sidebars and navigation panels",
      "Fixed-height content containers (code blocks, chat windows)",
      "Data tables with many rows in a bounded area",
      "Modals and drawers with long content",
      "When the default browser scrollbar breaks your visual design"
    ],
    avoid: [
      "Hiding scrollbars entirely on touch devices — always indicate scrollability",
      "Wrapping the entire page — use native scroll for full-page layouts",
      "When content fits without overflow — the component adds unnecessary overhead",
      "Ultra-thin scrollbars that users can't see or target",
      "When scroll position state must be controlled externally without the proper API"
    ],
    icons: ["scroll-text", "move-vertical", "arrow-up", "arrow-down"],
    states: [
      { name: "Idle", desc: "Content fits or the user is not scrolling — scrollbar may be hidden or faint." },
      { name: "Scrolling", desc: "The user is actively scrolling — the custom scrollbar thumb is visible and moving." },
      { name: "Scrollbar hover", desc: "The pointer is over the scrollbar thumb — it may expand or highlight for easier grabbing." },
      { name: "Scrollbar dragging", desc: "The user is dragging the scrollbar thumb to a new position." },
      { name: "At boundary", desc: "The scroll position is at the top or bottom; further scrolling in that direction is not possible." }
    ],
    prompt: `Create a Scroll Area component that wraps overflow content with a custom-styled scrollbar, supporting both vertical and horizontal scroll. Show the scrollbar thumb on hover or during scrolling, and expand it on thumb hover for easier grabbing. Keep the area keyboard-navigable. Use design tokens for scrollbar track color, thumb color, and thumb border radius.`,
    related: ["table", "sheet"],
    aka: [
      { system: "Radix UI", term: "Scroll Area" },
      { system: "Shadcn/UI", term: "Scroll Area" },
      { system: "Ant Design", term: "Affix" },
          { system: "Polaris", term: "Scrollable" },
          { system: "NewsKit", term: "Scroll" },
    ],
    previews: [
      { label: "Vertical", content: `<div style="height:180px;overflow:hidden;border:1px solid #ddd;border-radius:8px;position:relative;background:#fff;">
  <div style="padding:10px 14px 6px;font-size:12px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #eee;">Notifications</div>
  <div style="height:140px;overflow-y:auto;position:relative;">
    <div style="position:absolute;right:3px;top:4px;bottom:4px;width:4px;background:#f0f0f0;border-radius:2px;">
      <div style="width:4px;height:35%;background:#bbb;border-radius:2px;margin-top:15%;transition:background 0.15s;"></div>
    </div>
    <div class="prev-feed-item">
      <div style="width:8px;height:8px;border-radius:50%;background:#3b82f6;flex-shrink:0;margin-top:4px;"></div>
      <div><div style="font-size:13px;color:#333;font-weight:500;">New comment on your post</div><div class="prev-sub">2 minutes ago</div></div>
    </div>
    <div class="prev-feed-item">
      <div style="width:8px;height:8px;border-radius:50%;background:#3b82f6;flex-shrink:0;margin-top:4px;"></div>
      <div><div style="font-size:13px;color:#333;font-weight:500;">Project invite accepted</div><div class="prev-sub">15 minutes ago</div></div>
    </div>
    <div class="prev-feed-item">
      <div style="width:8px;height:8px;border-radius:50%;background:#d4d4d4;flex-shrink:0;margin-top:4px;"></div>
      <div><div class="prev-text-dim">Build completed successfully</div><div class="prev-sub">1 hour ago</div></div>
    </div>
    <div class="prev-feed-item">
      <div style="width:8px;height:8px;border-radius:50%;background:#d4d4d4;flex-shrink:0;margin-top:4px;"></div>
      <div><div class="prev-text-dim">Payment processed</div><div class="prev-sub">3 hours ago</div></div>
    </div>
    <div style="padding:10px 14px;display:flex;gap:10px;align-items:flex-start;">
      <div style="width:8px;height:8px;border-radius:50%;background:#d4d4d4;flex-shrink:0;margin-top:4px;"></div>
      <div><div class="prev-text-dim">Weekly report ready</div><div class="prev-sub">Yesterday</div></div>
    </div>
  </div>
</div>` },
      { label: "Horizontal", content: `<div style="border:1px solid #ddd;border-radius:8px;overflow:hidden;background:#fff;">
  <div style="padding:10px 14px 6px;font-size:12px;font-weight:600;color:#999;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid #eee;">Tags</div>
  <div style="overflow-x:auto;padding:12px 14px;position:relative;">
    <div style="display:flex;gap:8px;white-space:nowrap;">
      <span style="display:inline-block;padding:5px 12px;background:#eff6ff;color:#2563eb;font-size:12px;font-weight:500;border-radius:16px;">Design Systems</span>
      <span style="display:inline-block;padding:5px 12px;background:#f0fdf4;color:#16a34a;font-size:12px;font-weight:500;border-radius:16px;">Components</span>
      <span style="display:inline-block;padding:5px 12px;background:#fefce8;color:#ca8a04;font-size:12px;font-weight:500;border-radius:16px;">Accessibility</span>
      <span style="display:inline-block;padding:5px 12px;background:#fdf2f8;color:#db2777;font-size:12px;font-weight:500;border-radius:16px;">Typography</span>
      <span style="display:inline-block;padding:5px 12px;background:#f5f3ff;color:#7c3aed;font-size:12px;font-weight:500;border-radius:16px;">Tokens</span>
      <span style="display:inline-block;padding:5px 12px;background:#fff7ed;color:#ea580c;font-size:12px;font-weight:500;border-radius:16px;">Motion</span>
      <span style="display:inline-block;padding:5px 12px;background:#ecfeff;color:#0891b2;font-size:12px;font-weight:500;border-radius:16px;">Layout</span>
    </div>
    <div style="position:absolute;left:0;bottom:3px;right:0;height:4px;padding:0 14px;">
      <div style="height:4px;background:#f0f0f0;border-radius:2px;"><div style="height:4px;width:50%;background:#bbb;border-radius:2px;"></div></div>
    </div>
  </div>
</div>` },
    ],
  },
  {
    id: "select",
    name: "Select",
    category: "Form",
    desc: "A dropdown control that lets users choose one option from a predefined list.",
    what: `<p>Select presents a closed, finite list of options in a dropdown, where users must choose exactly one value. The trigger shows the current selection in its collapsed state; clicking it reveals the full list of options. It's the right choice when the list is small and manageable (typically under 15 items), when the options are well-defined and pre-known, and when users don't need to search or filter to find what they want.</p><p>The native HTML select element has reliable accessibility support, but is notoriously difficult to style consistently across browsers. Custom Select components solve the styling limitation while preserving keyboard navigation and screen reader announcements. When building a custom Select, ensure it replicates native keyboard behavior: type-ahead (pressing a letter jumps to the first matching option), arrow key navigation, and Enter or Space to confirm a selection. Always announce the selected value to screen readers when it changes, and ensure the trigger's accessible name reflects the current selection.</p>`,
    anatomy: [
      { title: "Trigger", desc: "The closed state showing the selected value." },
      { title: "Placeholder", desc: "Text shown when no value is selected." },
      { title: "Dropdown panel", desc: "The list of options, revealed on trigger click." },
      { title: "Option items", desc: "Each selectable value, optionally grouped." }
    ],
    use: [
      "Country, state, language, or timezone selection",
      "Category or type filters with fixed options",
      "Sort order (Newest first, Oldest first, A–Z)",
      "Form fields with 5–15 discrete options",
      "When all options are equally likely — no need for search"
    ],
    avoid: [
      "More than 15 options — use Combobox with search",
      "Only 2–3 options — use Radio Buttons for better scannability",
      "Multi-select — the native select's multi-select UX is poor; use a custom component",
      "Binary options like 'Yes/No' — use a Switch or Checkbox",
      "When users might not know the option name — use Combobox"
    ],
    icons: ["chevron-down", "check", "x", "search", "list"],
    states: [
      { name: "Default / closed", desc: "Shows the selected value or placeholder; the dropdown is hidden." },
      { name: "Open", desc: "The dropdown list is visible, with the current selection highlighted." },
      { name: "Option hover", desc: "An option is highlighted as the pointer moves over it." },
      { name: "Option selected", desc: "The chosen option is marked and reflected in the trigger." },
      { name: "Disabled", desc: "The control is non-interactive — greyed out, cannot be opened." },
      { name: "Error", desc: "Validation has failed — the trigger border turns red and an error message appears." }
    ],
    prompt: `Create a Select component with a custom-styled trigger and floating dropdown list, replacing the native select element. Support option groups, disabled options, and a placeholder. Implement full keyboard navigation (arrow keys, Enter, Escape, type-ahead). Include error and disabled states. Associate with a label via htmlFor/id. Use design tokens for trigger border, dropdown shadow, and selected option highlight.`,
    related: ["combobox", "radio-group", "dropdown-menu"],
    aka: [
      { system: "Fluent", term: "Select" },
      { system: "Ant Design", term: "Select" },
      { system: "Radix UI", term: "Select" },
      { system: "Shadcn/UI", term: "Select" },
      { system: "Bootstrap", term: "Form Select" },
      { system: "Chakra UI", term: "Select" },
      { system: "Canvas", term: "Select" },
      { system: "Carbon", term: "Select" },
          { system: "Atlassian", term: "Select" },
          { system: "Dell", term: "Select" },
          { system: "USWDS", term: "Select" },
          { system: "Momentum", term: "Select" },
          { system: "Clarity", term: "Select" },
          { system: "Evergreen", term: "Select" },
          { system: "Paste", term: "Select" },
          { system: "GOV.UK", term: "Select" },
          { system: "Lightning", term: "Select" },
          { system: "Spectrum", term: "Picker" },
          { system: "Polaris", term: "Select" },
          { system: "PatternFly", term: "Form select" },
          { system: "EUI", term: "Combo Box" },
          { system: "Ariakit", term: "Select" },
          { system: "HeroUI", term: "Select" },
          { system: "Visa", term: "Select (native)" },
          { system: "eBay", term: "Select list" },
          { system: "Flowbite", term: "Select" },
          { system: "Cedar", term: "Select" },
          { system: "Forma 36", term: "Select" },
          { system: "Aurora", term: "Select" },
          { system: "Instructure UI", term: "SimpleSelect" },
          { system: "NewsKit", term: "Select" },
    ],
    previews: [
      { label: "Default", content: `<div class="select-prev" style="width:100%;max-width:280px;position:relative;">
  <label style="font-size:12px;font-weight:500;color:#555;display:block;margin-bottom:6px;">Sort by</label>
  <div class="select-trigger" style="display:flex;align-items:center;border:1px solid #ddd;border-radius:6px;background:#ffffff;padding:8px 12px;cursor:pointer;justify-content:space-between;">
    <span class="select-display" style="font-size:13px;color:#0a0a0a;">Newest first</span>
    <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>
  </div>
  <div class="select-dropdown" style="display:none;position:absolute;top:100%;left:0;right:0;margin-top:4px;background:#ffffff;border:1px solid #ddd;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.12);z-index:10;">
    <div class="select-option active" style="padding:8px 12px;font-size:13px;cursor:pointer;color:#0a0a0a;background:#f3f4f6;">Newest first</div>
    <div class="select-option prev-list-item">Oldest first</div>
    <div class="select-option prev-list-item">A → Z</div>
    <div class="select-option prev-list-item">Z → A</div>
  </div>
</div>` },
      { label: "States", content: `<div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:280px;">
  <div>
    <label class="prev-label">Default</label>
    <div style="display:flex;align-items:center;border:1px solid #ddd;border-radius:6px;background:#ffffff;padding:8px 12px;cursor:pointer;justify-content:space-between;">
      <span class="prev-desc">Select an option…</span>
      <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>
    </div>
  </div>
  <div>
    <label class="prev-label">Selected</label>
    <div style="display:flex;align-items:center;border:1px solid #0a0a0a;border-radius:6px;background:#ffffff;padding:8px 12px;cursor:pointer;justify-content:space-between;">
      <span style="font-size:13px;color:#0a0a0a;">Newest first</span>
      <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>
    </div>
  </div>
  <div>
    <label class="prev-label-muted">Disabled</label>
    <div style="display:flex;align-items:center;border:1px solid #eee;border-radius:6px;background:#f9f9f9;padding:8px 12px;cursor:not-allowed;justify-content:space-between;opacity:0.5;">
      <span class="prev-desc">Select an option…</span>
      <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#ccc' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>
    </div>
  </div>
  <div>
    <label style="font-size:12px;font-weight:500;color:#ef4444;display:block;margin-bottom:5px;">Error</label>
    <div style="display:flex;align-items:center;border:1px solid #ef4444;border-radius:6px;background:#ffffff;padding:8px 12px;cursor:pointer;justify-content:space-between;">
      <span class="prev-desc">Select an option…</span>
      <svg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='#888' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>
    </div>
    <span style="font-size:12px;color:#ef4444;margin-top:4px;display:block;">This field is required.</span>
  </div>
</div>` },
    ],
  },
  {
    id: "separator",
    name: "Separator",
    category: "Layout",
    desc: "A thin line used to visually divide content into distinct sections or groups.",
    what: `<p>Separators create visual hierarchy and grouping by dividing content into distinct, scannable sections. They're purely presentational — a thin horizontal or vertical rule drawn with a border or background color — but despite their simplicity they do significant cognitive work. By breaking up a continuous stream of content into labeled chunks, they reduce the mental effort required to find and process information.</p><p>Separators also appear inside menus and sidebars to group related items. A labeled separator — with centered text like "or" between two auth methods, or a section title in a settings panel — acts as both a divider and a lightweight heading, adding context without the visual weight of a full heading element. Use separators sparingly: too many dividing lines create visual noise rather than clarity, and can make a layout feel fragmented. When whitespace alone provides sufficient grouping, prefer it over adding a line. The ARIA role="separator" ensures the divider is meaningful to assistive technology in contexts where its structure communicates section boundaries.</p>`,
    anatomy: [
      { title: "Orientation", desc: "Horizontal (default) or vertical." },
      { title: "Label", desc: "Optional centered text label for OR separators or section titles." }
    ],
    use: [
      "Dividing sections in dropdown menus or sidebars",
      "Form sections with distinct groups (Personal info / Account settings)",
      "Between footer columns or navigation groups",
      "OR divider in authentication forms",
      "Separating header content from body in cards"
    ],
    avoid: [
      "Overusing — too many separators create visual noise instead of clarity",
      "As a substitute for actual whitespace/margin",
      "Decorative use without semantic grouping purpose",
      "Vertical separators in responsive layouts that break on mobile",
      "Using lines when color contrast or spacing alone creates sufficient separation"
    ],
    icons: ["minus", "more-horizontal", "grip-horizontal"],
    states: [
      { name: "Horizontal", desc: "A full-width horizontal rule dividing stacked content or form sections." },
      { name: "Vertical", desc: "A vertical rule dividing side-by-side content or inline groups." },
      { name: "Labeled", desc: "A centered text label (e.g., 'or', 'More options') flanked by lines on each side." }
    ],
    prompt: `Create a Separator component supporting horizontal and vertical orientations and an optional centered text label (e.g., "or"). Use role="separator" with aria-orientation for accessibility, or role="presentation" for purely decorative instances. Keep it a single, thin element with minimal markup. Use design tokens for line color, label text color, and font size.`,
    related: ["card", "accordion", "tabs"],
    aka: [
      { system: "Material Design", term: "Divider" },
      { system: "Fluent", term: "Divider" },
      { system: "Radix UI", term: "Separator" },
      { system: "Shadcn/UI", term: "Separator" },
      { system: "Ant Design", term: "Divider" },
      { system: "Chakra UI", term: "Divider" },
      { system: "Bootstrap", term: "Horizontal Rule" },
      { system: "Carbon", term: "Horizontal Rule" },
          { system: "Dell", term: "Divider" },
          { system: "Paste", term: "Separator" },
          { system: "Spectrum", term: "Divider" },
          { system: "Polaris", term: "Divider" },
          { system: "PatternFly", term: "Divider" },
          { system: "EUI", term: "Horizontal Rule" },
          { system: "Ariakit", term: "Separator" },
          { system: "HeroUI", term: "Separator" },
          { system: "Visa", term: "Divider" },
          { system: "eBay", term: "Divider" },
          { system: "Flowbite", term: "HR" },
          { system: "NewsKit", term: "Divider" },
    ],
    previews: [
      { label: "Horizontal", content: `<div style="width:100%;max-width:360px;display:flex;flex-direction:column;gap:16px;">
  <div style="font-size:14px;color:#0a0a0a;font-weight:500;">Personal information</div>
  <div style="display:flex;flex-direction:column;gap:8px;font-size:13px;color:#555;">
    <div>Full name: Jane Smith</div>
    <div>Email: jane@example.com</div>
  </div>
  <div style="height:1px;background:#e5e7eb;width:100%;"></div>
  <div style="font-size:14px;color:#0a0a0a;font-weight:500;">Account settings</div>
  <div style="display:flex;flex-direction:column;gap:8px;font-size:13px;color:#555;">
    <div>Plan: Pro</div>
    <div>Member since: Jan 2024</div>
  </div>
</div>` },
      { label: "Vertical", content: `<div style="display:flex;align-items:center;gap:16px;height:60px;">
  <span class="prev-text-link">Dashboard</span>
  <div style="width:1px;height:20px;background:#ddd;"></div>
  <span class="prev-text-link">Projects</span>
  <div style="width:1px;height:20px;background:#ddd;"></div>
  <span class="prev-text-link">Reports</span>
  <div style="width:1px;height:20px;background:#ddd;"></div>
  <span class="prev-text-link">Settings</span>
</div>` },
    ],
  },
  {
    id: "sheet",
    name: "Sheet",
    category: "Overlay",
    desc: "A panel that slides in from the edge of the screen to display supplementary content without navigating away.",
    what: `<p>Sheets, also called Drawers, slide in from any edge of the screen — left, right, top, or bottom — and overlay the main content with a panel. They allow users to view or edit secondary content alongside the current page context without fully navigating away. The main content remains visible (and sometimes partially interactive) behind the sheet, maintaining spatial orientation. Right-side sheets are most common on desktop for detail panels and settings.</p><p>Bottom sheets are the standard mobile pattern for supplementary content and menus, as they align naturally with thumb reach on handheld devices. Sheets are appropriate for tasks that are related to the current view but need more space than a popover or dropdown can provide. The sheet should trap focus when the overlay backdrop is active and blocking; if the backdrop allows click-through interaction with the background, focus should not be trapped. Always provide a close button, an Escape key shortcut, and optionally an overlay backdrop click to dismiss, ensuring multiple exit paths are available to keyboard and pointer users alike.</p>`,
    anatomy: [
      { title: "Panel", desc: "The sliding container — typically 320–480px wide for side sheets." },
      { title: "Header", desc: "Title and close button." },
      { title: "Body", desc: "Content — can be scrollable." },
      { title: "Footer", desc: "Actions like Save or Cancel." },
      { title: "Overlay", desc: "Optional backdrop dimming the background." }
    ],
    use: [
      "Detail panels for list items (click a row, see full detail)",
      "Filter controls for large datasets",
      "Mobile navigation menus",
      "Cart or checkout side panels in e-commerce",
      "Settings or configuration panels that complement the main view"
    ],
    avoid: [
      "For simple confirmations — use an Alert Dialog",
      "Complex forms that deserve their own page",
      "On mobile for bottom sheets taller than 80% — users lose page context",
      "As a primary navigation pattern on desktop",
      "When the content has many sub-levels — the sheet gets too complex"
    ],
    icons: ["panel-right", "panel-left", "x", "chevron-right"],
    states: [
      { name: "Closed", desc: "The sheet is off-screen and not visible." },
      { name: "Opening", desc: "The panel is animating in from the edge of the screen." },
      { name: "Open", desc: "The panel is fully visible and interactive." },
      { name: "Scrolled", desc: "Content inside the sheet body has been scrolled — a scroll indicator may appear." },
      { name: "Closing", desc: "The panel is animating back off-screen after dismissal." }
    ],
    prompt: `Create a Sheet (drawer) component that slides in from the left, right, top, or bottom edge of the screen. Trap focus, lock body scroll, and support Escape/overlay-click dismissal. Include a header with title and close button, a scrollable body area, and an optional footer. Use role="dialog" and aria-labelledby. Use design tokens for panel width/height, overlay opacity, and slide animation.`,
    related: ["dialog", "alert-dialog", "scroll-area"],
    aka: [
      { system: "Material Design", term: "Side Sheets" },
      { system: "Fluent", term: "Drawer" },
      { system: "Ant Design", term: "Drawer" },
      { system: "Shadcn/UI", term: "Sheet" },
      { system: "Chakra UI", term: "Drawer" },
      { system: "Bootstrap", term: "Offcanvas" },
      { system: "Canvas", term: "Side Panel" },
          { system: "Atlassian", term: "Drawer" },
          { system: "Dell", term: "Drawer" },
          { system: "Clarity", term: "Side Panel" },
          { system: "Evergreen", term: "Side Sheet" },
          { system: "Paste", term: "Side Panel" },
          { system: "Spectrum", term: "Tray" },
          { system: "Polaris", term: "Sheet" },
          { system: "PatternFly", term: "Drawer" },
          { system: "EUI", term: "Flyout" },
          { system: "HeroUI", term: "Drawer" },
          { system: "Visa", term: "Panel" },
          { system: "eBay", term: "Sheet" },
          { system: "Flowbite", term: "Drawer" },
          { system: "NewsKit", term: "Drawer" },
    ],
    previews: [
      { label: "Right", content: `<div style="display:flex;gap:0;border:1px solid #ddd;border-radius:10px;overflow:hidden;width:100%;max-width:460px;height:180px;">
  <div style="flex:1;padding:16px;font-size:13px;color:#555;border-right:1px solid #ddd;">
    <div style="font-weight:500;color:#0a0a0a;margin-bottom:8px;">Orders</div>
    <div style="padding:6px 0;border-bottom:1px solid #eee;">Order #1042 — $240</div>
    <div style="padding:6px 0;border-bottom:1px solid #eee;">Order #1041 — $89</div>
    <div style="padding:6px 0;border-bottom:1px solid #eee;">Order #1040 — $156</div>
  </div>
  <div style="width:200px;padding:14px;background:#f9f9f9;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
      <div class="prev-bold-title">Order #1042</div>
      <span style="cursor:pointer;color:#888;font-size:16px;">×</span>
    </div>
    <div style="font-size:12px;color:#888;margin-bottom:10px;">March 5, 2026</div>
    <span style="padding:2px 8px;border-radius:9999px;font-size:11px;font-weight:600;background:#f0fdf4;color:#166534;border:1px solid #bbf7d0;">Shipped</span>
  </div>
</div>` },
      { label: "Bottom", content: `<div style="border:1px solid #ddd;border-radius:10px;overflow:hidden;width:100%;max-width:460px;">
  <div style="padding:12px 16px;background:#f3f4f6;font-size:13px;color:#555;border-bottom:1px solid #eee;">
    <div style="height:12px;background:#ddd;border-radius:4px;width:60%;margin-bottom:8px;"></div>
    <div style="height:10px;background:#ddd;border-radius:4px;width:80%;margin-bottom:6px;"></div>
    <div style="height:10px;background:#ddd;border-radius:4px;width:70%;"></div>
  </div>
  <div style="padding:16px;background:#ffffff;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <div style="font-size:14px;font-weight:600;color:#0a0a0a;">Filter results</div>
      <span style="cursor:pointer;color:#888;font-size:16px;">×</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:8px;font-size:13px;color:#555;margin-bottom:14px;">
      <label style="display:flex;align-items:center;gap:8px;cursor:pointer;"><input type="checkbox" checked /> In stock only</label>
      <label style="display:flex;align-items:center;gap:8px;cursor:pointer;"><input type="checkbox" /> On sale</label>
    </div>
    <div style="display:flex;gap:8px;">
      <button class="prev-btn-outline" style="font-size:13px;padding:7px 14px;flex:1;">Reset</button>
      <button class="prev-btn" style="font-size:13px;padding:7px 14px;flex:1;">Apply</button>
    </div>
  </div>
</div>` },
    ],
  },
  {
    id: "skeleton",
    name: "Skeleton",
    category: "Feedback",
    desc: "A placeholder that mimics the shape and layout of content while it is loading.",
    what: `<p>Skeletons improve perceived performance by showing users the structural shape of forthcoming content before the actual data arrives. Instead of a blank screen or a generic spinner, the user sees a low-fidelity wireframe of the layout — rectangles for text lines, circles for avatars, blocks for images — animated with a shimmer or pulse effect. This sets accurate expectations about what is loading, prevents jarring layout shifts when content pops in, and signals that the page is working rather than broken.</p><p>Skeletons are most effective when the final layout is known and can be approximated accurately, making the transition from skeleton to real content feel seamless. The skeleton shapes should closely match the proportions of the real content — a skeleton card that is a different size than the loaded card creates a disorienting pop when content arrives. Animate the skeleton with a shimmer that moves in a consistent direction (left to right is conventional) to reinforce that loading is progressing. Always have a timeout plan: if data never loads, replace the skeleton with a meaningful error state rather than leaving indefinite skeletons on screen.</p>`,
    anatomy: [
      { title: "Shape blocks", desc: "Rectangles, circles, and lines that approximate the final layout." },
      { title: "Animation", desc: "A shimmer or pulse effect that communicates loading state." }
    ],
    use: [
      "Page initial loads with substantial content (feeds, dashboards)",
      "Image and card grids where layout is known in advance",
      "Table rows loading from an API",
      "User-generated content like comments and profiles",
      "Any load over 300ms where a spinner would feel too open-ended"
    ],
    avoid: [
      "For very fast operations (under 300ms) — the skeleton flash is distracting",
      "When the final layout is unknown — generic skeletons create confusion",
      "As a persistent state — if data never loads, show an error",
      "For small inline elements like buttons or badges",
      "When a spinner or empty state communicates loading more clearly"
    ],
    icons: ["loader-2", "image", "user", "file-text"],
    states: [
      { name: "Loading", desc: "The shimmer animation is running — content is being fetched." },
      { name: "Loaded", desc: "Data has arrived — the skeleton is replaced by the real content." },
      { name: "Error", desc: "Loading failed — the skeleton is replaced by an error state or empty state message." }
    ],
    prompt: `Create a Skeleton component with configurable width, height, and border radius to match the layout of the content it replaces. Apply a shimmer animation (gradient sweep) or pulse animation. Provide preset shapes: text line, circle (avatar), and rectangle (image/card). Use aria-hidden="true" and pair with a loading state indicator for screen readers. Use design tokens for base color and shimmer highlight.`,
    related: ["progress", "card", "avatar"],
    aka: [
      { system: "Ant Design", term: "Skeleton" },
      { system: "Fluent", term: "Skeleton" },
      { system: "Chakra UI", term: "Skeleton" },
      { system: "Shadcn/UI", term: "Skeleton" },
      { system: "Base Web", term: "Skeleton" },
      { system: "Bootstrap", term: "Placeholder" },
      { system: "Canvas", term: "Skeleton" },
          { system: "Atlassian", term: "Skeleton" },
          { system: "Momentum", term: "Skeleton" },
          { system: "Paste", term: "Skeleton Loader" },
          { system: "Polaris", term: "Skeleton page" },
          { system: "PatternFly", term: "Skeleton" },
          { system: "HeroUI", term: "Skeleton" },
          { system: "Flowbite", term: "Skeleton" },
          { system: "Cedar", term: "Skeleton" },
          { system: "Forma 36", term: "Skeleton" },
    ],
    previews: [
      { label: "Text", content: `<div style="display:flex;flex-direction:column;gap:8px;width:100%;max-width:360px;">
  <div class="skel skel-row">
    <div class="skel skel-circle" style="flex-shrink:0;"></div>
    <div style="flex:1;display:flex;flex-direction:column;gap:6px;">
      <div class="skel skel-line" style="width:60%;"></div>
      <div class="skel skel-line" style="width:40%;"></div>
    </div>
  </div>
  <div class="skel skel-line" style="width:100%;"></div>
  <div class="skel skel-line" style="width:85%;"></div>
  <div class="skel skel-line" style="width:70%;"></div>
</div>` },
      { label: "Card", content: `<div style="border:1px solid #eee;border-radius:8px;overflow:hidden;width:100%;max-width:280px;">
  <div class="skel" style="height:100px;border-radius:0;"></div>
  <div style="padding:14px;display:flex;flex-direction:column;gap:8px;">
    <div class="skel skel-line" style="width:70%;height:16px;border-radius:4px;"></div>
    <div class="skel skel-line" style="width:90%;"></div>
    <div class="skel skel-line" style="width:75%;"></div>
    <div class="skel skel-line" style="width:32%;height:28px;border-radius:6px;margin-top:4px;"></div>
  </div>
</div>` },
      { label: "Profile", content: `<div style="display:flex;align-items:flex-start;gap:14px;width:100%;max-width:360px;">
  <div class="skel skel-circle" style="width:48px;height:48px;flex-shrink:0;"></div>
  <div style="flex:1;display:flex;flex-direction:column;gap:8px;padding-top:4px;">
    <div class="skel skel-line" style="width:45%;height:16px;border-radius:4px;"></div>
    <div class="skel skel-line" style="width:30%;height:12px;"></div>
    <div class="skel skel-line" style="width:100%;margin-top:4px;"></div>
    <div class="skel skel-line" style="width:88%;"></div>
  </div>
</div>` },
    ],
  },
  {
    id: "switch",
    name: "Switch",
    category: "Form",
    desc: "A toggle control that represents a binary on/off or enabled/disabled state with an immediate effect.",
    what: `<p>Switches are for settings that take effect immediately upon toggling — no Save button or form submission required. The visual metaphor of a sliding pill on a track directly communicates "this is a live control, not a form field." This makes switches semantically and visually distinct from checkboxes, which represent options that are submitted as part of a form. When a switch is toggled, the change happens right now: dark mode turns on, notifications are silenced, the feature activates.</p><p>This immediacy is both the switch's main strength and its main constraint — it's unsuitable for situations where a change should be staged and confirmed before taking effect. When a switch controls a setting with potential side effects, consider adding a brief confirmation toast after toggling to reassure the user the change was applied. The label should always describe the feature being toggled, not the state ("Enable notifications" not "On"). If the switch controls something with severe consequences, consider using an Alert Dialog for confirmation instead of a direct toggle.</p>`,
    anatomy: [
      { title: "Label", desc: "Describes what is being toggled. Always present." },
      { title: "Track", desc: "The pill-shaped background that changes color when on." },
      { title: "Thumb", desc: "The circle that slides between on and off positions." },
      { title: "State description", desc: "Optional 'On/Off' text next to the control." }
    ],
    use: [
      "Immediately-applied settings (dark mode, notifications, visibility)",
      "Feature toggles in admin or settings panels",
      "Any binary preference with instant effect",
      "Enabling/disabling a specific feature or integration",
      "Simple yes/no configuration options"
    ],
    avoid: [
      "When the change requires confirmation before applying — use a checkbox + save",
      "For multi-value selections — use Radio or Select",
      "Form fields that are submitted together — use Checkbox instead",
      "Without a label — the state alone doesn't communicate what's being toggled",
      "When the on/off labels alone don't make the action clear"
    ],
    icons: ["toggle-left", "toggle-right", "power", "check"],
    states: [
      { name: "Off", desc: "The switch is in the inactive state — the thumb is on the left and the track is grey." },
      { name: "On", desc: "The switch is active — the thumb is on the right and the track is highlighted (e.g., white or green)." },
      { name: "Focused", desc: "The switch has keyboard focus — a visible focus ring surrounds the control." },
      { name: "Disabled off", desc: "The setting is off and cannot be changed — greyed out." },
      { name: "Disabled on", desc: "The setting is on and locked — the on state is visible but non-interactive." },
      { name: "Loading", desc: "The toggle action is being processed — a spinner may appear inside the thumb." }
    ],
    prompt: `Create a Switch component with off and on states, a sliding thumb animation, and a visible focus ring. Use role="switch" and aria-checked for accessibility. Always pair with a visible label — never label by state alone. Support a disabled state (both on and off) and an optional loading state with a spinner on the thumb. Use design tokens for track color (off/on), thumb color, and focus ring.`,
    related: ["checkbox", "toggle", "radio-group"],
    aka: [
      { system: "Material Design", term: "Switch" },
      { system: "Fluent", term: "Switch" },
      { system: "Ant Design", term: "Switch" },
      { system: "Radix UI", term: "Switch" },
      { system: "Shadcn/UI", term: "Switch" },
      { system: "Bootstrap", term: "Switch" },
      { system: "Chakra UI", term: "Switch" },
      { system: "Canvas", term: "Switch" },
      { system: "Carbon", term: "Toggle" },
          { system: "Atlassian", term: "Toggle" },
          { system: "Dell", term: "Switch" },
          { system: "Momentum", term: "Toggle" },
          { system: "Clarity", term: "Toggle Switch" },
          { system: "Evergreen", term: "Switch" },
          { system: "Paste", term: "Switch" },
          { system: "Lightning", term: "Checkbox Toggle" },
          { system: "Spectrum", term: "Switch" },
          { system: "PatternFly", term: "Switch" },
          { system: "HeroUI", term: "Switch" },
          { system: "Visa", term: "Switch" },
          { system: "eBay", term: "Switch" },
          { system: "Flowbite", term: "Toggle" },
          { system: "Cedar", term: "Switch" },
          { system: "Forma 36", term: "Switch" },
          { system: "Aurora", term: "Switch" },
          { system: "NewsKit", term: "Switch" },
    ],
    previews: [
      { label: "Default", content: `<div class="prev-form-col">
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px;color:#333;">
    <span>Dark mode</span>
    <div class="switch on"></div>
  </div>
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px;color:#333;">
    <span>Email notifications</span>
    <div class="switch on"></div>
  </div>
  <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;font-size:14px;color:#333;">
    <span>SMS alerts</span>
    <div class="switch"></div>
  </div>
</div>` },
      { label: "Sizes", content: `<div style="display:flex;flex-direction:column;gap:14px;">
  <div style="display:flex;align-items:center;gap:12px;font-size:13px;color:#555;">
    <div style="width:28px;height:16px;border-radius:9999px;background:#0a0a0a;position:relative;"><div style="position:absolute;right:2px;top:2px;width:12px;height:12px;border-radius:50%;background:#fff;"></div></div>
    Small
  </div>
  <div style="display:flex;align-items:center;gap:12px;font-size:14px;color:#333;">
    <div class="switch on"></div>
    Medium (default)
  </div>
  <div style="display:flex;align-items:center;gap:12px;font-size:15px;color:#333;">
    <div style="width:52px;height:28px;border-radius:9999px;background:#0a0a0a;position:relative;"><div style="position:absolute;right:3px;top:3px;width:22px;height:22px;border-radius:50%;background:#fff;"></div></div>
    Large
  </div>
</div>` },
      { label: "States", content: `<div style="display:flex;flex-direction:column;gap:10px;width:100%;max-width:280px;">
  <div style="display:flex;align-items:center;justify-content:space-between;font-size:14px;color:#333;"><span>On</span><div class="switch on"></div></div>
  <div style="display:flex;align-items:center;justify-content:space-between;font-size:14px;color:#333;"><span>Off</span><div class="switch"></div></div>
  <div style="display:flex;align-items:center;justify-content:space-between;font-size:14px;color:#aaa;"><span>Disabled on</span><div class="switch on" style="opacity:0.4;cursor:not-allowed;"></div></div>
  <div style="display:flex;align-items:center;justify-content:space-between;font-size:14px;color:#aaa;"><span>Disabled off</span><div class="switch" style="opacity:0.4;cursor:not-allowed;"></div></div>
</div>` },
    ],
  },
  {
    id: "table",
    name: "Table",
    category: "Data Display",
    desc: "A structured grid for displaying tabular data in rows and columns, with support for sorting, selection, and actions.",
    what: `<p>Tables organize data in a scannable two-dimensional structure of rows and columns, making it easy to compare values across records and identify patterns. They're the right choice when the relationship between values across columns is meaningful — when a user needs to compare several attributes of multiple items at once, sort records by a particular field, or select a subset of rows for a bulk action. Each row represents one entity; each column represents one attribute of that entity.</p><p>Tables can be enhanced with sortable column headers, row selection checkboxes, per-row action menus, inline editing, expandable rows for nested data, and pagination for large datasets. Column widths should be appropriate for their content — a date column doesn't need the same width as a description column. Sticky header rows allow users to scroll long tables while keeping column labels in view. On mobile, wide tables with many columns need special handling: horizontal scroll, column hiding, or a reformatted card-list view may be necessary to remain usable.</p>`,
    anatomy: [
      { title: "Filters", desc: "Controls above or inline that narrow visible rows by one or more criteria." },
      { title: "Header row", desc: "Column labels — often sortable by clicking." },
      { title: "Sorting", desc: "Column header click toggles ascending/descending sort on that field." },
      { title: "Fixed columns", desc: "Columns pinned to the left or right edge that stay visible during horizontal scroll." },
      { title: "Checkboxes", desc: "A selection column (usually first) that allows rows to be individually or collectively selected for bulk actions." },
      { title: "Data rows", desc: "One row per record. Can be selectable, expandable, or hoverable." },
      { title: "Cell", desc: "The intersection of row and column, containing a value." },
      { title: "Actions column", desc: "Optional column with per-row action buttons or menus." },
      { title: "Footer", desc: "Pagination controls or aggregate values." },
      { title: "Pagination", desc: "Previous/next and page number controls for navigating large datasets." }
    ],
    use: [
      "Administration panels with lists of users, orders, or records",
      "Data comparison (pricing plans, feature matrices)",
      "Logs, transactions, or audit trails",
      "Any dataset where column relationships matter",
      "Bulk operations with multi-row selection"
    ],
    avoid: [
      "Simple lists where only one column is meaningful — use a List",
      "Deeply hierarchical data — use a Tree or expandable accordion",
      "Mobile-first layouts where columns collapse awkwardly",
      "Displaying only 1–3 rows — a card list is more scannable",
      "Very wide tables without horizontal scroll handling"
    ],
    icons: ["table-2", "columns-3", "filter", "arrow-up-down", "search"],
    states: [
      { name: "Default", desc: "Rows are displayed at rest with standard background and borders." },
      { name: "Row hover", desc: "The pointer is over a row — a subtle background highlight aids scanning." },
      { name: "Row selected", desc: "A row's checkbox is checked — it is highlighted for bulk action." },
      { name: "Sorted", desc: "A column header has a sort indicator (arrow) showing the active sort direction." },
      { name: "Loading", desc: "Skeleton rows are shown while data is being fetched." },
      { name: "Empty", desc: "No rows match the current filter or the dataset is empty — an empty state is shown." }
    ],
    prompt: `Create a Table component with sortable column headers (click to toggle asc/desc with aria-sort), row hover highlights, row selection via checkboxes, and skeleton loading rows. Support an empty state when no data exists. Use proper semantic HTML (thead, tbody, th with scope) for accessibility. Include pagination below the table. Use design tokens for header background, row hover, selected row, and border colors.`,
    related: ["pagination", "badge", "checkbox"],
    aka: [
      { system: "Material Design", term: "Lists" },
      { system: "Ant Design", term: "Table" },
      { system: "Chakra UI", term: "Table" },
      { system: "Bootstrap", term: "Table" },
      { system: "Base Web", term: "DataTable" },
      { system: "Shadcn/UI", term: "Table" },
      { system: "Fluent", term: "List" },
      { system: "Canvas", term: "Table" },
      { system: "Carbon", term: "Data Table" },
          { system: "Atlassian", term: "Dynamic table" },
          { system: "Dell", term: "Table" },
          { system: "USWDS", term: "Table" },
          { system: "Clarity", term: "Table" },
          { system: "Evergreen", term: "Table" },
          { system: "Paste", term: "Table" },
          { system: "GOV.UK", term: "Table" },
          { system: "Lightning", term: "Data Table" },
          { system: "Spectrum", term: "Table" },
          { system: "Polaris", term: "Data table" },
          { system: "PatternFly", term: "Table" },
          { system: "EUI", term: "Table" },
          { system: "HeroUI", term: "Table" },
          { system: "Visa", term: "Table" },
          { system: "eBay", term: "Table" },
          { system: "Flowbite", term: "Tables" },
          { system: "Cedar", term: "Table" },
          { system: "Forma 36", term: "Table" },
          { system: "Aurora", term: "Table" },
          { system: "Instructure UI", term: "Table" },
          { system: "NewsKit", term: "Structured List" },
    ],
    previews: [
      { label: "Default", content: `<div class="prev-table">
  <table class="data-table">
    <thead><tr><th>Name</th><th>Role</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>Alice Lee</td><td>Designer</td><td><span class="badge badge-success">Active</span></td></tr>
      <tr><td>Bob Chen</td><td>Engineer</td><td><span class="badge badge-success">Active</span></td></tr>
      <tr><td>Carol Day</td><td>PM</td><td><span class="badge badge-warn">Invited</span></td></tr>
    </tbody>
  </table>
</div>` },
      { label: "With selection", content: `<div class="prev-table">
  <table class="data-table">
    <thead>
      <tr>
        <th style="width:32px;"><input type="checkbox" style="cursor:pointer;" /></th>
        <th>Name</th><th>Role</th><th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background:#f0f9ff;">
        <td><input type="checkbox" checked style="cursor:pointer;" /></td>
        <td>Alice Lee</td><td>Designer</td><td><span class="badge badge-success">Active</span></td>
      </tr>
      <tr>
        <td><input type="checkbox" style="cursor:pointer;" /></td>
        <td>Bob Chen</td><td>Engineer</td><td><span class="badge badge-success">Active</span></td>
      </tr>
      <tr>
        <td><input type="checkbox" style="cursor:pointer;" /></td>
        <td>Carol Day</td><td>PM</td><td><span class="badge badge-warn">Invited</span></td>
      </tr>
    </tbody>
  </table>
</div>` },
      { label: "Striped", content: `<div class="prev-table">
  <table class="data-table">
    <thead><tr><th>Name</th><th>Role</th><th>Joined</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>Alice Lee</td><td>Designer</td><td>Jan 2023</td><td><span class="badge badge-success">Active</span></td></tr>
      <tr style="background:#f9fafb;"><td>Bob Chen</td><td>Engineer</td><td>Mar 2023</td><td><span class="badge badge-success">Active</span></td></tr>
      <tr><td>Carol Day</td><td>PM</td><td>Jul 2023</td><td><span class="badge badge-warn">Invited</span></td></tr>
      <tr style="background:#f9fafb;"><td>Dave Kim</td><td>Designer</td><td>Nov 2023</td><td><span class="badge badge-danger">Inactive</span></td></tr>
    </tbody>
  </table>
</div>` },
    ],
  },
  {
    id: "tabs",
    name: "Tabs",
    category: "Navigation",
    desc: "A set of layered content sections, with only one section visible at a time, navigated by clicking tab triggers.",
    what: `<p>Tabs allow switching between distinct content views that share the same region of the screen. Unlike accordions, which expand and collapse in a vertical stack with multiple panels potentially open at once, Tabs show only one panel at a time and present all tab labels simultaneously in a horizontal row. This persistent label visibility is key: users can instantly see all available views and understand the full scope of the component.</p><p>Tabs are best used for parallel categories of content — views that are alternatives to each other, not steps in a sequence. They imply that each panel is at the same level of importance and navigational depth. Tab labels should be short (one to three words), parallel in structure, and clearly distinct from one another. When tabs are used for primary page-level navigation (not just within a component), each tab should update the URL to enable direct linking, back button support, and browser history navigation that matches user expectations.</p>`,
    anatomy: [
      { title: "Tab list", desc: "The row of tab triggers at the top of the component." },
      { title: "Tab trigger", desc: "Each clickable label that activates its panel." },
      { title: "Active indicator", desc: "Underline, background, or other visual showing the current tab." },
      { title: "Tab panel", desc: "The content area shown when a tab is active." }
    ],
    use: [
      "Switching between related views (Overview / Analytics / Settings)",
      "Product pages with multiple content types (Description / Reviews / Specs)",
      "Profile pages with different data sections",
      "Code editors (Edit / Preview / Split)",
      "Dashboard sections where only one view is needed at a time"
    ],
    avoid: [
      "When users need to compare content across tabs — the toggling defeats comparison",
      "More than 5–7 tabs — navigation becomes unwieldy; consider a sidebar",
      "Sequential steps in a workflow — use a Stepper instead",
      "Content that's independent rather than parallel alternatives",
      "Nesting tabs inside tabs — deeply confusing spatial model"
    ],
    icons: ["layout-panel-top", "columns-2", "chevron-right"],
    states: [
      { name: "Active", desc: "The selected tab — its panel is visible and the trigger has an active indicator." },
      { name: "Inactive", desc: "Non-selected tabs — their panels are hidden." },
      { name: "Hover", desc: "The pointer is over a tab trigger — a subtle color shift signals interactivity." },
      { name: "Focused", desc: "A tab trigger has keyboard focus — a visible focus ring is shown." },
      { name: "Disabled", desc: "A tab is visible but cannot be selected — shown in a muted style." }
    ],
    prompt: `Create a Tabs component using role="tablist", role="tab", and role="tabpanel" with aria-selected and aria-controls wiring. Support arrow key navigation between tabs (left/right) and Home/End keys. Include active, inactive, focused, hover, and disabled states. Support line (underline indicator) and pill (filled background) visual variants. Use design tokens for active indicator color, hover color, and panel spacing.`,
    related: ["accordion", "collapsible", "separator"],
    aka: [
      { system: "Material Design", term: "Tabs" },
      { system: "Fluent", term: "Tablist" },
      { system: "Ant Design", term: "Tabs" },
      { system: "Radix UI", term: "Tabs" },
      { system: "Shadcn/UI", term: "Tabs" },
      { system: "Bootstrap", term: "Nav Tabs" },
      { system: "Chakra UI", term: "Tabs" },
      { system: "Canvas", term: "Tabs" },
      { system: "Carbon", term: "Tabs" },
          { system: "Atlassian", term: "Tabs" },
          { system: "Dell", term: "Tabs" },
          { system: "Momentum", term: "Tab" },
          { system: "Clarity", term: "Tabs" },
          { system: "Evergreen", term: "Tab" },
          { system: "Paste", term: "Tabs" },
          { system: "GOV.UK", term: "Tabs" },
          { system: "Lightning", term: "Tabs" },
          { system: "Spectrum", term: "Tabs" },
          { system: "Polaris", term: "Tabs" },
          { system: "PatternFly", term: "Tabs" },
          { system: "EUI", term: "Tabs" },
          { system: "Ariakit", term: "Tab" },
          { system: "HeroUI", term: "Tabs" },
          { system: "Visa", term: "Tabs" },
          { system: "eBay", term: "Tab" },
          { system: "Flowbite", term: "Tabs" },
          { system: "Cedar", term: "Tab" },
          { system: "Forma 36", term: "Tabs" },
          { system: "Aurora", term: "Navigation" },
          { system: "Instructure UI", term: "Tabs" },
          { system: "NewsKit", term: "Tabs" },
    ],
    previews: [
      { label: "Horizontal", content: `<div class="prev-tabs">
  <div class="tabs-list" id="demo-tabs-h">
    <div class="tab active" onclick="setTab(this,'tabh1')">Overview</div>
    <div class="tab" onclick="setTab(this,'tabh2')">Analytics</div>
    <div class="tab" onclick="setTab(this,'tabh3')">Settings</div>
  </div>
  <div class="tab-content" id="tabh1">High-level summary of your project metrics and recent activity.</div>
  <div class="tab-content" id="tabh2" style="display:none">Detailed charts and usage statistics for the last 30 days.</div>
  <div class="tab-content" id="tabh3" style="display:none">Configure notifications, integrations, and team access.</div>
</div>` },
      { label: "Vertical", content: `<div style="display:flex;gap:0;width:100%;max-width:420px;border:1px solid #ddd;border-radius:8px;overflow:hidden;min-height:140px;">
  <div style="display:flex;flex-direction:column;border-right:1px solid #ddd;background:#f9fafb;min-width:100px;">
    <div style="padding:10px 14px;font-size:13px;font-weight:600;color:#0a0a0a;background:#ffffff;border-right:2px solid #0a0a0a;cursor:pointer;">Account</div>
    <div style="padding:10px 14px;font-size:13px;color:#888;cursor:pointer;">Billing</div>
    <div style="padding:10px 14px;font-size:13px;color:#888;cursor:pointer;">Security</div>
    <div style="padding:10px 14px;font-size:13px;color:#888;cursor:pointer;">Team</div>
  </div>
  <div style="padding:16px;flex:1;font-size:13px;color:#555;">Manage your account settings, display name, and profile details.</div>
</div>` },
    ],
  },
  {
    id: "textarea",
    name: "Textarea",
    category: "Form",
    desc: "A multi-line text input field for capturing longer-form written content from users.",
    what: `<p>Textarea is the multi-line equivalent of a single-line Input field. It allows users to write longer free-form text — notes, comments, feedback, bios, descriptions, or messages — that doesn't fit within a single line. The field can be resized vertically by the user (controlled by the resize CSS property), or it can auto-expand as content grows. The initial rendered height is a strong signal about the expected length of input: a two-line textarea implies a sentence, while an eight-line textarea implies several paragraphs.</p><p>Character count indicators are commonly shown below the field when there's a maximum length, helping users manage their input before hitting the limit. Show the count as "characters remaining" rather than "characters used" so users understand how much room they have left, not how much they've consumed. Auto-expanding textareas improve usability by eliminating internal scroll within the field, but set a sensible max-height to prevent runaway layout growth in pathological inputs. Like all form inputs, textarea requires a visible label, hint text for format expectations, and proper error message handling for validation failures.</p>`,
    anatomy: [
      { title: "Label", desc: "Describes what text the user should enter." },
      { title: "Textarea field", desc: "Multi-line, resizable (or fixed) text box." },
      { title: "Character count", desc: "Optional counter showing remaining characters." },
      { title: "Resize handle", desc: "Browser-provided, sometimes customized or disabled." }
    ],
    use: [
      "Comments and reply boxes",
      "Bio, description, or 'about me' fields",
      "Feedback forms and bug reports",
      "Message composition in chat or email-like interfaces",
      "Code input where a full code editor is overkill"
    ],
    avoid: [
      "For single-line content — use an Input instead",
      "When rich text formatting is needed — use a rich text editor",
      "Auto-sizing textarea to very tall heights without a max — disrupts layout",
      "For very structured data like addresses — use separate fields",
      "Without indicating expected length — height should hint at what you expect"
    ],
    icons: ["align-left", "edit-3", "message-square", "text-cursor-input"],
    states: [
      { name: "Default", desc: "The field is empty and ready for input." },
      { name: "Focused", desc: "The field is active — a highlighted border or ring signals it is ready for input." },
      { name: "Filled", desc: "The user has entered text — content is visible and the field may have auto-expanded." },
      { name: "Disabled", desc: "The field is non-interactive — greyed out, text cannot be entered." },
      { name: "Error", desc: "Validation has failed — the border turns red and an error message appears below." },
      { name: "At limit", desc: "The character count is at or near the maximum — the counter may change color to warn the user." }
    ],
    prompt: `Create a Textarea component with default, focused, filled, disabled, error, and at-limit states. Support an optional character counter that changes color as it approaches and reaches the maximum. Support auto-resize (growing with content) and a fixed height variant. Always associate a visible label. Use design tokens for border, focus ring, error color, and character counter warning color.`,
    related: ["input", "label"],
    aka: [
      { system: "Material Design", term: "Text Fields" },
      { system: "Fluent", term: "Textarea" },
      { system: "Ant Design", term: "Input.TextArea" },
      { system: "Chakra UI", term: "Textarea" },
      { system: "Bootstrap", term: "Form Control (textarea)" },
      { system: "Shadcn/UI", term: "Textarea" },
      { system: "Canvas", term: "Text Area" },
      { system: "Carbon", term: "Text Input" },
          { system: "Atlassian", term: "Text area" },
          { system: "Dell", term: "Text area" },
          { system: "Momentum", term: "Textarea" },
          { system: "Clarity", term: "Textarea" },
          { system: "Evergreen", term: "Textarea" },
          { system: "Paste", term: "Textarea" },
          { system: "GOV.UK", term: "Textarea" },
          { system: "Lightning", term: "Textarea" },
          { system: "Spectrum", term: "Textarea" },
          { system: "PatternFly", term: "Text area" },
          { system: "HeroUI", term: "TextArea" },
          { system: "eBay", term: "Text area" },
          { system: "Flowbite", term: "Textarea" },
          { system: "Forma 36", term: "Textarea" },
          { system: "NewsKit", term: "Text Area" },
    ],
    previews: [
      { label: "Default", content: `<div style="width:100%;max-width:380px;">
  <label class="prev-label">Description</label>
  <textarea class="input-field" style="width:100%;box-sizing:border-box;height:80px;resize:vertical;font-family:inherit;line-height:1.5;" placeholder="Describe your issue in detail…"></textarea>
  <span style="font-size:12px;color:#888;display:block;margin-top:4px;">0 / 500 characters</span>
</div>` },
      { label: "States", content: `<div style="display:flex;flex-direction:column;gap:12px;width:100%;max-width:380px;">
  <div>
    <label class="prev-label">Default</label>
    <textarea class="input-field" style="width:100%;box-sizing:border-box;height:60px;resize:none;font-family:inherit;line-height:1.5;" placeholder="Enter text…"></textarea>
  </div>
  <div>
    <label class="prev-label">Filled</label>
    <textarea class="input-field" style="width:100%;box-sizing:border-box;height:60px;resize:none;font-family:inherit;line-height:1.5;border-color:#0a0a0a;">This textarea has content. The user has filled in some text that wraps onto multiple lines.</textarea>
  </div>
  <div>
    <label style="font-size:12px;font-weight:500;color:#ef4444;display:block;margin-bottom:5px;">Error</label>
    <textarea class="input-field" style="width:100%;box-sizing:border-box;height:60px;resize:none;font-family:inherit;line-height:1.5;border-color:#ef4444;" placeholder="Required…"></textarea>
    <span style="font-size:12px;color:#ef4444;display:block;margin-top:4px;">This field is required.</span>
  </div>
  <div>
    <label class="prev-label-muted">Disabled</label>
    <textarea class="input-field" style="width:100%;box-sizing:border-box;height:60px;resize:none;font-family:inherit;line-height:1.5;opacity:0.5;cursor:not-allowed;background:#f5f5f5;" disabled>Read-only content that cannot be edited.</textarea>
  </div>
</div>` },
    ],
  },
  {
    id: "toast",
    name: "Toast",
    category: "Feedback",
    desc: "A brief, auto-dismissing notification that appears to confirm an action or communicate a system event.",
    what: `<p>Toasts are ephemeral, auto-dismissing notifications. They appear briefly — typically for 3 to 5 seconds — in a fixed corner of the viewport (usually bottom-right or top-right), then fade out without requiring any user interaction. They confirm that a background action completed (file saved, item deleted, message sent) or report a non-blocking error or warning. Because they vanish automatically, they're suitable only for non-critical information: feedback the user should know about, but doesn't need to act on.</p><p>When an action is reversible, toasts often include an Undo button that remains active for the duration of the toast's visible period. Toasts should pause their auto-dismiss timer when the user hovers over them, giving them time to read the message or act on the Undo. Multiple toasts should stack rather than replace each other, with a sensible maximum (3 at a time) to prevent them from overwhelming the screen. The duration should be long enough for a slow reader to finish the message — "accessibility-safe" toast duration for a short message is typically at least 4 seconds, and longer for messages with more text.</p>`,
    anatomy: [
      { title: "Icon", desc: "Reinforces the type: success, error, info, warning." },
      { title: "Title", desc: "A one-line summary of what happened." },
      { title: "Close button", desc: "Manual dismiss." },
      { title: "Description", desc: "Optional detail or next step." },
      { title: "Action", desc: "Optional undo or view link." }
    ],
    use: [
      "Confirming background saves or auto-saves",
      "Action results (item deleted, message sent, file uploaded)",
      "Non-critical error notifications that don't block the workflow",
      "Undo confirmations with a 5-second undo action",
      "System events outside of the user's current focus"
    ],
    avoid: [
      "Critical errors requiring user acknowledgment — use an Alert or Dialog",
      "Content the user needs to read in detail — it disappears too fast",
      "Stacking more than 3 toasts simultaneously — becomes noisy",
      "Toasting every single action — reserve for meaningful feedback",
      "Permanent notifications — toasts are for transient messages"
    ],
    icons: ["check-circle", "alert-triangle", "info", "x", "bell"],
    states: [
      { name: "Entering", desc: "The toast is animating in from the corner of the viewport." },
      { name: "Visible", desc: "The toast is fully shown and the auto-dismiss timer is running." },
      { name: "Hovered / Paused", desc: "The pointer is over the toast — the dismiss timer is paused." },
      { name: "Exiting", desc: "The timer has expired or the user dismissed it — the toast is animating out." },
      { name: "Success", desc: "A green icon and tone confirm a positive outcome." },
      { name: "Error", desc: "A red icon indicates a failure or non-critical error." }
    ],
    prompt: `Create a Toast notification system with a toaster container fixed at a viewport corner, supporting success, error, warning, and info variants. Auto-dismiss after a configurable duration (default 5s) and pause the timer on hover. Support an optional action button (e.g., Undo) and a manual close button. Use role="status" or role="alert" based on urgency. Use design tokens for variant colors, shadow, and slide/fade animation.`,
    related: ["alert", "dialog", "progress"],
    aka: [
      { system: "Material Design", term: "Snackbar" },
      { system: "Ant Design", term: "Message" },
      { system: "Fluent", term: "Toast" },
      { system: "Chakra UI", term: "Toast" },
      { system: "Radix UI", term: "Toast" },
      { system: "Shadcn/UI", term: "Toast" },
      { system: "Bootstrap", term: "Toast" },
      { system: "Canvas", term: "Toast" },
      { system: "Carbon", term: "Notification" },
          { system: "Atlassian", term: "Flag" },
          { system: "Dell", term: "Notification" },
          { system: "USWDS", term: "Site alert" },
          { system: "Momentum", term: "Toast" },
          { system: "Evergreen", term: "Toaster" },
          { system: "Paste", term: "Toast" },
          { system: "GOV.UK", term: "Notification banner" },
          { system: "Lightning", term: "Toast" },
          { system: "Spectrum", term: "Toast" },
          { system: "Polaris", term: "Toast" },
          { system: "PatternFly", term: "Alert" },
          { system: "EUI", term: "Toast" },
          { system: "HeroUI", term: "Toast" },
          { system: "Visa", term: "Flag" },
          { system: "eBay", term: "Snackbar" },
          { system: "Flowbite", term: "Toast" },
          { system: "Cedar", term: "Toast" },
          { system: "Forma 36", term: "Notification" },
          { system: "NewsKit", term: "Toast" },
    ],
    previews: [
      { label: "Info", content: `<div style="display:flex;align-items:flex-start;gap:10px;padding:12px 16px;background:#ffffff;border:1px solid #bfdbfe;border-radius:10px;max-width:320px;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
  <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='#1d4ed8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='flex-shrink:0;margin-top:1px;'><circle cx='12' cy='12' r='10'/><path d='M12 16v-4M12 8h.01'/></svg>
  <div style="flex:1;">
    <div class="prev-item-title">Update available</div>
    <div class="prev-text-sm">A new version is ready to install.</div>
  </div>
  <span class="prev-close">×</span>
</div>` },
      { label: "Success", content: `<div style="display:flex;align-items:flex-start;gap:10px;padding:12px 16px;background:#ffffff;border:1px solid #bbf7d0;border-radius:10px;max-width:320px;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
  <div style="width:16px;height:16px;border-radius:50%;background:#166534;display:flex;align-items:center;justify-content:center;font-size:10px;color:#bbf7d0;font-weight:700;flex-shrink:0;margin-top:1px;">✓</div>
  <div style="flex:1;">
    <div class="prev-item-title">Changes saved</div>
    <div class="prev-text-sm">Your profile has been updated.</div>
  </div>
  <span class="prev-close">×</span>
</div>` },
      { label: "Warning", content: `<div style="display:flex;align-items:flex-start;gap:10px;padding:12px 16px;background:#ffffff;border:1px solid #fde68a;border-radius:10px;max-width:320px;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
  <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='#b45309' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' style='flex-shrink:0;margin-top:1px;'><path d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/><path d='M12 9v4'/><path d='M12 17h.01'/></svg>
  <div style="flex:1;">
    <div class="prev-item-title">Low disk space</div>
    <div class="prev-text-sm">Only 2GB remaining on your storage.</div>
  </div>
  <span class="prev-close">×</span>
</div>` },
      { label: "Error", content: `<div style="display:flex;align-items:flex-start;gap:10px;padding:12px 16px;background:#ffffff;border:1px solid #fecaca;border-radius:10px;max-width:320px;box-shadow:0 4px 12px rgba(0,0,0,0.08);">
  <div style="width:16px;height:16px;border-radius:50%;background:#7f1d1d;display:flex;align-items:center;justify-content:center;font-size:10px;color:#fecaca;font-weight:700;flex-shrink:0;margin-top:1px;">✕</div>
  <div style="flex:1;">
    <div class="prev-item-title">Upload failed</div>
    <div class="prev-text-sm">File exceeds the 10MB limit.</div>
  </div>
  <span class="prev-close">×</span>
</div>` },
    ],
  },
  {
    id: "toggle",
    name: "Toggle",
    category: "Action",
    desc: "A two-state button that switches between active and inactive when pressed, visually reflecting its current state.",
    what: `<p>Toggle buttons are stateful buttons that persist their pressed or active state between clicks. Unlike standard buttons, which trigger a one-time action and return to their default appearance, a toggle button remains visually "on" until clicked again. The active state is communicated through a clear visual change: a filled background, a contrasting border, or a distinct color. They're commonly used in toolbars and control bars for formatting options like Bold and Italic (where the button reflects the current text style).</p><p>Toggle buttons are also used for view mode selectors, filter chips, and any interface element that represents a binary on/off property that the user can observe and control independently. The aria-pressed attribute is the semantic mechanism for communicating pressed state to assistive technology — it must update in sync with the visual state. When multiple toggles are logically related (like formatting options), consider grouping them into a Toggle Group. The inactive state should be clearly distinguishable from the active state, but not so similar to a standard button that users can't tell whether they're looking at a toggle or a regular action button.</p>`,
    anatomy: [
      { title: "Button", desc: "The pressable element — styled differently in active and inactive states." },
      { title: "Label or icon", desc: "Communicates what is being toggled." },
      { title: "Active state", desc: "Clear visual difference (background, border, color) when on." }
    ],
    use: [
      "Text formatting toolbars (Bold, Italic, Underline)",
      "View mode switchers (Grid / List)",
      "Filter chips that include/exclude a category",
      "Map layers or overlay visibility",
      "Mute/unmute and show/hide controls in media players"
    ],
    avoid: [
      "When the action isn't stateful — use a regular Button",
      "For settings outside an active UI context — use a Switch",
      "Without clear active/inactive visual differentiation",
      "More than 5–6 in a group — consider a different selection model",
      "For binary choices in forms — use a Switch or Checkbox"
    ],
    icons: ["toggle-left", "toggle-right", "bold", "italic", "underline"],
    states: [
      { name: "Inactive", desc: "The default state — the button is not pressed; background is transparent or minimal." },
      { name: "Active / Pressed", desc: "The button is on — a filled background or distinct border signals the active state." },
      { name: "Hover (inactive)", desc: "The pointer is over an inactive toggle — a subtle hover effect signals interactivity." },
      { name: "Hover (active)", desc: "The pointer is over an active toggle — a hover effect suggests it can be deactivated." },
      { name: "Focused", desc: "The toggle has keyboard focus — a visible focus ring is shown." },
      { name: "Disabled", desc: "The toggle is non-interactive — its state is visible but cannot be changed." }
    ],
    prompt: `Create a Toggle button component that maintains pressed/unpressed state with aria-pressed updating on each click. Provide clearly distinct active and inactive visual styles (background fill, border, color contrast). Support icon-only, label-only, and icon+label variants. Include focused and disabled states. Use design tokens for active background, active text, hover overlay, and focus ring.`,
    related: ["switch", "button", "toggle-group"],
    aka: [
      { system: "Radix UI", term: "Toggle" },
      { system: "Shadcn/UI", term: "Toggle" },
      { system: "Ant Design", term: "Button (toggle)" },
      { system: "Canvas", term: "Segmented Control" },
      { system: "Carbon", term: "Content Switcher" },
          { system: "Atlassian", term: "Toggle" },
          { system: "Dell", term: "Switch" },
          { system: "Momentum", term: "Toggle" },
          { system: "Clarity", term: "Toggle Switch" },
          { system: "Evergreen", term: "Switch" },
          { system: "Paste", term: "Switch" },
          { system: "Lightning", term: "Checkbox Toggle" },
          { system: "Spectrum", term: "Switch" },
          { system: "PatternFly", term: "Switch" },
          { system: "HeroUI", term: "Switch" },
          { system: "Visa", term: "Switch" },
          { system: "eBay", term: "Switch" },
          { system: "Flowbite", term: "Toggle" },
          { system: "Cedar", term: "Switch" },
          { system: "Forma 36", term: "Switch" },
          { system: "Aurora", term: "Switch" },
          { system: "NewsKit", term: "Switch" },
    ],
    previews: [
      { label: "Default", content: `<div class="prev-panel">
        <div>
          <div class="prev-section-label">Click to toggle</div>
          <div style="display:flex;gap:6px;">
            <button data-toggle-btn data-active="false" style="width:36px;height:36px;border-radius:7px;border:1px solid #e2e2e2;background:transparent;color:#555;font-size:13px;font-weight:700;cursor:pointer;">B</button>
            <button data-toggle-btn data-active="false" style="width:36px;height:36px;border-radius:7px;border:1px solid #e2e2e2;background:transparent;color:#555;font-size:13px;font-style:italic;font-weight:600;cursor:pointer;">I</button>
            <button data-toggle-btn data-active="false" style="width:36px;height:36px;border-radius:7px;border:1px solid #e2e2e2;background:transparent;color:#555;font-size:13px;text-decoration:underline;cursor:pointer;">U</button>
          </div>
        </div>
        <div>
          <div class="prev-section-label">With icons</div>
          <div style="display:flex;gap:6px;align-items:center;">
            <button data-toggle-btn data-active="false" style="display:flex;align-items:center;gap:6px;padding:0 12px;height:36px;border-radius:7px;border:1px solid #e2e2e2;background:transparent;color:#555;font-size:13px;cursor:pointer;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              List
            </button>
            <button data-toggle-btn data-active="false" style="display:flex;align-items:center;gap:6px;padding:0 12px;height:36px;border-radius:7px;border:1px solid #e2e2e2;background:transparent;color:#555;font-size:13px;cursor:pointer;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              Grid
            </button>
          </div>
        </div>
      </div>` },
      { label: "Pressed", content: `<div class="prev-panel">
        <div>
          <div class="prev-section-label">Active / Pressed</div>
          <div style="display:flex;gap:6px;">
            <button style="width:36px;height:36px;border-radius:7px;border:1px solid #0a0a0a;background:#0a0a0a;color:#ffffff;font-size:13px;font-weight:700;cursor:pointer;">B</button>
            <button style="width:36px;height:36px;border-radius:7px;border:1px solid #0a0a0a;background:#0a0a0a;color:#ffffff;font-size:13px;font-style:italic;font-weight:600;cursor:pointer;">I</button>
            <button style="width:36px;height:36px;border-radius:7px;border:1px solid #e2e2e2;background:transparent;color:#aaa;font-size:13px;text-decoration:underline;cursor:pointer;">U</button>
            <button style="width:36px;height:36px;border-radius:7px;border:1px solid #e2e2e2;background:transparent;color:#aaa;font-size:13px;text-decoration:line-through;cursor:pointer;">S</button>
          </div>
        </div>
        <div>
          <div class="prev-section-label">Disabled</div>
          <div style="display:flex;gap:6px;opacity:0.4;">
            <button style="width:36px;height:36px;border-radius:7px;border:1px solid #0a0a0a;background:#0a0a0a;color:#ffffff;font-size:13px;font-weight:700;cursor:not-allowed;" disabled>B</button>
            <button style="width:36px;height:36px;border-radius:7px;border:1px solid #e2e2e2;background:transparent;color:#555;font-size:13px;font-style:italic;font-weight:600;cursor:not-allowed;" disabled>I</button>
          </div>
        </div>
      </div>` },
      { label: "Group", content: `<div class="prev-panel">
        <div>
          <div class="prev-section-label">Formatting group</div>
          <div style="display:flex;gap:4px;padding:4px;background:#f5f5f5;border-radius:10px;">
            <button style="width:34px;height:34px;border-radius:7px;border:none;background:#0a0a0a;color:#ffffff;font-size:13px;font-weight:700;cursor:pointer;">B</button>
            <button style="width:34px;height:34px;border-radius:7px;border:none;background:#0a0a0a;color:#ffffff;font-size:13px;font-style:italic;font-weight:600;cursor:pointer;">I</button>
            <button style="width:34px;height:34px;border-radius:7px;border:none;background:transparent;color:#888;font-size:13px;text-decoration:underline;cursor:pointer;">U</button>
            <button style="width:34px;height:34px;border-radius:7px;border:none;background:transparent;color:#888;font-size:13px;text-decoration:line-through;cursor:pointer;">S</button>
          </div>
        </div>
        <div>
          <div class="prev-section-label">View toggle</div>
          <div style="display:flex;gap:4px;padding:4px;background:#f5f5f5;border-radius:10px;">
            <button style="display:flex;align-items:center;gap:5px;padding:0 12px;height:34px;border-radius:7px;border:none;background:#0a0a0a;color:#ffffff;font-size:13px;font-weight:500;cursor:pointer;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
              List
            </button>
            <button style="display:flex;align-items:center;gap:5px;padding:0 12px;height:34px;border-radius:7px;border:none;background:transparent;color:#888;font-size:13px;font-weight:500;cursor:pointer;">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
              Grid
            </button>
          </div>
        </div>
      </div>` },
    ],
  },
  {
    id: "toggle-group",
    name: "Toggle Group",
    category: "Action",
    desc: "A set of Toggle buttons sharing a container, supporting single or multiple selection within the group.",
    what: `<p>Toggle Groups present a set of related Toggle buttons as a single cohesive unit, visually connected by a shared border or container. They operate in one of two modes. In single-select mode, they work like radio buttons: selecting one option deselects all others, making the group suitable for mutually exclusive choices like view modes (Day, Week, Month) or alignment options (Left, Center, Right). In multi-select mode, any combination of buttons can be active simultaneously, making them suitable for additive filters or format controls where multiple states can coexist (Bold + Italic at the same time).</p><p>The mode must be chosen deliberately — the wrong mode creates confusing, unexpected behavior. Single-select groups should use the role="radiogroup" ARIA pattern semantically, while multi-select groups use a group of individual toggle buttons each with aria-pressed. Visual design should help users understand the mode: a visually unified pill-shaped container strongly implies single-select, while individually bordered buttons in a group more naturally imply multi-select. Always enforce at least one selection in single-select mode unless "no selection" is a valid, intentional state.</p>`,
    anatomy: [
      { title: "Group container", desc: "Visually connects the toggles into a single unit." },
      { title: "Toggle items", desc: "Individual buttons with distinct states." },
      { title: "Selection mode", desc: "Single (exclusive) or multiple (combinable)." }
    ],
    use: [
      "View mode selectors (Day / Week / Month)",
      "Alignment controls (Left / Center / Right)",
      "Filter tag groups where multiple can be active",
      "Text formatting (bold + italic together)",
      "Size or variant selectors (S / M / L / XL)"
    ],
    avoid: [
      "When one option must always be selected — handle that logic explicitly",
      "Too many options — beyond 5–6 items, use a different control",
      "When labels need to be long — toggle labels should be 1–3 words",
      "For navigation — use Tabs instead",
      "Without a default selection when one is logically required"
    ],
    icons: ["align-left", "align-center", "align-right", "bold", "italic"],
    states: [
      { name: "One active (single)", desc: "Single-select mode — one button is active and all others are inactive." },
      { name: "Multiple active (multi)", desc: "Multi-select mode — several buttons are simultaneously active." },
      { name: "None active", desc: "No button is selected — only valid when 'no selection' is an intentional option." },
      { name: "Item hover", desc: "The pointer is over an item — a subtle hover style signals it is interactive." },
      { name: "Item focused", desc: "An item has keyboard focus — a focus ring is shown." },
      { name: "Item disabled", desc: "A specific item in the group is non-interactive — shown in a muted style." }
    ],
    prompt: `Create a Toggle Group component supporting single-select (exclusive, like radio buttons) and multi-select (combinable) modes. Use role="group" with a group aria-label, and aria-pressed on each item for multi-select mode. Support per-item disabled states and require a default selection in single-select mode. Use design tokens for group border, active item background, and shared container border radius.`,
    related: ["toggle", "tabs", "radio-group"],
    aka: [
      { system: "Material Design", term: "Button Groups" },
      { system: "Fluent", term: "Toolbar" },
      { system: "Radix UI", term: "Toggle Group" },
      { system: "Shadcn/UI", term: "Toggle Group" },
      { system: "Ant Design", term: "Radio.Group (button)" },
      { system: "Canvas", term: "Segmented Control" },
      { system: "Carbon", term: "Content Switcher" },
          { system: "USWDS", term: "Button group" },
          { system: "Momentum", term: "Buttongroup" },
          { system: "Clarity", term: "Button Group" },
          { system: "Evergreen", term: "Group" },
          { system: "Paste", term: "Button Group" },
          { system: "Lightning", term: "Button Groups" },
          { system: "Spectrum", term: "Action Group" },
          { system: "Polaris", term: "Button group" },
          { system: "PatternFly", term: "Toggle group" },
          { system: "Visa", term: "Toggle button" },
          { system: "eBay", term: "Toggle button group" },
          { system: "Flowbite", term: "Button Group" },
          { system: "Cedar", term: "Toggle button" },
          { system: "Forma 36", term: "ButtonGroup" },
    ],
    previews: [
      { label: "Single", content: `<div class="prev-panel">
        <div>
          <div class="prev-section-label">View mode (click to select)</div>
          <div data-toggle-single style="display:inline-flex;border:1px solid #e2e2e2;border-radius:8px;overflow:hidden;">
            <button data-toggle-btn style="padding:8px 20px;border:none;border-right:1px solid #e2e2e2;background:#0a0a0a;color:#ffffff;font-size:13px;font-weight:600;cursor:pointer;">Day</button>
            <button data-toggle-btn style="padding:8px 20px;border:none;border-right:1px solid #e2e2e2;background:transparent;color:#888;font-size:13px;font-weight:500;cursor:pointer;">Week</button>
            <button data-toggle-btn style="padding:8px 20px;border:none;background:transparent;color:#888;font-size:13px;font-weight:500;cursor:pointer;">Month</button>
          </div>
        </div>
        <div>
          <div class="prev-section-label">Size selector</div>
          <div data-toggle-single style="display:inline-flex;border:1px solid #e2e2e2;border-radius:8px;overflow:hidden;">
            <button data-toggle-btn style="padding:8px 16px;border:none;border-right:1px solid #e2e2e2;background:transparent;color:#888;font-size:13px;font-weight:500;cursor:pointer;">S</button>
            <button data-toggle-btn style="padding:8px 16px;border:none;border-right:1px solid #e2e2e2;background:#0a0a0a;color:#ffffff;font-size:13px;font-weight:600;cursor:pointer;">M</button>
            <button data-toggle-btn style="padding:8px 16px;border:none;border-right:1px solid #e2e2e2;background:transparent;color:#888;font-size:13px;font-weight:500;cursor:pointer;">L</button>
            <button data-toggle-btn style="padding:8px 16px;border:none;background:transparent;color:#888;font-size:13px;font-weight:500;cursor:pointer;">XL</button>
          </div>
        </div>
      </div>` },
      { label: "Multiple", content: `<div class="prev-panel">
        <div>
          <div class="prev-section-label">Formatting (B + I active)</div>
          <div style="display:inline-flex;gap:4px;">
            <button style="width:36px;height:36px;border-radius:7px;border:1px solid #0a0a0a;background:#0a0a0a;color:#ffffff;font-size:13px;font-weight:700;cursor:pointer;">B</button>
            <button style="width:36px;height:36px;border-radius:7px;border:1px solid #0a0a0a;background:#0a0a0a;color:#ffffff;font-size:13px;font-style:italic;font-weight:600;cursor:pointer;">I</button>
            <button style="width:36px;height:36px;border-radius:7px;border:1px solid #e2e2e2;background:transparent;color:#aaa;font-size:13px;text-decoration:underline;cursor:pointer;">U</button>
            <button style="width:36px;height:36px;border-radius:7px;border:1px solid #e2e2e2;background:transparent;color:#aaa;font-size:13px;text-decoration:line-through;cursor:pointer;">S</button>
          </div>
        </div>
        <div>
          <div class="prev-section-label">Filters (multiple active)</div>
          <div style="display:inline-flex;gap:6px;">
            <button style="padding:6px 14px;border-radius:20px;border:1px solid #0a0a0a;background:#0a0a0a;color:#ffffff;font-size:12px;font-weight:500;cursor:pointer;">Design</button>
            <button style="padding:6px 14px;border-radius:20px;border:1px solid #e2e2e2;background:transparent;color:#888;font-size:12px;font-weight:500;cursor:pointer;">Research</button>
            <button style="padding:6px 14px;border-radius:20px;border:1px solid #0a0a0a;background:#0a0a0a;color:#ffffff;font-size:12px;font-weight:500;cursor:pointer;">Eng</button>
            <button style="padding:6px 14px;border-radius:20px;border:1px solid #e2e2e2;background:transparent;color:#888;font-size:12px;font-weight:500;cursor:pointer;">PM</button>
          </div>
        </div>
      </div>` },
      { label: "Outline", content: `<div class="prev-panel">
        <div>
          <div class="prev-section-label">Alignment (outline style)</div>
          <div style="display:inline-flex;gap:4px;">
            <button style="width:38px;height:38px;border-radius:7px;border:2px solid #0a0a0a;background:transparent;color:#0a0a0a;display:flex;align-items:center;justify-content:center;cursor:pointer;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="15" y2="12"/><line x1="3" y1="18" x2="18" y2="18"/></svg>
            </button>
            <button style="width:38px;height:38px;border-radius:7px;border:1px solid #e2e2e2;background:transparent;color:#aaa;display:flex;align-items:center;justify-content:center;cursor:pointer;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="6" y1="12" x2="18" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
            </button>
            <button style="width:38px;height:38px;border-radius:7px;border:1px solid #e2e2e2;background:transparent;color:#aaa;display:flex;align-items:center;justify-content:center;cursor:pointer;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="9" y1="12" x2="21" y2="12"/><line x1="6" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>
        </div>
        <div>
          <div class="prev-section-label">With disabled item</div>
          <div style="display:inline-flex;border:1px solid #e2e2e2;border-radius:8px;overflow:hidden;">
            <button style="padding:8px 18px;border:none;border-right:1px solid #e2e2e2;background:transparent;color:#888;font-size:13px;font-weight:500;cursor:pointer;">Monthly</button>
            <button style="padding:8px 18px;border:none;border-right:1px solid #e2e2e2;background:#0a0a0a;color:#ffffff;font-size:13px;font-weight:600;cursor:pointer;">Quarterly</button>
            <button style="padding:8px 18px;border:none;background:transparent;color:#ccc;font-size:13px;font-weight:500;cursor:not-allowed;opacity:0.5;" disabled>Yearly</button>
          </div>
        </div>
      </div>` },
    ],
  },
  {
    id: "tooltip",
    name: "Tooltip",
    category: "Overlay",
    desc: "A small, text-only popup that appears on hover or focus to provide brief supplementary information about an element.",
    what: `<p>Tooltips are for short, plain-text labels and clarifications. They appear near their trigger element — typically above or below — when the user hovers over it or focuses it with a keyboard, and disappear the moment the user moves away. This transience is their defining constraint: tooltip content must be supplemental and expendable, never critical. They should contain only a single short phrase — one sentence maximum.</p><p>They must never contain interactive elements like links or buttons, because once the tooltip is open, the user cannot move their cursor into it without losing hover on the trigger. For richer content or interactivity, use a Popover or Hover Card instead. Tooltips are also one of the primary tools for providing accessible names to icon-only buttons — when a button has no visible text label, a tooltip communicates its purpose to both sighted and keyboard users. Open delays (400–600ms) are standard practice to avoid tooltip flicker as the user moves the mouse across a toolbar, while close delays should be near-instant.</p>`,
    anatomy: [
      { title: "Trigger", desc: "Any element — icon button, truncated text, or labeled control." },
      { title: "Content", desc: "Plain text — 1 short sentence maximum." },
      { title: "Arrow", desc: "Optional pointer connecting tooltip to trigger." },
      { title: "Delay", desc: "A 400–600ms open delay to avoid flashing on quick mouse moves." }
    ],
    use: [
      "Icon-only buttons that need text labels (toolbar icons, icon buttons)",
      "Clarifying an abbreviated or truncated label",
      "Keyboard shortcut hints alongside menu items",
      "Explaining a disabled element and why it's disabled",
      "Expanding acronyms or technical terms"
    ],
    avoid: [
      "Interactive content — use a Popover for links, buttons, or forms",
      "Essential information — tooltips are hidden and keyboard-only users may miss them",
      "On touch-only devices where hover doesn't exist",
      "More than one short sentence — if it's longer, use a Popover or inline help",
      "Attaching to static text that isn't an interactive element"
    ],
    icons: ["help-circle", "info", "message-circle", "eye"],
    states: [
      { name: "Hidden", desc: "Default state — tooltip is not visible." },
      { name: "Delayed open", desc: "Hover or focus has started the open delay timer (400–600ms)." },
      { name: "Visible", desc: "Tooltip is fully shown near the trigger element." },
      { name: "Closing", desc: "Hover or focus has ended — tooltip fades out immediately." }
    ],
    prompt: `Create a Tooltip component that shows a plain-text label on hover and focus after a 400–600ms open delay. Use role="tooltip" on the content and aria-describedby linking it to the trigger. Support top, bottom, left, and right placements with automatic collision detection. Never include interactive content. Use design tokens for background, text color, border radius, and fade animation.`,
    related: ["popover", "hover-card", "button"],
    aka: [
      { system: "Material Design", term: "Tooltips" },
      { system: "Fluent", term: "Tooltip" },
      { system: "Ant Design", term: "Tooltip" },
      { system: "Radix UI", term: "Tooltip" },
      { system: "Shadcn/UI", term: "Tooltip" },
      { system: "Bootstrap", term: "Tooltip" },
      { system: "Chakra UI", term: "Tooltip" },
      { system: "Canvas", term: "Tooltip" },
      { system: "Carbon", term: "Tooltip" },
          { system: "Atlassian", term: "Tooltip" },
          { system: "Dell", term: "Tooltip" },
          { system: "USWDS", term: "Tooltip" },
          { system: "Momentum", term: "Tooltip" },
          { system: "Clarity", term: "Tooltip" },
          { system: "Evergreen", term: "Tooltip" },
          { system: "Paste", term: "Tooltip" },
          { system: "Lightning", term: "Tooltip" },
          { system: "Spectrum", term: "Tooltip" },
          { system: "Polaris", term: "Tooltip" },
          { system: "PatternFly", term: "Tooltip" },
          { system: "EUI", term: "Tooltip" },
          { system: "Ariakit", term: "Tooltip" },
          { system: "HeroUI", term: "Tooltip" },
          { system: "Visa", term: "Tooltip" },
          { system: "eBay", term: "Tooltip" },
          { system: "Flowbite", term: "Tooltips" },
          { system: "Cedar", term: "Tooltip" },
          { system: "Forma 36", term: "Tooltip" },
          { system: "Aurora", term: "Tooltip" },
          { system: "Instructure UI", term: "Tooltip" },
          { system: "NewsKit", term: "Tooltip" },
    ],
    previews: [
      { label: "Top", content: `<div style="display:flex;gap:32px;justify-content:center;align-items:flex-end;background:#ffffff;padding:20px 20px 24px;">
        <div class="prev-tooltip-anchor">
          <div class="prev-tooltip-bubble">Settings (&#8984;,)
            <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #0a0a0a;"></div>
          </div>
          <button class="prev-btn-light">Settings</button>
        </div>
        <div class="prev-tooltip-anchor">
          <div class="prev-tooltip-bubble">Notifications
            <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #0a0a0a;"></div>
          </div>
          <button class="prev-btn-light">Alerts</button>
        </div>
        <div class="prev-tooltip-anchor">
          <div class="prev-tooltip-bubble">Read-only mode
            <div style="position:absolute;bottom:-5px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid #0a0a0a;"></div>
          </div>
          <button style="padding:7px 14px;border-radius:7px;border:1px solid #e2e2e2;background:#ffffff;color:#aaa;font-size:13px;cursor:not-allowed;opacity:0.5;" disabled>Publish</button>
        </div>
      </div>` },
      { label: "Right", content: `<div style="display:flex;flex-direction:column;gap:20px;align-items:center;justify-content:center;background:#ffffff;padding:20px;">
        <div class="prev-flex-row">
          <button class="prev-btn-light">Copy link</button>
          <div class="prev-inline-group">
            <div style="position:absolute;left:-5px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #0a0a0a;"></div>
            <div style="background:#0a0a0a;color:#ffffff;font-size:12px;font-weight:500;padding:5px 10px;border-radius:6px;white-space:nowrap;margin-left:4px;">Copy to clipboard</div>
          </div>
        </div>
        <div class="prev-flex-row">
          <button style="width:36px;height:36px;border-radius:7px;border:1px solid #e2e2e2;background:#ffffff;color:#555;display:flex;align-items:center;justify-content:center;cursor:pointer;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
          <div class="prev-inline-group">
            <div style="position:absolute;left:-5px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-right:5px solid #0a0a0a;"></div>
            <div style="background:#0a0a0a;color:#ffffff;font-size:12px;font-weight:500;padding:5px 10px;border-radius:6px;white-space:nowrap;margin-left:4px;">Add to favorites</div>
          </div>
        </div>
      </div>` },
      { label: "Bottom", content: `<div style="display:flex;gap:32px;justify-content:center;align-items:flex-start;background:#ffffff;padding:24px 20px 20px;">
        <div class="prev-tooltip-anchor">
          <button class="prev-btn-light">Download</button>
          <div class="prev-tooltip-bubble">Save to device
            <div style="position:absolute;top:-5px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #0a0a0a;"></div>
          </div>
        </div>
        <div class="prev-tooltip-anchor">
          <button class="prev-btn-light">Share</button>
          <div class="prev-tooltip-bubble">Share with team
            <div style="position:absolute;top:-5px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid #0a0a0a;"></div>
          </div>
        </div>
      </div>` },
      { label: "Left", content: `<div style="display:flex;flex-direction:column;gap:20px;align-items:center;justify-content:center;background:#ffffff;padding:20px;">
        <div class="prev-flex-row">
          <div class="prev-inline-group">
            <div style="background:#0a0a0a;color:#ffffff;font-size:12px;font-weight:500;padding:5px 10px;border-radius:6px;white-space:nowrap;margin-right:4px;">Open settings</div>
            <div style="position:absolute;right:-5px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #0a0a0a;"></div>
          </div>
          <button class="prev-btn-light">Settings</button>
        </div>
        <div class="prev-flex-row">
          <div class="prev-inline-group">
            <div style="background:#0a0a0a;color:#ffffff;font-size:12px;font-weight:500;padding:5px 10px;border-radius:6px;white-space:nowrap;margin-right:4px;">Undo last action (&#8984;Z)</div>
            <div style="position:absolute;right:-5px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #0a0a0a;"></div>
          </div>
          <button style="width:36px;height:36px;border-radius:7px;border:1px solid #e2e2e2;background:#ffffff;color:#555;display:flex;align-items:center;justify-content:center;cursor:pointer;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 14 4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"/></svg>
          </button>
        </div>
      </div>` },
    ],
  },
  {
    id: "slider",
    name: "Slider",
    category: "Form",
    desc: "A draggable control that lets the user select a value or range within a defined minimum and maximum.",
    what: `<p>A Slider provides an intuitive way to select a numeric value by dragging a thumb along a track. It gives users a sense of the full range and their position within it, making it ideal for settings where approximate values are acceptable — like volume, brightness, price ranges, or image adjustments. Sliders can support a single value or a range selection (two thumbs). The track visually fills to indicate the selected portion.</p><p>Sliders work best when the exact number is less important than the relative position within a range. For precise numeric entry, pair a Slider with an Input field that stays in sync, or use an Input alone. Avoid using sliders when the range is enormous (e.g., 0–10,000) or when specific values matter greatly — the lack of precision at those scales frustrates users. Horizontal orientation is standard on the web; vertical sliders are uncommon and can confuse users unfamiliar with the pattern.</p>`,
    anatomy: [
      { title: "Track", desc: "The horizontal line representing the full range from minimum to maximum." },
      { title: "Filled Track", desc: "The portion of the track from the minimum (or range start) to the current thumb position." },
      { title: "Thumb", desc: "The draggable handle the user grabs to change the value." },
      { title: "Label", desc: "Text identifying what the slider controls (e.g., 'Volume')." },
      { title: "Value Label", desc: "A live readout of the current numeric value, often positioned near the thumb or beside the slider." },
      { title: "Tick Marks", desc: "Optional visual markers along the track indicating intervals or snap points." }
    ],
    use: [
      "Volume, brightness, or opacity controls",
      "Price range filters in e-commerce",
      "Image editing adjustments (contrast, saturation, etc.)",
      "Zoom level controls",
      "Settings where users benefit from seeing the full range visually"
    ],
    avoid: [
      "When precision matters — use an Input instead",
      "When the range is very large (e.g., 0–10,000) — the thumb movement becomes too imprecise",
      "For binary choices — use a Switch or Checkbox",
      "When there are only a few discrete options — use a Radio Group or Select",
      "On mobile when the drag target is too small to hit reliably"
    ],
    icons: ["sliders-horizontal", "minus", "plus"],
    states: [
      { name: "Default", desc: "Thumb rests at the initial value; track shows the filled and unfilled portions." },
      { name: "Hover", desc: "Thumb enlarges or shows a value tooltip on mouse hover." },
      { name: "Active / Dragging", desc: "Thumb is being dragged — value updates in real time." },
      { name: "Focused", desc: "A visible focus ring on the thumb for keyboard users; arrow keys adjust the value." },
      { name: "Disabled", desc: "Non-interactive; thumb and track are visually muted." },
      { name: "Range", desc: "Two thumbs define a minimum and maximum selection within the track." }
    ],
    prompt: `Create a Slider component with a draggable thumb on a horizontal track. Support single-value and range (two-thumb) modes. Display an optional value label that updates in real time. Include keyboard support (arrow keys for step adjustments, Home/End for min/max). Support a disabled state, custom min/max/step values, and optional tick marks. Use design tokens for track height, thumb size, and active color.`,
    related: ["input", "progress", "radio-group"],
    aka: [
      { system: "Material Design", term: "Sliders" },
      { system: "Ant Design", term: "Slider" },
      { system: "Fluent", term: "Slider" },
      { system: "Radix UI", term: "Slider" },
      { system: "Shadcn/UI", term: "Slider" },
      { system: "Chakra UI", term: "Slider" },
      { system: "Bootstrap", term: "Range" },
      { system: "Carbon", term: "Slider" },
          { system: "Atlassian", term: "Range" },
          { system: "USWDS", term: "Range slider" },
          { system: "Momentum", term: "Slider" },
          { system: "Clarity", term: "Range Input" },
          { system: "Paste", term: "Slider" },
          { system: "Lightning", term: "Slider" },
          { system: "Spectrum", term: "Slider" },
          { system: "Polaris", term: "Range slider" },
          { system: "PatternFly", term: "Slider" },
          { system: "HeroUI", term: "Slider" },
          { system: "Visa", term: "Slider" },
          { system: "Flowbite", term: "Range" },
          { system: "Aurora", term: "Range" },
          { system: "NewsKit", term: "Slider" },
    ],
    previews: [
      { label: "Default", content: `<div style="display:flex;flex-direction:column;gap:24px;padding:24px;background:#ffffff;border-radius:12px;max-width:360px;width:100%;">
        <div class="slider-prev" data-min="0" data-max="100" data-step="1" data-suffix="%">
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#333;margin-bottom:8px;"><span style="font-weight:600;">Volume</span><span class="slider-val">72%</span></div>
          <div class="slider-track prev-progress-track">
            <div class="slider-fill" style="position:absolute;left:0;top:0;height:100%;width:72%;background:#0a0a0a;border-radius:3px;"></div>
            <div class="slider-thumb" style="position:absolute;left:72%;top:50%;transform:translate(-50%,-50%);width:18px;height:18px;background:#0a0a0a;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div>
          </div>
        </div>
        <div class="slider-prev" data-min="0" data-max="100" data-step="1" data-suffix="%">
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#333;margin-bottom:8px;"><span style="font-weight:600;">Brightness</span><span class="slider-val">50%</span></div>
          <div class="slider-track prev-progress-track">
            <div class="slider-fill" style="position:absolute;left:0;top:0;height:100%;width:50%;background:#0a0a0a;border-radius:3px;"></div>
            <div class="slider-thumb" style="position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:18px;height:18px;background:#0a0a0a;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div>
          </div>
        </div>
      </div>` },
      { label: "Range", content: `<div style="display:flex;flex-direction:column;gap:8px;padding:24px;background:#ffffff;border-radius:12px;max-width:360px;width:100%;">
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#333;"><span style="font-weight:600;">Price range</span><span>$25 – $75</span></div>
        <div class="prev-progress-track">
          <div style="position:absolute;left:25%;top:0;height:100%;width:50%;background:#0a0a0a;border-radius:3px;"></div>
          <div style="position:absolute;left:25%;top:50%;transform:translate(-50%,-50%);width:18px;height:18px;background:#0a0a0a;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div>
          <div style="position:absolute;left:75%;top:50%;transform:translate(-50%,-50%);width:18px;height:18px;background:#0a0a0a;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.2);"></div>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:11px;color:#999;margin-top:2px;"><span>$0</span><span>$100</span></div>
      </div>` },
      { label: "Disabled", content: `<div style="display:flex;flex-direction:column;gap:8px;padding:24px;background:#ffffff;border-radius:12px;max-width:360px;width:100%;opacity:0.45;">
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#999;"><span style="font-weight:600;">Opacity</span><span>30%</span></div>
        <div class="prev-progress-track">
          <div style="position:absolute;left:0;top:0;height:100%;width:30%;background:#aaa;border-radius:3px;"></div>
          <div style="position:absolute;left:30%;top:50%;transform:translate(-50%,-50%);width:18px;height:18px;background:#aaa;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.1);"></div>
        </div>
      </div>` },
    ],
  },
  {
    id: "menubar",
    name: "Menubar",
    category: "Navigation",
    desc: "A horizontal bar of top-level menu triggers, each opening a dropdown of commands, options, or nested submenus.",
    what: `<p>A Menubar is the classic desktop application menu pattern — a persistent horizontal row of labeled triggers (File, Edit, View, etc.) that each open a Dropdown Menu of commands or options. It is one of the oldest and most recognizable interaction patterns in computing, providing a comprehensive, organized way to access all available actions. Users familiar with desktop applications immediately understand this pattern.</p><p>Menubars are best suited for complex, tool-heavy applications — text editors, IDEs, design tools, spreadsheets — where the number of available actions far exceeds what can be represented with buttons alone. They reduce visual clutter by tucking commands behind a predictable hierarchy. On the web, menubars are less common than in native apps, but they are appropriate when building application-level interfaces where users expect powerful functionality. For simpler sites or content-focused pages, a Navigation Menu or Tabs pattern is usually more appropriate.</p>`,
    anatomy: [
      { title: "Menu Bar Container", desc: "The horizontal strip that holds all top-level menu triggers." },
      { title: "Menu Trigger", desc: "A labeled button (e.g., 'File', 'Edit') that opens its associated dropdown." },
      { title: "Dropdown Panel", desc: "The list of menu items that appears when a trigger is activated." },
      { title: "Menu Item", desc: "An individual action or command within the dropdown." },
      { title: "Separator", desc: "A horizontal rule dividing groups of related items within a dropdown." },
      { title: "Submenu Indicator", desc: "A right-pointing chevron indicating a nested submenu is available." },
      { title: "Keyboard Shortcut", desc: "Right-aligned text showing the shortcut key for a menu item (e.g., ⌘S)." }
    ],
    use: [
      "Desktop-class web applications (editors, IDEs, design tools)",
      "When the application has many commands that need organized access",
      "File management interfaces with CRUD operations",
      "When users expect traditional desktop menu behavior",
      "Applications where keyboard shortcut discoverability matters"
    ],
    avoid: [
      "For simple websites or content pages — use a Navigation Menu instead",
      "On mobile — the pattern doesn't translate well to touch interfaces",
      "When there are only 2–3 top-level actions — use Buttons or a Dropdown Menu",
      "For site-level navigation — use Tabs or a navigation bar",
      "When the application is task-focused with a limited action set"
    ],
    icons: ["menu", "chevron-down", "chevron-right", "check", "circle"],
    states: [
      { name: "Default", desc: "All triggers are visible in the bar; no dropdown is open." },
      { name: "Open", desc: "A trigger is active and its dropdown is displayed below." },
      { name: "Hover-follow", desc: "While one menu is open, hovering adjacent triggers immediately opens their dropdowns." },
      { name: "Item Highlighted", desc: "A menu item is highlighted via hover or keyboard navigation." },
      { name: "Submenu Open", desc: "A nested submenu is visible, triggered by hovering a parent item with a chevron." },
      { name: "Disabled Item", desc: "A menu item is visible but non-interactive, shown in muted text." }
    ],
    prompt: `Create a Menubar component with horizontal top-level triggers that open dropdown panels on click. Support hover-follow behavior (moving between triggers keeps menus open). Include separators, disabled items, keyboard shortcuts displayed right-aligned, and nested submenus with chevron indicators. Ensure full keyboard navigation: left/right to move between triggers, up/down within dropdowns, Enter to select, Escape to close. Use design tokens for bar height, item padding, and highlight color.`,
    related: ["dropdown-menu", "context-menu", "tabs"],
    aka: [
      { system: "Radix UI", term: "Menubar" },
      { system: "Shadcn/UI", term: "Menubar" },
          { system: "Atlassian", term: "Menu" },
          { system: "Momentum", term: "Menubar" },
          { system: "Spectrum", term: "Top Nav" },
          { system: "Polaris", term: "Navigation" },
          { system: "Ariakit", term: "Menubar" },
          { system: "NewsKit", term: "Menu" },
    ],
    previews: [
      { label: "Interactive", content: `<div data-menubar style="display:flex;flex-direction:column;gap:0;background:#ffffff;border-radius:12px;max-width:480px;width:100%;overflow:visible;border:1px solid #e5e7eb;position:relative;">
        <div style="display:flex;align-items:center;gap:0;padding:4px 8px;background:#fafafa;border-bottom:1px solid #e5e7eb;">
          <button data-menubar-trigger="file-menu" class="prev-ghost-btn">File</button>
          <button data-menubar-trigger="edit-menu" class="prev-ghost-btn">Edit</button>
          <button data-menubar-trigger="view-menu" class="prev-ghost-btn">View</button>
          <button data-menubar-trigger="help-menu" class="prev-ghost-btn">Help</button>
        </div>
        <div data-menubar-panel="file-menu" style="display:none;position:absolute;top:40px;left:4px;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;padding:4px;width:200px;box-shadow:0 4px 16px rgba(0,0,0,0.12);z-index:20;">
          <div data-menu-item class="prev-action-row"><span>New File</span><span class="prev-muted-sm">⌘N</span></div>
          <div data-menu-item class="prev-action-row"><span>Open</span><span class="prev-muted-sm">⌘O</span></div>
          <div data-menu-item class="prev-action-row"><span>Save</span><span class="prev-muted-sm">⌘S</span></div>
          <div style="height:1px;background:#e5e7eb;margin:4px 8px;"></div>
          <div data-menu-item class="prev-nav-link">Export…</div>
        </div>
        <div data-menubar-panel="edit-menu" style="display:none;position:absolute;top:40px;left:52px;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;padding:4px;width:200px;box-shadow:0 4px 16px rgba(0,0,0,0.12);z-index:20;">
          <div data-menu-item class="prev-action-row"><span>Undo</span><span class="prev-muted-sm">⌘Z</span></div>
          <div data-menu-item class="prev-action-row"><span>Redo</span><span class="prev-muted-sm">⇧⌘Z</span></div>
          <div style="height:1px;background:#e5e7eb;margin:4px 8px;"></div>
          <div data-menu-item class="prev-action-row"><span>Cut</span><span class="prev-muted-sm">⌘X</span></div>
          <div data-menu-item class="prev-action-row"><span>Copy</span><span class="prev-muted-sm">⌘C</span></div>
          <div data-menu-item class="prev-action-row"><span>Paste</span><span class="prev-muted-sm">⌘V</span></div>
        </div>
        <div data-menubar-panel="view-menu" style="display:none;position:absolute;top:40px;left:100px;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;padding:4px;width:180px;box-shadow:0 4px 16px rgba(0,0,0,0.12);z-index:20;">
          <div data-menu-item class="prev-nav-link">Zoom In</div>
          <div data-menu-item class="prev-nav-link">Zoom Out</div>
          <div data-menu-item class="prev-nav-link">Full Screen</div>
        </div>
        <div data-menubar-panel="help-menu" style="display:none;position:absolute;top:40px;left:152px;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;padding:4px;width:180px;box-shadow:0 4px 16px rgba(0,0,0,0.12);z-index:20;">
          <div data-menu-item class="prev-nav-link">Documentation</div>
          <div data-menu-item class="prev-nav-link">About</div>
        </div>
        <div style="padding:60px 16px 16px;text-align:center;font-size:12px;color:#aaa;">Click menu items above</div>
      </div>` },
    ],
  },
  {
    id: "navigation-menu",
    name: "Navigation Menu",
    category: "Navigation",
    desc: "A site-level horizontal navigation bar with top-level links and optional dropdown panels for sub-sections.",
    what: `<p>A Navigation Menu provides the primary way for users to move between major sections of a website or application. It sits horizontally — typically in the header — and contains top-level links, some of which may open dropdown panels revealing sub-navigation, related links, or featured content. Unlike a Menubar (which exposes application commands), a Navigation Menu is specifically designed for wayfinding across pages or sections.</p><p>Modern navigation menus often feature rich dropdown panels (sometimes called "mega menus") that can contain grouped links, descriptions, icons, and even featured content. This makes them well-suited for marketing sites, documentation hubs, and large web applications with deep information architectures. The key design challenge is keeping the menu scannable and not overwhelming — too many items or too-deep nesting defeats the purpose. On mobile, navigation menus typically collapse into a hamburger menu with a slide-out drawer.</p>`,
    anatomy: [
      { title: "Nav Container", desc: "The horizontal bar that holds all top-level navigation items." },
      { title: "Nav Link", desc: "A top-level link that navigates directly to a page or section." },
      { title: "Nav Trigger", desc: "A top-level item with an indicator (chevron) that opens a dropdown panel." },
      { title: "Dropdown Panel", desc: "The expanded area containing sub-navigation links, descriptions, or featured content." },
      { title: "Nav Group", desc: "A labeled cluster of related links within the dropdown panel." },
      { title: "Active Indicator", desc: "Visual marker (underline, background, or bold text) showing the current page." }
    ],
    use: [
      "Primary site-level navigation across major sections",
      "Documentation sites with categorized topics",
      "Marketing sites with product, pricing, and resource sections",
      "Large web applications with distinct feature areas",
      "When users need to see available sections at a glance"
    ],
    avoid: [
      "For in-page content switching — use Tabs instead",
      "For application-level commands — use a Menubar instead",
      "When there are only 2–3 destinations — simple links or Buttons suffice",
      "For deeply nested hierarchies — consider a Sidebar navigation pattern",
      "On pages where the navigation would compete with critical content"
    ],
    icons: ["menu", "chevron-down", "external-link", "arrow-right"],
    states: [
      { name: "Default", desc: "All navigation links are visible; no dropdown is open." },
      { name: "Hover", desc: "A nav item is visually highlighted on mouse hover." },
      { name: "Active / Current", desc: "The nav item corresponding to the current page is visually marked (underline, bold, etc.)." },
      { name: "Dropdown Open", desc: "A trigger item's dropdown panel is expanded, showing sub-navigation." },
      { name: "Mobile Collapsed", desc: "On smaller viewports, the menu collapses into a hamburger icon / drawer." }
    ],
    prompt: `Create a Navigation Menu component with horizontal top-level links and triggers. Triggers open dropdown panels on hover or click, containing grouped sub-links with optional descriptions and icons. Include an active indicator for the current page. Support keyboard navigation (arrow keys between items, Enter/Space to open panels, Escape to close). Collapse into a hamburger menu on mobile viewports. Use design tokens for bar height, link spacing, active underline, and dropdown panel styling.`,
    related: ["tabs", "breadcrumb", "menubar", "dropdown-menu"],
    aka: [
      { system: "Radix UI", term: "Navigation Menu" },
      { system: "Shadcn/UI", term: "Navigation Menu" },
      { system: "Material Design", term: "Navigation Bar" },
      { system: "Fluent", term: "Nav" },
      { system: "Bootstrap", term: "Navbar" },
      { system: "Ant Design", term: "Menu" },
      { system: "Carbon", term: "UI Shell" },
          { system: "Atlassian", term: "Side navigation" },
          { system: "Dell", term: "Side navigation" },
          { system: "USWDS", term: "Side navigation" },
          { system: "Momentum", term: "Sidenavigation" },
          { system: "Clarity", term: "Vertical Nav" },
          { system: "Paste", term: "Sidebar Navigation" },
          { system: "GOV.UK", term: "Service navigation" },
          { system: "Lightning", term: "Vertical Navigation" },
          { system: "Spectrum", term: "Sidenav" },
          { system: "Polaris", term: "Navigation" },
          { system: "PatternFly", term: "Navigation" },
          { system: "EUI", term: "Collapsible Nav" },
          { system: "Visa", term: "Vertical navigation" },
          { system: "eBay", term: "Top navigation bar" },
          { system: "Flowbite", term: "Sidebar" },
          { system: "Aurora", term: "Navbar" },
          { system: "Instructure UI", term: "SideNavBar" },
    ],
    previews: [
      { label: "Default", content: `<div style="display:flex;flex-direction:column;gap:0;background:#ffffff;border-radius:12px;max-width:520px;width:100%;overflow:hidden;">
        <div style="display:flex;align-items:center;gap:4px;padding:8px 16px;border-bottom:1px solid #e5e7eb;">
          <a style="padding:6px 12px;font-size:13px;font-weight:600;color:#0a0a0a;text-decoration:none;border-bottom:2px solid #0a0a0a;">Products</a>
          <a style="padding:6px 12px;font-size:13px;font-weight:500;color:#666;text-decoration:none;display:flex;align-items:center;gap:4px;">Solutions <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg></a>
          <a style="padding:6px 12px;font-size:13px;font-weight:500;color:#666;text-decoration:none;">Pricing</a>
          <a style="padding:6px 12px;font-size:13px;font-weight:500;color:#666;text-decoration:none;">Docs</a>
        </div>
      </div>` },
      { label: "Interactive", content: `<div style="display:flex;flex-direction:column;gap:0;background:#ffffff;border-radius:12px;max-width:520px;width:100%;overflow:visible;border:1px solid #e5e7eb;">
        <div style="display:flex;align-items:center;gap:4px;padding:8px 16px;border-bottom:1px solid #e5e7eb;">
          <a style="padding:6px 12px;font-size:13px;font-weight:600;color:#0a0a0a;text-decoration:none;border-bottom:2px solid #0a0a0a;cursor:pointer;">Products</a>
          <div data-nav-item style="position:relative;">
            <a data-nav-trigger style="padding:6px 12px;font-size:13px;font-weight:500;color:#666;text-decoration:none;display:flex;align-items:center;gap:4px;cursor:pointer;border-radius:6px;">Solutions <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m6 9 6 6 6-6"/></svg></a>
            <div data-nav-dropdown style="display:none;position:absolute;top:100%;left:0;width:340px;padding:12px;background:#ffffff;border:1px solid #e5e7eb;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,0.12);z-index:20;grid-template-columns:1fr 1fr;gap:6px;margin-top:4px;">
              <div data-menu-item class="prev-card-item"><div class="prev-item-title">For Startups</div><div class="prev-muted">Launch and scale quickly</div></div>
              <div data-menu-item class="prev-card-item"><div class="prev-item-title">Enterprise</div><div class="prev-muted">Security & compliance</div></div>
              <div data-menu-item class="prev-card-item"><div class="prev-item-title">Developers</div><div class="prev-muted">APIs, SDKs, and tools</div></div>
              <div data-menu-item class="prev-card-item"><div class="prev-item-title">Education</div><div class="prev-muted">Free plans for students</div></div>
            </div>
          </div>
          <a style="padding:6px 12px;font-size:13px;font-weight:500;color:#666;text-decoration:none;cursor:pointer;">Pricing</a>
          <a style="padding:6px 12px;font-size:13px;font-weight:500;color:#666;text-decoration:none;cursor:pointer;">Docs</a>
        </div>
      </div>` },
    ],
  },
  {
    id: "carousel",
    name: "Carousel",
    category: "Content",
    desc: "A slideshow component that cycles through a set of content panels — images, cards, or slides — one at a time.",
    what: `<p>A Carousel presents a horizontal sequence of content items (images, cards, promotional panels) that the user can navigate through, typically one or a few at a time. Navigation controls include previous/next arrows, dot indicators showing the current position, and optional auto-play. Carousels are popular for showcasing featured content, product images, testimonials, or onboarding flows where each step is a distinct visual unit.</p><p>The main criticism of carousels is that users rarely interact with slides beyond the first — studies consistently show engagement drops sharply after the initial panel. Use them only when the content is truly sequential or equivalent in importance, not as a way to avoid prioritizing content. When used well, carousels work for image galleries, product photography, and media-rich hero sections. Always provide clear navigation affordances and ensure content is accessible even without JavaScript.</p>`,
    anatomy: [
      { title: "Viewport", desc: "The visible window that displays the current slide or slides." },
      { title: "Slide", desc: "An individual content panel within the carousel." },
      { title: "Previous / Next Controls", desc: "Arrow buttons to navigate between slides." },
      { title: "Indicators", desc: "Dots or thumbnails showing the total number of slides and the current position." },
      { title: "Auto-play Controls", desc: "Optional play/pause button for automatic slide advancement." }
    ],
    use: [
      "Product image galleries where multiple photos need display",
      "Hero sections with featured or promotional content",
      "Testimonial or review showcases",
      "Onboarding flows with sequential steps",
      "Media-rich content where space is limited"
    ],
    avoid: [
      "When each item has different importance — users rarely see past the first slide",
      "For critical content that all users must see",
      "Navigation or menu purposes — use Tabs or Navigation Menu",
      "When there are only 2 items — just show them side by side",
      "On mobile when swipe targets conflict with page scrolling"
    ],
    icons: ["chevron-left", "chevron-right", "circle", "play", "pause"],
    states: [
      { name: "Default", desc: "First slide visible with navigation controls." },
      { name: "Navigating", desc: "Slide transition animation is in progress." },
      { name: "Auto-playing", desc: "Slides advance automatically on a timer." },
      { name: "Paused", desc: "Auto-play is stopped, waiting for manual interaction." },
      { name: "Dragging", desc: "User is swiping/dragging to navigate (touch devices)." }
    ],
    prompt: `Create a Carousel component with a viewport, slide container, and previous/next arrow navigation. Include dot indicators showing total slides and current position. Support optional auto-play with a play/pause toggle. Add touch/swipe support for mobile. Ensure keyboard accessibility (arrow keys to navigate, space to pause). Use CSS scroll-snap for smooth sliding. Apply design tokens for indicator color, arrow styling, and transition timing.`,
    related: ["card", "tabs", "pagination"],
    aka: [
      { system: "Material Design", term: "Carousel" },
      { system: "Ant Design", term: "Carousel" },
      { system: "Fluent", term: "Carousel" },
      { system: "Shadcn/UI", term: "Carousel" },
      { system: "Bootstrap", term: "Carousel" },
          { system: "Dell", term: "Carousel" },
          { system: "Lightning", term: "Carousel" },
          { system: "eBay", term: "Carousel" },
          { system: "Flowbite", term: "Carousel" },
          { system: "Aurora", term: "Carousel" },
    ],
    previews: [
      { label: "Default", content: `<div style="position:relative;width:100%;max-width:400px;background:#f3f4f6;border-radius:12px;overflow:hidden;">
        <div style="display:flex;align-items:center;justify-content:center;height:180px;background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;font-size:18px;font-weight:600;">Slide 1 of 3</div>
        <div style="position:absolute;left:8px;top:50%;transform:translateY(-50%);width:28px;height:28px;background:rgba(255,255,255,0.9);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;color:#333;">‹</div>
        <div style="position:absolute;right:8px;top:50%;transform:translateY(-50%);width:28px;height:28px;background:rgba(255,255,255,0.9);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;font-size:14px;color:#333;">›</div>
        <div style="display:flex;justify-content:center;gap:6px;padding:10px;">
          <div style="width:8px;height:8px;border-radius:50%;background:#333;"></div>
          <div style="width:8px;height:8px;border-radius:50%;background:#ccc;"></div>
          <div style="width:8px;height:8px;border-radius:50%;background:#ccc;"></div>
        </div>
      </div>` },
    ],
  },
  {
    id: "spinner",
    name: "Spinner",
    category: "Feedback",
    desc: "An animated loading indicator that signals an ongoing process with an indeterminate duration.",
    what: `<p>A Spinner communicates that content or a result is loading when the duration is unknown. Unlike a Progress bar (which shows how far along a task is), a Spinner simply says "something is happening — please wait." It's the most common loading indicator on the web, typically rendered as a rotating circle or arc animation. Spinners can be used inline (next to a button or within a card), as page-level overlays, or within specific content regions.</p><p>Spinners should appear quickly after an action is triggered — a delay longer than ~300ms without feedback makes users think nothing happened. For very long operations, consider switching from a Spinner to a Progress bar or providing a textual status update. Overusing spinners (showing them for every tiny fetch) creates a flickering, anxious experience. Use them intentionally for operations that genuinely take noticeable time, and consider Skeleton screens as an alternative for initial page loads.</p>`,
    anatomy: [
      { title: "Animated Indicator", desc: "The spinning visual element — typically a circular arc or ring." },
      { title: "Label", desc: "Optional text below or beside the spinner (e.g., 'Loading...')." },
      { title: "Overlay", desc: "Optional backdrop that dims or blocks interaction with underlying content." }
    ],
    use: [
      "Button loading states after form submission",
      "Inline loading within cards or list items fetching data",
      "Page-level loading overlays during navigation",
      "Placeholder while asynchronous content is being fetched",
      "Pull-to-refresh indicators on mobile"
    ],
    avoid: [
      "When the duration is known — use a Progress bar instead",
      "For initial page loads — use a Skeleton screen for better perceived performance",
      "For very fast operations (under 300ms) — the spinner will just flash and distract",
      "Stacking multiple spinners on one page — consolidate into one loading state",
      "As the only feedback for critical actions — add a text status message too"
    ],
    icons: ["loader", "loader-2", "refresh-cw"],
    states: [
      { name: "Spinning", desc: "The default animated state indicating loading is in progress." },
      { name: "With Label", desc: "A text label accompanies the spinner for additional context." },
      { name: "Small / Inline", desc: "Compact size used within buttons or inline with text." },
      { name: "Overlay", desc: "Full-region or full-page overlay preventing interaction while loading." }
    ],
    prompt: `Create a Spinner component with a smooth CSS animation (rotating arc). Support small, medium, and large sizes. Include an optional label below the spinner. Support an overlay mode that blocks interaction with underlying content. Ensure it is announced to screen readers using role="status" and aria-label="Loading". Use design tokens for color, size, and animation speed.`,
    related: ["progress", "skeleton", "button"],
    aka: [
      { system: "Ant Design", term: "Spin" },
      { system: "Fluent", term: "Spinner" },
      { system: "Chakra UI", term: "Spinner" },
      { system: "Bootstrap", term: "Spinner" },
      { system: "Canvas", term: "Loading Animation" },
      { system: "Carbon", term: "Loading" },
          { system: "Atlassian", term: "Spinner" },
          { system: "Dell", term: "Loading indicator" },
          { system: "Momentum", term: "Spinner" },
          { system: "Clarity", term: "Spinner" },
          { system: "Evergreen", term: "Spinner" },
          { system: "Paste", term: "Spinner" },
          { system: "Lightning", term: "Spinners" },
          { system: "Spectrum", term: "Progress Circle" },
          { system: "Polaris", term: "Spinner" },
          { system: "PatternFly", term: "Spinner" },
          { system: "EUI", term: "Loading" },
          { system: "HeroUI", term: "Spinner" },
          { system: "eBay", term: "Skeleton loader" },
          { system: "Flowbite", term: "Spinner" },
          { system: "Forma 36", term: "Spinner" },
          { system: "Instructure UI", term: "Spinner" },
    ],
    previews: [
      { label: "Default", content: `<div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding:32px;min-height:120px;">
        <div style="width:32px;height:32px;border:3px solid #e5e7eb;border-top-color:#0a0a0a;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
        <div class="prev-desc">Loading...</div>
        <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      </div>` },
      { label: "Sizes", content: `<div style="display:flex;align-items:center;gap:24px;padding:32px;min-height:120px;">
        <div style="width:16px;height:16px;border:2px solid #e5e7eb;border-top-color:#0a0a0a;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
        <div style="width:32px;height:32px;border:3px solid #e5e7eb;border-top-color:#0a0a0a;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
        <div style="width:48px;height:48px;border:4px solid #e5e7eb;border-top-color:#0a0a0a;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
        <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
      </div>` },
    ],
  },
  {
    id: "rating",
    name: "Rating",
    category: "Form",
    desc: "An input that lets users evaluate or score something by selecting a value from a visual scale, typically stars.",
    what: `<p>A Rating component allows users to provide a score — usually 1 to 5 stars — by clicking or tapping on a visual scale. It's one of the most universally recognized input patterns, used everywhere from product reviews to satisfaction surveys. The filled/unfilled star metaphor instantly communicates both the current value and the possible range. Some implementations support half-star increments for finer granularity.</p><p>Ratings can be interactive (input mode, where the user selects a score) or read-only (display mode, showing an average or existing score). In input mode, hovering over stars should preview the selection before committing. In display mode, ratings often pair with a count label ("4.2 out of 5 — 128 reviews"). The component should be accessible via keyboard, allowing arrow keys to adjust the value. Custom icons (hearts, thumbs, flames) can replace stars when the context calls for a different metaphor.</p>`,
    anatomy: [
      { title: "Icon Scale", desc: "A row of icons (stars by default) representing the full range of possible values." },
      { title: "Filled State", desc: "Icons filled up to the selected value, showing the current score." },
      { title: "Hover Preview", desc: "In input mode, icons fill on hover to preview the value before selection." },
      { title: "Value Label", desc: "Optional text showing the numeric score or review count." }
    ],
    use: [
      "Product and service reviews",
      "Customer satisfaction and feedback surveys",
      "Content quality ratings (articles, recipes, media)",
      "Skill or difficulty level indicators",
      "Quick sentiment capture in forms"
    ],
    avoid: [
      "When you need precise numeric input — use a Slider or Input instead",
      "For binary feedback — use a Switch or thumb up/down buttons",
      "When the scale has more than 10 points — the visual becomes cluttered",
      "For ranked ordering of multiple items — use a sortable list instead",
      "When ratings aren't actionable — showing them without context adds noise"
    ],
    icons: ["star", "heart", "thumbs-up"],
    states: [
      { name: "Empty", desc: "No value selected — all icons are unfilled." },
      { name: "Hover", desc: "Icons fill up to the hovered position, previewing the potential value." },
      { name: "Selected", desc: "A value has been chosen; icons are filled to that point." },
      { name: "Half Value", desc: "Supports half-increments for finer-grained scoring." },
      { name: "Read-only", desc: "Displays a score without allowing interaction." },
      { name: "Disabled", desc: "Non-interactive; visually muted." }
    ],
    prompt: `Create a Rating component with a row of star icons (default 5). Support interactive input mode with hover preview and click-to-select, plus a read-only display mode. Support half-star increments. Include keyboard navigation (arrow keys to adjust, Enter to confirm). Show an optional value label. Allow custom icons. Use design tokens for icon size, fill color, and empty color.`,
    related: ["slider", "input", "toggle"],
    aka: [
      { system: "Ant Design", term: "Rate" },
      { system: "Fluent", term: "Rating" },
          { system: "Flowbite", term: "Rating" },
          { system: "Cedar", term: "Rating" },
          { system: "Instructure UI", term: "Rating" },
    ],
    previews: [
      { label: "Interactive", content: `<div style="display:flex;flex-direction:column;gap:16px;padding:24px;min-height:120px;">
        <div style="display:flex;gap:4px;font-size:24px;cursor:pointer;">
          <span class="prev-star">★</span><span class="prev-star">★</span><span class="prev-star">★</span><span class="prev-star">★</span><span class="prev-disabled-text">★</span>
        </div>
        <div class="prev-text-dim">4 out of 5</div>
      </div>` },
      { label: "Read-only", content: `<div style="display:flex;flex-direction:column;gap:16px;padding:24px;min-height:120px;">
        <div class="prev-flex-row">
          <div style="display:flex;gap:2px;font-size:18px;">
            <span class="prev-star">★</span><span class="prev-star">★</span><span class="prev-star">★</span><span class="prev-star">★</span><span class="prev-disabled-text">★</span>
          </div>
          <span style="font-size:14px;font-weight:600;color:#333;">4.2</span>
          <span class="prev-desc">(128 reviews)</span>
        </div>
        <div class="prev-flex-row">
          <div style="display:flex;gap:2px;font-size:18px;">
            <span class="prev-star">★</span><span class="prev-star">★</span><span class="prev-star">★</span><span class="prev-disabled-text">★</span><span class="prev-disabled-text">★</span>
          </div>
          <span style="font-size:14px;font-weight:600;color:#333;">3.0</span>
          <span class="prev-desc">(42 reviews)</span>
        </div>
      </div>` },
    ],
  },
  {
    id: "tag",
    name: "Tag",
    category: "Data Display",
    desc: "A small label used to categorize, filter, or mark items with keywords, statuses, or metadata.",
    what: `<p>Tags are compact labels that represent attributes, categories, or metadata attached to an item. They appear as small pills or chips, often with the option to remove them. Tags help users scan and filter content — think keyword labels on articles, skill badges on profiles, or filter chips in search results.</p><p>Unlike Badges, which are numeric indicators, Tags carry textual meaning and are often interactive — users can add, remove, or click them to filter. Tags can be color-coded to convey category or status. When used as filter inputs, they typically appear in a horizontal row that wraps, with a clear affordance for removal (an "x" icon). Keep tag text short — one or two words — and limit the number of visible tags before truncating with a "+N more" overflow.</p>`,
    anatomy: [
      { title: "Label", desc: "Short text identifying the category, keyword, or attribute." },
      { title: "Remove Button", desc: "Optional close icon to delete the tag." },
      { title: "Icon", desc: "Optional leading icon or avatar for visual context." },
      { title: "Container", desc: "The pill-shaped wrapper with background color and border radius." }
    ],
    use: [
      "Categorizing content with keywords or topics",
      "Displaying selected filters that can be removed",
      "Showing metadata like status, type, or priority",
      "Tagging items in forms for multi-value inputs",
      "Grouping related items visually"
    ],
    avoid: [
      "For numeric counts or status dots — use Badge instead",
      "When the label is a full sentence — too long for a tag",
      "As navigation elements — use tabs or links",
      "When there are more than 10-15 tags — consider a different pattern",
      "For toggling between states — use Toggle Group"
    ],
    icons: ["tag", "x", "hash"],
    states: [
      { name: "Default", desc: "Standard appearance with label text." },
      { name: "Hover", desc: "Subtle background change on hover." },
      { name: "Focused", desc: "Focus ring visible for keyboard navigation." },
      { name: "Disabled", desc: "Non-interactive, visually muted." },
      { name: "Removable", desc: "Shows a close icon to remove the tag." }
    ],
    prompt: `Create a Tag component displayed as a small pill. Support variants: default, primary, success, warning, danger. Include an optional removable prop that shows an X button. Support an optional leading icon or avatar. Use design tokens for colors, padding, and border-radius.`,
    related: ["badge", "toggle-group", "input"],
    aka: [
      { system: "Ant Design", term: "Tag" },
      { system: "Chakra UI", term: "Tag" },
      { system: "Carbon", term: "Tag" },
      { system: "Fluent", term: "Tag" },
      { system: "PatternFly", term: "Label" },
      { system: "Polaris", term: "Tag" },
      { system: "USWDS", term: "Tag" },
      { system: "GOV.UK", term: "Tag" },
      { system: "Flowbite", term: "Badge" },
          { system: "NewsKit", term: "Tag" },
    ],
    previews: [
      { label: "Default", content: `<div style="display:flex;flex-wrap:wrap;gap:8px;padding:24px;">
        <span style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:16px;font-size:13px;background:#e5e7eb;color:#333;">Design</span>
        <span style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:16px;font-size:13px;background:#dbeafe;color:#1d4ed8;">React</span>
        <span style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:16px;font-size:13px;background:#dcfce7;color:#166534;">Published</span>
        <span style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:16px;font-size:13px;background:#fef3c7;color:#92400e;">Draft</span>
        <span style="display:inline-flex;align-items:center;gap:4px;padding:4px 10px;border-radius:16px;font-size:13px;background:#fee2e2;color:#991b1b;">Deprecated</span>
      </div>` },
      { label: "Removable", content: `<div style="display:flex;flex-wrap:wrap;gap:8px;padding:24px;">
        <span style="display:inline-flex;align-items:center;gap:6px;padding:4px 8px 4px 10px;border-radius:16px;font-size:13px;background:#e5e7eb;color:#333;">JavaScript <button style="border:none;background:none;cursor:pointer;font-size:14px;color:#666;padding:0;line-height:1;">&times;</button></span>
        <span style="display:inline-flex;align-items:center;gap:6px;padding:4px 8px 4px 10px;border-radius:16px;font-size:13px;background:#e5e7eb;color:#333;">TypeScript <button style="border:none;background:none;cursor:pointer;font-size:14px;color:#666;padding:0;line-height:1;">&times;</button></span>
        <span style="display:inline-flex;align-items:center;gap:6px;padding:4px 8px 4px 10px;border-radius:16px;font-size:13px;background:#e5e7eb;color:#333;">CSS <button style="border:none;background:none;cursor:pointer;font-size:14px;color:#666;padding:0;line-height:1;">&times;</button></span>
      </div>` },
    ],
  },
  {
    id: "empty-state",
    name: "Empty State",
    category: "Data Display",
    desc: "A placeholder shown when a view, list, or search has no content to display.",
    what: `<p>Empty State is what users see when a container has nothing to show — an empty inbox, a search with no results, a new dashboard with no data yet. Rather than showing a blank void, a well-designed empty state communicates why there's nothing here and what the user can do next. It turns a potentially confusing moment into a helpful one.</p><p>Good empty states include an illustration or icon, a concise message explaining the situation, and a clear call to action. "No projects yet — Create your first project" is more useful than just "No data." Empty states should feel intentional, not broken. They're also an opportunity to onboard new users by guiding them toward their first meaningful action.</p>`,
    anatomy: [
      { title: "Illustration", desc: "A visual — icon, illustration, or graphic — that reinforces the message." },
      { title: "Title", desc: "A short heading explaining the empty state." },
      { title: "Description", desc: "Supporting text with context or next steps." },
      { title: "Action", desc: "A primary button or link guiding the user to resolve the empty state." }
    ],
    use: [
      "When a list, table, or grid has no items to display",
      "After a search or filter returns zero results",
      "First-time user experiences before any data exists",
      "Error states where content failed to load",
      "When a feature is not yet configured or enabled"
    ],
    avoid: [
      "When data is loading — use Skeleton or Spinner instead",
      "For temporary states that resolve in seconds",
      "When content exists but is hidden by filters — show a filter-specific message",
      "As a permanent landing page — it should be a transitional state",
      "With overly complex illustrations that distract from the action"
    ],
    icons: ["inbox", "search", "file-plus", "folder-open"],
    states: [
      { name: "No Data", desc: "The collection is genuinely empty — no items exist yet." },
      { name: "No Results", desc: "A search or filter returned nothing — suggest clearing filters." },
      { name: "Error", desc: "Content failed to load — offer a retry action." },
      { name: "First Use", desc: "The user hasn't created anything yet — guide them to start." }
    ],
    prompt: `Create an Empty State component with a centered layout containing an optional illustration/icon, a title, a description, and an optional action button. Support variants for no-data, no-results, error, and first-use. The illustration should be optional and replaceable. Use design tokens for spacing, typography, and muted colors.`,
    related: ["skeleton", "spinner", "card"],
    aka: [
      { system: "Ant Design", term: "Empty" },
      { system: "PatternFly", term: "Empty state" },
      { system: "Lightning", term: "Empty State" },
      { system: "Polaris", term: "Empty state" },
      { system: "EUI", term: "Empty Prompt" },
    ],
    previews: [
      { label: "No data", content: `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;text-align:center;min-height:200px;">
        <div style="font-size:40px;margin-bottom:16px;opacity:0.3;">📂</div>
        <div style="font-size:16px;font-weight:600;color:#333;margin-bottom:8px;">No projects yet</div>
        <div style="font-size:13px;color:#666;margin-bottom:16px;">Create your first project to get started.</div>
        <button style="padding:8px 16px;border:none;border-radius:6px;background:#333;color:#fff;font-size:13px;cursor:pointer;font-family:inherit;">Create Project</button>
      </div>` },
      { label: "No results", content: `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;text-align:center;min-height:200px;">
        <div style="font-size:40px;margin-bottom:16px;opacity:0.3;">🔍</div>
        <div style="font-size:16px;font-weight:600;color:#333;margin-bottom:8px;">No results found</div>
        <div style="font-size:13px;color:#666;">Try adjusting your search or filters.</div>
      </div>` },
    ],
  },
  {
    id: "file-upload",
    name: "File Upload",
    category: "Form",
    desc: "An input that lets users select and upload files from their device via browse or drag-and-drop.",
    what: `<p>File Upload provides a way for users to attach files — documents, images, spreadsheets — to a form or application. It typically offers two interaction modes: a traditional "Browse" button that opens the native file picker, and a drag-and-drop zone where users can drop files directly from their file manager.</p><p>The component should clearly communicate accepted file types, size limits, and upload progress. After selection, files appear in a list with their name, size, and a remove option. For multiple files, show each individually with its own progress indicator. Error states should be specific — "File too large (max 10MB)" is more helpful than "Upload failed." Consider whether the upload happens immediately on selection or is deferred until form submission.</p>`,
    anatomy: [
      { title: "Drop Zone", desc: "The area where files can be dragged and dropped." },
      { title: "Browse Button", desc: "A button that opens the native file picker dialog." },
      { title: "Help Text", desc: "Accepted formats, size limits, and instructions." },
      { title: "File List", desc: "Selected files shown with name, size, progress, and remove action." }
    ],
    use: [
      "Uploading documents, images, or media in forms",
      "Importing data files like CSVs or spreadsheets",
      "Attaching files to messages or tickets",
      "Profile photo or avatar uploads",
      "Bulk file upload in content management systems"
    ],
    avoid: [
      "For simple text or numeric input — use Input instead",
      "When files should be captured live — use a camera input",
      "If only a URL is needed — use a text input for the link",
      "For very large files without chunked upload support",
      "When the upload destination isn't clear to the user"
    ],
    icons: ["upload", "file", "paperclip", "cloud-upload"],
    states: [
      { name: "Default", desc: "Ready to accept files — shows drop zone and browse button." },
      { name: "Drag Over", desc: "A file is being dragged over the drop zone — visual highlight." },
      { name: "Uploading", desc: "File is being uploaded — shows progress bar." },
      { name: "Complete", desc: "Upload finished successfully — file appears in the list." },
      { name: "Error", desc: "Upload failed — shows error message with retry option." },
      { name: "Disabled", desc: "Upload is not available." }
    ],
    prompt: `Create a File Upload component with a drag-and-drop zone and a browse button. Support accepted file types via an accept prop and max file size validation. Show selected files in a list with name, size, and remove button. Include upload progress indication. Support multiple file selection. Use design tokens for border style, colors, and spacing.`,
    related: ["input", "progress", "button"],
    aka: [
      { system: "Ant Design", term: "Upload" },
      { system: "Carbon", term: "File Uploader" },
      { system: "Paste", term: "File Uploader" },
      { system: "PatternFly", term: "Multiple file upload" },
      { system: "Evergreen", term: "File Uploader" },
      { system: "Dell", term: "File input" },
      { system: "USWDS", term: "File input" },
      { system: "Clarity", term: "File Picker" },
    ],
    previews: [
      { label: "Default", content: `<div style="padding:24px;">
        <div style="border:2px dashed #ccc;border-radius:8px;padding:32px;text-align:center;">
          <div style="font-size:24px;margin-bottom:8px;opacity:0.4;">☁️</div>
          <div style="font-size:14px;color:#333;margin-bottom:4px;">Drag files here or <span style="color:#2563eb;cursor:pointer;text-decoration:underline;">browse</span></div>
          <div style="font-size:12px;color:#999;">PNG, JPG, PDF up to 10MB</div>
        </div>
      </div>` },
    ],
  },
  {
    id: "search",
    name: "Search",
    category: "Form",
    desc: "A text input optimized for search queries, typically with a search icon and clear button.",
    what: `<p>Search is a specialized input field designed for finding content within an application or dataset. It typically features a magnifying glass icon, placeholder text like "Search...", and a clear button that appears when the field has a value. Unlike a generic text input, Search communicates its purpose instantly through visual cues.</p><p>Search can trigger results on every keystroke (live search), after a debounced pause, or on explicit submission. Results may appear in a dropdown below the input, navigate to a results page, or filter content in place. Consider adding keyboard shortcuts (like "/" or Cmd+K) to focus the search field. For large datasets, show result counts and highlight matching terms in the results.</p>`,
    anatomy: [
      { title: "Search Icon", desc: "A magnifying glass icon indicating the search purpose." },
      { title: "Input Field", desc: "The text input where users type their query." },
      { title: "Clear Button", desc: "An X button that appears when the field has content." },
      { title: "Results", desc: "Optional dropdown or panel showing matching results." }
    ],
    use: [
      "Finding content across an application",
      "Filtering lists, tables, or catalogs",
      "Global search with keyboard shortcut activation",
      "Searching within a specific context like a dropdown or dialog",
      "Site-wide or documentation search"
    ],
    avoid: [
      "When there are fewer than 10 items — simple scanning is faster",
      "As the only way to navigate — always provide browse/filter alternatives",
      "When search terms are highly specialized — add guided filters instead",
      "Without clear result feedback — always indicate matches or empty state",
      "For structured data entry — use form inputs with validation"
    ],
    icons: ["search", "x", "command"],
    states: [
      { name: "Empty", desc: "No query entered — shows placeholder text and search icon." },
      { name: "Focused", desc: "Input is focused — ready for typing." },
      { name: "Active", desc: "User is typing — may show live results." },
      { name: "Loading", desc: "Results are being fetched." },
      { name: "Results", desc: "Matching results are displayed." },
      { name: "No Results", desc: "Query returned no matches." }
    ],
    prompt: `Create a Search input component with a leading search icon and a trailing clear button that appears when the input has a value. Support a loading state with a spinner. Include debounced onChange and onSubmit callbacks. Use design tokens for sizing, colors, and border styles.`,
    related: ["input", "combobox", "dropdown-menu"],
    aka: [
      { system: "Carbon", term: "Search" },
      { system: "PatternFly", term: "Search input" },
      { system: "USWDS", term: "Search" },
      { system: "Polaris", term: "Search input" },
      { system: "Lightning", term: "Search" },
      { system: "Flowbite", term: "Search Input" },
    ],
    previews: [
      { label: "Default", content: `<div style="padding:24px;">
        <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid #ccc;border-radius:6px;background:#fff;">
          <span style="color:#999;font-size:14px;">🔍</span>
          <span style="color:#999;font-size:14px;flex:1;">Search components...</span>
        </div>
      </div>` },
      { label: "With value", content: `<div style="padding:24px;">
        <div style="display:flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid #2563eb;border-radius:6px;background:#fff;">
          <span style="color:#2563eb;font-size:14px;">🔍</span>
          <span style="color:#333;font-size:14px;flex:1;">accordion</span>
          <button style="border:none;background:none;cursor:pointer;color:#999;font-size:16px;padding:0;">&times;</button>
        </div>
      </div>` },
    ],
  },
  {
    id: "link",
    name: "Link",
    category: "Navigation",
    desc: "An inline text element that navigates the user to another page, section, or resource.",
    what: `<p>Links are the fundamental navigation primitive of the web. They connect pages, sections, and resources through clickable text. Unlike buttons, which perform actions, links navigate — they take the user somewhere else. This distinction matters for accessibility: screen readers announce links and buttons differently, and users have different expectations for each.</p><p>Links can be inline within paragraphs, standalone as navigation items, or combined with icons for external links. They should always look clickable — through color, underline, or both. The most accessible pattern is colored text with an underline. Avoid using "click here" as link text; instead, make the link text descriptive of the destination: "View documentation" not "Click here to view documentation."</p>`,
    anatomy: [
      { title: "Text", desc: "The clickable label describing the destination." },
      { title: "Icon", desc: "Optional icon — often an external link arrow for off-site links." },
      { title: "Underline", desc: "Visual indicator that the text is clickable." }
    ],
    use: [
      "Navigating to another page or section",
      "Linking to external resources or documentation",
      "Inline references within paragraph text",
      "Breadcrumb and navigation items",
      "Footer links and legal text"
    ],
    avoid: [
      "For actions that change state — use a Button instead",
      "With vague text like 'click here' or 'read more' — be descriptive",
      "Styled to look like a button when the action is navigation",
      "For triggering modals, dropdowns, or other UI — that's a button's job",
      "When too many links compete for attention on the same page"
    ],
    icons: ["external-link", "link", "arrow-right"],
    states: [
      { name: "Default", desc: "Standard appearance — colored and/or underlined." },
      { name: "Hover", desc: "Visual change on hover — typically underline or color shift." },
      { name: "Visited", desc: "Color change indicating the user has been to the destination." },
      { name: "Focused", desc: "Focus ring visible for keyboard navigation." },
      { name: "Disabled", desc: "Non-interactive, though disabled links are uncommon." }
    ],
    prompt: `Create a Link component that renders an anchor element with accessible defaults. Support variants: default, subtle, and external (with an arrow icon). Support inline and standalone usage. Include visited state styling. Use design tokens for link color, hover color, and underline style.`,
    related: ["button", "breadcrumb", "navigation-menu"],
    aka: [
      { system: "Carbon", term: "Link" },
      { system: "Clarity", term: "Link" },
      { system: "Fluent", term: "Link" },
      { system: "Chakra UI", term: "Link" },
      { system: "Paste", term: "Anchor" },
      { system: "Spectrum", term: "Link" },
      { system: "Polaris", term: "Link" },
    ],
    previews: [
      { label: "Default", content: `<div style="padding:24px;font-size:14px;line-height:1.8;color:#333;">
        <p>Learn more about <a href="#" onclick="event.preventDefault()" style="color:#2563eb;text-decoration:underline;">design systems</a> and how they help teams build consistent products.</p>
        <p style="margin-top:12px;"><a href="#" onclick="event.preventDefault()" style="color:#2563eb;text-decoration:underline;display:inline-flex;align-items:center;gap:4px;">View documentation <span style="font-size:12px;">↗</span></a></p>
      </div>` },
    ],
  },
  {
    id: "stepper",
    name: "Stepper",
    category: "Navigation",
    desc: "A visual indicator showing the user's progress through a multi-step process or wizard.",
    what: `<p>A Stepper shows where a user is within a sequential, multi-step workflow — like checkout, onboarding, or a configuration wizard. Each step is represented as a numbered or labeled node connected by lines, with visual states indicating completed, current, and upcoming steps. It gives users confidence about where they are, what they've done, and what's ahead.</p><p>Steppers can be horizontal (typical for desktop) or vertical (better for mobile or when steps have descriptions). Steps can be clickable to allow non-linear navigation, or locked to enforce a strict sequence. The current step should be visually prominent, completed steps should show a check mark, and upcoming steps should be muted. Keep step labels short — 2-3 words — and limit the total to 3-7 steps.</p>`,
    anatomy: [
      { title: "Step Indicator", desc: "A numbered circle or icon for each step." },
      { title: "Step Label", desc: "Short text describing the step." },
      { title: "Connector", desc: "A line connecting adjacent steps." },
      { title: "Description", desc: "Optional supporting text below the step label." }
    ],
    use: [
      "Multi-step forms like checkout or registration",
      "Onboarding flows that guide users through setup",
      "Configuration wizards with sequential steps",
      "Order tracking showing fulfillment progress",
      "Any linear process that benefits from progress visibility"
    ],
    avoid: [
      "For non-sequential navigation — use Tabs instead",
      "When there are more than 7 steps — consider grouping or simplifying",
      "For real-time progress of a single task — use Progress Bar",
      "When steps can be done in any order — steppers imply sequence",
      "For simple two-step flows — a stepper adds unnecessary complexity"
    ],
    icons: ["check", "circle", "arrow-right"],
    states: [
      { name: "Completed", desc: "Step is finished — shown with a check mark." },
      { name: "Current", desc: "The active step — visually prominent." },
      { name: "Upcoming", desc: "Future step — muted appearance." },
      { name: "Error", desc: "A step has a validation error — shown with an error indicator." },
      { name: "Disabled", desc: "Step cannot be accessed." }
    ],
    prompt: `Create a Stepper component that displays a horizontal row of steps with numbered indicators connected by lines. Support completed (check mark), current (highlighted), upcoming (muted), and error states. Allow steps to be clickable or locked. Support a vertical orientation variant. Use design tokens for colors, sizing, and connector styles.`,
    related: ["progress", "tabs", "pagination"],
    aka: [
      { system: "Material Design", term: "Stepper" },
      { system: "Ant Design", term: "Steps" },
      { system: "Paste", term: "Progress Steps" },
      { system: "Lightning", term: "Progress Indicator" },
      { system: "PatternFly", term: "Progress stepper" },
      { system: "USWDS", term: "Step indicator" },
      { system: "Clarity", term: "Stepper" },
      { system: "eBay", term: "Progress stepper" },
      { system: "Flowbite", term: "Stepper" },
      { system: "Forma 36", term: "ProgressStepper" },
    ],
    previews: [
      { label: "Horizontal", content: `<div style="display:flex;align-items:center;justify-content:center;padding:32px 24px;gap:0;">
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
          <div style="width:28px;height:28px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;">✓</div>
          <span style="font-size:12px;color:#333;">Account</span>
        </div>
        <div style="width:48px;height:2px;background:#2563eb;margin:0 4px;margin-bottom:24px;"></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
          <div style="width:28px;height:28px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;">2</div>
          <span style="font-size:12px;color:#333;font-weight:600;">Shipping</span>
        </div>
        <div style="width:48px;height:2px;background:#ddd;margin:0 4px;margin-bottom:24px;"></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
          <div style="width:28px;height:28px;border-radius:50%;background:#e5e7eb;color:#999;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;">3</div>
          <span style="font-size:12px;color:#999;">Payment</span>
        </div>
        <div style="width:48px;height:2px;background:#ddd;margin:0 4px;margin-bottom:24px;"></div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
          <div style="width:28px;height:28px;border-radius:50%;background:#e5e7eb;color:#999;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;">4</div>
          <span style="font-size:12px;color:#999;">Review</span>
        </div>
      </div>` },
    ],
  },
  {
    id: "banner",
    name: "Banner",
    category: "Feedback",
    desc: "A prominent, full-width message displayed at the top of a page or section to communicate important information.",
    what: `<p>Banners are page-level messages that span the full width of their container to deliver important, contextual information. Unlike Alerts which can appear anywhere, Banners are typically pinned to the top of a page or section and persist until dismissed or resolved. They communicate system status, feature announcements, warnings, or promotional content.</p><p>Banners support severity levels — informational, success, warning, and error — each with distinct colors and icons. They can be dismissible (with a close button) or persistent (staying until the underlying condition changes). Keep banner messages concise and actionable. If a banner contains a call to action, make it a clear link or button. Avoid stacking multiple banners — prioritize the most important one.</p>`,
    anatomy: [
      { title: "Icon", desc: "A severity icon indicating the type of message." },
      { title: "Message", desc: "Concise text explaining the situation." },
      { title: "Action", desc: "Optional button or link for the user to take action." },
      { title: "Dismiss", desc: "Optional close button to remove the banner." }
    ],
    use: [
      "System-wide announcements like maintenance windows",
      "Cookie consent or privacy notices",
      "Feature launches or new version announcements",
      "Important warnings that affect the current workflow",
      "Trial expiration or subscription status messages"
    ],
    avoid: [
      "For inline field-level feedback — use form validation instead",
      "When the message is temporary and auto-dismisses — use Toast",
      "For blocking actions that require a decision — use Alert Dialog",
      "Stacking multiple banners — prioritize the most critical one",
      "For marketing content that isn't genuinely important"
    ],
    icons: ["info", "alert-triangle", "check-circle", "x-circle"],
    states: [
      { name: "Info", desc: "Neutral informational message — blue." },
      { name: "Success", desc: "Positive outcome or confirmation — green." },
      { name: "Warning", desc: "Caution or potential issue — yellow." },
      { name: "Error", desc: "Critical problem requiring attention — red." },
      { name: "Dismissed", desc: "Banner has been closed by the user." }
    ],
    prompt: `Create a Banner component that spans the full width of its container. Support severity variants: info, success, warning, error with appropriate colors and icons. Include an optional dismiss button and an optional action link/button. Use design tokens for colors, padding, and icon sizing.`,
    related: ["alert", "toast", "alert-dialog"],
    aka: [
      { system: "Ant Design", term: "Alert" },
      { system: "Spectrum", term: "Alert Banner" },
      { system: "Momentum", term: "Banner" },
      { system: "Dell", term: "Message bar" },
      { system: "Polaris", term: "Banner" },
      { system: "eBay", term: "Banner" },
      { system: "USWDS", term: "Banner" },
      { system: "Clarity", term: "Banner" },
      { system: "Flowbite", term: "Banner" },
          { system: "NewsKit", term: "Banner" },
    ],
    previews: [
      { label: "Info", content: `<div style="padding:16px;">
        <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;">
          <span style="color:#2563eb;">ℹ️</span>
          <span style="font-size:14px;color:#1e40af;flex:1;">A new version of the design system is available.</span>
          <a href="#" onclick="event.preventDefault()" style="font-size:13px;color:#2563eb;font-weight:500;text-decoration:underline;">Update now</a>
        </div>
      </div>` },
      { label: "Warning", content: `<div style="padding:16px;">
        <div style="display:flex;align-items:center;gap:10px;padding:12px 16px;background:#fffbeb;border:1px solid #fde68a;border-radius:6px;">
          <span style="color:#d97706;">⚠️</span>
          <span style="font-size:14px;color:#92400e;flex:1;">Your trial expires in 3 days. Upgrade to continue using all features.</span>
          <button style="padding:4px 12px;border:none;border-radius:4px;background:#d97706;color:#fff;font-size:12px;cursor:pointer;font-family:inherit;">Upgrade</button>
        </div>
      </div>` },
    ],
  },
  {
    id: "meter",
    name: "Meter",
    category: "Feedback",
    desc: "A visual gauge that represents a scalar value within a known range, such as disk usage or password strength.",
    what: `<p>A Meter displays a value within a defined range, showing how much of something has been consumed, achieved, or remains. Unlike Progress (which shows completion of a task), Meter represents a static measurement — disk space used, password strength, signal strength, or battery level. The value has a clear minimum and maximum.</p><p>Meters typically use color to convey whether the current value is good (green), acceptable (yellow), or critical (red). The thresholds between these zones should be configurable. Some meters show the numeric value alongside the visual bar. The HTML <code>&lt;meter&gt;</code> element provides built-in semantics, but custom implementations offer more visual flexibility.</p>`,
    anatomy: [
      { title: "Track", desc: "The background bar representing the full range." },
      { title: "Fill", desc: "The colored portion showing the current value." },
      { title: "Label", desc: "Optional text showing the value or description." },
      { title: "Thresholds", desc: "Color zones indicating low, medium, and high ranges." }
    ],
    use: [
      "Disk or storage usage indicators",
      "Password strength indicators",
      "Battery or signal level displays",
      "Quota or limit consumption tracking",
      "Performance or health scores"
    ],
    avoid: [
      "For task completion — use Progress Bar instead",
      "When the range is unknown or infinite",
      "For precise data entry — use Slider or Number Input",
      "When the value changes in real-time rapidly — it becomes distracting",
      "Without context — always label what the meter measures"
    ],
    icons: ["gauge", "battery", "hard-drive"],
    states: [
      { name: "Low", desc: "Value is in the safe/low range — typically green." },
      { name: "Medium", desc: "Value is in the moderate range — typically yellow." },
      { name: "High", desc: "Value is in the critical/high range — typically red." },
      { name: "Full", desc: "Value has reached the maximum." }
    ],
    prompt: `Create a Meter component with a track and fill bar. Support min, max, value, low, high, and optimum props matching the HTML meter element semantics. Color the fill based on threshold zones (green/yellow/red). Show an optional label with the percentage or value. Use design tokens for colors, track height, and border radius.`,
    related: ["progress", "slider", "badge"],
    aka: [
      { system: "Spectrum", term: "Meter" },
      { system: "Paste", term: "Meter" },
      { system: "HeroUI", term: "Meter" },
          { system: "Instructure UI", term: "Metric" },
    ],
    previews: [
      { label: "Default", content: `<div style="display:flex;flex-direction:column;gap:16px;padding:24px;">
        <div>
          <div style="display:flex;justify-content:space-between;font-size:13px;color:#333;margin-bottom:4px;"><span>Storage</span><span>7.2 / 10 GB</span></div>
          <div style="height:8px;background:#e5e7eb;border-radius:4px;overflow:hidden;"><div style="width:72%;height:100%;background:#f59e0b;border-radius:4px;"></div></div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:13px;color:#333;margin-bottom:4px;"><span>CPU</span><span>23%</span></div>
          <div style="height:8px;background:#e5e7eb;border-radius:4px;overflow:hidden;"><div style="width:23%;height:100%;background:#22c55e;border-radius:4px;"></div></div>
        </div>
        <div>
          <div style="display:flex;justify-content:space-between;font-size:13px;color:#333;margin-bottom:4px;"><span>Memory</span><span>91%</span></div>
          <div style="height:8px;background:#e5e7eb;border-radius:4px;overflow:hidden;"><div style="width:91%;height:100%;background:#ef4444;border-radius:4px;"></div></div>
        </div>
      </div>` },
    ],
  }
];
