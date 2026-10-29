import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'header';
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-11 sm:h-13 w-auto',
  variant = 'header',
}) => {
  const isDarkBg = variant === 'light'; // In footer or dark background

  if (isDarkBg) {
    return (
      <div className="inline-block bg-white rounded-xl p-2.5 shadow-md border border-brand-leaf/20">
        <img
          src="/images/meenakshi-traders-logo.webp"
          alt="Meenakshi Traders Official Logo"
          className={`object-contain ${className}`}
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center select-none py-1">
      <img
        src="/images/meenakshi-traders-logo.webp"
        alt="Meenakshi Traders Official Logo"
        className={`object-contain max-w-[240px] sm:max-w-[280px] md:max-w-[320px] ${className}`}
        loading="eager"
      />
    </div>
  );
};
