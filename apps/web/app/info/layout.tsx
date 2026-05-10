import { InfoLayoutClient } from '@/app/info/info-layout-client'

export default function InfoLayout({ children }: { children: React.ReactNode }) {
  return <InfoLayoutClient>{children}</InfoLayoutClient>
}
