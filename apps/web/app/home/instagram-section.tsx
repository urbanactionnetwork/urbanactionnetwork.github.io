'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ExternalLink, HeartHandshakeIcon } from 'lucide-react'
import { Skeleton } from '@workspace/ui/components/skeleton.tsx'
import { fetchInstagram } from '@/app/instagram/instagramAPI.ts'
import { Button } from '@workspace/ui/components/button.tsx'
import Link from 'next/link'

interface InstagramEmbedProps {
  url: string
  className?: string
}

// 대체 컴포넌트 - 임베드가 실패했을 때 사용
function InstagramFallback({ url }: { url: string }) {
  return (
    <div className="flex h-96 w-full max-w-sm flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 transition-colors hover:border-pink-400 hover:bg-pink-50">
      <Image
        src="/logo/Instagram_Glyph_Black.svg"
        alt="Instagram Logo"
        width={64}
        height={64}
        className="mb-4 h-16 w-16"
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-4 py-2 text-sm font-medium text-white transition-colors visited:text-white hover:bg-pink-600 hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white focus:from-[#f58529] focus:via-[#dd2a7b] focus:to-[#8134af] focus:text-white active:text-white data-[state=open]:text-white"
      >
        인스타그램에서 보기
        <ExternalLink className="h-4 w-4" />
      </a>
    </div>
  )
}

function InstagramEmbed({ url, className = '' }: InstagramEmbedProps) {
  const embedRef = useRef<HTMLDivElement>(null)
  const [embedLoaded, setEmbedLoaded] = useState(false)
  const [embedFailed, setEmbedFailed] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 임베드 로딩 타이머
    const timer = setTimeout(() => {
      if (!embedLoaded) {
        setEmbedFailed(true)
      }
    }, 5000) // 5초 후 실패로 간주

    // Instagram embed script 로드
    if (typeof window !== 'undefined') {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
        setEmbedLoaded(true)
      } else {
        const script = document.createElement('script')
        script.src = '//www.instagram.com/embed.js'
        script.async = true
        script.onload = () => {
          setEmbedLoaded(true)
          if (window.instgrm) {
            window.instgrm.Embeds.process()
          }
        }
        script.onerror = () => {
          setEmbedFailed(true)
        }
        document.body.appendChild(script)
      }
    }

    return () => clearTimeout(timer)
  }, [embedLoaded])

  useEffect(() => {
    if (embedLoaded) {
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [embedLoaded])

  if (embedFailed) {
    return <InstagramFallback url={url} />
  }

  return (
    <div ref={embedRef} className={`instagram-embed relative ${className}`}>
      {!isVisible && <Skeleton className="h-156 w-full" />}
      <div className="flex justify-center">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: 0,
            boxShadow: 'none',
            margin: '0px',
            maxWidth: '0px',
            padding: 0,
            width: '100%',
          }}
        />
      </div>
    </div>
  )
}

export function InstagramSection() {
  const [items, setItems] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const res = await fetchInstagram()
        if (!mounted) return
        setItems(res.data)
      } catch (e) {
        console.error(e)
        if (!mounted) return
        setError('인스타그램 정보를 불러오는 중 문제가 발생했습니다.')
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
        <Button
          asChild
          size="lg"
          className="gap-2 bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white visited:text-white hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white focus:from-[#f58529] focus:via-[#dd2a7b] focus:to-[#8134af] focus:text-white active:text-white data-[state=open]:text-white"
        >
          <Link href="https://www.instagram.com/urbanaction_1994/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/logo/Instagram_Glyph_White.svg"
              alt="Instagram Logo"
              width={20}
              height={20}
              className="size-5"
            />
            <h3 className="text-lg md:text-lg">도시연대의 더 많은 게시물 보기</h3>
            <ExternalLink className="size-4" />
          </Link>
        </Button>
      </div>

      {loading ? (
        <div className="gap-17 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton key={index} className="h-156 w-full" />
          ))}
        </div>
      ) : error ? (
        <div className="text-muted-foreground text-sm">{error}</div>
      ) : (
        <div className="gap-17 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="overflow-hidden">
              <InstagramEmbed url={item} className="w-full" />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

// Instagram embed script를 위한 타입 선언
declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}
