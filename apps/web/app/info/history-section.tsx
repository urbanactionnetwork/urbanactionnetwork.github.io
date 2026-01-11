'use client'

import React from 'react'

export function HistorySection() {
  return (
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
  )
}
