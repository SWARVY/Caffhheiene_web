import Link from 'next/link'

interface NavigatorbuttonProps {
  tag: string
  link: string
}

export default function NavigatorButton({ tag, link }: NavigatorbuttonProps) {
  return (
    <Link
      className="flex h-full items-center rounded-lg p-2 drop-shadow-md"
      href={link}>
      <h3 className="text-md transition ease-in hover:brightness-50 md:text-lg">
        {tag}
      </h3>
    </Link>
  )
}
