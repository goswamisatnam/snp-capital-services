import type { Metadata } from 'next'
import Link from 'next/link'
import { FEATURED_ARTICLES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Investing Basics — Start Here',
  description: 'Foundations of investing: stocks, mutual funds, ETFs, asset allocation, and building your first portfolio.',
}

export default function InvestingPage() {
  return (
    <div className="px-[5vw] py-16 max-w-4xl mx-auto">
      <h1 className="font-display text-navy text-4xl font-bold mb-4">Investing Basics</h1>
      <p className="text-gray-500 mb-6">Learn how markets work, how to pick funds and stocks, and how to create a long-term plan.</p>

      <h2 className="font-medium text-navy mb-3">Popular Guides</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {FEATURED_ARTICLES.slice(0, 4).map((a) => (
          <Link key={a.id} href={`/blog/${a.slug}`} className="bg-white border border-cream-300 rounded-xl p-4 hover:shadow-card transition-all">
            <p className="text-xs text-teal-600 mb-1">{a.category}</p>
            <p className="font-medium text-navy">{a.title}</p>
            <p className="text-xs text-gray-400 mt-2">{a.readTime} min · {a.level}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
