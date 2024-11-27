import { Tag } from '@/utils/getPost'

import Filter from './Filter'

interface TagFiltersProps {
  categories: Tag[]
}

export default function TagFilters({ categories }: TagFiltersProps) {
  return (
    <div className="w-full space-y-4">
      <h2 className="font-medium">태그</h2>
      <div className="flex flex-wrap justify-start justify-items-center gap-3">
        {categories?.map((category) => (
          <Filter
            key={category.name}
            name={category.name}
            amount={category.amount}
          />
        ))}
      </div>
    </div>
  )
}
