'use client'

import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@workspace/ui/components/navigation-menu'

export function SiteHeader() {
  return (
    <header className="bg-background/80 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          {/* 원본 비율 유지 및 선명도 개선을 위해 Next/Image 대신 기본 img 사용 */}
          <img src="/logo.png" alt="logo" className="h-8 w-auto" />
          <span className="sr-only">홈으로</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/info">소개</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/activities">주요활동</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/news">새소식</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/support">회원가입 및 후원</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={`${navigationMenuTriggerStyle()} bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white visited:text-white hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white focus:from-[#f58529] focus:via-[#dd2a7b] focus:to-[#8134af] focus:text-white active:text-white data-[state=open]:text-white`}
              >
                <a href="https://www.instagram.com/urbanaction_1994/" target="_blank" rel="noopener noreferrer">
                  <span className="inline-flex items-center gap-2">
                    <img src="/logo/Instagram_Glyph_White.svg" alt="" aria-hidden="true" className="h-4 w-4" />
                    <span>Instagram</span>
                  </span>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}
