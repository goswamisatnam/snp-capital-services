import type { MetadataRoute } from 'next'
import { FULL_ARTICLES } from '@/data/articles'
import { DICTIONARY } from '@/data/dictionary'
import { SITE_CONFIG } from '@/lib/constants'

const base = SITE_CONFIG.url.replace(/\/$/, '')
const now = new Date()

// ── Helpers ──────────────────────────────────────────────────────────────────

function staticUrl(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly',
): MetadataRoute.Sitemap[number] {
  return { url: `${base}/${path}`.replace(/([^:])\/\/+/g, '$1/'), lastModified: now, changeFrequency, priority }
}

// ── Static routes ─────────────────────────────────────────────────────────────

const homepage: MetadataRoute.Sitemap = [
  staticUrl('', 1.0, 'weekly'),
]

const mainSections: MetadataRoute.Sitemap = [
  staticUrl('blog',             0.8, 'weekly'),
  staticUrl('dictionary',       0.8, 'weekly'),
  staticUrl('calculators',      0.8, 'monthly'),
  staticUrl('markets',          0.8, 'monthly'),
  staticUrl('markets/india',    0.8, 'monthly'),
  staticUrl('markets/us',       0.8, 'monthly'),
  staticUrl('investing',        0.8, 'monthly'),
  staticUrl('personal-finance', 0.8, 'monthly'),
  staticUrl('trading',          0.8, 'monthly'),
  staticUrl('learning',         0.8, 'monthly'),
  staticUrl('about',            0.8, 'monthly'),
  staticUrl('contact',          0.8, 'monthly'),
]

const subPages: MetadataRoute.Sitemap = [
  // Personal Finance
  staticUrl('personal-finance/budgeting',      0.6),
  staticUrl('personal-finance/insurance',      0.6),
  staticUrl('personal-finance/tax-planning',   0.6),
  staticUrl('personal-finance/retirement',     0.6),
  staticUrl('personal-finance/emergency-fund', 0.6),
  staticUrl('personal-finance/credit-scores',  0.6),

  // Investing
  staticUrl('investing/stock-markets',   0.6),
  staticUrl('investing/mutual-funds',    0.6),
  staticUrl('investing/etfs',            0.6),
  staticUrl('investing/cryptocurrency',  0.6),
  staticUrl('investing/bonds',           0.6),
  staticUrl('investing/real-estate',     0.6),

  // Trading
  staticUrl('trading/introduction',       0.6),
  staticUrl('trading/how-to-start',       0.6),
  staticUrl('trading/learn',              0.6),
  staticUrl('trading/strategies',         0.6),
  staticUrl('trading/top-10-brokers',     0.6),
  staticUrl('trading/derivatives',        0.6),
  staticUrl('trading/futures-and-options',0.6),

  // India Markets
  staticUrl('markets/india/nse-bse',       0.6),
  staticUrl('markets/india/sebi-rules',    0.6),
  staticUrl('markets/india/demat-account', 0.6),
  staticUrl('markets/india/elss-ppf-nps',  0.6),
  staticUrl('markets/india/indian-fno',    0.6),
  staticUrl('markets/india/nri-investing', 0.6),

  // US Markets
  staticUrl('markets/us/nyse-nasdaq',    0.6),
  staticUrl('markets/us/401k-guide',     0.6),
  staticUrl('markets/us/roth-ira',       0.6),
  staticUrl('markets/us/sp500-basics',   0.6),
  staticUrl('markets/us/us-tax-for-nri', 0.6),
  staticUrl('markets/us/dtaa-benefits',  0.6),

  // Learning paths
  staticUrl('learning/beginner',     0.6),
  staticUrl('learning/intermediate', 0.6),
  staticUrl('learning/advanced',     0.6),
  staticUrl('learning/nri',          0.6),

  // Legal
  staticUrl('privacy-policy', 0.3),
  staticUrl('terms-of-use',   0.3),
]

// ── Dynamic routes (sourced from data files) ──────────────────────────────────

const articlePages: MetadataRoute.Sitemap = FULL_ARTICLES.map((article) => ({
  url: `${base}/blog/${article.slug}`,
  lastModified: article.updatedAt ? new Date(article.updatedAt) : new Date(article.publishedAt),
  changeFrequency: 'weekly' as const,
  priority: 0.7,
}))

const dictionaryPages: MetadataRoute.Sitemap = DICTIONARY.map((term) => ({
  url: `${base}/dictionary/${term.slug}`,
  lastModified: now,
  changeFrequency: 'monthly' as const,
  priority: 0.5,
}))

// ── Export ───────────────────────────────────────────────────────────────────

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...homepage,
    ...mainSections,
    ...subPages,
    ...articlePages,
    ...dictionaryPages,
  ]
}
