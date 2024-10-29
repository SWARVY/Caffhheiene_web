'use client'

import { USER_SNS } from '@/constants/user'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Children,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react'

interface NavigatorBrandProps {
  icon?: ReactNode
  link?: string
  name?: string
}

interface NavigatorButtonProps {
  tag: string
  link: string
}

function NavigatorBrand({ icon, link, name }: NavigatorBrandProps) {
  return (
    <Link
      className="flex flex-col items-center justify-center py-3 border-b border-gray-300 gap-y-1 fill-white"
      href={link ?? '/'}>
      <div className="h-20">{icon}</div>
      <p>{name}</p>
    </Link>
  )
}

function NavigatorButton({ tag, link }: NavigatorButtonProps) {
  return (
    <li className="flex items-center h-full px-4 py-2 text-sm transition-all text-blue-50 hover:bg-blue-50 hover:text-blue-950">
      <Link href={link}>
        <h3>{tag}</h3>
      </Link>
    </li>
  )
}

function NavigatorWrapper({ children }: PropsWithChildren) {
  const childrenArray = Children.toArray(children)
  const firstChild = childrenArray.splice(1, 1)
  const restChild = childrenArray

  return (
    <>
      <div className="items-center justify-around flex-grow hidden h-16 md:flex">
        {children}
      </div>
      <div className="flex items-center justify-between flex-grow h-16 px-8 md:hidden">
        <div>{firstChild}</div>
        <div className="flex items-center gap-x-4">{restChild}</div>
      </div>
    </>
  )
}

function NavigatorCollapse({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false)
  const pathName = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathName])

  return (
    <>
      <div className="items-center justify-center hidden py-3 border-gray-300 size-full gap-x-4 border-x md:flex md:w-1/2">
        {children}
      </div>
      <div className="relative flex items-center justify-center w-full md:hidden">
        <button type="button" onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <XIcon className="text-white size-6" />
          ) : (
            <Bars3Icon className="text-white size-6" />
          )}
        </button>
        {open && (
          <div className="absolute -bottom-[8.6rem] -left-8 flex w-screen flex-col gap-y-4 border-b bg-blue-950/40 p-10 backdrop-blur">
            {children}
          </div>
        )}
      </div>
    </>
  )
}

function NavigatorShortcuts() {
  return (
    <ul className="flex items-center justify-end gap-x-3 py-3 md:w-[20%]">
      {USER_SNS.map((sns) => (
        <li key={`shortcut-${sns.name}`} className="group">
          <Link href={sns.link} target="_blank">
            <div className="transition-colors size-4 fill-white hover:fill-gray-200">
              {sns.svg}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

function NavigatorSpacer() {
  return <div className="w-[20%]" />
}

function NavigatorSection({ children }: PropsWithChildren) {
  return (
    <div className="flex items-center justify-start gap-x-3 py-3 md:w-[20%]">
      {children}
    </div>
  )
}

export default function Navigator({ children }: PropsWithChildren) {
  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center w-full border-b border-blue-50 bg-blue-950 bg-opacity-60 backdrop-blur-lg dark:bg-opacity-60 dark:text-white">
      {children}
    </nav>
  )
}

Navigator.Brand = NavigatorBrand
Navigator.Button = NavigatorButton
Navigator.Wrapper = NavigatorWrapper
Navigator.Shortcuts = NavigatorShortcuts
Navigator.Collapse = NavigatorCollapse
Navigator.Spacer = NavigatorSpacer
Navigator.Section = NavigatorSection

Navigator.displayName = 'Navigator'
NavigatorBrand.displayName = 'NavigatorBrand'
NavigatorButton.displayName = 'NavigatorButton'
NavigatorWrapper.displayName = 'NavigatorWrapper'
NavigatorShortcuts.displayName = 'NavigatorShortcuts'
NavigatorCollapse.displayName = 'NavigatorCollapse'
NavigatorSpacer.displayName = 'NavigatorSpacer'
NavigatorSection.displayName = 'NavigatorSection'
