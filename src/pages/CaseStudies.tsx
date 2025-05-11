
import { useState } from "react";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "@/components/CaseStudyCard";
import CallToAction from "@/components/CallToAction";

const CaseStudies = () => {
  const [filter, setFilter] = useState("all");
  
  const caseStudies = [
    {
      id: "ecommerce-growth",
      title: "3X Revenue Growth for Fashion Brand",
      industry: "Fashion Retail",
      service: "Performance Marketing",
      metrics: [
        { label: "ROAS", value: "347%" },
        { label: "Revenue Growth", value: "+196%" },
        { label: "CAC Reduction", value: "-42%" },
        { label: "Monthly Ad Spend", value: "₹6.5L" }
      ],
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae"
    },
    {
      id: "b2b-lead-gen",
      title: "Lead Quality Transformation for SaaS",
      industry: "B2B Software",
      service: "AI Agent",
      metrics: [
        { label: "Qualified Leads", value: "+87%" },
        { label: "Sales Team Efficiency", value: "+124%" },
        { label: "Response Time", value: "-92%" },
        { label: "Monthly Investment", value: "₹1.2L" }
      ],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    },
    {
      id: "local-seo",
      title: "Local Market Dominance for Healthcare",
      industry: "Healthcare",
      service: "SEO",
      metrics: [
        { label: "Organic Traffic", value: "+264%" },
        { label: "Local Pack Presence", value: "92%" },
        { label: "Appointment Bookings", value: "+78%" },
        { label: "Monthly Investment", value: "₹85K" }
      ],
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
    },
    {
      id: "education-funnel",
      title: "Enrollment Pipeline for Online Courses",
      industry: "Education",
      service: "WhatsApp & Email",
      metrics: [
        { label: "Lead-to-Enrollment", value: "+94%" },
        { label: "Response Rate", value: "+156%" },
        { label: "Cost per Enrollment", value: "-58%" },
        { label: "Monthly Investment", value: "₹95K" }
      ],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
    },
    {
      id: "social-growth",
      title: "Brand Community Growth for Food Brand",
      industry: "Consumer Products",
      service: "Social Media",
      metrics: [
        { label: "Follower Growth", value: "+345%" },
        { label: "Engagement Rate", value: "8.7%" },
        { label: "Website Traffic", value: "+178%" },
        { label: "Monthly Investment", value: "₹1.1L" }
      ],
      image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f"
    },
    {
      id: "ecom-conversion",
      title: "Conversion Optimization for Home Decor",
      industry: "Home Decor",
      service: "Website Funnel",
      metrics: [
        { label: "Conversion Rate", value: "+68%" },
        { label: "Average Order Value", value: "+41%" },
        { label: "Cart Abandonment", value: "-52%" },
        { label: "Monthly Investment", value: "₹1.3L" }
      ],
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf"
    }
  ];
  
  const filteredCaseStudies = filter === "all" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.service.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Taste Test</h1>
            <p className="text-xl text-muted-foreground">
              Real results from our marketing recipes across different industries and business goals
            </p>
          </div>
        </div>
      </section>
      
      {/* Filters Section */}
      <section className="py-8 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button 
              variant={filter === "all" ? "default" : "outline"} 
              onClick={() => setFilter("all")}
              className="rounded-full"
            >
              All
            </Button>
            <Button 
              variant={filter === "performance" ? "default" : "outline"} 
              onClick={() => setFilter("performance")}
              className="rounded-full"
            >
              Performance Marketing
            </Button>
            <Button 
              variant={filter === "seo" ? "default" : "outline"} 
              onClick={() => setFilter("seo")}
              className="rounded-full"
            >
              SEO
            </Button>
            <Button 
              variant={filter === "social" ? "default" : "outline"} 
              onClick={() => setFilter("social")}
              className="rounded-full"
            >
              Social Media
            </Button>
            <Button 
              variant={filter === "email" ? "default" : "outline"} 
              onClick={() => setFilter("email")}
              className="rounded-full"
            >
              WhatsApp & Email
            </Button>
            <Button 
              variant={filter === "ai" ? "default" : "outline"} 
              onClick={() => setFilter("ai")}
              className="rounded-full"
            >
              AI Agent
            </Button>
            <Button 
              variant={filter === "website" ? "default" : "outline"} 
              onClick={() => setFilter("website")}
              className="rounded-full"
            >
              Website Funnel
            </Button>
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                id={study.id}
                title={study.title}
                industry={study.industry}
                service={study.service}
                metrics={study.metrics}
                image={study.image}
              />
            ))}
          </div>
          
          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold mb-4">No case studies found</h3>
              <p className="text-muted-foreground mb-6">
                We don't have any case studies matching your filter criteria yet.
              </p>
              <Button 
                variant="default"
                onClick={() => setFilter("all")}
              >
                View All Case Studies
              </Button>
            </div>
          )}
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear directly from businesses who've experienced our marketing recipes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-primary">N</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Neha Kapoor</h3>
                  <p className="text-muted-foreground">Sales Director, Global Finance Ltd</p>
                </div>
              </div>
              
              <blockquote className="text-lg italic text-muted-foreground mb-8">
                "The FlavorDish team completely transformed how we approach lead generation and qualification. Their AI agents have automated our initial prospect interactions while maintaining a personal touch. This has allowed our sales team to focus solely on qualified opportunities, resulting in a 30% increase in close rates and significantly shorter sales cycles. The ROI has been exceptional."
              </blockquote>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">52%</div>
                    <p className="text-sm text-muted-foreground">Sales Team Productivity</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">30%</div>
                    <p className="text-sm text-muted-foreground">Increase in Close Rate</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">263%</div>
                    <p className="text-sm text-muted-foreground">ROI on Marketing</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline">View More Testimonials</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results At A Glance */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Results At A Glance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The combined impact of our marketing recipes across all clients
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">₹58Cr+</div>
              <p className="text-muted-foreground">Revenue Generated</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">3.7x</div>
              <p className="text-muted-foreground">Average ROAS</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">42%</div>
              <p className="text-muted-foreground">Lead Quality Improvement</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
              <div className="text-4xl font-bold text-primary mb-2">156%</div>
              <p className="text-muted-foreground">Conversion Rate Lift</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Want Results Like These?"
        subtitle="Schedule a free audit to see how our recipes can help your business grow"
      />
    </>
  );
};

export default CaseStudies;
