
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
        <img 
          src="/lovable-uploads/b3dcd0e4-700e-4129-8008-8cea8de73eea.png"
          alt="UnknownHat Logo"
          width={size === "small" ? "24" : size === "normal" ? "32" : "40"}
          height={size === "small" ? "24" : size === "normal" ? "32" : "40"}
          className="animate-pulse-slow"
        />
      </div>
      <span className={`${sizeClasses[size]} relative`}>
        UnKnownHat
        <span className="text-neon absolute -top-1 -right-1 text-xs animate-ping">™</span>
      </span>
    </NavLink>
  );
};

export default Logo;
