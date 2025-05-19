
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from '@/hooks/use-toast';
import { Textarea } from "@/components/ui/textarea";

interface BrochureFormProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

const BrochureForm = ({ isOpen, onClose, courseName }: BrochureFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: '',
    experience: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct email body
    const emailBody = `
      New Brochure Download Request:
      
      Course: ${courseName || 'Not specified'}
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Qualification: ${formData.qualification || 'Not specified'}
      Experience: ${formData.experience || 'Not specified'}
      
      Message:
      ${formData.message || 'No message provided'}
    `;
    
    // Send email using mailto link (as a fallback)
    const mailtoLink = `mailto:officialunknownhat@gmail.com?subject=New Brochure Request: ${courseName}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Success!",
        description: "Your brochure request has been submitted. Check your email shortly.",
      });
      onClose();
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        experience: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Download Course Brochure</DialogTitle>
          <DialogDescription>
            {courseName ? `Complete this form to receive the "${courseName}" brochure in your email.` : 'Complete this form to receive the course brochure in your email.'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Full Name <span className="text-red">*</span></Label>
              <Input 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="Enter your full name" 
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email">Email <span className="text-red">*</span></Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                placeholder="you@example.com" 
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone Number <span className="text-red">*</span></Label>
              <Input 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                required 
                placeholder="Your phone number" 
              />
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="qualification">Highest Qualification <span className="text-red">*</span></Label>
              <Select 
                onValueChange={(value) => handleSelectChange('qualification', value)}
                defaultValue={formData.qualification}
              >
                <SelectTrigger id="qualification">
                  <SelectValue placeholder="Select qualification" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high_school">High School</SelectItem>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="experience">Work Experience <span className="text-red">*</span></Label>
              <Select 
                onValueChange={(value) => handleSelectChange('experience', value)}
                defaultValue={formData.experience}
              >
                <SelectTrigger id="experience">
                  <SelectValue placeholder="Select experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fresher">Fresher</SelectItem>
                  <SelectItem value="0-2">0-2 Years</SelectItem>
                  <SelectItem value="3-5">3-5 Years</SelectItem>
                  <SelectItem value="5-10">5-10 Years</SelectItem>
                  <SelectItem value="10+">10+ Years</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="message">Message (Optional)</Label>
              <Textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Any specific queries or requirements..."
                className="resize-none"
                rows={3}
              />
            </div>
          </div>
          
          <div className="flex justify-end gap-3">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Download Brochure"}
            </Button>
          </div>
          
          <p className="text-xs text-center text-muted-foreground">
            Your information will be sent to officialunknownhat@gmail.com
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BrochureForm;
