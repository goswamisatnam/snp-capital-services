import type { Metadata } from 'next'
import Link from 'next/link'
import { DICTIONARY } from '@/data/dictionary'
import { JsonLd } from '@/components/seo/JsonLd'

export const metadata: Metadata = {
  title: 'Finance Dictionary – Terms Explained',
  description: 'Financial terms explained in plain English for India and US markets.',
  alternates: { canonical: '/dictionary' },
  twitter: { card: 'summary_large_image' },
}

export default function DictionaryPage() {
  const sorted = [...DICTIONARY].sort((a, b) => a.term.localeCompare(b.term))
  const groups: Record<string, typeof DICTIONARY> = {}
  sorted.forEach((t) => {
    const k = t.term[0].toUpperCase()
    if (!groups[k]) groups[k] = []
    groups[k].push(t)
  })

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: DICTIONARY.map((entry) => ({
      '@type': 'Question',
      name: `What is ${entry.term}?`,
      acceptedAnswer: { '@type': 'Answer', text: entry.definition },
    })),
  }

  return (
    <div className="px-[5vw] py-16 max-w-5xl mx-auto">
      <JsonLd schema={faqSchema} />
      <p className="text-xs font-medium uppercase tracking-widest text-teal-400 mb-2">Finance Dictionary</p>
      <h1 className="font-display text-navy text-4xl font-bold mb-4">Financial <em className="text-gold not-italic">Dictionary</em></h1>
      <p className="text-gray-500 text-sm font-light mb-8">Plain-English definitions with India & US examples. Click a term to read details.</p>

      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {Object.keys(groups).map((k) => (
            <a key={k} href={`#${k}`} className="text-xs bg-cream-100 px-2 py-1 rounded text-navy hover:bg-cream-200">{k}</a>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        {Object.keys(groups).sort().map((letter) => (
          <section key={letter} id={letter}>
            <h2 className="text-2xl font-display text-navy font-bold mb-4">{letter}</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {groups[letter].map((t) => (
                <Link key={t.slug} href={`/dictionary/${t.slug}`} className="block p-3 border border-cream-200 rounded hover:shadow-sm transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-navy">{t.term}</h3>
                      <p className="text-xs text-gray-500">{t.category ?? ''} {t.market ? `· ${t.market.toUpperCase()}` : ''}</p>
                    </div>
                    <div className="text-xs text-teal-600">→</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
