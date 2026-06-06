import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
}

export function Badge({ children, className = '', variant = 'default' }: BadgeProps) {
  const baseStyles = "px-2 py-1 text-xs rounded-md font-medium whitespace-nowrap transition-colors";
  
  const variants = {
    default: "bg-[#EBE5DC] text-[#4A433D] border border-[#D5CEC4]",
    outline: "bg-transparent text-[#5C554F] border border-[#D5CEC4]",
    ghost: "bg-transparent text-[#5C554F] border-none hover:text-[#1F1D1B]"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
