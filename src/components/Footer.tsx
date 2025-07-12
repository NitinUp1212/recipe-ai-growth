
import { NavLink } from "react-router-dom";
import { Mail, Phone, MessageSquare } from "lucide-react";
import Logo from "./Logo";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-gray-100 text-gray-800 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo size="large" className="text-primary mb-4" />
            <p className="mb-4 text-gray-600">We provide 100% online digital marketing solutions to help your business grow.</p>
            <div className="bg-blue-50 text-blue-800 p-3 rounded-md border border-blue-200 mb-4">
              <p className="font-medium">📢 100% Virtual Company!</p>
              <p className="text-sm text-blue-600 mt-1">All services provided online. Meet our founder directly.</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/courses/digital-marketing" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Digital Marketing with AI
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/services/performance-marketing" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Performance Marketing (B2C)
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/services" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  All Digital Marketing Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  onClick={scrollToTop}
                  to="/courses" 
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Institute Courses
                </NavLink>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-4">Contact Founder</h4>
            <div className="space-y-3 mb-4">
              <p className="font-medium text-primary">Nitin Raghav - Founder</p>
              <div className="flex items-center">
                <Phone size={16} className="mr-2 text-primary" />
                <span className="text-gray-600">+91 8791363283</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-2 text-primary" />
                <span className="text-gray-600">officialunknownhat@gmail.com</span>
              </div>
            </div>
            <a 
              href="https://wa.me/918791363283" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white rounded-lg py-2 px-4 w-full transition-colors"
            >
              <MessageSquare size={18} className="mr-2" />
              <span className="font-medium">Chat with Founder</span>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-300 mt-8 pt-6 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
