'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  children: React.ReactNode;
}

function LayoutWrapper({ children }: Props) {
  return (
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
  );
}

export default LayoutWrapper;
