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
      <div className="flex px-3 py-1 transition duration-100 ease-in border border-black shadow-md gap-x-1 bg-white_hover ring-blue-950/60 hover:ring-2 dark:bg-background_component dark:text-white">
        <p>{parsedName}</p>
        <p className="text-xs">{amount}</p>
      </div>
    </Link>
  )
}
