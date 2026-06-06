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
        <h4 className={`text-xl font-bold text-[#1F1D1B] mb-6 border-l-4 border-[#5A6B3A] pl-3 flex items-center gap-2 ${className}`}>
            {Icon && <Icon size={20} className="text-[#5A6B3A]" />}
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
            className="text-3xl md:text-4xl font-extrabold text-[#1F1D1B] mb-4 tracking-tight"
        >
            {title}
        </motion.h2>
        <div className="h-1.5 w-20 bg-[#5A6B3A] mx-auto rounded-full"></div>
    </div>
  );
}
