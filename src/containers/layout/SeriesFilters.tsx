import { Tag } from '@/utils/getPost'

import SeriesItem from './SeriesItem'

interface SeriesFiltersProps {
  series: Tag[]
}

export default function SeriesFilters({ series }: SeriesFiltersProps) {
  return (
    <div className="w-full space-y-4">
      <h3 className="font-medium">시리즈</h3>
      <div className="grid justify-items-center gap-3 sm:flex sm:flex-wrap sm:justify-start">
        {series?.map((seriesInfo) => (
          <SeriesItem
            key={`series-${seriesInfo.name}`}
            name={seriesInfo.name}
            amount={seriesInfo.amount}
          />
        ))}
      </div>
    </div>
  )
}
