import { Post } from '@/velite'
import { ListBulletIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

interface SeriesListProps {
  seriesName: string
  series: [number, Post][]
}

export default function SeriesList({ seriesName, series }: SeriesListProps) {
  return (
    <div className="flex flex-col overflow-hidden text-black border border-black shadow-md dark:text-white">
      <div className="flex flex-col p-4 text-white gap-y-2 bg-blue-950/60 dark:bg-blue-600/60">
        <p className="text-lg font-bold">{seriesName}</p>
        <div className="flex items-center gap-x-2">
          <ListBulletIcon className="w-4 h-4 fill-white" />
          <p className="flex items-center text-sm">
            총&nbsp;
            <span className="font-bold">{series.length}</span>개의 포스트가
            존재합니다.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start px-4 py-6 overflow-y-scroll bg-white size-full max-h-60 gap-y-3 dark:bg-background_component">
        {series.map((seriesItem, idx) => (
          <Link
            href={`${seriesItem[0] + 1}`}
            className="flex pl-4 text-gray-400 transition-all gap-x-4 hover:text-black dark:text-gray-300 dark:hover:text-white">
            <p className="w-6">{idx + 1}.</p>
            <p>{seriesItem[1].title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
