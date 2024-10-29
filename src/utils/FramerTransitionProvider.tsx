'use client'

import { MotionDiv } from '@/components/FramerComponents'
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import type { PropsWithChildren } from 'react'

export default function FramerTransitionProvider({
  children,
}: PropsWithChildren) {
  const pathName = usePathname()

  return (
    <AnimatePresence initial mode="wait">
      <MotionDiv
        className="mt-[14rem] flex w-full max-w-6xl flex-col justify-center"
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        {children}
      </MotionDiv>
    </AnimatePresence>
  )
}
