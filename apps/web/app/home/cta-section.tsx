'use client'

import { Button } from '@workspace/ui/components/button.tsx'
import Link from 'next/link'
import { HeartHandshakeIcon } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'

export function CtaSection() {
  return (
    <section className="relative isolate flex min-h-screen items-center justify-center overflow-hidden">
      <div className="container mx-auto w-full max-w-7xl px-4 pb-16 md:pb-20 lg:pb-24">
        <div className="flex justify-center">
          <Image src="/logo.jpg" alt="logo" width={0} height={0} className="hidden h-24 w-auto md:block" priority />
        </div>
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              살고 싶은 도시다
            </motion.span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            도시에 다양한 사람들이 함께 오래 살아갈 수 있는 인간환경을 회복함으로써
            <br />
            삶의 질을 개선하고 도시문화 역사를 보존, 창조해 나가는 시민운동입니다.
          </motion.p>

          {/* 후원하기 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          >
            <Button
              asChild
              size="lg"
              className="h-[60px] gap-4 bg-gradient-to-r from-cyan-600 to-teal-600 text-lg text-white shadow-lg transition-all duration-300 hover:from-cyan-700 hover:to-teal-700 hover:shadow-xl"
            >
              <Link href="/support">
                <HeartHandshakeIcon className="size-7" /> 후원하기
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
