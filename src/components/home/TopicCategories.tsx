import Link from 'next/link'
import { TOPIC_CATEGORIES } from '@/lib/constants'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animate'

export function TopicCategories() {
  return (
    <section className="py-20 px-[5vw] bg-cream-100">
      <FadeUp className="flex justify-between items-end mb-10 flex-wrap gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-teal-400 mb-2">Browse by topic</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-bold">
            All <em className="text-gold not-italic">finance topics</em> covered
          </h2>
        </div>
        <Link href="/blog" className="text-sm font-medium text-teal-400 hover:text-navy transition-colors">
          View all topics →
        </Link>
      </FadeUp>

      <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
        {TOPIC_CATEGORIES.map((cat) => (
          <StaggerItem key={cat.name}>
            <Link
              href={cat.href}
              className="bg-white border border-cream-300 rounded-xl p-4 text-center hover:border-gold-400 hover:-translate-y-0.5 hover:shadow-card transition-all block"
            >
              <div className="text-2xl mb-2">{cat.emoji}</div>
              <div className="font-medium text-navy text-xs mb-1 leading-tight">{cat.name}</div>
              <div className="text-gray-400 text-[11px]">{cat.count}</div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
