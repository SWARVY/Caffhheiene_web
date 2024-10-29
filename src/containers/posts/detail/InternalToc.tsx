'use client'

import getConvertedTextContent from '@/utils/getConvertedTextContent'
import { ArrowRightIcon, BookmarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function InternalToc() {
  const [headingElements, setHeadingElements] = useState<
    { index: string; size: number }[]
  >([])

  useEffect(() => {
    const contentElement = document.querySelector('#content')

    if (contentElement) {
      const headingElementList = Array.from(
        contentElement.querySelectorAll('h2, h3')
      )

      setHeadingElements(
        headingElementList.map((header) => ({
          index: header.textContent as string,
          size: (+header.nodeName[1] - 1) * 20,
        }))
      )
    }
  }, [])

  return (
    <div className="text-black border border-black drop-shadow-lg dark:text-white">
      <div className="flex items-center justify-between px-5 py-3 text-white gap-x-2 bg-blue-950/60 dark:bg-blue-600/60">
        <h2 className="text-2xl">목차</h2>
        <BookmarkIcon className="text-yellow-400 size-5" />
      </div>
      <div className="flex px-3 py-6 bg-white dark:bg-background_component">
        <ul className="space-y-3">
          {headingElements.map(({ index, size }) => (
            <li
              key={`internal-toc-content-${index}`}
              className="flex items-center text-gray-600 transition-all group gap-x-2 hover:text-black dark:text-white dark:hover:text-white_hover_weight"
              style={{
                paddingLeft: `${size}px`,
                fontSize: `${17 - size / 20}px`,
              }}>
              <ArrowRightIcon className="size-3" />
              <Link href={`#${getConvertedTextContent(index)}`}>{index}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
