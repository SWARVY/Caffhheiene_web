import { Post } from '@/contentlayer/generated/types'
import { ListBulletIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

interface SeriesListProps {
  seriesName: string
  series: [number, Post][]
}

export default function SeriesList({ seriesName, series }: SeriesListProps) {
  return (
    <section className="grid overflow-hidden rounded-xl text-black shadow-md dark:text-white">
      <div className="grid gap-y-2 rounded-t-xl bg-ochre_light p-4 text-white dark:bg-ochre">
        <p className="text-lg font-bold">{seriesName}</p>
        <div className="flex items-center gap-x-2">
          <ListBulletIcon className="h-4 w-4 fill-white" />
          <p className="flex items-center text-sm">
            총&nbsp;
            <span className="font-bold">{series.length}</span>개의 포스트가
            존재합니다.
          </p>
        </div>
      </div>
      <ul className="grid max-h-60 items-center gap-y-3 overflow-y-scroll rounded-b-xl bg-white p-3 dark:bg-background_component">
        {series.map((seriesItem, idx) => (
          <li key={seriesItem[1].title}>
            <Link href={`${seriesItem[0] + 1}`} className="flex gap-x-4 pl-4">
              <p className="w-6 ">{idx + 1}.</p>
              <p className="">{seriesItem[1].title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
