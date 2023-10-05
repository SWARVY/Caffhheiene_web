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
          <div className="p-[3%] pt-40 sm:pl-[5%] sm:pr-[5%] md:pl-[10%] md:pr-[10%] lg:pl-[20%] lg:pr-[20%] xl:pl-[30%] xl:pr-[30%] ">
            {children}
          </div>
        </Client>
        <BottomNavigator />
      </body>
    </html>
  );
}
