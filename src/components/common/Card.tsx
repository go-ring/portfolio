import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export function Card({ children, className = '', onClick, hoverEffect = false }: CardProps) {
  const baseStyles = "bg-white border border-[#D5CEC4] transition-all duration-300 shadow-sm";
  
  const hoverStyles = hoverEffect 
    ? "hover:-translate-y-1 hover:border-[#5A6B3A] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] cursor-pointer" 
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
