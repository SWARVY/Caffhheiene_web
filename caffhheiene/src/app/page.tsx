import { MAIN_TITLE } from '@/constants/title';
import Carousel from '@/containers/main/Carousel';
import RecentlyPost from '@/containers/main/RecentlyPost';

export default function Page() {
  return (
    <div className="flex-col w-full space-y-20">
      <h1 className="text-center text-7xl md:text-8xl font-bold drop-shadow-lg">
        {MAIN_TITLE.welcome}
      </h1>
      <Carousel />
      <RecentlyPost />
    </div>
  );
}
