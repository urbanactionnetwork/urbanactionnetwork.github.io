import Script from 'next/script'
import ActivitiesSection from '@/app/home/activities-section'
import { InstagramSection } from '@/app/home/instagram-section'
import { SiteFooter } from '@/components/site-footer'
import { CtaSection } from '@/app/home/cta-section.tsx'
import { SupportSection } from '@/app/home/support-section'

export default function Page() {
  return (
    <div className="bg-background text-foreground min-h-full antialiased subpixel-antialiased">
      {/* Instagram embed 스크립트를 메인 페이지에서 로드 */}
      <Script src="https://www.instagram.com/embed.js" strategy="afterInteractive" />

      {/* CTA Section */}
      <CtaSection />

      {/* Instagram Section */}
      <InstagramSection />

      {/* Activities Section */}
      <ActivitiesSection />

      {/* Support (정기후원) Section */}
      <SupportSection />

      <SiteFooter />
    </div>
  )
}
