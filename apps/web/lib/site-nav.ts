export type NavItem = {
  label: string
  href: string
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: '소개', href: '/info' },
  { label: '주요활동', href: '/activities' },
  { label: '공지사항', href: '/news' },
  { label: '회원가입 및 후원', href: '/support' },
]

export const INFO_SUB_NAV_ITEMS: NavItem[] = [
  { label: '비전과 미션', href: '/info/vision-mission' },
  { label: '걸어온 길', href: '/info/history' },
  { label: '함께하는 사람들', href: '/info/staff' },
  { label: '오시는 길', href: '/info/location' },
]
