'use client'

import React from 'react'
import { MapPin } from 'lucide-react'

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-24 space-y-4 py-10">
      <h2 className="text-2xl font-semibold tracking-tight">오시는 길</h2>
      <div className="space-y-4">
        <p className="text-muted-foreground flex items-start gap-2 leading-7">
          <span>
            <MapPin className="mr-2 inline h-4 w-4 align-[-2px]" aria-hidden />
            (04526) 서울 중구 세종대로16길 23 3층
          </span>
        </p>
        <img
          src="/location.jpg"
          alt="도시연대 위치 안내 이미지"
          className="bg-muted/40 mx-auto block w-full rounded-md"
        />
      </div>
    </section>
  )
}
