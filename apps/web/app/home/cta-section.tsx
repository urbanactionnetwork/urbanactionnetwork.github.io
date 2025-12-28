'use client'

import { Button } from '@workspace/ui/components/button.tsx'
import Link from 'next/link'
import { HeartHandshakeIcon, Footprints, Home, Heart } from 'lucide-react'
import { motion } from 'motion/react'

export function CtaSection() {
  return (
    <section className="relative isolate flex items-center overflow-hidden bg-background">
      <div className="container mx-auto w-full max-w-6xl px-4 py-12 md:py-16 lg:py-20">
        {/* 메인 타이틀 */}
        <div className="mb-8">
          <h1
            className="text-left text-5xl leading-tight md:text-6xl lg:text-7xl xl:text-8xl"
            style={{ fontFamily: 'var(--font-blackHanSans)' }}
          >
            <motion.span
              className="text-foreground inline-block border-4 border-foreground px-6 py-3 shadow-neobrutal-lg"
              style={{ backgroundColor: 'oklch(0.9 0.2 80)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              걷고 싶은 도시가
            </motion.span>
            <br />
            <motion.span
              className="text-foreground inline-block border-4 border-foreground px-6 py-3 mt-4 shadow-neobrutal-lg"
              style={{ backgroundColor: 'oklch(0.75 0.2 50)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              살고 싶은 도시다
            </motion.span>
          </h1>
        </div>

        {/* 정보 카드 섹션 */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
        >
          {/* 보행권 확보 운동 */}
          <div className="text-foreground flex flex-col border-4 border-foreground p-6 text-center shadow-neobrutal hover:shadow-neobrutal-lg transition-shadow" style={{ backgroundColor: 'oklch(0.7 0.2 250)' }}>
            <div className="mb-4 flex justify-center">
              <Footprints className="text-foreground size-10" />
            </div>
            <h3 className="text-2xl font-black mb-2">보행권 확보 운동</h3>
            <p className="text-lg font-bold">사람이 중심이 되는 도시</p>
          </div>

          {/* 마을 만들기 운동 */}
          <div className="text-foreground flex flex-col border-4 border-foreground p-6 text-center shadow-neobrutal hover:shadow-neobrutal-lg transition-shadow" style={{ backgroundColor: 'oklch(0.7 0.2 150)' }}>
            <div className="mb-4 flex justify-center">
              <Home className="text-foreground size-10" />
            </div>
            <h3 className="text-2xl font-black mb-2">마을 만들기 운동</h3>
            <p className="text-lg font-bold">주민이 스스로 삶터 가꾸기</p>
          </div>

          {/* 생활문화 운동 */}
          <div className="text-foreground flex flex-col border-4 border-foreground p-6 text-center shadow-neobrutal hover:shadow-neobrutal-lg transition-shadow" style={{ backgroundColor: 'oklch(0.75 0.25 340)' }}>
            <div className="mb-4 flex justify-center">
              <Heart className="text-foreground size-10" />
            </div>
            <h3 className="text-2xl font-black mb-2">생활문화 운동</h3>
            <p className="text-lg font-bold">사람의 삶의 흔적을 소중히</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
