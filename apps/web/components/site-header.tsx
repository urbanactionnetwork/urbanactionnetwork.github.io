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
    <header className="bg-background sticky top-0 z-40 w-full border-b-4 border-foreground shadow-neobrutal-sm">
      <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 border-4 border-foreground bg-background px-3 py-2 shadow-neobrutal-sm hover:shadow-neobrutal transition-shadow">
          <Image src="/logo.jpg" alt="logo" width={0} height={0} className="h-10 w-10 md:hidden" priority />
          <Image src="/logo-text.png" alt="logo" width={0} height={0} className="hidden h-10 w-auto md:block" priority />
          <span className="sr-only">홈으로</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-2">
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} border-4 border-foreground bg-background px-4 py-2 font-bold shadow-neobrutal-sm hover:shadow-neobrutal hover:bg-accent transition-all`}>
                <Link href="/info">소개</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} border-4 border-foreground bg-background px-4 py-2 font-bold shadow-neobrutal-sm hover:shadow-neobrutal hover:bg-accent transition-all`}>
                <Link href="/activities">주요활동</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} border-4 border-foreground bg-background px-4 py-2 font-bold shadow-neobrutal-sm hover:shadow-neobrutal hover:bg-accent transition-all`}>
                <Link href="/news">새소식</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} border-4 border-foreground bg-background px-4 py-2 font-bold shadow-neobrutal-sm hover:shadow-neobrutal hover:bg-accent transition-all`}>
                <Link href="/support">회원가입 및 후원</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
