import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { LearningPaths } from '@/components/home/LearningPaths'
import { TopicCategories } from '@/components/home/TopicCategories'
import { FeaturedArticles } from '@/components/home/FeaturedArticles'
import { DictionaryFeature } from '@/components/home/DictionaryFeature'
import { MarketComparison } from '@/components/home/MarketComparison'
import { ToolsPreview } from '@/components/home/ToolsPreview'
import { ConceptsStrip } from '@/components/home/ConceptsStrip'
import { Newsletter } from '@/components/home/Newsletter'
import { SITE_CONFIG } from '@/lib/constants'
import { FloatingChat } from '@/components/ai/FloatingChat'

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} – Your Complete Financial Literacy Guide`,
  description: SITE_CONFIG.description,
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <LearningPaths />
      <TopicCategories />
      <FeaturedArticles />
      <DictionaryFeature />
      <MarketComparison />
      <ToolsPreview />
      <ConceptsStrip />
      <Newsletter />
      <FloatingChat />
    </>
  )
}
