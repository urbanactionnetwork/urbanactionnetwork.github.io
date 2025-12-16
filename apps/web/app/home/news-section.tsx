'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from '@workspace/ui/components/button.tsx'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card.tsx'
import { Skeleton } from '@workspace/ui/components/skeleton.tsx'
import { NewspaperIcon, ArrowRightIcon } from 'lucide-react'
import { fetchTopNews, type News } from '@/app/news/newsAPI.ts'

export interface NewsItem {
  id: number
  title: string
  description?: string
  thumbnail: string
}

export function NewsSection() {
  const [items, setItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const res: News = await fetchTopNews()
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
    <section className="container mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
      <div className="mb-6 flex items-center gap-2">
        <NewspaperIcon className="size-5" />
        <h2 className="text-xl font-semibold md:text-2xl">새소식</h2>
      </div>
      {loading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div key={idx} className="flex h-full flex-col space-y-3">
              <Skeleton className="h-48 w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-1/2" />
              </div>
            </div>
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
                <CardDescription className="line-clamp-3">{item.description ?? ''}</CardDescription>
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
