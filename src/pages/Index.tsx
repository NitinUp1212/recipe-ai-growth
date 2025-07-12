
import { NavLink } from "react-router-dom";
import { ArrowDown, BarChart3, Search, Globe, MessageSquare, LineChart } from "lucide-react";
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
  const services = [
    {
      title: "Performance Marketing",
      description: "Complete paid advertising solution across all platforms to drive high-quality leads and sales.",
      icon: <BarChart3 size={40} />,
      link: "/services/performance-marketing",
      features: ["Meta Ads", "Google Ads", "LinkedIn Ads"]
    },
    {
      title: "SEO Services",
      description: "Comprehensive search engine optimization to boost your organic rankings and visibility.",
      icon: <Search size={40} />,
      link: "/services/seo",
      features: ["On-Page SEO", "Technical SEO", "Content Optimization"]
    },
    {
      title: "Social Media Marketing",
      description: "Strategic social media management and content creation to engage your target audience.",
      icon: <Globe size={40} />,
      link: "/services/social-media",
      features: ["Content Strategy", "Community Management", "Analytics"]
    },
    {
      title: "Email & WhatsApp Marketing",
      description: "Automated messaging campaigns that nurture leads and build lasting customer relationships.",
      icon: <MessageSquare size={40} />,
      link: "/services/messaging",
      features: ["Email Automation", "WhatsApp API", "Lead Nurturing"]
    },
    {
      title: "Website Development",
      description: "Conversion-optimized websites and landing pages designed to turn visitors into customers.",
      icon: <LineChart size={40} />,
      link: "/services/website-development",
      features: ["Landing Pages", "E-commerce", "CRO"]
    }
  ];

  const testimonials = [
    {
      text: "UnKnownHat transformed our digital marketing approach. Their campaigns increased our lead quality by 40% while reducing costs significantly.",
      author: "Priya Sharma",
      position: "CMO",
      company: "TechSolutions Inc.",
      rating: 5
    },
    {
      text: "The strategic approach makes complex marketing simple to understand. We've seen our ROI double since working with their team.",
      author: "Rahul Mehta",
      position: "Founder",
      company: "StyleHub",
      rating: 5
    },
    {
      text: "Their comprehensive digital marketing solutions have completely transformed our lead generation process. We now close deals 30% faster.",
      author: "Neha Kapoor",
      position: "Sales Director",
      company: "Global Finance Ltd",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Grow your business with <span className="gradient-text">Digital Marketing</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Complete digital marketing solutions that deliver measurable results through proven strategies and data-driven approaches.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/918791363283" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-lg font-medium transition-colors"
                >
                  <MessageSquare size={20} />
                  Chat Now
                </a>
                <Button 
                  variant="outline" 
                  className="text-lg"
                  onClick={() => openBrochureForm("All Courses")}
                >
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 md:p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643" 
                  alt="Digital Marketing Solutions" 
                  className="w-full rounded-lg shadow-md"
                />
                <div className="absolute -right-4 -bottom-4 bg-primary text-white rounded-lg px-4 py-2 shadow-lg font-medium">
                  Proven Results
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -left-8 bg-white p-3 rounded-lg shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-bold">+127%</span>
                  <span className="text-sm">ROI</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 right-12 bg-white p-3 rounded-lg shadow-lg animate-float" style={{animationDelay: "1s"}}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="font-bold">-42%</span>
                  <span className="text-sm">Cost per Lead</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-16">
            <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground animate-bounce">
              <span>Scroll to see our services</span>
              <ArrowDown size={16} />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Upcoming Batches Section */}
      <UpcomingBatches openBrochureForm={openBrochureForm} />
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital marketing solutions for every stage of your business growth
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 p-6"
              >
                <div className="mb-5 text-primary">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-muted rounded-full px-3 py-1 text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <NavLink 
                  to={service.link}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  Learn More
                </NavLink>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <NavLink to="/all-services">
              <Button variant="outline" size="lg">
                View All Services
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Institute Section */}
      <InstituteSection />
      
      {/* Startup Package Section */}
      <StartupPackage />
      
      {/* How It Works Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Deliver Results</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven process to create effective marketing strategies for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Analysis</h3>
              <p className="text-muted-foreground">We analyze your current marketing and identify opportunities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Strategy</h3>
              <p className="text-muted-foreground">We create a custom marketing strategy tailored to your goals.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-muted-foreground">We execute the strategy with precision and attention to detail.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-primary text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Optimize</h3>
              <p className="text-muted-foreground">We continuously monitor and optimize for better results.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Results That Matter</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our strategies deliver real business impact that you can measure
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">42%</div>
              <p className="text-xl">Average increase in lead quality</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">3.8x</div>
              <p className="text-xl">Average return on ad spend</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">65%</div>
              <p className="text-xl">Reduction in customer acquisition cost</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses who've achieved success
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
