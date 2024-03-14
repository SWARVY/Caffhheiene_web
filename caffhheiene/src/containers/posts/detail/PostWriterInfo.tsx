import { USER } from '@/constants/user'
import Image from 'next/image'

export default function PostWriterInfo() {
  return (
    <section className="mt-10 flex gap-x-4 border-b-2 border-ochre p-4">
      <Image
        className="h-24 w-24 rounded-full"
        src={USER.profileImg}
        alt="Profile Image"
        width={1024}
        height={1024}
      />
      <section className="grid items-center">
        <h3 className="text-2xl font-bold dark:text-white">{USER.name}</h3>
        <p className="text-gray-400 dark:text-gray-300">{USER.description}</p>
      </section>
    </section>
  )
}
