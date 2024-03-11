import { type ReactNode } from 'react'

interface BadgeProps {
  svgImage: ReactNode
  name: string
  color: string
}

export default function Badge({ svgImage, name, color }: BadgeProps) {
  return (
    <div
      className="flex items-center rounded-lg pb-2 pl-1 pr-1 pt-2 font-BlogDeco font-bold shadow-lg transition duration-150 ease-in hover:brightness-90 md:p-2"
      style={{ backgroundColor: `${color}` }}>
      <div className="mr-2 w-full fill-white">{svgImage}</div>
      <h1 className="text-xs text-white sm:text-xs md:text-sm">{name}</h1>
    </div>
  )
}
