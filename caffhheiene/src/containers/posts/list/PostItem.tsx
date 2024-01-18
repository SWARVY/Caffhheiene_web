import Tag from '@/containers/posts/Tag'
import { type Post } from '@/contentlayer/generated'
import { CalendarIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

interface PostItemProps {
  id: number
  post: Post
}

export default function PostItem({ id, post }: PostItemProps) {
  return (
    <li
      key={id}
      className="group grid border-b pb-10 pt-10 transition duration-75 ease-in">
      <Link href={`/posts/detail/${id + 1}`}>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <div className="grid gap-1">
              <div className="flex items-center justify-between overflow-hidden">
                <h3 className="w-3/5 truncate text-left text-2xl font-bold transition duration-200 ease-in group-hover:text-gray-600 dark:text-white dark:group-hover:text-white dark:group-hover:brightness-75">
                  {post.title}
                </h3>
                <div className="flex gap-x-1">
                  <CalendarIcon className="h-4 w-4 items-center dark:fill-white" />
                  <h3 className="justify-end text-sm text-gray-400 dark:text-gray-300">
                    {post.date}
                  </h3>
                </div>
              </div>
              <p className="truncate text-lg text-gray-400 dark:text-gray-300">
                {post.description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 font-BlogContent font-bold">
            {post.category.map((tag: string) => (
              <Tag tag={tag} />
            ))}
          </div>
        </div>
      </Link>
    </li>
  )
}
