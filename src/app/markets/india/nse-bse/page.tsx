import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'
import { Breadcrumb } from '@/components/seo/Breadcrumb'

export const metadata: Metadata = {
  title: 'NSE & BSE Guide | S&P Capital Services',
  alternates: { canonical: '/markets/india/nse-bse' },
}

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'India Markets', href: '/markets/india' },
          { label: 'NSE & BSE', href: '/markets/india/nse-bse' },
        ]}
      />
      <TopicPage data={TOPIC_PAGES['nse-bse']} />
    </>
  )
}
