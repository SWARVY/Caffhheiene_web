import { Tag } from '@/utils/getPost'
import Filter from './Filter'

interface TagFiltersProps {
  categories: Tag[]
}

export default function TagFilters({ categories }: TagFiltersProps) {
  return (
    <div className="flex w-full flex-col gap-y-2">
      <div className="flex flex-wrap justify-start justify-items-center gap-3">
        {categories?.map((category) => (
          <Filter name={category.name} amount={category.amount} />
        ))}
      </div>
    </div>
  )
}
