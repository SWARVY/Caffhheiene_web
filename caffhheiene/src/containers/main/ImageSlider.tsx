'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { type ReactNode } from 'react'
import Slider, { type Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '@/containers/style/Slick.css'

interface SlideProps {
  settings?: Settings
  children: ReactNode
}

function PrevArrow(props: any) {
  const { style, onClick } = props

  return (
    <div
      className="absolute left-3 top-1/2 z-20 rounded-xl bg-white bg-opacity-60 transition duration-300 ease-in hover:bg-opacity-80"
      style={style}
      onClick={onClick}>
      <ChevronLeftIcon className="h-10 w-10" />
    </div>
  )
}

function NextArrow(props: any) {
  const { style, onClick } = props

  return (
    <div
      className="absolute right-3 top-1/2 z-30 rounded-xl bg-white bg-opacity-60 transition duration-300 ease-in hover:bg-opacity-80"
      style={style}
      onClick={onClick}>
      <ChevronRightIcon className="h-10 w-10" />
    </div>
  )
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
  }

  return (
    <Slider
      className="group max-h-[25rem] max-w-full overflow-hidden rounded-md border md:max-h-[32rem]"
      {...settings}>
      {children}
    </Slider>
  )
}
