import type {
  NavCategory, TickerItem, LearningPath,
  TopicCategory, Article, MarketInfo
} from '@/types'

// ── Site Config ──────────────────────────
export const SITE_CONFIG = {
  name: 'S&P Capital Services',
  tagline: 'Your Complete Guide to Financial Independence',
  description: 'Master investing, stocks, mutual funds, crypto, and personal finance for Indian and US markets. Free financial education, tools, and dictionary.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://snpcapitalservices.com',
  email: 'contact@snpcapitalservices.com',
  twitter: '@snpcapital',
}

// ── Navigation Categories ─────────────────
export const NAV_CATEGORIES: NavCategory[] = [
  { label: 'Investing',       icon: '📚', href: '/investing' },
  { label: 'Personal Finance',icon: '💰', href: '/personal-finance' },
  { label: 'Markets',         icon: '📊', href: '/markets' },
  { label: 'Mutual Funds',    icon: '🏦', href: '/mutual-funds' },
  { label: 'Crypto',          icon: '₿',  href: '/crypto' },
  { label: 'India Markets',   icon: '🇮🇳', href: '/markets/india' },
  { label: 'US Markets',      icon: '🇺🇸', href: '/markets/us' },
  { label: 'Retirement',      icon: '🏖️', href: '/retirement' },
  { label: 'Taxes',           icon: '💼', href: '/taxes' },
  { label: 'Dictionary',      icon: '📖', href: '/dictionary' },
  { label: 'Calculators',     icon: '🧮', href: '/calculators' },
]

// ── Market Ticker ────────────────────────
export const TICKER_ITEMS: TickerItem[] = [
  { name: 'NIFTY 50',   value: '24,682',  change: '+0.42%', isUp: true  },
  { name: 'SENSEX',     value: '81,456',  change: '+0.38%', isUp: true  },
  { name: 'S&P 500',    value: '5,897',   change: '+0.61%', isUp: true  },
  { name: 'NASDAQ',     value: '19,247',  change: '+0.78%', isUp: true  },
  { name: 'BTC/USD',    value: '$67,420', change: '-1.2%',  isUp: false },
  { name: 'ETH/USD',    value: '$3,510',  change: '+0.55%', isUp: true  },
  { name: 'GOLD',       value: '$2,345',  change: '+0.19%', isUp: true  },
  { name: 'USD/INR',    value: '83.42',   change: '-0.05%', isUp: false },
  { name: 'RELIANCE',   value: '₹2,943',  change: '+0.9%',  isUp: true  },
  { name: 'TCS',        value: '₹3,789',  change: '+0.45%', isUp: true  },
  { name: 'INFOSYS',    value: '₹1,634',  change: '-0.3%',  isUp: false },
  { name: 'AAPL',       value: '$213',    change: '+1.1%',  isUp: true  },
  { name: 'TSLA',       value: '$248',    change: '-0.7%',  isUp: false },
  { name: 'MSFT',       value: '$432',    change: '+0.8%',  isUp: true  },
  { name: 'NIFTY BANK', value: '52,340',  change: '+0.55%', isUp: true  },
  { name: 'CRUDE OIL',  value: '$81.4',   change: '-0.3%',  isUp: false },
]

// ── Learning Paths ───────────────────────
export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'beginner',
    level: 'beginner',
    levelLabel: '🟢 Beginner',
    icon: '🌱',
    title: 'Foundations of Investing',
    description: "Never invested before? Start here. Build your core financial vocabulary and mindset.",
    topics: [
      'What is money & inflation?',
      'Saving vs Investing',
      'Risk and return basics',
      'Types of investments',
      'Opening your first account',
      'How to start your first SIP',
    ],
    href: '/learning/beginner',
    colorClass: 'border-teal-400/30 hover:border-teal-400',
    badgeClass: 'bg-teal-50 text-teal-500',
  },
  {
    id: 'intermediate',
    level: 'intermediate',
    levelLabel: '🟡 Intermediate',
    icon: '📈',
    title: 'Stocks & Mutual Funds',
    description: 'Understand equity markets, valuations, and how to build a diversified portfolio.',
    topics: [
      'How stock markets work',
      'Reading financial statements',
      'P/E, EPS, Market Cap',
      'Mutual fund types & selection',
      'Asset allocation strategies',
      'Tax-saving investments (ELSS)',
    ],
    href: '/learning/intermediate',
    colorClass: 'border-gold-400/30 hover:border-gold-400',
    badgeClass: 'bg-gold-50 text-gold-700',
  },
  {
    id: 'advanced',
    level: 'advanced',
    levelLabel: '🔴 Advanced',
    icon: '⚡',
    title: 'Advanced Markets & Trading',
    description: 'Derivatives, options strategies, technical analysis, and portfolio management.',
    topics: [
      'Futures & Options (F&O) India',
      'Options Greeks: Delta, Gamma, Vega',
      'Technical analysis & chart patterns',
      'Portfolio management theory',
      'Hedging strategies',
      'Algorithmic & quantitative investing',
    ],
    href: '/learning/advanced',
    colorClass: 'border-red-400/30 hover:border-red-400',
    badgeClass: 'bg-red-50 text-red-600',
  },
  {
    id: 'nri',
    level: 'nri',
    levelLabel: '🌏 NRI / Cross-Border',
    icon: '✈️',
    title: 'India + US: The NRI Guide',
    description: 'For Indians living in the US — invest in both markets and manage cross-border taxes.',
    topics: [
      'NRE / NRO / FCNR accounts',
      'FEMA & RBI guidelines',
      'US: 401(k), Roth IRA, HSA',
      'DTAA (India-US tax treaty)',
      'Repatriating funds to India',
      'RNOR / ROR tax transitions',
    ],
    href: '/learning/nri',
    colorClass: 'border-navy-400/30 hover:border-navy-600',
    badgeClass: 'bg-navy-50 text-navy-800',
  },
]

// ── Topic Categories ──────────────────────
export const TOPIC_CATEGORIES: TopicCategory[] = [
  { emoji: '📈', name: 'Stock Markets',     count: '120+ articles', href: '/investing/stocks',   tag: 'both'  },
  { emoji: '🏦', name: 'Mutual Funds',      count: '85+ articles',  href: '/mutual-funds',        tag: 'india' },
  { emoji: '💼', name: 'ETFs',              count: '60+ articles',  href: '/etfs',                tag: 'both'  },
  { emoji: '₿',  name: 'Cryptocurrency',    count: '70+ articles',  href: '/crypto',              tag: 'both'  },
  { emoji: '🏠', name: 'Real Estate',       count: '45+ articles',  href: '/real-estate',         tag: 'both'  },
  { emoji: '📊', name: 'Options & F&O',     count: '55+ articles',  href: '/options',             tag: 'both'  },
  { emoji: '💰', name: 'Personal Finance',  count: '90+ articles',  href: '/personal-finance',    tag: 'both'  },
  { emoji: '🏖️', name: 'Retirement',        count: '65+ articles',  href: '/retirement',          tag: 'both'  },
  { emoji: '🧾', name: 'Taxation',          count: '75+ articles',  href: '/taxes',               tag: 'both'  },
  { emoji: '🌍', name: 'Macroeconomics',    count: '50+ articles',  href: '/economics',           tag: 'both'  },
  { emoji: '🏢', name: 'Corporate Finance', count: '40+ articles',  href: '/corporate-finance',   tag: 'both'  },
  { emoji: '🛡️', name: 'Insurance',         count: '35+ articles',  href: '/insurance',           tag: 'india' },
  { emoji: '🔗', name: 'Bonds',             count: '48+ articles',  href: '/bonds',               tag: 'both'  },
  { emoji: '💱', name: 'Forex & Currency',  count: '38+ articles',  href: '/forex',               tag: 'both'  },
  { emoji: '🇮🇳', name: 'India Markets',     count: '100+ articles', href: '/markets/india',       tag: 'india' },
  { emoji: '🇺🇸', name: 'US Markets',        count: '95+ articles',  href: '/markets/us',          tag: 'us'    },
]

// ── Featured Articles ─────────────────────
export const FEATURED_ARTICLES: Article[] = [
  {
    id: '1',
    slug: 'sip-vs-lump-sum',
    title: 'SIP vs Lump Sum: Which Strategy Wins in India\'s Market?',
    excerpt: 'Systematic Investment Plans leverage rupee-cost averaging. But when markets are low, lump sum can beat SIP significantly. We compare both strategies across 5, 10, and 20-year horizons using Nifty 50 historical data.',
    category: 'Investing Basics',
    level: 'Beginner',
    market: 'India',
    readTime: 8,
    publishedAt: '2025-05-01',
    emoji: '📊',
    featured: true,
  },
  {
    id: '2',
    slug: 'indians-invest-us-stocks',
    title: 'How Indians Can Invest in US Stocks: Complete Guide 2025',
    excerpt: 'Step-by-step guide for Indian residents and NRIs to invest in US equities via LRS, platforms like Vested, INDmoney, and the tax implications.',
    category: 'US Markets',
    level: 'Intermediate',
    market: 'Both',
    readTime: 12,
    publishedAt: '2025-04-15',
  },
  {
    id: '3',
    slug: 'ltcg-stcg-tax-guide',
    title: 'LTCG & STCG Tax on Stocks: Everything You Need to Know',
    excerpt: 'New tax rates from Budget 2024 explained — 12.5% LTCG, 20% STCG, and the ₹1.25 lakh exemption. With worked examples for mutual funds, property, and gold.',
    category: 'Taxation',
    level: 'Intermediate',
    market: 'India',
    readTime: 9,
    publishedAt: '2025-03-20',
  },
  {
    id: '4',
    slug: '401k-vs-roth-ira-vs-nps',
    title: '401(k) vs Roth IRA vs NPS: The Ultimate Retirement Comparison',
    excerpt: "For NRIs managing retirement savings across two countries, understanding how these three accounts interact — and the DTAA implications — is critical.",
    category: 'Retirement',
    level: 'Advanced',
    market: 'Both',
    readTime: 15,
    publishedAt: '2025-03-05',
  },
  {
    id: '5',
    slug: 'bitcoin-vs-ethereum',
    title: 'Bitcoin vs Ethereum: Fundamental Differences Explained',
    excerpt: 'BTC is digital gold; ETH is programmable money. We explain the technical, economic, and investment case for each, and how to think about allocation.',
    category: 'Cryptocurrency',
    level: 'Beginner',
    market: 'Both',
    readTime: 10,
    publishedAt: '2025-02-18',
  },
  {
    id: '6',
    slug: 'options-greeks-explained',
    title: 'Understanding Option Greeks: Delta, Gamma, Theta & Vega',
    excerpt: 'The four Greeks every options trader must know. With Python examples and real NSE/F&O scenarios showing how each Greek affects your P&L.',
    category: 'Options & F&O',
    level: 'Advanced',
    market: 'India',
    readTime: 18,
    publishedAt: '2025-02-01',
  },
]

// ── Market Comparison Data ────────────────
export const MARKET_COMPARISON: MarketInfo[] = [
  {
    flag: '🇮🇳',
    name: 'Indian Markets',
    description: 'Among the fastest-growing major economies. India\'s markets offer significant growth potential, especially in mid and small caps.',
    facts: [
      { label: 'Primary Exchanges', value: 'NSE, BSE' },
      { label: 'Regulator', value: 'SEBI' },
      { label: 'Benchmark Index', value: 'Nifty 50, Sensex' },
      { label: 'Market Cap (2025)', value: '~$4.5 Trillion' },
      { label: 'Trading Hours', value: '9:15 AM – 3:30 PM IST' },
      { label: 'Account Type', value: 'Demat + Trading Account' },
      { label: 'LTCG Rate', value: '12.5% (above ₹1.25L)' },
      { label: 'STCG Rate', value: '20% (equity)' },
      { label: 'Tax Saving', value: 'ELSS (80C, up to ₹1.5L)' },
      { label: 'Currency', value: 'Indian Rupee (₹)' },
    ],
  },
  {
    flag: '🇺🇸',
    name: 'US Markets',
    description: "The world's largest and most liquid equity market, home to global giants and the most widely followed indices on earth.",
    facts: [
      { label: 'Primary Exchanges', value: 'NYSE, NASDAQ' },
      { label: 'Regulator', value: 'SEC, FINRA' },
      { label: 'Benchmark Index', value: 'S&P 500, Dow Jones' },
      { label: 'Market Cap (2025)', value: '~$47 Trillion' },
      { label: 'Trading Hours', value: '9:30 AM – 4:00 PM ET' },
      { label: 'Account Type', value: 'Brokerage Account' },
      { label: 'LTCG Rate', value: '0%, 15%, or 20%' },
      { label: 'STCG Rate', value: 'Ordinary income rates' },
      { label: 'Tax Advantage', value: '401(k), Roth IRA, HSA' },
      { label: 'Currency', value: 'US Dollar ($)' },
    ],
  },
]

// ── Finance Concepts A–Z ─────────────────
export const FINANCIAL_CONCEPTS: string[] = [
  'Alpha', 'Amortization', 'Annual Return', 'Asset Allocation',
  'Bear Market', 'Beta', 'Blue Chip', 'Bond', 'Bull Market',
  'CAGR', 'Call Option', 'Capital Gains', 'Compound Interest',
  'Correction', 'Demat Account', 'Diversification', 'Dividend',
  'EBITDA', 'ELSS', 'EPS', 'ETF', 'Expense Ratio',
  'Futures', 'Hedge', 'Index Fund', 'Inflation', 'IPO',
  'Liquidity', 'LTCG', 'Market Cap', 'Mutual Fund', 'NAV',
  'Nifty 50', 'NPS', 'Options', 'P/E Ratio', 'Portfolio',
  'PPF', 'Put Option', 'REIT', 'Risk Premium', 'Roth IRA',
  'Sensex', 'SIP', 'Short Selling', 'STCG', 'Stock Split',
  'VWAP', 'Volatility', 'Yield', '401(k)',
]

// ── Calculator List ───────────────────────
export const CALCULATORS = [
  { id: 'sip',        icon: '📈', name: 'SIP Calculator',        desc: 'Monthly SIP returns with step-up.',       tag: 'India',  href: '/calculators#sip'        },
  { id: 'cagr',       icon: '📊', name: 'CAGR Calculator',       desc: 'Compound annual growth rate.',            tag: 'Both',   href: '/calculators#cagr'       },
  { id: 'compound',   icon: '💹', name: 'Compound Interest',     desc: 'Power of compounding visualized.',        tag: 'Both',   href: '/calculators#compound'   },
  { id: 'emi',        icon: '🏠', name: 'EMI Calculator',        desc: 'Loan EMI + amortization schedule.',       tag: 'Both',   href: '/calculators#emi'        },
  { id: 'goal',       icon: '🎯', name: 'Goal SIP Planner',      desc: 'Reverse SIP: reach any target.',          tag: 'India',  href: '/calculators#goal'       },
  { id: 'retirement', icon: '🏖️', name: 'Retirement Planner',    desc: 'Inflation-adjusted retirement corpus.',   tag: 'Both',   href: '/calculators#retirement' },
  { id: 'ltcg',       icon: '🧾', name: 'LTCG / STCG Tax',       desc: 'Capital gains tax estimator India.',      tag: 'India',  href: '/calculators#ltcg'       },
  { id: 'k401',       icon: '🇺🇸', name: '401(k) / IRA Growth',  desc: 'US retirement account projection.',       tag: 'US',     href: '/calculators#k401'       },
]
