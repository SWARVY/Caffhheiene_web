import { USER } from '@/constants/user';
import { getSortedPostData } from '@/utils/getPostData';
import Image from 'next/image';
import Link from 'next/link';

export default function PostList() {
  const posts = getSortedPostData();

  return (
    <ul className="grid gap-8">
      {posts.map((post, idx) => (
        <Link key={idx} href={`/posts/${idx + 1}`}>
          <li
            key={idx}
            className="grid transition ease-in duration-75 gap-4 p-10 rounded-md border hover:border-blue-500 hover:-translate-y-1"
          >
            <div className="grid gap-3">
              <div className="grid gap-2">
                <h1 className="text-xl font-bold">{post.data.title}</h1>
                <p className="text-md text-gray-400">{post.data.description}</p>
              </div>
              <div className="flex items-center gap-3">
                <Image
                  className="rounded-full w-7 h-7"
                  src="/images/Profile_glassed_icon.jpg"
                  alt="profile"
                  width={32}
                  height={32}
                />
                <h1 className="text-md">{USER.name}</h1>
                <h1 className="text-sm text-gray-400">{post.data.date}</h1>
              </div>
            </div>
            <div className="flex gap-2">
              {post.data.category.map((tag: string, idx: number) => (
                <div
                  key={idx}
                  className="flex bg-slate-400 text-white pt-0.5 pb-0.5 pl-2 pr-2 rounded-md "
                >
                  {tag}
                </div>
              ))}
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
