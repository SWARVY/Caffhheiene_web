import SubTitle from '@/components/SubTitle'
import { MAIN_TITLE } from '@/constants/title'
import Filter from '@/containers/posts/list/Filter'
import { getAllCategory } from '@/utils/getPost'
import { TagIcon, SwatchIcon } from '@heroicons/react/20/solid'
import SeriesItem from './SeriesItem'

export default function PostFilters() {
  const { categories, series } = getAllCategory()

  return (
    <div className="grid items-center justify-items-center gap-10 font-BlogContent font-bold">
      <SubTitle title={MAIN_TITLE.posts} />
      <div className="grid w-full gap-y-2">
        <div className="flex items-center gap-x-2 text-black dark:text-white">
          <TagIcon className="h-4 w-4 fill-ochre_light  dark:fill-ochre" />
          <p>태그</p>
        </div>
        <div className="flex flex-wrap justify-start justify-items-center gap-3">
          {categories?.map((category) => (
            <Filter name={category.name} amount={category.amount} />
          ))}
        </div>
      </div>
      <div className="grid w-full gap-y-2">
        <div className="flex items-center gap-x-2 text-black dark:text-white">
          <SwatchIcon className="h-4 w-4 fill-ochre_light dark:fill-ochre" />
          <p>시리즈</p>
        </div>
        <div className="flex flex-wrap justify-start justify-items-center gap-3">
          {series?.map((seriesInfo) => (
            <SeriesItem name={seriesInfo.name} amount={seriesInfo.amount} />
          ))}
        </div>
      </div>
    </div>
  )
}
