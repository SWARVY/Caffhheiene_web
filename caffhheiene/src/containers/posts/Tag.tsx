import { BADGES } from '@/constants/badge';

interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  return (
    <div
      className="flex text-white pt-0.5 pb-0.5 pl-2 pr-2 rounded-md"
      style={{ backgroundColor: `${BADGES.typescript.color}` }}
    >
      {tag}
    </div>
  );
}
