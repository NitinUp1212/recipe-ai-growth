
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
  variant?: "primary" | "secondary" | "neon";
  className?: string;
  showChatButton?: boolean;
}

const CallToAction = ({
  title = "Ready to Cook Your Growth Strategy?",
  subtitle = "Get a free audit and recipe recommendation for your business",
  buttonText = "Get My Strategy Now",
  buttonUrl = "/contact",
  variant = "primary",
  className = "",
  showChatButton = true
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
          <div className="flex flex-wrap justify-center gap-4">
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
            
            {showChatButton && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: [0, -2, 2, -2, 0],
                  transition: {
                    rotate: { repeat: Infinity, duration: 0.5, repeatDelay: 3 }
                  }
                }}
              >
                <a 
                  href="https://wa.me/918791363283" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-green-500 via-green-600 to-green-500 px-8 py-6 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:bg-gradient-to-l hover:shadow-green-500/30 hover:shadow-xl"
                >
                  <span className="absolute -left-4 h-32 w-32 rotate-45 translate-x-0 -translate-y-2 bg-white opacity-[3%] transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"></span>
                  <MessageSquare size={20} className="animate-pulse" />
                  <span className="relative">Chat Now</span>
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
