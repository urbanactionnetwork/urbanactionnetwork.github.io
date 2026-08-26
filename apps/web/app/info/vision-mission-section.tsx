import Link from 'next/link'
import { ArrowUpRight, BookOpenText, Map, Microscope, Shapes } from 'lucide-react'

const urbanLens = [
  {
    title: '이동과 머묾',
    text: '누가 자유롭게 이동하고 머물 수 있는지, 속도와 접근성의 기준이 어떤 몸과 생활을 중심으로 만들어졌는지 봅니다.',
  },
  {
    title: '소유와 이용',
    text: '공간의 소유권만이 아니라 실제 이용과 관리, 접근을 둘러싼 권한이 누구에게 어떻게 배분되어 있는지 봅니다.',
  },
  {
    title: '생산과 돌봄',
    text: '도시를 유지하는 노동과 돌봄이 어디에서 이루어지고, 누가 그 비용과 위험을 감당하는지 봅니다.',
  },
  {
    title: '기억과 변화',
    text: '개발이 무엇을 새로 만드는지만이 아니라 어떤 장소의 관계와 기억을 지우고 무엇을 남기는지 봅니다.',
  },
]

const method = [
  {
    number: '01',
    title: '현장에서 징후를 찾습니다',
    text: '지도와 통계만으로는 드러나지 않는 도시의 작동 방식을 거리와 일터, 골목과 광장에서 관찰합니다. 임시 의자, 우회하는 동선, 비어 있는 공간도 중요한 자료가 됩니다.',
    icon: Microscope,
  },
  {
    number: '02',
    title: '문제를 다시 정의합니다',
    text: '개인의 불편으로 보이는 일을 공간의 배치, 제도의 기준, 자원과 권한의 분배 문제로 바꾸어 읽습니다. 익숙한 해결책보다 먼저 정확한 질문을 찾습니다.',
    icon: Map,
  },
  {
    number: '03',
    title: '작은 변화를 시험합니다',
    text: '완성된 계획을 일방적으로 적용하기보다 현장에서 가능한 대안을 작게 시도합니다. 이용 과정에서 드러난 예상 밖의 효과와 충돌을 다음 설계에 반영합니다.',
    icon: Shapes,
  },
  {
    number: '04',
    title: '경험을 사회적 자산으로 남깁니다',
    text: '한 장소의 변화가 일회성 사업으로 끝나지 않도록 조사와 실패, 협의와 실행의 과정을 기록합니다. 이를 설계 기준과 운영 방식, 정책과 제도의 변화로 연결합니다.',
    icon: BookOpenText,
  },
]

const principles = [
  ['공공성', '소유 주체나 법적 명칭이 아니라 실제로 누가 접근하고 이용하며 머물 수 있는지를 기준으로 판단합니다.'],
  [
    '도시적 권리',
    '시설을 제공받는 권리를 넘어 도시의 공간과 자원이 어떻게 만들어지고 배분될지 결정하는 권리를 중요하게 봅니다.',
  ],
  [
    '구체적인 차이',
    '추상적인 평균보다 서로 다른 몸과 연령, 노동과 돌봄, 소득과 거주 조건이 만드는 차이에서 출발합니다.',
  ],
  [
    '축적되는 변화',
    '눈에 보이는 결과만이 아니라 과정에서 생긴 지식과 관계, 기준과 제도가 다음 변화를 가능하게 해야 한다고 봅니다.',
  ],
]

export function VisionMissionSection() {
  return (
    <article id="vision-mission" className="scroll-mt-24 overflow-hidden bg-[#f3f0e7] text-[#162019]">
      <section className="relative isolate border-b border-[#162019]/15">
        <div className="pointer-events-none absolute -right-52 top-12 -z-10 size-[42rem] rounded-[48%] border border-[#175c3a]/15 md:right-[-6rem] md:size-[56rem] md:rotate-12" />
        <div className="pointer-events-none absolute right-[-15rem] top-48 -z-10 size-[46rem] rounded-[46%] border border-[#175c3a]/15 md:right-8" />
        <div className="pointer-events-none absolute right-[13%] top-[42%] -z-10 size-3 rounded-full bg-[#175c3a] shadow-[0_0_0_8px_#dff56b]" />
        <div className="mx-auto flex min-h-[72svh] w-full max-w-7xl flex-col justify-center px-5 py-24 sm:px-8 md:py-36 lg:px-12">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-[#175c3a]">Urbanaction Network</p>
          <h1 className="max-w-5xl text-[clamp(3.2rem,8vw,7.8rem)] font-black leading-[1.02] tracking-[-0.065em]">
            <span className="block">도시는 삶을</span>
            <span className="block text-[#175c3a]">조직하는 방식입니다</span>
          </h1>
          <p className="mt-9 max-w-3xl text-lg font-medium leading-8 text-[#36463c] md:text-xl">
            어디에 집과 일터가 놓이고, 누가 빠르게 이동하며, 어디에서 쉬고 만날 수 있는가. 도시의 공간적 배치는 사람들의
            기회와 부담, 관계와 일상의 가능성을 다르게 만듭니다.
          </p>
        </div>
      </section>

      <section className="bg-[#162019] text-[#f3f0e7]">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:py-36 lg:gap-24 lg:px-12">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#dff56b]">An urban perspective</p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              도시의 문제를
              <br />
              공간과 관계의 구조에서 봅니다
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-[#d5ddd7] md:pt-10 md:text-lg">
            <p>
              도시의 문제는 경제성이나 환경성 어느 하나만으로 설명되지 않습니다. 주거와 노동, 이동과 돌봄, 소유와 이용,
              개발과 기억이 한 장소에서 서로 얽혀 작동합니다.
            </p>
            <p>
              도시연대가 말하는 도시적 관점은 이 관계들이 공간 안에서 어떻게 배치되고 충돌하는지 살피는 방식입니다.
              개인의 선택이나 불편으로 보이는 현상 뒤에서 제도와 시장, 기술과 문화가 어떤 생활을 가능하게 하고 어떤 삶을
              밀어내는지 묻습니다.
            </p>
            <p className="border-l-4 border-[#dff56b] pl-5 text-xl font-bold leading-9 text-white md:text-2xl">
              도시를 바꾼다는 것은 시설을 하나 더 놓는 일만이 아니라, 삶의 조건과 결정 권한이 배치된 방식을 바꾸는
              일입니다.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 md:py-36 lg:px-12">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#175c3a]">What we examine</p>
        <h2 className="text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
          하나의 장소를 여러 관계로 읽습니다
        </h2>
        <div className="mt-14 grid border-l border-t border-[#162019]/20 md:grid-cols-2">
          {urbanLens.map(({ title, text }, index) => (
            <article key={title} className="min-h-64 border-b border-r border-[#162019]/20 p-7 md:p-10">
              <span className="font-mono text-sm font-bold text-[#175c3a]">0{index + 1}</span>
              <h3 className="mt-10 text-2xl font-bold tracking-[-0.025em]">{title}</h3>
              <p className="mt-4 max-w-lg leading-7 text-[#526158]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#e5ebe2]">
        <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 md:py-36 lg:px-12">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#175c3a]">Our method</p>
          <h2 className="text-4xl font-black tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            탐색하고, 재정의하고, 시험하고, 남깁니다
          </h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#526158]">
            도시연대의 활동은 정해진 해답을 적용하는 사업이 아니라 현장에서 문제를 새롭게 읽고, 가능한 변화를 시험하며,
            그 경험을 다른 장소에서도 사용할 수 있는 지식과 제도로 만드는 과정입니다.
          </p>
          <div className="mt-14 grid border-l border-t border-[#162019]/20 md:grid-cols-2">
            {method.map(({ number, title, text, icon: Icon }) => (
              <article key={number} className="group min-h-80 border-b border-r border-[#162019]/20 p-7 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-[#175c3a]">{number}</span>
                  <Icon className="size-5 text-[#175c3a] transition group-hover:scale-110" aria-hidden="true" />
                </div>
                <h3 className="mt-14 max-w-md text-2xl font-bold leading-snug tracking-[-0.025em]">{title}</h3>
                <p className="mt-4 max-w-lg leading-7 text-[#526158]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#175c3a] text-white">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[0.75fr_1.25fr] md:py-36 lg:gap-24 lg:px-12">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#dff56b]">Our principles</p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.045em] sm:text-5xl lg:text-6xl">
              우리가 변화를 판단하는 기준
            </h2>
          </div>
          <div className="divide-y divide-white/20 border-y border-white/20">
            {principles.map(([title, text]) => (
              <article key={title} className="grid gap-3 py-6 md:grid-cols-[8rem_1fr] md:gap-7">
                <h3 className="font-bold text-[#dff56b]">{title}</h3>
                <p className="leading-7 text-white/80">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#162019] px-5 py-28 text-center text-white sm:px-8 md:py-44">
        <div className="mx-auto max-w-5xl">
          <p className="text-lg font-semibold text-[#d5ddd7]">도시를 바꾸기 전에</p>
          <h2 className="mt-4 text-[clamp(3rem,7vw,6.5rem)] font-black leading-[1.08] tracking-[-0.06em]">
            도시를 보는 방식을
            <br />
            <span className="text-[#dff56b]">먼저 바꿉니다</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#d5ddd7]">
            도시연대는 현장의 작은 징후에서 도시의 구조를 읽고, 구체적인 실험을 공공의 지식과 제도로 이어갑니다.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/activities"
              className="inline-flex min-h-14 items-center justify-between gap-8 rounded-sm bg-[#dff56b] px-6 py-3 font-bold text-[#162019] transition hover:-translate-y-0.5 hover:bg-[#eaff7d]"
            >
              주요 활동 보기 <ArrowUpRight className="size-5" aria-hidden="true" />
            </Link>
            <Link
              href="/info/history"
              className="inline-flex min-h-14 items-center justify-between gap-8 rounded-sm border border-white/30 px-6 py-3 font-bold transition hover:border-white hover:bg-white/10"
            >
              걸어온 길 보기 <ArrowUpRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}
