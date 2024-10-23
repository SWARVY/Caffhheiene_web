import Image from 'next/image'
import Tag from '@/components/Tag'
import { USER } from '@/constants/user'
import { CalendarIcon } from '@heroicons/react/24/outline'
import { Post } from '@/contentlayer/generated'
import { CircleUser, LibraryBig, TagIcon } from 'lucide-react'

interface PostInfoProps {
  curr: Post
}

export default function PostInfo({ curr }: PostInfoProps) {
  return (
    <div className="flex items-center gap-x-2">
      <Image
        className="rounded-full ring-2 ring-blue-950/60"
        src={USER.profileImg}
        width={60}
        height={60}
        alt="user profile img"
      />
      <div className="flex w-full flex-col gap-2 p-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-x-2">
            <CircleUser className="size-4" />
            <p className="text-sm dark:text-white">{USER.name}</p>
          </div>
          <time className="flex items-center gap-x-1">
            <CalendarIcon className="size-4" />
            <span className="text-sm dark:text-white">{curr.date}</span>
          </time>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-2">
            <TagIcon className="size-4" />
            {curr.category.map((tag: string) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
          <div
            className={`${curr.series ? 'flex items-center gap-2' : 'hidden'}`}>
            <LibraryBig className="size-4" />
            <p className="text-sm dark:text-white">{curr.series}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
