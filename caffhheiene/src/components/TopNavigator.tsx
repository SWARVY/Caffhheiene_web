import ProgressBar from '@/components/ProgressBar'
import { TOP_NAVBAR } from '@/constants/navbar'
import { SunIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { BearSmileSVG } from '../../public/svgs'

export default function TopNavigator() {
  return (
    <nav className="fixed left-0 top-0 z-10 w-full flex-col items-center">
      <div className="flex w-full bg-white bg-opacity-60 px-14 py-8">
        <div className="font-LINE_Bd flex w-full justify-between">
          <div className="flex h-full items-center gap-x-2 md:gap-x-5">
            <Link href="/">
              <BearSmileSVG className="h-8 w-8 drop-shadow-md" />
            </Link>
            {TOP_NAVBAR.tags.map(({ tag, link }, idx) => (
              <Link
                key={idx}
                className="h-full items-center rounded-lg p-2 drop-shadow-md transition ease-in hover:bg-white_hover"
                href={link}>
                {tag}
              </Link>
            ))}
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-lg transition ease-in hover:bg-white_hover">
            <SunIcon className="h-6 w-6 text-yellow-400 drop-shadow-md" />
          </div>
        </div>
      </div>
      <ProgressBar />
    </nav>
  )
}
