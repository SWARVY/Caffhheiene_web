import Badge from '@/components/Badge'
import { SUB_TITLE } from '@/constants/title'
import { LinkIcon } from '@heroicons/react/20/solid'
import { type ReactNode } from 'react'

interface ProjectItemProps {
  link: string
  name: string
  description: string
  stack: Array<{
    svg: ReactNode
    name: string
    color: string
  }>
}

export default function ProjectItem({
  link,
  name,
  description,
  stack,
}: ProjectItemProps) {
  return (
    <li className="grid gap-3 opacity-0">
      <a
        className="flex items-center gap-x-2"
        href={link}
        target="_blank"
        rel="noreferrer">
        <LinkIcon className="h-5 w-5 text-gray-700 dark:text-white" />
        <h3 className="rounded-lg bg-gradient-to-r from-transparent from-50% to-transparent to-50% bg-[length:200%_100%] bg-right-bottom p-1 text-2xl font-bold text-black transition-all duration-200 ease-in-out hover:from-ochre_light hover:to-white hover:bg-left-bottom hover:font-semibold hover:text-white dark:text-white dark:hover:from-ochre dark:hover:to-background_dark">
          {name}
        </h3>
      </a>
      <p className="text-black dark:text-gray-300">{description}</p>
      <div className="overflow-hidden rounded-md shadow-md">
        <div className="grid grid-cols-2 bg-ochre text-white">
          <h1 className="p-3 font-bold">{SUB_TITLE.techStacks}</h1>
          <div className="flex items-center justify-end gap-x-2 p-3">
            <div className="h-3 w-3 rounded-full bg-red-600" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-600" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 p-3 dark:bg-background_component md:grid-cols-3">
          {stack.map((tech) => (
            <Badge svgImage={tech.svg} name={tech.name} color={tech.color} />
          ))}
        </div>
      </div>
    </li>
  )
}
