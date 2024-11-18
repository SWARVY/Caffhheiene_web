import { getAllCategory } from '@/utils/getPost'

import SeriesFilters from './SeriesFilters'
import TagFilters from './TagFilters'

export default function PostFilters() {
  const { categories, series } = getAllCategory()

  return (
    <div className="flex w-full flex-col items-center justify-center gap-y-10">
      <TagFilters categories={categories} />
      <SeriesFilters series={series} />
    </div>
  )
}
