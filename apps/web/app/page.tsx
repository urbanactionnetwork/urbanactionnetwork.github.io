import Link from 'next/link'
import { Button } from '@workspace/ui/components/button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { HeartHandshakeIcon } from 'lucide-react'
import { NewsSection } from '@/components/home/news-section'

export default function Page() {

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />

      {/* CTA Section */}
      <section className="relative isolate flex items-center">
        <div className="container mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 py-16 text-center md:py-24 lg:py-28">
          <h1 className="text-balance text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            걷고 싶은 도시가 살고 싶은 도시다
          </h1>
          <div className="flex items-center justify-center gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link href="/support">
                <HeartHandshakeIcon className="size-5" /> 정기후원하기
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection />

      <SiteFooter />
    </div>
  )
}
