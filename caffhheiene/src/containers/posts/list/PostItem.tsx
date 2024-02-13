import Tag from '@/containers/posts/Tag'
import { type Post } from '@/contentlayer/generated'
import { CalendarIcon } from '@heroicons/react/20/solid'
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
      className="group grid rounded-xl bg-white p-5 ring-ochre_light drop-shadow-lg transition duration-75 ease-in hover:ring-2 dark:bg-background_component dark:ring-ochre">
      <Link href={`/posts/detail/${id + 1}`}>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <div className="grid gap-1">
              <div className="flex items-center justify-between overflow-hidden">
                <h3 className="w-3/5 truncate text-left text-xl font-bold dark:text-white md:text-2xl">
                  {post.title}
                </h3>
                <div className="flex gap-x-1">
                  <CalendarIcon className="h-4 w-4 items-center text-ochre" />
                  <h3 className="justify-end text-sm text-gray-400 dark:text-gray-300">
                    {post.date}
                  </h3>
                </div>
              </div>
              <p className="truncate text-base font-semibold text-gray-400 dark:text-gray-300">
                {post.description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 font-BlogContent font-bold">
            <LinkIcon className="h-4 w-4 text-ochre" />
            {post.category.map((tag: string) => (
              <Tag tag={tag} />
            ))}
          </div>
        </div>
      </Link>
    </li>
  )
}
