import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { FULL_ARTICLES } from '@/data/articles'
import type { ArticleSection } from '@/data/articles'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_CONFIG } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return FULL_ARTICLES.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = FULL_ARTICLES.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
    },
    twitter: { card: 'summary_large_image' },
  }
}

function renderSection(s: ArticleSection, idx: number) {
  switch (s.type) {
    case 'h2':
      return <h2 key={idx} className="font-display text-navy text-2xl font-bold mt-10 mb-4">{s.content}</h2>
    case 'h3':
      return <h3 key={idx} className="font-display text-navy text-xl font-semibold mt-8 mb-3">{s.content}</h3>
    case 'p':
      return <p key={idx} className="text-gray-700 leading-relaxed mb-4">{s.content}</p>
    case 'ul':
      return (
        <ul key={idx} className="list-disc list-outside ml-6 space-y-2 mb-6 text-gray-700">
          {s.items?.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
        </ul>
      )
    case 'ol':
      return (
        <ol key={idx} className="list-decimal list-outside ml-6 space-y-2 mb-6 text-gray-700">
          {s.items?.map((item, i) => <li key={i} className="leading-relaxed">{item}</li>)}
        </ol>
      )
    case 'tip':
      return (
        <div key={idx} className="bg-teal-50 border-l-4 border-teal-400 rounded-r-lg px-5 py-4 mb-6">
          <p className="text-teal-800 text-sm leading-relaxed"><span className="font-semibold">💡 Pro Tip: </span>{s.content}</p>
        </div>
      )
    case 'warning':
      return (
        <div key={idx} className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-5 py-4 mb-6">
          <p className="text-amber-800 text-sm leading-relaxed"><span className="font-semibold">⚠️ Important: </span>{s.content}</p>
        </div>
      )
    case 'table':
      return (
        <div key={idx} className="overflow-x-auto mb-8 rounded-xl border border-cream-300 shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-navy text-white">
              <tr>{s.headers?.map((h, i) => <th key={i} className="px-4 py-3 text-left font-medium text-xs uppercase tracking-wide">{h}</th>)}</tr>
            </thead>
            <tbody>
              {s.rows?.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-cream-100'}>
                  {row.map((cell, j) => <td key={j} className="px-4 py-3 text-gray-700 border-t border-cream-200">{cell}</td>)}
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

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const article = FULL_ARTICLES.find((a) => a.slug === slug)
  if (!article) notFound()

  const levelColors: Record<string, string> = {
    Beginner: 'bg-teal-100 text-teal-700',
    Intermediate: 'bg-gold-100 text-gold-700',
    Advanced: 'bg-red-100 text-red-700',
  }
  const marketColors: Record<string, string> = {
    India: 'bg-orange-100 text-orange-700',
    US: 'bg-blue-100 text-blue-700',
    Both: 'bg-purple-100 text-purple-700',
    Global: 'bg-gray-100 text-gray-700',
  }

  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    author: { '@type': 'Person', name: article.author },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: { '@type': 'ImageObject', url: `${SITE_CONFIG.url}/logo.png` },
    },
    ...(article.coverImage ? { image: `${SITE_CONFIG.url}${article.coverImage}` } : {}),
  }

  return (
    <div className="px-[5vw] py-12 max-w-3xl mx-auto">
      <JsonLd schema={articleSchema} />
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
        <Link href="/" className="hover:text-navy transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-navy transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-gray-500 truncate max-w-xs">{article.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${levelColors[article.level]}`}>{article.level}</span>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${marketColors[article.market]}`}>{article.market} Market</span>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-cream-200 text-gray-600">{article.category}</span>
        </div>

        {article.coverImage ? (
          <div className="mb-6 rounded-xl overflow-hidden">
            <Image src={article.coverImage} alt={article.title} width={1200} height={480} className="object-cover w-full h-60 rounded-md" />
          </div>
        ) : (
          article.emoji && <div className="text-6xl mb-6">{article.emoji}</div>
        )}
        <h1 className="font-display text-navy text-3xl sm:text-4xl font-bold leading-tight mb-4">
          {article.title}
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed mb-6">{article.excerpt}</p>

        <div className="flex items-center gap-4 text-sm text-gray-400 pb-6 border-b border-cream-300">
          <span>✍️ {article.author}</span>
          <span>•</span>
          <span>📅 {new Date(article.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
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
            <span key={tag} className="text-xs bg-cream-200 text-gray-600 px-3 py-1.5 rounded-full hover:bg-cream-300 transition-colors cursor-default">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Back */}
      <div className="mt-10">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-teal-600 hover:text-navy font-medium transition-colors">
          ← Back to all articles
        </Link>
      </div>

      {/* Related articles */}
      <div className="mt-12 pt-8 border-t border-cream-300">
        <h3 className="font-display text-navy text-xl font-semibold mb-6">More Articles</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {FULL_ARTICLES.filter((a) => a.slug !== slug).slice(0, 4).map((a) => (
            <Link
              key={a.id}
              href={`/blog/${a.slug}`}
              className="bg-cream-100 border border-cream-300 rounded-xl p-4 hover:border-navy hover:shadow-sm transition-all group"
            >
              <p className="text-xs text-teal-600 font-medium mb-1">{a.category}</p>
              <p className="text-sm font-medium text-navy leading-snug group-hover:text-teal-700 transition-colors">{a.title}</p>
              <p className="text-xs text-gray-400 mt-2">{a.readTime} min · {a.level}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
