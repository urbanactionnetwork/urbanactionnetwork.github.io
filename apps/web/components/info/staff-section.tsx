'use client'

import { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@workspace/ui/components/avatar'
import { fetchStaff, type Staff as StaffResponse } from '@/app/info/infoAPI'

type StaffItem = StaffResponse['data'][number]

export function StaffSection() {
  const [items, setItems] = useState<StaffItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      try {
        const res = await fetchStaff()
        if (!mounted) return
        setItems(res?.data ?? [])
      } catch (e) {
        console.error(e)
        if (!mounted) return
        setError('구성원 정보를 불러오는 중 문제가 발생했습니다.')
      } finally {
        if (mounted) setLoading(false)
      }
    })()
    return () => {
      mounted = false
    }
  }, [])

  return (
    <section id="staff" className="scroll-mt-24 space-y-6 py-10">
      <h2 className="text-2xl font-semibold tracking-tight">함께하는 사람들</h2>
      {loading ? (
        <p className="text-muted-foreground">불러오는 중...</p>
      ) : error ? (
        <p className="text-muted-foreground">{error}</p>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {items.map((member) => (
            <li
              key={`${member.name}-${member.mail}`}
              className="border-muted bg-card text-card-foreground hover:border-foreground/20 group rounded-lg border p-4 shadow-sm transition-colors"
            >
              <div className="flex items-center gap-4">
                <Avatar className="size-14">
                  <AvatarImage src={member.imageUrl} alt={member.name} />
                  <AvatarFallback>{member.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="truncate text-base font-medium">{member.name}</p>
                  <a
                    href={`mailto:${member.mail}`}
                    className="text-muted-foreground hover:text-foreground block truncate text-sm underline-offset-2 hover:underline"
                  >
                    {member.mail}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
