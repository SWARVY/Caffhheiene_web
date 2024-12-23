'use client'

import getConvertedTextContent from '@/utils/getConvertedTextContent'
import getIntersectionObserver from '@/utils/getIntersectionObserver'
import {
  ArrowUpIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

export default function SidebarToc() {
  const [currentId, setCurrentId] = useState<string>('')
  const [headingElements, setHeadingElements] = useState<
    { index: string; convertedIndex: string; size: number }[]
  >([])

  const scrollToTop = useCallback(() => {
    window.scrollTo(0, 0)
  }, [])

  const scrollToBottom = useCallback(() => {
    window.scrollTo(0, document.body.scrollHeight)
  }, [])

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
    <aside className="sticky top-[12rem] z-20 hidden w-72 self-start overflow-hidden rounded-lg drop-shadow-lg xl:grid dark:text-white">
      <div className="flex flex-col gap-y-4 bg-white drop-shadow-xl dark:bg-dark_component dark:text-white">
        <span className="pl-5 pt-4 font-bold">목차</span>
        <ul className="space-y-3 px-7 pb-5">
          {headingElements.map(({ index, convertedIndex, size }) => (
            <li
              key={`sidebar-toc-content-${index}`}
              className={`flex items-center justify-between gap-x-2 transition-all ${currentId === convertedIndex ? 'scale-105 dark:text-white' : 'text-gray-600 dark:text-slate-300'}`}
              style={{
                paddingLeft: `${size - 15}px`,
                fontSize: `${17 - size / 8}px`,
              }}>
              <Link
                className="break-words break-keep"
                href={`#${convertedIndex}`}>
                {index}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end gap-x-2 bg-dark_main p-2">
        <button
          className="items-center rounded-md p-2 transition-all hover:backdrop-brightness-50"
          onClick={scrollToBottom}
          type="button"
          aria-label="scroll to bottom">
          <ChatBubbleOvalLeftEllipsisIcon className="size-4 text-white" />
        </button>
        <button
          className="items-center rounded-md p-2 transition-all hover:backdrop-brightness-50"
          onClick={scrollToTop}
          type="button"
          aria-label="scroll to top">
          <ArrowUpIcon className="size-4 text-white" />
        </button>
      </div>
    </aside>
  )
}
