import getTextColorByBackgroundColor from '@/utils/getTextColorByBackgroundColor';
import { type ReactNode } from 'react';

interface BadgeProps {
  svgImage: ReactNode;
  name: string;
  color: string;
}

export default function Badge({ svgImage, name, color }: BadgeProps) {
  const adaptiveColor = getTextColorByBackgroundColor(color);

  return (
    <div
      className="flex transition ease-in duration-150 p-2 items-center rounded-sm shadow-lg hover:brightness-90"
      style={{ backgroundColor: `${color}` }}
    >
      <div className={`w-full mr-2 fill-${adaptiveColor}`}>{svgImage}</div>
      <h1 className={`text-${adaptiveColor} text-sm`}>{name}</h1>
    </div>
  );
}
