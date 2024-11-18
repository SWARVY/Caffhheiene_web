import Link from 'next/link'

interface FilterProps {
  name: string
  amount: number
}

export default function Filter({ name, amount = 0 }: FilterProps) {
  const category = name.toLocaleLowerCase()
  const parsedName = name.replace(/_/g, ' ')

  return (
    <Link href={`/posts/${category}/1`}>
      <div className="flex gap-x-1 rounded-lg bg-light_component px-3 py-1 shadow-md transition-all hover:bg-light_component_hover dark:bg-dark_component dark:text-white dark:hover:bg-dark_component_hover">
        <p>{parsedName}</p>
        <p className="text-xs">{amount}</p>
      </div>
    </Link>
  )
}
