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
    <div className="flex w-full flex-col gap-y-2 sm:flex-row">
      <div className="grid w-full grid-cols-1 justify-self-start text-black dark:text-white">
        {prev !== null ? (
          <Link
            className="w-full border border-black bg-white p-3 shadow-md transition-all hover:bg-white_hover sm:w-5/6 dark:bg-background_component dark:hover:bg-background_component/80"
            href={`${id - 1}`}>
            <h3 className="text-xs">이전 포스트</h3>
            <p className="truncate">{prev.title}</p>
          </Link>
        ) : (
          <div className="w-full border border-black bg-white p-3 shadow-md transition-all ease-in hover:bg-white_hover sm:w-5/6 dark:bg-background_component dark:hover:bg-background_component/80">
            <h3 className="text-xs">이전 포스트</h3>
            <p className="truncate">이전 포스트가 없습니다</p>
          </div>
        )}
      </div>
      <div className="grid w-full grid-cols-1 justify-items-end text-black dark:text-white">
        {next !== null ? (
          <Link
            className="w-full border border-black bg-white p-3 text-right shadow-md transition-all hover:bg-white_hover sm:w-5/6 dark:bg-background_component dark:hover:bg-background_component/80"
            href={`${id + 1}`}>
            <h3 className="text-xs">다음 포스트</h3>
            <p className="truncate">{next.title}</p>
          </Link>
        ) : (
          <div className="w-full border border-black bg-white p-3 text-right shadow-md transition-all hover:bg-white_hover sm:w-5/6 dark:bg-background_component dark:hover:bg-background_component/80">
            <h3 className="text-xs">다음 포스트</h3>
            <p className="truncate">다음 포스트가 없습니다</p>
          </div>
        )}
      </div>
    </div>
  )
}
