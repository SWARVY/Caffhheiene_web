import POST_SETTING from '@/constants/postSetting'
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
    <ul className="flex justify-center gap-x-3">
      {Array.from({ length: pageLen }, (_, idx) => idx).map((_, idx) => (
        <Link
          href={`/posts/${category}/${idx + 1}`}
          className={`${
            pageNum === idx + 1
              ? 'bg-white_hover dark:bg-blue-600/60'
              : 'bg-white dark:bg-neutral-600'
          } flex size-8 items-center justify-center border border-black p-1 text-sm ring-blue-950/60 transition-all hover:ring-2 dark:border-blue-50 dark:text-white dark:ring-blue-100`}>
          <li>{idx + 1}</li>
        </Link>
      ))}
    </ul>
  )
}
