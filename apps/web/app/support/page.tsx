import Link from 'next/link'
import type { ReactNode } from 'react'
import { ArrowUpRight, Check, ChevronDown, MapPin, Pause, Users } from 'lucide-react'

import { SiteFooter } from '@/components/site-footer'

const JOIN_URL = 'https://mrmweb.hsit.co.kr/v2/Member/MemberJoin.aspx?action=join&server=/ugLwAfaWqhb/koN36wxzw=='

const work = [
  [
    '01',
    '자신의 도시 경험에서 질문을 시작합니다',
    '불편과 배제의 경험을 개인적인 문제로 남겨두지 않습니다. 회원과 시민이 직접 거리를 걷고 관찰하고 기록하며, 누가 이 공간을 이용하고 누가 배제되는지 질문합니다.',
    MapPin,
  ],
  [
    '02',
    '서로 다른 경험과 이해관계를 만납니다',
    '같은 장소도 사람마다 다르게 경험합니다. 자신의 요구만 주장하는 데서 멈추지 않고, 다른 몸과 삶의 조건에서 도시가 어떻게 보이는지 함께 살핍니다.',
    Users,
  ],
  [
    '03',
    '함께 조사하고 판단합니다',
    '전문가의 설명이나 다수의 선호를 그대로 답으로 삼지 않습니다. 경험과 데이터, 제도와 이해관계를 함께 검토하며 무엇이 공적인 문제인지 판단합니다.',
    Pause,
  ],
  [
    '04',
    '결과를 확인하고 다시 묻습니다',
    '제안으로 끝내지 않습니다. 무엇이 바뀌고 바뀌지 않았는지 기록하며, 실패와 한계도 공유하고 다음 행동을 함께 논의합니다.',
    ArrowUpRight,
  ],
] as const

const benefits = [
  '도시연대의 활동과 자료를 읽고 회비로 시민 활동의 기반을 만듭니다.',
  '자신이 도시에서 겪은 경험과 발견한 문제를 제안합니다.',
  '답사와 교육에서 다른 사람의 도시 경험을 만납니다.',
  '관심 있는 의제를 함께 조사하고 토론합니다.',
  '회원모임과 총회에서 도시연대의 방향을 함께 결정합니다.',
  '자신의 지식과 기술, 관계를 필요한 활동에 보탭니다.',
  '활동의 결과와 재정, 결정 과정을 확인하고 의견을 냅니다.',
]

const commitments = [
  [
    '제안할 수 있는 통로',
    '회원의 도시 경험과 문제 제안이 일회성 의견으로 사라지지 않도록 기록하고 검토하는 통로를 만들어가겠습니다.',
  ],
  [
    '결정 범위의 공개',
    '회원이 함께 결정할 수 있는 일과 활동가·운영기구가 책임져야 하는 일을 가능한 한 분명하게 알리겠습니다.',
  ],
  [
    '반영 여부의 설명',
    '모든 의견을 받아들일 수는 없지만, 중요한 제안이 어떻게 검토되었고 왜 반영되거나 반영되지 않았는지 설명하겠습니다.',
  ],
  [
    '결과의 공유와 재논의',
    '활동의 성과만이 아니라 실패와 한계도 공유하고, 결과를 바탕으로 다음 질문과 행동을 다시 논의하겠습니다.',
  ],
]

const faqs = [
  [
    '회원이 되면 반드시 활동에 참여해야 하나요?',
    '아닙니다. 회비로 시민 활동의 기반을 만들고 소식과 자료를 읽는 것도 중요한 참여입니다. 경험 제안, 답사, 조사, 토론, 총회 등에는 각자의 관심과 형편에 따라 참여할 수 있습니다.',
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
  [
    '회원의 의견은 어떻게 반영되나요?',
    '회원은 총회에서 도시연대의 주요 방향을 결정하고 의결권을 행사할 수 있습니다. 도시연대는 일상적인 문제 제안과 활동 논의도 실제 결정으로 이어질 수 있도록 제안·검토·설명·결과 공유의 구조를 회원과 함께 만들어가고 있습니다.',
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
                도시를 바꾸는 힘은 특별한 전문가나 뛰어난 지도자에게만 있지 않습니다. 자신의 경험을 말하고, 다른 사람의
                삶을 이해하며, 공동의 문제를 함께 판단하는 시민에게 있습니다.
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

        <section className="bg-[#175c3a] text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:py-36 lg:gap-24 lg:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#dff56b]">Not on your behalf</p>
            <div>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                도시연대는 시민을 대신해
                <br />
                도시를 바꾸는 조직이 아닙니다
              </h2>
              <div className="mt-10 max-w-3xl space-y-6 text-lg leading-8 text-white/80">
                <p>
                  시민의 의견을 대신 전달하거나 전문가가 정한 답을 설명하는 것만으로는 도시의 민주주의가 만들어지지
                  않습니다.
                </p>
                <p>
                  도시연대는 각자의 도시 경험을 공적인 문제로 말하고, 서로 다른 의견과 이해관계를 검토하며, 공동의
                  판단을 만들어가는 장소가 되고자 합니다. 회원이 된다는 것은 이 조직을 후원하는 동시에 그런 시민의
                  가능성을 함께 만드는 일입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#e5ebe2]">
          <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36 lg:px-12">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#175c3a]">How we become citizens</p>
            <h2 className="text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              우리는 이렇게 시민이 되어갑니다
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
                시민의 질문을
                <br />
                오래 이어가기 위해
                <br />
                <span className="text-[#dff56b]">회원이 필요합니다</span>
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#d5ddd7] md:pt-12 md:text-lg">
              <p>
                시민의 의견은 저절로 공동의 결정이 되지 않습니다. 경험을 기록하고, 서로 다른 이해관계를 만나게 하고,
                필요한 정보를 함께 검토하며, 결정의 결과를 오래 추적하는 조직이 필요합니다.
              </p>
              <p>
                사업비는 정해진 의제와 기간 안에서 움직입니다. 하지만 시민이 배우고 관계를 만들며 공동의 판단을 형성하는
                데에는 사업기간보다 긴 시간이 필요합니다. 회비는 도시연대가 지원기관의 일정이 아니라 시민의 질문을 따라
                움직이게 합니다.
              </p>
              <p>
                현재 도시연대에는 <strong className="text-[#dff56b]">300명 안팎의 회원</strong>이 함께합니다. 더
                안정적인 회원 기반은 사무공간과 활동가의 임금만이 아니라, 시민의 경험을 서둘러 결론내리지 않고 오래 듣고
                조사하고 토론할 시간을 만듭니다.
              </p>
              <blockquote className="mt-10 border-t-4 border-[#dff56b] pt-6 text-xl font-bold leading-9 text-white md:text-2xl">
                회원은 도시연대의 활동을 소비하는 사람이 아닙니다. 도시의 결정권이 행정·시장·전문가에게만 독점되지
                않도록 시민의 조직과 시간을 함께 유지하는 사람입니다.
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
                  각자의 방식으로
                  <br />
                  참여할 수 있습니다
                </h2>
              </div>
              <p className="max-w-xl text-lg leading-8 text-[#526158]">
                민주적 시민이 된다는 것은 모든 회의에 참석하거나 많은 시간을 내야 한다는 뜻이 아닙니다. 회비로 기반을
                만들고 소식을 읽는 일부터 의제를 제안하고 결정에 참여하는 일까지, 각자의 형편에 맞는 경로가 있습니다.
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

        <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-36 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#175c3a]">
                Our democratic promise
              </p>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                회원의 목소리가
                <br />
                결정으로 이어지는 구조를
                <br />
                <span className="text-[#175c3a]">함께 만들겠습니다</span>
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#526158]">
              도시연대도 아직 완성된 민주적 조직은 아닙니다. 외부에 시민참여를 요구하는 만큼, 내부에서도 회원의 경험과
              판단이 실제 운영과 활동에 영향을 미칠 수 있는 조건을 꾸준히 만들겠습니다.
            </p>
          </div>
          <div className="mt-14 grid border-l border-t border-[#162019]/20 md:grid-cols-2">
            {commitments.map(([title, text], index) => (
              <article key={title} className="border-b border-r border-[#162019]/20 p-7 md:p-10">
                <span className="font-mono text-sm font-bold text-[#175c3a]">0{index + 1}</span>
                <h3 className="mt-8 text-2xl font-bold tracking-[-0.025em]">{title}</h3>
                <p className="mt-4 leading-7 text-[#526158]">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#175c3a] px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <div className="mx-auto max-w-5xl bg-[#162019] p-7 text-white sm:p-10 md:p-16">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#dff56b]">Join us</p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              월 1만 원부터
              <br />
              시민의 조직을 함께 만듭니다
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
              공개합니다. 회비는 시민의 경험을 듣고 조사하며, 서로 다른 판단이 만날 수 있는 독립적인 시간과 공간을
              만듭니다.
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
              도시를 누군가에게 맡겨두지 않고, 자신의 경험을 말하고 다른 사람과 함께 판단하는 시민의 조직을 함께
              만들어주세요.
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
