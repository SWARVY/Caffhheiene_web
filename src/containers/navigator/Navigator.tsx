'use client'

import { USER_SNS } from '@/constants/user'
import Link from 'next/link'
import {
  Children,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState,
} from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'

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
      className="flex flex-col items-center justify-center gap-y-1 border-b border-gray-300 fill-white py-3"
      href={link ?? '/'}>
      <div className="h-20">{icon}</div>
      <p>{name}</p>
    </Link>
  )
}

function NavigatorButton({ tag, link }: NavigatorButtonProps) {
  return (
    <li className="flex h-full items-center px-4 py-2 text-sm text-blue-50 transition-all hover:bg-blue-50 hover:text-blue-950">
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
      <div className="hidden h-16 flex-grow items-center justify-around md:flex">
        {children}
      </div>
      <div className="flex h-16 flex-grow items-center justify-between px-8 md:hidden">
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
      <div className="hidden size-full items-center justify-center gap-x-4 border-x border-gray-300 py-3 md:flex md:w-1/2">
        {children}
      </div>
      <div className="relative flex w-full items-center justify-center md:hidden">
        <button type="button" onClick={() => setOpen((prev) => !prev)}>
          {open ? (
            <XIcon className="size-6 text-white" />
          ) : (
            <Bars3Icon className="size-6 text-white" />
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
            <div className="size-4 fill-white transition-colors hover:fill-gray-200">
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
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center border-b border-blue-50 bg-blue-950 bg-opacity-60 backdrop-blur-lg dark:bg-opacity-60 dark:text-white">
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
