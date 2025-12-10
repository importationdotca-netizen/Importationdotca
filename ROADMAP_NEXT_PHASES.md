# ImportationDotCA Roadmap — November 2025 Update

This roadmap captures everything remaining before launch, newly added product initiatives, and ongoing optimization work. Use it alongside `FINAL_DEPLOYMENT_CHECKLIST.md` for execution tracking.

## Immediate Focus (Now → Launch)
- Complete Phase 4 technical polish: WebP/lazy-loading for hero/catalog imagery, add `manifest.json`, confirm hero media optimization.
- Validate analytics after recent GTM/GA4 updates (test live tag firing once deployed).
- Run production build + lighthouse audit, fix regressions, then package static export for Hostinger.
- Prepare Hostinger upload bundle and verify DNS / SSL status before go-live.

## Phase 4 — Technical Polish & Performance
- Convert high-impact assets (`/media/hero/*`, catalog hero items, hospitality imagery) to WebP/AVIF and apply `loading="lazy"`.
- Generate responsive image sizes or implement `<Image>` component where practical.
- Add `manifest.json`, favicons fallback, and touch icons; validate PWA checklist.
- Audit fonts, reduce unused Tailwind utilities, and check Core Web Vitals (LCP/CLS/FID).
- Ensure hero video (`public/media/hero.mp4`) is deferred with poster image and `preload="none"` if still required.

## Phase 5 — Analytics & Tracking (Completed, Monitor Post-Launch)
- GTM container `GTM-WX2LMHJB` live; confirm GA4 property `G-SL23TYQNNK` receives signals after publish.
- Schedule post-launch tag review (Meta, LinkedIn, conversion pixels) as business requests arrive.

## Phase 6 — Final QA & Deployment
- `npm run build` → fix any warnings, regenerate `.next` artifacts, and run static export snapshot.
- Cross-browser QA (Chrome, Safari, Firefox, Edge) on desktop + mobile breakpoints.
- Validate forms (contact CTA), phone link tap engagement, and sitemap accessibility.
- Upload static bundle to Hostinger (public_html), confirm environment matches canonical URLs.
- Smoke test production site + analytics firing before promotion.

## Phase 7 — Post-Launch & Growth
- Monitor uptime, analytics baseline, and contact inquiries.
- Plan monthly content updates: case studies, blog hubs, or seasonal catalog highlights.
- Build backlink outreach + directory listings once site is stable.
- Schedule quarterly technical reviews (dependency updates, Tailwind/Next.js patches).

## Product & Content Enhancements
- **Chocolate Portfolio**: keep `/luxury-chocolate-imports` inventory fresh (seasonal gifting, duty-free packs). Consider downloadable sell sheet PDF.
- **Phones Program**: maintain 24-hour availability bar, add SKU matrix/table with storage variants, integrate inquiry form tailored to mobility buyers.
- **Hospitality Range**: expand imagery to show textiles, kitchen, and cleaning categories with testimonials.
- **Homepage**: monitor Featured Product mix; add quick links to category pages (Chocolate Imports, Phones, Hospitality) once imagery is optimized.
- **SEO**: craft supporting articles (e.g., “How to Import Luxury Chocolates into Canada”, “Carrier-Ready Devices for B2B Resellers”) linking to new category pages.

## Backlog / Nice-to-Have
- Marketing automation: integrate HubSpot or Mailchimp once contact volume justifies nurturing.
- Schema extensions: add `Product` JSON-LD for high-performing SKUs, `FAQ` schema for buyer questions.
- Pricing portal: gated wholesale catalog or quote configurator for returning partners.
- International expansion: evaluate bilingual (FR-CA) content translation ahead of Quebec campaigns.

_Last updated: 10 November 2025_

