import { NavLink } from "react-router-dom";
import { ArrowDown, BarChart3, Search, Globe, MessageSquare, Bot, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/RecipeCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import StartupPackage from "@/components/StartupPackage";

const Index = () => {
  const services = [
    {
      title: "Performance Marketing Pie",
      description: "A delicious mix of paid ads across platforms to drive high-quality leads and sales.",
      icon: <BarChart3 size={40} />,
      link: "/services/performance-marketing",
      ingredients: ["Meta Ads", "Google Ads", "AI Bidding"]
    },
    {
      title: "SEO Spice Mix",
      description: "Organic ranking booster with a perfect blend of on-page and off-page techniques.",
      icon: <Search size={40} />,
      link: "/services/seo",
      ingredients: ["Content SEO", "Technical SEO", "AI Content"]
    },
    {
      title: "Social Media Sizzler",
      description: "Engaging content strategy that keeps your audience craving for more.",
      icon: <Globe size={40} />,
      link: "/services/social-media",
      ingredients: ["Content Strategy", "Community", "Analytics"]
    },
    {
      title: "WhatsApp & Email Masala",
      description: "Perfectly timed messaging that nurtures leads and builds lasting relationships.",
      icon: <MessageSquare size={40} />,
      link: "/services/messaging",
      ingredients: ["WhatsApp API", "Email", "Automations"]
    },
    {
      title: "AI Agent Sauce",
      description: "Intelligent conversation flows that qualify leads and provide 24/7 support.",
      icon: <Bot size={40} />,
      link: "/services/ai-agent",
      ingredients: ["Lead Qualification", "CRM Integration", "Voice AI"]
    },
    {
      title: "Website Funnel Delight",
      description: "Conversion-optimized web experiences that turn visitors into customers.",
      icon: <LineChart size={40} />,
      link: "/services/website-funnel",
      ingredients: ["Conversion Design", "Analytics", "A/B Testing"]
    }
  ];

  const testimonials = [
    {
      text: "FlavorDish transformed our approach to digital marketing. Their AI-powered campaigns increased our lead quality by 40% while reducing costs.",
      author: "Priya Sharma",
      position: "CMO",
      company: "TechSolutions Inc.",
      rating: 5
    },
    {
      text: "The recipe approach makes complex marketing strategies easy to understand. We've seen our ROI double since implementing their WhatsApp Marketing recipe.",
      author: "Rahul Mehta",
      position: "Founder",
      company: "StyleHub",
      rating: 5
    },
    {
      text: "Their AI agents have completely transformed our lead qualification process. We now close deals 30% faster with better qualified leads.",
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
                Cook your growth strategy with <span className="gradient-text">AI + Performance</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Digital marketing recipes that deliver measurable results through the perfect blend of AI innovation and proven strategies.
              </p>
              <div className="flex flex-wrap gap-4">
                <NavLink to="/contact">
                  <Button className="btn-primary text-lg">Get Your Free Audit</Button>
                </NavLink>
                <NavLink to="/services">
                  <Button variant="outline" className="text-lg">Explore Our Recipes</Button>
                </NavLink>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="relative bg-gradient-to-br from-primary/5 to-neon/10 rounded-2xl p-6 md:p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643" 
                  alt="Digital Marketing Recipe Book" 
                  className="w-full rounded-lg shadow-md"
                />
                <div className="absolute -right-4 -bottom-4 bg-neon text-black rounded-lg px-4 py-2 shadow-lg font-medium">
                  AI-Powered
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
              <span>Scroll to see our recipes</span>
              <ArrowDown size={16} />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Recipe Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Carefully crafted marketing strategies for each stage of your business growth
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <RecipeCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                ingredients={service.ingredients}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <NavLink to="/services">
              <Button variant="outline" size="lg">
                View All Recipes
              </Button>
            </NavLink>
          </div>
        </div>
      </section>
      
      {/* Startup Package Section */}
      <StartupPackage />
      
      {/* How It Works Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Cook Digital Success</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our step-by-step process to create the perfect marketing recipe for your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Audit & Analysis</h3>
              <p className="text-muted-foreground">We analyze your current ingredients and identify what's missing.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Recipe Creation</h3>
              <p className="text-muted-foreground">We craft a custom marketing strategy with the right ingredients.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Enhancement</h3>
              <p className="text-muted-foreground">We add our secret AI sauce to amplify results and automation.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-primary text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Measure & Refine</h3>
              <p className="text-muted-foreground">We continuously taste-test and refine for optimal results.</p>
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
              Our recipes deliver real business impact that you can measure
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-neon mb-2">42%</div>
              <p className="text-xl">Average increase in lead quality</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-neon mb-2">3.8x</div>
              <p className="text-xl">Average return on ad spend</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-neon mb-2">65%</div>
              <p className="text-xl">Reduction in customer acquisition cost</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from businesses who've tasted success
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
