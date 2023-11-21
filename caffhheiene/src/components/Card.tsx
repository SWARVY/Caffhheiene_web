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
      <div className="max-h-sm grid max-w-md overflow-hidden rounded-md bg-white_hover shadow-lg transition ease-in hover:-translate-y-2">
        <div className="grid h-[15rem]">
          <img
            className="h-full border-b object-cover"
            src={post.thumbnail}
            alt="sample"
          />
        </div>
        <div className="flex-col bg-white p-3 transition duration-100 ease-in dark:bg-neutral-600">
          <div className="grid items-center p-2">
            <div className="flex h-full justify-items-end">
              <CalendarIcon className="mr-2 h-3 w-3 items-center dark:fill-white" />
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
