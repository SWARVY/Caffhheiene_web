import Title from '@/components/Title'
import { MAIN_TITLE } from '@/constants/title'
import { USER } from '@/constants/user'

export default function Introduce() {
  return (
    <div className="grid gap-y-4 border-b border-gray-500 pb-3">
      <Title title={MAIN_TITLE.welcome} />
      <div className="flex items-center justify-start gap-x-2 pl-2">
        <h3 className="text-xl font-bold dark:text-white">{USER.name}</h3>
        <p className="text-gray-400 dark:text-gray-300">{USER.description}</p>
      </div>
    </div>
  )
}
