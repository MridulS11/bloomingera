import React from 'react';
import { motion } from 'framer-motion';

export const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration || 0.7,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (custom = {}) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: custom.duration || 0.6,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const slideFromLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration || 0.7,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const slideFromRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (custom = {}) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: custom.duration || 0.7,
      delay: custom.delay || 0,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.7,
  className = '',
  viewport = { once: true, amount: 0.15 },
  ...props
}) {
  let selectedVariants = fadeInVariants;
  if (variant === 'scaleUp') selectedVariants = scaleUpVariants;
  if (variant === 'slideLeft') selectedVariants = slideFromLeftVariants;
  if (variant === 'slideRight') selectedVariants = slideFromRightVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={selectedVariants}
      custom={{ delay, duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Staggered Container for child lists
export function StaggerContainer({
  children,
  className = '',
  viewport = { once: true, amount: 0.1 },
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={staggerContainerVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Child item inside StaggerContainer
export function StaggerItem({
  children,
  className = '',
  ...props
}) {
  return (
    <motion.div
      variants={fadeInVariants}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Specular Animated Divider Line
export function AnimatedDivider({ className = '' }) {
  return (
    <div className={`overflow-hidden py-4 ${className}`}>
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="specular-divider origin-center"
      />
    </div>
  );
}
