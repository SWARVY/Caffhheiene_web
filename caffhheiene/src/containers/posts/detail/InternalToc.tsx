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
    <section className="font-BlogPost text-black drop-shadow-lg dark:text-white">
      <div className="flex items-center justify-between gap-x-2 rounded-t-lg bg-ochre pb-3 pl-5 pr-5 pt-3 text-white">
        <h2 className="text-2xl font-bold">목차</h2>
        <BookmarkIcon className="h-5 w-5 text-yellow-400" />
      </div>
      <div className="flex rounded-b-lg bg-white pb-6 pl-3 pr-3 pt-6 dark:bg-background_component">
        <ul className="space-y-3">
          {headingElements.map(({ index, size }) => (
            <li
              className="group flex items-center gap-x-2 text-gray-600 transition duration-200 ease-in hover:text-black dark:text-white dark:hover:text-white_hover_weight"
              style={{
                paddingLeft: `${size}px`,
                fontSize: `${17 - size / 20}px`,
              }}>
              <ArrowRightIcon className="h-3 w-3" />
              <Link href={`#${getConvertedTextContent(index)}`}>{index}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
