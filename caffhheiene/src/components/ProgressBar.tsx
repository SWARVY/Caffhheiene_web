'use client';

import { BADGES } from '@/constants/badge';
import { motion, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function ProgressBar() {
  const pathName = usePathname();
  const regExp = /^\/posts\//;
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={`${regExp.test(pathName) ? 'visible' : 'invisible'} origin-left h-3`}
      style={{ scaleX: scrollYProgress, backgroundColor: `${BADGES.typescript.color}` }}
    />
  );
}
