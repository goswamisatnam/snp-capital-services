import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'Roth IRA Guide | S&P Capital Services',
  alternates: { canonical: '/markets/us/roth-ira' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['roth-ira']} />
}
