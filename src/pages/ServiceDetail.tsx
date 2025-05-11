import { useState } from "react";
import { useParams } from "react-router-dom";
import { Check, BarChart3, Search, Globe, MessageSquare, Bot, LineChart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CallToAction from "@/components/CallToAction";

// Define service data structure
interface ServiceData {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  ingredients: string[];
  steps: {
    title: string;
    description: string;
  }[];
  serving: string[];
  aiRole: string;
  caseStudies: {
    title: string;
    industry: string;
    challenge: string;
    solution: string;
    results: {
      label: string;
      value: string;
    }[];
    image?: string;
  }[];
}

const servicesData: Record<string, ServiceData> = {
  "performance-marketing": {
    id: "performance-marketing",
    title: "Performance Marketing Pie",
    description: "A delicious blend of paid advertising strategies across multiple platforms to drive qualified leads and measurable sales.",
    icon: <BarChart3 size={40} />,
    ingredients: [
      "Meta Ads Manager",
      "Google Ads Platform",
      "LinkedIn Campaign Manager",
      "Conversion Tracking",
      "AI Bidding Algorithm",
      "Custom Audience Creation",
      "A/B Testing Framework"
    ],
    steps: [
      {
        title: "Audience Research & Segmentation",
        description: "Identify your ideal customers and create detailed audience segments based on demographics, interests, and behaviors."
      },
      {
        title: "Multi-Channel Campaign Setup",
        description: "Deploy targeted campaigns across Google, Meta, and other relevant platforms with custom messaging for each segment."
      },
      {
        title: "AI-Powered Bid Management",
        description: "Implement machine learning algorithms to optimize bids in real-time based on conversion likelihood."
      },
      {
        title: "Creative Testing Framework",
        description: "Continuously test ad variations to identify top-performing messages, visuals, and calls to action."
      },
      {
        title: "Attribution & Analytics",
        description: "Track the complete customer journey to understand which channels and touchpoints drive the most value."
      }
    ],
    serving: [
      "E-commerce businesses looking to scale efficiently",
      "B2B companies with complex sales cycles",
      "Service-based businesses targeting specific customer segments",
      "Startups looking to validate their market fit quickly"
    ],
    aiRole: "Our AI tools analyze vast amounts of campaign data to predict which audiences and creatives will perform best, automatically adjust bids to maximize ROI, and identify new opportunities for scaling your campaigns.",
    caseStudies: [
      {
        title: "E-commerce Revenue Growth",
        industry: "Fashion Retail",
        challenge: "A fashion retailer was struggling with high ad costs and low conversion rates despite having quality products.",
        solution: "Implemented our Performance Marketing Pie with AI-powered audience targeting and dynamic creative optimization.",
        results: [
          { label: "ROAS Increase", value: "247%" },
          { label: "Cost per Acquisition", value: "-38%" },
          { label: "Revenue Growth", value: "+152%" },
          { label: "Ad Spend", value: "₹5,00,000/month" }
        ],
        image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db"
      },
      {
        title: "B2B Lead Generation Transformation",
        industry: "SaaS Company",
        challenge: "A B2B SaaS company was generating many leads but few qualified prospects who converted to sales.",
        solution: "Restructured their campaigns with intent-based targeting and implemented lead scoring with our AI system.",
        results: [
          { label: "Qualified Leads", value: "+94%" },
          { label: "Cost per Qualified Lead", value: "-52%" },
          { label: "Sales Cycle Length", value: "-35%" },
          { label: "Ad Spend", value: "₹8,50,000/month" }
        ],
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
      }
    ]
  },
  "seo": {
    id: "seo",
    title: "SEO Spice Mix",
    description: "A powerful blend of organic ranking techniques to boost your visibility and drive targeted traffic that converts.",
    icon: <Search size={40} />,
    ingredients: [
      "Technical SEO Audit Tools",
      "Keyword Research Suite",
      "Content Optimization Platform",
      "Backlink Analysis Tools",
      "AI Content Generation",
      "Schema Markup Generator",
      "Core Web Vitals Optimization"
    ],
    steps: [
      {
        title: "Technical Foundation Building",
        description: "Ensure your website's technical infrastructure supports optimal crawling and indexing by search engines."
      },
      {
        title: "Strategic Keyword Mapping",
        description: "Research and map high-intent keywords to relevant pages throughout your site architecture."
      },
      {
        title: "Content Enhancement",
        description: "Create and optimize cornerstone content that addresses user intent and establishes topical authority."
      },
      {
        title: "Authority Building",
        description: "Develop a strategic approach to earning high-quality backlinks from relevant industry sources."
      },
      {
        title: "Performance Monitoring",
        description: "Track rankings, organic traffic, and conversion metrics to continuously refine your SEO strategy."
      }
    ],
    serving: [
      "Content-driven businesses seeking to reduce paid acquisition costs",
      "Local businesses targeting geographic-specific audiences",
      "E-commerce websites looking to increase product visibility",
      "B2B companies establishing thought leadership"
    ],
    aiRole: "Our AI tools generate SEO-optimized content briefs, identify content gaps in your strategy, automatically generate schema markup, and predict which keywords will provide the highest ROI based on competition and search intent.",
    caseStudies: [
      {
        title: "Local Business Dominance",
        industry: "Healthcare Provider",
        challenge: "A multi-location healthcare provider was struggling to rank for local searches in a competitive market.",
        solution: "Implemented our SEO Spice Mix with location-specific content strategies and technical optimizations.",
        results: [
          { label: "Local Pack Presence", value: "87% of Locations" },
          { label: "Organic Traffic", value: "+236%" },
          { label: "Appointment Bookings", value: "+78%" },
          { label: "Monthly Investment", value: "₹75,000" }
        ],
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
      },
      {
        title: "E-commerce Category Dominance",
        industry: "Home Appliances",
        challenge: "An e-commerce appliance store was losing organic visibility to larger competitors and marketplaces.",
        solution: "Created in-depth product and category pages with enhanced schema markup and content optimization.",
        results: [
          { label: "Top 3 Rankings", value: "+412%" },
          { label: "Organic Revenue", value: "+189%" },
          { label: "Organic Traffic Value", value: "₹12L/month" },
          { label: "Monthly Investment", value: "₹1,20,000" }
        ],
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
      }
    ]
  },
  "social-media": {
    id: "social-media",
    title: "Social Media Sizzler",
    description: "A captivating content strategy that builds community, drives engagement, and establishes your brand voice.",
    icon: <Globe size={40} />,
    ingredients: [
      "Content Calendar",
      "Social Media Management Tools",
      "Design & Video Creation Software",
      "Analytics Dashboard",
      "Community Management Framework",
      "Trend Monitoring System",
      "AI Content Generator"
    ],
    steps: [
      {
        title: "Brand Voice Development",
        description: "Define your unique brand personality and content pillars that resonate with your target audience."
      },
      {
        title: "Content Strategy Creation",
        description: "Develop a balanced mix of educational, entertaining, and promotional content optimized for each platform."
      },
      {
        title: "Engagement Workflow",
        description: "Implement systems for consistent community interaction, response management, and relationship building."
      },
      {
        title: "Growth Tactics",
        description: "Deploy platform-specific growth strategies including hashtag research, collaboration opportunities, and trend leveraging."
      },
      {
        title: "Performance Analysis",
        description: "Measure content performance against business goals and continuously refine your approach."
      }
    ],
    serving: [
      "Consumer brands building brand awareness and loyalty",
      "Influencers and personal brands",
      "Service businesses showcasing their expertise",
      "Community-focused organizations"
    ],
    aiRole: "Our AI tools automatically generate content ideas based on trending topics, schedule posts for optimal engagement times, analyze sentiment in comments and messages, and predict which content types will perform best with your audience.",
    caseStudies: [
      {
        title: "Food Brand Community Growth",
        industry: "Packaged Food",
        challenge: "A premium food brand had high-quality products but low brand awareness and social engagement.",
        solution: "Implemented our Social Media Sizzler with user-generated content strategy and influencer partnerships.",
        results: [
          { label: "Follower Growth", value: "+345%" },
          { label: "Engagement Rate", value: "8.7% (Industry avg: 1.2%)" },
          { label: "Website Traffic from Social", value: "+178%" },
          { label: "Monthly Investment", value: "₹90,000" }
        ],
        image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
      },
      {
        title: "B2B Thought Leadership",
        industry: "Financial Services",
        challenge: "A financial services firm was struggling to build credibility and generate leads through social media.",
        solution: "Created a content strategy focused on educational content, data visualization, and executive branding.",
        results: [
          { label: "LinkedIn Engagement", value: "+287%" },
          { label: "Lead Generation", value: "+65%" },
          { label: "Sales Meetings", value: "+42%" },
          { label: "Monthly Investment", value: "₹1,10,000" }
        ],
        image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9"
      }
    ]
  },
  "messaging": {
    id: "messaging",
    title: "WhatsApp & Email Masala",
    description: "A perfectly timed messaging strategy that nurtures leads, builds customer relationships, and drives conversions.",
    icon: <MessageSquare size={40} />,
    ingredients: [
      "WhatsApp Business API",
      "Email Marketing Platform",
      "Marketing Automation Tools",
      "Customer Segmentation Engine",
      "Message Templates",
      "A/B Testing Framework",
      "AI Personalization Engine"
    ],
    steps: [
      {
        title: "Customer Journey Mapping",
        description: "Identify key touchpoints where messaging can provide value and move customers through your funnel."
      },
      {
        title: "Automation Workflow Creation",
        description: "Build triggered sequences that deliver the right message at the right time based on customer actions."
      },
      {
        title: "Content Personalization",
        description: "Develop dynamic content modules that adapt to individual customer data and behaviors."
      },
      {
        title: "Compliance & Deliverability",
        description: "Implement best practices to ensure messages reach customers and comply with regulations."
      },
      {
        title: "Testing & Optimization",
        description: "Continuously test message variables to improve open rates, engagement, and conversions."
      }
    ],
    serving: [
      "E-commerce businesses reducing cart abandonment and driving repeat purchases",
      "Service businesses with long consideration cycles",
      "Membership and subscription-based companies",
      "Educational institutions with complex enrollment processes"
    ],
    aiRole: "Our AI tools craft personalized message content based on customer behavior, automatically determine the best time to send each message, analyze response patterns to improve future communications, and predict which customers are most likely to convert.",
    caseStudies: [
      {
        title: "E-commerce Recovery Campaign",
        industry: "Beauty Products",
        challenge: "A beauty brand was losing significant revenue from abandoned carts and one-time purchasers.",
        solution: "Implemented our WhatsApp & Email Masala with personalized recovery sequences and loyalty program.",
        results: [
          { label: "Cart Recovery Rate", value: "+72%" },
          { label: "Repeat Purchase Rate", value: "+48%" },
          { label: "Customer Lifetime Value", value: "+65%" },
          { label: "Monthly Investment", value: "₹65,000" }
        ],
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
      },
      {
        title: "Education Enrollment Funnel",
        industry: "Online Courses",
        challenge: "An online education provider had high lead costs but poor conversion rates to paid enrollments.",
        solution: "Created a multi-channel messaging funnel with WhatsApp consultation booking and personalized content delivery.",
        results: [
          { label: "Lead-to-Enrollment", value: "+94%" },
          { label: "Average Response Time", value: "-87%" },
          { label: "Cost per Enrollment", value: "-42%" },
          { label: "Monthly Investment", value: "₹85,000" }
        ],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
      }
    ]
  },
  "ai-agent": {
    id: "ai-agent",
    title: "AI Agent Sauce",
    description: "Intelligent conversation systems that qualify leads, provide 24/7 support, and enhance customer experiences.",
    icon: <Bot size={40} />,
    ingredients: [
      "Conversational AI Platform",
      "CRM Integration",
      "Natural Language Processing",
      "Intent Recognition Engine",
      "Omnichannel Deployment",
      "Voice Recognition",
      "Sentiment Analysis"
    ],
    steps: [
      {
        title: "Conversation Design",
        description: "Map out conversation flows that feel natural while efficiently guiding users toward desired outcomes."
      },
      {
        title: "AI Training & Knowledge Base",
        description: "Train your AI on your specific products, services, and common customer questions."
      },
      {
        title: "System Integration",
        description: "Connect your AI agents with your existing tools like CRM, helpdesk, and payment systems."
      },
      {
        title: "Human Handoff Protocols",
        description: "Design seamless transitions to human agents when conversations require additional expertise."
      },
      {
        title: "Analysis & Improvement",
        description: "Continuously review conversations to identify opportunities for improving accuracy and effectiveness."
      }
    ],
    serving: [
      "Businesses with high volumes of repetitive customer inquiries",
      "Companies with complex lead qualification needs",
      "Organizations with global customer bases across time zones",
      "Businesses looking to scale support without linear team growth"
    ],
    aiRole: "Our AI agents handle initial lead qualification, answer common customer questions instantly, process simple transactions and appointments, identify sales opportunities in conversations, and route complex issues to the right human team members.",
    caseStudies: [
      {
        title: "Insurance Lead Qualification",
        industry: "Insurance",
        challenge: "An insurance provider had sales teams wasting time on unqualified leads and basic policy questions.",
        solution: "Implemented our AI Agent Sauce to handle initial qualification and basic policy information.",
        results: [
          { label: "Sales Team Efficiency", value: "+143%" },
          { label: "Lead Response Time", value: "-95%" },
          { label: "Conversion Rate", value: "+58%" },
          { label: "Monthly Investment", value: "₹1,25,000" }
        ],
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a"
      },
      {
        title: "E-commerce Support Transformation",
        industry: "Consumer Electronics",
        challenge: "A growing electronics retailer couldn't scale customer support to match sales growth.",
        solution: "Deployed AI agents across website, WhatsApp, and email to handle common questions and order status inquiries.",
        results: [
          { label: "Support Tickets", value: "-64%" },
          { label: "Resolution Time", value: "-78%" },
          { label: "Customer Satisfaction", value: "+23%" },
          { label: "Monthly Investment", value: "₹95,000" }
        ],
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
      }
    ]
  },
  "website-funnel": {
    id: "website-funnel",
    title: "Website Funnel Delight",
    description: "Conversion-optimized web experiences that guide visitors through a seamless journey to becoming customers.",
    icon: <LineChart size={40} />,
    ingredients: [
      "UX Design Framework",
      "Analytics Implementation",
      "Heat Mapping Tools",
      "A/B Testing Platform",
      "Conversion Rate Optimization",
      "Landing Page Templates",
      "Form Optimization Tools"
    ],
    steps: [
      {
        title: "User Journey Analysis",
        description: "Map the current user paths and identify friction points and drop-off locations."
      },
      {
        title: "Conversion-Focused Design",
        description: "Restructure page layouts and elements to guide users toward your primary conversion goals."
      },
      {
        title: "Messaging Hierarchy",
        description: "Craft persuasive copy that addresses user concerns and highlights benefits at each funnel stage."
      },
      {
        title: "Technical Performance",
        description: "Optimize loading speed and technical elements that impact user experience and search visibility."
      },
      {
        title: "Testing & Iteration",
        description: "Implement systematic testing to continually improve conversion rates across all pages."
      }
    ],
    serving: [
      "Service businesses with complex offerings that need clear explanation",
      "E-commerce sites with cart abandonment issues",
      "Lead generation websites with multi-step conversion processes",
      "SaaS companies with free trial or demo conversion goals"
    ],
    aiRole: "Our AI tools analyze user behavior patterns to identify optimization opportunities, automatically generate and test different copy variations, dynamically adjust page elements based on visitor characteristics, and predict which design changes will have the highest conversion impact.",
    caseStudies: [
      {
        title: "SaaS Demo Request Transformation",
        industry: "Business Software",
        challenge: "A SaaS company had high traffic but low demo request conversions despite a quality product.",
        solution: "Implemented our Website Funnel Delight with simplified forms and personalized social proof.",
        results: [
          { label: "Demo Requests", value: "+187%" },
          { label: "Form Abandonment", value: "-62%" },
          { label: "Lead Quality Score", value: "+35%" },
          { label: "Monthly Investment", value: "₹1,10,000" }
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
      },
      {
        title: "E-commerce Purchase Path",
        industry: "Home Decor",
        challenge: "A home decor retailer had good traffic but high cart abandonment and low average order value.",
        solution: "Redesigned product pages and checkout process with dynamic recommendations and trust elements.",
        results: [
          { label: "Conversion Rate", value: "+68%" },
          { label: "Average Order Value", value: "+41%" },
          { label: "Cart Abandonment", value: "-52%" },
          { label: "Monthly Investment", value: "₹1,35,000" }
        ],
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf"
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [activeTab, setActiveTab] = useState("ingredients");
  
  // Handle invalid service ID
  if (!serviceId || !servicesData[serviceId]) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8">The service you're looking for doesn't exist.</p>
        <Button variant="default" asChild>
          <a href="/services">View All Services</a>
        </Button>
      </div>
    );
  }
  
  const service = servicesData[serviceId];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-primary/10 p-5 rounded-full">
                {service.icon}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">{service.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 text-center">{service.description}</p>
          </div>
        </div>
      </section>
      
      {/* Recipe Details */}
      <section className="py-16">
        <div className="container-custom">
          <Tabs defaultValue="ingredients" value={activeTab} onValueChange={setActiveTab} className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="steps">Steps</TabsTrigger>
              <TabsTrigger value="serving">Serving</TabsTrigger>
              <TabsTrigger value="garnish">Garnish</TabsTrigger>
              <TabsTrigger value="variations">Variations</TabsTrigger>
            </TabsList>
            
            {/* Ingredients */}
            <TabsContent value="ingredients" className="animate-fade-in">
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Key Ingredients</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center">
                      <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span>{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Steps */}
            <TabsContent value="steps" className="animate-fade-in">
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Step-by-Step Process</h2>
                <div className="space-y-8">
                  {service.steps.map((step, index) => (
                    <div key={index} className="relative pl-12 border-l-2 border-primary/20 pb-8 last:pb-0">
                      <div className="absolute left-[-17px] top-0 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Serving */}
            <TabsContent value="serving" className="animate-fade-in">
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Best Served For</h2>
                <div className="space-y-4">
                  {service.serving.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <Check size={20} className="text-green-500 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            {/* Garnish (AI Role) */}
            <TabsContent value="garnish" className="animate-fade-in">
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">AI Agent Role</h2>
                <p className="text-muted-foreground mb-6">{service.aiRole}</p>
                
                <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">How AI Enhances This Recipe</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <div className="mr-4 mt-1 text-neon">
                        <Bot size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Automation & Scale</h4>
                        <p className="text-gray-200">Handle repetitive tasks at scale while maintaining quality and consistency</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1 text-neon">
                        <Bot size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Data-Driven Decisions</h4>
                        <p className="text-gray-200">Analyze patterns and predict outcomes to optimize for maximum results</p>
                      </div>
                    </li>
                    <li className="flex">
                      <div className="mr-4 mt-1 text-neon">
                        <Bot size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Personalization</h4>
                        <p className="text-gray-200">Create tailored experiences for each customer based on their behavior and preferences</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            {/* Variations (Case Studies) */}
            <TabsContent value="variations" className="animate-fade-in">
              <div className="bg-white rounded-2xl shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Case Studies</h2>
                <div className="space-y-12">
                  {service.caseStudies.map((case_study, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-6 md:gap-12">
                      {case_study.image && (
                        <div className="overflow-hidden rounded-lg h-64">
                          <img 
                            src={case_study.image} 
                            alt={case_study.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      
                      <div>
                        <span className="text-sm font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-3 inline-block">
                          {case_study.industry}
                        </span>
                        <h3 className="text-2xl font-bold mb-3">{case_study.title}</h3>
                        
                        <div className="mb-4">
                          <h4 className="font-bold text-gray-700 mb-1">Challenge:</h4>
                          <p className="text-muted-foreground">{case_study.challenge}</p>
                        </div>
                        
                        <div className="mb-4">
                          <h4 className="font-bold text-gray-700 mb-1">Solution:</h4>
                          <p className="text-muted-foreground">{case_study.solution}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-700 mb-2">Results:</h4>
                          <div className="grid grid-cols-2 gap-3">
                            {case_study.results.map((result, i) => (
                              <div key={i} className="bg-gray-50 p-3 rounded">
                                <p className="text-xs text-gray-500">{result.label}</p>
                                <p className="text-lg font-bold">{result.value}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Other Services */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3">Try Our Other Recipes</h2>
            <p className="text-muted-foreground">Complete your marketing menu with these complementary recipes</p>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.values(servicesData)
              .filter(s => s.id !== serviceId)
              .slice(0, 3)
              .map((service, index) => (
                <RecipeCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={`/services/${service.id}`}
                  ingredients={service.ingredients.slice(0, 3)}
                />
              ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title={`Ready to Try Our ${service.title}?`}
        subtitle="Get a free strategy session and see how this recipe can work for your business"
      />
    </>
  );
};

export default ServiceDetail;
