'use client'

import { MapPin } from 'lucide-react'

type OnlineLink = {
  href: string
  suffix?: string
}

type OnlineLinkItem = {
  label: string
  links: OnlineLink[]
}

const ONLINE_LINK_GROUPS: OnlineLinkItem[][] = [
  [
    {
      label: '페이스북',
      links: [{ href: 'https://www.facebook.com/urbanactionnetwork' }],
    },
    {
      label: '인스타그램',
      links: [{ href: 'https://www.instagram.com/urbanactionnetwork' }],
    },
  ],
  [
    {
      label: '기관지 [걷고싶은도시] 개별 글 보기',
      links: [{ href: 'https://blog.naver.com/dosi1994', suffix: '(2021 ~ 현재)' }],
    },
    {
      label: '기관지 [걷고싶은도시] 블로그',
      links: [
        { href: 'https://blog.naver.com/urbanaction1', suffix: '(2011 ~ 2014)' },
        { href: 'https://blog.naver.com/walkablecity', suffix: '(2015 ~ 2018)' },
      ],
    },
    {
      label: '기관지 [걷고싶은도시] PDF 통권 보기',
      links: [{ href: 'https://han.gl/iQJyng' }],
    },
  ],
  [
    {
      label: '한평공원 지도보기',
      links: [{ href: 'https://url.kr/1h3c54' }],
    },
    {
      label: '한평공원 카페',
      links: [{ href: 'https://cafe.naver.com/intopark' }],
    },
  ],
  [
    {
      label: '임정동 함께 기억하기',
      links: [{ href: 'http://im-cheongyecheon.com' }],
    },
  ],
  [
    {
      label: '<1인 노동공간, 혼자 일하는 사람들> 홈페이지',
      links: [{ href: 'http://fbws.or.kr/index.html' }],
    },
  ],
]

function OnlineLinkList({ items }: { items: OnlineLinkItem[] }) {
  return (
    <ul className="text-muted-foreground space-y-3 leading-7">
      {items.map((item) => (
        <li key={item.label} className="flex items-start gap-3">
          <span className="shrink-0">{item.label}:</span>
          <div className="flex min-w-0 flex-col gap-1">
            {item.links.map((link) => (
              <span key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline underline-offset-2 hover:text-blue-300"
                >
                  {link.href}
                </a>
                {link.suffix ? ` ${link.suffix}` : null}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}

export function LocationSection() {
  return (
    <section id="location" className="scroll-mt-24 space-y-4 py-10">
      <h2 className="text-2xl font-semibold tracking-tight">오시는 길</h2>
      <div className="space-y-4">
        <p className="text-amber-400 text-lg font-medium">도시연대 BCD</p>
        <p className="text-muted-foreground flex items-start gap-2 leading-7">
          <span>
            <MapPin className="mr-2 inline h-4 w-4 align-[-2px]" aria-hidden />
            (04526) 서울 중구 세종대로16길 23 3층
          </span>
        </p>
        <img
          src="/location.jpg"
          alt="도시연대 위치 안내 이미지"
          className="bg-muted/40 mx-auto block w-full rounded-md"
        />
      </div>

      <div className="space-y-6 pt-4">
        <h3 className="text-amber-400 text-lg font-medium">온라인</h3>
        {ONLINE_LINK_GROUPS.map((items, index) => (
          <div key={`group-${index}`}>
            <OnlineLinkList items={items} />
          </div>
        ))}
      </div>
    </section>
  )
}
