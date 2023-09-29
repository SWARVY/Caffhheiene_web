import { MAIN_TITLE } from '@/constants/title';
import ImageSlider from '@/containers/main/ImageSlider';
import SlideImage from '@/containers/main/SlideImage';
import { TestCarouselData } from '@/containers/main/TestSources/TestCarouselData';
import RecentlyPost from '@/containers/main/RecentlyPost';

export default function Page() {
  return (
    <div className="flex-col w-full space-y-20">
      <h1 className="text-center text-7xl md:text-8xl font-bold">{MAIN_TITLE.welcome}</h1>
      <ImageSlider>
        {TestCarouselData.map((data, idx) => (
          <SlideImage key={idx} src={data.src} title={data.title} subtitle={data.subtitle} />
        ))}
      </ImageSlider>
      <RecentlyPost />
    </div>
  );
}
