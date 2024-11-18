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
          key={`pagination-${idx + 1}`}
          href={`/posts/${category}/${idx + 1}`}
          className={`${
            pageNum === idx + 1
              ? 'bg-light_component_hover dark:bg-dark_component_hover'
              : 'bg-light_component dark:bg-dark_component'
          } ring-light_main flex size-8 items-center justify-center rounded-md p-1 text-sm transition-all hover:ring-2 dark:text-white dark:ring-white`}>
          <li>{idx + 1}</li>
        </Link>
      ))}
    </ul>
  )
}
