'use client'

import { usePathname } from 'next/navigation'
import { PropsWithChildren } from 'react'

import Aside from './Aside'
import Banner from './Banner'
import NavLinks from './NavLinks'

export default function PageLayout({ children }: PropsWithChildren) {
  const regExp = /^\/posts\/detail/
  const pathName = usePathname()
  const isPostDetail = regExp.test(pathName)

  if (isPostDetail) return children

  return (
    <div className="flex w-full flex-col gap-y-10">
      <div className="p-5 xl:p-0">
        <Banner />
      </div>
      <div className="flex w-full gap-x-4 p-5 xl:gap-x-0 xl:p-0">
        <div className="w-full space-y-6 pr-0 xl:max-w-4xl xl:pr-10">
          <NavLinks />
          {children}
        </div>
        <div className="hidden w-full max-w-[300px] border-l border-l-light_main pl-10 xl:block dark:border-l-white">
          <Aside />
        </div>
      </div>
    </div>
  )
}
