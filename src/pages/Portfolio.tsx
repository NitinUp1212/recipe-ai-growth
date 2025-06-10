
import { useState } from "react";
import { ExternalLink, Calendar, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import CaseStudyCard from "@/components/CaseStudyCard";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: "ecommerce-growth",
      title: "E-commerce Revenue Growth by 300%",
      category: "digital-marketing",
      client: "FashionHub Online",
      industry: "E-commerce",
      service: "Performance Marketing",
      duration: "6 months",
      description: "Complete digital transformation for an online fashion retailer using AI-powered marketing strategies.",
      results: [
        { metric: "Revenue Growth", value: "300%" },
        { metric: "ROAS", value: "4.2x" },
        { metric: "Customer Acquisition Cost", value: "-45%" },
        { metric: "Conversion Rate", value: "+180%" }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      technologies: ["Google Ads", "Facebook Ads", "AI Bidding", "Analytics"],
      testimonial: "UnknownHat transformed our business completely. The AI-driven approach to marketing gave us results we never imagined possible."
    },
    {
      id: "saas-lead-generation",
      title: "SaaS Lead Generation System",
      category: "ai-solutions",
      client: "TechFlow Solutions",
      industry: "Technology",
      service: "AI Agent + Marketing",
      duration: "4 months",
      description: "Developed an AI-powered lead qualification system that revolutionized their sales process.",
      results: [
        { metric: "Qualified Leads", value: "+250%" },
        { metric: "Sales Cycle", value: "-40%" },
        { metric: "Lead Response Time", value: "2 minutes" },
        { metric: "Conversion Rate", value: "+85%" }
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["AI Chatbots", "CRM Integration", "Lead Scoring", "Automation"],
      testimonial: "The AI agent handles our leads so efficiently that our sales team can focus on closing deals instead of qualifying prospects."
    },
    {
      id: "laptop-repair-business",
      title: "Local Laptop Repair Business Growth",
      category: "hardware-services",
      client: "TechFix Solutions",
      industry: "Hardware Services",
      service: "Complete Business Setup",
      duration: "8 months",
      description: "Helped establish and grow a laptop repair business from startup to profitable enterprise.",
      results: [
        { metric: "Monthly Revenue", value: "₹2,50,000" },
        { metric: "Customer Base", value: "500+ clients" },
        { metric: "Service Centers", value: "3 locations" },
        { metric: "Team Size", value: "12 technicians" }
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Business Setup", "Inventory Management", "Customer Service", "Quality Control"],
      testimonial: "From zero to profitable business in 8 months. UnknownHat guided us through every step of building our laptop repair empire."
    },
    {
      id: "property-portal",
      title: "Real Estate Portal Development",
      category: "property-services",
      client: "DreamHome Properties",
      industry: "Real Estate",
      service: "Digital Platform + Marketing",
      duration: "10 months",
      description: "Created a comprehensive property dealing platform with integrated marketing system.",
      results: [
        { metric: "Properties Listed", value: "2,000+" },
        { metric: "Monthly Visitors", value: "50,000+" },
        { metric: "Successful Deals", value: "200+" },
        { metric: "Revenue Growth", value: "400%" }
      ],
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      technologies: ["Property Management", "Lead Generation", "CRM", "Digital Marketing"],
      testimonial: "The platform they built revolutionized how we do business. Our property deals have increased 4x since launch."
    },
    {
      id: "restaurant-digital",
      title: "Restaurant Chain Digital Transformation",
      category: "digital-marketing",
      client: "Spice Garden Restaurants",
      industry: "Food & Beverage",
      service: "Complete Digital Strategy",
      duration: "12 months",
      description: "End-to-end digital transformation for a restaurant chain including online ordering and marketing.",
      results: [
        { metric: "Online Orders", value: "+500%" },
        { metric: "Customer Retention", value: "+60%" },
        { metric: "Average Order Value", value: "+35%" },
        { metric: "New Locations", value: "8 outlets" }
      ],
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      technologies: ["Online Ordering", "Social Media", "WhatsApp Marketing", "Analytics"],
      testimonial: "Our restaurant business doubled during pandemic because of their digital solutions. They literally saved our business."
    },
    {
      id: "ed-tech-growth",
      title: "EdTech Startup Scaling",
      category: "digital-marketing",
      client: "LearnSmart Academy",
      industry: "Education",
      service: "Growth Marketing + AI",
      duration: "9 months",
      description: "Scaled an education technology startup using AI-powered marketing and course optimization.",
      results: [
        { metric: "Student Enrollment", value: "+800%" },
        { metric: "Course Completion Rate", value: "+45%" },
        { metric: "Revenue Growth", value: "600%" },
        { metric: "Market Reach", value: "15 cities" }
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      technologies: ["EdTech Marketing", "AI Course Recommendations", "Student Analytics", "Automation"],
      testimonial: "From 100 students to 8,000 students in 9 months. Their growth strategies are phenomenal."
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "ai-solutions", label: "AI Solutions" },
    { id: "hardware-services", label: "Hardware Services" },
    { id: "property-services", label: "Property Services" }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const stats = [
    { icon: <TrendingUp size={32} />, value: "500%", label: "Average ROI Increase" },
    { icon: <Users size={32} />, value: "100+", label: "Happy Clients" },
    { icon: <Award size={32} />, value: "50+", label: "Successful Projects" },
    { icon: <Calendar size={32} />, value: "3+", label: "Years of Excellence" }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover how we've helped businesses grow across different industries with our innovative solutions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-primary/5 to-neon/5 rounded-lg">
              <div className="text-primary mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="recipe-card group">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs bg-primary/10 text-primary rounded-full px-3 py-1">
                  {project.industry}
                </span>
                <span className="text-xs bg-neon/20 text-black rounded-full px-3 py-1">
                  {project.service}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                {project.results.slice(0, 2).map((result, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                    <p className="text-lg font-bold text-primary">{result.value}</p>
                    <p className="text-xs text-gray-600">{result.metric}</p>
                  </div>
                ))}
              </div>
              
              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-sm italic text-gray-600">"{project.testimonial}"</p>
                <p className="text-xs font-medium mt-2">- {project.client}</p>
              </div>
              
              <Button className="w-full group">
                View Full Case Study
                <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Become Our Next Success Story?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you achieve similar results for your business. Contact us today for a free consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://wa.me/918791363283" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Start Your Success Story
            </a>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Download Portfolio PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
