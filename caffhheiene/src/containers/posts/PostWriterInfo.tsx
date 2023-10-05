import { USER } from '@/constants/user'
import Image from 'next/image'

export default function PostWriterInfo() {
  return (
    <div className="mt-20 flex gap-x-4 border-b p-4">
      <Image
        className="h-24 w-24 rounded-full"
        src={USER.profileImg}
        alt="profileImg"
        width={1024}
        height={1024}
      />
      <div className="grid items-center">
        <h1 className="text-2xl font-bold">{USER.name}</h1>
        <h2 className="text-gray-500">{USER.description}</h2>
      </div>
    </div>
  )
}
