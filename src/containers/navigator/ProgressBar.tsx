'use client'

import { motion, useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function ProgressBar() {
  const pathName = usePathname()
  const regExp = /^\/posts\/detail/
  const { scrollYProgress } = useScroll()

  return (
    <div className="w-full border-t border-blue-50 bg-white/50">
      <motion.div
        className={`${
          regExp.test(pathName) ? 'visible' : 'hidden'
        } h-3 w-full origin-left bg-blue-800/80 dark:bg-blue-600`}
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}
