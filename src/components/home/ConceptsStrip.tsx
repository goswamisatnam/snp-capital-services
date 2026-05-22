import Link from 'next/link'
import { FINANCIAL_CONCEPTS } from '@/lib/constants'

export function ConceptsStrip() {
  return (
    <section className="py-12 px-[5vw] bg-cream-100">
      <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">
        Browse financial concepts A–Z
      </p>
      <div className="flex flex-wrap gap-2">
        {FINANCIAL_CONCEPTS.map((concept) => (
          <Link
            key={concept}
            href={`/dictionary?q=${encodeURIComponent(concept)}`}
            className="bg-white border border-cream-300 rounded-full px-4 py-1.5 text-sm text-gray-600 hover:border-navy hover:text-navy transition-all"
          >
            {concept}
          </Link>
        ))}
      </div>
    </section>
  )
}
