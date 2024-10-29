import Tag from '@/components/Tag'
import { Post } from '@/velite'
import {
  CalendarIcon,
  FolderIcon,
  FolderOpenIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'

import ImgWithPlaceholder from './ImgWithPlaceholder'

interface CardComponentProps {
  id: number
  post: Post
}

export default function Card({ id, post }: CardComponentProps) {
  return (
    <Link href={`/posts/detail/${id + 1}`}>
      <div className="flex flex-col transition-all bg-white border border-black shadow-lg size-full ring-blue-950/60 hover:ring-2 dark:border-blue-50 dark:bg-background_component dark:ring-blue-100">
        <ImgWithPlaceholder
          src={post.thumbnail}
          tailwindClassNames="size-full max-h-[18rem] object-cover border-b border-black"
        />
        <div className="w-full p-6 space-y-3">
          <div className="flex items-center gap-x-2">
            <CalendarIcon className="w-3 h-3" />
            <p className="text-xs dark:text-white">{post.date}</p>
          </div>
          <div className="w-full">
            <h3 className="text-xl truncate dark:text-white">{post.title}</h3>
            <p className="text-base text-gray-400 truncate dark:text-gray-300">
              {post.description}
            </p>
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <ul className="flex items-center gap-x-2">
              {post.category.map((category) => (
                <Tag key={category} tag={category} />
              ))}
            </ul>
            <div className="flex">
              {post.series ? (
                <FolderOpenIcon className="size-4" />
              ) : (
                <FolderIcon className="size-4" />
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
