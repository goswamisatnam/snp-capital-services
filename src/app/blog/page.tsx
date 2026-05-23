import type { Metadata } from 'next'
import Link from 'next/link'
import { FULL_ARTICLES, type FullArticle } from '@/data/articles'

export const metadata: Metadata = {
  title: 'Blog & Articles — Finance Education | S&P Capital Services',
  description: 'In-depth articles on investing, trading, personal finance, and market insights for India and US markets.',
  alternates: { canonical: '/blog' },
}

const CATEGORY_STYLES: Record<string, { bg: string; badge: string; accent: string }> = {
  'Investing Basics':    { bg: 'linear-gradient(135deg, #0C1B33 0%, #1A8C7A 100%)', badge: 'bg-teal-100 text-teal-700',    accent: '#5eead4' },
  'US Markets':          { bg: 'linear-gradient(135deg, #0f2752 0%, #1d4ed8 100%)', badge: 'bg-blue-100 text-blue-700',     accent: '#93c5fd' },
  'Taxation':            { bg: 'linear-gradient(135deg, #1e1b4b 0%, #6d28d9 100%)', badge: 'bg-violet-100 text-violet-700', accent: '#c4b5fd' },
  'Retirement':          { bg: 'linear-gradient(135deg, #431407 0%, #c2410c 100%)', badge: 'bg-orange-100 text-orange-700', accent: '#fdba74' },
  'Cryptocurrency':      { bg: 'linear-gradient(135deg, #1c1408 0%, #b45309 100%)', badge: 'bg-amber-100 text-amber-700',   accent: '#fcd34d' },
  'Options & F&O':       { bg: 'linear-gradient(135deg, #450a0a 0%, #b91c1c 100%)', badge: 'bg-red-100 text-red-700',       accent: '#fca5a5' },
  'Budgeting & Savings': { bg: 'linear-gradient(135deg, #052e16 0%, #059669 100%)', badge: 'bg-emerald-100 text-emerald-700', accent: '#6ee7b7' },
  'Finance Literacy for Teens': { bg: 'linear-gradient(135deg, #3b0764 0%, #a21caf 100%)', badge: 'bg-purple-100 text-purple-700', accent: '#f0abfc' },
}
const DEFAULT_STYLE = CATEGORY_STYLES['Investing Basics']

function getStyle(category: string) {
  return CATEGORY_STYLES[category] ?? DEFAULT_STYLE
}

const LEVEL_BADGE: Record<string, string> = {
  Beginner: 'bg-teal-100 text-teal-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
}

function Thumbnail({ article, large = false }: { article: FullArticle; large?: boolean }) {
  const s = getStyle(article.category)
  return (
    <div
      className={`relative w-full overflow-hidden ${large ? 'h-56 sm:h-72' : 'h-44'}`}
      style={{ background: s.bg }}
    >
      {/* Decorative blobs */}
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/[0.06]" />
      <div className="absolute -left-8 -bottom-12 w-36 h-36 rounded-full bg-white/[0.06]" />
      <div className="absolute right-1/3 top-1/4 w-20 h-20 rounded-full bg-white/[0.04]" />
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <span className={large ? 'text-7xl drop-shadow-lg' : 'text-5xl drop-shadow-md'}>
          {article.emoji ?? '📄'}
        </span>
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.14em] px-3 py-1 rounded-full"
          style={{ color: s.accent, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(4px)' }}
        >
          {article.category}
        </span>
      </div>
      {/* Market tag — top right */}
      <div className="absolute top-3 right-3">
        <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-black/30 text-white/80 backdrop-blur-sm">
          {article.market} Market
        </span>
      </div>
      {/* Read time — bottom left */}
      <div className="absolute bottom-3 left-3">
        <span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-black/30 text-white/70 backdrop-blur-sm">
          {article.readTime} min read
        </span>
      </div>
    </div>
  )
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function BlogPage() {
  const sorted = [...FULL_ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  const featured = sorted[0]
  const rest = sorted.slice(1)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-navy text-white px-[5vw] py-14">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-medium uppercase tracking-widest text-gold mb-3">Finance Blog</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
            In-depth <em className="text-gold not-italic">Finance Articles</em>
          </h1>
          <p className="text-gray-300 text-base max-w-xl">
            {FULL_ARTICLES.length} articles on investing, trading, personal finance, and market insights for India and US.
          </p>
        </div>
      </section>

      <div className="px-[5vw] py-12 max-w-5xl mx-auto">
        {/* Featured article */}
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-500 mb-5">Featured Article</p>
        <Link
          href={`/blog/${featured.slug}`}
          className="group block rounded-2xl overflow-hidden border border-cream-300 hover:border-navy hover:shadow-card transition-all mb-14"
        >
          <Thumbnail article={featured} large />
          <div className="p-6 sm:p-8 bg-white">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${LEVEL_BADGE[featured.level]}`}>
                {featured.level}
              </span>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getStyle(featured.category).badge}`}>
                {featured.category}
              </span>
            </div>
            <h2 className="font-display text-navy text-2xl sm:text-3xl font-bold leading-snug mb-3 group-hover:text-teal-700 transition-colors">
              {featured.title}
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-4 max-w-2xl">{featured.excerpt}</p>
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span>{featured.readTime} min read</span>
              <span>·</span>
              <span>{formatDate(featured.publishedAt)}</span>
              <span>·</span>
              <span className="text-teal-600 font-medium group-hover:underline">Read article →</span>
            </div>
          </div>
        </Link>

        {/* All articles grid */}
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">All Articles</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group bg-white border border-cream-300 rounded-2xl overflow-hidden hover:border-navy hover:shadow-card transition-all flex flex-col"
            >
              <Thumbnail article={article} />
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${LEVEL_BADGE[article.level]}`}>
                    {article.level}
                  </span>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${getStyle(article.category).badge}`}>
                    {article.category}
                  </span>
                </div>
                <h2 className="font-display text-navy font-bold text-base leading-snug mb-2 group-hover:text-teal-700 transition-colors line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-cream-200 pt-3 text-[11px] text-gray-400">
                  <span>{article.readTime} min read</span>
                  <span>{formatDate(article.publishedAt)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
