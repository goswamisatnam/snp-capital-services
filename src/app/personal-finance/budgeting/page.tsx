import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Budgeting Guide | S&P Capital Services',
  alternates: { canonical: '/personal-finance/budgeting' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['budgeting']} />
}
