'use client';

import { motion, useScroll } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function ProgressBar() {
  const pathName = usePathname();
  const regExp = /^\/posts\//;
  const { scrollYProgress } = useScroll();

  return (
    <>
      {regExp.test(pathName) ? (
        <motion.div className={'origin-left bg-gray-600 h-3'} style={{ scaleX: scrollYProgress }} />
      ) : (
        <></>
      )}
    </>
  );
}
