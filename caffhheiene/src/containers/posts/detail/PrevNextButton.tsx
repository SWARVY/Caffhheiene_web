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
    <div className="grid gap-y-2 sm:grid-cols-2">
      <div className="grid w-full justify-items-start text-black dark:text-white">
        {prev !== null ? (
          <Link
            className="grid w-full rounded-md p-3 shadow-md ring-ochre_light transition ease-in hover:ring-2 dark:bg-background_component dark:ring-ochre sm:w-5/6"
            href={`${id - 1}`}>
            <h3 className="text-xs font-bold">이전 포스트</h3>
            <p className="truncate font-semibold">{prev.title}</p>
          </Link>
        ) : (
          <div className="grid w-full rounded-md p-3 shadow-md ring-ochre_light transition ease-in hover:ring-2 dark:bg-background_component dark:ring-ochre sm:w-5/6">
            <h3 className="text-xs font-bold">이전 포스트</h3>
            <p className="truncate font-semibold">이전 포스트가 없습니다</p>
          </div>
        )}
      </div>
      <div className="grid w-full justify-items-end text-black dark:text-white">
        {next !== null ? (
          <Link
            className="grid w-full rounded-md p-3 text-right shadow-md ring-ochre_light transition ease-in hover:ring-2 dark:bg-background_component dark:ring-ochre sm:w-5/6"
            href={`${id + 1}`}>
            <h3 className="text-xs font-bold">다음 포스트</h3>
            <p className="truncate font-semibold">{next.title}</p>
          </Link>
        ) : (
          <div className="grid w-full rounded-md p-3 text-right shadow-md ring-ochre_light transition ease-in hover:ring-2 dark:bg-background_component dark:ring-ochre sm:w-5/6">
            <h3 className="text-xs font-bold">다음 포스트</h3>
            <p className="truncate font-semibold">다음 포스트가 없습니다</p>
          </div>
        )}
      </div>
    </div>
  )
}
