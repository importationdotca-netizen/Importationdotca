# ImportationDotCA - Next.js Static Website

Professional wholesale import/export website built with Next.js, TailwindCSS, and SwiperJS.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```

The static export will be in the `/out` directory.

## 📁 Project Structure

```
├── components/          # React components
│   ├── Header.js       # Top navigation
│   ├── Footer.js       # Bottom footer
│   ├── Hero.js         # Hero section
│   ├── GallerySwiper.js # Image gallery slider
│   └── ContactForm.js  # Contact form
├── pages/              # Next.js pages
│   ├── _app.js         # Global app wrapper
│   ├── _document.js    # Document shell
│   ├── index.js        # Homepage
│   ├── contact.js      # Contact page
│   ├── thank-you.js    # Thank you page
│   ├── home-decor.js   # Home decor products
│   └── chocolate-candy.js # Candy products
├── public/             # Static assets
│   ├── media/          # Images and media
│   ├── send_email.php  # PHP mail handler
│   ├── robots.txt      # SEO robots file
│   └── sitemap.xml     # SEO sitemap
└── styles/             # CSS files
    └── globals.css     # Global TailwindCSS styles
```

## 🎨 Design System

- **Base Font**: Inter, 16px
- **Colors**: 
  - Background: `slate-950` (dark)
  - Text: `white`
  - Accent: `#e3b341` (golden yellow)
- **Layout**: Edge-to-edge, no rounded corners, no hover zooms
- **Container**: `max-w-7xl mx-auto px-4`

## 🔧 Configuration

### Email Configuration
Update email recipients in `public/send_email.php`:
```php
$to = "info@importationdot.ca, reubencredit@gmail.com";
```

### Google Tag Manager
Update GTM ID in `pages/_document.js` (replace `GTM-XXXXXXX`).

## 📦 Deployment to Hostinger

1. Build the static site:
   ```bash
   npm run build
   ```

2. Upload contents of `/out` directory to `public_html/` on your Hostinger hosting.

3. Verify `send_email.php` is in the root of `public_html/`.

4. Test the contact form and verify email delivery.

## ✅ Features

- ✅ Fully static site (no Node.js runtime required)
- ✅ Edge-to-edge responsive layout
- ✅ Image gallery with Swiper
- ✅ PHP contact form handler
- ✅ SEO optimized with meta tags and schema markup
- ✅ Google Tag Manager integration ready
- ✅ Clean, professional design
- ✅ No animations or hover zooms
- ✅ Accessible navigation

## 📧 Contact

For questions about this website:
- **Email**: info@importationdot.ca
- **Company**: ImportationDotCA Inc.

---

© 2025 ImportationDotCA Inc. All rights reserved.
