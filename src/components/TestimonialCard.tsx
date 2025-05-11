
import { Star } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const TestimonialCard = ({ text, author, position, company, rating }: TestimonialCardProps) => {
  const stars = Array(5).fill(0).map((_, i) => i < rating);
  
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
      <div className="flex mb-4">
        {stars.map((isFilled, index) => (
          <Star 
            key={index} 
            size={18} 
            className={isFilled ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">&ldquo;{text}&rdquo;</p>
      <div>
        <h4 className="font-bold">{author}</h4>
        <p className="text-sm text-gray-500">{position}, {company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
