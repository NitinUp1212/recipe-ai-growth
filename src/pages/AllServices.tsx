
import { NavLink } from "react-router-dom";
import { Laptop, Home, Wrench, ShoppingCart, Briefcase, BarChart3, Search, Globe, MessageSquare, Bot, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const AllServices = () => {
  const digitalServices = [
    {
      title: "Performance Marketing",
      description: "Paid ads across platforms to drive high-quality leads and sales.",
      icon: <BarChart3 size={40} />,
      link: "/services/performance-marketing",
      category: "Digital Marketing"
    },
    {
      title: "SEO Services",
      description: "Organic ranking booster with on-page and off-page techniques.",
      icon: <Search size={40} />,
      link: "/services/seo",
      category: "Digital Marketing"
    },
    {
      title: "Social Media Marketing",
      description: "Engaging content strategy that builds audience engagement.",
      icon: <Globe size={40} />,
      link: "/services/social-media",
      category: "Digital Marketing"
    },
    {
      title: "WhatsApp & Email Marketing",
      description: "Automated messaging that nurtures leads and builds relationships.",
      icon: <MessageSquare size={40} />,
      link: "/services/messaging",
      category: "Digital Marketing"
    },
    {
      title: "AI Agent Development",
      description: "Intelligent conversation flows for lead qualification and support.",
      icon: <Bot size={40} />,
      link: "/services/ai-agent",
      category: "AI Solutions"
    },
    {
      title: "Website & Funnel Development",
      description: "Conversion-optimized web experiences that convert visitors.",
      icon: <LineChart size={40} />,
      link: "/services/website-funnel",
      category: "Development"
    }
  ];

  const additionalServices = [
    {
      title: "Laptop Repair & Sales",
      description: "Professional laptop repair services and quality laptop sales with warranty.",
      icon: <Laptop size={40} />,
      link: "/services/laptop-services",
      category: "Hardware Services"
    },
    {
      title: "Property Dealing",
      description: "Buy, sell, and rent properties with our expert real estate services.",
      icon: <Home size={40} />,
      link: "/services/property-dealing",
      category: "Real Estate"
    },
    {
      title: "System Accessories",
      description: "Complete range of computer accessories and system components.",
      icon: <ShoppingCart size={40} />,
      link: "/services/system-accessories",
      category: "Hardware Services"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive solutions for digital growth and business needs
          </p>
        </div>

        {/* Digital Marketing Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Digital Marketing & AI Solutions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalServices.map((service, index) => (
              <div key={index} className="recipe-card group">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="mb-2">
                  <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <NavLink 
                  to={service.link}
                  className="text-primary font-medium hover:underline"
                >
                  Learn More →
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Business Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} className="recipe-card group">
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div className="mb-2">
                  <span className="text-xs bg-neon/20 text-black rounded-full px-3 py-1">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <NavLink 
                  to={service.link}
                  className="text-primary font-medium hover:underline"
                >
                  Explore Service →
                </NavLink>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Work Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">See Our Previous Work</h2>
          <p className="text-muted-foreground mb-8">
            Check out our portfolio of successful projects and client testimonials
          </p>
          <NavLink to="/portfolio">
            <Button size="lg" className="bg-gradient-to-r from-primary to-neon hover:from-primary/80 hover:to-neon/80">
              <Briefcase className="mr-2" size={20} />
              View Portfolio
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
