'use client'

import { HeartHandshakeIcon, ExternalLink } from 'lucide-react'
import { SiteFooter } from '@/components/site-footer'
import { Button } from '@workspace/ui/components/button.tsx'
import Link from 'next/link'

export default function SupportPage() {
  return (
    <>
      <section className="container mx-auto w-full max-w-6xl px-4 py-12 md:py-16">
        {/* Header & CTA Button */}
        <div className="mb-12 flex flex-col gap-6 border-b pb-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <HeartHandshakeIcon className="text-primary size-8" />
            <h1 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl">회원가입 및 후원</h1>
          </div>
          <Button asChild size="lg" className="w-full md:w-auto">
            <Link
              href="https://mrmweb.hsit.co.kr/v2/default.aspx?Server=/ugLwAfaWqhb/koN36wxzw==&action=join"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              정기후원하기
              <ExternalLink className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="text-muted-foreground space-y-16 text-lg leading-relaxed">
          {/* Section 1: Introduction */}
          <div className="space-y-6">
            <h2 className="text-foreground text-2xl font-semibold">도시연대 회비와 후원금은…</h2>
            <div className="space-y-4">
              <p>
                <strong className="text-foreground">회비와 후원금은 도시연대 활동의 근간입니다.</strong>
              </p>
              <p>도시연대는 회비와 후원금을 단체 운영과 의제활동에 사용하고 있습니다.</p>
              <p>
                운영비는 사무처 공간을 유지하는데 필요한 비용과 각종 세금과 공과금을 비롯한 관리비, 비품 구입,
                상근활동가의 활동비로 이루어집니다. 의제활동 비용은 계간지 『걷고싶은도시』 제작, 홈페이지 및 온라인
                공간 유지•관리 비용, 시민과 회원이 함께 하는 도시연대 정관에 정해진 목적사업을 하는데 사용됩니다.
              </p>
              <p>
                도시연대는 매월 온라인 뉴스레터 『도시연서』와 홈페이지를 통해 후원자 명단과 회비를 보고하며, 매년
                도시연대 홈페이지와 국세청을 통해 ‘연간 기부금 모금액 및 활용실적 명세서’를 공개하고 있습니다.
              </p>
            </div>
          </div>

          {/* Section 2: Vision & Impact */}
          <div className="space-y-6">
            <h2 className="text-foreground text-2xl font-semibold">
              도시연대는 회원과 함께 우리가 살아가는 도시의 변화를 추구합니다.
            </h2>
            <div className="space-y-4">
              <p>
                자동차로 둘러싸였던 서울광장을 시민의 품으로 돌아오게 하기까지 도시연대 회원들의 노력은 큰 영향을
                미쳤습니다.
              </p>
              <p>하나둘씩 복원되는 횡단보도는 그것을 복원하기 위해 노력하는 시민들의 노력이 없으면 불가능했습니다.</p>
              <p>
                인사동 한복판에 모텔이 생길 뻔 한 걸 아시나요? 그걸 막을 수 있었던 것은 그런 활동을 하는 사람들이 있었기
                때문입니다.
              </p>
              <p>이제는 제도화의 길로 접어든 주민참여, 도시연대는 20년전부터 주민참여를 요구하고 실천해 왔습니다.</p>
            </div>
          </div>

          {/* Section 3: Core Values */}
          <div className="bg-muted/50 rounded-xl p-8 md:p-10">
            <ul className="text-foreground mb-6 space-y-3 text-xl font-medium md:text-2xl">
              <li>보행자를 존중하는 도시</li>
              <li>안전하게 생활할 수 있는 도시</li>
              <li>생활문화와 역사가 살아 숨쉬는 도시</li>
              <li>사람과 자연이 공생하는 도시</li>
              <li>다양한 계층이 소통하며 어울려 사는 도시</li>
            </ul>
            <p>
              도시연대가 추구하는 도시의 모습입니다. 누군가는 행동해야 우리 도시의 모습이 변할 수 있습니다. 도시연대
              회원으로 함께 하지 않겠습니까?
            </p>
          </div>

          {/* Section 4: Benefits */}
          <div className="space-y-6">
            <h2 className="text-foreground text-2xl font-semibold">회원이 되시면…</h2>
            <ul className="marker:text-primary list-disc space-y-2 pl-6">
              <li>회원회비 납부를 통해 걷고 싶고 살고 싶은 도시를 함께 만들어 갑니다.</li>
              <li>각종 소모임과 자원활동을 통해 자아실현과 사회변화에 기여할 수 있습니다.</li>
              <li>총회에 참가하여 의결권 및 투표권을 행사할 수 있습니다.</li>
              <li>도시연대의 회의실을 함께 사용하실 수 있습니다.</li>
              <li>계간지 ‘걷고싶은도시’를 받아보실 수 있습니다.</li>
              <li>도시연대 발간자료를 받아보실 수 있습니다.</li>
              <li>도시연대의 모든 행사에 초청되고, 행사참가비가 있을 경우 할인혜택을 받으실 수 있습니다.</li>
            </ul>
            <p className="text-muted-foreground text-sm">
              * 상기내용은 사무처 및 운영위원회, 총회의 결정에 따라 달라질 수 있습니다.
            </p>
          </div>

          {/* Section 5: Membership Types */}
          <div className="space-y-6">
            <h2 className="text-foreground text-2xl font-semibold">회원종류</h2>
            <div className="border-primary border-l-4 pl-6">
              <h3 className="text-foreground mb-2 text-xl font-medium">월회원</h3>
              <p className="mb-2">월회원은 회비를 매월 납부하는 회원입니다.</p>
              <p>회비는 1만원, 2만원, 3만원, 5만원, 10만원 중 선택하실 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  )
}
