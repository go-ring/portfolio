import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export function Card({ children, className = '', onClick, hoverEffect = false }: CardProps) {
  const baseStyles = "bg-surface border border-white/5 transition-all duration-300";
  
  const hoverStyles = hoverEffect 
    ? "hover:-translate-y-[2px] hover:border-white/20 hover:shadow-lg cursor-pointer" 
    : "";

  return (
    <div 
      className={`${baseStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
