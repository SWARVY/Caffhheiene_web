import SubTitle from '@/components/SubTitle'
import { getAllCategory } from '@/utils/getPost'
import TagFilters from './TagFilters'
import SeriesFilters from './SeriesFilters'

export default function PostFilters() {
  const { categories, series } = getAllCategory()

  return (
    <div className="flex flex-col items-center justify-center gap-y-5">
      <SubTitle title="Posts" />
      <TagFilters categories={categories} />
      <SeriesFilters series={series} />
    </div>
  )
}
