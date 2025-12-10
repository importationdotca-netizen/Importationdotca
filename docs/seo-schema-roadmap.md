# SEO & Schema Upgrade Roadmap

This roadmap captures the front-end, SEO, and structured data enhancements we plan to implement across the site (excluding the legal pages: `privacy-policy` and `terms-of-service`). It consolidates the finishes discussed so the work can be tracked and executed methodically.

## Phase 1 — Discovery & Audit
- **Metadata inventory**: Export every page’s `<title>`, meta description, and canonical tag. Identify duplicates, missing entries, or lengths outside 50–60 (title) and 120–155 (description) characters.
- **Heading structure check**: Confirm a single `h1` per page and gather current `h2`/`h3` usage to spot hierarchy gaps or keyword opportunities.
- **Content alignment review**: Map primary keywords to pages (e.g., `wholesale unlocked phones`, `hospitality supply imports`) and note sections needing refreshed copy, FAQs, or comparison tables.
- **Technical baseline**: Run Lighthouse (mobile + desktop) and record Core Web Vitals, image payload, unused JS/CSS. Flag heavy pages (hero video, large galleries) for optimization.

## Phase 2 — Structured Data Foundation
- **Core schema roll-out**:
  - `Organization` schema on `_app` or layout for global contact details, social links, and logo.
  - `BreadcrumbList` schema where relevant (multi-level pages like hospitality, chocolate catalog).
  - `Service` schema for major offering pages (`wholesale-unlocked-phones`, `hospitality`, `home-decor`, etc.) with service areas and audience.
- **Page-type specific schema**:
  - `WebPage` enhancements (page name + description) applied site-wide.
  - `FAQPage` schema for sections with Q&A content or newly added buyer guidance.
  - `Product` or `Offer` schema for highlight blocks featuring specific device categories (ensure compliant data fields: name, description, image, availability).
- **Automation prep**: Draft shared utility or JSON-LD component to inject schema via `<Head>` to avoid duplication and simplify maintenance.

## Phase 3 — Content & Visual Enhancements
- **Image SEO/filtering**:
  - Finalize descriptive file names (already started for Apple/brand assets) and add keyworded alt text.
  - Convert remaining JPG/PNG hero imagery to optimized WebP/AVIF, except logos that require PNG transparency.
- **Copy upgrades**:
  - Enrich category intros with key differentiators, sourcing regions, and compliance notes.
  - Add 3–5 question FAQ blocks to core revenue pages to capture long-tail queries.
  - Introduce short case study/testimonial blurbs where possible.
- **Design refinements**:
  - Implement secondary accent color and consistent imagery treatment (studio shots for mobility, warm lifestyle for hospitality).
  - Refresh spacing on tablet breakpoints (brand grids, product cards) and add subtle hover/fade interactions for cards/logos.
  - Introduce outlined/ghost secondary button style and refine button hierarchy versus primary CTAs.
  - Add subtle reveal animations (fade/slide) for section entries and hover states to enhance polish.
  - Increase line-height for long-form body copy and experiment with alternate subhead weights for hierarchy.

## Phase 4 — Internal Linking & Navigation
- **Cross-linking plan**: Add contextual links between related categories (phones ↔ accessories, hospitality ↔ decor) using keyword-rich anchors.
- **Footer/nav updates**: Ensure each key service has at least one navigation link; add quick links or mini-sitemap in footer.
- **Breadcrumb UX**: Surface breadcrumbs on deeper pages to reinforce hierarchy and improve crawlability.

## Phase 5 — Performance & Validation
- **Asset optimization**: Lazy-load non-critical media, review third-party scripts, and ensure Swiper/other heavy components load conditionally.
- **Schema validation**: Use Google Rich Results Test and Schema.org validator per page. Integrate checks into CI or a manual QA checklist.
- **Analytics & monitoring**: Confirm Google Search Console, Core Web Vitals tracking, and any uptime/performance monitors reflect the new changes.

## Deliverables & Tracking
- Updated meta/heading matrix spreadsheet.
- Centralized schema component or utilities with documented usage.
- Revised copy blocks (FAQs, case studies, CTA refinements) for each priority page.
- Image optimization log noting conversions/compressions.
- Lighthouse before/after comparison report.
- Validation checklist results (schema, CWV, accessibility).

## Exclusions
- `privacy-policy` and `terms-of-service` remain untouched to preserve legal text integrity.

## Next Steps
1. Assign owners to Phase 1 audit items and compile findings.
2. Prioritize schema roll-out based on traffic/value pages.
3. Schedule design/content updates once imagery selections are finalized.
4. Plan QA sprint (schema validation + Lighthouse) before deployment.

