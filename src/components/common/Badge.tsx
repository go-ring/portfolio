import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
}

export function Badge({ children, className = '', variant = 'default' }: BadgeProps) {
  const baseStyles = "px-2 py-1 text-xs rounded-md font-medium whitespace-nowrap transition-colors";
  
  const variants = {
    default: "bg-white/5 text-gray-400 border border-white/5",
    outline: "bg-transparent text-gray-400 border border-white/10",
    ghost: "bg-transparent text-gray-400 border-none hover:text-gray-200"
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
