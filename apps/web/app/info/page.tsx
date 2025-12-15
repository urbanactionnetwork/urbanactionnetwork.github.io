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
import { StaffSection } from '@/components/info/staff-section'

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
              <SidebarMenu>
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
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* 메인 영역 */}
      <SidebarInset>
        <div className="mx-auto w-full max-w-6xl px-4 py-8 lg:px-6">
          {/* 비전과 미션 */}
          <section id="vision-mission" className="scroll-mt-24 space-y-4 py-10">
            <h2 className="text-2xl font-semibold tracking-tight">비전과 미션</h2>
            <div className="prose text-muted-foreground max-w-none leading-7">
              <p>도시연대를 소개합니다.</p>
              <p>
                걷고싶은도시만들기시민연대 (이하 도시연대) 는 도시에 다양한 사람들이 함께 오래 살아갈 수 있는 인간환경을
                회복함으로써 삶의 질을 개선하고 도시문화와 역사를 보존, 창조해 나가는 것을 활동목표로 삼고 있습니다.
              </p>
              <p>
                도시는 그 곳에서 생활하는 시민들이 삶의 문화가 살아 숨쉬는 인간환경을 만들고 가꾸어 나갈 때 궁극적으로
                인간의 얼굴을 가진 걷고 싶은 도시를 실현할 수 있습니다. 도시를 지배하는 비인간적, 반환경적 경제논리를
                극복하고, 시민들이 자신의 몸 가까운 곳부터 살피고 돌보는 생활 속의 실천을 토대로 작지만 강력한 시민운동,
                지역사회에 밀착한 현장운동을 추구하고 있습니다.
              </p>
              <p>
                도시연대는 보행권 확보 운동, 마을만들기 운동, 생활문화 운동을 주된 축으로 활동하고 있습니다. 이 세가지
                축은 도시연대가 우리 도시를 바라보는 시각을 반영합니다. 인간이 중심이 되는 도시를 만들기 위한 보행권
                확보 운동, 사람들의 삶을 소중히 생각하는 생활문화 운동, 주민이 주체가 되어 ‘내가 살고 있는 마을을 내가
                살기 좋은 마을로 만드는’ 마을만들기 운동이 그 내용입니다.
              </p>
              <p>
                이 세가지는 도시연대 모든 활동의 근간을 이루며, 서로 밀접한 관계를 갖고 있습니다. 진정한 보행권 확보와
                생활문화 존중을 위해서는 그곳에 살고 있는 주민들의 참여가 기본이 되어야 한다는 생각이며, 이에 이 두가지
                운동에 주민참여를 기본 전제로 활동하고 있습니다. 마을만들기 운동에서도 그것이 담을 수 있는 다양한 가치
                속에 보행환경 개선 운동이 담고 있는 사람 중심의 가치, 생활문화운동이 담고 있는 사람들의 삶에 대한 존중이
                배어 있습니다.
              </p>
            </div>
          </section>

          {/* 걸어온 길 */}
          <section id="history" className="scroll-mt-24 space-y-6 py-10">
            <h2 className="text-2xl font-semibold tracking-tight">걸어온 길</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium">2024년</h3>
                <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
                  <li>검단둘레길 조성 마스터플랜 수립</li>
                  <li>시민 안전정책제안 활동 지원 공모사업</li>
                  <li>공항동ㆍ화곡1동 도시재생사업 모니터링</li>
                  <li>아름다운재단 스폰서지원사업: 도심 속 휴식공간(공개공지) 모니터링 및 맵핑</li>
                  <li>보행자길의 체계적 관리를 위한 법제 개선 방안 연구</li>
                  <li>민간기록자 네트워크 프로그램 – 기록씨의 하루, 목격자의 밤</li>
                  <li>인천시 학교숲 조성사업</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium">2023년</h3>
                <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
                  <li>시민 안전정책제안 활동 지원사업</li>
                  <li>인천시 학교숲 조성사업</li>
                  <li>자치구별 주요 외국인 유형 특성에 따른 고시원 특징 비교분석 연구</li>
                  <li>2023 변화의시나리오 프로젝트 지원사업</li>
                  <li>어린이 놀이환경 기본계획</li>
                  <li>통합놀이터 가이드라인 연구</li>
                  <li>생활문화시설 인문프로그램 지원사업</li>
                  <li>통합놀이터 네트워크 연대활동</li>
                  <li>연세로 대중교통전용지구 10년 평가와 향후 정책 방향 토론회</li>
                  <li>연세로 대중교통전용지구 폐지 반대 연대활동</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 함께하는 사람들 */}
          <StaffSection />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
