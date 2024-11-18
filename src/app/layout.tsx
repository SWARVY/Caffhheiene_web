import { USER } from '@/constants/user'
import PageLayout from '@/containers/layout/PageLayout'
import BottomNavigator from '@/containers/navigator/BottomNavigator'
import TopNavigator from '@/containers/navigator/TopNavigator'
import JotaiProvider from '@/utils/JotaiProvider'
import NextThemeProvider from '@/utils/NextThemeProvider'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

import '../../public/fonts/font.css'
import './globals.css'

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
          content={process.env.GOOGLE_SEARCH_CONSOLE_ID}
        />
        <meta
          name="naver-site-verification"
          content={process.env.NAVER_SEARCH_ADVISER_ID}
        />
        <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID ?? ''} />
      </head>
      <body className="dark:bg-dark_background bg-light_background flex size-full flex-col items-center justify-center font-Pretendard transition-all">
        <JotaiProvider>
          <NextThemeProvider>
            <TopNavigator />
            <div className="mt-[2rem] flex size-full max-w-6xl flex-col justify-center">
              <PageLayout>{children}</PageLayout>
            </div>
            <BottomNavigator />
          </NextThemeProvider>
        </JotaiProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
