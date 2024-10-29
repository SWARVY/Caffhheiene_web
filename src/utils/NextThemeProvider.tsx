'use client'

import { ThemeProvider } from 'next-themes'
import { PropsWithChildren, useEffect, useState } from 'react'

export default function NextThemeProvider({ children }: PropsWithChildren) {
  const [isMount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  if (!isMount) {
    return null
  }

  return <ThemeProvider attribute="data-mode">{children}</ThemeProvider>
}
