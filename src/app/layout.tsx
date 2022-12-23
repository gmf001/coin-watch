import { Inter } from '@next/font/google';
import PageLayout from './components/ui/layout';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

interface Props {
  children: React.ReactNode;
}

function AppLayout({ children }: Props) {
  return (
    <html lang='en' className={inter.variable}>
      <head>
        <title>CoinWatch | Crypto prices</title>
      </head>
      <body className='min-h-screen bg-black font-sans text-white'>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}

export default AppLayout;
