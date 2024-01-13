import { type Post } from '@/contentlayer/generated'
import { CalendarIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

interface CardComponentProps {
  id: number
  post: Post
}

export default function Card({ id, post }: CardComponentProps) {
  return (
    <Link href={`/posts/detail/${id + 1}`}>
      <div className="max-h-sm flex-col overflow-hidden rounded-md bg-white shadow-lg transition ease-in hover:-translate-y-2 dark:bg-neutral-600 md:max-w-md">
        <div className="grid h-[15rem] overflow-hidden">
          <img
            className="h-full object-cover"
            src={post.thumbnail}
            alt="Post Thumbnail"
          />
        </div>
        <div className="flex-col p-3 transition duration-100 ease-in ">
          <div className="grid items-center pb-1.5 pl-2 pt-1.5">
            <div className="flex h-full items-center gap-x-2">
              <CalendarIcon className="h-3 w-3 dark:fill-white" />
              <span className="text-xs dark:text-white">{post.date}</span>
            </div>
          </div>
          <div className="grid w-full gap-1 p-2">
            <h3 className="truncate text-xl font-bold dark:text-white">
              {post.title}
            </h3>
            <p className="text-md truncate text-gray-400 dark:text-gray-300">
              {post.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
