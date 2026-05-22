// Add your financial terms here
export interface DictionaryEntry {
  term: string
  slug: string
  definition: string
  example?: string
  relatedTerms?: string[]
}

export const DICTIONARY: DictionaryEntry[] = [
  {
    term: 'SIP',
    slug: 'sip',
    definition: 'Systematic Investment Plan — a method of investing a fixed amount in a mutual fund at regular intervals (monthly, weekly, etc.), leveraging rupee-cost averaging.',
    example: 'Investing ₹5,000/month in a Nifty 50 index fund via SIP.',
    relatedTerms: ['Mutual Fund', 'NAV', 'Rupee-Cost Averaging', 'ELSS'],
  },
  {
    term: 'P/E Ratio',
    slug: 'pe-ratio',
    definition: 'Price-to-Earnings Ratio — the current share price divided by earnings per share (EPS). Used to assess if a stock is overvalued or undervalued relative to its earnings.',
    example: 'A stock at ₹100 with EPS of ₹5 has a P/E of 20x.',
    relatedTerms: ['EPS', 'Valuation', 'Market Cap'],
  },
  // Add more terms here...
]

