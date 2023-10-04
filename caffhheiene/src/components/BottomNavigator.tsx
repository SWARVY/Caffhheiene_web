import { BOTTOM_NAVBAR } from '@/constants/navbar'

export default function BottomNavigator() {
  return (
    <div className="pb-20 pt-20 text-center md:pl-20 md:pr-20">
      <h1>{BOTTOM_NAVBAR.copyright}</h1>
    </div>
  )
}
