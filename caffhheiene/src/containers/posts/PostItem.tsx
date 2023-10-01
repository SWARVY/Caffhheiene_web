import { USER } from '@/constants/user';
import Tag from '@/containers/posts/Tag';
import { type GrayMatterFile } from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

interface PostItemProps {
  id: number;
  post: GrayMatterFile<string>;
}

export default function PostItem({ id, post }: PostItemProps) {
  return (
    <Link href={`/posts/${id + 1}`}>
      <li
        key={id}
        className="grid transition ease-in duration-75 p-10 rounded-md shadow-md hover:-translate-y-2"
      >
        <div className="grid gap-4">
          <div className="grid gap-3">
            <div className="grid gap-1">
              <h1 className="text-2xl font-bold">{post.data.title}</h1>
              <p className="text-lg text-gray-400">{post.data.description}</p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="rounded-full w-7 h-7"
                src={USER.profileImg}
                alt="profile"
                width={32}
                height={32}
              />
              <h1 className="text-md">{USER.name}</h1>
              <h1 className="text-sm text-gray-400">{post.data.date}</h1>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.data.category.map((tag: string, idx: number) => (
              <Tag key={idx} tag={tag} />
            ))}
          </div>
        </div>
      </li>
    </Link>
  );
}
