'use client'

import Link from 'next/link'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { Button } from '@workspace/ui/components/button.tsx'
import { HeartHandshakeIcon, Sparkles, Users, HandHeart } from 'lucide-react'

export function SupportSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="relative flex w-full items-center justify-center py-16 text-center md:py-12">
      <div className="container relative z-10 mx-auto mt-10 w-full max-w-3xl px-6">
        {/* 아이콘 장식 */}
        <motion.div
          className="mb-6 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <motion.div
            className="rounded-full bg-white/90 p-3 shadow-md backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Users className="size-6 text-cyan-600" />
          </motion.div>
          <motion.div
            className="rounded-full bg-white/90 p-3 shadow-md backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <HandHeart className="size-6 text-teal-600" />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.div
            className="h-px w-[100px] bg-gradient-to-r from-transparent via-zinc-900 to-zinc-900"
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          />
          <h2 className="text-lg font-semibold text-slate-200 md:text-3xl">함께 하시겠어요?</h2>
          <motion.div
            className="h-px w-[100px] bg-gradient-to-l from-transparent via-zinc-900 to-zinc-900"
            initial={{ width: 0 }}
            animate={isInView ? { width: 100 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          />
        </motion.div>

        <motion.p
          className="mt-4 text-2xl font-semibold leading-relaxed text-slate-200 md:text-4xl"
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
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
        </motion.div>
      </div>
    </section>
  )
}

export default SupportSection
