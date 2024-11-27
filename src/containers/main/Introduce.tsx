import SNSShortcuts from '@/components/SNSShortcuts'
import { USER } from '@/constants/user'

import UserDescription from './UserDescription'

export default function Introduce() {
  return (
    <div className="flex w-full flex-col gap-y-4">
      <h1 className="text-2xl font-medium">
        {USER.name} &middot; {USER.description}
      </h1>
      <UserDescription />
      <hr className="border-light_main dark:border-white" />
      <SNSShortcuts />
    </div>
  )
}
