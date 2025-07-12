
import { NavLink } from "react-router-dom";
import { ArrowDown, BarChart3, Search, Globe, MessageSquare, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import UpcomingBatches from "@/components/UpcomingBatches";

interface IndexProps {
  openBrochureForm: (courseName: string) => void;
}

const Index = ({ openBrochureForm }: IndexProps) => {
  const b2cServices = [
    {
      title: "Performance Marketing (B2C)",
      description: "Targeted advertising campaigns specifically designed for direct consumer engagement and sales.",
      icon: <BarChart3 size={32} />,
      link: "/services/performance-marketing",
    }
  ];

  const digitalMarketingServices = [
    {
      title: "SEO Services", 
      description: "Improve your website ranking and organic visibility on search engines.",
      icon: <Search size={32} />,
      link: "/services/seo",
    },
    {
      title: "Social Media Marketing",
      description: "Build brand presence and engage with your audience across all social platforms.",
      icon: <Globe size={32} />,
      link: "/services/social-media",
    },
    {
      title: "WhatsApp & Email Marketing",
      description: "Direct communication strategies to nurture leads and build customer relationships.",
      icon: <MessageSquare size={32} />,
      link: "/services/messaging",
    },
    {
      title: "Website Development",
      description: "Professional websites designed to convert visitors into customers.",
      icon: <LineChart size={32} />,
      link: "/services/website-development",
    }
  ];

  const testimonials = [
    {
      text: "Excellent digital marketing services. Their online approach and direct founder contact made everything smooth and professional.",
      author: "Priya Sharma",
      position: "Business Owner",
      company: "Fashion Store",
      rating: 5
    },
    {
      text: "The Digital Marketing with AI course was fantastic. Learned practical skills that I'm using in my business right now.",
      author: "Rahul Mehta", 
      position: "Entrepreneur",
      company: "Tech Startup",
      rating: 5
    },
    {
      text: "Great experience with their performance marketing services. Saw real results in just 2 months.",
      author: "Neha Kapoor",
      position: "Marketing Manager",
      company: "E-commerce Brand",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Grow Your Business with <span className="text-primary">Digital Marketing & AI</span>
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-lg">
                100% online digital marketing solutions designed to help your business reach new heights. Meet our founder directly.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/918791363283" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  <MessageSquare size={20} />
                  Chat with Founder
                </a>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => openBrochureForm("All Services")}
                >
                  Get Brochure
                </Button>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="bg-gradient-to-br from-primary/10 to-blue/10 rounded-2xl p-6 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a566bd"
                  alt="Digital Marketing" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="ghost" className="flex items-center gap-2 text-gray-500 animate-bounce">
              <span>Explore Our Services</span>
              <ArrowDown size={16} />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Upcoming Batches Section */}
      <UpcomingBatches openBrochureForm={openBrochureForm} />
      
      {/* B2C Performance Marketing Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">B2C Performance Marketing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized advertising solutions for businesses selling directly to consumers
            </p>
          </div>
          
          <div className="max-w-sm mx-auto">
            {b2cServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <NavLink to={service.link}>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Digital Marketing Services Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Digital Marketing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete digital marketing solutions for both B2B and B2C businesses
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalMarketingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                <NavLink to={service.link}>
                  <Button variant="outline" size="sm" className="w-full">View Details</Button>
                </NavLink>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <NavLink to="/services">
              <Button size="lg">
                View All Services
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Results</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Real business impact through our digital marketing expertise
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">40+</div>
              <p className="text-lg text-blue-100">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">3.5x</div>
              <p className="text-lg text-blue-100">Average ROI Increase</p>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">95%</div>
              <p className="text-lg text-blue-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real feedback from businesses who've experienced success with our services
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
      
      {/* Ready to Cook Section - Single Button */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get started with our digital marketing services or join our upcoming batch
          </p>
          <Button size="lg" onClick={() => openBrochureForm("All Services")}>
            Get Started Today
          </Button>
        </div>
      </section>
    </>
  );
};

export default Index;
