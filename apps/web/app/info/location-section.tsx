'use client'

import React from 'react'
import { MapPin } from 'lucide-react'

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-24 space-y-4 py-10">
      <h2 className="text-4xl font-black tracking-tight border-4 border-foreground px-6 py-4 inline-block shadow-neobrutal" style={{ backgroundColor: 'oklch(0.7 0.2 150)' }}>
        오시는 길
      </h2>
      <div className="space-y-4">
        <p className="text-foreground flex items-start gap-2 leading-7 font-bold border-4 border-foreground px-6 py-4 shadow-neobrutal-sm" style={{ backgroundColor: 'oklch(0.9 0.2 80)' }}>
          <span>
            <MapPin className="mr-2 inline h-5 w-5 align-[-2px]" aria-hidden />
            (04526) 서울 중구 세종대로16길 23 3층
          </span>
        </p>
        <div className="border-4 border-foreground p-4 shadow-neobrutal" style={{ backgroundColor: 'oklch(0.75 0.2 200)' }}>
          <img
            src="/placeholder.svg"
            alt="도시연대 위치 안내 이미지"
            className="w-full mx-auto block"
          />
        </div>
      </div>
    </section>
  )
}
