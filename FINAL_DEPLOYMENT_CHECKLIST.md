# 🚀 Final Deployment & QA Checklist - ImportationDotCA

**Date:** October 28, 2025  
**Reference:** PROJECT_STATE_COMPLETE.txt

---

## ✅ 1. FINAL QA REVIEW

### Pages Verification (7 Public Pages)
- [ ] **Homepage** (/)
  - Hero video loads and plays
  - Services section displays
  - Featured products slider works
  - Brand logos display (12 logos)
  - CTA buttons work
  
- [ ] **Products** (/chocolate-candy/)
  - Header text: "Chocolate & Candy Collection"
  - Gallery shows 12 products
  - Images from /media/candy/
  - CTA works
  
- [ ] **Home Décor** (/home-decor/)
  - Header text: "Home Décor Collection"
  - Gallery shows 6 products
  - Images from /media/decor/
  - Different from candy page
  
- [ ] **Hospitality** (/hospitality/)
  - Header text: "Hospitality Products"
  - 4 subsections display:
    * Cleaning & Maintenance (6 images)
    * Kitchen Equipment (6 images)
    * Lighting Fixtures (6 images)
    * Textiles & Linens (6 images)
  - Images from /media/hospitality/*
  
- [ ] **Brands** (/brands/)
  - Header text: "Whitelabel Partners"
  - 12 logos display in grid
  
- [ ] **Contact** (/contact/)
  - Form displays
  - Fields: Name, Email, Message
  - Email: info@importationdot.ca shown
  - Business hours shown
  
- [ ] **Thank You** (/thank-you/)
  - Success message displays
  - Back link works

### Navigation Verification
- [ ] **Desktop Header**
  - Logo + Company Name visible
  - Links: Products | Hospitality | Get Quote
  - Hover effects work
  
- [ ] **Mobile Header**
  - Hamburger menu opens
  - All links accessible
  - Menu closes after selection
  
- [ ] **Footer**
  - Logo + Company Name
  - Quick Links: Products, Hospitality, Get Quote
  - Contact email visible
  - Copyright year correct (2025)

### Image Loading Check
- [ ] No 404 errors in browser console
- [ ] Brand images load from /media/brands/
- [ ] Candy images load from /media/candy/
- [ ] Decor images load from /media/decor/
- [ ] Hospitality images load from subfolders
- [ ] Hero video loads at /media/hero.mp4

### Meta Tags Verification
- [ ] Each page has unique title
- [ ] Each page has meta description
- [ ] Canonical URLs set correctly
- [ ] Homepage has Open Graph tags

---

## ✅ 2. CONTACT FORM VERIFICATION

### Before Deployment
- [ ] Test form submission on localhost
- [ ] Verify redirect to /thank-you/
- [ ] Check no JavaScript errors

### Email Configuration
- [ ] Primary email: info@importationdot.ca
- [ ] Secondary email: reubencredit@gmail.com (backend only)
- [ ] Both emails receive submissions

### PHP File Setup
- [ ] File: public/send_email.php exists
- [ ] Permissions: 644
- [ ] Folder permissions: 755
- [ ] No syntax errors
- [ ] display_errors disabled in production

### Form Fields
- [ ] Name: required, text input
- [ ] Email: required, email validation
- [ ] Message: required, textarea
- [ ] Submit button works

---

## ✅ 3. SEO & ANALYTICS

### Google Tag Manager
- [ ] Open: pages/_document.js
- [ ] Replace: `GTM-XXXXXXX` with actual GTM ID
- [ ] Verify noscript iframe included
- [ ] Test GTM loading via Tag Assistant

### Sitemap
- [ ] File: public/sitemap.xml
- [ ] Contains 7 routes:
  * /
  * /chocolate-candy/
  * /home-decor/
  * /hospitality/
  * /brands/
  * /contact/
  * /thank-you/
- [ ] Valid XML format
- [ ] Last modified dates set

### Robots.txt
- [ ] File: public/robots.txt
- [ ] Allows: All crawlers
- [ ] Sitemap URL listed
- [ ] No blocking rules

### Structured Data
- [ ] Organization Schema on homepage
- [ ] ContactPoint Schema included
- [ ] Valid JSON-LD format
- [ ] Test with Google Rich Results Tool

---

## ✅ 4. DEPLOYMENT STEPS

### Pre-Build
```bash
# Ensure you're in project directory
cd "C:\Users\jtdgp\Desktop\Import Yuval\importationdot.ca_next_JS"

# Clean previous build
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
```

### Build Process
```bash
# Create production build
npm run build
```

**Expected Output:**
```
✓ Compiled successfully
✓ Generating static pages (9/9)
✓ Generating static pages complete
```

### Build Verification
- [ ] Build completes without errors
- [ ] /out folder created
- [ ] All pages in /out folder
- [ ] Media folder copied
- [ ] robots.txt in /out
- [ ] sitemap.xml in /out
- [ ] send_email.php in /out

### Upload to Hostinger
1. **Login to Hostinger cPanel**
   - Navigate to File Manager
   - Open public_html/ directory

2. **Backup Current Site** (if exists)
   - Create backup folder
   - Move existing files to backup

3. **Upload New Files**
   - Upload ALL contents of /out folder to public_html/
   - Structure should be:
     ```
     public_html/
     ├── index.html
     ├── chocolate-candy/
     ├── home-decor/
     ├── hospitality/
     ├── brands/
     ├── contact/
     ├── thank-you/
     ├── media/
     ├── _next/
     ├── robots.txt
     ├── sitemap.xml
     └── send_email.php
     ```

4. **Verify Permissions**
   - send_email.php: 644
   - Folders: 755
   - Files: 644

5. **Test Live Site**
   - Visit: https://importationdot.ca
   - Test all pages
   - Check images load
   - Test contact form

---

## ✅ 5. POST-DEPLOYMENT VERIFICATION

### Functional Testing
- [ ] Homepage loads with hero video
- [ ] All navigation links work
- [ ] Products page shows correct images
- [ ] Home décor page shows correct images
- [ ] Hospitality page shows all subsections
- [ ] Brands display correctly
- [ ] Contact form submits successfully
- [ ] Thank you page loads after form

### Image Verification
- [ ] Hero video plays automatically
- [ ] Product images load (no 404s)
- [ ] Brand logos load
- [ ] Hospitality images load
- [ ] No broken image icons

### Contact Form Testing
- [ ] Submit test message
- [ ] Check email delivery to info@importationdot.ca
- [ ] Check email delivery to reubencredit@gmail.com
- [ ] Verify redirect to thank-you page
- [ ] Confirm no PHP errors

### SEO Testing
- [ ] Run Lighthouse audit
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+
- [ ] Validate sitemap.xml
- [ ] Test robots.txt
- [ ] Verify GTM loads
- [ ] Check structured data

### Mobile Testing
- [ ] Test on mobile device
- [ ] Navigation menu works
- [ ] Images display correctly
- [ ] Form is usable
- [ ] Touch targets adequate

---

## ✅ 6. MONITORING & MAINTENANCE

### Immediate (First 24 Hours)
- [ ] Monitor email inbox
- [ ] Check server error logs
- [ ] Verify analytics tracking
- [ ] Test all user flows

### Weekly
- [ ] Check contact form submissions
- [ ] Review analytics data
- [ ] Monitor page load speeds
- [ ] Check for broken links

### Monthly
- [ ] Review Lighthouse scores
- [ ] Update sitemap if needed
- [ ] Backup site files
- [ ] Review email delivery

---

## ✅ 7. ROLLBACK PLAN (If Needed)

If issues occur after deployment:

1. **Revert Files**
   - Access File Manager
   - Delete new files
   - Restore backup

2. **Check Configuration**
   - Verify .htaccess settings
   - Check PHP version
   - Confirm email settings

3. **Contact Hostinger Support**
   - PHP email issues
   - Server configuration
   - Permission problems

---

## 📊 SUCCESS CRITERIA

✅ All 7 pages load successfully  
✅ No 404 errors in console  
✅ Contact form sends to both emails  
✅ GTM tracking works  
✅ Lighthouse scores 90+  
✅ Mobile responsive  
✅ Images load quickly  
✅ SEO metadata correct  

---

## 🎉 DEPLOYMENT COMPLETE

Once all checks pass:
- ✅ Site is live at https://importationdot.ca
- ✅ All functionality working
- ✅ Ready for customer use

**Last Updated:** October 28, 2025  
**Build Status:** Ready for deployment  
**QA Status:** Pending final verification

