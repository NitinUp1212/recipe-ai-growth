
import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Sparkles } from "lucide-react";
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    budget: ""
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct email body
    const emailBody = `
      New Contact Form Submission:
      
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Company: ${formData.company || 'Not provided'}
      Service: ${formData.service || 'Not specified'}
      Budget: ${formData.budget || 'Not specified'}
      
      Message:
      ${formData.message}
    `;
    
    // Send email using mailto link (as a fallback)
    const mailtoLink = `mailto:officialunknownhat@gmail.com?subject=New Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        budget: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Order Your Strategy</h1>
            <p className="text-xl text-muted-foreground">
              Ready to cook up something amazing? Get in touch to discuss your marketing recipe.
            </p>
            <div className="mt-8">
              <a 
                href="https://wa.me/918791363283" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
              >
                <MessageSquare size={20} />
                Chat Now on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Virtual Batch Notice */}
      <section className="py-6 bg-gradient-to-r from-purple-100 via-purple-50 to-blue-100">
        <div className="container-custom">
          <div className="bg-white border border-purple-200 rounded-xl p-6 shadow-lg relative overflow-hidden animate-fade-in">
            {/* Animated elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full opacity-40 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 via-pink-300 to-blue-400"></div>
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-purple-100 p-3 rounded-full">
                <Sparkles className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-purple-800 mb-2 flex items-center">
                  <span>Virtual Learning Experience</span>
                  <span className="inline-block ml-2 px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-700 rounded-full">NEW</span>
                </h3>
                <p className="text-gray-700">
                  All our courses and services are available through <span className="font-medium">virtual batches</span>. 
                  Learn from anywhere with live interactive sessions, personalized attention, and the same high-quality 
                  content as in-person training.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="inline-block px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">Live Sessions</span>
                  <span className="inline-block px-2 py-1 bg-green-50 text-green-600 text-xs rounded-md">24/7 Support</span>
                  <span className="inline-block px-2 py-1 bg-amber-50 text-amber-600 text-xs rounded-md">Interactive Learning</span>
                  <span className="inline-block px-2 py-1 bg-purple-50 text-purple-600 text-xs rounded-md">Recorded Sessions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Office Location</h3>
                    <p className="text-muted-foreground">123 Marketing Street</p>
                    <p className="text-muted-foreground">Digital City, 10001</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Address</h3>
                    <a href="mailto:Contact@unknownhat.in" className="text-primary hover:underline">
                      Contact@unknownhat.in
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone Number</h3>
                    <a href="tel:+918791363283" className="text-primary hover:underline block">
                      +91 8791363283
                    </a>
                    <a href="tel:+917055481738" className="text-primary hover:underline">
                      +91 7055481738
                    </a>
                  </div>
                </div>
                
                <div>
                  <a 
                    href="https://wa.me/918791363283" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-md py-3 px-4 mt-4 w-full transition-colors group relative overflow-hidden"
                  >
                    <span className="absolute -left-4 h-32 w-32 rotate-45 translate-x-0 -translate-y-2 bg-white opacity-[3%] transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"></span>
                    <MessageSquare size={20} className="animate-bounce" />
                    <span className="relative z-10">Chat with Us on WhatsApp</span>
                  </a>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3">Working Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Form */}
            <div className="md:col-span-3">
              <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        Phone Number
                      </label>
                      <Input 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block mb-2 font-medium">
                        Company Name
                      </label>
                      <Input 
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="service" className="block mb-2 font-medium">
                        Service You're Interested In
                      </label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => handleSelectChange("service", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="performance-marketing">Performance Marketing Pie</SelectItem>
                          <SelectItem value="seo">SEO Spice Mix</SelectItem>
                          <SelectItem value="social-media">Social Media Sizzler</SelectItem>
                          <SelectItem value="messaging">WhatsApp & Email Masala</SelectItem>
                          <SelectItem value="ai-agent">AI Agent Sauce</SelectItem>
                          <SelectItem value="website-funnel">Website Funnel Delight</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label htmlFor="budget" className="block mb-2 font-medium">
                        Monthly Budget
                      </label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => handleSelectChange("budget", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-50k">Under ₹50,000</SelectItem>
                          <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="1l-3l">₹1,00,000 - ₹3,00,000</SelectItem>
                          <SelectItem value="3l-5l">₹3,00,000 - ₹5,00,000</SelectItem>
                          <SelectItem value="above-5l">Above ₹5,00,000</SelectItem>
                          <SelectItem value="not-sure">Not Sure Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                      Your Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business goals and challenges"
                      required
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  
                  <p className="text-sm text-center text-muted-foreground">
                    Your information will be sent to officialunknownhat@gmail.com
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We'd love to meet you in person to discuss your marketing strategy
            </p>
          </div>
          
          <div className="bg-white p-2 rounded-xl shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15076.693651170516!2d72.8311566028058!3d19.117145146884373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c676018b43%3A0x75f29a4205098f99!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra%20400050!5e0!3m2!1sen!2sin!4v1691230604932!5m2!1sen!2sin" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Booking Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Prefer a Virtual Meeting?</h2>
            <p className="text-muted-foreground mb-8">
              Schedule a video call with our team to discuss your marketing strategy
            </p>
            <div className="space-x-4">
              <Button size="lg" className="btn-primary">
                Book a Call
              </Button>
              <a 
                href="https://wa.me/918791363283" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded text-lg font-medium transition-colors group relative overflow-hidden"
              >
                <span className="absolute -left-4 h-32 w-32 rotate-45 translate-x-0 -translate-y-2 bg-white opacity-[3%] transition-transform duration-1000 ease-out group-hover:translate-x-[400%]"></span>
                <MessageSquare size={20} className="relative z-10" />
                <span className="relative z-10">Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
