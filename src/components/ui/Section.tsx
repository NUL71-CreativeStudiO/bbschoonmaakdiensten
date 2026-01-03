import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children, noPadding = false }) => {
  return (
    <section 
      id={id} 
      className={`relative w-full overflow-hidden ${noPadding ? '' : 'py-16 md:py-24 lg:py-28'} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }} // Trigger earlier on mobile
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 md:px-6 max-w-7xl"
      >
        {children}
      </motion.div>
    </section>
  );
};