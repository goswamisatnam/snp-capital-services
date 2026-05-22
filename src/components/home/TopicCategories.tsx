import Link from 'next/link'
import { TOPIC_CATEGORIES } from '@/lib/constants'

const tagColors: Record<string, string> = {
  india: 'bg-teal-50 text-teal-600',
  us: 'bg-navy-50 text-navy-800',
  both: 'bg-gold-50 text-gold-700',
}

export function TopicCategories() {
  return (
    <section className="py-20 px-[5vw] bg-cream-100">
      <div className="flex justify-between items-end mb-10 flex-wrap gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-teal-400 mb-2">Browse by topic</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-bold">
            All <em className="text-gold not-italic">finance topics</em> covered
          </h2>
        </div>
        <Link href="/topics" className="text-sm font-medium text-teal-400 hover:text-navy transition-colors">
          View all topics →
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {TOPIC_CATEGORIES.map((cat) => (
          <Link
            key={cat.name}
            href={cat.href}
            className="bg-white border border-cream-300 rounded-xl p-4 text-center hover:border-gold-400 hover:-translate-y-0.5 hover:shadow-card transition-all"
          >
            <div className="text-2xl mb-2">{cat.emoji}</div>
            <div className="font-medium text-navy text-xs mb-1 leading-tight">{cat.name}</div>
            <div className="text-gray-400 text-[11px]">{cat.count}</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
