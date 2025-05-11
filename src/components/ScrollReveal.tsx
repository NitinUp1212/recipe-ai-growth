
import { ReactNode, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
  className?: string;
}

const ScrollReveal = ({ 
  children, 
  width = "fit-content", 
  delay = 0.25,
  direction = "up",
  duration = 0.5,
  once = true,
  className = ""
}: ScrollRevealProps) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-100px 0px" });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Define different animation variants based on direction
  const getAnimationVariant = () => {
    switch(direction) {
      case "up":
        return {
          hidden: { y: 30, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case "down":
        return {
          hidden: { y: -30, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
      case "left":
        return {
          hidden: { x: 30, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case "right":
        return {
          hidden: { x: -30, opacity: 0 },
          visible: { x: 0, opacity: 1 }
        };
      case "none":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      default:
        return {
          hidden: { y: 30, opacity: 0 },
          visible: { y: 0, opacity: 1 }
        };
    }
  };

  const variants = getAnimationVariant();

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
      style={{ width }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
