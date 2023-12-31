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
      } h-3 origin-left bg-gray-600 dark:bg-gray-300`}
      style={{ scaleX: scrollYProgress }}
    />
  )
}
