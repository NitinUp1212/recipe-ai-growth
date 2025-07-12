
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const StartupPackage = () => {
  const packageFeatures = [
    "Website Design & Development",
    "Social Media Setup & Strategy",
    "Google My Business Optimization",
    "Basic SEO Implementation",
    "Email Marketing Setup",
    "WhatsApp Business Integration",
    "Monthly Performance Reports",
    "3 Months of Support"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Startup Growth Package</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to establish your digital presence and start generating leads
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="space-y-4">
                {packageFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 rounded-full p-1">
                      <Check size={16} className="text-green-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 text-white flex flex-col justify-center">
              <div className="text-center">
                <div className="mb-4">
                  <span className="text-lg opacity-90">Starting from</span>
                  <div className="text-4xl font-bold">₹25,000</div>
                  <span className="text-sm opacity-90">per month</span>
                </div>
                
                <p className="mb-8 opacity-90">
                  Perfect for startups and small businesses looking to establish their digital presence
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/918791363283" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg" 
                      className="w-full bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg font-medium"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </a>
                  
                  <p className="text-sm opacity-75">
                    Free consultation • No setup fees • Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupPackage;
