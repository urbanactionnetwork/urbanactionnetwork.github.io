import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowUpRight, Check, ChevronDown, MapPin, Pause, Users } from 'lucide-react'

import { SiteFooter } from '@/components/site-footer'

const JOIN_URL = 'https://mrmweb.hsit.co.kr/v2/Member/MemberJoin.aspx?action=join&server=/ugLwAfaWqhb/koN36wxzw=='

const work = [
  [
    '01',
    '보이지 않던 불평등을 발견합니다',
    '공공데이터와 지도를 분석하고 직접 거리를 걷습니다. 경사와 단차, 보행 동선과 그늘, 차량 통행과 휴게시설을 조사합니다.',
    MapPin,
  ],
  [
    '02',
    '공간을 살아가는 사람들의 이야기를 듣습니다',
    '현장에서 쉽게 만나는 사람뿐 아니라 이동이 어려워 거리에서 보이지 않는 사람의 경험까지 찾습니다.',
    Users,
  ],
  [
    '03',
    '시민과 함께 대안을 만듭니다',
    '전문가가 답을 정하는 대신 주민과 함께 걷고 이야기하며 설계합니다. 필요하다면 아무것도 만들지 않는 선택도 합니다.',
    Pause,
  ],
  [
    '04',
    '공간의 변화를 제도와 권리로 연결합니다',
    '현장에서 찾은 문제를 기록하고 설계 기준과 운영 방식, 조례와 정책의 변화로 연결합니다.',
    ArrowUpRight,
  ],
] as const

const benefits = [
  '총회에 참여해 도시연대의 주요 방향을 결정하고 의결권을 행사합니다.',
  '교육·답사·토론과 공동 활동에 참여합니다.',
  '회원 모임에서 다양한 사람과 도시 문제를 함께 공부합니다.',
  '잡지 『걷고싶은도시』와 도시연대 발간자료를 받아봅니다.',
  '교육과 행사에 할인된 비용으로 참여합니다.',
  '도시연대 공간을 정해진 절차에 따라 무료로 이용합니다.',
  '활동 소식과 참여 기회를 정기적으로 안내받습니다.',
]

const faqs = [
  [
    '회원이 되면 반드시 활동에 참여해야 하나요?',
    '아닙니다. 회비로 활동을 지지하는 것도 중요한 참여입니다. 각자의 관심과 형편에 따라 참여할 수 있습니다.',
  ],
  [
    '전문지식이 없어도 회원이 될 수 있나요?',
    '물론입니다. 도시를 살아가는 경험 자체가 도시를 이해하고 바꾸는 중요한 지식입니다. 도시 문제에 관심 있는 누구나 함께할 수 있습니다.',
  ],
  [
    '회비는 얼마이며 어디에 사용하나요?',
    '월 1만 원, 2만 원, 3만 원, 5만 원, 10만 원 중 선택할 수 있습니다. 사무공간, 활동가 임금, 조사와 연구, 시민 프로그램, 계간지 제작과 온라인 공간 운영에 사용합니다.',
  ],
  [
    '기부금영수증을 받을 수 있나요?',
    '네. 도시연대는 공익법인으로 지정되어 있어 납부한 회비와 후원금에 대해 기부금영수증을 발급합니다.',
  ],
]

function JoinButton({ light = false, label = '도시연대 회원 되기' }: { light?: boolean; label?: string }) {
  return (
    <Link
      href={JOIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-14 items-center justify-between gap-8 rounded-sm px-6 py-3 text-base font-bold transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 ${light ? 'bg-[#dff56b] text-[#162019] hover:bg-[#eaff7d]' : 'bg-[#175c3a] text-white hover:bg-[#10492d]'}`}
    >
      {label}
      <ArrowUpRight className="size-5" aria-hidden="true" />
    </Link>
  )
}

export default function SupportPage() {
  return (
    <>
      <div className="overflow-hidden bg-[#f3f0e7] text-[#162019] selection:bg-[#dff56b]">
        <section className="relative isolate min-h-[calc(100svh-4rem)] border-b border-[#162019]/15">
          <div className="pointer-events-none absolute -right-40 top-8 -z-10 size-[42rem] rounded-[45%] border border-[#175c3a]/20 md:right-[-8rem] md:size-[55rem] md:rotate-12" />
          <div className="pointer-events-none absolute right-[-17rem] top-36 -z-10 size-[48rem] rounded-[48%] border border-[#175c3a]/15 md:right-[-2rem]" />
          <div className="pointer-events-none absolute right-[10%] top-[30%] -z-10 size-4 rounded-full bg-[#175c3a] shadow-[0_0_0_9px_#dff56b]" />
          <div className="mx-auto flex min-h-[calc(100svh-4rem)] w-full max-w-7xl flex-col justify-between px-5 py-10 sm:px-8 md:py-16 lg:px-12">
            <div className="flex justify-end">
              <span className="mt-2 text-right text-[11px] font-bold uppercase tracking-[0.18em] text-[#175c3a]">
                Member campaign
              </span>
            </div>
            <div className="max-w-5xl py-16 md:py-24">
              <p className="mb-6 text-sm font-bold tracking-[0.14em] text-[#175c3a]">도시연대 회원 캠페인</p>
              <h1 className="text-[clamp(3rem,8vw,7.5rem)] font-black leading-[1.03] tracking-[-0.065em]">
                <span className="block">도시를 바꾸는</span>
                <span className="block text-[#175c3a]">시민의 힘을</span>
                <span className="block">이어주세요</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-[#36463c] md:text-xl">
                누구나 자기 속도로 걷고, 멈추고, 머물 수 있는 도시. 도시에서 가장 큰 제약을 받는 사람의 경험에서 변화는
                시작됩니다.
              </p>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <JoinButton />
                <span className="text-sm font-semibold text-[#526158]">월 1만 원부터 함께할 수 있습니다.</span>
              </div>
            </div>
            <p className="ml-auto max-w-sm border-t border-[#162019] pt-4 text-sm leading-6 text-[#36463c]">
              같은 길도 누군가에게는 더 가파르고, 같은 더위도 누군가의 일상을 더 쉽게 끊어놓습니다.
            </p>
          </div>
        </section>

        <section className="bg-[#162019] text-[#f3f0e7]">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:py-36 lg:gap-24 lg:px-12">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#dff56b]">
                Public space ≠ open door
              </p>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                열려 있다는 것만으로
                <br />
                공공공간은 아닙니다
              </h2>
            </div>
            <div className="space-y-8 text-base leading-8 text-[#d5ddd7] md:pt-12 md:text-lg">
              <p>
                공개공지에 그늘과 앉을 곳이 없다면 한여름에는 머물기 어렵습니다. 무더위쉼터가 있어도 가파른 길은
                고령자에게 도착부터 장벽입니다. 높은 턱 때문에 들어갈 수 없는 아이가 있다면 모두의 놀이터라고 할 수
                없습니다.
              </p>
              <ul className="divide-y divide-white/20 border-y border-white/20 font-bold text-[#f3f0e7]">
                <li className="py-4">실제로 누가 이 공간을 이용할 수 있는가.</li>
                <li className="py-4">누가 들어오지 못하고, 보이지 않는가.</li>
                <li className="py-4">누구의 경험이 결정 과정에서 빠져 있는가.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:py-36 lg:gap-24 lg:px-12">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#175c3a]">Right to the city</p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              도시를 이용할 권리에서
              <br />
              <span className="text-[#175c3a]">도시를 바꿀 권리</span>까지
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-[#36463c] md:pt-12 md:text-lg">
            <p>
              도시는 건물과 도로의 집합이 아닙니다. 사람들이 살고, 일하고, 걷고, 쉬고, 돌보며 관계를 맺는 삶의
              공간입니다.
            </p>
            <p>
              하지만 도시의 결정에서 보행자와 주민, 세입자, 어린이, 장애인과 고령자의 경험은 쉽게 뒤로 밀립니다. 도시에
              대한 권리는 시설을 이용하는 데 그치지 않습니다. 공간이 누구를 위해, 어떻게 만들어지고 운영될지 결정하는
              과정에 참여할 권리입니다.
            </p>
            <p className="border-l-4 border-[#175c3a] pl-5 font-bold text-[#162019]">
              시민은 도시를 이용하는 사람을 넘어 도시를 바꾸는 주체여야 합니다.
            </p>
          </div>
        </section>

        <section className="bg-[#e5ebe2]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36 lg:px-12">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#175c3a]">How we work</p>
            <h2 className="text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              도시연대는 이렇게 일합니다
            </h2>
            <div className="mt-14 grid border-l border-t border-[#162019]/20 md:grid-cols-2">
              {work.map(([number, title, text, Icon]) => (
                <article key={number} className="group min-h-72 border-b border-r border-[#162019]/20 p-7 md:p-10">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#175c3a]">{number}</span>
                    <Icon className="size-5 text-[#175c3a]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-12 max-w-md text-2xl font-bold leading-snug tracking-[-0.025em]">{title}</h3>
                  <p className="mt-4 max-w-lg leading-7 text-[#526158]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#175c3a]">What changed</p>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                시민이 함께했을 때<br />
                도시는 달라집니다
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#526158]">
              작은 공간의 변화가 다른 지역에서도 이어지고 시민의 권리로 자리 잡도록 만드는 것이 도시연대의 일입니다.
            </p>
          </div>
          <div className="mt-20 space-y-24">
            <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <Visual label="사람의 길" />
              <Case tag="보행권 · 서울광장" title="자동차의 도시에서 사람의 도시로">
                보행권이라는 말조차 낯설었던 1990년대, 생활도로와 통학로를 조사하고 보행권 조례 제정운동을 벌였습니다.
                서울시청 앞이 시민의 광장이 된 뒤에도 누가 어떤 조건에서 그 공간을 이용할 수 있는지 계속 물었습니다.
              </Case>
            </article>
            <article className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <Visual label="함께 노는 곳" lime className="md:order-2" />
              <Case tag="통합놀이터" title="모든 아이가 함께 놀 수 있도록">
                장애아동과 비장애아동이 함께 놀 수 있는 통합놀이터를 시민과 만들었습니다. 아이와 부모, 주민, 활동가,
                전문가와 행정이 함께한 경험을 매뉴얼과 가이드라인, 제도 개선으로 이어갑니다.
              </Case>
            </article>
          </div>
        </section>

        <section className="bg-[#162019] text-[#f3f0e7]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 py-24 sm:px-8 md:grid-cols-2 md:py-36 lg:gap-24 lg:px-12">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#dff56b]">Why members matter</p>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                사업비가 정한 문제만
                <br />
                다루지 않기 위해
                <br />
                <span className="text-[#dff56b]">회원이 필요합니다</span>
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#d5ddd7] md:pt-12 md:text-lg">
              <p>
                도시의 문제는 지원사업이 시작될 때 생기고 사업이 끝날 때 사라지지 않습니다. 경험을 조사하고 관계를
                만들며, 작은 변화를 정책으로 이어가려면 긴 시간이 필요합니다.
              </p>
              <p>
                현재 도시연대에는 <strong className="text-[#dff56b]">300명 안팎의 회원</strong>이 함께하지만, 이
                회비만으로 사무공간을 유지하고 활동가에게 안정적인 임금을 지급하며 독립적인 활동을 이어가기는
                어렵습니다.
              </p>
              <blockquote className="mt-10 border-t-4 border-[#dff56b] pt-6 text-xl font-bold leading-9 text-white md:text-2xl">
                회원의 회비는 관리비가 아닙니다. 활동가가 현장을 걷고 사람을 만날 시간, 시민이 공부하고 토론할 공간,
                사업의 경계를 넘어 독립적으로 행동할 힘을 만듭니다.
              </blockquote>
            </div>
          </div>
        </section>

        <section className="bg-[#e5ebe2]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36 lg:px-12">
            <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-end">
              <div>
                <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#175c3a]">Membership</p>
                <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                  후원자이자 도시를 함께
                  <br />
                  바꾸는 동료가 됩니다
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#526158]">
                모든 활동에 적극적으로 참여해야 하는 것은 아닙니다. 회비로 기반을 만들거나 교육과 답사에 참여하고,
                자신의 경험과 전문성을 보탤 수 있습니다.
              </p>
            </div>
            <ul className="mt-14 grid border-l border-t border-[#162019]/20 md:grid-cols-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-4 border-b border-r border-[#162019]/20 p-5 leading-7 md:p-6">
                  <Check className="mt-1 size-5 shrink-0 text-[#175c3a]" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-[#175c3a] px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-5xl bg-[#162019] p-7 text-white sm:p-10 md:p-16">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#dff56b]">Join us</p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              월 1만 원부터
              <br />
              함께할 수 있습니다
            </h2>
            <div className="mt-10 flex flex-wrap gap-2">
              {['1만 원', '2만 원', '3만 원', '5만 원', '10만 원'].map((amount) => (
                <span key={amount} className="border border-white/30 px-4 py-2 text-sm font-semibold">
                  {amount}
                </span>
              ))}
            </div>
            <p className="mt-8 max-w-3xl leading-8 text-[#d5ddd7]">
              회비와 후원금은 사무공간 운영, 활동가 임금, 조사와 연구, 시민 프로그램, 계간지 제작과 온라인 공간 운영에
              사용됩니다. 내역을 정기적으로 보고하고, 매년 기부금 모금액과 활용실적을 홈페이지와 국세청을 통해
              공개합니다.
            </p>
            <div className="mt-9">
              <JoinButton light label="월 1만 원부터 회원 되기" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-24 sm:px-8 md:py-36">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#175c3a]">FAQ</p>
          <h2 className="text-4xl font-black tracking-[-0.045em] sm:text-5xl">자주 묻는 질문</h2>
          <div className="mt-12 border-t border-[#162019]/20">
            {faqs.map(([question, answer]) => (
              <details key={question} className="group border-b border-[#162019]/20">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-bold [&::-webkit-details-marker]:hidden">
                  {question}
                  <ChevronDown className="size-5 shrink-0 transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="max-w-3xl pb-7 leading-8 text-[#526158]">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-[#162019] px-5 py-28 text-center text-white sm:px-8 md:py-44">
          <div className="mx-auto max-w-5xl">
            <p className="text-lg font-semibold text-[#d5ddd7]">공통의 공간에는</p>
            <h2 className="mt-4 text-[clamp(3rem,7vw,6.5rem)] font-black leading-[1.08] tracking-[-0.06em]">
              그것을 지키는
              <br />
              <span className="text-[#dff56b]">공통의 힘</span>이 필요합니다
            </h2>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#d5ddd7]">
              도시연대가 이 일을 오래, 독립적으로, 더 많은 시민과 함께할 수 있도록 회원으로 힘을 보태주세요.
            </p>
            <div className="mt-10">
              <JoinButton light />
            </div>
          </div>
        </section>
      </div>
      <SiteFooter />
    </>
  )
}

function Visual({ label, lime = false, className = '' }: { label: string; lime?: boolean; className?: string }) {
  return (
    <div
      className={`relative flex min-h-80 items-center justify-center overflow-hidden p-8 md:min-h-[28rem] ${lime ? 'bg-[#dff56b] text-[#162019]' : 'bg-[#175c3a] text-[#dff56b]'} ${className}`}
    >
      <div
        className={`absolute h-44 w-[125%] rotate-12 rounded-[50%] border ${lime ? 'border-[#175c3a]/60' : 'border-[#dff56b]/70'}`}
      />
      <div
        className={`absolute h-[125%] w-52 -rotate-12 rounded-[50%] border ${lime ? 'border-[#175c3a]/60' : 'border-[#dff56b]/60'}`}
      />
      <span className="relative text-3xl font-black">{label}</span>
    </div>
  )
}

function Case({ tag, title, children }: { tag: string; title: string; children: ReactNode }) {
  return (
    <div>
      <p className="text-xs font-bold tracking-[0.15em] text-[#175c3a]">{tag}</p>
      <h3 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] md:text-4xl">{title}</h3>
      <p className="mt-6 text-lg leading-8 text-[#526158]">{children}</p>
    </div>
  )
}
