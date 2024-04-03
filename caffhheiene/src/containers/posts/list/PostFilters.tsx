import SubTitle from '@/components/SubTitle'
import { MAIN_TITLE } from '@/constants/title'
import { getAllCategory } from '@/utils/getPost'
import TagFilters from './TagFilters'
import SeriesFilters from './SeriesFilters'

export default function PostFilters() {
  const { categories, series } = getAllCategory()

  return (
    <div className="grid items-center justify-items-center gap-10 font-BlogContent font-bold">
      <SubTitle title={MAIN_TITLE.posts} />
      <TagFilters categories={categories} />
      <SeriesFilters series={series} />
    </div>
  )
}
