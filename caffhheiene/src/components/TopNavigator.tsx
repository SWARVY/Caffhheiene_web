import ProgressBar from '@/components/ProgressBar';
import { TOP_NAVBAR } from '@/constants/navbar';
import { SunIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { BearSmileSVG } from '../../public/svgs';

export default function TopNavigator() {
  return (
    <nav className="fixed left-0 top-0 z-10 w-full flex-col items-center">
      <div className="flex w-full bg-white bg-opacity-60 px-5 py-8 md:px-14">
        <div className="flex w-full justify-between font-bold">
          <div className="flex h-full items-center gap-x-3 md:gap-x-6">
            <Link href="/">
              <BearSmileSVG className="h-8 w-8 drop-shadow-md transition duration-150 ease-in hover:animate-pulse" />
            </Link>
            {TOP_NAVBAR.tags.map(({ tag, link }, idx) => (
              <Link
                key={idx}
                className="flex h-full items-center rounded-lg p-2 text-lg drop-shadow-md transition ease-in hover:bg-white_hover"
                href={link}>
                <h1>{tag}</h1>
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
  );
}
