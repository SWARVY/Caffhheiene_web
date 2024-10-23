import Tag from '@/components/Tag'
import { type Post } from '@/contentlayer/generated'
import {
  CalendarIcon,
  FolderOpenIcon,
  FolderIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'

interface PostItemProps {
  id: number
  post: Post
}

export default function PostItem({ id, post }: PostItemProps) {
  const [year, month, day] = post.date.split('-')

  return (
    <li
      key={id}
      className="group border border-black bg-white px-5 py-7 opacity-0 ring-blue-950/60 drop-shadow-lg transition-all hover:ring-2 dark:border-blue-50 dark:bg-background_component dark:ring-blue-100">
      <Link
        href={`/posts/detail/${id + 1}`}
        className="flex flex-col sm:flex-row sm:gap-x-4">
        <div className="hidden justify-items-center gap-x-1 p-1 font-bold sm:visible sm:grid sm:p-2 dark:text-white">
          <div className="flex items-center justify-center text-3xl">
            <p>{year}</p>
          </div>
          <div className="flex items-center justify-center gap-x-1 text-xl">
            <p>{month}</p>
            <p>/</p>
            <p>{day}</p>
          </div>
        </div>
        <div className="grid w-full gap-2">
          <div className="grid gap-1">
            <div className="flex items-center overflow-hidden">
              <h3 className="w-full truncate text-xl md:text-2xl dark:text-white">
                {post.title}
              </h3>
            </div>
            <p className="truncate text-base text-gray-400 dark:text-gray-300">
              {post.description}
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="font-BlogContent flex flex-wrap items-center gap-2 ">
              {post.category.map((tag: string) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                {post.series ? (
                  <FolderOpenIcon className="size-4" />
                ) : (
                  <FolderIcon className="size-4" />
                )}
                <p className="text-sm text-black dark:text-white">
                  {post.series ? post.series : '-'}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:hidden">
                <CalendarIcon className="size-4" />
                <p className="mt-1.5 text-xs font-light text-black dark:text-white">
                  {post.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}
