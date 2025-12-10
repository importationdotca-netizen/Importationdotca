# SEO / Content Audit — November 2025

Scope: all public marketing pages except `privacy-policy` and `terms-of-service`.

## Metadata Snapshot
| Page | Title | Title Length | Meta Description Present | Notes |
| --- | --- | --- | --- | --- |
| `/` | ImportationDotCA Inc. \| Wholesale Decor & Confectionery Importers | 65 | ✅ | Title slightly long (trim to ≤60). |
| `/wholesale-unlocked-phones` | Wholesale Unlocked Devices \| Professional Mobility Electronics Supply | 76 | ✅ | Title long; add `og:` meta & schema. |
| `/hospitality` | Hospitality Products \| ImportationDotCA Inc. | 48 | ✅ | Good; add OG/Twitter tags, schema. |
| `/home-decor` | (needs review) | — | ✅ | Verify keywords after imagery update. |
| `/chocolate-candy` | (needs review) | — | ✅ | Consider SKU-focused keywords. |
| `/luxury-chocolate-imports` | (needs review) | — | ✅ | Add canonical; tighten copy. |
| `/brands` | Our Brands \| ImportationDotCA Inc. | 38 | ✅ | Good but add OG tags + alt text improvements. |
| `/about-us` | About Us \| ImportationDotCA Inc. | 33 | ✅ | Add structured data (AboutPage / Organization). |
| `/contact` | Contact Us \| ImportationDotCA Inc. | 35 | ✅ | Add `ContactPage` + location/contact schema. |

**Action**: Confirm the three “needs review” titles (pages not opened yet) and adjust to ≤60 chars with unique focus keywords. Ensure every page declares OG/Twitter meta.

## Heading & Content Observations
- Home: strong H1, but service cards replicate copy used elsewhere. Opportunity to inject category keywords (“Wholesale Hospitality Supply Programs” etc.).
- Wholesale phones: H1 aligns with search intent; add supporting H2s describing “Flagship 5G Smartphones”, “Enterprise Device Deployment”, etc.
- Hospitality: Clear H1; image alt text already descriptive. Add unique intro paragraphs per gallery section to reduce repetition.
- Brands: H2 references chocolate only; consider separating verticals (chocolate vs. mobility) or clarifying page scope.
- Contact/About: Add brief keyword-rich intro ahead of feature lists to reinforce expertise.

## Structured Data Gaps
- Only the home page currently injects JSON-LD (`Organization`). All other pages require:
  - `WebPage` (with `@type` overrides like `Service`, `AboutPage`, `ContactPage` where relevant).
  - `BreadcrumbList` for deeper navigation (e.g., `/wholesale-unlocked-phones`, `/luxury-chocolate-imports`).
  - `FAQPage` where new FAQs will be authored (phones, hospitality, candy).
  - `Product` or `Service` markup for core offering sections (ensure required fields).

## Copy & Content Enhancements
- Add 3–5 FAQ entries to high-intent pages (phones, hospitality, candy) addressing availability, lead times, compliance, MOQs.
- Introduce short testimonials or case snippets—ideal for About or Home—providing unique, trust-building content.
- Ensure entry-level phone imagery matches copy (planned swap to Galaxy/Moto assets).
- For accessories section, use a true accessory flat lay for clarity.

## Internal Linking Opportunities
- Link between related verticals (e.g., phones → accessories, hospitality → décor) within body copy.
- Add “Featured categories” block on the home page pointing to key revenue pages with keyword anchors.
- Consider a mini-sitemap in the footer grouping categories by industry (Food, Hospitality, Mobility).

## Technical / Performance To-Dos
- Convert remaining large JPG hero images to WebP/AVIF where feasible; confirm lazy loading on galleries beyond first viewport.
- Audit bundled JS/CSS to ensure components like Swiper load only where needed.
- Re-run Lighthouse after imagery updates; track metrics in roadmap deliverables.

## Next Steps for Phase 1
1. Finalize title/meta adjustments for all pages (note lengths in spreadsheet).
2. Document existing headings/keywords and identify copy refresh needs.
3. Begin drafting FAQs and testimonial snippets for inclusion in Phase 3.
4. Prepare JSON-LD component structure for Phase 2 implementation.

_Last updated: 11 Nov 2025_

