'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@workspace/ui/components/navigation-menu'
import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="logo" width={0} height={0} className="h-8 w-8 md:hidden" priority />
          <Image src="/logo-text.png" alt="logo" width={0} height={0} className="hidden h-8 w-auto md:block" priority />
          <span className="sr-only">홈으로</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} p-3`}>
                <Link href="/info">소개</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} p-3`}>
                <Link href="/activities">주요활동</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} p-3`}>
                <Link href="/news">공지사항</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} p-3`}>
                <Link href="/support">회원가입 및 후원</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
