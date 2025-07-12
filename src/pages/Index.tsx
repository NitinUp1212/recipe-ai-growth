
import { NavLink } from "react-router-dom";
import { ArrowDown, BarChart3, Search, Globe, MessageSquare, Bot, LineChart, Users, Building2, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/RecipeCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import StartupPackage from "@/components/StartupPackage";
import InstituteSection from "@/components/InstituteSection";
import UpcomingBatches from "@/components/UpcomingBatches";

interface IndexProps {
  openBrochureForm: (courseName: string) => void;
}

const Index = ({ openBrochureForm }: IndexProps) => {
  // B2C Performance Marketing Package
  const performanceMarketingB2C = {
    title: "B2C Performance Marketing Package",
    description: "Complete performance marketing solution designed specifically for B2C businesses and consumer brands.",
    features: ["Facebook & Instagram Ads", "Google Ads for B2C", "Consumer Psychology Targeting", "E-commerce Optimization", "Social Media Marketing", "Influencer Campaigns"],
    price: "Starting from ₹25,000/month"
  };

  // All Digital Marketing Services (B2B + B2C)
  const digitalMarketingServices = [
    {
      title: "SEO Services",
      description: "Boost your website ranking and organic traffic with our proven SEO strategies.",
      icon: <Search size={40} />,
      link: "/services/seo",
      forBusiness: "B2B & B2C",
      ingredients: ["Technical SEO", "Content SEO", "Local SEO"]
    },
    {
      title: "Performance Marketing",
      description: "Data-driven paid advertising campaigns that deliver measurable results and ROI.",
      icon: <BarChart3 size={40} />,
      link: "/services/performance-marketing", 
      forBusiness: "B2B & B2C",
      ingredients: ["Google Ads", "Facebook Ads", "LinkedIn Ads"]
    },
    {
      title: "Social Media Marketing",
      description: "Build brand awareness and engage your audience across all social platforms.",
      icon: <Globe size={40} />,
      link: "/services/social-media",
      forBusiness: "B2B & B2C", 
      ingredients: ["Content Strategy", "Community Management", "Social Ads"]
    },
    {
      title: "WhatsApp & Email Marketing",
      description: "Automated messaging sequences that nurture leads and convert prospects.",
      icon: <MessageSquare size={40} />,
      link: "/services/messaging",
      forBusiness: "B2B & B2C",
      ingredients: ["WhatsApp API", "Email Automation", "Lead Nurturing"]
    },
    {
      title: "AI Agent Development", 
      description: "Intelligent chatbots for 24/7 customer support and lead qualification.",
      icon: <Bot size={40} />,
      link: "/services/ai-agent",
      forBusiness: "B2B & B2C",
      ingredients: ["Lead Qualification", "Customer Support", "CRM Integration"]
    },
    {
      title: "Website & Funnel Development",
      description: "High-converting websites and sales funnels optimized for your business goals.",
      icon: <LineChart size={40} />,
      link: "/services/website-funnel",
      forBusiness: "B2B & B2C",
      ingredients: ["Landing Pages", "Sales Funnels", "Conversion Optimization"]
    }
  ];

  const testimonials = [
    {
      text: "UnknownHat's B2C performance marketing package increased our online sales by 150% in just 3 months. Their consumer targeting is exceptional.",
      author: "Priya Sharma",
      position: "E-commerce Manager",
      company: "StyleHub Online",
      rating: 5
    },
    {
      text: "The digital marketing services work perfectly for both our B2B and B2C divisions. Great ROI and professional service.",
      author: "Rahul Mehta", 
      position: "Marketing Director",
      company: "TechSolutions Ltd",
      rating: 5
    },
    {
      text: "Their institute courses gave our team the skills needed to handle digital marketing in-house. Highly recommended!",
      author: "Neha Kapoor",
      position: "Business Owner", 
      company: "Local Services Co",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Digital Marketing Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              B2C Performance Marketing Packages, Complete Digital Marketing Services (B2B & B2C), 
              and Professional Training Courses - All Virtual Based
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="https://wa.me/918791363283" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <MessageSquare size={20} />
                WhatsApp Consultation
              </a>
              <a 
                href="tel:+918791363283"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                📞 Call Now
              </a>
              <Button 
                variant="outline" 
                onClick={() => openBrochureForm("All Services")}
                className="px-6 py-3"
              >
                Get Free Consultation
              </Button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-800 font-medium">
                🌐 All Services Available Virtually | Google Meet Sessions | Complete Online Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* B2C Performance Marketing Package */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-neon/10 px-4 py-2 rounded-full mb-4">
              <Users size={20} className="text-neon" />
              <span className="font-medium">B2C Specialist Package</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">B2C Performance Marketing Package</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specially designed for consumer businesses, e-commerce, and B2C brands
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-neon/5 to-primary/5 rounded-2xl p-8 border border-neon/20">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">{performanceMarketingB2C.title}</h3>
                  <p className="text-muted-foreground mb-6">{performanceMarketingB2C.description}</p>
                  <div className="text-2xl font-bold text-primary mb-4">{performanceMarketingB2C.price}</div>
                  
                  <div className="flex gap-4">
                    <a 
                      href="https://wa.me/918791363283" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    >
                      Get B2C Package
                    </a>
                    <Button variant="outline">Learn More</Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-bold mb-4">Package Includes:</h4>
                  <ul className="space-y-2">
                    {performanceMarketingB2C.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-neon rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Digital Marketing Services */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Building2 size={20} className="text-primary" />
              <span className="font-medium">B2B & B2C Services</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Digital Marketing Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Full range of digital marketing solutions for both B2B and B2C businesses
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalMarketingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="text-primary mb-4">{service.icon}</div>
                <div className="mb-2">
                  <span className="text-xs bg-blue-100 text-blue-600 rounded-full px-3 py-1">
                    {service.forBusiness}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {service.ingredients.map((ingredient, i) => (
                    <span key={i} className="text-xs bg-gray-100 rounded-full px-2 py-1">
                      {ingredient}
                    </span>
                  ))}
                </div>
                <NavLink 
                  to={service.link}
                  className="text-primary font-medium hover:underline"
                >
                  Learn More →
                </NavLink>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="https://wa.me/918791363283" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-medium transition-colors mr-4"
            >
              <MessageSquare size={20} />
              Get Custom Quote
            </a>
            <Button variant="outline" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Institute Batches */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
              <GraduationCap size={20} className="text-green-600" />
              <span className="font-medium text-green-600">Digital Marketing Institute</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Training Courses</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn digital marketing skills with our comprehensive virtual training programs
            </p>
          </div>
          
          <UpcomingBatches openBrochureForm={openBrochureForm} />
        </div>
      </section>

      {/* Institute Section */}
      <InstituteSection />

      {/* Client Registry & Consultation */}
      <section className="py-16 bg-primary/5">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Digital Marketing Journey</h2>
            <p className="text-muted-foreground mb-8">
              Register as our client and get personalized digital marketing solutions
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-green-600 mb-4">
                  <MessageSquare size={48} className="mx-auto" />
                </div>
                <h3 className="font-bold mb-2">WhatsApp Consultation</h3>
                <p className="text-sm text-muted-foreground mb-4">Quick consultation via WhatsApp</p>
                <a 
                  href="https://wa.me/918791363283" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-medium transition-colors"
                >
                  Chat Now
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-blue-600 mb-4">
                  <span className="text-4xl">📞</span>
                </div>
                <h3 className="font-bold mb-2">Phone Consultation</h3>
                <p className="text-sm text-muted-foreground mb-4">Direct call for detailed discussion</p>
                <a 
                  href="tel:+918791363283"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition-colors"
                >
                  Call Now
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-purple-600 mb-4">
                  <span className="text-4xl">💻</span>
                </div>
                <h3 className="font-bold mb-2">Google Meet Session</h3>
                <p className="text-sm text-muted-foreground mb-4">Virtual meeting for detailed planning</p>
                <Button 
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => openBrochureForm("Google Meet Consultation")}
                >
                  Schedule Meet
                </Button>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4">Client Registration Form</h3>
              <p className="text-muted-foreground mb-4">
                Register with us and get personalized service recommendations
              </p>
              <Button 
                size="lg" 
                onClick={() => openBrochureForm("Client Registration")}
                className="bg-primary hover:bg-primary/90"
              >
                Register as Client
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Details will be sent to both your email and our team
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our services have helped businesses grow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default Index;
