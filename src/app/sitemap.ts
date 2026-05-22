import { SITE_CONFIG } from '@/lib/constants'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url.replace(/\/$/, '')

  const staticPages = [
    '', 'about', 'blog', 'dictionary', 'calculators', 'markets/india', 'markets/us',
    'personal-finance', 'mutual-funds', 'crypto', 'retirement', 'taxes'
  ]

  const pages: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${baseUrl}/${p}`.replace(/\/\/+/g, '/'),
    lastModified: new Date().toISOString(),
  }))

  // Add blog article pages
  // If dynamic articles exist, list them too
  try {
    // Lazy-load article slugs to include
    const { FULL_ARTICLES } = require('@/data/articles')
    if (Array.isArray(FULL_ARTICLES)) {
      FULL_ARTICLES.forEach((a: any) => pages.push({ url: `${baseUrl}/blog/${a.slug}`, lastModified: a.publishedAt || new Date().toISOString() }))
    }
  } catch (e) {
    // ignore if file cannot be loaded at build time
  }

  return pages
}
