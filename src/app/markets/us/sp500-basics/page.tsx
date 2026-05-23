import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'S&P 500 Basics | S&P Capital Services',
  alternates: { canonical: '/markets/us/sp500-basics' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['sp500-basics']} />
}
