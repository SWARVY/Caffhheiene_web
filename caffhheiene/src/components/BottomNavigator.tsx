import { BOTTOM_NAVBAR } from '@/constants/navbar'
import SNSList from './SNSList'

export default function BottomNavigator() {
  return (
    <div className="font-Content grid w-full justify-items-center pb-20 pt-20 text-center font-bold">
      <div className="grid w-full max-w-xl justify-items-center gap-4">
        <SNSList />
        <h1 className="dark:text-white">{BOTTOM_NAVBAR.copyright}</h1>
      </div>
    </div>
  )
}
