# V2 Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Port the v2 Replit site's core pages (home, about, agency, contact) into the existing Next.js 15 static export project, adopting v2's design system.

**Architecture:** Incremental port into existing Next.js App Router with static export. Shared layout (navbar + footer) in `app/layout.tsx`. Each page is a standalone route. No backend — purely static. Framer Motion for animations. V2's brand colors and fonts replace v1's.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion, Lucide React

---

### Task 1: Copy Assets from V2

**Files:**
- Copy: `v2/.../attached_assets/Electric_Synapse_Logo_v3cut_1767746149255.png` → `public/images/es-logo-v3.png`
- Copy: `v2/.../attached_assets/generated_images/abstract_gradient_mesh_hero_background.png` → `public/images/bg/abstract-gradient-mesh.png`
- Copy: `v2/.../attached_assets/generated_images/geometric_network_pattern_texture.png` → `public/images/bg/geometric-network.png`
- Copy: `v2/.../client/src/assets/images/hero-ocean.jpg` → `public/images/hero-ocean.jpg`
- Copy: `v2/.../client/src/assets/images/studio-meeting.jpg` → `public/images/studio-meeting.jpg`
- Copy: `v2/.../client/src/assets/images/env-bg.jpg` → `public/images/env-bg.jpg`
- Copy: `v2/.../client/src/assets/images/social-bg.jpg` → `public/images/social-bg.jpg`
- Copy: `v2/.../client/src/assets/images/gov-bg.jpg` → `public/images/gov-bg.jpg`
- Copy: `v2/.../attached_assets/221217_Portrait_CodyLandstrom_038_modified_1772117581996.jpg` → `public/images/team/cody.jpg`
- Copy: `v2/.../attached_assets/Michael_Keller_modified_1772117582006.jpg` → `public/images/team/michael.jpg`
- Copy: `v2/.../attached_assets/Terrence_Murray_modified_1772117582005.jpg` → `public/images/team/terrence.jpg`

**Step 1: Create directory structure**

```bash
mkdir -p public/images/bg public/images/team
```

**Step 2: Copy all assets**

```bash
V2=v2/replit-export-Synapse-Studio
cp "$V2/attached_assets/Electric_Synapse_Logo_v3cut_1767746149255.png" public/images/es-logo-v3.png
cp "$V2/attached_assets/generated_images/abstract_gradient_mesh_hero_background.png" public/images/bg/abstract-gradient-mesh.png
cp "$V2/attached_assets/generated_images/geometric_network_pattern_texture.png" public/images/bg/geometric-network.png
cp "$V2/client/src/assets/images/hero-ocean.jpg" public/images/hero-ocean.jpg
cp "$V2/client/src/assets/images/studio-meeting.jpg" public/images/studio-meeting.jpg
cp "$V2/client/src/assets/images/env-bg.jpg" public/images/env-bg.jpg
cp "$V2/client/src/assets/images/social-bg.jpg" public/images/social-bg.jpg
cp "$V2/client/src/assets/images/gov-bg.jpg" public/images/gov-bg.jpg
cp "$V2/attached_assets/221217_Portrait_CodyLandstrom_038_modified_1772117581996.jpg" public/images/team/cody.jpg
cp "$V2/attached_assets/Michael_Keller_modified_1772117582006.jpg" public/images/team/michael.jpg
cp "$V2/attached_assets/Terrence_Murray_modified_1772117582005.jpg" public/images/team/terrence.jpg
```

**Step 3: Verify all images copied**

```bash
find public/images -type f | sort
```

Expected: 11 files listed.

**Step 4: Commit**

```bash
git add public/images/
git commit -m "feat: add v2 image assets (backgrounds, team photos, logo)"
```

---

### Task 2: Install Framer Motion

**Files:**
- Modify: `package.json`

**Step 1: Install framer-motion**

```bash
npm install framer-motion
```

**Step 2: Verify installation**

```bash
grep framer-motion package.json
```

Expected: `"framer-motion": "^12.x.x"` or similar.

**Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: add framer-motion dependency for v2 animations"
```

---

### Task 3: Update Design System (globals.css + fonts)

**Files:**
- Modify: `app/globals.css` — replace v1 palette with v2 brand colors and theme tokens
- Modify: `app/layout.tsx` — swap fonts to Roboto Slab + Source Sans 3, remove Vercel Analytics

**Step 1: Replace `app/globals.css`**

Replace the entire file with v2's design system adapted for Next.js. Key changes:
- Add brand color tokens: `--color-brand-orange`, `--color-brand-cyan`, `--color-brand-navy`, `--color-brand-indigo`, etc.
- Switch from oklch to HSL color space (matching v2's `index.css`)
- Add `--font-heading` for Roboto Slab
- Add heading base styles (`h1-h6` use `font-heading` + `text-brand-navy`)
- Add custom animations (`float`, `gradient-shift`, `shimmer`)
- Add smooth scrolling, custom scrollbar, selection styling
- Keep `prefers-reduced-motion` guard from v1

The new `globals.css` should combine:
- V2's `@theme inline` block with brand colors (lines 6-58 of v2 `index.css`)
- V2's `:root` HSL variables (lines 61-102 of v2 `index.css`)
- V2's `@layer base` with heading styles (lines 104-114 of v2 `index.css`)
- V2's custom animations and utilities (lines 116-170 of v2 `index.css`)
- V1's `prefers-reduced-motion` guard

**Step 2: Update `app/layout.tsx`**

- Replace `Geist` and `Fraunces` imports with `Roboto_Slab` and `Source_Sans_3` from `next/font/google`
- Update the `<body>` className to use the new font variables
- Remove `@vercel/analytics` import and `<Analytics />` component
- Update metadata description/title if needed to match v2 messaging

```tsx
import { Roboto_Slab, Source_Sans_3 } from "next/font/google"

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-sans" })
const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: "--font-heading" })
```

Body className: `${sourceSans.variable} ${robotoSlab.variable} font-sans antialiased`

**Step 3: Build to verify no CSS errors**

```bash
npm run build 2>&1 | tail -20
```

Expected: Build succeeds with no CSS parsing errors.

**Step 4: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: adopt v2 design system (brand colors, fonts, animations)"
```

---

### Task 4: Port Logo Component

**Files:**
- Modify: `components/logo.tsx` — update to use v2's logo image from `public/images/es-logo-v3.png`

**Step 1: Update logo component**

The v2 logo is simpler — just an `<img>` tag with the logo image. Update `components/logo.tsx` to:
- Use a static `<img>` with `src="/images/es-logo-v3.png"` (Next.js static export, no Image optimization)
- Accept `className` prop
- Remove the old animated pulse "S" logic (v1 specific)

```tsx
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative flex items-center", className)}>
      <img
        src="/images/es-logo-v3.png"
        alt="Electric Synapse Guild"
        className="h-16 w-auto object-contain"
      />
    </div>
  );
}
```

**Step 2: Verify it renders**

```bash
npm run build 2>&1 | tail -10
```

**Step 3: Commit**

```bash
git add components/logo.tsx
git commit -m "feat: update logo to v2 design"
```

---

### Task 5: Port Interactive Background Component

**Files:**
- Modify: `components/interactive-background.tsx` — replace canvas particle system with v2's image-based background

**Step 1: Replace interactive background**

The v2 background uses layered static images + CSS gradients instead of v1's canvas particle system. This is simpler and more performant. Replace the entire component:

```tsx
export function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden backface-hidden transform-gpu">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-brand-cyan/5 will-change-transform" />
      <div
        className="absolute inset-0 opacity-40 will-change-transform"
        style={{
          backgroundImage: `url(/images/bg/abstract-gradient-mesh.png)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] will-change-transform"
        style={{
          backgroundImage: `url(/images/bg/geometric-network.png)`,
          backgroundSize: "600px 600px",
          backgroundRepeat: "repeat",
        }}
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay will-change-transform" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(255,255,255,0.8)_100%)]" />
    </div>
  );
}
```

**Step 2: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 3: Commit**

```bash
git add components/interactive-background.tsx
git commit -m "feat: replace canvas background with v2 image-based background"
```

---

### Task 6: Create Navbar Component

**Files:**
- Create: `components/layout/navbar.tsx` — port from v2, convert Wouter to Next.js

**Step 1: Create the layout directory and navbar**

Port `v2/.../components/layout/navbar.tsx` with these adaptations:
- Replace `import { Link, useLocation } from "wouter"` with `import Link from "next/link"` and `import { usePathname } from "next/navigation"`
- Replace `const [location] = useLocation()` with `const pathname = usePathname()`
- Replace all `<Link href="..."><span>` patterns with `<Link href="..." className="...">` (Next.js Link accepts className directly)
- Add `"use client"` directive at top (uses useState, useEffect, usePathname)
- Replace `location === link.href` with `pathname === link.href`
- Keep navLinks array: Platform (`/storyflow-esg`), Capabilities (`/agency`), Work (`/work`), About (`/about`)
- For Phase 1, the Platform and Work links will point to pages that don't exist yet — that's OK, they'll be 404s until Phase 2
- Keep the Sheet-based mobile menu
- Keep the scroll-detection effect
- Import Logo from `@/components/logo`

**Step 2: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 3: Commit**

```bash
git add components/layout/navbar.tsx
git commit -m "feat: add v2 navbar with responsive mobile menu"
```

---

### Task 7: Create Footer Component

**Files:**
- Create: `components/layout/footer.tsx` — port from v2, convert Wouter to Next.js

**Step 1: Create footer component**

Port `v2/.../components/layout/footer.tsx` with these adaptations:
- Replace `import { Link } from "wouter"` with `import Link from "next/link"`
- Import Logo from `@/components/logo`
- Keep the 4-column grid: logo/tagline, sitemap links, connect links
- Keep copyright and "Powered by StoryFlow"

No `"use client"` needed — footer is purely presentational with no hooks.
Note: `new Date().getFullYear()` requires client-side rendering, so add `"use client"` if the build complains, or hardcode the year.

**Step 2: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 3: Commit**

```bash
git add components/layout/footer.tsx
git commit -m "feat: add v2 footer component"
```

---

### Task 8: Update Root Layout to Include Navbar and Footer

**Files:**
- Modify: `app/layout.tsx` — add Navbar and Footer as shared layout components

**Step 1: Update layout.tsx**

Add Navbar and Footer imports and render them in the body:

```tsx
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

// In the return:
<body className={...}>
  <Navbar />
  <main>{children}</main>
  <Footer />
</body>
```

This means individual pages no longer need to import Navbar/Footer.

**Step 2: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add navbar and footer to shared layout"
```

---

### Task 9: Port Home Page

**Files:**
- Modify: `app/page.tsx` — replace v1 home with v2 home content
- Delete (or leave for reference): `components/hero-section.tsx` — no longer needed

**Step 1: Rewrite `app/page.tsx`**

Port `v2/.../pages/home.tsx` with these adaptations:
- Add `"use client"` directive (uses framer-motion)
- Remove `<Navbar />` and `<Footer />` imports/renders (handled by layout)
- Replace `import { Link } from "wouter"` with `import Link from "next/link"`
- Replace Vite image imports (`import heroOcean from "@/assets/..."`) with static paths (`"/images/hero-ocean.jpg"`)
- Replace `<img src={heroOcean}` with `<img src="/images/hero-ocean.jpg"`
- Same for `studioMeeting`, `envBg`, `socialBg`, `govBg`
- Keep all Framer Motion animations
- Keep all sections: Hero, ESG Triptych, StoryFlow ESG, How Value Expands, Built From Engagements, The Studio, Closing CTA
- Keep `<InteractiveBackground />` at top

**Step 2: Delete old hero section**

```bash
rm components/hero-section.tsx
```

**Step 3: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 4: Run dev server and visually check**

```bash
npm run dev
```

Open http://localhost:3000 and verify the home page renders.

**Step 5: Commit**

```bash
git add app/page.tsx
git rm components/hero-section.tsx
git commit -m "feat: port v2 home page with all sections"
```

---

### Task 10: Port About Page

**Files:**
- Create: `app/about/page.tsx` — port from v2

**Step 1: Create about page**

Port `v2/.../pages/about.tsx` with these adaptations:
- Add `"use client"` directive (uses framer-motion)
- Remove `<Navbar />`, `<Footer />`, `<InteractiveBackground />` (handled by layout or kept in home only)
  - Note: `InteractiveBackground` is fixed-position, so it will show on all pages if rendered in layout. Decide: either move it to layout.tsx (so it shows on all pages, matching v2 behavior) or keep it per-page. V2 renders it on every page, so move it to layout.
- Replace Wouter Link with Next.js Link
- Keep the principles grid, mission section, leadership bios with accordion
- Team photos use `/images/team/michael.jpg`, `/images/team/terrence.jpg`, `/images/team/cody.jpg`
- Keep Framer Motion animations

**Step 2: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 3: Commit**

```bash
git add app/about/page.tsx
git commit -m "feat: add about page with leadership bios"
```

---

### Task 11: Port Agency Page

**Files:**
- Create: `app/agency/page.tsx` — port from v2

**Step 1: Create agency page**

Port `v2/.../pages/agency.tsx` with these adaptations:
- Add `"use client"` directive (uses framer-motion)
- Remove Navbar/Footer/InteractiveBackground (handled by layout)
- Replace Wouter Link with Next.js Link
- Keep the 5 service cards with icons
- Keep the "Engagement Models" CTA section
- Keep Framer Motion viewport-triggered animations

**Step 2: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 3: Commit**

```bash
git add app/agency/page.tsx
git commit -m "feat: add agency/capabilities page"
```

---

### Task 12: Port Contact Page

**Files:**
- Create: `app/contact/page.tsx` — port from v2

**Step 1: Create contact page**

Port `v2/.../pages/contact.tsx` with these adaptations:
- Add `"use client"` directive (uses useState, useToast)
- Remove Navbar/Footer/InteractiveBackground (handled by layout)
- Keep the 2-column layout: left info + right tabbed form
- Keep the mock calendar UI (Book Consultation tab)
- Keep the contact form (Send Message tab)
- The form `handleSubmit` currently simulates an API call with `setTimeout` — keep this for now. The toast notification shows "Message sent" after 1.5s. In the future this can be connected to a real endpoint.
- Import shadcn/ui components: Tabs, Input, Textarea, Badge, Button, Card

**Step 2: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 3: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: add contact page with form and calendar mock"
```

---

### Task 13: Add 404 Page

**Files:**
- Create: `app/not-found.tsx` — simple 404 page

**Step 1: Create not-found page**

Next.js App Router uses `app/not-found.tsx` for the 404 page. Port v2's but improve it to match the site design:

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6 text-center">
          <AlertCircle className="h-8 w-8 text-brand-orange mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-bold text-brand-navy mb-2">Page Not Found</h1>
          <p className="text-slate-600 mb-6">The page you're looking for doesn't exist.</p>
          <Link href="/">
            <Button className="bg-brand-navy text-white hover:bg-brand-indigo rounded-full">
              Back to Home
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
```

**Step 2: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 3: Commit**

```bash
git add app/not-found.tsx
git commit -m "feat: add 404 page"
```

---

### Task 14: Move InteractiveBackground to Layout

**Files:**
- Modify: `app/layout.tsx` — add InteractiveBackground so it shows on all pages (matching v2 behavior)
- Modify: `app/page.tsx` — remove InteractiveBackground import/render (now in layout)

**Step 1: Update layout.tsx**

Add `<InteractiveBackground />` before `<Navbar />` in the body.

**Step 2: Remove from page.tsx**

Remove the `<InteractiveBackground />` render from the home page.

**Step 3: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 4: Commit**

```bash
git add app/layout.tsx app/page.tsx
git commit -m "refactor: move InteractiveBackground to shared layout"
```

---

### Task 15: Final Build Verification and Cleanup

**Files:**
- Possibly modify: various files for build fixes

**Step 1: Full build**

```bash
npm run build
```

Expected: Clean build with all pages exported as static HTML.

**Step 2: Check the output directory**

```bash
ls out/
ls out/about/ out/agency/ out/contact/
```

Expected: `index.html` in each directory.

**Step 3: Test locally with a static server**

```bash
npx serve out -p 3001
```

Open http://localhost:3001 and verify:
- Home page loads with all sections
- Navigation links work between pages
- About page shows leadership bios
- Agency page shows service cards
- Contact page shows form and calendar
- 404 page shows for unknown routes
- Mobile menu works (resize browser)
- Animations trigger on scroll

**Step 4: Clean up unused v1 files**

```bash
# Remove old v1 styles file if duplicated
rm -f styles/globals.css
```

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: complete v2 migration phase 1 (home, about, agency, contact)"
```

---

## Phase 2 (Future Work)

These pages can be added after Phase 1 is verified and deployed:

1. `/storyflow-esg` — Product page (port from `v2/.../pages/storyflow-esg.tsx`)
2. `/work` + `/portfolio` — Case studies (port from `v2/.../pages/work.tsx`)
3. `/insights` — Blog/thought leadership (port from `v2/.../pages/insights.tsx`)
4. `/signal-forge` — Interactive AI claim validator (port from `v2/.../pages/signal-forge.tsx`)

Each follows the same pattern: create `app/<route>/page.tsx`, add `"use client"`, replace Wouter with Next.js Link, remove Navbar/Footer/InteractiveBackground renders.
