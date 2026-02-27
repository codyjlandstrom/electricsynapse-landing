# V2 Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Port the v2 Replit site's 5 pages (home, storyflow-esg, agency, work, about) into the existing Next.js 15 static export project, adopting v2's design system.

**Architecture:** Incremental port into existing Next.js App Router with static export. Shared layout (navbar + footer) in `app/layout.tsx`. Each page is a standalone route. No backend — purely static. Framer Motion for animations. V2's brand colors and fonts replace v1's.

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion, Lucide React

**Source files (all under `v2/replit-export-Synapse-Studio/`):**
- Pages: `client/src/pages/{home,storyflow-esg,agency,work,about}.tsx`
- Layout: `client/src/components/layout/{navbar,footer}.tsx`
- Styling: `client/src/index.css`
- UI: `client/src/components/ui/{interactive-background,logo,accordion,button,badge}.tsx`
- Routing: `client/src/App.tsx`
- Assets: `client/src/assets/images/`, `client/public/images/team/`, `attached_assets/`

**Key adaptation patterns (apply to every ported file):**
- Replace `import { Link } from "wouter"` → `import Link from "next/link"`
- Replace `import { useLocation } from "wouter"` → `import { usePathname } from "next/navigation"`
- Replace Vite asset imports (`import img from "@/assets/..."`) → static paths (`"/images/..."`)
- Replace `@assets/...` imports → static paths from `/images/...`
- Remove per-page `<Navbar />`, `<Footer />`, `<InteractiveBackground />` renders (handled by layout)
- Add `"use client"` directive to any component using hooks or framer-motion
- Any CTA linking to `/contact` → `mailto:hello@electricsynapse.ai` (no contact page in this version)

---

### Task 1: Copy Assets from V2

**Files:**
- Copy: `attached_assets/Electric_Synapse_Logo_v3cut_1767746149255.png` → `public/images/es-logo-v3.png`
- Copy: `attached_assets/generated_images/abstract_gradient_mesh_hero_background.png` → `public/images/bg/abstract-gradient-mesh.png`
- Copy: `attached_assets/generated_images/geometric_network_pattern_texture.png` → `public/images/bg/geometric-network.png`
- Copy: `attached_assets/generated_images/storyflow_esg_saas_dashboard_mockup.png` → `public/images/storyflow/storyflow-dashboard.png`
- Copy: `client/src/assets/images/hero-ocean.jpg` → `public/images/hero-ocean.jpg`
- Copy: `client/src/assets/images/studio-meeting.jpg` → `public/images/studio-meeting.jpg`
- Copy: `client/src/assets/images/env-bg.jpg` → `public/images/env-bg.jpg`
- Copy: `client/src/assets/images/social-bg.jpg` → `public/images/social-bg.jpg`
- Copy: `client/src/assets/images/gov-bg.jpg` → `public/images/gov-bg.jpg`
- Copy: `client/src/assets/images/modern-architecture.jpg` → `public/images/modern-architecture.jpg`
- Copy: `client/public/images/team/cody.jpg` → `public/images/team/cody.jpg`
- Copy: `client/public/images/team/michael.jpg` → `public/images/team/michael.jpg`
- Copy: `client/public/images/team/terrence.jpg` → `public/images/team/terrence.jpg`

Note: The storyflow page references `storyflow-dashboard.png`. Check if it exists at `client/src/assets/images/storyflow/storyflow-dashboard.png` first; if not, fall back to the generated image in `attached_assets/generated_images/`.

**Step 1: Create directory structure**

```bash
mkdir -p public/images/bg public/images/team public/images/storyflow
```

**Step 2: Copy all assets**

```bash
V2=v2/replit-export-Synapse-Studio
cp "$V2/attached_assets/Electric_Synapse_Logo_v3cut_1767746149255.png" public/images/es-logo-v3.png
cp "$V2/attached_assets/generated_images/abstract_gradient_mesh_hero_background.png" public/images/bg/abstract-gradient-mesh.png
cp "$V2/attached_assets/generated_images/geometric_network_pattern_texture.png" public/images/bg/geometric-network.png
cp "$V2/client/src/assets/images/storyflow/storyflow-dashboard.png" public/images/storyflow/storyflow-dashboard.png
cp "$V2/client/src/assets/images/hero-ocean.jpg" public/images/hero-ocean.jpg
cp "$V2/client/src/assets/images/studio-meeting.jpg" public/images/studio-meeting.jpg
cp "$V2/client/src/assets/images/env-bg.jpg" public/images/env-bg.jpg
cp "$V2/client/src/assets/images/social-bg.jpg" public/images/social-bg.jpg
cp "$V2/client/src/assets/images/gov-bg.jpg" public/images/gov-bg.jpg
cp "$V2/client/src/assets/images/modern-architecture.jpg" public/images/modern-architecture.jpg
cp "$V2/client/public/images/team/cody.jpg" public/images/team/cody.jpg
cp "$V2/client/public/images/team/michael.jpg" public/images/team/michael.jpg
cp "$V2/client/public/images/team/terrence.jpg" public/images/team/terrence.jpg
```

**Step 3: Verify all images copied**

```bash
find public/images -type f | sort
```

Expected: 13 files listed.

**Step 4: Commit**

```bash
git add public/images/
git commit -m "feat: add v2 image assets (backgrounds, team photos, logo, storyflow)"
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

Replace the entire file with v2's design system adapted for Next.js. The new file should be the full contents of v2's `client/src/index.css` (lines 1-170) plus v1's `prefers-reduced-motion` guard.

Key elements to include from v2 `index.css`:
- `@import "tailwindcss"` and `@import "tw-animate-css"` (lines 1-2)
- `@custom-variant dark` (line 4)
- `@theme inline` block with font families (`--font-sans: 'Source Sans 3'`, `--font-heading: 'Roboto Slab'`, `--font-mono: 'JetBrains Mono'`), radius tokens, color variable mappings, and all brand colors (`--color-brand-orange: #f57d0f`, `--color-brand-cyan: #4bd8f2`, `--color-brand-navy: #173661`, `--color-brand-indigo: #3b3bad`, etc.) (lines 6-58)
- `:root` HSL variables for light mode (lines 61-102)
- `@layer base` with border defaults, body styles, and heading styles (`h1-h6` get `font-heading tracking-tight text-brand-navy`) (lines 104-114)
- `@layer utilities` with `.bg-web5-gradient` (lines 116-120)
- Custom keyframes: `float`, `gradient-shift` (lines 122-132)
- Utility classes: `.animate-float`, `.animate-gradient` (lines 134-141)
- Smooth scrolling, selection styling, custom scrollbar (lines 143-170)

Then add from v1:
- `@media (prefers-reduced-motion: reduce)` guard that disables animations and hides canvas

**Step 2: Update `app/layout.tsx`**

- Replace `Geist` and `Fraunces` imports with `Roboto_Slab` and `Source_Sans_3` from `next/font/google`
- Update the `<body>` className to use the new font variables
- Remove `@vercel/analytics` import and `<Analytics />` component
- Keep existing metadata (can be refined later)

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
- Modify: `components/logo.tsx` — update to use v2's logo image

**Step 1: Update logo component**

Replace with v2's logo pattern. Use a static `<img>` with `src="/images/es-logo-v3.png"`:

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

**Step 2: Build to verify**

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

Replace the entire component with v2's version from `client/src/components/ui/interactive-background.tsx`. Convert the Vite asset imports to static paths:

```tsx
export function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden backface-hidden transform-gpu">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-brand-cyan/5 will-change-transform" />
      <div
        className="absolute inset-0 opacity-40 will-change-transform"
        style={{
          backgroundImage: "url(/images/bg/abstract-gradient-mesh.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] will-change-transform"
        style={{
          backgroundImage: "url(/images/bg/geometric-network.png)",
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
- Create: `components/layout/navbar.tsx` — port from v2

**Step 1: Create the layout directory and navbar**

```bash
mkdir -p components/layout
```

Port `v2/.../components/layout/navbar.tsx` with these adaptations:
- Add `"use client"` at top
- Replace `import { Link, useLocation } from "wouter"` → `import Link from "next/link"` + `import { usePathname } from "next/navigation"`
- Replace `const [location] = useLocation()` → `const pathname = usePathname()`
- Replace `location === link.href` → `pathname === link.href`
- Import Logo from `@/components/logo`
- Keep navLinks: Platform (`/storyflow-esg`), Capabilities (`/agency`), Work (`/work`), About (`/about`)
- "Book Consult" button → `<a href="mailto:hello@electricsynapse.ai">` instead of `<Link href="/contact">`
- "Request Early Access" button → keep as `<Link href="/storyflow-esg">`
- Keep the Sheet-based mobile menu (uses `@/components/ui/sheet`)
- Keep the scroll-detection effect with requestAnimationFrame

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
- Create: `components/layout/footer.tsx` — port from v2

**Step 1: Create footer component**

Port `v2/.../components/layout/footer.tsx` with these adaptations:
- Replace `import { Link } from "wouter"` → `import Link from "next/link"`
- Import Logo from `@/components/logo`
- Keep the 4-column grid: logo/tagline, sitemap links, connect links
- Update sitemap links to match the 5 pages: Home `/`, Platform `/storyflow-esg`, Capabilities `/agency`, Work `/work`, About `/about`
- Keep copyright and "Powered by StoryFlow"
- `new Date().getFullYear()` works in server components — no `"use client"` needed

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

### Task 8: Update Root Layout (Navbar + Footer + InteractiveBackground)

**Files:**
- Modify: `app/layout.tsx` — add Navbar, Footer, and InteractiveBackground as shared layout components

**Step 1: Update layout.tsx**

In v2, every page renders `<InteractiveBackground />`, `<Navbar />`, and `<Footer />`. Since these are shared across all pages, add them to the root layout:

```tsx
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { InteractiveBackground } from "@/components/interactive-background"

// In the return:
<body className={...}>
  <InteractiveBackground />
  <Navbar />
  <main>{children}</main>
  <Footer />
</body>
```

This means individual pages do NOT need to import Navbar/Footer/InteractiveBackground.

**Step 2: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 3: Commit**

```bash
git add app/layout.tsx
git commit -m "feat: add navbar, footer, and background to shared layout"
```

---

### Task 9: Port Home Page

**Files:**
- Modify: `app/page.tsx` — replace v1 home with v2 home content
- Delete: `components/hero-section.tsx` — no longer needed

**Step 1: Rewrite `app/page.tsx`**

Port `v2/.../pages/home.tsx` (454 lines). Apply standard adaptations:
- Add `"use client"` (uses framer-motion)
- Remove `<Navbar />`, `<Footer />`, `<InteractiveBackground />` (in layout)
- Replace `import { Link } from "wouter"` → `import Link from "next/link"`
- Replace image imports with static paths:
  - `heroOcean` → `"/images/hero-ocean.jpg"`
  - `studioMeeting` → `"/images/studio-meeting.jpg"`
  - `envBg` → `"/images/env-bg.jpg"`
  - `socialBg` → `"/images/social-bg.jpg"`
  - `govBg` → `"/images/gov-bg.jpg"`
- Replace `<Link href="/contact">` CTAs → `<a href="mailto:hello@electricsynapse.ai">`
- Keep all sections: Hero, ESG Triptych, StoryFlow ESG preview, How Value Expands, Built From Engagements, The Studio, Closing CTA

**Step 2: Delete old hero section**

```bash
rm components/hero-section.tsx
```

**Step 3: Build and verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 4: Run dev server and visually check**

```bash
npm run dev
```

Open http://localhost:3000 — verify all home page sections render.

**Step 5: Commit**

```bash
git add app/page.tsx
git rm components/hero-section.tsx
git commit -m "feat: port v2 home page with all sections"
```

---

### Task 10: Port StoryFlow ESG (Platform) Page

**Files:**
- Create: `app/storyflow-esg/page.tsx` — port from v2

**Step 1: Create storyflow-esg page**

Port `v2/.../pages/storyflow-esg.tsx` (332 lines). Apply standard adaptations:
- Add `"use client"` (uses framer-motion)
- Remove Navbar/Footer/InteractiveBackground (in layout)
- Replace `import { Link } from "wouter"` → `import Link from "next/link"`
- Replace `import storyflowDashboard from "@/assets/images/storyflow/storyflow-dashboard.png"` → use `"/images/storyflow/storyflow-dashboard.png"`
- Replace `<Link href="/contact">` CTAs → `<a href="mailto:hello@electricsynapse.ai">`
- Keep all sections: Hero with badge, The Strategic Gap, How StoryFlow Creates Value, Workflow Architecture pipeline, Stakeholder Value grid, Development Status CTA

**Step 2: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 3: Commit**

```bash
git add app/storyflow-esg/page.tsx
git commit -m "feat: add StoryFlow ESG platform page"
```

---

### Task 11: Port Agency (Capabilities) Page

**Files:**
- Create: `app/agency/page.tsx` — port from v2

**Step 1: Create agency page**

Port `v2/.../pages/agency.tsx` (117 lines). Apply standard adaptations:
- Add `"use client"` (uses framer-motion)
- Remove Navbar/Footer/InteractiveBackground (in layout)
- Replace Wouter Link → Next.js Link
- Replace `<Link href="/contact">` CTAs → `<a href="mailto:hello@electricsynapse.ai">`
- Keep the 5 service cards (Strategic Messaging, Investor Communications, ESG Reporting, Multimedia, Advisory Support) with icons and "Inquire" buttons
- Keep the "Engagement Models" dark CTA section

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

### Task 12: Port Work Page

**Files:**
- Create: `app/work/page.tsx` — port from v2

**Step 1: Create work page**

Port `v2/.../pages/work.tsx` (221 lines). Apply standard adaptations:
- Add `"use client"` (uses framer-motion)
- Remove Navbar/Footer/InteractiveBackground (in layout)
- Replace Wouter Link → Next.js Link
- Replace `import modernArch from "@/assets/images/modern-architecture.jpg"` → `"/images/modern-architecture.jpg"`
- Replace `<Link href="/contact">` CTAs → `<a href="mailto:hello@electricsynapse.ai">`
- Keep all sections: Hero with background image, 5 case studies with before/after cards, Flagship Case Study (dark section), How We Approach Every Engagement

**Step 2: Build to verify**

```bash
npm run build 2>&1 | tail -10
```

**Step 3: Commit**

```bash
git add app/work/page.tsx
git commit -m "feat: add work/portfolio page with case studies"
```

---

### Task 13: Port About Page

**Files:**
- Create: `app/about/page.tsx` — port from v2

**Step 1: Create about page**

Port `v2/.../pages/about.tsx` (196 lines). Apply standard adaptations:
- Add `"use client"` (uses framer-motion)
- Remove Navbar/Footer/InteractiveBackground (in layout)
- Replace Wouter Link → Next.js Link
- Replace `<Link href="/contact">` CTAs → `<a href="mailto:hello@electricsynapse.ai">`
- Team photo paths: `/images/team/michael.jpg`, `/images/team/terrence.jpg`, `/images/team/cody.jpg`
- Keep: principles grid, mission section, "What We Are Building Toward", leadership bios with Accordion expand
- Ensure `@/components/ui/accordion` exists (it should from shadcn/ui install)

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

### Task 14: Add 404 Page

**Files:**
- Create: `app/not-found.tsx`

**Step 1: Create not-found page**

```tsx
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative z-10">
      <Card className="w-full max-w-md mx-4 bg-white/80 backdrop-blur-md">
        <CardContent className="pt-6 text-center">
          <AlertCircle className="h-8 w-8 text-brand-orange mx-auto mb-4" />
          <h1 className="font-heading text-2xl font-bold text-brand-navy mb-2">Page Not Found</h1>
          <p className="text-slate-600 mb-6">The page you are looking for does not exist.</p>
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
ls out/about/ out/agency/ out/storyflow-esg/ out/work/
```

Expected: `index.html` in each directory (5 pages + 404).

**Step 3: Test locally with a static server**

```bash
npx serve out -p 3001
```

Open http://localhost:3001 and verify:
- Home page loads with all sections (hero, triptych, StoryFlow preview, value props, studio, CTA)
- `/storyflow-esg` shows the platform page with dashboard mockup and workflow architecture
- `/agency` shows 5 service cards and engagement models section
- `/work` shows 5 case studies with before/after and flagship case
- `/about` shows principles, mission, 3 leadership bios with expandable accordions
- Navigation links work between all 5 pages
- 404 page shows for unknown routes (e.g., `/xyz`)
- Mobile menu works (resize browser to < 1024px)
- Framer Motion animations trigger on scroll
- Interactive background is visible on all pages

**Step 4: Clean up unused v1 files**

```bash
# Remove old v1 styles file (duplicate of app/globals.css)
rm -f styles/globals.css
# Remove old v1 theme provider if unused
rm -f components/theme-provider.tsx
```

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: complete v2 migration (home, platform, capabilities, work, about)"
```
