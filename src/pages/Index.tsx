
import { NavLink } from "react-router-dom";
import { ArrowDown, BarChart3, Search, Globe, MessageSquare, Bot, LineChart, Star, Award, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import RecipeCard from "@/components/RecipeCard";
import TestimonialCard from "@/components/TestimonialCard";
import CallToAction from "@/components/CallToAction";
import StartupPackage from "@/components/StartupPackage";
import InstituteSection from "@/components/InstituteSection";
import UpcomingBatches from "@/components/UpcomingBatches";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

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

  const agencyHighlights = [
    {
      icon: <Award className="text-neon" size={32} />,
      title: "Award-Winning Agency",
      description: "Recognized excellence in digital marketing innovation"
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "500+ Happy Clients",
      description: "Trusted by startups to Fortune 500 companies"
    },
    {
      icon: <TrendingUp className="text-green-500" size={32} />,
      title: "300% Average ROI",
      description: "Proven track record of exceptional returns"
    },
    {
      icon: <Star className="text-yellow-500" size={32} />,
      title: "Industry Leaders",
      description: "Setting new standards in digital marketing"
    }
  ];

  return (
    <>
      {/* Hero Section with Enhanced Agency Presentation */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-neon/20"></div>
        </div>
        
        <div className="container-custom relative z-10">
          {/* Agency Highlights Bar */}
          <ScrollReveal direction="down" delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50">
              {agencyHighlights.map((highlight, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="flex justify-center mb-2">{highlight.icon}</div>
                  <h3 className="font-bold text-sm md:text-base text-gray-800">{highlight.title}</h3>
                  <p className="text-xs text-gray-600 hidden md:block">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left" delay={0.3}>
              <div className="order-2 md:order-1">
                <motion.div 
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-neon/10 px-4 py-2 rounded-full mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Star className="text-neon" size={20} />
                  <span className="text-sm font-medium text-gray-700">Premium Digital Marketing Agency & Institute</span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Cook your digital growth strategy with <span className="gradient-text">AI + Performance Marketing</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Expert digital marketing recipes that deliver measurable results through the perfect blend of SEO services, performance marketing campaigns, and AI innovation for maximum business growth.
                </p>
                
                <motion.div 
                  className="flex flex-wrap gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <a 
                    href="https://wa.me/918791363283" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    aria-label="Chat with Digital Marketing Experts on WhatsApp"
                  >
                    <MessageSquare size={20} />
                    Chat Now for Free Consultation
                  </a>
                  <Button 
                    variant="outline" 
                    className="text-lg px-6 py-3 rounded-full border-2 hover:bg-primary hover:text-white transition-all duration-300"
                    onClick={() => openBrochureForm("All Digital Marketing Courses")}
                  >
                    Download Free Brochure
                  </Button>
                </motion.div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={0.4}>
              <div className="order-1 md:order-2 relative">
                <div className="relative bg-gradient-to-br from-primary/5 to-neon/10 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-sm border border-white/20">
                  <img 
                    src="https://images.unsplash.com/photo-1499750310107-5fef28a66643" 
                    alt="Digital Marketing Recipe Book - SEO Services and Performance Marketing Guide" 
                    className="w-full rounded-lg shadow-lg"
                  />
                  <motion.div 
                    className="absolute -right-4 -bottom-4 bg-gradient-to-r from-neon to-yellow-400 text-black rounded-lg px-6 py-3 shadow-xl font-bold text-lg"
                    animate={{ 
                      boxShadow: [
                        "0 10px 25px rgba(172, 255, 51, 0.3)",
                        "0 15px 35px rgba(172, 255, 51, 0.5)",
                        "0 10px 25px rgba(172, 255, 51, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🤖 AI-Powered Digital Marketing
                  </motion.div>
                </div>
                
                {/* Enhanced Floating elements */}
                <motion.div 
                  className="absolute -top-8 -left-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                    <div>
                      <span className="font-bold text-xl text-green-600">+127%</span>
                      <p className="text-sm text-gray-600">ROI Increase</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="absolute -bottom-6 right-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100"
                  animate={{ 
                    y: [0, 10, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-blue-500 animate-pulse"></div>
                    <div>
                      <span className="font-bold text-xl text-blue-600">-42%</span>
                      <p className="text-sm text-gray-600">Cost per Lead</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
          
          <ScrollReveal direction="up" delay={0.6}>
            <div className="flex justify-center mt-16">
              <Button variant="ghost" className="flex items-center gap-2 text-muted-foreground animate-bounce hover:text-primary transition-colors">
                <span>Scroll to see our digital marketing recipes</span>
                <ArrowDown size={16} />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Upcoming Digital Marketing Batches Section */}
      <ScrollReveal>
        <UpcomingBatches openBrochureForm={openBrochureForm} />
      </ScrollReveal>
      
      {/* Digital Marketing Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Marketing Recipe Collection</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Carefully crafted SEO services and performance marketing strategies for each stage of your business growth journey
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1 + 0.3}>
                <RecipeCard 
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                  ingredients={service.ingredients}
                />
              </ScrollReveal>
            ))}
          </div>
          
          <ScrollReveal delay={0.8}>
            <div className="text-center mt-12">
              <NavLink to="/services">
                <Button variant="outline" size="lg" className="hover:bg-primary hover:text-white transition-all duration-300">
                  View All Digital Marketing Recipes
                </Button>
              </NavLink>
            </div>
          </ScrollReveal>
        </div>
      </section>
      
      {/* Digital Marketing Institute Section */}
      <ScrollReveal>
        <InstituteSection />
      </ScrollReveal>
      
      {/* Startup Digital Marketing Package Section */}
      <ScrollReveal>
        <StartupPackage />
      </ScrollReveal>
      
      {/* How Digital Marketing Works Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Cook Digital Marketing Success</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our proven step-by-step process to create the perfect SEO and performance marketing recipe for your business growth
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "SEO Audit & Analysis",
                description: "We analyze your current digital marketing ingredients and identify what's missing for optimal performance."
              },
              {
                step: "2", 
                title: "Digital Marketing Recipe Creation",
                description: "We craft a custom SEO and performance marketing strategy with the right ingredients for success."
              },
              {
                step: "3",
                title: "AI Enhancement Integration", 
                description: "We add our secret AI sauce to amplify SEO results, automate performance marketing, and scale efficiently."
              },
              {
                step: "4",
                title: "Measure & Refine Performance",
                description: "We continuously taste-test and refine your digital marketing campaigns for optimal SEO and performance marketing results."
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15 + 0.3}>
                <motion.div 
                  className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-primary to-neon w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-white font-bold text-xl shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Digital Marketing Results Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Marketing Results That Matter</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our SEO services and performance marketing recipes deliver real business impact that you can measure and scale
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
            {[
              { number: "42%", label: "Average increase in lead quality through SEO", color: "text-neon" },
              { number: "3.8x", label: "Average return on ad spend (ROAS)", color: "text-blue-400" },
              { number: "65%", label: "Reduction in customer acquisition cost", color: "text-green-400" }
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.2 + 0.4}>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className={`text-5xl md:text-6xl font-bold ${stat.color} mb-2`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-xl">{stat.label}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Digital Marketing Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Digital Marketing Customers Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it - hear from businesses who've tasted SEO and performance marketing success
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.15 + 0.3}>
                <TestimonialCard
                  text={testimonial.text}
                  author={testimonial.author}
                  position={testimonial.position}
                  company={testimonial.company}
                  rating={testimonial.rating}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Digital Marketing Call to Action */}
      <ScrollReveal>
        <CallToAction />
      </ScrollReveal>
    </>
  );
};

export default Index;
