import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Finance Dictionary – 1,000+ Terms Explained',
  description: 'Over 1,000 financial terms explained in plain English for India and US markets.',
  alternates: { canonical: '/dictionary' },
}
export default function DictionaryPage() {
  return (
    <div className="px-[5vw] py-16 max-w-4xl mx-auto">
      <p className="text-xs font-medium uppercase tracking-widest text-teal-400 mb-2">Finance Dictionary</p>
      <h1 className="font-display text-navy text-4xl font-bold mb-4">Financial <em className="text-gold not-italic">Dictionary</em></h1>
      <p className="text-gray-500 text-sm font-light mb-8">Over 1,000+ financial terms in plain English.</p>
      <div className="bg-cream-200 border border-cream-300 rounded-xl p-10 text-center text-gray-400 text-sm">
        📖 Add terms to <code className="bg-cream-300 px-1 rounded">src/data/dictionary.ts</code>
      </div>
    </div>
  )
}
