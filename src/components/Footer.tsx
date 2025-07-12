
import { MessageSquare, Mail, Phone } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info Widget */}
          <div>
            <Logo />
            <p className="text-gray-600 mb-4 mt-4">
              Complete digital marketing solutions that deliver measurable results for your business growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://wa.me/918791363283" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-100 hover:bg-green-200 text-green-700 p-2 rounded-full transition-colors"
              >
                <MessageSquare size={20} />
              </a>
              <a 
                href="mailto:officialunknownhat@gmail.com"
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-full transition-colors"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+918791363283"
                className="bg-purple-100 hover:bg-purple-200 text-purple-700 p-2 rounded-full transition-colors"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Widget */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/all-services" className="text-gray-600 hover:text-primary transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/courses" className="text-gray-600 hover:text-primary transition-colors">
                  Digital Marketing Courses
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-gray-600 hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info Widget */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="text-primary mr-3" />
                <span className="text-gray-600">+91 87913 63283</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-primary mr-3" />
                <span className="text-gray-600">officialunknownhat@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MessageSquare size={16} className="text-primary mr-3" />
                <span className="text-gray-600">WhatsApp Available 24/7</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-primary/10 rounded-lg">
              <p className="text-sm text-gray-700">
                <strong>100% Online Services</strong><br />
                All consultations and services provided virtually
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p className="text-gray-600">
            © 2025 UnKnownHat. All rights reserved. | Digital Marketing Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
