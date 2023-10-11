'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { LayoutRouterContext } from 'next/dist/shared/lib/app-router-context'
import { usePathname } from 'next/navigation'
import {
  type PropsWithChildren,
  type ReactNode,
  useContext,
  useRef,
} from 'react'

interface TransitionDivProps {
  children: ReactNode
}

function FrozenRouter(props: PropsWithChildren) {
  const context = useContext(LayoutRouterContext)
  const frozen = useRef(context).current

  return (
    <LayoutRouterContext.Provider value={frozen}>
      {props.children}
    </LayoutRouterContext.Provider>
  )
}

export default function Client({ children }: TransitionDivProps) {
  const pathName = usePathname()

  return (
    <AnimatePresence initial mode="wait">
      <motion.div
        className="font-NanumBarunpen_Rg"
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <FrozenRouter>{children}</FrozenRouter>
      </motion.div>
    </AnimatePresence>
  )
}
