'use client'

import ProgressBar from '@/components/ProgressBar'
import { TOP_NAVBAR } from '@/constants/navbar'
import { SunIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { BearSmileSVG } from '../../public/svgs'
import { useEffect, useMemo, useRef, useState } from 'react'
import { throttle } from 'lodash'

export default function TopNavigator() {
  const [visible, setVisible] = useState(true)
  const beforeScrollY = useRef(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const currentScrollY = window.scrollY

        if (beforeScrollY.current < currentScrollY) {
          setVisible(false)
        } else {
          setVisible(true)
        }
        beforeScrollY.current = currentScrollY
      }, 250),
    [beforeScrollY]
  )

  return (
    <nav className="fixed left-0 top-0 z-10 w-full flex-col items-center bg-white bg-opacity-60 font-MABINOGI_Classic backdrop-blur-sm">
      {visible ? (
        <div className="flex w-full items-center justify-center p-2">
          <div className="flex w-full max-w-xl items-center justify-between py-5 font-bold">
            <div className="flex h-full w-full items-center gap-x-3">
              <Link href="/">
                <BearSmileSVG className="h-7 w-7 drop-shadow-md" />
              </Link>
              {TOP_NAVBAR.tags.map(({ tag, link }, idx) => (
                <Link
                  key={idx}
                  className="flex h-full items-center rounded-lg p-2 text-lg drop-shadow-md transition ease-in hover:bg-white_hover hover:bg-opacity-60"
                  href={link}>
                  {tag}
                </Link>
              ))}
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg transition ease-in hover:bg-white_hover hover:bg-opacity-60">
              <SunIcon className="h-6 w-6 text-yellow-400 drop-shadow-md" />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      <ProgressBar />
    </nav>
  )
}
