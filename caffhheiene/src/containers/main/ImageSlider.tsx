'use client';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { type ReactNode } from 'react';
import Slider, { type Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/containers/style/Slick.css';

interface SlideProps {
  settings?: Settings;
  children: ReactNode;
}

function PrevArrow(props: any) {
  const { style, onClick } = props;

  return (
    <div
      className="absolute transition ease-in duration-300 rounded-xl bg-white hover:bg-opacity-80 bg-opacity-60 left-3 top-1/2 z-20"
      style={style}
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-10 h-10" />
    </div>
  );
}

function NextArrow(props: any) {
  const { style, onClick } = props;

  return (
    <div
      className="absolute transition ease-in duration-300 rounded-xl bg-white hover:bg-opacity-80 bg-opacity-60 right-3 top-1/2 z-30"
      style={style}
      onClick={onClick}
    >
      <ChevronRightIcon className="w-10 h-10" />
    </div>
  );
}

export default function ImageSlider({ children }: SlideProps) {
  const settings = {
    fade: true,
    arrow: false,
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    draggable: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 7000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider
      className="border rounded-md max-w-full max-h-[25rem] md:max-h-[32rem] overflow-hidden group"
      {...settings}
    >
      {children}
    </Slider>
  );
}
