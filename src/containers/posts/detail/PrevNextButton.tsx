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
    <div className="flex w-full flex-col gap-y-2 sm:flex-row">
      <div className="grid w-full grid-cols-1 justify-self-start text-black dark:text-white">
        {prev !== null ? (
          <Link
            className="bg-light_component hover:bg-light_component_hover dark:bg-dark_component dark:hover:bg-dark_component_hover w-full overflow-hidden rounded-lg p-3 shadow-md transition-all sm:w-5/6"
            href={`${id - 1}`}>
            <h3 className="text-xs">이전 포스트</h3>
            <p className="truncate">{prev.title}</p>
          </Link>
        ) : (
          <div className="bg-light_component hover:bg-light_component_hover dark:bg-dark_component dark:hover:bg-dark_component_hover/80 w-full overflow-hidden rounded-lg p-3 shadow-md transition-all ease-in sm:w-5/6">
            <h3 className="text-xs">이전 포스트</h3>
            <p className="truncate">이전 포스트가 없습니다</p>
          </div>
        )}
      </div>
      <div className="grid w-full grid-cols-1 justify-items-end text-black dark:text-white">
        {next !== null ? (
          <Link
            className="bg-light_component hover:bg-light_component_hover dark:bg-dark_component dark:hover:bg-dark_component_hover/80 w-full overflow-hidden rounded-lg p-3 text-right shadow-md transition-all sm:w-5/6"
            href={`${id + 1}`}>
            <h3 className="text-xs">다음 포스트</h3>
            <p className="truncate">{next.title}</p>
          </Link>
        ) : (
          <div className="bg-light_component hover:bg-light_component_hover dark:bg-dark_component dark:hover:bg-dark_component_hover/80 w-full overflow-hidden rounded-lg p-3 text-right shadow-md transition-all sm:w-5/6">
            <h3 className="text-xs">다음 포스트</h3>
            <p className="truncate">다음 포스트가 없습니다</p>
          </div>
        )}
      </div>
    </div>
  )
}
