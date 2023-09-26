import { ReactNode } from 'react';

interface BadgeProps {
  svgImage: ReactNode;
  name: string;
  color: string;
}

export default function Badge({ svgImage, name, color }: BadgeProps) {
  return (
    <div className="flex p-2 items-center rounded-sm" style={{ backgroundColor: `${color}` }}>
      <div className="w-full mr-2">{svgImage}</div>
      <h1 className={`${color === '#000000' ? 'text-white' : 'text-black'} text-sm`}>{name}</h1>
    </div>
  );
}
