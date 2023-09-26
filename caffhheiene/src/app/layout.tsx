import './globals.css';
import '../../public/font.css';
import TopNavigator from '@/components/TopNavigator';

export const metadata = {
  title: 'Caffhheiene',
  description: 'welcome! this is Caffhheiene',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-LINE_Rg items-center justify-between p-24">
        <TopNavigator />
        {children}
      </body>
    </html>
  );
}
