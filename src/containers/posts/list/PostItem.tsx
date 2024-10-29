import Tag from '@/components/Tag'
import { Post } from '@/velite'
import {
  CalendarIcon,
  FolderIcon,
  FolderOpenIcon,
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
      className="px-5 transition-all bg-white border border-black opacity-0 group py-7 ring-blue-950/60 drop-shadow-lg hover:ring-2 dark:border-blue-50 dark:bg-background_component dark:ring-blue-100">
      <Link
        href={`/posts/detail/${id + 1}`}
        className="flex flex-col sm:flex-row sm:gap-x-4">
        <div className="hidden p-1 font-bold justify-items-center gap-x-1 sm:visible sm:grid sm:p-2 dark:text-white">
          <div className="flex items-center justify-center text-3xl">
            <p>{year}</p>
          </div>
          <div className="flex items-center justify-center text-xl gap-x-1">
            <p>{month}</p>
            <p>/</p>
            <p>{day}</p>
          </div>
        </div>
        <div className="grid w-full gap-2">
          <div className="grid gap-1">
            <div className="flex items-center overflow-hidden">
              <h3 className="w-full text-xl truncate md:text-2xl dark:text-white">
                {post.title}
              </h3>
            </div>
            <p className="text-base text-gray-400 truncate dark:text-gray-300">
              {post.description}
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="flex flex-wrap items-center gap-2 font-BlogContent ">
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
