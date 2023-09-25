import { StarIcon, SunIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function TopNavigator() {
  return (
    <nav className="fixed bg-white top-0 left-0 right-0 py-8 px-14 flex justify-between items-center">
      <div className="flex justify-between font-LINE_Bd w-full">
        <div className="flex h-full items-center">
          <div className="flex transition ease-in rounded-lg items-center justify-center w-10 h-10 mr-2 hover:bg-white_hover">
            <Link href="/">
              <StarIcon className="w-6 h-6 text-yellow-400" />
            </Link>
          </div>
          <h1 className="mr-2 font-LINE_Th"> / </h1>
          <h1 className="h-full p-2 mr-2 items-center rounded-lg font-LINE_Th hover:bg-white_hover">
            <Link href="/posts">Posts</Link>
          </h1>
          <h1 className="mr-2 font-LINE_Th"> / </h1>
          <h1 className="h-full p-2 mr-2 items-center rounded-lg font-LINE_Th hover:bg-white_hover">Archives</h1>
        </div>
        <div className="flex transition ease-in rounded-lg items-center justify-center w-10 h-10 hover:bg-white_hover">
          <SunIcon className="w-6 h-6 text-yellow-400" />
        </div>
      </div>
    </nav>
  );
}