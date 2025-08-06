import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function FadeInComponent({ children, duration }: { children: ReactNode, duration?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: duration ?? 1 }}
    >
      {children}
    </motion.div>
  );
}