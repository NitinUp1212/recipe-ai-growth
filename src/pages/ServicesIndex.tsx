
import { BarChart3, Search, Globe, MessageSquare, Bot, LineChart } from "lucide-react";
import RecipeCard from "@/components/RecipeCard";
import CallToAction from "@/components/CallToAction";

const ServicesIndex = () => {
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

  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Recipe Book</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Browse our collection of marketing recipes crafted for different business goals and stages of growth.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cooking Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              How we prepare and serve your perfect marketing recipe
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-300 transform md:translate-x-[-0.5px]"></div>
              
              {/* Step 1 */}
              <div className="relative mb-12 md:mb-24">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold mb-2">Discovery & Audit</h3>
                    <p className="text-muted-foreground">
                      We analyze your current marketing efforts, audience, and competitors to identify gaps and opportunities.
                    </p>
                  </div>
                  
                  <div className="flex items-center md:justify-center md:w-1/2 md:pl-12">
                    <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10 mr-4 md:mr-0">
                      1
                    </div>
                    <div className="flex-1 md:hidden">
                      <h3 className="text-xl font-bold md:hidden">Discovery & Audit</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative mb-12 md:mb-24">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 order-2 md:order-1 md:text-right">
                    <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10 mr-4 md:ml-auto md:mr-0">
                      2
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                    <h3 className="text-2xl font-bold mb-2">Recipe Creation</h3>
                    <p className="text-muted-foreground">
                      We craft a custom strategy tailored to your specific business goals, budget, and target audience.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative mb-12 md:mb-24">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right">
                    <h3 className="text-2xl font-bold mb-2">AI Enhancement</h3>
                    <p className="text-muted-foreground">
                      We integrate AI tools and automations to amplify results and create efficient workflows.
                    </p>
                  </div>
                  
                  <div className="flex items-center md:justify-center md:w-1/2 md:pl-12">
                    <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10 mr-4 md:mr-0">
                      3
                    </div>
                    <div className="flex-1 md:hidden">
                      <h3 className="text-xl font-bold md:hidden">AI Enhancement</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 order-2 md:order-1 md:text-right">
                    <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10 mr-4 md:ml-auto md:mr-0">
                      4
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                    <h3 className="text-2xl font-bold mb-2">Measure & Optimize</h3>
                    <p className="text-muted-foreground">
                      We continuously monitor performance, make data-driven adjustments, and scale what's working.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How do you measure the success of your marketing recipes?</h3>
              <p className="text-muted-foreground">
                We establish clear KPIs from the beginning based on your business goals. These may include ROAS, cost per acquisition, conversion rates, organic traffic growth, and more. We provide regular reports with transparent metrics.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">How does AI improve your marketing services?</h3>
              <p className="text-muted-foreground">
                Our AI tools enhance everything from ad targeting and creative generation to lead qualification and customer journey optimization. This allows for faster testing, more personalized messaging, and 24/7 customer engagement.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">What makes your agency different from others?</h3>
              <p className="text-muted-foreground">
                Our recipe approach breaks down complex strategies into clear, actionable steps. We combine proven marketing techniques with cutting-edge AI tools for maximum efficiency, and we're obsessed with measuring and optimizing for ROI.
              </p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Do you work with businesses of all sizes?</h3>
              <p className="text-muted-foreground">
                Yes! We have recipes tailored for startups, SMBs, and enterprise clients. Each recipe is customized to your specific industry, budget, and growth stage.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default ServicesIndex;
