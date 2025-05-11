
import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">FlavorDish<span className="text-neon">.</span></h3>
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
            <h4 className="font-bold text-lg mb-6">Recipe Book</h4>
            <ul className="space-y-3">
              <li>
                <NavLink to="/services/performance-marketing" className="text-gray-300 hover:text-neon">
                  Performance Marketing Pie
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/seo" className="text-gray-300 hover:text-neon">
                  SEO Spice Mix
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/social-media" className="text-gray-300 hover:text-neon">
                  Social Media Sizzler
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/messaging" className="text-gray-300 hover:text-neon">
                  WhatsApp & Email Masala
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/ai-agent" className="text-gray-300 hover:text-neon">
                  AI Agent Sauce
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/website-funnel" className="text-gray-300 hover:text-neon">
                  Website Funnel Delight
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-neon">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-neon">Meet the Chef</NavLink>
              </li>
              <li>
                <NavLink to="/case-studies" className="text-gray-300 hover:text-neon">Taste Test</NavLink>
              </li>
              <li>
                <NavLink to="/ai-agent" className="text-gray-300 hover:text-neon">AI Agent</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-neon">Contact</NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-neon" />
                <span className="text-gray-300">123 Marketing Street, Digital City, 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-neon" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-neon" />
                <span className="text-gray-300">hello@flavordish.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FlavorDish. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
