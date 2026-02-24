# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Gloria Aeterna Recruiting — a satirical ancient military recruiting website for Macedonian phalanxes (Persian campaign) and Caesar's legions (Gallic campaign). Built as a static site deployed on Vercel.

## Commands

All commands run from the `site/` directory:

```bash
cd site
npm run dev      # Development server with hot reload
npm run build    # Production build (static generation)
npm run start    # Serve production build locally
npm run lint     # ESLint via Next.js
```

## Architecture

**Tech stack**: Next.js 14 (App Router), TypeScript, CSS Modules, no external UI libraries.

**Everything is statically generated** — no backend, no database, no API routes. The only client component is `app/apply/page.tsx` (form with useState for submission state and barbarian hatred slider).

### Routing

| Route | Description |
|-------|-------------|
| `/` | Landing page — hero, stats, campaign cards, testimonials, employee of the month |
| `/macedon` | Macedonian Phalanx recruiting — 4 position listings |
| `/legion` | Caesar's Legions recruiting — 4 position listings, Caesar's corporate memo, day-in-the-life timeline |
| `/benefits` | Side-by-side Macedon vs Rome comparison table (8 categories), Glasdoor.rom reviews |
| `/apply` | Application form (client component) with carrier pigeon confirmation |
| `/faq` | 12 FAQ items, contact methods |

### Layout Structure

`app/layout.tsx` wraps all pages with: `Navbar` → scrolling ticker banner → `<main>{children}</main>` → `Footer`. The Navbar is sticky. The ticker uses CSS keyframe animation.

### Shared Components (in `components/`)

- **Navbar.tsx** — client component with mobile hamburger toggle
- **Footer.tsx** — server component, "SPQR Holdings LLC" branding

### Design System (in `app/globals.css`)

CSS custom properties define the color palette:
- Imperial purple (`#4A0E4E`), gold (`#D4AF37`), marble white (`#F5F5F0`), blood red (`#8B0000`), parchment (`#F4E8C1`)

Typography: Georgia serif stack, `font-variant: small-caps` on all headings.

Reusable CSS classes: `.btn-primary`, `.btn-gold`, `.btn-outline`, `.card`, `.section`, `.section-alt`, `.laurel-header`, `.container`.

Responsive breakpoints: 768px (tablet), 480px (phone).

### Styling Convention

Each page has a co-located CSS Module (`page.module.css`). Components in `components/` also use CSS Modules. Global utility classes are in `globals.css`. No Tailwind.

### Data Pattern

Position listings, FAQ items, comparison table rows, and reviews are defined as arrays/objects at the top of their respective page files and mapped to JSX. There is no separate data layer or CMS.

### Path Alias

`@/*` maps to the project root (configured in `tsconfig.json`). Use `import Foo from '@/components/Foo'`.

## Deployment

Vercel deployment with root directory set to `site/`. All pages are SSG — no server functions needed.

## Tone

Deadpan serious corporate recruiting aesthetic. Historical inaccuracy is intentional. The satirical "far-right imperial superiority complex" is played for obvious absurdist comedy.
