
import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = ({ className = "", size = "normal" }: { className?: string, size?: "small" | "normal" | "large" }) => {
  // Size classes mapping for the image
  const imageSizes = {
    small: "24",
    normal: "32",
    large: "40"
  };

  return (
    <NavLink to="/" className={`font-display flex items-center ${className}`}>
      <div className="relative">
        <img 
          src="/lovable-uploads/b3dcd0e4-700e-4129-8008-8cea8de73eea.png"
          alt="UnknownHat Logo"
          width={imageSizes[size]}
          height={imageSizes[size]}
          className="animate-pulse-slow hover:scale-110 transition-transform duration-300"
        />
      </div>
    </NavLink>
  );
};

export default Logo;
