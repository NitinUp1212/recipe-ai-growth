
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ShapeType = "circle" | "square" | "donut" | "triangle" | "blob";

interface AnimatedShapeProps {
  type?: ShapeType;
  color?: string;
  size?: string;
  positionClass?: string;
  delay?: number;
  duration?: number;
  className?: string;
}

const AnimatedShape = ({
  type = "circle",
  color = "bg-neon/30",
  size = "w-16 h-16",
  positionClass = "top-10 right-10",
  delay = 0,
  duration = 8,
  className = ""
}: AnimatedShapeProps) => {
  
  const getShapeClass = () => {
    switch(type) {
      case "square":
        return "rounded-md";
      case "donut":
        return "rounded-full border-8 border-current bg-transparent";
      case "triangle":
        // Triangle is handled differently with clip path
        return "clip-path-triangle";
      case "blob":
        return "rounded-blob";
      case "circle":
      default:
        return "rounded-full";
    }
  };
  
  return (
    <motion.div
      className={cn(
        "absolute opacity-60 blur-sm", 
        color, 
        size, 
        positionClass, 
        getShapeClass(),
        className,
        { "clip-path-triangle": type === "triangle" }
      )}
      animate={{ 
        scale: [1, 1.2, 1],
        rotate: [0, 10, -10, 0],
        x: [0, 10, -10, 0],
        y: [0, -10, 10, 0],
      }}
      transition={{ 
        duration, 
        repeat: Infinity,
        repeatType: "reverse",
        delay,
        ease: "easeInOut"
      }}
      style={type === "triangle" ? { 
        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" 
      } : undefined}
    />
  );
};

export default AnimatedShape;
