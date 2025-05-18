
import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = ({ className = "", size = "normal" }: { className?: string, size?: "small" | "normal" | "large" }) => {
  // Size classes mapping
  const sizeClasses = {
    small: "text-xl",
    normal: "text-2xl",
    large: "text-3xl"
  };

  return (
    <NavLink to="/" className={`font-display font-bold flex items-center ${className}`}>
      <div className="relative mr-2">
        <svg 
          width={size === "small" ? "24" : size === "normal" ? "32" : "40"} 
          height={size === "small" ? "24" : size === "normal" ? "32" : "40"} 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="animate-pulse-slow"
        >
          {/* Background hexagon */}
          <path 
            d="M20 4L33.6603 12V28L20 36L6.33975 28V12L20 4Z" 
            fill="#9b87f5" 
            fillOpacity="0.2"
          />
          
          {/* Hat top */}
          <path 
            d="M8 30C8 25 15 20 20 20C25 20 32 25 32 30H8Z" 
            fill="#9b87f5" 
          />
          
          {/* Hat band */}
          <path 
            d="M12 22C12 22 15 17.5 20 17.5C25 17.5 28 22 28 22" 
            stroke="#7E69AB" 
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          
          {/* Star decoration */}
          <path 
            d="M26 25L27.5 23L29 25L27.5 27L26 25Z" 
            fill="white" 
          />
          
          {/* Question mark */}
          <path 
            d="M19 15C19 13.8954 19.8954 13 21 13C22.1046 13 23 13.8954 23 15C23 16.1046 22.1046 17 21 17V18" 
            stroke="white" 
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="21" cy="21" r="1" fill="white" />
        </svg>
      </div>
      <span className={`${sizeClasses[size]} relative`}>
        UnKnownHat
        <span className="text-neon absolute -top-1 -right-1 text-xs animate-ping">™</span>
      </span>
    </NavLink>
  );
};

export default Logo;
