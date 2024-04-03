import { type Post } from '@/contentlayer/generated'
import {
  CalendarIcon,
  FolderOpenIcon,
  FolderIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import Tag from '@/components/Tag'
import { TagIcon } from 'lucide-react'
import ImgWithPlacehlder from './ImgWithPlaceholder'

interface CardComponentProps {
  id: number
  post: Post
}

export default function Card({ id, post }: CardComponentProps) {
  return (
    <Link href={`/posts/detail/${id + 1}`}>
      <article className="max-h-sm flex-col overflow-hidden rounded-xl bg-white p-2 shadow-lg ring-ochre_light transition-all duration-100 ease-in hover:ring-2 dark:bg-background_component dark:ring-ochre md:max-w-md">
        <div className="grid h-[15rem] overflow-hidden rounded-xl">
          <ImgWithPlacehlder
            src={post.thumbnail}
            tailwindClassNames="h-56 w-full rounded-md object-cover"
          />
        </div>
        <div className="grid gap-y-3 p-2.5">
          <div className="grid items-center">
            <div className="flex items-center gap-x-2">
              <CalendarIcon className="h-3 w-3 text-ochre" />
              <p className="mt-1.5 font-BlogDeco text-xs dark:text-white">
                {post.date}
              </p>
            </div>
          </div>
          <div className="grid w-full gap-1">
            <h3 className="truncate text-xl font-bold dark:text-white">
              {post.title}
            </h3>
            <p className="truncate text-base font-semibold text-gray-400 dark:text-gray-300">
              {post.description}
            </p>
          </div>
          <div className="flex items-center justify-between gap-x-2">
            <ul className="flex items-center gap-x-2">
              <TagIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
              {post.category.map((category) => (
                <Tag key={category} tag={category} />
              ))}
            </ul>
            <div className="flex">
              {post.series ? (
                <FolderOpenIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
              ) : (
                <FolderIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
