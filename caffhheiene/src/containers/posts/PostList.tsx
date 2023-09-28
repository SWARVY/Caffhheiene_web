import { USER } from '@/constants/user';
import getSortedPostData from '@/utils/getSortedPostData';
import Image from 'next/image';

export default function PostList() {
  const posts: Array<{ [p: string]: any; id: string }> = getSortedPostData();

  return (
    <ul className="grid gap-8">
      {posts.map((post, idx) => (
        <li key={idx} className="grid gap-4 p-10 rounded-md border">
          <div className="grid gap-3">
            <div className="grid gap-2">
              <h1 className="text-xl">{post?.title}</h1>
              <p className="text-md text-gray-400">{post?.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="rounded-full w-8 h-8"
                src="/images/Profile_glassed_icon.jpg"
                alt="profile"
                width={32}
                height={32}
              />
              <h1 className="text-lg">{USER.name}</h1>
              <h1 className="text-md text-gray-400">{post?.date}</h1>
            </div>
          </div>
          <div className="flex gap-2">
            {post?.category.map((tag: string, idx: number) => (
              <div
                key={idx}
                className="flex bg-slate-400 text-white pt-0.5 pb-0.5 pl-2 pr-2 rounded-md "
              >
                {tag}
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
