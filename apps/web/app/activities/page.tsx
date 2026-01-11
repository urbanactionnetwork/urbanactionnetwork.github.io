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
        setError('공지사항 정보를 불러오는 중 문제가 발생했습니다.')
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
        <div className="mb-6 flex items-center gap-2">
          <SparklesIcon className="size-5" />
          <h1 className="text-xl font-semibold md:text-2xl">주요활동</h1>
        </div>

        {error ? (
          <div className="text-muted-foreground py-10 text-center">{error}</div>
        ) : (
          <PostCardList items={items} loading={loading} />
        )}
      </section>

      <SiteFooter />
    </>
  )
}
