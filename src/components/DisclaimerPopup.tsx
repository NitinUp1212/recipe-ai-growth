
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const DisclaimerPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      setShowPopup(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={handleAgree}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>
        
        <div className="text-center">
          <h3 className="text-lg font-bold mb-4 text-primary">Important Notice</h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            सभी services हम online ही provide करते हैं। हमारा कोई physical office नहीं है। 
            Photo/video shoot की जरूरत होने पर हम 3rd party के through करवाते हैं।
          </p>
          <Button onClick={handleAgree} className="w-full">
            I Agree
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
