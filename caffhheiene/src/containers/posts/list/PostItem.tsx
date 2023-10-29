import { USER } from '@/constants/user'
import Tag from '@/containers/posts/Tag'
import { type Post } from '@/contentlayer/generated'
import Image from 'next/image'
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
        className="grid rounded-md p-10 shadow-md transition duration-75 ease-in hover:-translate-y-2">
        <div className="grid gap-4">
          <div className="grid gap-3">
            <div className="grid gap-1">
              <h1 className="text-ellipsis text-2xl font-bold">{post.title}</h1>
              <p className="text-ellipsis text-lg text-gray-400">
                {post.description}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="h-7 w-7 rounded-full"
                src={USER.profileImg}
                alt="profile"
                width={32}
                height={32}
              />
              <h1 className="text-md">{USER.name}</h1>
              <h1 className="text-sm text-gray-400">{post.date}</h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 font-MABINOGI_Classic">
            {post.category.map((tag: string, idx: number) => (
              <Tag key={idx} tag={tag} />
            ))}
          </div>
        </div>
      </li>
    </Link>
  )
}
