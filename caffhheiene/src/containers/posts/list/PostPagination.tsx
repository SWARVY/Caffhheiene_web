'use client'

import { POST_SETTING } from '@/constants/postSetting'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface PostPaginationProps {
  allPostLen: number
}

export default function PostPagination({ allPostLen }: PostPaginationProps) {
  const calculated = {
    div: allPostLen / POST_SETTING.contentsPerPage,
    mod: allPostLen % POST_SETTING.contentsPerPage,
  }
  const pageLen = calculated.mod > 0 ? calculated.div + 1 : calculated.div
  const path = usePathname().split('/')
  const category = path[2].toLowerCase()
  const pageNum = Number(path[3])

  return (
    <ul className="flex justify-center gap-x-3 font-MABINOGI_Classic">
      {Array.from({ length: pageLen }, (_, idx) => idx).map((_, idx) => (
        <Link key={idx} href={`/posts/${category}/${idx + 1}`}>
          <li
            className={`${
              pageNum === idx + 1 ? 'bg-white_hover' : ''
            } flex h-8 w-8 items-center justify-center rounded-md p-1 text-xl hover:bg-white_hover`}>
            <button className="h-full w-full">{idx + 1}</button>
          </li>
        </Link>
      ))}
    </ul>
  )
}
