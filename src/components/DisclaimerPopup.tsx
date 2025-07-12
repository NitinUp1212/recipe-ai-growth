
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const DisclaimerPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    
    if (!hasSeenDisclaimer) {
      setIsVisible(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 relative">
        <button
          onClick={handleAgree}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
        
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Important Notice</h2>
          
          <div className="text-gray-600 mb-6 space-y-3">
            <p>
              Please note that <strong>all our services are provided online only</strong>. 
              We operate as a fully virtual digital marketing agency.
            </p>
            
            <p>
              We do not have a physical office for client meetings. All consultations, 
              training sessions, and service delivery are conducted through online platforms.
            </p>
            
            <p>
              Any third-party services or tools are arranged through our trusted partners 
              and vendors as needed for your projects.
            </p>
          </div>
          
          <Button 
            onClick={handleAgree}
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            I Agree & Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
