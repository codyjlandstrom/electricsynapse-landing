# V2 Migration Design: Incremental Port to Next.js Static Export

## Context

A coworker built a V2 of the Electric Synapse landing site in Replit using Vite + Express + PostgreSQL. The V2 is a multi-page marketing site with 10 routes, Framer Motion animations, and a full backend scaffold — but the backend is empty. We need to port it into the existing Next.js 15 static export setup for Cloudflare Pages deployment.

## Decisions

- **Framework:** Keep Next.js 15 App Router with static export (`output: 'export'`)
- **Backend:** None — static site only, strip Express/PostgreSQL/Drizzle
- **Design system:** Adopt V2's fonts (Roboto Slab / Source Sans 3) and colors (orange/cyan/navy)
- **Scope:** Core pages first (home, about, agency, contact), remaining pages later
- **Approach:** Incremental port — add V2 content into existing project structure

## Phase 1: Core Pages

### Pages to Port

| Route | Source | Description |
|-------|--------|-------------|
| `/` | `v2/.../pages/home.tsx` | Hero, ESG triptych, StoryFlow showcase, case studies, studio overview |
| `/about` | `v2/.../pages/about.tsx` | Mission, 4 core principles, FAQ accordion |
| `/agency` | `v2/.../pages/agency.tsx` | 5 service offerings, studio capabilities |
| `/contact` | `v2/.../pages/contact.tsx` | Contact form (static), location info |
| `not-found` | `v2/.../pages/not-found.tsx` | 404 page |

### Phase 2 (Future)

- `/storyflow-esg` — Product page
- `/work` + `/portfolio` — Case studies
- `/insights` — Blog/thought leadership
- `/signal-forge` — Interactive AI claim validator

## Architecture

```
app/
├── layout.tsx          # Root layout — Roboto Slab / Source Sans 3 fonts, navbar, footer
├── page.tsx            # Home (from v2 home.tsx)
├── about/
│   └── page.tsx        # About (from v2 about.tsx)
├── agency/
│   └── page.tsx        # Agency (from v2 agency.tsx)
├── contact/
│   └── page.tsx        # Contact (from v2 contact.tsx)
├── not-found.tsx       # 404 page
└── globals.css         # V2 color palette + font variables

components/
├── layout/
│   ├── navbar.tsx      # Fixed header, responsive mobile menu (from v2)
│   └── footer.tsx      # Footer (from v2)
├── interactive-background.tsx  # Keep existing canvas particle animation
├── logo.tsx            # Update for v2 branding if needed
└── ui/                 # Keep existing shadcn/ui, add missing components as needed
```

### Shared Layout

Navbar and footer rendered in `app/layout.tsx` so they appear on all pages. Each page is a standalone static route.

### Routing

V2's Wouter `<Link>` becomes Next.js `<Link>` from `next/link`. All routes are statically generated at build time.

## Design System

### Fonts

- **Headings:** Roboto Slab (serif) — loaded via `next/font/google`
- **Body:** Source Sans 3 (sans-serif) — loaded via `next/font/google`
- **Mono:** JetBrains Mono (if needed)

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Primary Orange | `#f57d0f` | Accent, secondary actions |
| Primary Cyan | `#4bd8f2` | Primary interactions, highlights |
| Primary Navy | `#173661` | Text, primary buttons |
| Primary Indigo | `#3b3bad` | Accent |

### Animations

- Add `framer-motion` dependency
- Port V2's motion patterns: fade-in, scale, slide, stagger, viewport-triggered
- Keep `prefers-reduced-motion` respect from V1

## Assets

- Copy needed images from `v2/.../attached_assets/` and `v2/.../client/src/assets/` into `public/`
- Keep existing SEO assets: `robots.txt`, `llms.txt`, `ai-sitemap.xml`, `og-image.jpg`
- Remove V1-specific hero images no longer used

## Dependencies

### Add

- `framer-motion` — page/component animations

### Keep

- All shadcn/ui + Radix UI packages
- `react-hook-form`, `zod` — contact form
- `tailwindcss`, `postcss`
- `lucide-react` — icons

### Remove (after migration)

- `@vercel/analytics` — switching to Cloudflare
- Unused V1 components

## What Gets Replaced

- `components/hero-section.tsx` — replaced by V2 home page content
- `app/page.tsx` — replaced with V2 home
- V1 color palette in `globals.css` — replaced with V2 colors
- V1 fonts (Geist / Fraunces) — replaced with V2 fonts (Roboto Slab / Source Sans 3)
