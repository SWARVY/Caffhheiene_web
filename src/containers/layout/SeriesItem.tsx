import Link from 'next/link'

interface SeriesItemProps {
  name: string
  amount: number
}

export default function SeriesItem({ name, amount }: SeriesItemProps) {
  const seriesName = name.replaceAll(/series-|_/g, ' ')

  return (
    <Link href={`/posts/${name}/1`} className="w-full sm:w-44">
      <div className="relative flex overflow-hidden rounded-lg shadow-md">
        <div className="flex w-full justify-between bg-light_component p-3 transition-all hover:bg-light_component_hover dark:bg-dark_component dark:text-white dark:hover:bg-dark_component_hover">
          <p className="text-sm">{seriesName}</p>
          <p className="text-xs">{amount}</p>
        </div>
      </div>
    </Link>
  )
}
