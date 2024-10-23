import './globals.css'
import '../../public/fonts/font.css'
import BottomNavigator from '@/containers/navigator/BottomNavigator'
import { PropsWithChildren } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { USER } from '@/constants/user'
import { SpeedInsights } from '@vercel/speed-insights/next'
import TopNavigator from '@/containers/navigator/TopNavigator'
import NextThemeProvider from '@/utils/NextThemeProvider'
import FramerTransitionProvider from '@/utils/FramerTransitionProvider'

export const metadata: Metadata = {
  title: '신현호의 기술서재',
  description: '학습한 내용들을 기록합니다.',
  openGraph: {
    title: '신현호의 기술서재',
    description: '학습한 내용들을 기록합니다.',
    url: 'https://caffhheiene.vercel.app',
    siteName: '신현호의 기술서재',
    images: [
      {
        url: `https://caffhheiene.vercel.app${USER.profileImg}`,
        width: 850,
        height: 600,
        alt: '신현호의 기술서재',
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="google-site-verification"
          content="oiYSaLSyk-bomuW9S4FjnJk3cvGtrJPYNmm4QrYOG0s"
        />
        <meta
          name="naver-site-verification"
          content="47cf760f4112b1ce516d64a87fd5f31bd3f74fc9"
        />
      </head>
      <body className="flex w-full flex-col items-center justify-center bg-blue-950/5 font-Pretendard transition duration-100 ease-in dark:bg-background_dark">
        <NextThemeProvider>
          <TopNavigator />
          <FramerTransitionProvider>{children}</FramerTransitionProvider>
          <BottomNavigator />
        </NextThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
