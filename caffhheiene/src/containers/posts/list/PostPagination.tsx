import { POST_SETTING } from '@/constants/postSetting'
import Link from 'next/link'

interface PostPaginationProps {
  selectedAllPostLen: number
  category: string
  pageNum: number
}

export default function PostPagination({
  selectedAllPostLen,
  category,
  pageNum,
}: PostPaginationProps) {
  const calculated = {
    div: selectedAllPostLen / POST_SETTING.contentsPerPage,
    mod: selectedAllPostLen % POST_SETTING.contentsPerPage,
  }
  const pageLen = calculated.mod > 0 ? calculated.div + 1 : calculated.div

  return (
    <ul className="flex justify-center gap-x-3 font-ChungbukJikji">
      {Array.from({ length: pageLen }, (_, idx) => idx).map((_, idx) => (
        <Link key={idx} href={`/posts/${category}/${idx + 1}`}>
          <li
            className={`${
              pageNum === idx + 1 ? 'bg-white_hover dark:bg-neutral-600' : ''
            } flex h-8 w-8 items-center justify-center rounded-md p-1 text-xl transition duration-200 ease-in hover:bg-white_hover dark:text-white dark:hover:bg-neutral-500`}>
            <button className="h-full w-full">{idx + 1}</button>
          </li>
        </Link>
      ))}
    </ul>
  )
}
