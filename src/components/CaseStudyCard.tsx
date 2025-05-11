
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  id: string;
  title: string;
  industry: string;
  service: string;
  metrics: {
    label: string;
    value: string;
  }[];
  image?: string;
  className?: string;
}

const CaseStudyCard = ({ 
  id, 
  title, 
  industry, 
  service, 
  metrics, 
  image, 
  className 
}: CaseStudyCardProps) => {
  return (
    <div className={cn("recipe-card group", className)}>
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg h-48">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
      
      <div className="flex flex-wrap gap-2 mb-3">
        <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
          {industry}
        </span>
        <span className="text-xs bg-neon/20 text-black rounded-full px-3 py-1">
          {service}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-gray-50 p-3 rounded-lg">
            <p className="text-sm text-gray-500">{metric.label}</p>
            <p className="text-lg font-bold">{metric.value}</p>
          </div>
        ))}
      </div>
      
      <NavLink 
        to={`/case-studies/${id}`}
        className="inline-flex items-center text-primary font-medium hover:underline"
      >
        Read Case Study
        <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </NavLink>
    </div>
  );
};

export default CaseStudyCard;
