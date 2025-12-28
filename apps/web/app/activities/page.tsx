'use client'

import { useEffect, useState } from 'react'
import { SparklesIcon } from 'lucide-react'
import { fetchActivities, type Activities } from '@/app/activities/activitiesAPI'
import PostCardList from '@/components/news/post-card-list.tsx'
import { SiteFooter } from '@/components/site-footer'

export default function NewsPage() {
  const [items, setItems] = useState<Activities['data']>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const res = await fetchActivities()
        if (!mounted) return
        setItems(res?.data ?? [])
      } catch (e) {
        console.error(e)
        if (!mounted) return
        setError('새소식 정보를 불러오는 중 문제가 발생했습니다.')
      } finally {
        if (mounted) {
          setLoading(false)
        }
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <>
      <section className="container mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        <div className="mb-8 flex items-center gap-2">
          <div className="border-4 border-foreground px-6 py-4 shadow-neobrutal" style={{ backgroundColor: 'oklch(0.7 0.2 250)' }}>
            <SparklesIcon className="size-6 inline mr-2" />
            <h1 className="text-3xl md:text-4xl font-black inline">주요활동</h1>
          </div>
        </div>

        {error ? (
          <div className="text-foreground py-10 text-center font-bold border-4 border-foreground px-6 py-4 inline-block shadow-neobrutal-sm" style={{ backgroundColor: 'oklch(0.6 0.25 25)' }}>
            {error}
          </div>
        ) : (
          <PostCardList items={items} loading={loading} />
        )}
      </section>

      <SiteFooter />
    </>
  )
}
