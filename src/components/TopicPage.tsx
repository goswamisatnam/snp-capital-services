import Link from 'next/link'

export interface TopicSection {
  heading: string
  body: string
  bullets?: string[]
  table?: { headers: string[]; rows: string[][] }
}

export interface TopicPageData {
  title: string
  description: string
  emoji: string
  parentLabel: string
  parentHref: string
  overview: string
  sections: TopicSection[]
  keyTakeaways: string[]
  tip?: string
  warning?: string
  relatedTopics?: { label: string; href: string }[]
  ctaLabel?: string
  ctaHref?: string
}

export function TopicPage({ data }: { data: TopicPageData }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-navy text-white px-[5vw] py-14 sm:py-18">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-white/40 mb-6">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <Link href={data.parentHref} className="hover:text-white/70 transition-colors">{data.parentLabel}</Link>
            <span>/</span>
            <span className="text-white/60">{data.title}</span>
          </nav>

          <div className="flex items-start gap-5">
            <span className="text-5xl shrink-0 hidden sm:block">{data.emoji}</span>
            <div>
              <p className="text-xs font-medium text-gold uppercase tracking-widest mb-2">
                {data.parentLabel}
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-4">
                {data.title}
              </h1>
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                {data.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="px-[5vw] py-12 max-w-4xl mx-auto">
        {/* Overview */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10 pb-8 border-b border-cream-300">
          {data.overview}
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {data.sections.map((section, i) => (
            <div key={i}>
              <h2 className="font-display text-navy text-2xl font-bold mb-3">
                {section.heading}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">{section.body}</p>
              {section.bullets && (
                <ul className="list-disc list-outside ml-6 space-y-2 text-gray-700">
                  {section.bullets.map((b, j) => (
                    <li key={j} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="overflow-x-auto mt-4 rounded-xl border border-cream-300 shadow-sm">
                  <table className="w-full text-sm">
                    <thead className="bg-navy text-white">
                      <tr>
                        {section.table.headers.map((h, j) => (
                          <th key={j} className="px-4 py-3 text-left font-medium text-xs uppercase tracking-wide">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row, j) => (
                        <tr key={j} className={j % 2 === 0 ? 'bg-white' : 'bg-cream-100'}>
                          {row.map((cell, k) => (
                            <td key={k} className="px-4 py-3 text-gray-700 border-t border-cream-200">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tip callout */}
        {data.tip && (
          <div className="mt-10 bg-teal-50 border-l-4 border-teal-400 rounded-r-lg px-5 py-4">
            <p className="text-teal-800 text-sm leading-relaxed">
              <span className="font-semibold">💡 Pro Tip: </span>{data.tip}
            </p>
          </div>
        )}

        {/* Warning callout */}
        {data.warning && (
          <div className="mt-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg px-5 py-4">
            <p className="text-amber-800 text-sm leading-relaxed">
              <span className="font-semibold">⚠️ Important: </span>{data.warning}
            </p>
          </div>
        )}

        {/* Key Takeaways */}
        <div className="mt-10 bg-navy text-white rounded-2xl p-6">
          <h3 className="font-display text-lg font-bold mb-4 text-gold">Key Takeaways</h3>
          <ul className="space-y-2">
            {data.keyTakeaways.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                <span className="text-teal-400 shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Related Topics */}
        {data.relatedTopics && data.relatedTopics.length > 0 && (
          <div className="mt-10">
            <h3 className="font-display text-navy text-xl font-semibold mb-4">Related Topics</h3>
            <div className="flex flex-wrap gap-3">
              {data.relatedTopics.map((topic) => (
                <Link
                  key={topic.href}
                  href={topic.href}
                  className="bg-cream-100 border border-cream-300 text-sm text-navy px-4 py-2 rounded-lg hover:border-navy hover:bg-white transition-all"
                >
                  {topic.label} →
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-cream-300 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div>
            <p className="font-display text-navy font-semibold mb-1">Put Knowledge into Action</p>
            <p className="text-sm text-gray-500">Use our free calculators to plan your finances.</p>
          </div>
          <Link
            href={data.ctaHref ?? '/calculators'}
            className="shrink-0 bg-navy text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition-colors"
          >
            {data.ctaLabel ?? 'Try the Calculators'} →
          </Link>
        </div>
      </div>
    </div>
  )
}
