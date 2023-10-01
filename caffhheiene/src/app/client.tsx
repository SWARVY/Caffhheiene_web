'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { type ReactNode } from 'react';

interface TransitionDivProps {
  children: ReactNode;
}

export default function Client({ children }: TransitionDivProps) {
  const pathName = usePathname();

  return (
    <AnimatePresence
      initial
      mode="wait"
      onExitComplete={() => {
        window.scrollTo(0, 0);
      }}
    >
      <motion.div
        key={pathName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
