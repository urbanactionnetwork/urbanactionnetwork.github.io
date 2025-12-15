'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@workspace/ui/components/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@workspace/ui/components/card'
import { Skeleton } from '@workspace/ui/components/skeleton'
import { ActivityIcon, ArrowRightIcon } from 'lucide-react'
import { fetchTopActivities, type Activities } from '@/app/activities/activitiesAPI'

export interface ActivitiesItem {
  id: number
  title: string
  description: string
  thumbnail: string
}

export function ActivitiesSection() {
  const [items, setItems] = useState<ActivitiesItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const res: Activities = await fetchTopActivities()
        if (!mounted) return
        setItems(res?.data ?? [])
      } catch (e) {
        console.error(e)
        if (!mounted) return
        setError('새소식을 불러오는 데 실패했습니다.')
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
    <section className="container mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-6 flex items-center gap-2">
        <ActivityIcon className="size-5" />
        <h2 className="text-xl font-semibold md:text-2xl">주요활동</h2>
      </div>
      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Card key={idx} className="overflow-hidden">
              {/* 썸네일 자리 */}
              <div className="relative aspect-[16/9] w-full">
                <Skeleton className="h-full w-full" />
              </div>

              {/* 본문(제목/설명) 자리 */}
              <CardHeader>
                <Skeleton className="h-5 w-3/4" />
                <div className="mt-2 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </CardHeader>

              <CardContent />

              {/* 버튼 자리 */}
              <CardFooter>
                <div className="ml-auto w-28">
                  <Skeleton className="h-9 w-full" />
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : error ? (
        <div className="text-muted-foreground text-sm">{error}</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <div className="relative aspect-[16/9] w-full">
                <Image src={item.thumbnail} alt="thumbnail" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{item.title}</CardTitle>
                <CardDescription className="line-clamp-3">{item.description}</CardDescription>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter>
                <Button asChild variant="secondary" className="ml-auto gap-1">
                  <Link href={`/news/${item.id}`}>
                    자세히 보기 <ArrowRightIcon className="size-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}
