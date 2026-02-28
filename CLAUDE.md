# Electric Synapse Landing Site

## Overview

Marketing site for Electric Synapse Guild — an ESG communications studio + StoryFlow ESG platform. Static site deployed to Cloudflare Pages.

## Tech Stack

- **Framework:** Next.js 15 App Router with static export (`output: 'export'`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 with `@theme inline` in `app/globals.css`
- **Components:** shadcn/ui (New York style) + Radix UI primitives
- **Animations:** Framer Motion (fade-in, scale, viewport-triggered)
- **Icons:** Lucide React
- **Analytics:** PostHog (project token in `components/posthog-provider.tsx`)
- **Deployment:** Cloudflare Pages via `npx wrangler pages deploy out`

## Project Structure

```
app/
├── layout.tsx            # Root layout: fonts, navbar, footer, background, PostHog
├── page.tsx              # Home page
├── globals.css           # Design tokens, brand colors, animations
├── storyflow-esg/page.tsx
├── agency/page.tsx
├── work/page.tsx
├── about/page.tsx
└── not-found.tsx         # 404 page

components/
├── layout/navbar.tsx     # Fixed header with responsive mobile menu (Sheet)
├── layout/footer.tsx     # 4-column footer
├── interactive-background.tsx  # Layered image background (all pages)
├── logo.tsx              # Logo image component
├── posthog-provider.tsx  # PostHog analytics wrapper
└── ui/                   # shadcn/ui components
```

## Design System

- **Fonts:** Roboto Slab (headings), Source Sans 3 (body) — via `next/font/google`
- **Brand colors (defined in globals.css @theme):**
  - Orange: `#f57d0f` — accents, secondary actions
  - Cyan: `#4bd8f2` — primary interactions, highlights
  - Navy: `#173661` — text, primary buttons
  - Indigo: `#3b3bad` — accent

## Key Patterns

- All page components use `"use client"` (Framer Motion requires it)
- Navbar, footer, and background are in the shared layout — not in individual pages
- No contact page — all CTAs link to `mailto:hello@electricsynapse.ai`
- No backend — purely static site
- Images served from `public/images/` (no Next.js Image optimization — `unoptimized: true`)

## Commands

```bash
npm run dev          # Local dev server
npm run build        # Production build → out/
npm run lint         # ESLint

# Deploy to Cloudflare Pages
CLOUDFLARE_ACCOUNT_ID=94da591d12b994ad9e4a18e4ce66b98e npx wrangler pages deploy out --project-name electricsynapse-landing
```

## npm Note

Use `--legacy-peer-deps` for all `npm install` commands. vaul@0.9.9 declares `peer react@"^16.8 || ^17.0 || ^18.0"` but the project uses React 19.
