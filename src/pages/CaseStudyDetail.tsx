
import { useParams, NavLink } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";

// Define case study data structure
interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  service: string;
  client: string;
  timeline: string;
  challenge: string;
  solution: string;
  approach: {
    title: string;
    description: string;
  }[];
  results: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  image: string;
}

const caseStudiesData: Record<string, CaseStudy> = {
  "ecommerce-growth": {
    id: "ecommerce-growth",
    title: "3X Revenue Growth for Fashion Brand",
    industry: "Fashion Retail",
    service: "Performance Marketing",
    client: "TrendSetters Apparel",
    timeline: "6 Months",
    challenge: "TrendSetters was struggling with high ad costs and low conversion rates despite having high-quality products. Their previous Facebook and Google campaigns were generating traffic but few sales, resulting in unsustainable costs per acquisition.",
    solution: "We implemented our Performance Marketing Pie recipe with a focus on audience segmentation, AI-powered bid management, and dynamic creative optimization. The approach included restructuring ad campaigns based on customer journey stages and implementing advanced tracking to optimize for purchase value rather than just conversions.",
    approach: [
      {
        title: "Customer Journey Mapping",
        description: "We analyzed the full purchase path and identified key dropoff points in the funnel that needed to be addressed."
      },
      {
        title: "Custom Audience Architecture",
        description: "We built detailed audience segments based on purchasing behaviors, interests, and engagement level with the brand."
      },
      {
        title: "AI-Powered Bidding Strategy",
        description: "We implemented machine learning algorithms to optimize bids in real-time based on conversion likelihood scoring."
      },
      {
        title: "Creative Testing Framework",
        description: "We developed a systematic testing approach for ad creatives, messaging, and offers to identify the highest performers."
      },
      {
        title: "Structured Retargeting",
        description: "We created sequenced retargeting campaigns that addressed specific objections at each stage of consideration."
      }
    ],
    results: [
      { label: "ROAS Increase", value: "347%" },
      { label: "Revenue Growth", value: "+196%" },
      { label: "CAC Reduction", value: "-42%" },
      { label: "Conversion Rate", value: "+78%" },
      { label: "Average Order Value", value: "+23%" },
      { label: "Monthly Ad Spend", value: "₹6.5L" }
    ],
    testimonial: {
      quote: "The FlavorDish team completely transformed our online marketing approach. Their detailed understanding of audience segmentation and AI-powered optimization took our e-commerce performance to levels we didn't think were possible.",
      author: "Anita Gupta",
      position: "Marketing Director, TrendSetters Apparel"
    },
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae"
  },
  "b2b-lead-gen": {
    id: "b2b-lead-gen",
    title: "Lead Quality Transformation for SaaS",
    industry: "B2B Software",
    service: "AI Agent",
    client: "CloudManage Solutions",
    timeline: "3 Months",
    challenge: "CloudManage's sales team was spending too much time on unqualified leads. Despite generating a high volume of inquiries through their website and digital ads, only about 15% were turning into sales opportunities, creating inefficiency and frustration.",
    solution: "We implemented our AI Agent Sauce recipe to handle initial lead qualification and nurturing. This included deploying conversational AI on their website, integrating with their CRM, and creating intelligent follow-up sequences to maintain engagement until leads were sales-ready.",
    approach: [
      {
        title: "Qualification Flow Design",
        description: "We created a conversational qualification flow that identified key attributes like company size, budget, timeline, and specific needs."
      },
      {
        title: "CRM Integration",
        description: "We set up seamless data transfer between the AI agent and their CRM, ensuring sales teams had complete conversation history."
      },
      {
        title: "Lead Scoring Implementation",
        description: "We developed an AI-driven lead scoring system based on qualification answers and engagement behaviors."
      },
      {
        title: "24/7 Response System",
        description: "We ensured immediate engagement with all incoming leads regardless of time zone or business hours."
      },
      {
        title: "Human Handoff Protocol",
        description: "We created intelligent routing rules to transfer qualified leads to the appropriate sales team member at the optimal moment."
      }
    ],
    results: [
      { label: "Qualified Leads", value: "+87%" },
      { label: "Sales Team Efficiency", value: "+124%" },
      { label: "Response Time", value: "-92%" },
      { label: "Lead-to-Opportunity", value: "+63%" },
      { label: "Sales Cycle Length", value: "-32%" },
      { label: "Monthly Investment", value: "₹1.2L" }
    ],
    testimonial: {
      quote: "The AI qualification system has completely transformed our sales process. Our team now spends their time talking to genuinely interested prospects rather than educating people who aren't ready to buy. The quality of conversations and our close rates have improved dramatically.",
      author: "Vikram Malhotra",
      position: "Head of Sales, CloudManage Solutions"
    },
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  "local-seo": {
    id: "local-seo",
    title: "Local Market Dominance for Healthcare",
    industry: "Healthcare",
    service: "SEO",
    client: "MediCare Plus",
    timeline: "8 Months",
    challenge: "MediCare Plus, a multi-location healthcare provider, was struggling to rank for local searches in a highly competitive market. Despite having excellent services and patient satisfaction, they were being outranked by larger competitors and losing potential patients to more visible options.",
    solution: "We implemented our SEO Spice Mix recipe with a focus on local SEO optimization. This included location-specific content strategies, technical SEO enhancements, Google Business Profile optimization, and a local backlink building campaign. We also created location-specific landing pages with structured data markup.",
    approach: [
      {
        title: "Technical SEO Foundation",
        description: "We fixed site speed issues, mobile usability problems, and implemented proper location-based structured data markup."
      },
      {
        title: "Google Business Profile Optimization",
        description: "We enhanced all location listings with comprehensive information, Q&As, regular posts, and a review generation strategy."
      },
      {
        title: "Location-Specific Content",
        description: "We created unique, medically-accurate content for each location with local keywords and relevant neighborhood information."
      },
      {
        title: "Local Citation Building",
        description: "We ensured consistent NAP (Name, Address, Phone) information across all healthcare directories and local business listings."
      },
      {
        title: "Review Management System",
        description: "We implemented a patient feedback system that encouraged satisfied patients to share their experiences online."
      }
    ],
    results: [
      { label: "Organic Traffic", value: "+264%" },
      { label: "Local Pack Presence", value: "92%" },
      { label: "Appointment Bookings", value: "+78%" },
      { label: "Local Rankings", value: "Top 3 for 87% of keywords" },
      { label: "Online Reviews", value: "+156%" },
      { label: "Monthly Investment", value: "₹85K" }
    ],
    testimonial: {
      quote: "FlavorDish's local SEO strategy completely transformed our online visibility. We're now the first choice that appears when people search for healthcare in our locations. Our appointment bookings have increased significantly, and we're seeing a much better quality of leads coming through our website.",
      author: "Dr. Rajesh Shah",
      position: "Managing Director, MediCare Plus"
    },
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
  }
};

const CaseStudyDetail = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  
  // Handle invalid case study ID
  if (!caseStudyId || !caseStudiesData[caseStudyId]) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <p className="mb-8">The case study you're looking for doesn't exist.</p>
        <Button variant="default" asChild>
          <NavLink to="/case-studies">View All Case Studies</NavLink>
        </Button>
      </div>
    );
  }
  
  const caseStudy = caseStudiesData[caseStudyId];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
              {caseStudy.industry}
            </span>
            <span className="text-xs bg-neon/20 text-black rounded-full px-3 py-1">
              {caseStudy.service}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{caseStudy.title}</h1>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-muted-foreground">
            <div>
              <span className="font-medium text-foreground">Client:</span> {caseStudy.client}
            </div>
            <div>
              <span className="font-medium text-foreground">Timeline:</span> {caseStudy.timeline}
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {caseStudy.image && (
                <div className="mb-8 overflow-hidden rounded-xl">
                  <img 
                    src={caseStudy.image}
                    alt={caseStudy.title}
                    className="w-full h-auto"
                  />
                </div>
              )}
              
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-muted-foreground mb-8">{caseStudy.challenge}</p>
                
                <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                <p className="text-muted-foreground mb-8">{caseStudy.solution}</p>
                
                <h2 className="text-2xl font-bold mb-6">Our Approach</h2>
                <div className="space-y-6 mb-8">
                  {caseStudy.approach.map((step, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 mt-1">
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Results Section */}
              <div>
                <h2 className="text-2xl font-bold mb-6">The Results</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1">{result.label}</p>
                      <p className="text-2xl font-bold text-primary">{result.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Testimonial */}
              {caseStudy.testimonial && (
                <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-primary mb-8">
                  <p className="text-lg italic mb-4">"{caseStudy.testimonial.quote}"</p>
                  <div>
                    <p className="font-bold">{caseStudy.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{caseStudy.testimonial.position}</p>
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 sticky top-24">
                <h3 className="text-xl font-bold mb-4">Recipe Used</h3>
                <p className="text-lg font-medium mb-6">{caseStudy.service}</p>
                
                <h4 className="font-bold text-sm uppercase text-muted-foreground mb-3">Key Ingredients</h4>
                <ul className="space-y-2 mb-6">
                  {caseStudy.approach.map((step, index) => (
                    <li key={index} className="flex items-start">
                      <Check size={16} className="text-green-500 mr-2 mt-1" />
                      <span>{step.title}</span>
                    </li>
                  ))}
                </ul>
                
                <h4 className="font-bold text-sm uppercase text-muted-foreground mb-3">Best For</h4>
                <p className="mb-6 text-muted-foreground">{caseStudy.industry} businesses looking to achieve similar growth in visibility and customer acquisition.</p>
                
                <Button className="w-full mb-3">Get a Similar Recipe</Button>
                <Button variant="outline" className="w-full" asChild>
                  <NavLink to={`/services/${caseStudy.service.toLowerCase().replace(/\s+/g, '-')}`}>
                    Learn More About This Recipe
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation */}
      <section className="py-8 border-t border-gray-200">
        <div className="container-custom">
          <div className="flex justify-between">
            <Button variant="ghost" asChild>
              <NavLink to="/case-studies" className="flex items-center">
                <ArrowLeft size={16} className="mr-2" />
                Back to Case Studies
              </NavLink>
            </Button>
            
            <Button variant="ghost" asChild>
              <NavLink to={`/services/${caseStudy.service.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center">
                View Recipe
                <ArrowRight size={16} className="ml-2" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Want Similar Results for Your Business?"
        subtitle="Let's discuss how our recipe can be customized for your specific needs"
        buttonText="Get Your Free Audit"
      />
    </>
  );
};

export default CaseStudyDetail;
