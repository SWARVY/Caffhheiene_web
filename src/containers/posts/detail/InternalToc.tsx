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
    <div className="overflow-hidden rounded-lg drop-shadow-lg dark:text-white">
      <div className="flex items-center justify-between gap-x-2 bg-dark_main px-5 py-3 text-white">
        <h2 className="text-2xl">목차</h2>
        <BookmarkIcon className="size-5 text-yellow-400" />
      </div>
      <div className="flex bg-white px-3 py-6 dark:bg-dark_component">
        <ul className="space-y-3">
          {headingElements.map(({ index, size }) => (
            <li
              key={`internal-toc-content-${index}`}
              className="dark:hover:text-white_hover_weight group flex items-center gap-x-2 text-gray-600 transition-all hover:text-light_main dark:text-gray-300 dark:hover:text-white"
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
