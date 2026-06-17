'use client'

import React from 'react'
import Link from 'next/link'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@workspace/ui/components/sidebar'
import { SiteFooter } from '@/components/site-footer'
import { useMobileNav } from '@/components/mobile-nav'
import { useIsMobile } from '@/hooks/use-mobile'
import { INFO_SUB_NAV_ITEMS } from '@/lib/site-nav'

function InfoPageContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-6">
      {children}
      <SiteFooter />
    </div>
  )
}

function InfoSidebar() {
  return (
    <Sidebar variant="inset" className="pt-[var(--header-height)]">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="mt-18">
              {INFO_SUB_NAV_ITEMS.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export function InfoLayoutClient({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const showSidebar = mounted && !isMobile

  if (!showSidebar) {
    return (
      <div className="scroll-smooth">
        <InfoPageContent>{children}</InfoPageContent>
      </div>
    )
  }

  return (
    <SidebarProvider
      style={
        {
          '--sidebar-width': 'calc(var(--spacing) * 60)',
          '--header-height': 'calc(var(--spacing) * 12)',
        } as React.CSSProperties
      }
      className="scroll-smooth"
    >
      <InfoSidebar />

      <SidebarInset>
        <InfoPageContent>{children}</InfoPageContent>
      </SidebarInset>
    </SidebarProvider>
  )
}
