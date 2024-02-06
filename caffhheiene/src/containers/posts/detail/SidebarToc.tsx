'use client'

import getConvertedTextContent from '@/utils/getConvertedTextContent'
import getIntersectionObserver from '@/utils/getIntersectionObserver'
import {
  ArrowUpIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function SidebarToc() {
  const [currentId, setCurrentId] = useState<string>('')
  const [headingElements, setHeadingElements] = useState<
    { index: string; convertedIndex: string; size: number }[]
  >([])

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight)
  }

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
    <aside className="sticky top-32 hidden self-start font-BlogPost text-black drop-shadow-lg dark:text-white xl:grid">
      <div className="grid gap-y-4 rounded-t-lg bg-white text-black drop-shadow-xl dark:bg-background_component dark:text-white">
        <span className="pl-5 pt-4 font-bold">목차</span>
        <ul className="space-y-3 pb-5 pl-7 pr-7">
          {headingElements.map(({ index, convertedIndex, size }) => (
            <li
              className={`flex items-center justify-between gap-x-2 transition duration-200 ease-in ${currentId === convertedIndex ? 'scale-105 text-black dark:text-white' : 'text-gray-600 dark:text-slate-300'}`}
              style={{
                paddingLeft: `${size - 15}px`,
                fontSize: `${17 - size / 8}px`,
              }}>
              <Link
                className="break-words break-keep "
                href={`#${convertedIndex}`}>
                {index}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end gap-x-2 rounded-b-lg bg-ochre p-2">
        <button
          className="items-center rounded-md p-2 transition-all duration-100 ease-in hover:backdrop-brightness-50"
          onClick={scrollToBottom}
          type="button"
          aria-label="scroll to bottom">
          <ChatBubbleOvalLeftEllipsisIcon className="h-4 w-4 text-white" />
        </button>
        <button
          className="items-center rounded-md p-2 transition-all duration-100 ease-in hover:backdrop-brightness-50"
          onClick={scrollToTop}
          type="button"
          aria-label="scroll to top">
          <ArrowUpIcon className="h-4 w-4 text-white" />
        </button>
      </div>
    </aside>
  )
}
