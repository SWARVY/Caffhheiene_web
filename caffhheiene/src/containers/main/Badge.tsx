import { ReactNode } from 'react';

interface BadgeProps {
  svgImage: ReactNode;
  name: string;
  color: string;
}

export default function Badge({ svgImage, name, color }: BadgeProps) {
  return (
    <div className="flex p-2 items-center" style={{ backgroundColor: `${color}` }}>
      <div className="w-full mr-2">{svgImage}</div>
      <h1 style={{ color: `${color === '#000000' ? 'white' : 'black'}` }}>{name}</h1>
    </div>
  );
}
