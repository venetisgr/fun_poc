# Gloria Aeterna Recruiting

> "The barbarians aren't going to civilize themselves." — Official HR Policy

A satirical recruiting website for **Macedonian phalanxes** heading to Persia and **Caesar's legions** heading to Gaul. Presented with deadpan corporate seriousness by SPQR Holdings LLC.

## What's Inside

- **Landing page** — "Your Empire Needs You" hero, campaign cards, fake testimonials, Achilles as Employee of the Month
- **Macedonian Phalanx Division** — 4 job listings including "Chief Hellenization Officer" and a Macedonian HR warning about Persian trousers
- **Caesar's Legions Division** — 4 positions, a corporate memo from Caesar about "hostile mergers," hourly day-in-the-life schedule
- **Benefits comparison** — 8-category Macedon vs Rome table, Glasdoor.rom reviews (one-star reviews classified as sedition)
- **Application form** — Barbarian hatred slider (I-X), citizenship dropdown including "Barbarian (Will Be Evaluated Physically)," carrier pigeon confirmation
- **FAQ** — 12 Q&As ("Is death covered by insurance?" — "Death IS the insurance.")

## Tech Stack

- **Next.js 14** (App Router) — static site generation
- **TypeScript** — type safety for very serious military logistics
- **CSS Modules** — scoped styling, no external UI libs
- **Vercel** — deployment target

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Import this repository on [vercel.com](https://vercel.com)
2. Deploy (Next.js auto-detected from repo root)

All pages are statically generated — no server functions or environment variables needed.

## Project Structure

```
├── CLAUDE.md                          # AI assistant guidance
├── architecture_components_roadmap.md # Architecture & design docs
├── log.md                             # Development log
├── todo.md                            # Task tracker
├── app/                               # Pages (App Router)
│   ├── layout.tsx                     # Root layout (navbar, ticker, footer)
│   ├── page.tsx                       # Homepage
│   ├── macedon/                       # Phalanx recruiting
│   ├── legion/                        # Legion recruiting
│   ├── benefits/                      # Compensation comparison
│   ├── apply/                         # Application form
│   └── faq/                           # FAQ
└── components/                        # Navbar, Footer
```

## Legal Disclaimer

Not affiliated with any actual empire, living or deceased. Past conquering performance does not guarantee future territorial gains. SPQR Holdings is an equal opportunity employer for all citizens.
