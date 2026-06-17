'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Toaster } from '@workspace/ui/components/sonner'
import { MobileNavProvider } from '@/components/mobile-nav'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
      enableColorScheme
      forcedTheme="dark"
    >
      <MobileNavProvider>
        {children}
        <Toaster position="top-right" />
      </MobileNavProvider>
    </NextThemesProvider>
  )
}
