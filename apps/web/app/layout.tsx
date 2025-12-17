import React from 'react'

import { Geist, Geist_Mono, Gamja_Flower, Nanum_Gothic } from 'next/font/google'
import '@workspace/ui/globals.css'
import { Providers } from '@/components/providers'
import { SiteHeader } from '@/components/site-header'

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

const fontGamja = Gamja_Flower({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-gamja',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} ${fontGamja.variable} bg-background text-foreground flex min-h-screen flex-col font-sans antialiased`}
      >
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  )
}
