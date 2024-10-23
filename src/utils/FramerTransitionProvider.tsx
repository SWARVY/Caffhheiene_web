'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { type ReactNode } from 'react'

interface FramerTransitionProvider {
  children: ReactNode
}

export default function FramerTransitionProvider({
  children,
}: FramerTransitionProvider) {
  const pathName = usePathname()

  return (
    <AnimatePresence initial mode="wait">
      <motion.div
        className="mt-[14rem] flex w-full max-w-6xl flex-col justify-center"
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
