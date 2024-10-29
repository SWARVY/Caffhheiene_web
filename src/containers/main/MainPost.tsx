import Tag from '@/components/Tag'
import { Post } from '@/velite'
import {
  CalendarIcon,
  FolderIcon,
  FolderOpenIcon,
} from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

interface MainPostProps {
  id: number
  post: Post
}

export default function MainPost({ id, post }: MainPostProps) {
  return (
    <Link
      href={`/posts/detail/${id + 1}`}
      className="relative flex flex-col transition-all duration-100 ease-in bg-white border border-black shadow-lg ring-blue-950/60 hover:ring-2 md:flex-row dark:border-blue-50 dark:bg-background_component dark:ring-blue-100">
      <Image
        src={post.thumbnail}
        className="max-h-[30rem] size-full object-cover"
        width={500}
        height={500}
        alt={post.title}
      />
      <div className="h-auto w-full border-black md:ml-3 md:max-w-[24rem] md:border-l-2 md:border-dashed">
        <div className="flex flex-col p-6 size-full gap-y-4">
          <div className="flex items-center gap-x-2">
            <CalendarIcon className="size-3" />
            <p className="text-xs dark:text-white">{post.date}</p>
          </div>
          <div className="size-full">
            <h3 className="text-xl md:text-3xl dark:text-white">
              {post.title}
            </h3>
            <p className="text-base text-gray-400 md:text-lg dark:text-gray-300">
              {post.description}
            </p>
          </div>
          <div className="flex items-center justify-between w-full gap-x-2">
            <ul className="flex items-center gap-x-2">
              {post.category.map((category) => (
                <Tag key={category} tag={category} />
              ))}
            </ul>
            <div>
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
