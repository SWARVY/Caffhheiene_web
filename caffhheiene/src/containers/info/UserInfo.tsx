import SubTitle from '@/components/SubTitle'
import { MAIN_TITLE } from '@/constants/title'
import { USER } from '@/constants/user'
import Badges from '@/containers/info/Badges'
import UserCareer from '@/containers/info/UserCareer'

export default function UserInfo() {
  return (
    <div className="w-full flex-col space-y-10">
      <SubTitle title={MAIN_TITLE.info} />
      <div className="grid w-full">
        <div className="grid gap-10">
          <div className="space-y-3">
            <div className="p-2">
              <p className="text-2xl font-bold dark:text-white">{USER.name}</p>
              <p className="text-lg text-gray-400 dark:text-gray-300">
                {USER.description}
              </p>
              <UserCareer />
            </div>
          </div>
          <div className="space-y-3">
            <Badges type="TECH" />
          </div>
          <div className="space-y-3">
            <Badges type="SNS" />
          </div>
        </div>
      </div>
    </div>
  )
}
