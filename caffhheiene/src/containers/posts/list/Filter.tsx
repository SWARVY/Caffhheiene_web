import Link from 'next/link'

interface FilterProps {
  name: string
  amount: number
}

export default function Filter({ name, amount = 0 }: FilterProps) {
  const category = name.toLocaleLowerCase()

  return (
    <Link href={`/posts/${category}/1`}>
      <div className="flex gap-x-1 rounded-lg bg-white_hover pb-1 pl-3 pr-3 pt-1 shadow-md ring-ochre_light transition duration-100 ease-in hover:ring-2 dark:bg-background_component dark:text-white dark:ring-ochre">
        <p>{name}</p>
        <p className="text-xs">{amount}</p>
      </div>
    </Link>
  )
}
