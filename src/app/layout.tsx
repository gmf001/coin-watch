import { Inter } from '@next/font/google';
import Header from '@/components/Header';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
});

function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={inter.variable}>
      <head />
      <body className='min-h-screen bg-dark text-white'>
        <Header />
        <main className='container -mt-16 mb-20 max-w-5xl rounded-xl bg-dark-accent p-8'>
          {children}
        </main>
      </body>
    </html>
  );
}

export default AppLayout;
