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
      <div className="flex gap-x-1 border border-black bg-white_hover pb-1 pl-3 pr-3 pt-1 shadow-md ring-blue-950/60 transition duration-100 ease-in hover:ring-2 dark:bg-background_component dark:text-white">
        <p>{parsedName}</p>
        <p className="text-xs">{amount}</p>
      </div>
    </Link>
  )
}
