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
      <div className="dark:bg-background_component flex size-full flex-col border border-black bg-white shadow-lg ring-blue-950/60 transition-all hover:ring-2 dark:border-blue-50 dark:ring-blue-100">
        <ImgWithPlaceholder
          src={post.thumbnail}
          tailwindClassNames="size-full max-h-[18rem] object-cover border-b border-black"
        />
        <div className="w-full space-y-3 p-6">
          <div className="flex items-center gap-x-2">
            <CalendarIcon className="h-3 w-3" />
            <p className="text-xs dark:text-white">{post.date}</p>
          </div>
          <div className="w-full">
            <h3 className="truncate text-xl dark:text-white">{post.title}</h3>
            <p className="truncate text-base text-gray-400 dark:text-gray-300">
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
