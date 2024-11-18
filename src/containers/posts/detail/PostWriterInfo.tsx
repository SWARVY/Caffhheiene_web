import SNSShortcuts from '@/components/SNSShortcuts'
import { USER } from '@/constants/user'
import Image from 'next/image'

export default function PostWriterInfo() {
  return (
    <div className="w-full">
      <div className="flex w-full flex-col items-center gap-x-4 xs:flex-row">
        <Image
          src={USER.profileImg}
          width={150}
          height={150}
          alt="caffhheiene profile image"
          className="size-36 rounded-full ring-2 ring-light_main dark:ring-white"
        />
        <div className="flex w-full flex-col items-start justify-center">
          <div className="w-full border-b border-light_main py-2 dark:border-white">
            <p className="text-xl font-medium">
              {USER.name} &middot; {USER.id}
            </p>
            <p>{USER.introduce}</p>
          </div>
          <SNSShortcuts />
        </div>
      </div>
    </div>
  )
}
