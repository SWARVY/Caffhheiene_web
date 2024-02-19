import { LinkIcon } from '@heroicons/react/24/outline'

interface StudyItemProps {
  title: string
  link: string
}

export default function StudyItem({ title, link }: StudyItemProps) {
  return (
    <li className="flex items-center gap-x-2 dark:text-white">
      <LinkIcon className="h-3 w-3 text-gray-700 dark:text-white" />
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="truncate rounded-md bg-gradient-to-r from-transparent from-50% to-transparent to-50% bg-[length:200%_100%] bg-right-bottom pb-1 pl-2 pr-2 pt-1 transition-all duration-200 ease-in-out hover:from-ochre_light hover:to-white hover:bg-left-bottom hover:text-white dark:hover:from-ochre dark:hover:to-background_component">
        {title}
      </a>
    </li>
  )
}
