import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button({ 
  children, 
  className = '', 
  variant = 'outline', 
  size = 'md',
  icon,
  href,
  onClick,
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-full font-medium transition-all flex items-center gap-2 justify-center";
  
  const variants = {
    outline: "bg-transparent text-gray-400 border border-white/10 hover:text-white hover:bg-white/5 hover:border-white/30",
    ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/10",
    glass: "bg-white/5 text-gray-300 hover:text-[#9FAA7C] hover:bg-white/10 hover:border-[#9FAA7C]/30 border border-white/10"
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName} {...(props as any)}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClassName} onClick={onClick} {...props}>
      {icon}
      {children}
    </button>
  );
}
