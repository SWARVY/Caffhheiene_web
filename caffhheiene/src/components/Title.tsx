import { type ReactNode } from 'react';

interface TitleProps {
  svg: ReactNode;
  title: string;
}

export default function Title({ svg, title }: TitleProps) {
  return (
    <div className="flex w-full items-center justify-center md:justify-start gap-2 drop-shadow-lg">
      {svg}
      <h1 className="text-6xl md:text-5xl mt-2 drop-shadow-xl font-bold">{title}</h1>
    </div>
  );
}
