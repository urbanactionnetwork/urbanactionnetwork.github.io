'use client'

import { Button } from '@workspace/ui/components/button.tsx'
import Link from 'next/link'
import { HeartHandshakeIcon, Footprints, Home, Heart } from 'lucide-react'
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
        <div className="from-background/30 via-background/40 to-background/30 absolute inset-0 bg-gradient-to-br" />
      </div>

      <div className="container mx-auto w-full max-w-6xl px-4 py-8 md:py-10 lg:py-12">
        {/* 메인 타이틀과 CTA 버튼을 같은 행에 배치 */}
        <div className="mb-2 flex items-start justify-between gap-4 md:mb-4">
          {/* 메인 타이틀 */}
          <h1
            className="text-leftmd:text-5xl text-5xl leading-tight lg:text-6xl xl:text-7xl"
            style={{ fontFamily: 'var(--font-blackHanSans)' }}
          >
            <motion.span
              className="text-zinc-800 drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              걷고 싶은 도시가
            </motion.span>
            <br />
            <motion.span
              className="text-zinc-800 drop-shadow-md"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              살고 싶은 도시다
            </motion.span>
          </h1>

          {/* CTA 버튼 - 오른쪽 상단 정렬 */}
          <motion.div
            className="flex-shrink-0"
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

        {/* 정보 카드 섹션 */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
        >
          {/* 보행권 확보 운동 */}
          <div className="bg-background/50 text-foreground flex flex-col rounded-none border p-6 text-center backdrop-blur-sm">
            <div className="mb-4 flex justify-center">
              <Footprints className="text-primary size-8" />
            </div>
            <h3 className="text-2xl font-semibold">보행권 확보 운동</h3>
            <p className="text-muted-foreground text-lg font-semibold">사람이 중심이 되는 도시</p>
          </div>

          {/* 마을 만들기 운동 */}
          <div className="bg-background/50 text-foreground flex flex-col rounded-none border p-6 text-center backdrop-blur-sm">
            <div className="mb-4 flex justify-center">
              <Home className="text-primary size-8" />
            </div>
            <h3 className="text-2xl font-semibold">마을 만들기 운동</h3>
            <p className="text-muted-foreground text-lg font-semibold">주민이 스스로 삶터 가꾸기</p>
          </div>

          {/* 생활문화 운동 */}
          <div className="bg-background/50 text-foreground flex flex-col rounded-none border p-6 text-center backdrop-blur-sm">
            <div className="mb-4 flex justify-center">
              <Heart className="text-primary size-8" />
            </div>
            <h3 className="text-2xl font-semibold">생활문화 운동</h3>
            <p className="text-muted-foreground text-lg font-semibold">사람의 삶의 흔적을 소중히</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
