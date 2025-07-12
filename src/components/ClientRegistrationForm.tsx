
import { useState } from "react";
import { X, User, Mail, Phone, Building, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

interface ClientRegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
  formType: string;
}

const ClientRegistrationForm = ({ isOpen, onClose, formType }: ClientRegistrationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    businessType: "",
    services: [],
    budget: "",
    message: "",
    consultationType: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service) 
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct email body
    const emailBody = `
      New ${formType} Request:
      
      Client Details:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Company: ${formData.company || 'Individual'}
      Business Type: ${formData.businessType || 'Not specified'}
      
      Services Interested:
      ${formData.services.length > 0 ? formData.services.join(', ') : 'Not specified'}
      
      Budget Range: ${formData.budget || 'Not specified'}
      Consultation Type: ${formData.consultationType || 'Not specified'}
      
      Message:
      ${formData.message}
      
      Form Type: ${formType}
      Submission Time: ${new Date().toLocaleString()}
    `;
    
    // Send email using mailto link
    const mailtoLink = `mailto:officialunknownhat@gmail.com?subject=${encodeURIComponent(`${formType} - ${formData.name}`)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
    
    // Also send a copy to client
    const clientEmailBody = `
      Thank you for your interest in our services!
      
      We have received your ${formType} request and will get back to you within 24 hours.
      
      Your Details:
      Name: ${formData.name}
      Email: ${formData.email}
      Services: ${formData.services.join(', ')}
      
      Our team will contact you soon for further discussion.
      
      Best regards,
      UnknownHat Team
    `;
    
    const clientMailtoLink = `mailto:${formData.email}?subject=${encodeURIComponent('Thank you for your inquiry - UnknownHat')}&body=${encodeURIComponent(clientEmailBody)}`;
    setTimeout(() => window.open(clientMailtoLink, '_blank'), 1000);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Registration successful!",
        description: "We'll contact you within 24 hours. Check your email for confirmation.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        businessType: "",
        services: [],
        budget: "",
        message: "",
        consultationType: ""
      });
      
      setIsSubmitting(false);
      onClose();
    }, 1500);
  };

  const services = [
    "SEO Services",
    "Performance Marketing", 
    "Social Media Marketing",
    "WhatsApp & Email Marketing",
    "AI Agent Development",
    "Website & Funnel Development",
    "B2C Performance Package"
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold">{formType}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X size={20} />
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">
                <User size={16} className="inline mr-2" />
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium">
                <Mail size={16} className="inline mr-2" />
                Email <span className="text-red-500">*</span>
              </label>
              <Input 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">
                <Phone size={16} className="inline mr-2" />
                Phone Number <span className="text-red-500">*</span>
              </label>
              <Input 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                required
              />
            </div>
            
            <div>
              <label className="block mb-2 font-medium">
                <Building size={16} className="inline mr-2" />
                Company/Business Name
              </label>
              <Input 
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>
          </div>

          {/* Business Type */}
          <div>
            <label className="block mb-2 font-medium">Business Type</label>
            <Select
              value={formData.businessType}
              onValueChange={(value) => handleSelectChange("businessType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your business type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="b2c">B2C (Business to Consumer)</SelectItem>
                <SelectItem value="b2b">B2B (Business to Business)</SelectItem>
                <SelectItem value="both">Both B2B & B2C</SelectItem>
                <SelectItem value="startup">Startup</SelectItem>
                <SelectItem value="individual">Individual/Freelancer</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Services Interest */}
          <div>
            <label className="block mb-3 font-medium">Services You're Interested In</label>
            <div className="grid sm:grid-cols-2 gap-2">
              {services.map((service) => (
                <label key={service} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceToggle(service)}
                    className="rounded"
                  />
                  <span className="text-sm">{service}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Budget & Consultation Type */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium">Monthly Budget Range</label>
              <Select
                value={formData.budget}
                onValueChange={(value) => handleSelectChange("budget", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-25k">Under ₹25,000</SelectItem>
                  <SelectItem value="25k-50k">₹25,000 - ₹50,000</SelectItem>
                  <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                  <SelectItem value="1l-3l">₹1,00,000 - ₹3,00,000</SelectItem>
                  <SelectItem value="above-3l">Above ₹3,00,000</SelectItem>
                  <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block mb-2 font-medium">Preferred Consultation</label>
              <Select
                value={formData.consultationType}
                onValueChange={(value) => handleSelectChange("consultationType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose consultation type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="whatsapp">WhatsApp Chat</SelectItem>
                  <SelectItem value="phone">Phone Call</SelectItem>
                  <SelectItem value="google-meet">Google Meet</SelectItem>
                  <SelectItem value="email">Email Discussion</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">
              <MessageSquare size={16} className="inline mr-2" />
              Your Message <span className="text-red-500">*</span>
            </label>
            <Textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your business goals and requirements..."
              required
              rows={4}
            />
          </div>
          
          {/* Virtual Service Notice */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> All our services are provided virtually. We use Google Meet for consultations 
              and provide complete online support throughout your digital marketing journey.
            </p>
          </div>
          
          <Button 
            type="submit" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : `Submit ${formType}`}
          </Button>
          
          <p className="text-sm text-center text-muted-foreground">
            Your information will be sent to both you and our team for follow-up
          </p>
        </form>
      </div>
    </div>
  );
};

export default ClientRegistrationForm;
