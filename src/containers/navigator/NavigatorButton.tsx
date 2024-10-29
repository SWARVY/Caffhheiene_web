import Link from 'next/link'

interface NavigatorButtonProps {
  tag: string
  link: string
}

export default function NavigatorButton({ tag, link }: NavigatorButtonProps) {
  return (
    <li className="flex items-center h-full p-2 rounded-lg drop-shadow-md">
      <Link
        className="text-gray-600 transition-all duration-100 ease-in text-md hover:brightness-150 md:text-lg dark:text-white dark:hover:brightness-75"
        href={link}>
        <h3>{tag}</h3>
      </Link>
    </li>
  )
}
