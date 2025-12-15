'use client'

import { useEffect, useState } from 'react'
import { fetchStaff, type Staff as StaffResponse } from '@/app/info/infoAPI'
import { Mail, Building2, User2 } from 'lucide-react'

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
        setError('함께하는 사람들 정보를 불러오는 중 문제가 발생했습니다.')
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
        (() => {
          // group by group name (group is now required)
          const order: string[] = []
          const map = new Map<string, StaffItem[]>()
          for (const m of items) {
            const g = m.group
            if (!map.has(g)) {
              map.set(g, [])
              order.push(g)
            }
            map.get(g)!.push(m)
          }
          return (
            <div className="space-y-8">
              {order.map((g) => (
                <div key={g} className="space-y-4">
                  <h3 className="text-xl font-semibold tracking-tight">{g}</h3>
                  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {map.get(g)!.map((member) => (
                      <li
                        key={`${member.name}-${member.mail}`}
                        className="border-muted bg-card text-card-foreground hover:border-foreground/20 group rounded-lg border p-4 shadow-sm transition-colors"
                      >
                        <div className="min-w-0 space-y-2">
                          {/* 이름 */}
                          <p className="flex items-center gap-2 truncate text-base font-medium">
                            <User2 className="text-muted-foreground size-4 shrink-0" />
                            <span className="truncate">{member.name}</span>
                          </p>

                          {/* 소속 */}
                          {member.affiliation ? (
                            <p className="text-muted-foreground flex items-center gap-2 truncate text-sm">
                              <Building2 className="size-4 shrink-0" />
                              <span className="truncate">{member.affiliation}</span>
                            </p>
                          ) : null}

                          {/* 메일 */}
                          {member.mail ? (
                            <a
                              href={`mailto:${member.mail}`}
                              className="text-muted-foreground hover:text-foreground block items-center gap-2 truncate text-sm underline-offset-2 hover:underline"
                            >
                              <Mail className="size-4 shrink-0" />
                              <span className="truncate">{member.mail}</span>
                            </a>
                          ) : null}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )
        })()
      )}
    </section>
  )
}
