import { useEffect, useState } from 'react'

type ScrollDirection = 'down' | 'up' | null

export default function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }

      console.log(scrollDirection)

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  return scrollDirection
}
