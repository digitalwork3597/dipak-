import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'color';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = 'h-10', 
  variant = 'color',
  showTagline = true 
}) => {
  // Color configuration according to variant
  const textColor = variant === 'light' ? '#FFFFFF' : '#1E293B'; // White or Dark Navy
  const taglineColor = variant === 'light' ? '#CBD5E1' : '#64748B'; // Muted
  const accentColor = '#D97706'; // Warm Amber/Gold
  const leafColor = '#16A34A'; // Forest Green accent

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <svg 
        viewBox="0 0 200 52" 
        className="h-full w-auto object-contain"
        aria-label="BORCELLE Pet Nutrition Logo"
      >
        {/* Organic Paw & Leaf Symbol */}
        <g id="logo-mark">
          {/* Main Paw Pad / Shield */}
          <path 
            d="M 18 28 C 12 28 8 33 11 39 C 14 45 22 45 25 39 C 28 33 24 28 18 28 Z" 
            fill={accentColor} 
          />
          {/* Paw Toes */}
          <circle cx="10" cy="23" r="3.2" fill={accentColor} />
          <circle cx="16" cy="18" r="3.2" fill={accentColor} />
          <circle cx="23" cy="19" r="3.2" fill={accentColor} />
          {/* Organic Leaf Accent */}
          <path 
            d="M 26 15 C 32 10 35 16 32 21 C 28 23 24 20 26 15 Z" 
            fill={leafColor} 
          />
        </g>

        {/* Brand Name Typography */}
        <text 
          x="42" 
          y="32" 
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
          fontWeight="800" 
          fontSize="24" 
          letterSpacing="1.5" 
          fill={textColor}
        >
          BORCELLE
        </text>

        {/* Tagline */}
        {showTagline && (
          <text 
            x="43" 
            y="45" 
            fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" 
            fontWeight="600" 
            fontSize="8.5" 
            letterSpacing="2.5" 
            fill={taglineColor}
          >
            PET NUTRITION
          </text>
        )}
      </svg>
    </div>
  );
};
