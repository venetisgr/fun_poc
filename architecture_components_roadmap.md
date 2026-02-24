# Architecture, Components & Roadmap

## Project: GLORIA AETERNA RECRUITING — Ancient Military Recruiting Website

---

## 1. Overall Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router) — server-side rendering, static generation, file-based routing
- **Styling**: CSS Modules + global CSS — no extra dependencies, fast load times
- **Deployment**: Vercel — zero-config deployment for Next.js
- **Language**: TypeScript — type safety for our very serious military logistics

### Architecture Pattern
```
Next.js App Router (Static Site Generation)
├── app/
│   ├── layout.tsx          ← Root layout (navbar, footer, global styles)
│   ├── page.tsx            ← Landing / Hero page
│   ├── macedon/
│   │   └── page.tsx        ← Macedonian Phalanx recruiting
│   ├── legion/
│   │   └── page.tsx        ← Caesar's Legions recruiting
│   ├── benefits/
│   │   └── page.tsx        ← Benefits & Perks comparison
│   ├── apply/
│   │   └── page.tsx        ← Application form
│   └── faq/
│       └── page.tsx        ← FAQ / Testimonials
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── RecruitCard.tsx
│   ├── TestimonialCard.tsx
│   ├── BenefitTable.tsx
│   └── ApplicationForm.tsx
├── styles/
│   ├── globals.css
│   └── [module].module.css
└── public/
    └── (static assets if needed)
```

### Why This Architecture
- **SSG (Static Site Generation)**: The entire site is static content — no databases, no APIs, no backend. Perfect for Vercel's edge CDN.
- **App Router**: Modern Next.js patterns, cleaner layouts, better SEO metadata support.
- **CSS Modules**: Scoped styling without runtime overhead. No build-time CSS-in-JS complexity.

---

## 2. Component Roadmap

### Phase 1: Foundation
| Component | Description |
|-----------|-------------|
| `layout.tsx` | Root layout with ancient-themed navbar, footer, page wrapper |
| `Navbar` | Navigation with faux-Latin branding, links to all sections. Includes an ominous eagle logo (CSS-only) |
| `Footer` | "SPQR Holdings LLC" copyright, disclaimers about barbarian territories, cookie policy for "tracking Gauls" |
| `globals.css` | Color palette (imperial purple, gold, marble white, blood red), typography (serif fonts for gravitas) |

### Phase 2: Landing Page
| Component | Description |
|-----------|-------------|
| `HeroSection` | Full-width banner: "YOUR EMPIRE NEEDS YOU" with dual CTAs — "Join the Phalanx" / "Enlist in the Legion" |
| Homepage | Rotating fake testimonials, "Employee of the Month" (Achilles, who isn't even the right era), urgency banner ("Only 3,000 sarissa positions remaining!") |

### Phase 3: Recruiting Pages
| Component | Description |
|-----------|-------------|
| **Macedonian Phalanx Page** | Job listing format. Role: "Sarissa Operator (Full-time, Permanent — or until death)". Requirements: must be able to hold 18-foot pike, "synaspismos formation experience preferred but not required". Culture section about Macedonian superiority over "disorganized Persian hordes". Compensation: "A share of Darius's treasury (subject to availability)" |
| **Caesar's Legions Page** | Corporate recruitment style. "We're not just building roads — we're building THE road. To Gaul." Positions: Legionary, Centurion (management track), Auxiliary (contractor role — "diverse backgrounds welcome, citizenship pending"). Benefits include "subsidized gladius maintenance" and "generous land grants after 25 years of service" |
| `RecruitCard` | Reusable card for each position with rank, pay (in denarii), and a "APPLY NOW — GLORY AWAITS" button |

### Phase 4: Benefits & Perks
| Component | Description |
|-----------|-------------|
| `BenefitTable` | Side-by-side comparison table: Macedon vs Rome. Categories: Healthcare ("battlefield medicus vs. pray to Asclepius"), Retirement Plan ("land in conquered territory"), PTO ("Saturnalia + 3 floating holidays"), Dress Code ("mandatory — violators decimated") |
| Benefits Page | "Why choose us over the Persians?" propaganda section, fake Glassdoor-style ratings |

### Phase 5: Application Form
| Component | Description |
|-----------|-------------|
| `ApplicationForm` | Satirical form with fields: Name, Preferred Campaign, "Rate your hatred of barbarians (1-10)", Weapon Proficiency (dropdown: gladius, pilum, sarissa, "I'll figure it out"), "Do you have your own sandals? (Y/N)", "Previous conquering experience". Submit button: "SUBMIT TO GLORY" (does nothing, shows a "Your application has been sent via carrier pigeon" message) |

### Phase 6: FAQ & Testimonials
| Component | Description |
|-----------|-------------|
| FAQ Page | Q&A format: "Is death in battle covered by insurance?" — "Death IS the insurance.", "Can I bring my family?" — "Your family is the Empire.", "What's the work-life balance?" — "There is no life outside the legion." |
| `TestimonialCard` | Fake reviews: "5 stars — conquered three provinces, got a farm. Would recommend." — Marcus Aurelius (wrong century, doesn't matter). "1 star — the Gauls are surprisingly organized" — Anonymous Centurion |

---

## 3. Resources Needed

### Development Dependencies
| Resource | Purpose |
|----------|---------|
| Node.js 18+ | Runtime |
| Next.js 14 | Framework |
| TypeScript | Language |
| React 18 | UI library (bundled with Next.js) |

### Design Resources (All CSS/text-based — no external assets needed)
| Resource | Implementation |
|----------|---------------|
| Color Palette | Imperial Purple (#4A0E4E), Gold (#D4AF37), Marble White (#F5F5F0), Blood Red (#8B0000), Parchment (#F4E8C1) |
| Typography | Georgia / serif stack for body, small-caps for headers — no custom font downloads needed |
| Iconography | Unicode characters and CSS-generated decorative elements (laurel wreaths via border-radius, eagles via CSS clip-path) |
| Imagery | Pure CSS decorative elements — columns, borders, patterns. No image files required |

### Deployment
| Resource | Purpose |
|----------|---------|
| Vercel Account | Hosting (free tier sufficient) |
| GitHub repo | Already exists (this repo) |

### Content Resources (all written in-code)
- Satirical job descriptions
- Fake testimonials with historically inaccurate attributions
- FAQ content
- "Corporate" propaganda copy
- Disclaimer text ("Not affiliated with any actual empire, living or deceased")

---

## 4. Design Principles

1. **Deadpan serious tone**: The funnier it is, the more seriously it's presented. No winking at the camera.
2. **Corporate recruiting aesthetics**: This should look like a real tech company's careers page, just... for ancient warfare.
3. **Historical inaccuracy as a feature**: Mix up eras, misattribute quotes, anachronistic job titles. The wrongness IS the joke.
4. **The "slant"**: Absurd imperial superiority complex — "civilizing the barbarians", "manifest destiny but with togas", "meritocracy (for citizens only)". Played for obvious satire.
5. **Responsive**: Works on mobile because even Roman soldiers have phones (historically accurate).
