'use client'

import { MotionDiv } from '@/components/FramerComponents'
import { useScroll } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function ProgressBar() {
  const regExp = /^\/posts\/detail/
  const pathName = usePathname()
  const isVisible = regExp.test(pathName)
  const { scrollYProgress } = useScroll()

  return (
    <div className="w-full border-t border-blue-50 bg-white/50">
      <MotionDiv
        className={`${
          isVisible ? 'visible' : 'hidden'
        } h-3 w-full origin-left bg-blue-800/80 dark:bg-blue-600`}
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}
