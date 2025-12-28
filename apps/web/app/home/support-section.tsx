'use client'

import Link from 'next/link'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Button } from '@workspace/ui/components/button.tsx'
import { HeartHandshakeIcon, Sparkles, Users, HandHeart } from 'lucide-react'

export function SupportSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const text = 'Join Our Journey'
  const letters = text.split('')

  return (
    <section
      ref={sectionRef}
      className="bg-background border-foreground relative flex w-full items-center justify-center border-b-4 border-t-4 py-16 text-center md:py-12"
    >
      {/* 왼쪽 상단 타이틀 - Neobrutalism 스타일 */}
      <div className="absolute left-4 top-[-32] z-10">
        <div
          className="border-foreground shadow-neobrutal border-4 px-4 py-2"
          style={{ backgroundColor: 'oklch(0.7 0.2 150)' }}
        >
          <span className="text-foreground md:text-12xl text-8xl font-black leading-none">
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
                style={{ display: 'inline-block' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </span>
        </div>
      </div>

      <div className="container relative z-10 mx-auto mt-16 w-full max-w-3xl px-6">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <h2
            className="text-foreground border-foreground shadow-neobrutal mb-4 inline-block border-4 px-6 py-4 text-3xl font-black md:text-5xl"
            style={{ backgroundColor: 'oklch(0.75 0.2 200)' }}
          >
            함께 하시겠어요?
          </h2>
        </motion.div>

        <motion.p
          className="text-foreground border-foreground shadow-neobrutal mt-6 border-4 px-6 py-4 text-2xl font-black leading-relaxed md:text-4xl"
          style={{ backgroundColor: 'oklch(0.85 0.2 120)' }}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.35 }}
        >
          걷고 싶고 살고 싶은 도시를 만드는 일에
          <br />
          지지와 동참을 부탁드립니다.
        </motion.p>

        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        >
          <Button
            asChild
            size="lg"
            className="h-[60px] gap-4 text-lg"
            style={{ backgroundColor: 'oklch(0.75 0.25 340)' }}
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

export default SupportSection
