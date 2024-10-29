import type { Post } from '@/velite'
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
    <div className="flex flex-col w-full gap-y-2 sm:flex-row">
      <div className="grid w-full grid-cols-1 text-black justify-self-start dark:text-white">
        {prev !== null ? (
          <Link
            className="w-full p-3 transition-all bg-white border border-black shadow-md hover:bg-white_hover sm:w-5/6 dark:bg-background_component dark:hover:bg-background_component/80"
            href={`${id - 1}`}>
            <h3 className="text-xs">이전 포스트</h3>
            <p className="truncate">{prev.title}</p>
          </Link>
        ) : (
          <div className="w-full p-3 transition-all ease-in bg-white border border-black shadow-md hover:bg-white_hover sm:w-5/6 dark:bg-background_component dark:hover:bg-background_component/80">
            <h3 className="text-xs">이전 포스트</h3>
            <p className="truncate">이전 포스트가 없습니다</p>
          </div>
        )}
      </div>
      <div className="grid w-full grid-cols-1 text-black justify-items-end dark:text-white">
        {next !== null ? (
          <Link
            className="w-full p-3 text-right transition-all bg-white border border-black shadow-md hover:bg-white_hover sm:w-5/6 dark:bg-background_component dark:hover:bg-background_component/80"
            href={`${id + 1}`}>
            <h3 className="text-xs">다음 포스트</h3>
            <p className="truncate">{next.title}</p>
          </Link>
        ) : (
          <div className="w-full p-3 text-right transition-all bg-white border border-black shadow-md hover:bg-white_hover sm:w-5/6 dark:bg-background_component dark:hover:bg-background_component/80">
            <h3 className="text-xs">다음 포스트</h3>
            <p className="truncate">다음 포스트가 없습니다</p>
          </div>
        )}
      </div>
    </div>
  )
}
