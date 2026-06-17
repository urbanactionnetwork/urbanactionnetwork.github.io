'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@workspace/ui/components/navigation-menu'
import Image from 'next/image'
import { MobileNavTrigger } from '@/components/mobile-nav'
import { MAIN_NAV_ITEMS } from '@/lib/site-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="container relative mx-auto flex h-16 max-w-6xl items-center justify-center px-4">
        <Link href="/" className="absolute left-4 flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={0} height={0} className="h-8 w-8 lg:hidden" priority />
          <Image src="/logo-text.png" alt="logo" width={0} height={0} className="hidden h-8 w-auto lg:block" priority />
          <span className="sr-only">홈으로</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {MAIN_NAV_ITEMS.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink asChild className="p-3 font-bold text-slate-900">
                  <Link href={item.href}>{item.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <MobileNavTrigger className="absolute right-4 md:hidden" />
      </div>
    </header>
  )
}
