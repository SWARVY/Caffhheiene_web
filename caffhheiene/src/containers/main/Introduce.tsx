import Title from '@/components/Title'
import { MAIN_TITLE } from '@/constants/title'
import { USER } from '@/constants/user'

export default function Introduce() {
  return (
    <div className="grid w-full gap-y-4 border-b pb-3">
      <Title title={MAIN_TITLE.welcome} />
      <div className="flex items-center justify-start gap-x-2 pl-2">
        <h2 className="text-xl font-bold dark:text-white">{USER.name}</h2>
        <p className="text-gray-400 dark:text-gray-300">{USER.description}</p>
      </div>
    </div>
  )
}
