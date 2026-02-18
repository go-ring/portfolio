import React from 'react';
import { SectionHeader } from './common/SectionHeader';

interface SectionProps {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 md:px-12 ${className}`}>
      <div className="max-w-screen-xl mx-auto md:scale-[0.9] md:origin-center">
        {title && (
          <SectionHeader title={title} variant="center" />
        )}
        {children}
      </div>
    </section>
  );
}
