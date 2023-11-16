import './globals.css'
import '../../public/fonts/font.css'
import BottomNavigator from '@/components/BottomNavigator'
import Client from '@/app/client'
import TopNavigator from '@/components/TopNavigator'
import { type ReactNode } from 'react'
import RecoilRootWrapper from '@/app/RecoilRootWrapper'

export const metadata = {
  title: '신현호의 기술서재',
  description: '학습한 내용들을 기록합니다.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="Cezz6dsFAjTiCwlqVouHHVYzFJ1rZnvdj8qmCvHm9MQ"
        />
      </head>
      <body className="grid w-full bg-white transition duration-100 ease-in dark:bg-neutral-800">
        <RecoilRootWrapper>
          <TopNavigator />
          <Client>
            <div className="mt-[9rem] grid justify-items-center">
              <div className="w-full max-w-3xl p-2">{children}</div>
            </div>
          </Client>
          <BottomNavigator />
        </RecoilRootWrapper>
      </body>
    </html>
  )
}
