import { stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

const staggerItems = stagger(0.15, { startDelay: 0.15 })

const useStaggerAnimation = () => {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      'li',
      { opacity: 1, scale: 1 },
      { duration: 0.5, delay: staggerItems }
    )
  }, [animate])

  return scope
}

export default useStaggerAnimation
