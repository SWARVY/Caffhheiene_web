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
    <section className="flex items-center gap-x-2">
      <Image
        className="rounded-full ring-2 ring-ochre"
        src={USER.profileImg}
        width={60}
        height={60}
        alt="user profile img"
      />
      <div className="grid w-full gap-2 p-1">
        <section className="flex items-center gap-2">
          <div className="flex items-center gap-x-2">
            <CircleUser className="h-4 w-4 text-ochre_light dark:text-ochre" />
            <p className="text-sm font-semibold dark:text-white">{USER.name}</p>
          </div>
          <time className="flex items-center gap-x-1">
            <CalendarIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
            <span className="mt-1.5 font-BlogDeco text-sm font-bold dark:text-white">
              {curr.date}
            </span>
          </time>
        </section>
        <section className="flex items-center gap-x-2">
          <div className="flex items-center gap-2 font-BlogContent">
            <TagIcon className="h-4 w-4 text-ochre_light dark:text-ochre" />
            {curr.category.map((tag: string) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
          <div
            className={`${curr.series ? 'flex items-center gap-2' : 'hidden'}`}>
            <LibraryBig className="h-4 w-4 text-ochre_light dark:text-ochre" />
            <p className="text-sm font-bold dark:text-white">{curr.series}</p>
          </div>
        </section>
      </div>
    </section>
  )
}
