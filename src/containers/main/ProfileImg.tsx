import ImgWithPlaceholder from '@/components/ImgWithPlaceholder'
import { USER } from '@/constants/user'

export default function ProfileImg() {
  return (
    <figure className="flex w-fit flex-col justify-center gap-y-4 lg:w-full">
      <ImgWithPlaceholder
        src={USER.profileImg}
        tailwindClassNames="size-52 rounded-full ring-4 ring-ochre"
      />
      <figcaption className="flex flex-col text-black dark:text-white">
        <div className="flex items-center gap-x-2 text-center lg:w-full lg:text-start">
          <h2 className="text-xl font-bold">{USER.name}</h2>
          <p className="text-gray-400 dark:text-gray-300">{USER.description}</p>
        </div>
        <p className="break-keep text-center lg:w-full lg:text-start">
          {USER.introduce}
        </p>
      </figcaption>
    </figure>
  )
}
