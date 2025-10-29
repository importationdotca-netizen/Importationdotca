# Content Expansion Plan - ImportationDotCA
## Revised Roadmap: Build Complete → Then Deploy

**Strategy**: Keep site local until fully content-rich and SEO-ready before going live.

---

## 🟩 PHASE 1 — Content Expansion (Immediate Focus)

### Goal: Make Every Page Visually and Textually Complete

#### Page-by-Page Content Requirements:

| Page | What to Add | Status |
|------|-------------|--------|
| **Homepage** (`/`) | • 3-4 sentence intro paragraph under hero<br>• 1 sentence for each product category (Candy · Decor · Hospitality) | ⚠️ NEEDS CONTENT |
| **Chocolate & Candy** | • 150-200 words: imported brands, origin, bulk/wholesale info | ⚠️ NEEDS CONTENT |
| **Home Decor** | • 120-180 words: materials, craftsmanship, styles | ⚠️ NEEDS CONTENT |
| **Hospitality** | • 80-100 words per sub-section (Cleaning / Kitchen / Lighting / Textiles) | ⚠️ NEEDS CONTENT |
| **Brands** | • Short 1-line caption for each logo (what they produce/represent) | ⚠️ NEEDS CONTENT |
| **Contact** | • 3-4 sentences about partnerships, volume pricing, turnaround time | ⚠️ NEEDS CONTENT |
| **About Us** | • Company mission, experience, distribution scope<br>• **NEW PAGE TO CREATE** | ❌ NOT CREATED |

**Current Status**: Site has structure and images, but missing descriptive text content.

---

## 🟨 PHASE 2 — SEO + Schema Setup

### Goal: Make Google "See" Every Product and Section

#### Required Additions:

1. **Meta Tags** (Per Page):
   - Unique meta title
   - Unique meta description
   - og:title / og:description
   - og:image for each page
   - Twitter card tags

2. **JSON-LD Schema Blocks**:
   ```json
   - Organization (root, already exists)
   - Product schemas for candy/decor/hospitality items
   - LocalBusiness on /contact/
   - BreadcrumbList (global navigation)
   ```

3. **Image Optimization**:
   - Descriptive alt text for every image
   - Example: `alt="Ferrero Rocher 24-pack imported chocolate"`

4. **Canonical URLs**:
   - Add to all pages (some exist)
   - Include `hreflang="en-CA"` for Canadian market

**Current Status**: Basic SEO exists, needs comprehensive expansion.

---

## 🟧 PHASE 3 — Business / Trust Pages

### Must-Have Pages for Credibility:

1. **About Us** (`/about-us/`)
   - Company mission
   - Experience and history
   - Distribution scope
   - Team information

2. **Privacy Policy** (`/privacy-policy/`)
   - Data collection policy
   - Cookie usage
   - User rights
   - Contact for data requests

3. **Terms of Service** (`/terms-of-service/`)
   - Service terms
   - Limitation of liability
   - Payment terms
   - Shipping policies

4. **Certifications/Partners** (`/certifications/`)
   - Business certifications
   - Industry partnerships
   - Quality standards

**Action**: Add these pages to footer navigation links.

**Current Status**: None of these pages exist yet.

---

## 🟥 PHASE 4 — Technical Polish & Performance

### Image & Performance Optimization:

1. **Image Conversion**:
   - Convert all images > 400 KB → WebP format
   - Maintain original PNG/JPG as fallback
   - Target: < 200 KB per image

2. **Loading Optimization**:
   - Add `loading="lazy"` to all images (partially done)
   - Add `<link rel="preload" as="video">` for hero video
   - Optimize hero.mp4 file size

3. **PWA Setup**:
   - Create `manifest.json`
   - Add favicon set (16x16, 32x32, 180x180, 192x192, 512x512)
   - Theme color definitions

4. **Accessibility & SEO**:
   - Check heading hierarchy (h1 > h2 > h3)
   - Ensure all interactive elements have ARIA labels
   - Re-run Lighthouse — aim for 95+ score

**Current Status**: Basic optimization done, needs advanced polish.

---

## 🟦 PHASE 5 — Analytics & Tag Manager

### Tracking Setup:

1. **Google Tag Manager**:
   - Replace placeholder GTM ID with real one
   - Currently: `GTM-XXXXXXX` (placeholder)

2. **Google Analytics 4**:
   - Create GA4 property
   - Add tracking code
   - Set up conversion tracking for `/thank-you/`

3. **Event Tracking**:
   - Form submissions
   - Button clicks
   - Navigation interactions

**Current Status**: Placeholder GTM exists, needs real implementation.

---

## 🟪 PHASE 6 — Final QA + Deployment

### Pre-Deployment Checklist:

After all text + SEO + trust pages are complete locally:

- [ ] Run `npm run build && npm run export`
- [ ] Test locally (`npx serve out`)
- [ ] Verify all navigation links work
- [ ] Verify all images load
- [ ] Test contact form submission
- [ ] Check all meta tags present
- [ ] Verify schema markup
- [ ] Test responsive design on multiple devices
- [ ] Check Lighthouse scores (Performance 95+, others 100)
- [ ] Only then upload `/out` to Hostinger
- [ ] Re-verify all links, meta, schema, and emails on production

**Deployment Method**: Upload contents of `/out` folder to Hostinger `public_html/`

---

## 🟫 PHASE 7 — GitHub Push

### Push Complete Codebase to GitHub:

**Repository**: https://github.com/Rave-ux/importationdotca.git

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit with descriptive message
git commit -m "Full content + SEO release - ImportationDotCA"

# Add remote repository
git remote add origin https://github.com/Rave-ux/importationdotca.git

# Push to main branch
git push -u origin main
```

**Timing**: Push **right after** PHASE 4 (content + SEO + performance finished).
That way GitHub reflects a complete, production-ready build.

---

## 📊 Current Site Status Assessment

### ✅ What's Complete:
- Site structure and navigation
- 6 main pages created
- Image galleries implemented
- Swiper components functional
- Basic SEO meta tags
- Responsive design
- Static export working
- Contact form with PHP backend

### ⚠️ What's Missing (Critical for Launch):
- **Text content on all pages** (currently mostly placeholder)
- **About Us page** (doesn't exist)
- **Trust pages** (Privacy Policy, Terms, Certifications)
- **Comprehensive SEO** (schema markup, detailed descriptions)
- **Image alt text** (needs descriptive content)
- **Analytics setup** (currently placeholder)
- **Image optimization** (some images still large)

### 🎯 Recommendation:
**Do NOT deploy to production until all content is written and all trust pages are created.**

---

## 🚀 Recommended Action Plan

1. **THIS WEEK**: Write all text content for existing pages
2. **THIS WEEK**: Create About Us page
3. **NEXT WEEK**: Create trust pages (Privacy, Terms, etc.)
4. **NEXT WEEK**: Expand SEO and schema markup
5. **NEXT WEEK**: Optimize images and performance
6. **AFTER ALL CONTENT DONE**: Deploy to production
7. **AFTER DEPLOYMENT**: Push to GitHub

**Target Launch Date**: TBD based on content completion

---

## 📝 Next Steps

Would you like me to:
1. Start writing the text content for each page?
2. Create the About Us page structure?
3. Begin setting up trust pages?
4. Expand SEO and schema markup?
5. All of the above?

Let me know which phase you'd like to tackle first!

