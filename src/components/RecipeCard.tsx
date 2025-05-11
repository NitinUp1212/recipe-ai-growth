
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface RecipeCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  ingredients?: string[];
}

const RecipeCard = ({ title, description, icon, link, ingredients }: RecipeCardProps) => {
  return (
    <motion.div 
      className="recipe-card group" 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)", 
        borderColor: "#ACFF33"
      }}
    >
      <motion.div 
        className="mb-5 text-primary"
        whileHover={{ 
          scale: 1.1, 
          rotate: [0, -10, 10, -10, 0],
          transition: { duration: 0.5 }
        }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      
      {ingredients && ingredients.length > 0 && (
        <motion.div 
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Ingredients:</h4>
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <motion.span 
                key={index}
                className="text-xs bg-muted rounded-full px-3 py-1 text-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + (index * 0.1) }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(172, 255, 51, 0.2)"
                }}
              >
                {ingredient}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
      
      <NavLink 
        to={link}
        className="mt-auto inline-flex items-center text-primary font-medium hover:underline"
      >
        <motion.div 
          className="flex items-center"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          See Recipe
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          >
            <ChevronRight size={16} className="ml-1" />
          </motion.div>
        </motion.div>
      </NavLink>
    </motion.div>
  );
};

export default RecipeCard;
