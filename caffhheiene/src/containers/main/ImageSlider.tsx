'use client';

import { PropsWithChildren, ReactNode } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style/Slick.css';

interface SlideProps extends PropsWithChildren<{}> {
  settings?: Settings;
  children: ReactNode;
}

export default function ImageSlider({ children }: SlideProps) {
  const settings = {
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  return (
    <Slider className="rounded-md border max-w-full max-h-[27rem] overflow-hidden" {...settings}>
      {children}
    </Slider>
  );
}
