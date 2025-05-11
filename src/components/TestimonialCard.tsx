
import { Star } from "lucide-react";
import { motion } from "framer-motion";

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
    <motion.div 
      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="flex mb-4">
        {stars.map((isFilled, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <Star 
              size={18} 
              className={isFilled ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
            />
          </motion.div>
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">&ldquo;{text}&rdquo;</p>
      <div>
        <h4 className="font-bold">{author}</h4>
        <p className="text-sm text-gray-500">{position}, {company}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
