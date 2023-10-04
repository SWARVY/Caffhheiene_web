import Badge from '@/components/Badge';
import { SUB_TITLE } from '@/constants/title';
import { type ReactNode } from 'react';

interface ProjectItemProps {
  link: string;
  name: string;
  description: string;
  stack: Array<{
    svg: ReactNode;
    name: string;
    color: string;
  }>;
}

export default function ProjectItem({
  link,
  name,
  description,
  stack,
}: ProjectItemProps) {
  return (
    <div className="grid gap-3">
      <a href={link} target="_blank" rel="noreferrer">
        <h1 className="text-2xl font-bold">{name}</h1>
      </a>
      <h2 className="">{description}</h2>
      <div className="overflow-hidden rounded-md shadow-md">
        <div className="bg-white_hover transition ease-in hover:bg-white_hover_weight">
          <h1 className="p-3 font-bold">{SUB_TITLE.techStacks}</h1>
        </div>
        <div className="grid grid-cols-2 gap-2 p-3 md:grid-cols-3">
          {stack.map((tech, idx) => (
            <Badge
              key={idx}
              svgImage={tech.svg}
              name={tech.name}
              color={tech.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
