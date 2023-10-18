import Link from 'next/link'

interface FilterProps {
  name: string
  amount?: number
}

export default function Filter({ name, amount }: FilterProps) {
  const category = name.toLocaleLowerCase()

  return (
    <Link href={`/posts/${category}/1`}>
      <div className="flex rounded-lg bg-white_hover pb-1 pl-3 pr-3 pt-1 shadow-md transition ease-in hover:bg-white_hover_weight">
        <h3 className="mr-1">{name}</h3>
        <p className="text-xs">{amount}</p>
      </div>
    </Link>
  )
}