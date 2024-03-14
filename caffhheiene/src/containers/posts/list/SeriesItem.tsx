import Link from 'next/link'

interface SeriesItemProps {
  name: string
  amount: number
}

export default function SeriesItem({ name, amount }: SeriesItemProps) {
  const seriesName = name.replaceAll(/series-|_/g, ' ')

  return (
    <Link href={`/posts/${name}/1`}>
      <div className="relative flex w-44 overflow-hidden shadow-md">
        <div
          className="w-3 bg-ochre_light dark:bg-ochre
        "
        />
        <div className="flex w-full justify-between bg-white p-3 transition-all duration-100 ease-in dark:bg-background_component dark:text-white">
          <p className="text-sm">{seriesName}</p>
          <p className="text-xs">{amount}</p>
        </div>
      </div>
    </Link>
  )
}
