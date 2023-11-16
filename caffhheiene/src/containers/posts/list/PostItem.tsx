import Tag from '@/containers/posts/Tag'
import { type Post } from '@/contentlayer/generated'
import Link from 'next/link'

interface PostItemProps {
  id: number
  post: Post
}

export default function PostItem({ id, post }: PostItemProps) {
  return (
    <Link href={`/posts/detail/${id + 1}`}>
      <li
        key={id}
        className="grid border-b pb-10 pt-10 transition duration-75 ease-in">
        <div className="grid gap-4">
          <div className="grid gap-3">
            <div className="grid gap-1">
              <div className="flex items-center justify-between">
                <h3 className="truncate text-left text-2xl font-bold dark:text-white">
                  {post.title}
                </h3>
                <h3 className="justify-end text-sm text-gray-400 dark:text-gray-300">
                  {post.date}
                </h3>
              </div>
              <p className="text-ellipsis text-lg text-gray-400 dark:text-gray-300">
                {post.description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 font-SeoulHangangLong_Lg font-bold">
            {post.category.map((tag: string, idx: number) => (
              <Tag key={idx} tag={tag} />
            ))}
          </div>
        </div>
      </li>
    </Link>
  )
}
