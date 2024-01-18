import { MAIN_CAROUSEL_SETTING } from '@/constants/mainSetting'
import ImageSlider from '@/containers/main/ImageSlider'
import SlideImage from '@/containers/main/SlideImage'

export default function Carousel() {
  return (
    <ImageSlider>
      {MAIN_CAROUSEL_SETTING.map((data) => (
        <SlideImage
          src={data.src}
          title={data.title}
          subtitle={data.subtitle}
          link={data.link}
        />
      ))}
    </ImageSlider>
  )
}
