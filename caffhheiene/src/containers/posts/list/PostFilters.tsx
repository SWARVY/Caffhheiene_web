import SubTitle from '@/components/SubTitle'
import { MAIN_TITLE } from '@/constants/title'
import Filter from '@/containers/posts/list/Filter'
import { getAllCategory } from '@/utils/getPost'

export default function PostFilters() {
  const filters = getAllCategory()

  return (
    <div className="grid items-center justify-items-center gap-10 font-BlogContent font-bold">
      <SubTitle title={MAIN_TITLE.posts} />
      <div className="flex w-full flex-wrap justify-start justify-items-center gap-3">
        {filters?.map((filter) => (
          <Filter name={filter.name} amount={filter.amount} />
        ))}
      </div>
    </div>
  )
}
