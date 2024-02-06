'use client'

import getConvertedTextContent from '@/utils/getConvertedTextContent'
import getIntersectionObserver from '@/utils/getIntersectionObserver'
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SidebarToc() {
  const [currentId, setCurrentId] = useState<string>('')
  const [headingElements, setHeadingElements] = useState<
    { index: string; convertedIndex: string; size: number }[]
  >([])

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId)
    const contentElement = document.querySelector('#content')

    if (contentElement) {
      const headingElementList = Array.from(
        contentElement.querySelectorAll('h2, h3')
      )

      setHeadingElements(
        headingElementList.map((header) => ({
          index: header.textContent as string,
          convertedIndex: getConvertedTextContent(header.textContent as string),
          size: (+header.nodeName[1] - 1) * 20,
        }))
      )
      headingElementList.forEach((header) => observer.observe(header))
    }
  }, [])

  return (
    <aside className="invisible fixed right-10 font-BlogPost text-black dark:text-white xl:visible">
      <ul className="space-y-3">
        {headingElements.map(({ index, convertedIndex, size }) => (
          <li
            className={`flex items-center gap-x-2 transition duration-200 ease-in ${currentId === convertedIndex ? 'scale-105' : 'text-slate-300'}`}
            style={{
              paddingLeft: `${size}px`,
              fontSize: `${17 - size / 12}px`,
            }}>
            <ArrowRightIcon
              className={`${currentId === convertedIndex ? 'xl:visible' : 'invisible'} h-3 w-3 transition duration-200 ease-in`}
            />
            <Link href={`#${convertedIndex}`}>{index}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}