import type { Metadata } from 'next'
import { TopicPage } from '@/components/TopicPage'
import { TOPIC_PAGES } from '@/data/topic-pages'
import { Breadcrumb } from '@/components/seo/Breadcrumb'

export const metadata: Metadata = {
  title: 'Mutual Funds Guide | S&P Capital Services',
  alternates: { canonical: '/investing/mutual-funds' },
}

export default function Page() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Investing', href: '/investing' },
          { label: 'Mutual Funds', href: '/investing/mutual-funds' },
        ]}
      />
      <TopicPage data={TOPIC_PAGES['mutual-funds']} />
    </>
  )
}
