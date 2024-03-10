import SubTitle from '@/components/SubTitle'
import { MAIN_TITLE } from '@/constants/title'
import { USER } from '@/constants/user'
import Badges from '@/containers/main/Badges'
import UserCareer from '@/deprecated/info/UserCareer'

export default function UserInfo() {
  return (
    <div className="w-full flex-col space-y-10">
      <SubTitle title={MAIN_TITLE.info} />
      <div className="grid w-full">
        <div className="grid gap-10">
          <div className="space-y-3">
            <div className="p-2">
              <p className="text-xl font-bold dark:text-white sm:text-2xl">
                {USER.name}
              </p>
              <p className="text-md text-gray-400 dark:text-gray-300 sm:text-lg">
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
