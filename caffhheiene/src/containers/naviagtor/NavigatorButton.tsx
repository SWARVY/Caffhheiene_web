import Link from 'next/link'

interface NavigatorbuttonProps {
  tag: string
  link: string
}

export default function NavigatorButton({ tag, link }: NavigatorbuttonProps) {
  return (
    <li className="flex h-full items-center rounded-lg p-2 drop-shadow-md">
      <Link
        className="text-md text-gray-600 transition-all duration-100 ease-in hover:brightness-150 dark:text-white dark:hover:brightness-75 md:text-lg"
        href={link}>
        <h3>{tag}</h3>
      </Link>
    </li>
  )
}
