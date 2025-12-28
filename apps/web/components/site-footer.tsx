import { IdCard, User, MapPin, Phone, Mail, Banknote, Copyright as CopyrightIcon } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-background mt-auto border-t-4 border-foreground">
      <div className="text-foreground container mx-auto w-full max-w-6xl px-4 py-10 text-base font-bold leading-6">
        <div className="grid grid-cols-1 gap-3">
          <p className="border-2 border-foreground bg-background px-4 py-2 shadow-neobrutal-sm">
            <IdCard className="mr-2 inline h-5 w-5 align-[-2px]" aria-hidden />
            사업자등록번호 101-82-11766
          </p>
          <p className="border-2 border-foreground bg-background px-4 py-2 shadow-neobrutal-sm">
            <User className="mr-2 inline h-5 w-5 align-[-2px]" aria-hidden />
            대표 안상욱
          </p>
          <p className="border-2 border-foreground bg-background px-4 py-2 shadow-neobrutal-sm">
            <MapPin className="mr-2 inline h-5 w-5 align-[-2px]" aria-hidden />
            주소 (04526) 서울 중구 세종대로16길 23 3층
          </p>
          <p className="border-2 border-foreground bg-background px-4 py-2 shadow-neobrutal-sm">
            <Phone className="mr-2 inline h-5 w-5 align-[-2px]" aria-hidden />
            전화 02-735-6046
          </p>
          <p className="border-2 border-foreground bg-background px-4 py-2 shadow-neobrutal-sm">
            <Mail className="mr-2 inline h-5 w-5 align-[-2px]" aria-hidden />
            이메일{' '}
            <a className="underline underline-offset-4 hover:bg-accent px-1" href="mailto:dosi1994@daum.net">
              dosi1994@daum.net
            </a>
          </p>
          <p className="border-2 border-foreground bg-background px-4 py-2 shadow-neobrutal-sm">
            <Banknote className="mr-2 inline h-5 w-5 align-[-2px]" aria-hidden />
            후원계좌 신한은행 140-010-150820 걷고싶은도시만들기시민연대
          </p>
          <p className="border-2 border-foreground bg-background px-4 py-2 text-sm shadow-neobrutal-sm">
            <CopyrightIcon className="mr-1 inline h-4 w-4 align-[-2px]" aria-hidden />
            2013 걷고싶은도시만들기시민연대 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
