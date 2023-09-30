import { CalendarIcon } from '@heroicons/react/20/solid';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { type GrayMatterFile } from 'gray-matter';
import Link from 'next/link';

interface CardComponentProps {
  id: number;
  post: GrayMatterFile<string>;
}

export default function Card({ id, post }: CardComponentProps) {
  return (
    <Link href={`/posts/${id + 1}`}>
      <div className="grid grid-cols-1 transition ease-in rounded-md border-2 bg-white_hover overflow-hidden hover:-translate-y-2">
        <img className="border-b" src={post.data.thumbnail} alt="sample" />
        <div className="flex flex-col p-3 bg-white">
          <div className="grid grid-cols-1 p-2 items-center">
            <div className="flex h-full justify-items-end">
              <CalendarIcon className="w-3 h-3 items-center mr-2" />
              <span className="text-xs">{post.data.date}</span>
            </div>
          </div>
          <div className="grid p-2 gap-1">
            <h1 className="text-xl font-bold">{post.data.title}</h1>
            <p className="text-md text-gray-500">{post.data.description}</p>
          </div>
          <hr />
          <div className="grid grid-cols-1 mt-2 p-2 items-center">
            <div className="flex h-full justify-items-end">
              <ChatBubbleOvalLeftIcon className="w-3 h-3 items-center mr-2" />
              <span className="text-xs">0</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
