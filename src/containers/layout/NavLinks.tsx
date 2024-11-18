'use client'

import { TOP_NAVBAR } from '@/constants/navbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const pathName = usePathname()

  return (
    <div className="border-light_main flex w-full border-b dark:border-white">
      {TOP_NAVBAR.tags.map(({ tag, link, isPath }) => (
        <Link
          href={link}
          key={tag}
          className={`${isPath(pathName) ? 'border-light_main text-light_main border-b-2 dark:border-white dark:text-white' : 'text-gray-400'} z-10 px-5 py-3 text-center text-xl font-medium`}>
          {tag}
        </Link>
      ))}
    </div>
  )
}
