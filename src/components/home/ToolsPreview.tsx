import Link from 'next/link'
import { CALCULATORS } from '@/lib/constants'
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/ui/Animate'

const tagColors: Record<string, string> = {
  India: 'bg-teal-50 text-teal-600',
  US: 'bg-navy-50 text-navy-800',
  Both: 'bg-gold-50 text-gold-700',
}

export function ToolsPreview() {
  return (
    <section className="py-20 px-[5vw] bg-white" id="tools">
      <FadeUp className="flex justify-between items-end mb-10 flex-wrap gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-teal-400 mb-2">Finance Utilities</p>
          <h2 className="font-display text-navy text-3xl md:text-4xl font-bold">
            Interactive <em className="text-gold not-italic">calculators</em> &amp; tools
          </h2>
          <p className="text-gray-500 text-sm font-light mt-2">
            Make smarter financial decisions — built for both Indian and US investors.
          </p>
        </div>
        <Link href="/calculators" className="text-sm font-medium text-teal-400 hover:text-navy transition-colors">
          All calculators →
        </Link>
      </FadeUp>

      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {CALCULATORS.map((calc) => (
          <StaggerItem key={calc.id}>
            <Link
              href={calc.href}
              className="block bg-cream-100 border border-cream-300 rounded-xl p-5 hover:border-teal-400 hover:bg-teal-50 transition-all group"
            >
              <div className="text-2xl mb-3">{calc.icon}</div>
              <div className="font-medium text-navy text-sm mb-1">{calc.name}</div>
              <div className="text-xs text-gray-500 font-light leading-relaxed mb-3">{calc.desc}</div>
              <span className="text-xs font-medium text-teal-400 group-hover:text-navy transition-colors">
                Open tool →
              </span>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
