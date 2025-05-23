
import { useState } from "react";
import { Bot, Check, MessageSquare, Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import CallToAction from "@/components/CallToAction";

interface DemoFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  requirements: string;
}

const AIAgent = () => {
  const [activeTab, setActiveTab] = useState("lead");
  const [submitting, setSubmitting] = useState(false);
  
  const { register: registerDemo, handleSubmit: handleDemoSubmit, reset: resetDemo } = useForm<DemoFormData>();
  const { register: registerLive, handleSubmit: handleLiveSubmit, reset: resetLive } = useForm<DemoFormData>();
  
  const onDemoSubmit = async (data: DemoFormData) => {
    setSubmitting(true);
    try {
      // In a real app, you would send this data to your backend
      console.log("Demo request data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send email using mailto link
      const subject = encodeURIComponent("AI Agent Demo Request");
      const body = encodeURIComponent(`
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Company: ${data.company}
        Requirements: ${data.requirements}
      `);
      
      window.location.href = `mailto:officialunknownhat@gmail.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Demo Request Sent",
        description: "We'll get back to you shortly to schedule your demo.",
      });
      
      resetDemo();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };
  
  const onLiveSubmit = async (data: DemoFormData) => {
    setSubmitting(true);
    try {
      // In a real app, you would send this data to your backend
      console.log("Live demo request data:", data);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Send email using mailto link
      const subject = encodeURIComponent("AI Agent Live Demo Request");
      const body = encodeURIComponent(`
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Company: ${data.company}
        Requirements: ${data.requirements}
      `);
      
      window.location.href = `mailto:officialunknownhat@gmail.com?subject=${subject}&body=${body}`;
      
      toast({
        title: "Live Demo Request Sent",
        description: "We'll get back to you shortly to schedule your live demo.",
      });
      
      resetLive();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was a problem sending your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-neon/20 text-black rounded-full px-4 py-1 text-sm font-medium mb-6">
                Next-Gen Customer Interactions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Your <span className="gradient-text">AI Agent</span> Team</h1>
              <p className="text-xl text-muted-foreground mb-8">
                24/7 lead qualification, customer support, and personalized follow-ups powered by advanced conversational AI.
              </p>
              <Button className="btn-primary" onClick={() => document.getElementById('schedule-demo')?.scrollIntoView({ behavior: 'smooth' })}>Schedule a Demo</Button>
            </div>

            <div className="relative">
              <div className="p-6 bg-white rounded-2xl shadow-xl border border-gray-100 relative z-10">
                <div className="flex items-center border-b border-gray-100 pb-4 mb-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-3">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold">UnKnownHat AI</h3>
                    <p className="text-xs text-muted-foreground">Online • Usually responds in seconds</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-4">
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    Hello! I'm your AI assistant. How can I help you today?
                  </div>
                  
                  <div className="bg-primary/10 text-primary rounded-lg p-3 max-w-[80%] ml-auto">
                    I'm looking for help with my digital marketing strategy.
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    Great! I'd be happy to help. Could you tell me a bit about your business and what your main marketing goals are?
                  </div>
                  
                  <div className="bg-primary/10 text-primary rounded-lg p-3 max-w-[80%] ml-auto">
                    We're an e-commerce store selling eco-friendly products. We want to increase our conversion rate.
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                    Thanks for sharing! Based on your goals, our Performance Marketing Pie or Website Funnel Delight recipes might be perfect for you. Would you like to schedule a free audit with one of our marketing specialists?
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500/20 to-neon/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -top-6 -left-6 bg-white p-3 rounded-lg shadow-lg z-20 animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-bold">24/7</span>
                  <span className="text-sm">Available</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 right-12 bg-white p-3 rounded-lg shadow-lg z-20 animate-float" style={{animationDelay: "1s"}}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="font-bold">+64%</span>
                  <span className="text-sm">Conversion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our AI Agents Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Intelligent systems that make your marketing more effective and efficient
            </p>
          </div>
          
          <Tabs defaultValue="lead" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="lead">Lead Qualification</TabsTrigger>
              <TabsTrigger value="automation">WhatsApp + Email</TabsTrigger>
              <TabsTrigger value="followup">Follow-up + CRM</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lead" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Intelligent Lead Qualification</h3>
                  <p className="text-muted-foreground mb-6">
                    Our AI agents engage with website visitors in natural conversation to understand their needs and qualify them based on your criteria before routing to your sales team.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">24/7 Qualification</h4>
                        <p className="text-muted-foreground">Never miss a lead, even outside business hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Intelligent Routing</h4>
                        <p className="text-muted-foreground">Direct leads to the right team member based on needs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Rich Lead Profiles</h4>
                        <p className="text-muted-foreground">Gather detailed information before human handoff</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
                  <div className="space-y-4">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      Hi there! I'd like to learn more about your marketing services. Can you help?
                    </div>
                    
                    <div className="bg-primary/10 text-primary rounded-lg p-3 max-w-[80%] ml-auto">
                      Of course! To better assist you, could you tell me a bit about your business?
                    </div>
                    
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      We're a B2B SaaS company with about 50 employees. We're looking to generate more qualified leads.
                    </div>
                    
                    <div className="bg-primary/10 text-primary rounded-lg p-3 max-w-[80%] ml-auto">
                      Thanks! What marketing channels are you currently using, and what's your approximate monthly budget?
                    </div>
                    
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      We're doing some LinkedIn ads and content marketing. Budget is around $15,000 per month.
                    </div>
                    
                    <div className="bg-primary/10 text-primary rounded-lg p-3 max-w-[80%] ml-auto">
                      Great! Based on your B2B focus and budget, I'd recommend speaking with Rahul, our B2B specialist. Would you like to schedule a call with him tomorrow?
                    </div>
                    
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      Yes, that would be great. I'm available in the afternoon.
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="automation" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100">
                  <div className="flex mb-4">
                    <div className="flex-1 text-center py-2 border-b-2 border-primary">
                      <MessageSquare size={20} className="mx-auto mb-1" />
                      <span className="text-xs font-medium">WhatsApp</span>
                    </div>
                    <div className="flex-1 text-center py-2 border-b-2 border-gray-200">
                      <Mail size={20} className="mx-auto mb-1 text-gray-400" />
                      <span className="text-xs font-medium text-gray-400">Email</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex gap-2 items-end mb-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0"></div>
                      <div className="bg-gray-100 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                        Hi! My order #45678 was supposed to arrive yesterday but it hasn't yet. Can you help?
                      </div>
                    </div>
                    
                    <div className="flex gap-2 items-end justify-end mb-4">
                      <div className="bg-primary/10 text-primary rounded-lg rounded-br-none p-3 max-w-[80%]">
                        I'm sorry to hear about the delay with your order #45678. I've checked and it looks like your package is currently with the courier. It's scheduled for delivery today before 5pm.
                      </div>
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex gap-2 items-end mb-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex-shrink-0"></div>
                      <div className="bg-gray-100 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                        Oh that's good news! Can I get a tracking link?
                      </div>
                    </div>
                    
                    <div className="flex gap-2 items-end justify-end">
                      <div className="bg-primary/10 text-primary rounded-lg rounded-br-none p-3 max-w-[80%]">
                        Absolutely! Here's your tracking link: [tracking.link/45678]. You can also track it directly in our app. Is there anything else I can help with?
                      </div>
                      <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">WhatsApp & Email Automation</h3>
                  <p className="text-muted-foreground mb-6">
                    Our AI agents handle customer inquiries, provide order updates, and deliver personalized recommendations across messaging channels.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Omnichannel Presence</h4>
                        <p className="text-muted-foreground">Consistent experience across WhatsApp, email, and web</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Order Management</h4>
                        <p className="text-muted-foreground">Handle status updates and common inquiries automatically</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Personalized Recommendations</h4>
                        <p className="text-muted-foreground">Suggest products and content based on customer history</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="followup" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Follow-up & CRM Integration</h3>
                  <p className="text-muted-foreground mb-6">
                    Our AI agents ensure no lead goes cold with intelligent follow-up sequences that sync with your CRM to keep your pipeline moving.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Smart Follow-up Timing</h4>
                        <p className="text-muted-foreground">AI determines the optimal time to reconnect</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">CRM Synchronization</h4>
                        <p className="text-muted-foreground">Automatically update lead status and activity history</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Check size={20} className="text-green-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-bold">Meeting Scheduling</h4>
                        <p className="text-muted-foreground">Book meetings directly into your team's calendar</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-2">Lead Follow-up Sequence</h4>
                    <div className="h-1 w-3/4 bg-gray-200 rounded-full relative mb-2">
                      <div className="h-1 w-2/3 bg-green-500 rounded-full absolute top-0 left-0"></div>
                    </div>
                    <p className="text-sm text-muted-foreground">Lead: Priya Sharma • Stage: Evaluation</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check size={16} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <h5 className="font-bold">Initial Inquiry</h5>
                          <span className="text-xs text-muted-foreground">2 days ago</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Lead showed interest in Performance Marketing Pie</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Check size={16} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <h5 className="font-bold">Follow-up Email</h5>
                          <span className="text-xs text-muted-foreground">Yesterday</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">Sent case study and service details</p>
                        <div className="text-xs text-primary">Email opened • 3 link clicks</div>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-10 h-10 bg-blue-500/20 text-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone size={16} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <h5 className="font-bold">Discovery Call</h5>
                          <span className="text-xs text-muted-foreground">Today, 2:00 PM</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">30-minute call with Rahul, Performance Marketing Specialist</p>
                        <Button variant="outline" size="sm" className="text-xs">
                          Add to Calendar
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex opacity-50">
                      <div className="w-10 h-10 bg-gray-200 text-gray-400 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail size={16} />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <h5 className="font-bold">Proposal Follow-up</h5>
                          <span className="text-xs text-muted-foreground">Scheduled in 2 days</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Send proposal and schedule decision call</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Use AI Agents</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The business impact of adding intelligent AI to your marketing strategy
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Increased Efficiency</h3>
              <p className="text-muted-foreground">
                Handle customer inquiries, lead qualification, and follow-ups 24/7 without increasing headcount.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Higher Conversion Rates</h3>
              <p className="text-muted-foreground">
                Engage with prospects instantly and maintain momentum throughout the sales cycle.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Better Customer Experience</h3>
              <p className="text-muted-foreground">
                Provide immediate, helpful responses whenever your customers need assistance.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Data-Driven Insights</h3>
              <p className="text-muted-foreground">
                Learn from every interaction to continuously improve your marketing and sales approach.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Scalable Operations</h3>
              <p className="text-muted-foreground">
                Handle volume spikes with consistent quality and without increasing costs proportionally.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Sales Team Focus</h3>
              <p className="text-muted-foreground">
                Allow your human team to focus on high-value activities rather than repetitive tasks.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Agent Results</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Real business impact from our AI agent implementations
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-neon mb-2">73%</div>
              <p className="text-xl">Faster lead response time</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-neon mb-2">42%</div>
              <p className="text-xl">Increase in qualified leads</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-neon mb-2">24/7</div>
              <p className="text-xl">Customer support coverage</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Demo Request Form Section */}
      <section id="schedule-demo" className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Schedule an AI Agent Demo</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Complete the form below to schedule a personalized demo of our AI agent technology.
            </p>
            <div className="bg-neon/20 text-black rounded-lg p-3 max-w-lg mx-auto mt-6 animate-pulse border border-neon/30">
              <p className="font-medium">📢 IMPORTANT NOTICE:</p>
              <p className="text-sm mt-1">All sessions are conducted virtually through our online platform. The UnKnownHat team will contact you to arrange a suitable time for your virtual demo.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <form onSubmit={handleDemoSubmit(onDemoSubmit)} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-bold mb-6">Schedule a Demo</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      id="name"
                      {...registerDemo("name", { required: "Name is required" })}
                      placeholder="John Doe"
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      id="email"
                      type="email"
                      {...registerDemo("email", { required: "Email is required" })}
                      placeholder="john@company.com"
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      id="phone"
                      {...registerDemo("phone", { required: "Phone number is required" })}
                      placeholder="+91 98765 43210"
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">Company Name</label>
                  <Input
                    id="company"
                    {...registerDemo("company", { required: "Company name is required" })}
                    placeholder="Your Company Ltd."
                  />
                </div>
                
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium mb-1">Project Requirements</label>
                  <Textarea
                    id="requirements"
                    {...registerDemo("requirements")}
                    placeholder="Tell us about your AI agent needs and how we can help..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full btn-primary" disabled={submitting}>
                  {submitting ? "Sending..." : "Schedule Your Demo"}
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
            
            <div>
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-6">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span>A 30-minute personalized demo of our AI agent technology</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span>Q&A session with our AI specialists</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span>Custom implementation recommendations for your business</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                      <Check size={14} className="text-primary" />
                    </div>
                    <span>Pricing and package information</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4">Get a Live Demo</h3>
                <form onSubmit={handleLiveSubmit(onLiveSubmit)} className="bg-gradient-to-br from-primary/10 to-neon/10 p-6 rounded-xl border border-primary/20">
                  <p className="mb-4">Prefer to see our AI in action right away? Request a live demonstration with one of our specialists.</p>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          {...registerLive("name", { required: true })}
                          placeholder="Name"
                        />
                      </div>
                      <div>
                        <Input
                          type="email"
                          {...registerLive("email", { required: true })}
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Input
                          {...registerLive("phone", { required: true })}
                          placeholder="Phone"
                        />
                      </div>
                      <div>
                        <Input
                          {...registerLive("company")}
                          placeholder="Company"
                        />
                      </div>
                    </div>
                    
                    <Textarea
                      {...registerLive("requirements")}
                      placeholder="What specific features are you interested in seeing?"
                      rows={3}
                    />
                    
                    <Button type="submit" className="w-full bg-neon hover:bg-neon/90 text-black" disabled={submitting}>
                      {submitting ? "Sending..." : "Request Live Demo"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Ready to Add AI to Your Marketing Recipe?"
        subtitle="Book a consultation to see how our AI agents can transform your customer engagement"
        buttonText="Schedule a Demo"
        variant="neon"
      />
    </>
  );
};

export default AIAgent;

