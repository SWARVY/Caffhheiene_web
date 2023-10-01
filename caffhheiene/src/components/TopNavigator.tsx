import ProgressBar from '@/components/ProgressBar';
import { TOP_NAVBAR } from '@/constants/navbar';
import { SunIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { BearSmileSVG } from '../../public/svgs';

export default function TopNavigator() {
  return (
    <nav className="flex-col fixed w-full z-10 items-center top-0 left-0">
      <div className="flex bg-white bg-opacity-60 w-full py-8 px-14">
        <div className="flex w-full justify-between font-LINE_Bd">
          <div className="flex h-full items-center gap-x-2 md:gap-x-5">
            <Link href="/">
              <BearSmileSVG className="w-8 h-8" />
            </Link>
            {TOP_NAVBAR.tags.map(({ tag, link }, idx) => (
              <Link
                key={idx}
                className="transition ease-in h-full p-2 items-center rounded-lg hover:bg-white_hover"
                href={link}
              >
                {tag}
              </Link>
            ))}
          </div>
          <div className="flex transition ease-in rounded-lg items-center justify-center w-10 h-10 hover:bg-white_hover">
            <SunIcon className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
      </div>
      <ProgressBar />
    </nav>
  );
}
