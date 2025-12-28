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
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="block h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <Card className="card-hover-lift overflow-hidden cursor-pointer group h-full flex flex-col">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={item.thumbnail}
                    alt="thumbnail"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{item.description ?? ''}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1"></CardContent>
                <CardFooter>
                  <Button variant="secondary" className="ml-auto gap-1.5 font-semibold text-foreground/90 group-hover:text-foreground group-hover:shadow-[6px_6px_0px_0px_oklch(0.1_0_0)] transition-all duration-300 pointer-events-none">
                    자세히 보기 <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
