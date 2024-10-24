import { USER } from '@/constants/user'
import Image from 'next/image'

export default function PostWriterInfo() {
  return (
    <div className="mt-10 flex items-center gap-x-4 border-b-2 border-blue-950/60 p-4 pb-8">
      <Image
        className="size-24 rounded-full ring-2 ring-blue-950/60"
        src={USER.profileImg}
        alt="Profile Image"
        width={1024}
        height={1024}
      />
      <div className="max-w-[23.5rem] flex-col items-center break-keep">
        <div className="flex items-center gap-x-2">
          <h3 className="text-lg font-bold sm:text-xl dark:text-white">
            {USER.name}
          </h3>
          <p className="text-sm text-gray-400 sm:text-base dark:text-gray-300">
            {USER.description}
          </p>
        </div>
        <p className="text-sm sm:text-base dark:text-white">{USER.introduce}</p>
      </div>
    </div>
  )
}
