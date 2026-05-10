'use client'

import { useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  useLayoutEffect(() => {
    router.replace('/info/vision-mission/')
  }, [router])

  return (
    <p className="text-muted-foreground p-4 text-sm" role="status">
      이동 중…
    </p>
  )
}
