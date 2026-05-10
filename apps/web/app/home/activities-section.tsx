'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card.tsx'
import { Skeleton } from '@workspace/ui/components/skeleton.tsx'
import { ChevronRightIcon } from 'lucide-react'
import { fetchTopActivities, type Activities } from '@/app/activities/activitiesAPI.ts'

export interface ActivitiesItem {
  id: number
  title: string
  description: string
  thumbnail: string
  url: string
}

const PATTERN_BACKGROUNDS = ['/patterns/card-bg-1.svg', '/patterns/card-bg-2.svg', '/patterns/card-bg-3.svg']

export function ActivitiesSection() {
  const [items, setItems] = useState<ActivitiesItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section
      ref={sectionRef}
      className="relative flex w-full items-center justify-center border-t border-white/10 bg-[#0F0F19] py-12 text-center md:py-16"
    >
      <div className="container relative z-10 mx-auto w-full max-w-[1440px] px-4">
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
          <div className="grid grid-cols-[repeat(auto-fit,284px)] justify-center gap-2.5">
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
          <div className="grid grid-cols-[repeat(auto-fit,284px)] justify-center gap-5">
              {items.map((item, index) => {
                const patternBg = PATTERN_BACKGROUNDS[index % PATTERN_BACKGROUNDS.length]
                return (
                  <Link
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full w-[284px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  >
                    <Card className="group relative flex w-[284px] cursor-pointer flex-col gap-0 overflow-hidden rounded-xl !bg-white !text-gray-900 transition-all duration-300 hover:shadow-xl">
                      {/* 패턴 배경 이미지 */}
                      <div
                        className="pointer-events-none absolute inset-0 z-0"
                        style={{
                          backgroundImage: `url(${patternBg})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          filter: 'blur(20px)',
                        }}
                      />
                      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden shadow-md">
                        <Image
                          src={item.thumbnail}
                          alt="thumbnail"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                      <CardHeader className="relative shrink-0 space-y-0 p-0">
                        <div className="absolute inset-0 shadow-sm saturate-150 backdrop-blur-xl backdrop-saturate-150" />
                        <CardTitle className="group-hover:text-primary relative z-10 p-0 transition-colors duration-300">
                          <p className="line-clamp-1 text-left text-lg leading-7 text-slate-900">{item.title}</p>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="relative min-h-[100px] flex-none p-0">
                        <div className="absolute inset-0 shadow-sm saturate-150 backdrop-blur-xl backdrop-saturate-150" />
                        <div className="relative z-10 h-full p-0 text-left text-sm text-slate-700">
                          <p className="line-clamp-4 leading-5">{item.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
          </div>
        )}
      </div>
    </section>
  )
}
