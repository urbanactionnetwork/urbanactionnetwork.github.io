'use client'

import React from 'react'

export function VisionMissionSection() {
  return (
    <section id="vision-mission" className="scroll-mt-24 space-y-6 py-10">
      <h2
        className="border-foreground shadow-neobrutal inline-block border-4 px-6 py-4 text-4xl font-black tracking-tight"
        style={{ backgroundColor: 'oklch(0.7 0.2 250)' }}
      >
        비전과 미션
      </h2>
      <div className="prose text-foreground max-w-none space-y-4 font-bold leading-7">
        <p
          className="border-foreground shadow-neobrutal-sm border-4 px-6 py-4"
          style={{ backgroundColor: 'oklch(0.9 0.2 80)' }}
        >
          도시연대를 소개합니다.
        </p>
        <p
          className="border-foreground shadow-neobrutal-sm border-4 px-6 py-4"
          style={{ backgroundColor: 'oklch(0.75 0.2 200)' }}
        >
          걷고싶은도시만들기시민연대 (이하 도시연대) 는 도시에 다양한 사람들이 함께 오래 살아갈 수 있는 인간환경을
          회복함으로써 삶의 질을 개선하고 도시문화와 역사를 보존, 창조해 나가는 것을 활동목표로 삼고 있습니다.
        </p>
        <p
          className="border-foreground shadow-neobrutal-sm border-4 px-6 py-4"
          style={{ backgroundColor: 'oklch(0.85 0.2 120)' }}
        >
          도시는 그 곳에서 생활하는 시민들이 삶의 문화가 살아 숨쉬는 인간환경을 만들고 가꾸어 나갈 때 궁극적으로 인간의
          얼굴을 가진 걷고 싶은 도시를 실현할 수 있습니다. 도시를 지배하는 비인간적, 반환경적 경제논리를 극복하고,
          시민들이 자신의 몸 가까운 곳부터 살피고 돌보는 생활 속의 실천을 토대로 작지만 강력한 시민운동, 지역사회에
          밀착한 현장운동을 추구하고 있습니다.
        </p>
        <div className="border-foreground shadow-neobrutal my-6 border-4 p-4">
          <img src="/dosi-info.jpg" alt="도시연대 이념" className="mx-auto block w-full md:w-1/2" />
        </div>
        <p
          className="border-foreground shadow-neobrutal-sm border-4 px-6 py-4"
          style={{ backgroundColor: 'oklch(0.75 0.25 340)' }}
        >
          도시연대는 보행권 확보 운동, 마을만들기 운동, 생활문화 운동을 주된 축으로 활동하고 있습니다. 이 세가지 축은
          도시연대가 우리 도시를 바라보는 시각을 반영합니다. 인간이 중심이 되는 도시를 만들기 위한 보행권 확보 운동,
          사람들의 삶을 소중히 생각하는 생활문화 운동, 주민이 주체가 되어 '내가 살고 있는 마을을 내가 살기 좋은 마을로
          만드는' 마을만들기 운동이 그 내용입니다.
        </p>
        <p
          className="border-foreground shadow-neobrutal-sm border-4 px-6 py-4"
          style={{ backgroundColor: 'oklch(0.65 0.25 300)' }}
        >
          이 세가지는 도시연대 모든 활동의 근간을 이루며, 서로 밀접한 관계를 갖고 있습니다. 진정한 보행권 확보와
          생활문화 존중을 위해서는 그곳에 살고 있는 주민들의 참여가 기본이 되어야 한다는 생각이며, 이에 이 두가지 운동에
          주민참여를 기본 전제로 활동하고 있습니다. 마을만들기 운동에서도 그것이 담을 수 있는 다양한 가치 속에 보행환경
          개선 운동이 담고 있는 사람 중심의 가치, 생활문화운동이 담고 있는 사람들의 삶에 대한 존중이 배어 있습니다.
        </p>
      </div>
    </section>
  )
}
