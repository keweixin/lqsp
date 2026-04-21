import { motion } from 'motion/react';
import React from 'react';

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

export const fadeUpItem = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 350, damping: 28 } }
};

export function AnimatedPage({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.div initial="hidden" animate="show" variants={staggerContainer} className={className}>
      {children}
    </motion.div>
  );
}

export function AnimatedItem({ children, className = '', onClick, ...props }: { children: React.ReactNode, className?: string, onClick?: () => void, [key: string]: any }) {
  return (
    <motion.div variants={fadeUpItem} className={className} onClick={onClick} {...props}>
      {children}
    </motion.div>
  );
}
