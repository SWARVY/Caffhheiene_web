import { type GrayMatterFile } from 'gray-matter';
import Link from 'next/link';

interface PrevNextButtonProps {
  id: number;
  prev: GrayMatterFile<string> | null;
  next: GrayMatterFile<string> | null;
}

export default function PrevNextButton({ id, prev, next }: PrevNextButtonProps) {
  return (
    <div className="grid grid-cols-2">
      <div className="grid w-full justify-items-start">
        {prev !== null ? (
          <Link
            className="grid w-5/6 rounded-md p-3 shadow-md transition ease-in hover:-translate-y-1"
            href={`${id - 1}`}
          >
            <h1 className="text-xs font-bold">이전 포스트</h1>
            <h1>{prev.data.title}</h1>
          </Link>
        ) : (
          <div className="grid w-5/6 rounded-md p-3 shadow-md transition ease-in hover:-translate-y-1">
            <h1 className="text-xs font-bold">이전 포스트</h1>
            <h2 className="w-full">이전 포스트가 없습니다</h2>
          </div>
        )}
      </div>
      <div className="grid w-full justify-items-end">
        {next !== null ? (
          <Link
            className="grid w-5/6 rounded-md p-3 text-right shadow-md transition ease-in hover:-translate-y-1"
            href={`${id + 1}`}
          >
            <h1 className="text-xs font-bold">다음 포스트</h1>
            <h1>{next.data.title}</h1>
          </Link>
        ) : (
          <div className="grid w-5/6 rounded-md text-right p-3 shadow-md transition ease-in hover:-translate-y-1">
            <h1 className="text-xs font-bold">다음 포스트</h1>
            <h2 className="w-full">다음 포스트가 없습니다</h2>
          </div>
        )}
      </div>
    </div>
  );
}
