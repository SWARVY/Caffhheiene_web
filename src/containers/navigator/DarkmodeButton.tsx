'use client'

import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function DarkmodeButton() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      type="button"
      className="size-6 text-white transition-colors hover:text-gray-200"
      onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}>
      {currentTheme === 'light' ? (
        <SunIcon className="size-full" />
      ) : (
        <MoonIcon className="size-full" />
      )}
    </button>
  )
}
