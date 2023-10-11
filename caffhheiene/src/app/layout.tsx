import './globals.css'
import '../../public/fonts/font.css'
import BottomNavigator from '@/components/BottomNavigator'
import Client from '@/app/client'
import TopNavigator from '@/components/TopNavigator'
import { type ReactNode } from 'react'

export const metadata = {
  title: 'Caffhheiene',
  description: 'welcome! this is Caffhheiene',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="grid w-full font-MABINOGI_Classic">
        <TopNavigator />
        <Client>
          <div className="mt-[9rem] grid justify-items-center">
            <div className="w-full max-w-xl p-2">{children}</div>
          </div>
        </Client>
        <BottomNavigator />
      </body>
    </html>
  )
}
