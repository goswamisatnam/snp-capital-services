import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Cryptocurrency — Bitcoin, Ethereum & DeFi' }
export default function CryptoPage() {
  return (
    <div className="px-[5vw] py-16 max-w-4xl mx-auto">
      <h1 className="font-display text-navy text-4xl font-bold mb-4">Cryptocurrency</h1>
      <p className="text-gray-500 mb-6">Explainers on Bitcoin, Ethereum, tokens, DeFi, and how to assess custody, taxes, and risk.</p>

      <ul className="list-disc ml-6 text-gray-700 space-y-2">
        <li>Understand custody: exchanges vs hardware wallets</li>
        <li>Tax rules (India): 30% flat tax, TDS, and reporting</li>
        <li>How to think about allocation: 60% BTC / 40% ETH example</li>
      </ul>
    </div>
  )
}
