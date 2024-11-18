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
    <div className="w-full bg-white/50">
      <MotionDiv
        className={`${
          isVisible ? 'visible' : 'hidden'
        } h-1 w-full origin-left bg-blue-600`}
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  )
}
