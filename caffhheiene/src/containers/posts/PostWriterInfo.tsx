import { USER } from '@/constants/user';
import Image from 'next/image';

export default function PostWriterInfo() {
  return (
    <div className="flex mt-20 border-b p-4 gap-x-4">
      <Image
        className="rounded-full w-24 h-24"
        src={USER.profileImg}
        alt="profileImg"
        width={1024}
        height={1024}
      />
      <div className="grid items-center">
        <h1 className="font-bold text-2xl">{USER.name}</h1>
        <h2 className="text-gray-500">{USER.description}</h2>
      </div>
    </div>
  );
}
