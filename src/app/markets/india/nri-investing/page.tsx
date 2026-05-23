import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'

export const metadata: Metadata = {
  title: 'NRI Investing | S&P Capital Services',
  alternates: { canonical: '/markets/india/nri-investing' },
}

export default function Page() {
  return <TopicPage data={TOPIC_PAGES['nri-investing']} />
}
