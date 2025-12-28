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
import { ArrowRightIcon, SparklesIcon } from 'lucide-react'
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

  const text = 'Our Journey'
  const letters = text.split('')

  return (
    <section
      ref={sectionRef}
      className="bg-background border-foreground relative flex w-full items-center justify-center border-b-4 border-t-4 py-12 text-center md:py-16"
    >
      {/* 왼쪽 상단 텍스트 - Neobrutalism 스타일 */}
      <div className="absolute left-4 top-[-32] z-10">
        <div
          className="border-foreground shadow-neobrutal border-4 px-4 py-2"
          style={{ backgroundColor: 'oklch(0.7 0.2 250)' }}
        >
          <span className="text-foreground md:text-12xl text-8xl font-black leading-none">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut',
                }}
                style={{ display: 'inline-block' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </span>
        </div>
      </div>

      <div className="container relative z-10 mx-auto w-full max-w-6xl px-4">
        {loading ? (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
          <div className="text-muted-foreground mt-10 text-sm">{error}</div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Link key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="card-hover-lift group flex h-full cursor-pointer flex-col overflow-hidden">
                  <div className="border-foreground relative aspect-[16/9] w-full overflow-hidden border-b-4">
                    <Image src={item.thumbnail} alt="thumbnail" fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle className="line-clamp-2 text-left">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="line-clamp-3 flex-1 text-left font-bold">{item.description}</CardContent>
                  <CardFooter>
                    <Button variant="secondary" className="pointer-events-none ml-auto gap-1.5 hover:shadow-[6px_6px_0px_0px_oklch(0.1_0_0)]">
                      자세히 보기 <ArrowRightIcon className="size-4" />
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
