import { type Post } from '@/contentlayer/generated'
import { CalendarIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

interface CardComponentProps {
  id: number
  post: Post
}

export default function Card({ id, post }: CardComponentProps) {
  return (
    <Link href={`/posts/${id + 1}`}>
      <div className="grid overflow-hidden rounded-md bg-white_hover shadow-lg transition ease-in hover:-translate-y-2">
        <img className="border-b" src={post.thumbnail} alt="sample" />
        <div className="flex flex-col bg-white p-3">
          <div className="grid grid-cols-1 items-center p-2">
            <div className="flex h-full justify-items-end">
              <CalendarIcon className="mr-2 h-3 w-3 items-center" />
              <span className="text-xs">{post.date}</span>
            </div>
          </div>
          <div className="grid gap-1 p-2">
            <h1 className="text-xl font-bold">{post.title}</h1>
            <p className="text-md text-gray-500">{post.description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
