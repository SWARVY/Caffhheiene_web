import { USER } from '@/constants/user';
import MarkdownRenderer from '@/containers/posts/MarkdownRenderer';
import { getDetailPostData } from '@/utils/getPostData';
import Image from 'next/image';

export default function PostDetail({ id }: { id: string }) {
  const postData = getDetailPostData(Number(id));

  return (
    <div className="grid gap-6">
      <div className="grid gap-8">
        <h1 className="text-5xl">{postData.data.title}</h1>
        <div className="grid gap-4">
          <div className="flex items-center gap-3">
            <Image
              className="rounded-full w-7 h-7"
              src="/images/Profile_glassed_icon.jpg"
              alt="profile"
              width={32}
              height={32}
            />
            <h1 className="text-md">{USER.name}</h1>
            <h1 className="text-sm text-gray-400">{postData.data.date}</h1>
          </div>
          <div className="flex gap-2">
            {postData.data.category.map((tag: string, idx: number) => (
              <div
                key={idx}
                className="flex bg-slate-400 text-white pt-0.5 pb-0.5 pl-2 pr-2 rounded-md "
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <MarkdownRenderer content={postData.content} />
    </div>
  );
}
