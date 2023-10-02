import { USER } from '@/constants/user';
import PostWriterInfo from '@/containers/posts/PostWriterInfo';
import PrevNextButton from '@/containers/posts/PrevNextButton';
import Tag from '@/containers/posts/Tag';
import TailwindMarkdownRenderer from '@/containers/posts/TailwindMarkdownRenderer';
import { getDetailPostData } from '@/utils/getPostData';
import Image from 'next/image';

export default function PostDetail({ id }: { id: string }) {
  const { prev, curr, next } = getDetailPostData(Number(id));

  return (
    <div className="grid gap-10">
      <div className="grid gap-6">
        <h1 className="text-5xl font-bold">{curr.data.title}</h1>
        <div className="grid p-1 gap-4">
          <div className="flex items-center gap-3">
            <h1 className="text-lg">{USER.name}</h1>
            <h1 className="text-md text-gray-400">{curr.data.date}</h1>
          </div>
          <div className="flex gap-2">
            {curr.data.category.map((tag: string, idx: number) => (
              <Tag key={idx} tag={tag} />
            ))}
          </div>
        </div>
        <Image
          className="rounded-md w-full"
          src={curr.data.thumbnail}
          alt="thumnail"
          width={1024}
          height={1024}
        />
      </div>
      <TailwindMarkdownRenderer content={curr.content} />
      <PostWriterInfo />
      <PrevNextButton id={Number(id)} prev={prev} next={next} />
    </div>
  );
}
