import './globals.css';
import '../../public/fonts/font.css';
import TopNavigator from '@/components/TopNavigator';
import { type ReactNode } from 'react';

export const metadata = {
  title: 'Caffhheiene',
  description: 'welcome! this is Caffhheiene',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex-col p-40 lg:pr-80 lg:pl-80 font-MABINOGI_Classic">
        <TopNavigator />
        {children}
      </body>
    </html>
  );
}
