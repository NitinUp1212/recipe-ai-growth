
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";

const About = () => {
  const teamMembers = [
    {
      name: "Nitin Raghav",
      position: "Founder & Head Chef",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      bio: "Digital marketing veteran with 7+ years of experience in IT Industry. AI enthusiast and growth strategist specializing in performance marketing.",
      facility: "Performance Marketing & AI Strategy"
    },
    {
      name: "Bittu Raghav",
      position: "Co-Founder & Technical Chef",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      bio: "Technical expert specializing in system development and digital infrastructure with expertise in web technologies.",
      facility: "System Development & Technical Solutions"
    },
    {
      name: "Mayank Saini",
      position: "Co-Founder & Marketing Chef",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Marketing specialist with deep expertise in social media marketing and content strategy for brand growth.",
      facility: "Social Media Marketing & Content Strategy"
    },
    {
      name: "Kartik Ruhela",
      position: "Co-Founder & SEO Chef",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "SEO expert and digital analyst with proven track record in organic growth and search engine optimization.",
      facility: "SEO Services & Digital Analytics"
    }
  ];
  
  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-neon/20 text-black rounded-full px-4 py-1 text-sm font-medium mb-6">
                Meet the Chef - Digital Marketing Experts
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">The Team Behind Your <span className="gradient-text">Digital Growth Recipe</span></h1>
              <p className="text-xl text-muted-foreground mb-6">
                We're a team of digital marketing specialists, AI engineers, and growth hackers who blend proven SEO strategies with cutting-edge performance marketing technology for maximum ROI.
              </p>
              <Button className="btn-primary">Meet Our Digital Marketing Team</Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                alt="Digital Marketing Team - Performance Marketing and SEO Experts" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-neon text-black rounded-lg px-4 py-2 shadow-lg font-medium">
                Since 2018 - Digital Marketing Excellence
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Digital Marketing Journey</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-5xl font-bold text-primary mb-4">01</div>
                <h3 className="text-xl font-bold mb-2">The Digital Beginning</h3>
                <p className="text-muted-foreground">
                  Founded in 2018 when Nitin Raghav noticed that most digital marketing agencies were delivering cookie-cutter SEO and performance marketing solutions that weren't driving real business results.
                </p>
              </div>
              
              <div>
                <div className="text-5xl font-bold text-primary mb-4">02</div>
                <h3 className="text-xl font-bold mb-2">The Recipe Approach to Digital Marketing</h3>
                <p className="text-muted-foreground">
                  We developed our unique recipe approach to make complex digital marketing strategies, SEO techniques, and performance marketing campaigns clear, actionable, and measurable for businesses of all sizes.
                </p>
              </div>
              
              <div>
                <div className="text-5xl font-bold text-primary mb-4">03</div>
                <h3 className="text-xl font-bold mb-2">AI Integration in Digital Marketing</h3>
                <p className="text-muted-foreground">
                  In 2021, we began integrating AI into our digital marketing recipes, transforming SEO results and scaling performance marketing capabilities beyond what traditional methods could achieve.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-center mb-8">
              Today, our digital marketing agency combines the best of human creativity and AI efficiency to create SEO strategies, performance marketing campaigns, and growth strategies that deliver exceptional ROI. Our recipe book approach makes complex digital marketing concepts accessible and actionable for businesses of all sizes.
            </p>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Digital Marketing Mission</h3>
              <p className="text-lg text-center italic">
                "To serve up delicious digital growth for businesses through the perfect blend of proven SEO techniques, performance marketing strategies, and cutting-edge AI, making online success accessible to companies of all sizes."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Meet Our Digital Marketing Chefs</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md group">
                <div className="relative mb-6 overflow-hidden rounded-lg h-64">
                  <img 
                    src={member.image}
                    alt={`${member.name} - ${member.position} at Digital Marketing Agency`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.position}</p>
                <div className="bg-neon/10 text-black rounded-md px-3 py-1 text-sm font-medium mb-3">
                  {member.facility}
                </div>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Marketing Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide our SEO services, performance marketing campaigns, and client partnerships
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Results-Focused Digital Marketing</h3>
              <p className="text-muted-foreground">
                We measure success by tangible business outcomes our SEO and performance marketing strategies deliver, not vanity metrics.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Digital Innovation</h3>
              <p className="text-muted-foreground">
                We constantly experiment with new SEO techniques, performance marketing approaches, and AI technologies to improve our recipes.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency in Digital Marketing</h3>
              <p className="text-muted-foreground">
                We believe in clear communication, honest SEO reporting, performance marketing analytics, and no hidden ingredients.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Human + AI Balance in Marketing</h3>
              <p className="text-muted-foreground">
                We combine human creativity and digital marketing expertise with AI efficiency for the best SEO and performance marketing results.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Customized Digital Marketing Approach</h3>
              <p className="text-muted-foreground">
                We tailor our SEO services and performance marketing recipes to each client's unique business goals, target audience, and industry.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Long-term Digital Partnership</h3>
              <p className="text-muted-foreground">
                We build lasting relationships focused on continuous digital growth through SEO and performance marketing rather than quick fixes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Working Style Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Digital Marketing Working Style</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-bold mr-3">1</span>
                Discovery & SEO Audit
              </h3>
              <p className="mb-8">
                Every digital marketing partnership begins with a thorough analysis of your current SEO performance, performance marketing metrics, audience data, and competitors. We identify gaps and opportunities that form the foundation of your custom digital marketing recipe.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-bold mr-3">2</span>
                Digital Strategy Creation
              </h3>
              <p className="mb-8">
                We develop a detailed digital marketing recipe with all the SEO ingredients, performance marketing steps, and expected outcomes. Each strategy is tailored to your specific business goals and marketing resources.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-bold mr-3">3</span>
                AI Enhancement in Marketing
              </h3>
              <p>
                We identify opportunities to integrate AI tools and automation throughout your SEO strategy and performance marketing campaigns to improve efficiency, scale operations, and enhance digital marketing results.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-bold mr-3">4</span>
                Implementation & Execution
              </h3>
              <p className="mb-8">
                Our digital marketing team executes the SEO strategy and performance marketing campaigns with precision, handling everything from technical SEO setup to creative ad development, while keeping you informed at every step.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-bold mr-3">5</span>
                Measurement & Digital Optimization
              </h3>
              <p className="mb-8">
                We continuously monitor SEO performance and performance marketing metrics against established KPIs, providing regular reports and insights while making data-driven adjustments to improve digital marketing results.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-bold mr-3">6</span>
                Growth & Digital Scaling
              </h3>
              <p>
                As your business grows, we refine your digital marketing recipe, test new SEO techniques and performance marketing strategies, and scale successful campaigns to achieve sustainable long-term online growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Ready to Cook Digital Success with Our Team?"
        subtitle="Schedule a call to discuss how we can create the perfect SEO and performance marketing recipe for your business growth"
        buttonText="Let's Talk Digital Marketing"
      />
    </>
  );
};

export default About;
