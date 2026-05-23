import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FULL_ARTICLES } from '@/data/articles'
import type { ArticleSection } from '@/data/articles'

const PF_CATEGORIES = ['Budgeting & Savings', 'Finance Literacy for Teens']

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return FULL_ARTICLES
    .filter((a) => PF_CATEGORIES.includes(a.category))
    .map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = FULL_ARTICLES.find(
    (a) => a.slug === slug && PF_CATEGORIES.includes(a.category),
  )
  if (!article) return {}
  return {
    title: `${article.title} — S&P Capital Services`,
    description: article.excerpt,
    alternates: { canonical: `/personal-finance/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  }
}

function renderSection(s: ArticleSection, idx: number) {
  switch (s.type) {
    case 'h2':
      return (
        <h2 key={idx} className="font-display text-navy text-2xl font-bold mt-10 mb-4">
          {s.content}
        </h2>
      )
    case 'h3':
      return (
        <h3 key={idx} className="font-display text-navy text-xl font-semibold mt-8 mb-3">
          {s.content}
        </h3>
      )
    case 'p':
      return (
        <p key={idx} className="text-gray-700 leading-relaxed mb-4">
          {s.content}
        </p>
      )
    case 'ul':
      return (
        <ul key={idx} className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700">
          {s.items?.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol key={idx} className="list-decimal list-outside ml-6 space-y-2 mb-6 text-gray-700">
          {s.items?.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      )
    case 'tip':
      return (
        <div key={idx} className="bg-teal-50 border-l-4 border-teal-400 rounded-r-lg px-5 py-4 mb-6">
          <p className="text-teal-800 text-sm leading-relaxed">
            <span className="font-semibold">💡 Pro Tip: </span>
            {s.content}
          </p>
        </div>
      )
    case 'warning':
      return (
        <div key={idx} className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-5 py-4 mb-6">
          <p className="text-amber-800 text-sm leading-relaxed">
            <span className="font-semibold">⚠️ Important: </span>
            {s.content}
          </p>
        </div>
      )
    case 'table':
      return (
        <div key={idx} className="overflow-x-auto mb-8 rounded-xl border border-cream-300 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-navy text-white">
              <tr>
                {s.headers?.map((h, i) => (
                  <th key={i} className="px-4 py-3 text-left font-medium text-xs uppercase tracking-wide">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {s.rows?.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cream-100'}>
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-3 text-gray-700 border-t border-cream-200">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    default:
      return null
  }
}

const categoryHref: Record<string, string> = {
  'Budgeting & Savings': '/personal-finance#budgeting',
  'Finance Literacy for Teens': '/personal-finance#teens',
}

const levelColors: Record<string, string> = {
  Beginner: 'bg-teal-100 text-teal-700',
  Intermediate: 'bg-gold-100 text-gold-700',
  Advanced: 'bg-red-100 text-red-700',
}

export default async function PersonalFinanceArticlePage({ params }: Props) {
  const { slug } = await params
  const article = FULL_ARTICLES.find(
    (a) => a.slug === slug && PF_CATEGORIES.includes(a.category),
  )
  if (!article) notFound()

  const relatedArticles = FULL_ARTICLES.filter(
    (a) => a.slug !== slug && a.category === article.category,
  ).slice(0, 4)

  return (
    <div className="px-[5vw] py-12 max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8 flex-wrap">
        <Link href="/" className="hover:text-navy transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/personal-finance" className="hover:text-navy transition-colors">
          Personal Finance
        </Link>
        <span>/</span>
        <Link
          href={categoryHref[article.category] ?? '/personal-finance'}
          className="hover:text-navy transition-colors"
        >
          {article.category}
        </Link>
        <span>/</span>
        <span className="text-gray-500 truncate max-w-xs">{article.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${levelColors[article.level] ?? 'bg-gray-100 text-gray-600'}`}>
            {article.level}
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-cream-200 text-gray-600">
            {article.category}
          </span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-purple-100 text-purple-700">
            {article.market} Market
          </span>
        </div>

        {article.emoji && <div className="text-6xl mb-6">{article.emoji}</div>}

        <h1 className="font-display text-navy text-3xl sm:text-4xl font-bold leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-6">{article.excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-gray-400 pb-6 border-b border-cream-300 flex-wrap">
          <span>✍️ {article.author}</span>
          <span>•</span>
          <span>
            📅{' '}
            {new Date(article.publishedAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </span>
          <span>•</span>
          <span>⏱ {article.readTime} min read</span>
        </div>
      </header>

      {/* Content */}
      <article className="prose-base">
        {article.sections.map((section, i) => renderSection(section, i))}
      </article>

      {/* Tags */}
      <div className="mt-12 pt-6 border-t border-cream-300">
        <p className="text-xs text-gray-400 mb-3 uppercase tracking-widest">Tags</p>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-cream-200 text-gray-600 px-3 py-1.5 rounded-full hover:bg-cream-300 transition-colors cursor-default"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Back */}
      <div className="mt-10">
        <Link
          href="/personal-finance"
          className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-navy font-medium transition-colors"
        >
          ← Back to Personal Finance
        </Link>
      </div>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <div className="mt-12 pt-8 border-t border-cream-300">
          <h3 className="font-display text-navy text-xl font-semibold mb-6">
            More in {article.category}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {relatedArticles.map((a) => (
              <Link
                key={a.id}
                href={`/personal-finance/${a.slug}`}
                className="bg-cream-100 border border-cream-300 rounded-xl p-4 hover:border-navy hover:shadow-sm transition-all group"
              >
                {a.emoji && <span className="text-2xl mb-2 block">{a.emoji}</span>}
                <p className="text-sm font-medium text-navy leading-snug group-hover:text-teal-700 transition-colors">
                  {a.title}
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  {a.readTime} min · {a.level}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
