import Link from 'next/link'
import { FEATURED_ARTICLES } from '@/lib/constants'
import { FadeUp, SlideInLeft, StaggerContainer, StaggerItem } from '@/components/ui/Animate'

const levelColors: Record<string, string> = {
  Beginner: 'bg-teal-100 text-teal-700',
  Intermediate: 'bg-gold-50 text-gold-700',
  Advanced: 'bg-red-50 text-red-600',
}

export function FeaturedArticles() {
  const [featured, ...rest] = FEATURED_ARTICLES

  return (
    <section className="py-20 px-[5vw] bg-white">
      <FadeUp className="flex justify-between items-end mb-10 flex-wrap gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-teal-400 mb-2">Featured</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-bold">
            Must-read <em className="text-gold not-italic">articles</em>
          </h2>
        </div>
        <Link href="/blog" className="text-sm font-medium text-teal-400 hover:text-navy transition-colors">
          View all articles →
        </Link>
      </FadeUp>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Big featured card */}
        <SlideInLeft className="lg:col-span-3">
          <Link href={`/blog/${featured.slug}`}
            className="block border border-cream-300 rounded-xl overflow-hidden hover:shadow-card transition-all group h-full">
            <div className="h-52 bg-navy flex items-center justify-center text-6xl relative">
              {featured.emoji ?? '📊'}
              <span className="absolute bottom-3 left-3 bg-gold text-navy text-xs font-medium px-3 py-1 rounded-full">
                {featured.level} · {featured.readTime} min read
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs text-gray-400 mb-2">{featured.category} · {featured.publishedAt}</p>
              <h3 className="font-display text-navy text-xl font-semibold leading-snug mb-3 group-hover:text-teal-500 transition-colors">
                {featured.title}
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">{featured.excerpt}</p>
            </div>
          </Link>
        </SlideInLeft>

        {/* Side list */}
        <StaggerContainer className="lg:col-span-2 flex flex-col divide-y divide-cream-300">
          {rest.map((article, i) => (
            <StaggerItem key={article.id}>
              <Link href={`/blog/${article.slug}`} className="flex gap-4 py-4 group first:pt-0">
                <span className="font-display text-2xl font-bold text-cream-400 min-w-[32px] leading-none">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-xs font-medium text-teal-500 uppercase tracking-wide mb-1">{article.category}</p>
                  <h4 className="text-sm font-medium text-navy leading-snug group-hover:text-teal-500 transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-xs text-gray-400 mt-1">{article.readTime} min · {article.level}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
