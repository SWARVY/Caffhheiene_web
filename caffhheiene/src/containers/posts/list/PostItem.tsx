import Tag from '@/components/Tag'
import { type Post } from '@/contentlayer/generated'
import {
  CalendarIcon,
  FolderOpenIcon,
  FolderIcon,
} from '@heroicons/react/20/solid'
import { TagIcon } from 'lucide-react'
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
      className="group grid rounded-xl bg-white p-5 opacity-0 ring-ochre_light drop-shadow-lg transition duration-75 ease-in hover:ring-2 dark:bg-background_component dark:ring-ochre">
      <Link
        href={`/posts/detail/${id + 1}`}
        className="grid sm:flex sm:gap-x-4">
        <div className="hidden justify-items-center gap-x-1 p-1 dark:text-white sm:visible sm:grid sm:p-2">
          <div className="flex items-center justify-center font-BlogTitle text-3xl font-bold">
            <p>{year}</p>
          </div>
          <div className="flex items-center justify-center gap-x-1 font-BlogTitle text-xl">
            <p>{month}</p>
            <p>/</p>
            <p>{day}</p>
          </div>
        </div>
        <div className="grid w-full gap-2">
          <div className="grid gap-1">
            <section className="flex items-center overflow-hidden">
              <h3 className="w-full truncate text-xl font-bold dark:text-white md:text-2xl">
                {post.title}
              </h3>
            </section>
            <p className="truncate text-base font-semibold text-gray-400 dark:text-gray-300">
              {post.description}
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <section className="flex flex-wrap items-center gap-2 font-BlogContent font-bold">
              <TagIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
              {post.category.map((tag: string) => (
                <Tag key={tag} tag={tag} />
              ))}
            </section>
            <section className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                {post.series ? (
                  <FolderOpenIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
                ) : (
                  <FolderIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
                )}
                <p className="text-sm font-bold text-black dark:text-white">
                  {post.series ? post.series : '-'}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2 sm:hidden">
                <CalendarIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
                <p className="mt-1.5 font-BlogDeco text-xs font-light">
                  {post.date}
                </p>
              </div>
            </section>
          </div>
        </div>
      </Link>
    </li>
  )
}
