import { type Post } from '@/contentlayer/generated'
import { CalendarIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import ImgWithPlacehlder from './ImgWithPlaceholder'

interface CardComponentProps {
  id: number
  post: Post
}

export default function Card({ id, post }: CardComponentProps) {
  return (
    <Link href={`/posts/detail/${id + 1}`}>
      <div className="max-h-sm flex-col overflow-hidden rounded-xl bg-white p-2 shadow-lg ring-ochre_light transition-all duration-100 ease-in hover:ring-2 dark:bg-background_component dark:ring-ochre md:max-w-md">
        <div className="grid h-[15rem] overflow-hidden rounded-xl">
          <ImgWithPlacehlder
            src={post.thumbnail}
            tailwindClassNames="h-56 w-full rounded-md object-cover"
          />
        </div>
        <div className="flex-col">
          <div className="grid items-center pb-1.5 pl-2 pt-1.5">
            <div className="flex h-full items-center gap-x-2">
              <CalendarIcon className="h-3 w-3 text-ochre" />
              <span className="text-xs dark:text-white">{post.date}</span>
            </div>
          </div>
          <div className="grid w-full gap-1 p-2.5">
            <h3 className="truncate text-xl font-bold dark:text-white">
              {post.title}
            </h3>
            <p className="truncate text-base font-semibold text-gray-400 dark:text-gray-300">
              {post.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
