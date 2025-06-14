
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageSquare } from "lucide-react";
import Logo from "./Logo";
import { motion } from "framer-motion";

const Footer = () => {
  // Scroll to top function when links are clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-12 pb-6 relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-neon blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="large" className="text-white mb-6" />
            <p className="mb-6 text-gray-300">We cook up delicious digital growth strategies with AI + Performance Marketing to help your business thrive online through SEO services and performance marketing campaigns.</p>
            <motion.div 
              className="bg-primary/10 text-neon p-3 rounded-md border border-neon/30 mb-6"
              animate={{ boxShadow: ["0 0 0 rgba(172, 255, 51, 0.1)", "0 0 20px rgba(172, 255, 51, 0.3)", "0 0 0 rgba(172, 255, 51, 0.1)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="font-medium">📢 We are a 100% virtual digital marketing agency!</p>
              <p className="text-sm text-gray-300 mt-1">Serving clients globally with our remote team of SEO and performance marketing experts.</p>
            </motion.div>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.2, color: "#ACFF33" }} href="#" className="text-gray-300 hover:text-neon" aria-label="Facebook - Digital Marketing Agency">
                <Facebook size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, color: "#ACFF33" }} href="#" className="text-gray-300 hover:text-neon" aria-label="Instagram - SEO Services">
                <Instagram size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, color: "#ACFF33" }} href="#" className="text-gray-300 hover:text-neon" aria-label="LinkedIn - Performance Marketing">
                <Linkedin size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, color: "#ACFF33" }} href="#" className="text-gray-300 hover:text-neon" aria-label="Twitter - Digital Marketing Updates">
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4 md:mb-6">Digital Marketing Institute Courses</h4>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/courses/digital-marketing" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">Digital Marketing Mastery Course</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/courses/ai-agent" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">AI Agent Development Course</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/courses/ai-marketing" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">AI for Marketing Course</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/courses" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">View All Digital Marketing Courses</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4 md:mb-6">Contact Our Digital Marketing Agency</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin size={20} className="mr-3 mt-1 text-neon flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">Virtual Office (100% Remote Digital Marketing Company)</span>
              </li>
              <li className="flex items-center group">
                <Phone size={20} className="mr-3 text-neon flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">+91 8791363283, 7055481738</span>
              </li>
              <li className="flex items-center group">
                <Mail size={20} className="mr-3 text-neon flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">officialunknownhat@gmail.com</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/918791363283" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative inline-flex items-center w-full justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-md py-3 px-4 mt-3 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-green-500/30"
                  aria-label="Chat with Digital Marketing Experts on WhatsApp"
                >
                  <span className="absolute -left-4 h-32 w-32 rotate-45 translate-x-0 -translate-y-2 bg-white opacity-[3%] transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"></span>
                  <MessageSquare size={20} className="mr-3 group-hover:animate-bounce" />
                  <span className="font-medium text-lg">Chat for Digital Marketing</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} Digital Marketing Agency - SEO Services & Performance Marketing. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
