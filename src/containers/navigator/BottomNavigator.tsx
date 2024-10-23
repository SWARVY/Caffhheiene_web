import { BOTTOM_NAVBAR } from '@/constants/navbar'

export default function BottomNavigator() {
  return (
    <footer className="flex w-full justify-center py-20 text-center">
      <p className="dark:text-white">{BOTTOM_NAVBAR.copyright}</p>
    </footer>
  )
}
