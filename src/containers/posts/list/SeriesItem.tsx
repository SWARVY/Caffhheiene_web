import Link from 'next/link'

interface SeriesItemProps {
  name: string
  amount: number
}

export default function SeriesItem({ name, amount }: SeriesItemProps) {
  const seriesName = name.replaceAll(/series-|_/g, ' ')

  return (
    <Link href={`/posts/${name}/1`} className="w-full sm:w-44">
      <div className="relative flex overflow-hidden border border-black shadow-md dark:border-blue-50 ">
        <div className="flex w-full justify-between bg-white bg-gradient-to-r from-transparent from-50% to-transparent to-50% bg-[length:200%_100%] bg-right-bottom p-3 transition-all duration-200 ease-in-out hover:from-blue-950/60 hover:to-white hover:bg-left-bottom hover:text-white dark:bg-background_component dark:text-white dark:hover:from-blue-600/60 dark:hover:to-background_component">
          <p className="text-sm">{seriesName}</p>
          <p className="text-xs">{amount}</p>
        </div>
      </div>
    </Link>
  )
}
