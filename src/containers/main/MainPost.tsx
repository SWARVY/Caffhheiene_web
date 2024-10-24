import { type Post } from '@/contentlayer/generated'
import {
  CalendarIcon,
  FolderOpenIcon,
  FolderIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import Tag from '@/components/Tag'
import ImgWithPlaceholder from '@/components/ImgWithPlaceholder'

interface MainPostProps {
  id: number
  post: Post
}

export default function MainPost({ id, post }: MainPostProps) {
  return (
    <Link
      href={`/posts/detail/${id + 1}`}
      className="relative flex flex-col border border-black bg-white shadow-lg ring-blue-950/60 transition-all duration-100 ease-in hover:ring-2 md:flex-row dark:border-blue-50 dark:bg-background_component dark:ring-blue-100">
      <ImgWithPlaceholder
        src={post.thumbnail}
        tailwindClassNames="max-h-[30rem] size-full object-cover"
      />
      <div className="h-auto w-full border-black md:ml-3 md:max-w-[24rem] md:border-l-2 md:border-dashed">
        <div className="flex size-full flex-col gap-y-4 p-6">
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
          <div className="flex w-full items-center justify-between gap-x-2">
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
