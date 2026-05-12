# Spartan Media — Performance Media Buying Agency Website

A modern, minimalist, high-performance media buying agency website built with **Next.js 14**, **Tailwind CSS**, and **Sanity CMS**. Designed for Vercel deployment with Git integration.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| CMS | Sanity v3 |
| Animations | CSS transitions + IntersectionObserver |
| Icons | Lucide React |
| Deployment | Vercel |

---

## Pages

| Route | Page |
|---|---|
| `/` | Home (hero, stats, services, case studies, process, CTA) |
| `/who-we-are` | About the agency, team, values |
| `/our-services` | All 6 services detailed |
| `/workflow` | 4-step process breakdown |
| `/case-studies` | 5 detailed case studies with stats |
| `/prices` | 4 pricing tiers with monthly/annual toggle |
| `/contact` | Contact form |
| `/apply` | Multi-section application form |
| `/studio` | Sanity CMS Studio (admin) |

---

## Quick Start (Local Dev)

```bash
# 1. Clone the repo
git clone https://github.com/yourusername/spartan-media.git
cd spartan-media

# 2. Install dependencies
npm install

# 3. Copy env file
cp .env.example .env.local

# 4. Add your Sanity credentials to .env.local (see Sanity Setup below)

# 5. Run dev server
npm run dev
```

Visit `http://localhost:3000`

---

## Sanity CMS Setup

### Step 1 — Create a Sanity project

```bash
# Install Sanity CLI globally
npm install -g @sanity/cli

# Log in to Sanity
sanity login

# Create a new project (run from inside the project folder)
sanity init --env
```

When prompted:
- **Project name:** `spartan-media`
- **Dataset:** `production`
- **Template:** Clean (no template)

This will give you a **Project ID**. Copy it.

### Step 2 — Add env variables

Edit `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id-here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-read-token-here
```

To get an API token:
1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select your project → **API** → **Tokens**
3. Add token with **Viewer** permissions
4. Paste into `SANITY_API_TOKEN`

### Step 3 — Access the Studio

Visit `http://localhost:3000/studio` in your browser.

Content types available in the CMS:
- **Case Studies** — edit titles, stats, descriptions
- **Services** — edit service copy and features
- **Team Members** — add/edit team bios and photos
- **Testimonials** — manage client quotes
- **Site Settings** — global stats, contact info, social links

---

## Deploy to Vercel via Git

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Spartan Media website"
git branch -M main
git remote add origin https://github.com/yourusername/spartan-media.git
git push -u origin main
```

### Step 2 — Connect to Vercel

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repository
3. Vercel auto-detects Next.js — no build config needed

### Step 3 — Add Environment Variables in Vercel

In the Vercel project dashboard → **Settings** → **Environment Variables**, add:

```
NEXT_PUBLIC_SANITY_PROJECT_ID   = your-project-id
NEXT_PUBLIC_SANITY_DATASET      = production
SANITY_API_TOKEN                = your-token
NEXT_PUBLIC_SITE_URL            = https://your-vercel-domain.vercel.app
```

### Step 4 — Deploy

Click **Deploy**. Vercel will build and deploy automatically.

Every future `git push` to `main` will trigger an automatic redeploy.

---

## Sanity CORS for Production

After deploying, add your Vercel domain to Sanity's allowed origins:

1. [sanity.io/manage](https://sanity.io/manage) → your project → **API** → **CORS Origins**
2. Add `https://your-domain.vercel.app` with **Allow Credentials** checked
3. Also add `http://localhost:3000` for local development

---

## Project Structure

```
spartan-media/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Home
│   │   ├── layout.tsx            # Root layout (Nav + Footer)
│   │   ├── globals.css
│   │   ├── who-we-are/page.tsx
│   │   ├── our-services/page.tsx
│   │   ├── workflow/page.tsx
│   │   ├── case-studies/page.tsx
│   │   ├── prices/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── apply/page.tsx
│   │   └── studio/[[...tool]]/   # Sanity Studio
│   ├── components/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── sanity.ts             # Sanity client + queries
├── sanity/
│   └── schemas/
│       ├── index.ts
│       ├── caseStudy.ts
│       ├── service.ts
│       ├── teamMember.ts
│       ├── testimonial.ts
│       └── siteSettings.ts
├── sanity.config.ts
├── next.config.mjs
├── tailwind.config.js
├── vercel.json
└── .env.example
```

---

## Customisation

### Update agency name / branding
Edit `src/app/layout.tsx` metadata and `src/components/Navbar.tsx` logo text.

### Update colours
Edit `tailwind.config.js` under `theme.extend.colors.brand`.

### Update pricing
Edit the `plans` array in `src/app/prices/page.tsx`.

### Update stats on homepage
Edit the `StatBlock` calls in `src/app/page.tsx` or connect them to Sanity Site Settings.

### Add your domain to metadata
Update `NEXT_PUBLIC_SITE_URL` and the metadata in `src/app/layout.tsx`.

---

## Performance

- **Static generation** for all pages (ISR-ready)
- **No heavy JS libraries** — animations via CSS and native IntersectionObserver
- **Optimised fonts** via Google Fonts
- **Next.js Image** component for all images
- **Tailwind CSS purge** removes unused styles in production

Expected Lighthouse scores: **95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO**

---

## License

MIT — use freely for client projects.
