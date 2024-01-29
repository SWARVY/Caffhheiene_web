'use client'

import getConvertedTextContent from '@/utils/getConvertedTextContent'
import { ArrowRightIcon, BookmarkIcon } from '@heroicons/react/20/solid'
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
    <div className="space-y-4 rounded-md bg-background_component p-6 font-BlogPost text-white">
      <div className="flex items-center gap-x-2">
        <BookmarkIcon className="h-5 w-5 text-yellow-400" />
        <h2 className="text-2xl font-bold">목차</h2>
      </div>
      <ul className="space-y-3">
        {headingElements.map(({ index, size }) => (
          <li
            className="group flex items-center gap-x-2 transition duration-200 ease-in hover:text-white_hover_weight"
            style={{
              paddingLeft: `${size}px`,
              fontSize: `${17 - size / 20}px`,
            }}>
            <ArrowRightIcon className="h-3 w-3" />
            <a href={`#${getConvertedTextContent(index)}`}>{index}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
