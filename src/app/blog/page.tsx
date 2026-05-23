import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { FEATURED_ARTICLES } from '@/lib/constants'
export const metadata: Metadata = {
  title: 'Blog & Articles',
  description: 'In-depth finance articles on investing, stocks, mutual funds, retirement, and taxes.',
  alternates: { canonical: '/blog' },
}
export default function BlogPage() {
  return (
    <div className="px-[5vw] py-16">
      <h1 className="font-display text-navy text-4xl font-bold mb-8">Finance <em className="text-gold not-italic">Articles</em></h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_ARTICLES.map((a) => (
          <Link key={a.id} href={`/blog/${a.slug}`} className="bg-white border border-cream-300 rounded-xl overflow-hidden hover:shadow-card transition-all group">
            <div className="relative h-36 w-full bg-navy">
              <Image
                src={a.coverImage ?? '/og-image.png'}
                alt={a.title}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
                priority={false}
              />
            </div>
            <div className="p-5">
              <p className="text-xs font-medium text-teal-500 mb-2">{a.category}</p>
              <h2 className="font-medium text-navy text-sm leading-snug mb-2 group-hover:text-teal-500 transition-colors">{a.title}</h2>
              <p className="text-xs text-gray-400">{a.readTime} min · {a.level}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
