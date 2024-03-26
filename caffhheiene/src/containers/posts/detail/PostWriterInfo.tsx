import { USER } from '@/constants/user'
import Image from 'next/image'

export default function PostWriterInfo() {
  return (
    <section className="mt-10 flex items-center gap-x-4 border-b-2 border-ochre p-4 pb-8">
      <Image
        className="h-24 w-24 rounded-full ring-2 ring-ochre"
        src={USER.profileImg}
        alt="Profile Image"
        width={1024}
        height={1024}
      />
      <section className="grid w-[23.5rem] items-center break-keep">
        <div className="flex items-center gap-x-2">
          <h3 className="text-xl font-bold dark:text-white">{USER.name}</h3>
          <p className="text-gray-400 dark:text-gray-300">{USER.description}</p>
        </div>
        <p>{USER.introduce}</p>
      </section>
    </section>
  )
}
