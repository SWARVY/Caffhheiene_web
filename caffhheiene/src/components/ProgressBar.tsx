'use client'

import { motion, useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function ProgressBar() {
  const pathName = usePathname()
  const regExp = /^\/posts\/detail/
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      className={`${
        regExp.test(pathName) ? 'visible' : 'invisible'
      } h-2 origin-left bg-ochre dark:bg-ochre_light`}
      style={{ scaleX: scrollYProgress }}
    />
  )
}
