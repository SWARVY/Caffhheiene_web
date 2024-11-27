import Tag from '@/components/Tag'
import { Post } from '@/velite'
import Image from 'next/image'
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
      className="group rounded-lg bg-white opacity-0 ring-light_main drop-shadow-lg transition-all hover:ring-2 dark:border-white dark:bg-dark_component dark:ring-white">
      <Link href={`/posts/detail/${id + 1}`} className="flex gap-x-2 p-5">
        <div className="flex w-full flex-col gap-2">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-sm text-black dark:text-white">
                {post.series ? post.series : '시리즈 없음'}
              </p>
            </div>
            <div className="flex items-center overflow-hidden">
              <h3 className="line-clamp-2 w-full text-xl font-medium md:text-2xl dark:text-white">
                {post.title}
              </h3>
            </div>
            <p className="line-clamp-1 break-keep text-base text-gray-600 xs:line-clamp-none dark:text-gray-200">
              {post.description}
            </p>
          </div>
          <div className="flex flex-col items-start gap-1 xs:flex-row xs:items-center">
            <p className="text-xs font-light dark:text-white">
              {`${year}년 ${month}월 ${day}일 · `}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              {post.category.map((tag: string) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </div>
        <div className="h-28 w-36 shrink-0 overflow-hidden rounded-lg">
          <Image
            src={post.thumbnail}
            width={300}
            height={200}
            alt={post.title}
            className="size-full object-cover"
          />
        </div>
      </Link>
    </li>
  )
}
