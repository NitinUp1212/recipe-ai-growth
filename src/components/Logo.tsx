
import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Logo = ({ className = "", size = "normal" }: { className?: string, size?: "small" | "normal" | "large" }) => {
  // Size classes mapping for the image
  const imageSizes = {
    small: "120",
    normal: "160",
    large: "200"
  };

  return (
    <NavLink to="/" className={`font-display flex items-center ${className}`}>
      <motion.div 
        className="relative"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.img 
          src="/lovable-uploads/fa67e0cd-6db5-44e6-a832-d3e30a8d70f1.png"
          alt="UnknownHat Logo"
          width={imageSizes[size]}
          height="auto"
          className="hover:shadow-lg transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </NavLink>
  );
};

export default Logo;
