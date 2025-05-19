
import { useState, useEffect } from "react";
import { MessageSquare, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState<{type: string, text: string}[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showInitialOptions, setShowInitialOptions] = useState(true);
  
  const options = [
    { id: 1, text: "Ads" },
    { id: 2, text: "SEO" },
    { id: 3, text: "Website" },
    { id: 4, text: "WhatsApp Marketing" }
  ];
  
  useEffect(() => {
    if (isOpen && conversation.length === 0) {
      setConversation([{
        type: "bot",
        text: "Aapko kis recipe mein interest hai?"
      }]);
    }
  }, [isOpen]);
  
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOptionClick = (optionId: number) => {
    setSelectedOption(optionId);
    setShowInitialOptions(false);
    
    const option = options.find(o => o.id === optionId);
    if (option) {
      setConversation(prev => [...prev, 
        { type: "user", text: option.text },
        { type: "bot", text: `Great! Let me tell you more about our ${option.text} services. Would you like a free audit of your current strategy?` }
      ]);
    }
  };
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setConversation(prev => [...prev, { type: "user", text: message }]);
    setMessage("");
    
    // Simulate bot response
    setTimeout(() => {
      setConversation(prev => [...prev, { 
        type: "bot", 
        text: "Thanks for your message! One of our marketing chefs will get back to you soon. Would you like to schedule a free consultation?" 
      }]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Button */}
      <button 
        className={`fixed bottom-6 right-6 z-40 transition-all transform ${isOpen ? 'rotate-90' : 'group animate-pulse hover:animate-none'}`}
        onClick={toggleChatbot}
      >
        <div className="relative">
          {!isOpen && (
            <div className="absolute -top-10 right-0 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium shadow-md transform transition-all opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
              Chat with us!
            </div>
          )}
          <div className={`bg-gradient-to-r from-green-500 via-green-600 to-green-500 text-white rounded-full p-4 shadow-lg transition-all hover:shadow-xl ${isOpen ? '' : 'group-hover:scale-110'}`}>
            {isOpen ? <X size={24} /> : (
              <div className="relative">
                <MessageSquare size={24} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">1</span>
              </div>
            )}
          </div>
          {!isOpen && (
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-black opacity-20 rounded-full blur-sm"></span>
          )}
        </div>
      </button>
      
      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-xl z-40 overflow-hidden border border-gray-200 animate-fade-in">
          <div className="bg-gradient-to-r from-primary to-blue-600 p-4 text-white">
            <h3 className="font-bold">FlavorDish Assistant</h3>
            <p className="text-sm opacity-80">We'll help you find the perfect recipe</p>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 flex flex-col gap-3">
            {conversation.map((msg, index) => (
              <div 
                key={index}
                className={`${msg.type === "bot" ? "self-start bg-gray-100" : "self-end bg-primary text-white"} rounded-xl px-4 py-2 max-w-[80%]`}
              >
                {msg.text}
              </div>
            ))}
            
            {showInitialOptions && (
              <div className="grid grid-cols-2 gap-2 mt-2">
                {options.map(option => (
                  <Button 
                    key={option.id} 
                    onClick={() => handleOptionClick(option.id)}
                    variant="outline"
                    className="text-primary hover:bg-primary/10"
                  >
                    {option.text}
                  </Button>
                ))}
              </div>
            )}
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input 
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleSendMessage();
                }}
              />
              <Button 
                onClick={handleSendMessage}
                className="rounded-full bg-primary hover:bg-primary/90 aspect-square p-2"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
