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
        <div className="flex w-full justify-between bg-white bg-gradient-to-r from-transparent from-50% to-transparent to-50% bg-[length:200%_100%] bg-right-bottom p-3 transition-all duration-200 ease-in-out hover:from-ochre_light hover:to-white hover:bg-left-bottom hover:text-white dark:bg-background_component dark:text-white dark:hover:from-ochre dark:hover:to-background_component">
          <p className="text-sm">{seriesName}</p>
          <p className="text-xs">{amount}</p>
        </div>
      </div>
    </Link>
  )
}
