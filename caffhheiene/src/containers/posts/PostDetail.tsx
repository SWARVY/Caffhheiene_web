import { USER } from '@/constants/user'
import MdxRenderer from '@/containers/posts/MdxRenderer'
import PostWriterInfo from '@/containers/posts/PostWriterInfo'
import PrevNextButton from '@/containers/posts/PrevNextButton'
import Tag from '@/containers/posts/Tag'
import { getPostContent } from '@/utils/getPost'
import Image from 'next/image'

export default async function PostDetail({ id }: { id: string }) {
  const { prev, curr, next } = getPostContent(Number(id))

  return (
    <div className="grid gap-10">
      <div className="grid gap-6">
        <h1 className="text-5xl font-bold">{curr.title}</h1>
        <div className="grid gap-4 p-1">
          <div className="flex items-center gap-3">
            <h1 className="text-lg">{USER.name}</h1>
            <h1 className="text-md text-gray-400">{curr.date}</h1>
          </div>
          <div className="flex gap-2">
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
