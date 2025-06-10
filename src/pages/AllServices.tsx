
import { NavLink } from "react-router-dom";
import { Home, Wrench, ShoppingCart, Briefcase, BarChart3, Search, Globe, MessageSquare, Bot, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

  const carouselPages = [
    {
      title: "Our Portfolio",
      description: "Explore our successful projects and client testimonials",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      link: "/portfolio",
      category: "Previous Work"
    },
    {
      title: "Property Dealing",
      description: "Find your dream property with our expert guidance",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      link: "/services/property-dealing",
      category: "Real Estate"
    },
    {
      title: "System Accessories",
      description: "Quality computer accessories and components",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea",
      link: "/services/system-accessories",
      category: "Hardware"
    },
    {
      title: "AI Agent",
      description: "Experience our intelligent AI conversation system",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      link: "/ai-agent",
      category: "AI Technology"
    },
    {
      title: "Institute Courses",
      description: "Learn digital marketing and AI skills",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      link: "/courses",
      category: "Education"
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
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Business Services</h2>
          <div className="grid sm:grid-cols-2 gap-6">
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

        {/* Carousel Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore More</h2>
          <div className="relative">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-6xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {carouselPages.map((page, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <NavLink to={page.link} className="block group">
                      <div className="recipe-card h-full overflow-hidden group-hover:shadow-lg transition-all duration-300">
                        <div className="relative mb-4 overflow-hidden rounded-lg">
                          <img 
                            src={page.image} 
                            alt={page.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs bg-white/90 text-black rounded-full px-2 py-1">
                              {page.category}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {page.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {page.description}
                        </p>
                      </div>
                    </NavLink>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex" />
              <CarouselNext className="hidden md:flex" />
            </Carousel>
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
