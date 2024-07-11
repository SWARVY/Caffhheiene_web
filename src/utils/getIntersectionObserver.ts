import { Dispatch, SetStateAction } from 'react'

const observerOption = {
  threshold: 0.4,
  rootMargin: '-76px 0px 0px 0px',
}

const getIntersectionObserver = (
  setState: Dispatch<SetStateAction<string>>
) => {
  let direction = ''
  let prevYPosition = 0

  const checkScrollDirection = (prevY: number) => {
    if (window.scrollY > prevY) {
      direction = 'down'
    } else if (window.scrollY < prevY) {
      direction = 'up'
    }

    prevYPosition = window.scrollY
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      checkScrollDirection(prevYPosition)

      if (
        (direction === 'down' && !entry.isIntersecting) ||
        (direction === 'up' && entry.isIntersecting)
      ) {
        setState(entry.target.id)
      }
    })
  }, observerOption)

  return observer
}

export default getIntersectionObserver
