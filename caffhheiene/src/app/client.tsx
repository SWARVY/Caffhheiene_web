'use client'

import darkModeState from '@/atom/darkMode'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, type ReactNode } from 'react'
import { useSetRecoilState } from 'recoil'

interface TransitionDivProps {
  children: ReactNode
}

export default function Client({ children }: TransitionDivProps) {
  const pathName = usePathname()
  const setDarkMode = useSetRecoilState(darkModeState)

  useEffect(() => {
    setDarkMode(
      window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  })

  return (
    <AnimatePresence initial mode="wait">
      <motion.div
        className="font-BlogContent"
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
