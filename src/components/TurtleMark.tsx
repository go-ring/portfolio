interface TurtleMarkProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function TurtleMark({ size = 22, className = "", strokeWidth = 2 }: TurtleMarkProps) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth} 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Head: Protruding from top */}
      <path d="M12 6V4a2 2 0 1 1 0 4" />
      <path d="M12 4a2 2 0 1 0 0 4" style={{ display: 'none' }} /> {/* Alternative head logic if needed */}
      <circle cx="12" cy="4" r="2" />

      {/* Shell: Rounded body */}
      <rect x="5" y="7" width="14" height="14" rx="5" ry="5" />

      {/* Shell Pattern: Hexagon-like lines for structure */}
      <path d="M12 7v14" />
      <path d="M5 12h14" />
      <path d="M5 16h14" />

      {/* Feet: Subtle indicators at bottom corners */}
      <path d="M4 19l-1 1" />
      <path d="M20 19l1 1" />
    </svg>
  );
}

export function TurtleMarkMinimal({ size = 22, className = "", strokeWidth = 2 }: TurtleMarkProps) {
    return (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={strokeWidth} 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={className}
      >
        {/* Head */}
        <path d="M12 2v4" />
        
        {/* Shell - Rounded Hexagon Shape */}
        <path d="M12 6c-4 0-7 2.5-7 7s3 7 7 7 7-2.5 7-7-3-7-7-7z" />
        
        {/* Inner Shell Pattern - Simple Y or Lines */}
        <path d="M12 6v14" />
        <path d="M6 13h12" />
        
        {/* Legs - Minimal */}
        <path d="M5 18l-2 2" />
        <path d="M19 18l2 2" />
      </svg>
    );
}

// Final Selected Design based on "Rounded Hexagon + 3-5 lines + Head + Legs"
export function TurtleMarkFinal({ size = 22, className = "", strokeWidth = 2 }: TurtleMarkProps) {
    return (
        <svg 
          width={size} 
          height={size} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth={strokeWidth} 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className={className}
        >
          {/* Head: Simple rounded protrusion */}
          <path d="M12 5V3" />
          
          {/* Shell: Rounded Oval/Hex blend */}
          <rect x="6" y="5" width="12" height="14" rx="6" />

          {/* Shell Pattern: Modern geometric divide */}
          <path d="M12 5v14" />
          <path d="M6 12h12" />

          {/* Legs: Minimal slanted strokes */}
          <path d="M5 17l-2 2" />
          <path d="M19 17l2 2" />
          <path d="M5 7l-2-2" />
          <path d="M19 7l2-2" />
        </svg>
    );
}
