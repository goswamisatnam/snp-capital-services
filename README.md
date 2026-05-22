# S&P Capital Services – Financial Literacy Platform

A complete **Investopedia-style finance education website** covering India and US markets. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Quick Start with Claude Code in VS Code

### Prerequisites
- Node.js 18+ ([download](https://nodejs.org))
- VS Code with the **Claude Code extension** installed
- Git (optional, for deployment)

### 1. Install dependencies
```bash
cd snp-capital-services
npm install
```

### 2. Set up environment variables
```bash
cp .env.local.example .env.local
# Edit .env.local with your values (optional for local dev)
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Project Structure

```
snp-capital-services/
├── src/
│   ├── app/                        # Next.js App Router pages
│   │   ├── layout.tsx              # Root layout (Navbar, Footer, Ticker)
│   │   ├── page.tsx                # Homepage
│   │   ├── calculators/page.tsx    # Finance calculators suite
│   │   ├── dictionary/page.tsx     # Finance dictionary
│   │   ├── blog/page.tsx           # Articles listing
│   │   ├── markets/
│   │   │   ├── india/page.tsx      # India markets guide
│   │   │   └── us/page.tsx         # US markets guide
│   │   └── about/page.tsx          # About page
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Sticky nav with search + categories
│   │   │   ├── Footer.tsx          # Multi-column footer with disclaimer
│   │   │   └── MarketTicker.tsx    # Scrolling market prices ticker
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.tsx            # Hero with search
│   │   │   ├── LearningPaths.tsx   # 4 learning path cards
│   │   │   ├── TopicCategories.tsx # 16 topic category grid
│   │   │   ├── FeaturedArticles.tsx# Featured + numbered articles
│   │   │   ├── DictionaryFeature.tsx # Dictionary search section
│   │   │   ├── MarketComparison.tsx  # India vs US comparison tables
│   │   │   ├── ToolsPreview.tsx    # Calculator grid preview
│   │   │   ├── ConceptsStrip.tsx   # A-Z financial concepts
│   │   │   └── Newsletter.tsx      # Email subscribe section
│   │   │
│   │   └── calculators/
│   │       ├── CalculatorLayout.tsx  # Sidebar + routing
│   │       ├── CalcUI.tsx            # Shared UI primitives
│   │       ├── SIPCalculator.tsx     # SIP + Step-Up (India)
│   │       ├── CAGRCalculator.tsx    # CAGR (Both)
│   │       ├── CompoundInterestCalc.tsx # Compound Interest (Both)
│   │       ├── EMICalculator.tsx     # EMI + Amortization (Both)
│   │       ├── GoalSIPPlanner.tsx    # Reverse SIP (India)
│   │       ├── RetirementPlanner.tsx # Retirement (Both)
│   │       ├── LTCGCalculator.tsx    # Capital Gains Tax (India)
│   │       └── K401Calculator.tsx    # 401k/IRA Growth (US)
│   │
│   ├── lib/
│   │   ├── constants.ts            # All site data (articles, nav, tickers…)
│   │   └── calculations.ts         # Pure financial math functions
│   │
│   ├── types/
│   │   └── index.ts                # All TypeScript interfaces
│   │
│   └── data/                       # (Add your content here)
│       └── dictionary.ts           # Finance term definitions
│
├── public/                         # Static assets
│   ├── favicon.ico
│   └── og-image.png                # Social sharing image
│
├── next.config.ts                  # Next.js config (security headers, redirects)
├── tailwind.config.ts              # Brand design system
├── tsconfig.json
├── package.json
└── .env.local.example
```

---

## 🧮 Finance Calculators

| Calculator | Market | Features |
|---|---|---|
| SIP Calculator | 🇮🇳 India | Monthly SIP, Step-Up SIP, line chart |
| CAGR Calculator | 🌏 Both | Bar chart, INR/USD support |
| Compound Interest | 🌏 Both | Frequency toggle, stacked bar chart |
| EMI / Loan | 🌏 Both | Doughnut chart + amortization table |
| Goal SIP Planner | 🇮🇳 India | Reverse SIP calculation, line chart |
| Retirement Planner | 🌏 Both | Inflation-adjusted, target line chart |
| LTCG / STCG Tax | 🇮🇳 India | FY25-26 rates, doughnut chart |
| 401(k) / IRA Growth | 🇺🇸 US | Employer match, Roth vs Traditional |

All calculator math is in `src/lib/calculations.ts` — pure functions, easy to test.

---

## 🎨 Design System (Tailwind)

Custom brand colors defined in `tailwind.config.ts`:

```
navy   → #0C1B33  (primary brand)
gold   → #C9A84C  (accent)
cream  → #F8F3EC  (background)
teal   → #1A8C7A  (CTAs, links)
```

Fonts: **Playfair Display** (display/headings) + **DM Sans** (body)

---

## 🌐 Deployment to Vercel (Free)

```bash
# 1. Push to GitHub
git init && git add . && git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/snp-capital.git
git push -u origin main

# 2. Import in Vercel
# Go to vercel.com → New Project → Import your repo → Deploy
# Vercel auto-detects Next.js and sets up HTTPS + CDN

# 3. Add custom domain
# In Vercel: Settings → Domains → Add snpcapitalservices.com
# Update your domain's DNS to point to Vercel
```

---

## 📈 SEO Configuration

- Metadata API configured in each page via `export const metadata`
- Root layout sets site-wide Open Graph, Twitter Cards, and robots
- Canonical URLs set on each page
- Security headers in `next.config.ts`
- Add `public/sitemap.xml` and submit to Google Search Console
- Add Google Analytics 4 via `NEXT_PUBLIC_GA_ID` in `.env.local`

---

## ➕ Adding Content

### New Article
1. Add to `FEATURED_ARTICLES` array in `src/lib/constants.ts`
2. Create `src/app/blog/[slug]/page.tsx` for the full article

### New Calculator
1. Create `src/components/calculators/YourCalc.tsx`
2. Add math function to `src/lib/calculations.ts`
3. Add type to `src/types/index.ts`
4. Register in `CalculatorLayout.tsx` CALC_LIST array

### Dictionary Terms
1. Create `src/data/dictionary.ts` with term objects
2. Wire up to the dictionary page search

### Market Ticker (Live Data)
Replace static `TICKER_ITEMS` in `constants.ts` with API call:
- **Alpha Vantage** (free tier, 25 req/day): alphavantage.co
- **Finnhub** (free, 60 req/min): finnhub.io
- **Polygon.io** (freemium): polygon.io

---

## 🛡️ Security

- HTTP security headers set in `next.config.ts`
- No user auth required for current features
- Never commit `.env.local` (it's in `.gitignore` by default)
- Rate-limit any API routes you add

---

## 📞 Support

Built for **S&P Capital Services LLC** · snpcapitalservices.com

Questions? Open an issue or ask Claude Code: "Explain the project structure" 🤖
