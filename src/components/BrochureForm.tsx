
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from '@/hooks/use-toast';

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
    course: courseName || ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
      
      Course: ${formData.course || courseName || 'Not specified'}
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Qualification: ${formData.qualification || 'Not specified'}
    `;
    
    // Send email using mailto link (as a fallback)
    const mailtoLink = `mailto:officialunknownhat@gmail.com?subject=New Brochure Request: ${formData.course || courseName}&body=${encodeURIComponent(emailBody)}`;
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
        course: ''
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
              <Label htmlFor="course">Course Interested In <span className="text-red">*</span></Label>
              <Select 
                onValueChange={(value) => handleSelectChange('course', value)}
                defaultValue={formData.course || courseName}
              >
                <SelectTrigger id="course">
                  <SelectValue placeholder="Select course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Digital Marketing Mastery">Digital Marketing Mastery</SelectItem>
                  <SelectItem value="AI for Marketing">AI for Marketing</SelectItem>
                  <SelectItem value="AI Agent Development">AI Agent Development</SelectItem>
                  <SelectItem value="SEO Master Course">SEO Master Course</SelectItem>
                  <SelectItem value="Social Media Marketing">Social Media Marketing</SelectItem>
                  <SelectItem value="Google Ads Pro">Google Ads Pro</SelectItem>
                  <SelectItem value="Other">Other Course</SelectItem>
                </SelectContent>
              </Select>
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
