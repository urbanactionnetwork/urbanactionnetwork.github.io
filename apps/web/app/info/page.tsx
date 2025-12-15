import React from 'react'

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
import { StaffSection } from '@/app/info/staff-section'
import { SiteFooter } from '@/components/site-footer'
import { VisionMissionSection } from '@/app/info/vision-mission-section'
import { HistorySection } from '@/app/info/history-section'
import { LocationSection } from '@/app/info/location-section'

export default async function Page() {
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
      {/* 좌측 사이드바 */}
      <Sidebar variant="inset" className="pt-[var(--header-height)]">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu className="mt-18">
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#vision-mission">비전과 미션</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#history">걸어온 길</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#staff">함께하는 사람들</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <a href="#location">오시는 길</a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* 메인 영역 */}
      <SidebarInset>
        <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-6">
          {/* 비전과 미션 */}
          <VisionMissionSection />

          {/* 걸어온 길 */}
          <HistorySection />

          {/* 함께하는 사람들 */}
          <StaffSection />

          {/* 오시는 길 */}
          <LocationSection />

          <SiteFooter />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
