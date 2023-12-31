import { USER } from '@/constants/user'
import MdxRenderer from '@/containers/posts/detail/MdxRenderer'
import PostWriterInfo from '@/containers/posts/detail/PostWriterInfo'
import PrevNextButton from '@/containers/posts/detail/PrevNextButton'
import Tag from '@/containers/posts/Tag'
import { getPostContent } from '@/utils/getPost'
import Image from 'next/image'

export default async function PostDetail({ id }: { id: string }) {
  const { prev, curr, next } = getPostContent(Number(id))

  return (
    <div className="grid w-full gap-10">
      <div className="grid w-full gap-6">
        <h2 className="break-words break-keep text-5xl font-bold dark:text-white">
          {curr.title}
        </h2>
        <div className="grid gap-4 p-1">
          <div className="flex items-center gap-3">
            <h3 className="text-lg dark:text-white">{USER.name}</h3>
            <h3 className="text-md text-gray-400 dark:text-gray-300">
              {curr.date}
            </h3>
          </div>
          <div className="flex gap-2 font-BlogContent">
            {curr.category.map((tag: string, idx: number) => (
              <Tag key={idx} tag={tag} />
            ))}
          </div>
        </div>
        <Image
          className="w-full rounded-md"
          src={curr.thumbnail}
          alt="thumnail"
          width={1024}
          height={1024}
        />
      </div>
      <div className="grid w-full gap-y-10">
        <MdxRenderer post={curr} />
        <PostWriterInfo />
        <PrevNextButton id={Number(id)} prev={prev} next={next} />
      </div>
    </div>
  )
}
