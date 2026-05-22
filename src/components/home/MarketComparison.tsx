import { MARKET_COMPARISON } from '@/lib/constants'

export function MarketComparison() {
  return (
    <section className="py-20 px-[5vw] bg-cream-200">
      <div className="mb-10">
        <p className="text-xs font-medium uppercase tracking-widest text-teal-400 mb-2">Market Comparison</p>
        <h2 className="font-display text-navy text-3xl md:text-4xl font-bold">
          India vs US — <em className="text-gold not-italic">know both</em>
        </h2>
        <p className="text-gray-500 text-sm font-light mt-2">
          Side-by-side facts every investor needs to understand about the world's largest markets.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {MARKET_COMPARISON.map((market) => (
          <div key={market.name} className="bg-white border border-cream-300 rounded-xl p-7 hover:shadow-card transition-all">
            <div className="text-3xl mb-3">{market.flag}</div>
            <h3 className="font-display text-navy text-lg font-semibold mb-2">{market.name}</h3>
            <p className="text-sm text-gray-500 font-light leading-relaxed mb-5">{market.description}</p>
            <table className="w-full text-sm">
              <tbody>
                {market.facts.map((fact) => (
                  <tr key={fact.label} className="border-b border-cream-300 last:border-0">
                    <td className="py-2 text-gray-400 font-light w-[45%]">{fact.label}</td>
                    <td className="py-2 font-medium text-navy">{fact.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </section>
  )
}
