
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface RecipeCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  ingredients?: string[];
}

const RecipeCard = ({ title, description, icon, link, ingredients }: RecipeCardProps) => {
  return (
    <div className="recipe-card recipe-card-hover group">
      <div className="mb-5 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
      
      {ingredients && ingredients.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Ingredients:</h4>
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <span 
                key={index}
                className="text-xs bg-muted rounded-full px-3 py-1 text-foreground"
              >
                {ingredient}
              </span>
            ))}
          </div>
        </div>
      )}
      
      <NavLink 
        to={link}
        className="mt-auto inline-flex items-center text-primary font-medium hover:underline"
      >
        See Recipe
        <ChevronRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </NavLink>
    </div>
  );
};

export default RecipeCard;
