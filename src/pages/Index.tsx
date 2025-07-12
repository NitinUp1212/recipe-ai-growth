
import { NavLink } from "react-router-dom";
import { ArrowDown, BarChart3, Search, Globe, MessageSquare, Bot, LineChart } from "lucide-react";
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
      title: "Performance Marketing Recipe",
      description: "A delicious mix of paid ads across Google, Meta, and LinkedIn to drive high-quality leads and maximize ROI for your business.",
      icon: <BarChart3 size={40} />,
      link: "/services/performance-marketing",
      ingredients: ["Meta Ads", "Google Ads", "AI Bidding"]
    },
    {
      title: "SEO Optimization Spice Mix",
      description: "Organic ranking booster with a perfect blend of on-page SEO, technical SEO, and off-page link building techniques.",
      icon: <Search size={40} />,
      link: "/services/seo",
      ingredients: ["Content SEO", "Technical SEO", "AI Content"]
    },
    {
      title: "Social Media Marketing Sizzler",
      description: "Engaging content strategy and community management that keeps your audience craving for more brand interaction.",
      icon: <Globe size={40} />,
      link: "/services/social-media",
      ingredients: ["Content Strategy", "Community", "Analytics"]
    },
    {
      title: "WhatsApp & Email Marketing Masala",
      description: "Perfectly timed automated messaging sequences that nurture leads and build lasting customer relationships.",
      icon: <MessageSquare size={40} />,
      link: "/services/messaging",
      ingredients: ["WhatsApp API", "Email", "Automations"]
    },
    {
      title: "AI Agent Development Sauce",
      description: "Intelligent conversation flows that qualify leads, provide 24/7 customer support, and integrate with your CRM seamlessly.",
      icon: <Bot size={40} />,
      link: "/services/ai-agent",
      ingredients: ["Lead Qualification", "CRM Integration", "Voice AI"]
    },
    {
      title: "Website & Funnel Optimization Delight",
      description: "Conversion-optimized web experiences with advanced analytics that turn visitors into paying customers effectively.",
      icon: <LineChart size={40} />,
      link: "/services/website-funnel",
      ingredients: ["Conversion Design", "Analytics", "A/B Testing"]
    }
  ];

  const testimonials = [
    {
      text: "This digital marketing agency transformed our approach to online marketing. Their AI-powered SEO campaigns increased our organic traffic by 40% while reducing our cost per acquisition significantly.",
      author: "Priya Sharma",
      position: "Chief Marketing Officer",
      company: "TechSolutions Inc.",
      rating: 5
    },
    {
      text: "The recipe approach makes complex digital marketing strategies easy to understand and implement. We've seen our ROI double since implementing their WhatsApp Marketing and SEO recipe combination.",
      author: "Rahul Mehta",
      position: "Founder & CEO",
      company: "StyleHub E-commerce",
      rating: 5
    },
    {
      text: "Their AI agents and performance marketing campaigns have completely transformed our lead qualification process. We now close deals 30% faster with better qualified leads from their SEO services.",
      author: "Neha Kapoor",
      position: "Sales Director",
      company: "Global Finance Ltd",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Cook your digital growth strategy with <span className="gradient-text">AI + Performance Marketing</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                Expert digital marketing recipes that deliver measurable results through the perfect blend of SEO services, performance marketing campaigns, and AI innovation for maximum business growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/918791363283" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors duration-300"
                  aria-label="Chat with Digital Marketing Experts on WhatsApp"
                >
                  <MessageSquare size={20} />
                  Start Free Consultation
                </a>
                <Button 
                  variant="outline" 
                  className="text-lg px-6 py-3 rounded-full"
                  onClick={() => openBrochureForm("All Digital Marketing Courses")}
                >
                  Download Brochure
                </Button>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative">
              <div className="relative bg-gradient-to-br from-primary/5 to-neon/10 rounded-2xl p-6 md:p-8 shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643" 
                  alt="Digital Marketing Recipe Book - SEO Services and Performance Marketing Guide" 
                  className="w-full rounded-lg shadow-md"
                />
                <div className="absolute -right-4 -bottom-4 bg-neon text-black rounded-lg px-4 py-2 shadow-lg font-medium">
                  AI-Powered Marketing
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-6 -left-6 bg-white p-3 rounded-lg shadow-lg animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="font-bold">+127%</span>
                  <span className="text-sm">ROI</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 right-8 bg-white p-3 rounded-lg shadow-lg animate-float" style={{animationDelay: "1s"}}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="font-bold">-42%</span>
                  <span className="text-sm">Cost</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground animate-bounce">
              <span>See our marketing recipes</span>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Marketing Recipe Collection</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Carefully crafted SEO services and performance marketing strategies for each stage of your business growth journey
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
      
      {/* Institute Section */}
      <InstituteSection />
      
      {/* Startup Package Section */}
      <StartupPackage />
      
      {/* How It Works Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Cook Digital Marketing Success</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our proven step-by-step process to create the perfect SEO and performance marketing recipe for your business growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-primary text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">SEO Audit & Analysis</h3>
              <p className="text-muted-foreground">We analyze your current digital marketing ingredients and identify what's missing for optimal performance.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-primary text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Recipe Creation</h3>
              <p className="text-muted-foreground">We craft a custom SEO and performance marketing strategy with the right ingredients for success.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-primary text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">AI Enhancement</h3>
              <p className="text-muted-foreground">We add our secret AI sauce to amplify SEO results, automate performance marketing, and scale efficiently.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4">
                <span className="text-primary text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Measure & Refine</h3>
              <p className="text-muted-foreground">We continuously taste-test your digital marketing campaigns for optimal SEO and performance marketing results.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Marketing Results That Matter</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our SEO services and performance marketing recipes deliver real business impact that you can measure and scale
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-neon mb-2">42%</div>
              <p className="text-xl">Increase in lead quality through SEO</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-neon mb-2">3.8x</div>
              <p className="text-xl">Average return on ad spend (ROAS)</p>
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
              Don't just take our word for it - hear from businesses who've tasted SEO and performance marketing success
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
