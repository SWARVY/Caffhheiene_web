import { type ReactNode } from 'react'

interface TitleProps {
  svg: ReactNode
  title: string
}

export default function Title({ svg, title }: TitleProps) {
  return (
    <div className="flex w-full items-center justify-center gap-2 font-MABINOGI_Classic drop-shadow-lg md:justify-start">
      {svg}
      <h1 className="mt-2 text-6xl font-bold drop-shadow-xl md:text-5xl">
        {title}
      </h1>
    </div>
  )
}
