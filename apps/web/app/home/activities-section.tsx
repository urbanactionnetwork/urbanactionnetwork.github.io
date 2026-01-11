'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
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
import { ArrowRightIcon, ChevronRightIcon, SparklesIcon } from 'lucide-react'
import { fetchTopActivities, type Activities } from '@/app/activities/activitiesAPI.ts'
import { motion, useInView } from 'motion/react'

export interface ActivitiesItem {
  id: number
  title: string
  description: string
  thumbnail: string
  url: string
}

export function ActivitiesSection() {
  const [items, setItems] = useState<ActivitiesItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

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
    <section ref={sectionRef} className="relative flex w-full items-center justify-center py-12 text-center md:py-16">
      <div className="container relative z-10 mx-auto w-full max-w-6xl px-4">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-200 md:text-2xl">주요활동</h2>
          </div>
          <Link
            href="/activities"
            className="text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
          >
            <span className="text-lg font-medium text-slate-200">더보기</span>
            <ChevronRightIcon className="size-6" />
          </Link>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                <Card className="group flex h-full cursor-pointer flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt="thumbnail"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary line-clamp-2 text-left transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="line-clamp-3 flex-1 text-left">{item.description}</CardContent>
                  <CardFooter>
                    <Button
                      variant="secondary"
                      className="text-foreground/90 group-hover:text-foreground pointer-events-none ml-auto gap-1.5 font-semibold transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
                    >
                      자세히 보기 <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
