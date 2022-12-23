'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Header from './header';

interface Props {
  children: React.ReactNode;
}

function PageLayout({ children }: Props) {
  return (
    <>
      <Header />
      <main className='container -mt-16 mb-20 max-w-5xl bg-gray-900 p-8 sm:-mt-28 lg:rounded-xl'>
        <AnimatePresence>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20
            }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </>
  );
}

export default PageLayout;
