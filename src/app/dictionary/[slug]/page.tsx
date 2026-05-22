import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { DICTIONARY } from '@/data/dictionary'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return DICTIONARY.map((d) => ({ slug: d.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const term = DICTIONARY.find((t) => t.slug === slug)
  if (!term) return {}
  return { title: `${term.term} — Finance Dictionary`, description: term.definition }
}

export default async function TermPage({ params }: Props) {
  const { slug } = await params
  const term = DICTIONARY.find((t) => t.slug === slug)
  if (!term) notFound()

  return (
    <div className="px-[5vw] py-16 max-w-3xl mx-auto">
      <p className="text-xs font-medium uppercase tracking-widest text-teal-400 mb-2">Finance Dictionary</p>
      <h1 className="font-display text-navy text-4xl font-bold mb-4">{term.term}</h1>
      <p className="text-gray-700 leading-relaxed mb-6">{term.definition}</p>

      {term.formula && (
        <div className="bg-cream-100 border border-cream-300 rounded p-4 mb-6">
          <p className="text-xs text-gray-500">Formula</p>
          <pre className="text-sm text-navy mt-2">{term.formula}</pre>
        </div>
      )}

      {term.example && (
        <div className="bg-cream-100 border border-cream-300 rounded p-4 mb-6">
          <p className="text-xs text-gray-500">Example</p>
          <p className="text-sm text-gray-700 mt-2">{term.example}</p>
        </div>
      )}

      {term.relatedTerms?.length ? (
        <div className="mt-6">
          <p className="text-xs text-gray-500 mb-2">Related</p>
          <div className="flex flex-wrap gap-2">
            {term.relatedTerms.map((r) => (
              <a key={r} href={`/dictionary/${r.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="text-xs bg-cream-200 text-gray-600 px-3 py-1.5 rounded-full">{r}</a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
