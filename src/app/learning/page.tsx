import type { Metadata } from 'next'
import Link from 'next/link'
import { LEARNING_PATHS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Learning Paths — Structured Finance Education | S&P Capital Services',
  description: 'Choose your learning path: beginner investing foundations, stocks & mutual funds, advanced trading, or the NRI cross-border guide.',
  alternates: { canonical: '/learning' },
}

export default function LearningPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-navy text-white px-[5vw] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🎓</span>
            <span className="text-sm font-medium text-gold uppercase tracking-widest">Learning Paths</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Learn Finance <span className="text-gold">Your Way</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Structured learning paths for every stage — from your first investment to advanced derivatives and cross-border tax planning.
          </p>
        </div>
      </section>

      <div className="px-[5vw] py-14 max-w-5xl mx-auto">
        <h2 className="font-display text-navy text-2xl font-bold mb-8">Choose Your Path</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {LEARNING_PATHS.map((path) => (
            <Link
              key={path.id}
              href={path.href}
              className={`group bg-white border-2 ${path.colorClass} rounded-2xl p-6 hover:shadow-card transition-all flex flex-col`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{path.icon}</span>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${path.badgeClass}`}>
                  {path.levelLabel}
                </span>
              </div>
              <h3 className="font-display text-navy font-bold text-xl leading-snug mb-2 group-hover:text-teal-700 transition-colors">
                {path.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{path.description}</p>
              <ul className="space-y-1.5 mb-5">
                {path.topics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-teal-500 mt-0.5 shrink-0">✓</span>
                    {topic}
                  </li>
                ))}
              </ul>
              <span className="text-sm font-semibold text-teal-700 group-hover:text-navy transition-colors">
                Start this path →
              </span>
            </Link>
          ))}
        </div>
      </div>

      <section className="bg-cream-100 px-[5vw] py-14">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-navy text-2xl font-bold mb-3">Not Sure Where to Start?</h2>
          <p className="text-gray-500 text-base mb-8 max-w-xl mx-auto">
            Browse our dictionary to look up any term, or use our calculators to see the numbers in action.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/dictionary" className="bg-navy text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition-colors">
              Finance Dictionary →
            </Link>
            <Link href="/calculators" className="border border-navy text-navy text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-navy hover:text-white transition-colors">
              Calculators →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
