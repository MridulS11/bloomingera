import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 z-50 pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-brand-turquoise via-brand-lime to-brand-turquoise origin-left shadow-[0_0_12px_rgba(96,200,212,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}
