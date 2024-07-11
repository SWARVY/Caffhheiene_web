'use client'

import { Tag } from '@/utils/getPost'
import { CircleChevronDown, CircleChevronUp, LibraryBig } from 'lucide-react'
import { useState } from 'react'
import SeriesItem from './SeriesItem'

interface SeriesFiltersProps {
  series: Tag[]
}

export default function SeriesFilters({ series }: SeriesFiltersProps) {
  const [show, setShow] = useState(false)

  return (
    <div className="grid w-full gap-y-2">
      <div className="flex justify-between text-black dark:text-white">
        <div className="flex items-center gap-x-2">
          <LibraryBig className="h-4 w-4 text-ochre_light dark:text-ochre" />
          <p className="font-BlogTitle">시리즈</p>
        </div>
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="visible sm:hidden">
          {show ? (
            <CircleChevronDown className="h-4 w-4 text-ochre_light dark:text-ochre" />
          ) : (
            <CircleChevronUp className="h-4 w-4 text-ochre_light dark:text-ochre" />
          )}
        </button>
      </div>
      <div
        className={`${show ? 'visible' : 'hidden'} grid justify-items-center gap-3 sm:flex sm:flex-wrap sm:justify-start`}>
        {series?.map((seriesInfo) => (
          <SeriesItem name={seriesInfo.name} amount={seriesInfo.amount} />
        ))}
      </div>
    </div>
  )
}
