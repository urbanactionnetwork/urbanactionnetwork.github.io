'use client'

import { Button } from '@workspace/ui/components/button.tsx'
import Link from 'next/link'
import { HeartHandshakeIcon } from 'lucide-react'
import { motion } from 'motion/react'

export function CtaSection() {
  return (
    <section className="relative isolate flex items-center overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1640734174398-23f2f1aba208?q=80&w=3432&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}
      >
        {/* 오버레이 - 텍스트 가독성을 위한 어두운 레이어 */}
        <div className="from-background/50 via-background/40 to-background/30 absolute inset-0 bg-gradient-to-br" />
      </div>

      <div className="container mx-auto w-full max-w-6xl px-4 py-8 text-center md:py-10 lg:py-12">
        {/* 메인 타이틀 */}
        <h1
          className="mb-4 text-4xl font-semibold leading-tight md:mb-8 md:text-6xl lg:text-7xl xl:text-8xl"
          style={{ fontFamily: 'var(--font-gamja)' }}
        >
          <motion.span
            className="text-zinc-700 drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            걷고 싶은 도시가
          </motion.span>
          <br />
          <motion.span
            className="text-zinc-700 drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            살고 싶은 도시다
          </motion.span>
        </h1>

        {/* CTA 버튼 */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
        >
          <Button
            asChild
            size="lg"
            className="h-[60px] gap-4 text-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Link href="/support">
              <HeartHandshakeIcon className="size-7" /> 정기후원하기
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
