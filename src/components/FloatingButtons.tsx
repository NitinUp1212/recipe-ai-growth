
import { Phone, MessageSquare } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col gap-3">
      {/* Call Now Button */}
      <a
        href="tel:+918791363283"
        className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Call Now"
      >
        <Phone size={24} className="group-hover:scale-110 transition-transform" />
      </a>
      
      {/* Chat Now Button */}
      <a
        href="https://wa.me/918791363283"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={24} className="group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default FloatingButtons;
