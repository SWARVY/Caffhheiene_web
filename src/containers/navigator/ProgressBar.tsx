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
    <div className="w-full bg-light_progress_background dark:bg-dark_progress_background">
      <MotionDiv
        className={`${
          isVisible ? 'visible' : 'hidden'
        } h-1 w-full origin-left bg-light_progress_inner dark:bg-dark_progress_inner`}
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}
