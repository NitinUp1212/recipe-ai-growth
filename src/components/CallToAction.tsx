
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
  variant?: "primary" | "secondary" | "neon";
  className?: string;
}

const CallToAction = ({
  title = "Ready to Cook Your Growth Strategy?",
  subtitle = "Get a free audit and recipe recommendation for your business",
  buttonText = "Get My Strategy Now",
  buttonUrl = "/contact",
  variant = "primary",
  className = ""
}: CTAProps) => {
  const getBtnClass = () => {
    switch(variant) {
      case "neon": return "btn-neon";
      case "secondary": return "btn-secondary";
      default: return "btn-primary";
    }
  };
  
  return (
    <section className={`py-16 ${className}`}>
      <div className="container-custom">
        <motion.div 
          className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full opacity-10"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 10, 0],
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-40 h-40 bg-neon rounded-full opacity-10"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -10, 0],
              y: [0, 10, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
          
          <motion.h2 
            className="text-2xl md:text-4xl font-bold mb-4 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="mb-8 max-w-2xl mx-auto text-gray-200 relative z-10"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <NavLink to={buttonUrl}>
              <Button className={`${getBtnClass()} text-lg px-8 py-6`}>
                {buttonText}
              </Button>
            </NavLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
