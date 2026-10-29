# Meenakshi Traders — Business Website

A production-ready, high-performance, responsive business and lead-generation website for **Meenakshi Traders**, an agricultural products, cattle feed, grain, and livestock feed trading business in Tamil Nadu, India.

Built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**, fully bilingual in **Tamil (தமிழ்)** and **English**.

---

## 🌾 Business Profile

- **Business Name**: Meenakshi Traders (ஸ்ரீ மீனாட்சி டிரேடர்ஸ்)
- **Category**: Cattle Feed Wholesale & Retail, Branded Feeds, Agricultural Grains, Traditional Millets, Rice Varieties, and Oil Cakes.
- **Location**: Tamil Nadu, India
- **Google Maps Listing**: [https://share.google/zduC0I0J4WuZrcNup](https://share.google/zduC0I0J4WuZrcNup)
- **Primary Contacts**:
  - **Arunachalam A**: +91 94438 88039 | `arunachalam1032@gmail.com` | WhatsApp: [+919443888039](https://wa.me/919443888039)
  - **Sathish A**: +91 99408 16288 | `meenakshitraders1981@gmail.com` (Alt: `sathisharunachalam1208@gmail.com`) | WhatsApp: [+919940816288](https://wa.me/919940816288)

---

## 🚀 Key Features

1. **Bilingual User Experience (Tamil & English)**:
   - Full Tamil typography using Google Fonts **Noto Sans Tamil**.
   - Interactive language toggle supporting instant switching between Tamil and English.
   - Bilingual product names, category descriptions, and navigation.

2. **Real Agricultural Product Catalogue**:
   - 6 Core Categories:
     - Branded Cattle Feeds (KNC Krishi Nutrition, SKM, KS, Santhi)
     - Bran & Feed By-products (Thuvudu / Feed Bran)
     - Rice & Rice Products (Amman Ponni Rice)
     - Grains & Millets (Cholam / Sorghum, Kambu / Pearl Millet, Bajra, Keppai / Ragi, Dry Red Chilli)
     - Oil Cakes & Feed Ingredients (Groundnut Cake / Kadalai Punnakku, Cottonseed, Cottonseed Cake, Sesame Cake)
     - Feed-Grade Grains (Feed-Grade Cholam)
   - Real-time live search matching Tamil, English, and Brand names.
   - Category filtering pills with smooth horizontal scrolling.

3. **Dynamic WhatsApp Enquiry Engine**:
   - Every product card features an "Enquire on WhatsApp" action.
   - Automatically formats product-specific prefilled messages in Tamil or English:
     - *Tamil*: `"வணக்கம் Meenakshi Traders. எனக்கு [பொருள் பெயர்] தேவை. தற்போதைய விலை, கிடைக்கும் அளவு மற்றும் பேக்கிங் விவரங்களைத் தெரிவிக்கவும்."*
     - *English*: *"Hello Meenakshi Traders, I am interested in [Product Name]. Please share the current price, available quantities, and packaging details."*
   - Interactive contact chooser modal allows the customer to route enquiries directly to Arunachalam A or Sathish A.

4. **Wholesale & Retail Network Section**:
   - Targeted cards for Dairy Farmers & Cattle Owners, Retail Shopkeepers, and Bulk Wholesale Buyers.

5. **Direct Lead Generation**:
   - Clean, verified `tel:`, `mailto:`, and `https://wa.me/` links.
   - Dedicated contact cards for each partner.
   - Floating WhatsApp button with dual-contact selector popup.
   - Mobile-optimized sticky action bar with one-tap Call, WhatsApp, Products, and Map buttons.

6. **SEO & Structured Data**:
   - Schema.org `LocalBusiness` JSON-LD with verified data.
   - Valid Open Graph, Twitter cards, meta descriptions, `robots.txt`, and `sitemap.xml`.

---

## 🛠 Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 (Custom Agricultural Brand Palette)
- **Icons**: Lucide React
- **Fonts**: Noto Sans Tamil & Inter (Google Fonts)
- **Deployment Target**: Render Static Site (Zero backend dependencies)

---

## 📂 Project Structure

```
d:\meenakshi-traders-website\
├── index.html                     # HTML template, preloaded fonts, SEO metadata, JSON-LD
├── package.json                   # Dependencies and npm scripts
├── tsconfig.json                  # TypeScript configuration
├── vite.config.ts                 # Vite bundler configuration
├── tailwind.config.js             # Brand color system and font families
├── postcss.config.js
├── public/
│   ├── favicon.svg                # Brand emblem SVG favicon
│   ├── robots.txt                 # Search crawler rules
│   ├── sitemap.xml                # XML sitemap template
│   └── images/                    # Verified local agricultural product photography
├── src/
│   ├── main.tsx                   # React DOM entry
│   ├── App.tsx                    # Root application component
│   ├── index.css                  # Global styles, Tailwind base, Tamil typography
│   ├── types/
│   │   └── index.ts               # Core TypeScript interfaces
│   ├── data/
│   │   ├── siteConfig.ts          # Central business configuration (Contacts, Address, Maps URL)
│   │   ├── categories.ts          # 6 product categories
│   │   ├── products.ts            # Detailed product records & brand partner data
│   │   ├── faqs.ts                # Practical FAQ items
│   │   └── translations.ts        # Tamil and English UI translation dictionary
│   ├── context/
│   │   └── LanguageContext.tsx    # State management for Tamil/English toggle
│   ├── components/
│   │   ├── Logo.tsx               # Scalable agricultural SVG emblem
│   │   ├── TopBar.tsx             # Contact notification strip & language toggle
│   │   ├── Navbar.tsx             # Sticky responsive navigation with mobile drawer
│   │   ├── Hero.tsx               # Two-column editorial hero with authentic image
│   │   ├── TrustHighlights.tsx    # 4 business trust pillars
│   │   ├── CategoriesSection.tsx  # Product category showcase
│   │   ├── CategoryCard.tsx       # Interactive category cards
│   │   ├── FeaturedBrands.tsx     # KNC, SKM, KS, Santhi showcase
│   │   ├── ProductCard.tsx        # Responsive product card with image fallback
│   │   ├── ProductCatalogue.tsx   # Search, filters, and dynamic grid
│   │   ├── ProductEnquiryModal.tsx# WhatsApp contact chooser & message preview
│   │   ├── WholesaleSection.tsx   # Wholesale & retail cards + bulk enquiry
│   │   ├── AboutSection.tsx       # Honest, authentic business story
│   │   ├── WhyChooseUs.tsx        # 4 practical trade advantages
│   │   ├── FAQSection.tsx         # Interactive accordion FAQ
│   │   ├── ContactSection.tsx     # Arunachalam & Sathish cards + Google Maps card
│   │   ├── Footer.tsx             # Brand footer, copyright, and bilingual greeting
│   │   ├── FloatingWhatsApp.tsx   # Fixed WhatsApp button with contact popup
│   │   └── MobileActionBar.tsx    # Fixed bottom action bar on mobile viewports
│   └── utils/
│       └── whatsapp.ts            # WhatsApp URL formatting and message generator
├── scripts/
│   ├── download-images.js         # Automated image acquisition and verification script
│   └── verify-site.js             # Comprehensive 12-phase automated audit suite
├── image-manifest.md              # Image attribution and license documentation
└── README.md                      # Comprehensive developer and deployment guide
```

---

## 💻 Local Development & Build

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Type Checking
```bash
npx tsc --noEmit
```

### 4. Build for Production
```bash
npm run build
```
The compiled, minified production assets will be output to the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```
Open [http://localhost:4173](http://localhost:4173) to inspect the built application.

### 6. Run Quality & Verification Audit
```bash
npx vite-node scripts/verify-site.js
```

---

## 📝 How to Update Business Information

The website is designed so that non-technical owners or developers can easily edit business details without touching complex UI code:

### 1. Update Phone Numbers, Emails, or Address
Open [`src/data/siteConfig.ts`](file:///d:/meenakshi-traders-website/src/data/siteConfig.ts):
- Modify `contacts` array to change phone numbers, email addresses, or roles.
- Modify `address` object when the exact street number or door address is finalized.
- Update `googleMapsUrl` if the Google Maps listing URL changes.

### 2. Add or Edit Products
Open [`src/data/products.ts`](file:///d:/meenakshi-traders-website/src/data/products.ts):
- Add a new `ProductItem` object to the `products` array with `id`, `nameTa`, `nameEn`, `category`, `brand`, descriptions, and `image` path.
- The new product will automatically appear in the catalogue, category filters, and search bar!

### 3. Add or Replace Product Images
- Place the image file in [`public/images/`](file:///d:/meenakshi-traders-website/public/images/).
- Set the `image` path in `src/data/products.ts` or `src/data/categories.ts` (e.g. `"/images/my-product.jpg"`).
- Document the source and license in [`image-manifest.md`](file:///d:/meenakshi-traders-website/image-manifest.md).

### 4. Update FAQs
Open [`src/data/faqs.ts`](file:///d:/meenakshi-traders-website/src/data/faqs.ts) to add or edit questions and answers in Tamil and English.

---

## 🌐 Render Deployment Guide (Static Site)

This project is pre-configured for seamless deployment as a **Render Static Site**.

### Step 1: Push Code to GitHub
1. Initialize git and commit your files:
   ```bash
   git init
   git add .
   git commit -m "feat: complete production-ready Meenakshi Traders website"
   ```
2. Create a new repository on your GitHub account (e.g., `meenakshi-traders-website`).
3. Link and push your repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/meenakshi-traders-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Create Render Static Site
1. Log in to [https://dashboard.render.com](https://dashboard.render.com).
2. Click **New +** in the top navigation bar and select **Static Site**.
3. Connect your GitHub account and select the `meenakshi-traders-website` repository.
4. Enter the deployment configuration:
   - **Name**: `meenakshi-traders` (or preferred name)
   - **Branch**: `main`
   - **Root Directory**: leave blank (defaults to repository root)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
5. Click **Create Static Site**.

### Step 3: Verify Live Deployment
1. Render will automatically run `npm install`, compile the Vite build (`npm run build`), and deploy the `dist/` folder.
2. Once complete, Render provides a free, SSL-secured live URL (e.g. `https://meenakshi-traders.onrender.com`).
3. Test all sections, WhatsApp buttons, language toggle, and image assets on the live link.

### Step 4: (Optional) Connect Custom Domain
1. In the Render Dashboard under your static site, go to **Settings** -> **Custom Domains**.
2. Click **Add Custom Domain** and enter your domain name (e.g., `meenakshitraders.com`).
3. Follow the DNS instructions provided by Render to add a `CNAME` or `A` record with your domain registrar.
4. Render automatically provisions a free Let's Encrypt SSL certificate.

### Step 5: Update Canonical URL & Sitemap
Once your live domain is active:
1. Update `https://meenakshi-traders.onrender.com` in [`public/sitemap.xml`](file:///d:/meenakshi-traders-website/public/sitemap.xml).
2. Re-deploy by committing the change to GitHub.

---

## 📄 License & Attribution

- Brand materials, trademarks, and business identity are the property of **Meenakshi Traders**.
- Code is released under the MIT License.
- Sourced photographs and their respective Creative Commons / Public Domain attributions are detailed in [`image-manifest.md`](file:///d:/meenakshi-traders-website/image-manifest.md).
