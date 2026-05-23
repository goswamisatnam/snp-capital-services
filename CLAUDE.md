# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on localhost:3000
npm run build        # Production build
npm run lint         # ESLint via Next.js
npm run type-check   # TypeScript check without emitting (tsc --noEmit)
```

There are no tests. The project deploys to Vercel; `npm run build` is the closest to CI validation.

### Environment setup

Copy `.env.local.example` to `.env.local` and fill in:
- `ANTHROPIC_API_KEY` — required for the FinanceGPT chat endpoint
- `RESEND_API_KEY` — optional, for newsletter and contact form emails
- `NEXT_PUBLIC_SITE_URL` — used in sitemap and OG tags (default: `https://snpcapitalservices.com`)

## Architecture

**S&P Capital Services** is a financial literacy education platform covering Indian and US investment markets. It uses **Next.js 15 App Router**, **React 19**, **TypeScript**, and **Tailwind CSS**.

### Routing and page structure

Pages live in `src/app/` using file-based App Router routing. Dynamic routes handle most content:

| Route pattern | Content source |
|---|---|
| `/blog/[slug]` | `src/data/articles.ts` |
| `/dictionary/[slug]` | `src/data/dictionary.ts` |
| `/markets/india/[topic]` and `/markets/us/[topic]` | `src/data/topic-pages.ts` |
| `/investing/[category]`, `/personal-finance/[topic]`, `/trading/[topic]` | `src/data/topic-pages.ts` |
| `/calculators` | Calculator components in `src/components/calculators/` |

All dynamic pages resolve slugs by looking up entries in their respective data file. Adding new content means adding an entry to the data file — no new route files needed.

### Data files (the content layer)

The three files in `src/data/` are the primary content source — not a CMS or database:

- **`articles.ts`** (~129 KB) — all blog articles with full content
- **`dictionary.ts`** (~29 KB) — financial term definitions
- **`topic-pages.ts`** (~122 KB) — market/topic guide pages

`src/lib/constants.ts` holds site config, navigation structure (`NAV_ITEMS` with dropdown groups), article metadata, ticker items, and learning paths.

### AI chat (FinanceGPT)

`src/app/api/chat/route.ts` is a server-side proxy to the Anthropic API (Claude Haiku). The API key never reaches the client. It enforces an in-memory rate limit of 20 req/min per IP — note this resets on cold starts (serverless). The system prompt is defined in the same file. Client components are in `src/components/ai/`.

### Calculator architecture

Each calculator (`src/components/calculators/`) is a self-contained React component. Pure math functions live in `src/lib/calculations.ts` — all calculators import from there. Charts use Chart.js via `react-chartjs-2`.

### API routes

```
src/app/api/
├── chat/route.ts        # FinanceGPT — Anthropic proxy with rate limiting
├── newsletter/route.ts  # Email signup via Resend
├── contact/route.ts     # Contact form via Resend
├── market-data/route.ts # Ticker data (optional live data)
└── analytics/route.ts   # Custom analytics events
```

### Design system

Brand tokens are defined in `tailwind.config.ts`:
- **Colors**: `navy` (primary, `#0C1B33`), `gold` (accent, `#C9A84C`), `cream` (background, `#F8F3EC`), `teal` (secondary, `#1A8C7A`)
- **Fonts**: `font-display` → Playfair Display (headings), `font-sans` → DM Sans (body)
- **Shadows**: `shadow-card`, `shadow-card-hover`, `shadow-nav`
- **Animations**: `animate-ticker` (scrolling market ticker), `animate-fade-up`

Animations beyond Tailwind use **Framer Motion** (scroll-triggered fade-ups, navbar dropdowns).

### TypeScript types

All shared interfaces are in `src/types/index.ts`. Every calculator has dedicated `Inputs` and `Result` interfaces there. Import with `@/types` (path alias maps `@/` → `src/`).

### SEO and redirects

Canonical redirects (e.g. `/crypto` → `/investing/cryptocurrency`) are in `next.config.ts`. Each page sets its own metadata via the Next.js Metadata API. The dynamic sitemap is at `src/app/sitemap.ts`. Security headers (CSP, X-Frame-Options) are applied globally in `next.config.ts`.
