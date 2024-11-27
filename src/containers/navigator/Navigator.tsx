import Link from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'

interface NavigatorBrandProps {
  icon?: ReactNode
  link?: string
}

function NavigatorBrand({ icon, link }: NavigatorBrandProps) {
  return (
    <div className="w-fit">
      <Link
        className="flex flex-col items-center justify-center gap-y-1 border-gray-300 fill-white py-3"
        href={link ?? '/'}>
        <div className="h-12">{icon}</div>
      </Link>
    </div>
  )
}

function NavigatorSection({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-start gap-x-3 py-3">
      {children}
    </div>
  )
}

export default function Navigator({ children }: PropsWithChildren) {
  return (
    <nav className="sticky left-0 top-0 z-50 flex w-full flex-col items-center bg-light_main/95 backdrop-blur-lg dark:bg-dark_main/95 dark:text-white">
      {children}
    </nav>
  )
}

Navigator.Brand = NavigatorBrand
Navigator.Section = NavigatorSection

Navigator.displayName = 'Navigator'
NavigatorBrand.displayName = 'NavigatorBrand'
NavigatorSection.displayName = 'NavigatorSection'
