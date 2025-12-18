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
      className="relative flex w-full items-center justify-center bg-gradient-to-br from-lime-200 via-lime-100 to-lime-50 py-12 text-center md:py-16"
    >
      {/* 배경 장식 요소 - 원형 패턴 */}
      <div className="absolute inset-0 -z-0 overflow-hidden">
        {/* 큰 원형 장식 */}
        <motion.div
          className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        />
      </div>
      {/* 왼쪽 상단 텍스트 - 섹션 왼쪽 상단 모서리에 정확히 배치 */}
      <div className="absolute left-0 top-0 z-0 m-0 ml-[-12] mt-[-36] flex items-center gap-2">
        <span className="text-[calc(700px*0.25)] font-medium leading-none text-lime-600">
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
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
