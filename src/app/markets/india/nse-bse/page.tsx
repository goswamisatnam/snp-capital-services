import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'NSE & BSE Guide | S&P Capital Services',
  alternates: { canonical: '/markets/india/nse-bse' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['nse-bse']} />
}
