// components/home/LearningPaths.tsx
import Link from 'next/link'
import { LEARNING_PATHS } from '@/lib/constants'

export function LearningPaths() {
  return (
    <section className="py-20 px-[5vw] bg-white">
      <div className="mb-10">
        <p className="text-xs font-medium uppercase tracking-widest text-teal-400 mb-2">Start Learning</p>
        <h2 className="font-display text-navy text-3xl md:text-4xl font-bold">
          Choose your <em className="text-gold not-italic">learning path</em>
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed mt-2 font-light">
          Structured curricula from first-time investors to advanced traders and NRI cross-border experts.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {LEARNING_PATHS.map((path) => (
          <Link
            key={path.id}
            href={path.href}
            className="group border border-cream-300 rounded-xl p-6 hover:border-gold-400 hover:shadow-card transition-all"
          >
            <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-4 ${path.badgeClass}`}>
              {path.levelLabel}
            </span>
            <div className="text-3xl mb-3">{path.icon}</div>
            <h3 className="font-medium text-navy mb-2">{path.title}</h3>
            <p className="text-xs text-gray-500 font-light leading-relaxed mb-4">{path.description}</p>
            <ul className="space-y-1.5">
              {path.topics.map((topic) => (
                <li key={topic} className="flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-1 h-1 rounded-full bg-gold-500 shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
            <span className="inline-flex items-center gap-1 mt-4 text-xs font-medium text-teal-400 group-hover:text-navy transition-colors">
              Start learning →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
