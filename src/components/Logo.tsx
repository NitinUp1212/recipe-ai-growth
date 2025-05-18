
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
        >
          {/* Hat silhouette */}
          <path 
            d="M5 30C5 25 10 20 20 20C30 20 35 25 35 30H5Z" 
            fill="#9b87f5" 
          />
          <path 
            d="M12 20C12 15 15 10 20 10C25 10 28 15 28 20" 
            stroke="#9b87f5" 
            strokeWidth="2.5"
            strokeLinecap="round"
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
      <span className={sizeClasses[size]}>
        UnKnownHat<span className="text-neon">.</span>
      </span>
    </NavLink>
  );
};

export default Logo;
