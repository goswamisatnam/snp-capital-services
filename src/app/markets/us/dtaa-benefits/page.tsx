import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'DTAA Benefits | S&P Capital Services',
  alternates: { canonical: '/markets/us/dtaa-benefits' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['dtaa-benefits']} />
}
