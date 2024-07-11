import { Crown } from 'lucide-react'
import Badges from './Badges'

export default function ProfileBox() {
  return (
    <div className="w-full flex-col rounded-xl bg-white font-BlogTitle text-black shadow-lg dark:bg-background_component dark:text-white lg:col-span-2">
      <div className="flex items-center justify-between rounded-t-xl bg-ochre pl-3">
        <Crown
          className="h-5 w-5 fill-yellow-300 text-yellow-300"
          aria-hidden="true"
        />
        <div className="flex items-center justify-end gap-x-2 p-3">
          <div className="h-3 w-3 rounded-full bg-red-600" aria-hidden="true" />
          <div
            className="h-3 w-3 rounded-full bg-yellow-500"
            aria-hidden="true"
          />
          <div
            className="h-3 w-3 rounded-full bg-green-600"
            aria-hidden="true"
          />
        </div>
      </div>
      <div className="grid items-center gap-y-2 p-1 pb-3 pt-3 lg:p-4">
        <div>
          <h3 className="pl-2 lg:pl-0">📚 학습중인 기술들</h3>
          <Badges type="TECH" />
        </div>
        <div>
          <h3 className="pl-2 lg:pl-0">🔖 저에 대한 자세한 정보는...</h3>
          <Badges type="SNS" />
        </div>
      </div>
    </div>
  )
}
