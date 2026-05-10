'use client'

import { Button } from '@workspace/ui/components/button.tsx'
import Link from 'next/link'
import { HeartHandshakeIcon, ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'
import { useRef } from 'react'

export function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToNext = () => {
    if (sectionRef.current) {
      const nextSection = sectionRef.current.nextElementSibling
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[#0F0F19]"
    >
      <div className="container mx-auto flex w-full max-w-7xl flex-1 items-center justify-center px-4 py-16 md:py-20 lg:py-24">
        <div className="w-full">
          {/* 메인 타이틀과 CTA 버튼을 같은 행에 배치 */}
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1
              className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl xl:text-7xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              걷고 싶은 도시가
              <br />
              <motion.span
                className="text-violet-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                살고 싶은 도시다
              </motion.span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-8 max-w-5xl text-lg leading-relaxed text-slate-200 md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            >
              공간의 정의를 바로 세우고 장소의 가치를 되살려 다양한 사람들이 오래 함께 살아가는 도시.
              <br />
              우리는 시민의 힘으로 도시의 문화와 역사를 보존하고 창조합니다.
            </motion.p>
          </div>

          {/* 후원하기 버튼 (가로 최대 700px) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
            className="mx-auto flex w-full max-w-[700px] justify-center px-4 pb-20 md:pb-24 lg:pb-32"
          >
            <motion.div
              animate={{ x: [0, -6, 6, -6, 6, 0] }}
              transition={{
                duration: 0.45,
                repeat: Infinity,
                repeatDelay: 2.55,
                ease: 'easeInOut',
              }}
              className="block w-full"
            >
              <motion.div
                className="w-full"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="h-[60px] w-full max-w-none gap-4 rounded-xl border-0 bg-[#68cf00] px-8 text-lg font-semibold text-gray-900 shadow-lg transition-colors hover:bg-[#5dcc00]"
                >
                  <Link href="/support" className="w-full">
                    <HeartHandshakeIcon className="size-7 shrink-0" /> 후원하기
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 아래로 스크롤 유도 화살표 */}
      <motion.div
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}
        onClick={scrollToNext}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="flex flex-col items-center gap-0"
        >
          <ChevronDown className="size-32 text-slate-200 transition-colors hover:text-white md:size-32" />
          <ChevronDown className="-mt-22 size-32 text-slate-200 opacity-50 transition-colors hover:text-white md:size-32" />
        </motion.div>
      </motion.div>
    </section>
  )
}
