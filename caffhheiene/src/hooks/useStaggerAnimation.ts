import { stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

export default function useStaggerAnimation(
  isLoaded: boolean,
  setLoaded: () => void
) {
  const [scope, animate] = useAnimate()
  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 })

  useEffect(() => {
    void animate(
      'li',
      isLoaded
        ? { opacity: 1, scale: 1, filter: 'blur(0px)' }
        : { opacity: 0, scale: 0.3, filter: 'blur(20px)' },
      {
        duration: 0.2,
        delay: isLoaded ? staggerMenuItems : 0,
      }
    )
    setLoaded()
  }, [isLoaded])

  return scope
}
