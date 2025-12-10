# ImportationDotCA - Next.js Website

Professional wholesale import/export website built with Next.js, TailwindCSS, and SwiperJS.

## 🚀 Quick Start

### Development
```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### Production Build
```bash
npm run build
```

## 📁 Project Structure

```
├── components/          # React components
│   ├── Header.js       # Top navigation
│   ├── Footer.js       # Bottom footer
│   ├── Hero.js         # Hero section
│   ├── GallerySwiper.js # Image gallery slider
│   ├── ContactForm.js  # Contact form
│   └── StructuredData.js # SEO structured data
├── pages/              # Next.js pages
│   ├── api/            # API routes
│   │   └── contact.js  # Email API endpoint
│   ├── _app.js         # Global app wrapper
│   ├── _document.js    # Document shell
│   ├── index.js        # Homepage
│   ├── contact.js      # Contact page
│   ├── wholesale-unlocked-phones.js
│   ├── luxury-chocolate-imports.js
│   └── ...
├── public/             # Static assets
│   ├── media/          # Images and media
│   ├── archive/        # Archived documents
│   ├── robots.txt      # SEO robots file
│   └── sitemap.xml     # SEO sitemap
├── lib/                # Utility functions
│   └── schema.js       # SEO schema generators
└── docs/               # Documentation
    ├── archive/        # Historical docs
    └── ...
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

### Environment Variables (Vercel)

Add these in Vercel Dashboard → Settings → Environment Variables:

- `RESEND_API_KEY` - Your Resend API key for email sending

### Email Configuration

Contact form emails are sent via Resend API to:
- `info@importationdot.ca` (primary)
- `reubencredit@gmail.com` (secondary/CC)

### Google Tag Manager

Update GTM ID in `pages/_document.js` (currently: `GTM-WX2LMHJB`).

## 📦 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Add environment variable: `RESEND_API_KEY`
3. Deploy automatically on push

### Manual Build

```bash
npm run build
```

Static files will be in `/out` directory.

## ✅ Features

- ✅ Next.js with API routes
- ✅ Edge-to-edge responsive layout
- ✅ Image gallery with Swiper
- ✅ Resend email integration
- ✅ SEO optimized with meta tags and schema markup
- ✅ Google Tag Manager integration
- ✅ Clean, professional design
- ✅ Accessible navigation

## 📧 Contact

For questions about this website:
- **Email**: info@importationdot.ca
- **Company**: ImportationDotCA Inc.

---

© 2025 ImportationDotCA Inc. All rights reserved.
