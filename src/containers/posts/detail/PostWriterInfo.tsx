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
          <h3 className="text-lg font-bold dark:text-white sm:text-xl">
            {USER.name}
          </h3>
          <p className="text-sm text-gray-400 dark:text-gray-300 sm:text-base">
            {USER.description}
          </p>
        </div>
        <p className="text-sm dark:text-white sm:text-base">{USER.introduce}</p>
      </div>
    </div>
  )
}
