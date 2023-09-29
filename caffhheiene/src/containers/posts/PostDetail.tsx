import { USER } from '@/constants/user';
import Tag from '@/containers/posts/Tag';
import TailwindMarkdownRenderer from '@/containers/posts/TailwindMarkdownRenderer';
import { getDetailPostData } from '@/utils/getPostData';
import Image from 'next/image';

export default function PostDetail({ id }: { id: string }) {
  const postData = getDetailPostData(Number(id));

  return (
    <div className="grid gap-20">
      <div className="grid gap-6">
        <h1 className="text-5xl font-bold">{postData.data.title}</h1>
        <div className="grid gap-4">
          <div className="flex items-center gap-3">
            <Image
              className="rounded-full w-7 h-7"
              src="/images/Profile_glassed_icon.jpg"
              alt="profile"
              width={32}
              height={32}
            />
            <h1 className="text-lg">{USER.name}</h1>
            <h1 className="text-md text-gray-400">{postData.data.date}</h1>
          </div>
          <div className="flex gap-2">
            {postData.data.category.map((tag: string, idx: number) => (
              <Tag key={idx} tag={tag} />
            ))}
          </div>
        </div>
        <hr />
      </div>
      <TailwindMarkdownRenderer content={postData.content} />
    </div>
  );
}
