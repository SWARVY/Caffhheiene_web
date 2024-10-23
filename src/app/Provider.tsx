'use client'

import FramerTransitionProvider from '@/utils/FramerTransitionProvider'
import NextThemeProvider from '@/utils/NextThemeProvider'
import { PropsWithChildren } from 'react'

export default function Provider({ children }: PropsWithChildren) {
  return (
    <FramerTransitionProvider>
      <NextThemeProvider>{children}</NextThemeProvider>
    </FramerTransitionProvider>
  )
}
