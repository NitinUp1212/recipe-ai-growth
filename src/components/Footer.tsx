
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageSquare } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo size="large" className="text-white mb-6" />
            <p className="mb-6 text-gray-300">We cook up delicious growth strategies with AI + Performance to help your business thrive.</p>
            <div className="bg-primary/10 text-neon p-3 rounded-md border border-neon/30 mb-6 animate-pulse">
              <p className="font-medium">📢 We are a 100% virtual company!</p>
              <p className="text-sm text-gray-300 mt-1">Serving clients globally with our remote team of experts.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-neon">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-neon">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-neon">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-neon">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 md:mb-6">Institute Courses</h4>
            <ul className="space-y-3">
              <li>
                <NavLink to="/courses/digital-marketing" className="text-gray-300 hover:text-neon">
                  Digital Marketing Mastery
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses/ai-agent" className="text-gray-300 hover:text-neon">
                  AI Agent Development
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses/ai-marketing" className="text-gray-300 hover:text-neon">
                  AI for Marketing
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="text-gray-300 hover:text-neon">
                  View All Courses
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 md:mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-neon">Home</NavLink>
              </li>
              <li>
                <NavLink to="/ai-agent" className="text-gray-300 hover:text-neon">AI Agent</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-neon">Meet the Chef</NavLink>
              </li>
              <li>
                <NavLink to="/case-studies" className="text-gray-300 hover:text-neon">Taste Test</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-neon">Contact</NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 md:mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-neon flex-shrink-0" />
                <span className="text-gray-300">Virtual Office (100% Remote Company)</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-neon flex-shrink-0" />
                <span className="text-gray-300">+91 8791363283, 7055481738</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-neon flex-shrink-0" />
                <span className="text-gray-300">officialunknownhat@gmail.com</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/918791363283" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative inline-flex items-center w-full justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-md py-3 px-4 mt-3 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-green-500/30"
                >
                  <span className="absolute -left-4 h-32 w-32 rotate-45 translate-x-0 -translate-y-2 bg-white opacity-[3%] transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"></span>
                  <MessageSquare size={20} className="mr-3 animate-bounce" />
                  <span className="font-medium text-lg">Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} UnknownHat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
