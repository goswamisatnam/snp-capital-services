import type { Metadata } from 'next'
import Link from 'next/link'
import { FULL_ARTICLES } from '@/data/articles'

export const metadata: Metadata = {
  title: 'Personal Finance — Budgeting, Savings & Financial Literacy | S&P Capital Services',
  description:
    'Practical guides on budgeting, saving, debt payoff, and financial literacy for teens. Build lasting wealth with actionable personal finance advice.',
  alternates: { canonical: '/personal-finance' },
}

const CATEGORIES = [
  {
    id: 'budgeting',
    label: 'Budgeting & Savings',
    emoji: '💰',
    description:
      'Master budgeting strategies, build savings habits, and make smart decisions about debt, housing, and everyday money management.',
    color: 'border-teal-400',
    badgeColor: 'bg-teal-50 text-teal-700',
    iconBg: 'bg-teal-50',
  },
  {
    id: 'teens',
    label: 'Finance Literacy for Teens',
    emoji: '🎓',
    description:
      'Age-appropriate financial education for students and young adults — from opening a first bank account to understanding investing and building early wealth.',
    color: 'border-gold-400',
    badgeColor: 'bg-gold-50 text-gold-700',
    iconBg: 'bg-gold-50',
  },
]

const levelColors: Record<string, string> = {
  Beginner: 'bg-teal-100 text-teal-700',
  Intermediate: 'bg-gold-100 text-gold-700',
  Advanced: 'bg-red-100 text-red-700',
}

export default function PersonalFinancePage() {
  const allPfArticles = FULL_ARTICLES.filter((a) =>
    CATEGORIES.map((c) => c.label).includes(a.category),
  )

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-navy text-white px-[5vw] py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💰</span>
            <span className="text-sm font-medium text-gold uppercase tracking-widest">
              Personal Finance
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-5">
            Take Control of Your <span className="text-gold">Financial Future</span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            Practical, no-fluff guides on budgeting, saving, paying off debt, and building wealth —
            for every stage of your financial journey.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            {CATEGORIES.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm px-4 py-2 rounded-lg transition-colors"
              >
                <span>{cat.emoji}</span>
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-cream-100 border-y border-cream-300 px-[5vw] py-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center sm:justify-start gap-8 text-center sm:text-left">
          <div>
            <p className="font-display text-navy text-2xl font-bold">{allPfArticles.length}</p>
            <p className="text-xs text-gray-500 mt-0.5">In-depth guides</p>
          </div>
          <div>
            <p className="font-display text-navy text-2xl font-bold">{CATEGORIES.length}</p>
            <p className="text-xs text-gray-500 mt-0.5">Topic categories</p>
          </div>
          <div>
            <p className="font-display text-navy text-2xl font-bold">Free</p>
            <p className="text-xs text-gray-500 mt-0.5">Always free to read</p>
          </div>
        </div>
      </section>

      {/* Category sections */}
      <div className="px-[5vw] py-14 max-w-5xl mx-auto space-y-20">
        {CATEGORIES.map((cat) => {
          const articles = allPfArticles.filter((a) => a.category === cat.label)
          return (
            <section key={cat.id} id={cat.id}>
              {/* Section header */}
              <div
                className={`flex items-start gap-4 mb-8 pb-6 border-b-2 ${cat.color}`}
              >
                <div className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center text-2xl shrink-0`}>
                  {cat.emoji}
                </div>
                <div>
                  <h2 className="font-display text-navy text-2xl sm:text-3xl font-bold mb-1">
                    {cat.label}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
                    {cat.description}
                  </p>
                  <span className={`inline-block mt-2 text-xs font-medium px-2.5 py-1 rounded-full ${cat.badgeColor}`}>
                    {articles.length} articles
                  </span>
                </div>
              </div>

              {/* Article grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {articles.map((article) => (
                  <Link
                    key={article.id}
                    href={`/personal-finance/${article.slug}`}
                    className="group bg-white border border-cream-300 rounded-2xl p-5 hover:border-navy hover:shadow-card transition-all flex flex-col"
                  >
                    {article.emoji && (
                      <span className="text-3xl mb-3 block">{article.emoji}</span>
                    )}
                    <h3 className="font-display text-navy font-semibold text-base leading-snug mb-2 group-hover:text-teal-700 transition-colors flex-1">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelColors[article.level] ?? 'bg-gray-100 text-gray-600'}`}
                      >
                        {article.level}
                      </span>
                      <span className="text-xs text-gray-400">⏱ {article.readTime} min</span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      {/* CTA strip */}
      <section className="bg-navy px-[5vw] py-14">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="font-display text-3xl font-bold mb-3">
            Put Your Knowledge to Work
          </h2>
          <p className="text-gray-300 mb-8">
            Use our free financial calculators to plan your budget, estimate loan costs, and project
            your savings growth.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/calculators"
              className="bg-gold text-navy font-semibold text-sm px-6 py-3 rounded-lg hover:bg-gold/90 transition-colors"
            >
              Try the Calculators →
            </Link>
            <Link
              href="/dictionary"
              className="border border-white/30 text-white text-sm px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Browse Financial Dictionary
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
