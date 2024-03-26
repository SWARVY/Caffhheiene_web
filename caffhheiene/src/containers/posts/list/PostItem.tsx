import Tag from '@/components/Tag'
import { type Post } from '@/contentlayer/generated'
import {
  CalendarIcon,
  FolderOpenIcon,
  FolderIcon,
} from '@heroicons/react/20/solid'
import { LinkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface PostItemProps {
  id: number
  post: Post
}

export default function PostItem({ id, post }: PostItemProps) {
  return (
    <li
      key={id}
      className="group grid rounded-xl bg-white p-5 opacity-0 ring-ochre_light drop-shadow-lg transition duration-75 ease-in hover:ring-2 dark:bg-background_component dark:ring-ochre">
      <Link href={`/posts/detail/${id + 1}`}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <section className="flex items-center justify-between overflow-hidden">
              <h3 className="w-3/5 truncate text-left text-xl font-bold dark:text-white md:text-2xl">
                {post.title}
              </h3>
              <div className="flex gap-x-1">
                <CalendarIcon className="h-4 w-4 items-center text-ochre" />
                <h3 className="justify-end font-BlogDeco text-sm text-gray-400 dark:text-gray-300">
                  {post.date}
                </h3>
              </div>
            </section>
            <p className="truncate text-base font-semibold text-gray-400 dark:text-gray-300">
              {post.description}
            </p>
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <section className="flex flex-wrap items-center gap-2 font-BlogContent font-bold">
              <LinkIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
              {post.category.map((tag: string) => (
                <Tag key={tag} tag={tag} />
              ))}
            </section>
            <section className="flex flex-wrap items-center gap-2">
              {post.series ? (
                <FolderOpenIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
              ) : (
                <FolderIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
              )}
              <div className="text-sm font-bold text-black dark:text-white">
                {post.series ? post.series : '-'}
              </div>
            </section>
          </div>
        </div>
      </Link>
    </li>
  )
}
