import './globals.css';
import '../../public/fonts/font.css';
import BottomNavigator from '@/components/BottomNavigator';
import Client from '@/app/client';
import TopNavigator from '@/components/TopNavigator';
import { type ReactNode } from 'react';

export const metadata = {
  title: 'Caffhheiene',
  description: 'welcome! this is Caffhheiene',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body className="w-full flex-col font-MABINOGI_Classic">
        <TopNavigator />
        <Client>
          <div className="p-5 pt-40 sm:pl-20 sm:pr-20 md:pl-40 md:pr-40 lg:pl-60 lg:pr-60 xl:pl-80 xl:pr-80 ">
            {children}
          </div>
        </Client>
        <BottomNavigator />
      </body>
    </html>
  );
}
