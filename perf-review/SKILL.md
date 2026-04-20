---
name: perf-review
description: |
  Reviews code for performance issues. Use when Core Web Vitals are below target,
  when profiling reveals bottlenecks, or before shipping features that handle large
  datasets or high-traffic paths.
triggers:
  - perf review
  - performance review
  - check performance
  - is this fast enough
  - core web vitals
allowed-tools:
  - Bash
  - Read
  - Grep
  - Glob
  - AskUserQuestion
---

# /perf-review — Performance Review

Measure before optimizing. Profile first, identify the actual bottleneck, fix it, measure again.

---

## Core Web Vitals Targets

| Metric | Good | Needs Work | Poor |
|--------|------|------------|------|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | ≤ 4.0s | > 4.0s |
| **INP** (Interaction to Next Paint) | ≤ 200ms | ≤ 500ms | > 500ms |
| **CLS** (Cumulative Layout Shift) | ≤ 0.1 | ≤ 0.25 | > 0.25 |

INP replaced FID as a Core Web Vital. It measures responsiveness to all user interactions (clicks, taps, keyboard), not just the first one. Poor INP = heavy JavaScript blocking the main thread on interaction.

---

## Step 1: Scope the diff

```bash
git diff origin/$(git symbolic-ref refs/remotes/origin/HEAD 2>/dev/null | sed 's|refs/remotes/origin/||' || echo main)...HEAD --name-only
```

Flag files touching: data fetching, rendering loops, bundle entry points, image handling, event handlers.

---

## Step 2: Automated checks

```bash
# Check bundle size if configured
npx bundlesize --config bundlesize.config.json 2>/dev/null || true

# Look for N+1 query patterns
grep -rn "findMany\|findAll\|\.map.*await\|for.*await" --include="*.ts" --include="*.js" . | grep -v node_modules | head -20

# Check for missing pagination
grep -rn "findMany\|findAll" --include="*.ts" --include="*.js" . | grep -v "take:\|limit:\|per_page\|pageSize\|node_modules" | head -10

# Check for images without dimensions
grep -rn "<img " --include="*.tsx" --include="*.jsx" --include="*.html" . | grep -v "width=\|height=" | head -10
```

---

## Step 3: Review by category

### N+1 Queries (Backend)

Flag any loop that contains an `await db.*` call:
```
# BAD pattern — one query per item
for (const task of tasks) {
  task.owner = await db.users.findUnique(...)
}

# GOOD — batch with include/join
await db.tasks.findMany({ include: { owner: true } })
```

### INP / Main Thread Blocking (Frontend)

Flag event handlers doing expensive synchronous work:
- Sorting/filtering large arrays on every keystroke → debounce + move off main thread
- DOM queries inside animation frames → cache references
- Uncontrolled React re-renders on interaction → check `useMemo`/`useCallback` usage, stable object references

```bash
# Check for potentially expensive event handlers
grep -rn "onClick\|onChange\|onKeyDown" --include="*.tsx" --include="*.jsx" . | grep -v node_modules | head -20
```

For each hit: does the handler do synchronous work proportional to data size? If yes, flag it.

### LCP / Bundle Size (Frontend)

```bash
# Check for large unoptimized imports
grep -rn "^import.*from 'lodash'" --include="*.ts" --include="*.tsx" . | grep -v node_modules | head -10

# Check for missing lazy loading on routes
grep -rn "import.*from.*pages\|import.*from.*views" --include="*.ts" --include="*.tsx" . | grep -v "lazy\|node_modules" | head -10
```

Red flags:
- Full lodash imported instead of individual functions
- Route components not lazy-loaded
- Images missing `loading="lazy"` and `width`/`height` attributes
- No code splitting at route boundaries

### Missing Caching (Backend)

Flag expensive reads without caching:
```bash
grep -rn "findFirst\|findOne\|SELECT" --include="*.ts" --include="*.js" . | grep -v "cache\|redis\|memcache\|node_modules" | head -20
```

Frequently-read, rarely-changed data (config, static lists) should be cached with a TTL.

### Images (Frontend)

Check hero/LCP images:
- `fetchpriority="high"` on above-the-fold images
- `loading="lazy"` + `decoding="async"` on below-the-fold images
- `width` and `height` attributes to prevent CLS
- `srcset` + `sizes` for responsive images

---

## Step 4: Report findings

Group by impact:

**High (fix before ship):** N+1 queries on hot paths, missing pagination on list endpoints, synchronous heavy computation in INP-critical event handlers
**Medium (fix soon):** Missing lazy loading on routes, images without dimensions causing CLS, unoptimized imports
**Low (track):** Missing caching on cold paths, missing bundle size CI check

For each finding: file:line, what's wrong, estimated impact, how to fix.

---

## Checklist

```
Backend
- [ ] No N+1 queries in data fetching (use include/join)
- [ ] List endpoints have pagination
- [ ] Frequently-read data cached with TTL
- [ ] Database queries on hot paths have indexes

Frontend
- [ ] Core Web Vitals within Good thresholds (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1)
- [ ] Route-level code splitting in place
- [ ] Hero/LCP image has fetchpriority="high"
- [ ] Below-fold images have loading="lazy" and dimensions
- [ ] No synchronous heavy work in interaction handlers
- [ ] Bundle size hasn't regressed (CI check if configured)

General
- [ ] Before/after measurements exist for any optimization
- [ ] No optimization without profiling data
- [ ] Existing tests still pass
```
