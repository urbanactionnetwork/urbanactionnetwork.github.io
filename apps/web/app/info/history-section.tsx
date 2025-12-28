'use client'

import React from 'react'

export function HistorySection() {
  return (
    <section id="history" className="scroll-mt-24 space-y-6 py-10">
      <h2 className="text-4xl font-black tracking-tight border-4 border-foreground px-6 py-4 inline-block shadow-neobrutal" style={{ backgroundColor: 'oklch(0.75 0.2 50)' }}>
        걸어온 길
      </h2>
      <div className="space-y-8">
        <div className="border-4 border-foreground p-6 shadow-neobrutal" style={{ backgroundColor: 'oklch(0.9 0.2 80)' }}>
          <h3 className="text-2xl font-black mb-4">2024년</h3>
          <ul className="text-foreground mt-3 space-y-3 pl-6 list-none font-bold">
            <li className="border-l-4 border-foreground pl-4">검단둘레길 조성 마스터플랜 수립</li>
            <li className="border-l-4 border-foreground pl-4">시민 안전정책제안 활동 지원 공모사업</li>
            <li className="border-l-4 border-foreground pl-4">공항동ㆍ화곡1동 도시재생사업 모니터링</li>
            <li className="border-l-4 border-foreground pl-4">아름다운재단 스폰서지원사업: 도심 속 휴식공간(공개공지) 모니터링 및 맵핑</li>
            <li className="border-l-4 border-foreground pl-4">보행자길의 체계적 관리를 위한 법제 개선 방안 연구</li>
            <li className="border-l-4 border-foreground pl-4">민간기록자 네트워크 프로그램 – 기록씨의 하루, 목격자의 밤</li>
            <li className="border-l-4 border-foreground pl-4">인천시 학교숲 조성사업</li>
          </ul>
        </div>
        <div className="border-4 border-foreground p-6 shadow-neobrutal" style={{ backgroundColor: 'oklch(0.65 0.25 300)' }}>
          <h3 className="text-2xl font-black mb-4">2023년</h3>
          <ul className="text-foreground mt-3 space-y-3 pl-6 list-none font-bold">
            <li className="border-l-4 border-foreground pl-4">시민 안전정책제안 활동 지원사업</li>
            <li className="border-l-4 border-foreground pl-4">인천시 학교숲 조성사업</li>
            <li className="border-l-4 border-foreground pl-4">자치구별 주요 외국인 유형 특성에 따른 고시원 특징 비교분석 연구</li>
            <li className="border-l-4 border-foreground pl-4">2023 변화의시나리오 프로젝트 지원사업</li>
            <li className="border-l-4 border-foreground pl-4">어린이 놀이환경 기본계획</li>
            <li className="border-l-4 border-foreground pl-4">통합놀이터 가이드라인 연구</li>
            <li className="border-l-4 border-foreground pl-4">생활문화시설 인문프로그램 지원사업</li>
            <li className="border-l-4 border-foreground pl-4">통합놀이터 네트워크 연대활동</li>
            <li className="border-l-4 border-foreground pl-4">연세로 대중교통전용지구 10년 평가와 향후 정책 방향 토론회</li>
            <li className="border-l-4 border-foreground pl-4">연세로 대중교통전용지구 폐지 반대 연대활동</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
