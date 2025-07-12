
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
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-neon blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-primary blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="large" className="text-white mb-6" />
            <p className="mb-6 text-gray-300">We cook up delicious growth strategies with AI + Performance to help your business thrive.</p>
            <motion.div 
              className="bg-primary/10 text-neon p-3 rounded-md border border-neon/30 mb-6"
              animate={{ boxShadow: ["0 0 0 rgba(172, 255, 51, 0.1)", "0 0 20px rgba(172, 255, 51, 0.3)", "0 0 0 rgba(172, 255, 51, 0.1)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="font-medium">📢 We are a 100% virtual company!</p>
              <p className="text-sm text-gray-300 mt-1">Serving clients globally with our remote team of experts.</p>
            </motion.div>
            <div className="flex space-x-4">
              <motion.a whileHover={{ scale: 1.2, color: "#ACFF33" }} href="#" className="text-gray-300 hover:text-neon">
                <Facebook size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, color: "#ACFF33" }} href="#" className="text-gray-300 hover:text-neon">
                <Instagram size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, color: "#ACFF33" }} href="#" className="text-gray-300 hover:text-neon">
                <Linkedin size={20} />
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, color: "#ACFF33" }} href="#" className="text-gray-300 hover:text-neon">
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4 md:mb-6">Institute Courses</h4>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/courses/digital-marketing" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">Digital Marketing Mastery</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/courses/ai-agent" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">AI Agent Development</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/courses/ai-marketing" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">AI for Marketing</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/courses" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">View All Courses</span>
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
            <h4 className="font-bold text-lg mb-4 md:mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/all-services" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">All Services</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/services/laptop-services" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">Laptop Services</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/services/property-dealing" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">Property Dealing</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/portfolio" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">Our Portfolio</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">Home</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/ai-agent" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">AI Agent</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/about" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">Meet the Chef</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/case-studies" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">Taste Test</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/contact" 
                  className="text-gray-300 hover:text-neon relative group overflow-hidden"
                >
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold text-lg mb-4 md:mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <MapPin size={20} className="mr-3 mt-1 text-neon flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-gray-300 group-hover:text-white transition-colors">Virtual Office (100% Remote Company)</span>
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
                >
                  <span className="absolute -left-4 h-32 w-32 rotate-45 translate-x-0 -translate-y-2 bg-white opacity-[3%] transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"></span>
                  <MessageSquare size={20} className="mr-3 group-hover:animate-bounce" />
                  <span className="font-medium text-lg">Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
