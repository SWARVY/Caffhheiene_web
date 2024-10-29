import { Tag } from '@/utils/getPost'

import Filter from './Filter'

interface TagFiltersProps {
  categories: Tag[]
}

export default function TagFilters({ categories }: TagFiltersProps) {
  return (
    <div className="flex flex-col w-full gap-y-2">
      <div className="flex flex-wrap justify-start gap-3 justify-items-center">
        {categories?.map((category) => (
          <Filter name={category.name} amount={category.amount} />
        ))}
      </div>
    </div>
  )
}
