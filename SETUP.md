# Aptismech Corporation LLP — Website Setup Guide

## 🚀 Quick Start

```bash
cd aptismech-website
npm install
npm start
```

Open http://localhost:3000 to view the website.

## 📸 Product Images Setup (IMPORTANT)

You must copy the 3 product images you shared into:

```
aptismech-website/public/images/
```

Rename them exactly as follows:
- `mechanical-press.jpg` → Your C-Frame Power Press image (blue machine with two flywheels)
- `pneumatic-press.jpg`  → Your green hydraulic shear machine image  
- `hydro-pneumatic.jpg`  → Your red/cream shear machine image

Without these images, the website will show styled placeholder boxes.

## 📁 File Structure

```
src/
├── components/
│   ├── Navbar.js / Navbar.css    → Fixed glassmorphism navbar
│   ├── Footer.js / Footer.css    → Footer with floating WhatsApp button
│   └── MachineImage.js           → Smart image with fallback
├── pages/
│   ├── Home.js / Home.css        → Full landing page with inquiry form
│   ├── About.js / About.css      → Corporate profile, team, location
│   ├── Products.js / Products.css → Product catalogue with modal details
│   ├── Services.js / Services.css → Industrial services portfolio
│   └── Contact.js / Contact.css  → Contact form + map embed
└── index.css                     → Global variables, utilities, animations
```

## 🎨 Brand Colors

| Name | Hex |
|------|-----|
| Primary Deep Blue | `#0B3C5D` |
| Accent Amber-Orange | `#F5A623` |
| Background White | `#FFFFFF` |
| Dark Text | `#2D3748` |

## 📞 Contact Details (Pre-configured)

- **Sales** — Mr. Ankit Dholakiya: +91 70465 00555
- **Operations** — Mr. Mayurbhai Jani: +91 88666 16585
- **Email**: AptisMech.Corporation.llp@gmail.com
- **WhatsApp**: Linked to +91 88666 16585

## 🏗️ Build for Production

```bash
npm run build
```

The `build/` folder is ready to deploy on any hosting (Netlify, Vercel, cPanel, etc.).

## ✨ Features

- ✅ 5 Pages: Home, About, Products, Services, Contact
- ✅ Glassmorphism design + Deep Blue & Amber theme
- ✅ Product cards with hover effects + click-open detail modals
- ✅ WhatsApp API integration (all forms send to WhatsApp)
- ✅ Floating WhatsApp button on all pages
- ✅ Fully responsive — mobile, tablet, desktop
- ✅ SEO optimized with meta tags & structured data
- ✅ AM logo watermark on content sections
- ✅ Google Maps embed on Contact page
- ✅ Product comparison table
- ✅ Filter tabs on Products page
