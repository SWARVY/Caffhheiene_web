import { type ReactNode } from 'react'

interface BadgeProps {
  svgImage: ReactNode
  name: string
  color: string
}

export default function Badge({ svgImage, name, color }: BadgeProps) {
  return (
    <div
      className="font-Content flex items-center rounded-sm p-2 font-bold shadow-lg transition duration-150 ease-in hover:brightness-90"
      style={{ backgroundColor: `${color}` }}>
      <div className="mr-2 w-full fill-white">{svgImage}</div>
      <h1 className="text-sm text-white">{name}</h1>
    </div>
  )
}
