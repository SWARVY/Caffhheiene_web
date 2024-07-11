import { Tags } from 'lucide-react'
import { Tag } from '@/utils/getPost'
import Filter from './Filter'

interface TagFiltersProps {
  categories: Tag[]
}

export default function TagFilters({ categories }: TagFiltersProps) {
  return (
    <div className="grid w-full gap-y-2">
      <div className="flex items-center gap-x-2 text-black dark:text-white">
        <Tags className="h-4 w-4 text-ochre_light dark:text-ochre" />
        <p className="font-BlogTitle">태그</p>
      </div>
      <div className="flex flex-wrap justify-start justify-items-center gap-3">
        {categories?.map((category) => (
          <Filter name={category.name} amount={category.amount} />
        ))}
      </div>
    </div>
  )
}
