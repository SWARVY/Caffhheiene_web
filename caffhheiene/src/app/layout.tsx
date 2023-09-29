import './globals.css';
import '../../public/fonts/font.css';
import BottomNavigator from '@/components/BottomNavigator';
import TopNavigator from '@/components/TopNavigator';
import { type ReactNode } from 'react';

export const metadata = {
  title: 'Caffhheiene',
  description: 'welcome! this is Caffhheiene',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex-col p-5 pt-40 sm:pr-20 sm:pl-20 md:pl-40 md:pr-40 lg:pr-60 lg:pl-60 font-MABINOGI_Classic">
        <TopNavigator />
        {children}
        <BottomNavigator />
      </body>
    </html>
  );
}
