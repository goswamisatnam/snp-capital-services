import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'US Tax for NRI | S&P Capital Services',
  alternates: { canonical: '/markets/us/us-tax-for-nri' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['us-tax-for-nri']} />
}
