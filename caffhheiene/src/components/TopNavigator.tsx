import { TOP_NAVBAR } from '@/constants/navbar';
import { SunIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function TopNavigator() {
  return (
    <nav className="fixed z-10 bg-white bg-opacity-60 top-0 left-0 right-0 py-8 px-14 flex justify-between items-center">
      <div className="flex justify-between font-LINE_Bd w-full">
        <div className="flex h-full items-center gap-x-2 md:gap-x-3">
          {TOP_NAVBAR.tags.map(({ tag, link }, idx) => (
            <Link
              key={idx}
              className="transition ease-in h-full p-2 mr-2 items-center rounded-lg hover:bg-white_hover"
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
    </nav>
  );
}
