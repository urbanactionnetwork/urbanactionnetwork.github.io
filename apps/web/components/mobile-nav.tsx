'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

import { Button } from '@workspace/ui/components/button'
import { Dialog, DialogContent, DialogTitle } from '@workspace/ui/components/dialog'
import { cn } from '@workspace/ui/lib/utils'
import { MAIN_NAV_ITEMS, type NavItem } from '@/lib/site-nav'

type MobileNavContextValue = {
  open: boolean
  setOpen: (open: boolean) => void
}

const MobileNavContext = React.createContext<MobileNavContextValue | null>(null)

function isActivePath(pathname: string, href: string) {
  if (href === '/') {
    return pathname === '/'
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

function NavLink({
  href,
  label,
  active,
  nested,
  onNavigate,
}: {
  href: string
  label: string
  active: boolean
  nested?: boolean
  onNavigate: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        'text-foreground block rounded-md px-4 py-3 text-lg font-bold transition-colors',
        nested ? 'text-base font-semibold' : '',
        nested ? 'pl-8' : '',
        active ? 'bg-accent text-accent-foreground' : 'hover:bg-accent/50'
      )}
    >
      {label}
    </Link>
  )
}

function MobileNavOverlay() {
  const { open, setOpen } = useMobileNavContext()
  const pathname = usePathname()

  const closeMenu = React.useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        showCloseButton={false}
        className="bg-background text-foreground fixed inset-0 left-0 top-0 flex h-dvh w-full max-w-none translate-x-0 translate-y-0 flex-col gap-0 rounded-none border-0 p-0 shadow-none data-[state=closed]:zoom-out-100 data-[state=open]:zoom-in-100 sm:max-w-none"
      >
        <DialogTitle className="sr-only">전체 메뉴</DialogTitle>

        <div className="border-border flex h-16 shrink-0 items-center justify-between border-b px-4">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={0} height={0} className="h-8 w-8 invert" priority />
            <span className="sr-only">홈으로</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={closeMenu}
            aria-label="메뉴 닫기"
            className="text-foreground hover:bg-accent/50 hover:text-foreground"
          >
            <X style={{ width: '24px', height: '24px' }} />
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="space-y-1">
            {MAIN_NAV_ITEMS.map((item) => {
              const showSubNav = item.subNavItems && item.subNavItems.length > 0
              const isMainActive = isActivePath(pathname, item.href)

              return (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    label={item.label}
                    active={isMainActive}
                    onNavigate={closeMenu}
                  />
                  {showSubNav ? (
                    <ul className="mt-1 space-y-1">
                      {item.subNavItems?.map((subItem) => (
                        <li key={subItem.href}>
                          <NavLink
                            href={subItem.href}
                            label={subItem.label}
                            active={isActivePath(pathname, subItem.href)}
                            nested
                            onNavigate={closeMenu}
                          />
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              )
            })}
          </ul>
        </nav>
      </DialogContent>
    </Dialog>
  )
}

function useMobileNavContext() {
  const context = React.useContext(MobileNavContext)
  if (!context) {
    throw new Error('useMobileNav must be used within MobileNavProvider')
  }

  return context
}

export function MobileNavProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  const value = React.useMemo(
    () => ({
      open,
      setOpen


    }),
    [open]
  )

  return (
    <MobileNavContext.Provider value={value}>
      {children}
      <MobileNavOverlay />
    </MobileNavContext.Provider>
  )
}

export function useMobileNav() {
  return useMobileNavContext()
}

export function MobileNavTrigger({ className }: { className?: string }) {
  const { setOpen } = useMobileNavContext()

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn('text-slate-900 hover:bg-slate-100 hover:text-slate-900', className)}
      onClick={() => setOpen(true)}
      aria-label="메뉴 열기"
    >
      <Menu style={{ width: '24px', height: '24px' }} />
    </Button>
  )
}
