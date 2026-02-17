import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  variant?: 'center' | 'sidebar';
  icon?: React.ElementType;
  className?: string;
}

export function SectionHeader({ title, variant = 'center', icon: Icon, className = '' }: SectionHeaderProps) {
  if (variant === 'sidebar') {
    return (
        <h4 className={`text-xl font-bold text-white mb-6 border-l-4 border-primary pl-3 flex items-center gap-2 ${className}`}>
            {Icon && <Icon size={20} className="text-primary" />}
            {title}
        </h4>
    );
  }

  return (
    <div className={`mb-16 text-center ${className}`}>
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
            {title}
        </motion.h2>
        <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
    </div>
  );
}
