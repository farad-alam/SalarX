# SalarX — Clothing Shop Website Implementation Plan

## Overview

**SalarX** is a clothing shop located in New Market, Chapainawabgonj, Rajshahi, Bangladesh. The website will allow users to browse products, view details, add items to a cart, and check out via a WhatsApp-based manual payment order system.

**Tech Stack:** Next.js 15 (App Router), TypeScript  
**Code Style:** Decoupled · Component-based · DRY · Single Source of Truth

> [!NOTE]
> Next.js **v16** does not yet exist as a stable release. The latest stable is **v15** (App Router). This plan uses Next.js 15 with the App Router, which supports all the SSG/ISR/Server Components features you listed. Please confirm if you intended v15 or have a specific version in mind.

---

## Key Decisions & Design Direction

- **Product Data Source:** Initial phase uses static JSON (`src/data/products.ts`). We will build the data layer so it can be easily swapped for a database later.
- **Payment Methods:** bKash, Nagad, and Rocket will be listed as manual payment options.
- **Hosting:** Vercel.
- **Image Strategy:** We will generate placeholder images or use high-quality free resources (Unsplash) to mock up the design.
- **Design Aesthetic:** Premium, Luxury, Big & Bold. Targeted at young men for trending fashion.
  - **Colors:** High-contrast monochrome. Deep Onyx (`#0A0A0A`) backgrounds, Ivory/Off-White (`#F8F8F6`) for soft contrast, and Slate for accents.
  - **Typography:** Big, bold sans-serifs. *Clash Display* (or *Syne*) for statement headings. *Inter* for perfectly legible body copy.

---

## Home Page Structure & Design Plan

Based on research of top premium men's streetwear brands (e.g., SSENSE, MR PORTER, Kith, Represent), the home page must feel editorial, visual-first, and highly curated. It needs to be "Big & Bold".

### Section Breakdown (Top to Bottom)

1. **The Hero (The Statement)**
   - **Layout:** Full viewport height (`100vh`).
   - **Content:** A striking, high-quality full-bleed editorial image (e.g., a model wearing a trending outfit looking away). Very minimal text.
   - **Typography:** Huge, bold headline (e.g., "ELEVATE YOUR EVERYDAY").
   - **Interaction:** A single, sharp, solid black or white "SHOP NOW" button. Subtle parallax effect on scroll.

2. **Trending Now / New Arrivals (The Carousel)**
   - **Layout:** Edge-to-edge horizontal scrolling carousel.
   - **Design:** Large product cards. No borders. Just the image, brand/name, and price in a clean, sans-serif font.
   - **Interaction:** Images subtly zoom on hover to show material details.

3. **Category Bento Grid (The Exploration)**
   - **Layout:** An asymmetrical masonry or "Bento Box" grid.
   - **Content:** 3-4 blocks highlighting key categories (e.g., a tall block for "Outerwear", a wide block for "Premium Tees", a smaller block for "Accessories").
   - **Design:** Each block is a high-quality lifestyle image with the category name overlaid in bold typography. Entire block acts as a link.

4. **Brand Ethos / Editorial Block (The Story)**
   - **Layout:** Split screen (50/50). One side is a stunning image, the other is text.
   - **Content:** A short, punchy paragraph about SalarX's commitment to quality and trending fashion.
   - **Typography:** Large, airy paragraph text. Lots of negative space to feel luxurious.

5. **"Shop the Look" / Street Style (Social Proof)**
   - **Layout:** 4-column grid of square images.
   - **Content:** Street-style photos. Hovering reveals a sleek "Shop this look" overlay.

6. **Minimalist Footer**
   - **Layout:** Clean, spacious grid.
   - **Content:** Quick links, WhatsApp CTA (prominent), Payment icons (bKash, Nagad, Rocket), and the Google Maps placeholder.

---

## Proposed Changes — Phase by Phase

---

### Phase 1 — Project Scaffold & Design System

**Goal:** Bootstrap the project with a clean, production-ready structure and a complete design system.

#### Tasks

- `[NEW]` Initialize Next.js 15 app with TypeScript, App Router, ESLint, and Prettier
- `[NEW]` Configure `next.config.ts` — image domains, redirects, compression headers
- `[NEW]` Setup folder structure (see below)
- `[NEW]` `src/styles/globals.css` — CSS custom properties: color palette, typography scale, spacing, shadows, breakpoints
- `[NEW]` `src/styles/tokens.ts` — TypeScript design tokens (single source of truth for colors, fonts, spacing)
- `[NEW]` `src/lib/constants.ts` — Brand constants: name, phone, WhatsApp URL builder, location, social links
- `[NEW]` Configure Google Fonts (e.g., **Hind Siliguri** for Bengali support + **Inter** for UI)
- `[NEW]` `public/robots.txt` — Crawlability rules
- `[NEW]` `public/sitemap.xml` (dynamic, generated via `next-sitemap`)

#### Folder Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (metadata, fonts)
│   ├── page.tsx                # Home page
│   ├── products/
│   │   ├── page.tsx            # Products listing
│   │   └── [slug]/
│   │       └── page.tsx        # Product detail (SSG)
│   ├── cart/
│   │   └── page.tsx            # Cart page
│   ├── checkout/
│   │   └── page.tsx            # Checkout page
│   └── api/                    # API routes (if needed)
├── components/
│   ├── ui/                     # Atoms: Button, Badge, Input, Icon
│   ├── layout/                 # Header, Footer, Nav, MobileMenu
│   ├── product/                # ProductCard, ProductGrid, ProductDetail, ImageGallery
│   ├── cart/                   # CartItem, CartSummary, CartDrawer
│   └── checkout/               # OrderForm, PaymentInstructions, WhatsAppButton
├── context/
│   └── CartContext.tsx         # Global cart state (React Context + useReducer)
├── hooks/
│   ├── useCart.ts
│   └── useLocalStorage.ts
├── lib/
│   ├── constants.ts
│   ├── whatsapp.ts             # WhatsApp message builder
│   └── utils.ts
├── data/
│   └── products.ts             # Product data (or CMS fetch functions)
├── types/
│   └── index.ts                # All shared TypeScript types/interfaces
└── styles/
    └── globals.css
```

---

### Phase 2 — Core Data Layer & Types

**Goal:** Define the data model and product data source before building any UI.

#### Tasks

- `[NEW]` `src/types/index.ts` — Define all shared interfaces:
  ```ts
  Product, ProductVariant, CartItem, Order, Category
  ```
- `[NEW]` `src/data/products.ts` — Static product data with full type safety (can be replaced by CMS later without changing UI)
- `[NEW]` `src/lib/whatsapp.ts` — WhatsApp URL builder:
  - Takes `Order` object → formats a clean message → returns `wa.me` URL
- `[NEW]` `src/context/CartContext.tsx` — Cart state with:
  - `useReducer` for actions: `ADD_ITEM`, `REMOVE_ITEM`, `UPDATE_QTY`, `CLEAR_CART`
  - Persistence via `localStorage`
- `[NEW]` `src/hooks/useCart.ts` — Typed hook to consume `CartContext`

---

### Phase 3 — Layout & Navigation

**Goal:** Build the persistent shell of the site — Header, Footer, and Navigation.

#### Components

| File | Purpose |
|---|---|
| `components/layout/Header.tsx` | Logo, Nav links, Cart icon with item count badge |
| `components/layout/MobileMenu.tsx` | Hamburger drawer menu for mobile |
| `components/layout/Footer.tsx` | Brand info, address, phone, WhatsApp link, copyright |
| `components/layout/Nav.tsx` | Navigation link list (reused in Header & MobileMenu) |
| `app/layout.tsx` | Root layout wrapping all pages with Header + Footer + CartProvider |

#### Features
- Sticky header with scroll-aware shadow
- Cart item count badge (live from context)
- Responsive mobile hamburger menu
- Footer with Google Map placeholder, address, WhatsApp CTA

---

### Phase 4 — Product Pages

**Goal:** Product listing and detail pages with full SEO and performance optimization.

#### Pages & Components

| File | Rendering | Purpose |
|---|---|---|
| `app/products/page.tsx` | SSG | All products grid with category filter |
| `app/products/[slug]/page.tsx` | SSG + `generateStaticParams` | Product detail |
| `components/product/ProductCard.tsx` | — | Card with image, name, price, Add to Cart |
| `components/product/ProductGrid.tsx` | — | Responsive grid layout |
| `components/product/ProductDetail.tsx` | — | Full detail: gallery, description, size picker, quantity, Add to Cart |
| `components/product/ImageGallery.tsx` | — | Thumbnail + main image viewer |
| `components/product/CategoryFilter.tsx` | — | Filter bar (All, Men, Women, Kids, etc.) |

#### SEO per Product Page
```ts
export async function generateMetadata({ params }): Promise<Metadata> {
  // Unique title, description, OG image per product
}
```

#### Performance
- `next/image` for all product images (auto WebP, lazy load, blur placeholder)
- Static generation for all product routes at build time
- ISR fallback for new products added post-build

---

### Phase 5 — Cart System

**Goal:** Full cart experience with persistent state.

#### Components

| File | Purpose |
|---|---|
| `components/cart/CartDrawer.tsx` | Slide-in cart sidebar (desktop) |
| `components/cart/CartItem.tsx` | Item row: image, name, qty controls, remove |
| `components/cart/CartSummary.tsx` | Subtotal, item count, Checkout CTA |
| `app/cart/page.tsx` | Full cart page (mobile-friendly fallback) |

#### Features
- Add/remove/update quantity
- Cart persisted in `localStorage` (survives page refresh)
- Empty cart illustration + "Continue Shopping" CTA
- Real-time total calculation

---

### Phase 6 — Checkout & WhatsApp Order

**Goal:** Collect customer info, show payment instructions, and send the order to WhatsApp.

#### Pages & Components

| File | Purpose |
|---|---|
| `app/checkout/page.tsx` | Checkout page |
| `components/checkout/OrderForm.tsx` | Name, phone, address fields (with validation) |
| `components/checkout/PaymentInstructions.tsx` | Manual payment details (bKash/Nagad/etc.) |
| `components/checkout/OrderSummary.tsx` | Cart items recap + total |
| `components/checkout/WhatsAppButton.tsx` | "Place Order on WhatsApp" CTA button |
| `src/lib/whatsapp.ts` | Builds formatted WhatsApp message with full order |

#### WhatsApp Message Format
```
🛍️ *New Order — SalarX*

*Customer:* Rahim Uddin
*Phone:* 01711111111
*Address:* Chapainawabgonj

*Items:*
• Panjabi (White, L) × 2 — ৳1,200
• T-Shirt (Black, M) × 1 — ৳450

*Total: ৳2,850*

*Payment:* bKash — 01700000000

Thank you! 🙏
```

#### Flow
1. User fills checkout form
2. Reviews order summary
3. Reads payment instructions
4. Clicks "Place Order on WhatsApp" → opens `wa.me` link with pre-filled message
5. Confirmation message shown: "Your order has been sent!"

---

### Phase 7 — SEO & Metadata

**Goal:** Full SEO implementation across all pages.

#### Implementation

| Item | Implementation |
|---|---|
| `app/layout.tsx` | Root metadata: title template, description, OG defaults |
| Per-page `generateMetadata()` | Unique title, description, canonical URL |
| Open Graph | Image, title, description, site name, locale (`bn_BD`) |
| Twitter Cards | `summary_large_image` card type |
| `robots.txt` | Allow all, disallow `/checkout`, `/cart` |
| `sitemap.xml` | Auto-generated via `next-sitemap` (all product slugs included) |
| Structured Data | `application/ld+json` — `LocalBusiness` + `Product` schema |
| Canonical URLs | Set per page to avoid duplicate content |

#### `LocalBusiness` JSON-LD Schema
```json
{
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  "name": "SalarX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "New Market",
    "addressLocality": "Chapainawabgonj",
    "addressRegion": "Rajshahi",
    "addressCountry": "BD"
  },
  "telephone": "+8801700000000"
}
```

---

### Phase 8 — Performance & Core Web Vitals

**Goal:** Achieve excellent Lighthouse scores and Core Web Vitals.

#### Checklist

| Optimization | Implementation |
|---|---|
| **LCP** | Hero image preloaded (`priority` prop on `next/image`), no render-blocking resources |
| **INP** | Minimal client JS; heavy components lazy-loaded with `dynamic()` |
| **CLS** | All images have explicit `width`/`height`; no layout shift from fonts (font-display: swap) |
| Image Optimization | `next/image` — WebP/AVIF auto-conversion, responsive sizes |
| Font Optimization | `next/font/google` — preloaded, zero CLS |
| Code Splitting | Automatic per-route; large components via `dynamic()` |
| Bundle Analysis | `@next/bundle-analyzer` added as dev dependency |
| HTTP Headers | `next.config.ts` — Cache-Control for static assets, security headers |
| Compression | Gzip/Brotli via Vercel or configured hosting |

---

### Phase 9 — Mobile Responsiveness

**Goal:** Pixel-perfect mobile experience with no horizontal scroll.

#### Approach
- CSS Grid + Flexbox — no fixed pixel widths
- Breakpoints defined as CSS custom properties:
  - Mobile: < 640px
  - Tablet: 640px – 1024px  
  - Desktop: > 1024px
- Touch-friendly tap targets (min 44×44px)
- Mobile hamburger nav
- Swipeable image gallery on product detail
- Cart drawer → full-page cart on mobile
- Readable base font size (min 16px)

---

### Phase 10 — Polish, Testing & Deployment

**Goal:** Final QA, accessibility checks, and production deployment.

#### Tasks
- [ ] Lighthouse audit (target: 90+ all categories)
- [ ] Test WhatsApp order flow end-to-end
- [ ] Cross-browser test (Chrome, Firefox, Safari, Edge)
- [ ] Mobile device test (Android + iOS)
- [ ] Validate all metadata with [Open Graph Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Validate structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Submit sitemap to Google Search Console
- [ ] Configure Vercel project settings (env vars, custom domain)
- [ ] Add Google Map embed when link is provided
- [ ] Replace placeholder phone number

---

## Verification Plan

### Automated
- `next build` — zero build errors, no type errors
- `next-sitemap` — sitemap generated with all product URLs
- `@next/bundle-analyzer` — no unexpectedly large bundles

### Manual
- Full user journey: Home → Products → Product Detail → Add to Cart → Checkout → WhatsApp
- Verify WhatsApp message is correctly formatted on a real device
- Lighthouse audit in Chrome DevTools (Incognito mode)
- Mobile responsive check on real device or BrowserStack
- Validate `robots.txt` and `sitemap.xml` are publicly accessible

---

## Deployment Recommendation

| Service | Recommendation |
|---|---|
| **Hosting** | [Vercel](https://vercel.com) — zero-config Next.js hosting, free tier available |
| **Domain** | Purchase `.com.bd` for local credibility or `.com` for wider reach |
| **Images CDN** | Vercel Image Optimization (built-in) |
| **Analytics** | Vercel Analytics or Google Analytics 4 |
