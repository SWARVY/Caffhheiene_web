import { type Post } from '@/contentlayer/generated'
import Link from 'next/link'

interface PrevNextButtonProps {
  id: number
  prev: Post | null
  next: Post | null
}

export default function PrevNextButton({
  id,
  prev,
  next,
}: PrevNextButtonProps) {
  return (
    <div className="grid grid-cols-2">
      <div className="grid w-full justify-items-start dark:text-white">
        {prev !== null ? (
          <Link
            className="grid w-5/6 rounded-md p-3 shadow-md transition ease-in hover:-translate-y-1 dark:bg-neutral-600"
            href={`${id - 1}`}>
            <h3 className="text-xs font-bold">이전 포스트</h3>
            <p className="truncate">{prev.title}</p>
          </Link>
        ) : (
          <div className="grid w-5/6 rounded-md p-3 shadow-md transition ease-in hover:-translate-y-1 dark:bg-neutral-600">
            <h3 className="text-xs font-bold">이전 포스트</h3>
            <p className="w-full truncate">이전 포스트가 없습니다</p>
          </div>
        )}
      </div>
      <div className="grid w-full justify-items-end dark:text-white">
        {next !== null ? (
          <Link
            className="grid w-5/6 rounded-md p-3 text-right shadow-md transition ease-in hover:-translate-y-1 dark:bg-neutral-600"
            href={`${id + 1}`}>
            <h3 className="text-xs font-bold">다음 포스트</h3>
            <p className="truncate">{next.title}</p>
          </Link>
        ) : (
          <div className="grid w-5/6 rounded-md p-3 text-right shadow-md transition ease-in hover:-translate-y-1 dark:bg-neutral-600">
            <h3 className="text-xs font-bold">다음 포스트</h3>
            <p className="truncate">다음 포스트가 없습니다</p>
          </div>
        )}
      </div>
    </div>
  )
}
