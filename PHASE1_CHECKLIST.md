# ✅ Phase 1: Vercel Migration Checklist

**Current Phase:** Phase 1 - Deploy to Vercel  
**Status:** Ready to start  
**Timeline:** Week 1

---

## 🎯 Phase 1 Goal

Migrate hosting from Hostinger to Vercel with **ZERO URL changes**. All URLs stay exactly the same.

---

## ❓ FAQ: Do I Need 301 Redirects Now?

**Answer: NO!**

- ✅ **Phase 1:** Keep URLs the same → No redirects needed
- ✅ **Phase 3:** Change URLs → Then we'll add 301 redirects

The current `vercel.json` only has a www → non-www redirect, which is fine and doesn't affect your main URLs.

---

## 📋 Step-by-Step Checklist

### Step 1: Deploy to Vercel

- [ ] Go to https://vercel.com and sign in
- [ ] Click "Add New Project" (or "Import Git Repository")
- [ ] Find repository: `importationdotca-netizen/Importationdotca`
- [ ] Click "Import"
- [ ] Verify settings:
  - [ ] Framework: Next.js (should auto-detect)
  - [ ] Root Directory: `./` (default)
  - [ ] Build Command: `npm run build` (default)
  - [ ] Output Directory: (leave empty - Vercel handles this automatically)
  - [ ] Install Command: `npm install` (default)
- [ ] Click "Deploy"
- [ ] Wait for build to complete (1-2 minutes)
- [ ] Note the preview URL (e.g., `importationdotca-xxxxx.vercel.app`)

### Step 2: Test Preview Deployment

- [ ] Visit the preview URL
- [ ] Test homepage loads
- [ ] Test a few pages load correctly
- [ ] Check for any build errors in Vercel logs

### Step 3: Add Resend API Key

- [ ] Go to your Vercel project
- [ ] Click "Settings" → "Environment Variables"
- [ ] Click "Add New"
- [ ] Enter:
  - **Key:** `RESEND_API_KEY`
  - **Value:** `re_KJ9PVCts_Ew8oatKqreYpWujgiNkrzwYa`
  - **Environments:** 
    - [ ] Production
    - [ ] Preview
    - [ ] Development
- [ ] Click "Save"
- [ ] Vercel will auto-redeploy (or manually trigger redeploy)

### Step 4: Add Custom Domain

- [ ] In Vercel project → "Settings" → "Domains"
- [ ] Click "Add Domain"
- [ ] Enter: `importationdot.ca`
- [ ] Click "Add"
- [ ] Vercel will show DNS configuration needed
- [ ] **Note the DNS records Vercel shows you** (you'll need these for Cloudflare)

### Step 5: Update Cloudflare DNS

**Important:** Keep Cloudflare as your DNS provider. We're just pointing it to Vercel.

- [ ] Log into Cloudflare dashboard
- [ ] Select domain: `importationdot.ca`
- [ ] Go to "DNS" → "Records"
- [ ] Find the A or CNAME record currently pointing to Hostinger
- [ ] Update it:
  - **If A record:** Change IP address to Vercel's IP (Vercel will show you)
  - **If CNAME:** Change target to Vercel's CNAME (e.g., `cname.vercel-dns.com`)
- [ ] **Keep Cloudflare proxy ON** (orange cloud icon) ✅
- [ ] **DO NOT change MX records** (email must keep working)
- [ ] Save changes

### Step 6: Wait for DNS Propagation

- [ ] Wait 5-30 minutes for DNS to propagate
- [ ] Check DNS propagation: https://dnschecker.org
- [ ] Enter: `importationdot.ca`
- [ ] Verify DNS points to Vercel globally

### Step 7: Verify Site Works

- [ ] Visit `https://importationdot.ca`
- [ ] Verify SSL certificate is active (green lock)
- [ ] Test all pages:
  - [ ] Homepage (`/`)
  - [ ] Contact (`/contact/`)
  - [ ] Wholesale Phones (`/wholesale-unlocked-phones/`)
  - [ ] Chocolate (`/luxury-chocolate-imports/`)
  - [ ] Hospitality (`/hospitality/`)
  - [ ] Home Decor (`/home-decor/`)
  - [ ] Brands (`/brands/`)
  - [ ] About (`/about-us/`)
- [ ] Check all images load
- [ ] Test navigation menu
- [ ] Test footer links

### Step 8: Test Contact Form

- [ ] Go to `/contact/` page
- [ ] Fill out contact form:
  - Name: Test User
  - Email: your-test-email@example.com
  - Message: Test message
- [ ] Submit form
- [ ] Verify redirect to `/thank-you/` page
- [ ] Check email inbox: `info@importationdot.ca`
- [ ] Check email inbox: `reubencredit@gmail.com`
- [ ] Verify email was received at both addresses

### Step 9: Verify Google Search Console

- [ ] Log into Google Search Console
- [ ] Select property: `importationdot.ca`
- [ ] Check "Coverage" report
- [ ] Verify no new errors
- [ ] Check "Performance" report
- [ ] Verify site is still indexed
- [ ] Request re-indexing of homepage (optional)

### Step 10: Final Verification

- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Test on mobile device
- [ ] Test on different browsers (Chrome, Firefox, Safari)
- [ ] Verify email still works (send test email to yourself)
- [ ] Check Vercel analytics (if enabled)
- [ ] Document any issues found

---

## ✅ Success Criteria

Phase 1 is complete when:

- ✅ Site loads from Vercel at `importationdot.ca`
- ✅ All pages work correctly
- ✅ Contact form sends emails successfully
- ✅ No 404 errors
- ✅ Google Search Console shows no new errors
- ✅ Rankings remain stable (check in 1 week)

---

## ⚠️ Common Issues & Solutions

### Issue: Site doesn't load after DNS change
**Solution:** Wait longer (up to 48 hours), clear browser cache, check DNS propagation

### Issue: Contact form doesn't send emails
**Solution:** 
- Verify `RESEND_API_KEY` is set in Vercel
- Check Vercel function logs for errors
- Verify Resend domain is verified

### Issue: SSL certificate not working
**Solution:** 
- Vercel automatically provisions SSL
- Wait 5-10 minutes after adding domain
- Check Cloudflare SSL/TLS settings (should be "Full" or "Full (strict)")

### Issue: Some pages show 404
**Solution:**
- Check Vercel build logs
- Verify all pages are in `pages/` directory
- Check `vercel.json` for any incorrect redirects

---

## 📞 Next Steps After Phase 1

Once Phase 1 is complete:

1. **Wait 2-3 weeks** for stabilization
2. **Monitor Google Search Console** daily
3. **Document any issues**
4. **Prepare for Phase 3** (URL improvements)

---

**Ready to start?** Begin with Step 1: Deploy to Vercel!

