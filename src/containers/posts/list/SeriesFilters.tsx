'use client'

import { Tag } from '@/utils/getPost'
import { CircleChevronDown, CircleChevronUp } from 'lucide-react'
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
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="flex items-center visible gap-x-2 sm:hidden">
          {show ? (
            <CircleChevronDown className="size-4" />
          ) : (
            <CircleChevronUp className="size-4" />
          )}
          <p className="font-Consolas">{show ? 'Close' : 'Open'} Series</p>
        </button>
      </div>
      <div
        className={`${show ? 'visible' : 'hidden'} grid justify-items-center gap-3 sm:flex sm:flex-wrap sm:justify-start`}>
        {series?.map((seriesInfo) => (
          <SeriesItem
            key={`series-${seriesInfo.name}`}
            name={seriesInfo.name}
            amount={seriesInfo.amount}
          />
        ))}
      </div>
    </div>
  )
}
