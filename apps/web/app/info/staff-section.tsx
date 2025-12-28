'use client'

import { useEffect, useState } from 'react'
import { fetchStaff, type Staff as StaffResponse } from '@/app/info/infoAPI.ts'
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
      <h2 className="text-4xl font-black tracking-tight border-4 border-foreground px-6 py-4 inline-block shadow-neobrutal" style={{ backgroundColor: 'oklch(0.75 0.2 200)' }}>
        함께하는 사람들
      </h2>
      {loading ? (
        <p className="text-foreground font-bold border-4 border-foreground px-6 py-4 shadow-neobrutal-sm inline-block" style={{ backgroundColor: 'oklch(0.9 0.2 80)' }}>
          불러오는 중...
        </p>
      ) : error ? (
        <p className="text-foreground font-bold border-4 border-foreground px-6 py-4 shadow-neobrutal-sm inline-block" style={{ backgroundColor: 'oklch(0.6 0.25 25)' }}>
          {error}
        </p>
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
                  <h3 className="text-2xl font-black border-4 border-foreground px-4 py-2 inline-block shadow-neobrutal-sm" style={{ backgroundColor: 'oklch(0.85 0.2 120)' }}>
                    {g}
                  </h3>
                  <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {map.get(g)!.map((member) => (
                      <li
                        key={`${member.name}-${member.mail}`}
                        className="border-4 border-foreground p-4 shadow-neobrutal hover:shadow-neobrutal-lg transition-shadow"
                        style={{ backgroundColor: 'oklch(0.85 0.2 120)' }}
                      >
                        <div className="min-w-0 space-y-2">
                          {/* 이름 */}
                          <p className="flex items-center gap-2 truncate text-base font-black">
                            <User2 className="text-foreground size-5 shrink-0" />
                            <span className="truncate">{member.name}</span>
                          </p>

                          {/* 소속 */}
                          {member.affiliation ? (
                            <p className="text-foreground flex items-center gap-2 truncate text-sm font-bold">
                              <Building2 className="size-4 shrink-0" />
                              <span className="truncate">{member.affiliation}</span>
                            </p>
                          ) : null}

                          {/* 메일 */}
                          {member.mail ? (
                            <a
                              href={`mailto:${member.mail}`}
                              className="text-foreground block items-center gap-2 truncate text-sm font-bold border-2 border-foreground px-2 py-1 inline-block"
                              style={{ backgroundColor: 'oklch(0.9 0.2 80)' }}
                              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.75 0.2 50)'}
                              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'oklch(0.9 0.2 80)'}
                            >
                              <Mail className="size-4 shrink-0 inline mr-2" />
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
