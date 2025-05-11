
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";

const About = () => {
  const teamMembers = [
    {
      name: "Rahul Mehta",
      position: "Founder & Head Chef",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      bio: "Digital marketing veteran with 12+ years of experience working with top brands. AI enthusiast and growth strategist."
    },
    {
      name: "Priya Sharma",
      position: "Performance Marketing Chef",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      bio: "Google and Meta ads specialist with a track record of achieving 3X+ ROAS for e-commerce and B2B clients."
    },
    {
      name: "Vikram Singh",
      position: "AI Technology Chef",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "AI engineer specializing in conversational agents and marketing automation with a background in data science."
    },
    {
      name: "Aarti Patel",
      position: "Content & SEO Chef",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      bio: "Content strategist with expertise in SEO and storytelling. Previously led content at major SaaS companies."
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
                Meet the Chef
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">The Team Behind Your <span className="gradient-text">Growth Recipe</span></h1>
              <p className="text-xl text-muted-foreground mb-6">
                We're a team of marketing specialists, AI engineers, and growth hackers who blend proven strategies with cutting-edge technology.
              </p>
              <Button className="btn-primary">Meet Our Team</Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf" 
                alt="FlavorDish Team" 
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-neon text-black rounded-lg px-4 py-2 shadow-lg font-medium">
                Since 2018
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-5xl font-bold text-primary mb-4">01</div>
                <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                <p className="text-muted-foreground">
                  Founded in 2018 when Rahul Mehta noticed that most agencies were delivering cookie-cutter solutions that weren't driving real results.
                </p>
              </div>
              
              <div>
                <div className="text-5xl font-bold text-primary mb-4">02</div>
                <h3 className="text-xl font-bold mb-2">The Recipe Approach</h3>
                <p className="text-muted-foreground">
                  We developed our unique recipe approach to make complex marketing strategies clear, actionable, and measurable for businesses of all sizes.
                </p>
              </div>
              
              <div>
                <div className="text-5xl font-bold text-primary mb-4">03</div>
                <h3 className="text-xl font-bold mb-2">AI Integration</h3>
                <p className="text-muted-foreground">
                  In 2021, we began integrating AI into our recipes, transforming results and scaling capabilities beyond what traditional methods could achieve.
                </p>
              </div>
            </div>
            
            <p className="text-lg text-center mb-8">
              Today, FlavorDish combines the best of human creativity and AI efficiency to create marketing strategies that deliver exceptional results. Our recipe book approach makes complex marketing concepts accessible and actionable for businesses of all sizes.
            </p>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-center">Our Mission</h3>
              <p className="text-lg text-center italic">
                "To serve up delicious growth for businesses through the perfect blend of proven marketing techniques and cutting-edge AI, making success accessible to companies of all sizes."
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Meet Our Chefs</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md group">
                <div className="relative mb-6 overflow-hidden rounded-lg h-64">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.position}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The core principles that guide our work and partnerships
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Results-Focused</h3>
              <p className="text-muted-foreground">
                We measure success by the tangible business outcomes our strategies deliver, not vanity metrics.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Continuous Innovation</h3>
              <p className="text-muted-foreground">
                We constantly experiment with new approaches and technologies to improve our recipes.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Transparency</h3>
              <p className="text-muted-foreground">
                We believe in clear communication, honest reporting, and no hidden ingredients.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Human + AI Balance</h3>
              <p className="text-muted-foreground">
                We combine human creativity and expertise with AI efficiency for the best results.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Customized Approach</h3>
              <p className="text-muted-foreground">
                We tailor our recipes to each client's unique business goals, audience, and industry.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-2xl">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Check className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Long-term Partnership</h3>
              <p className="text-muted-foreground">
                We build lasting relationships focused on continuous growth rather than quick fixes.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Working Style Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Working Style</h2>
          
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-bold mr-3">1</span>
                Discovery & Audit
              </h3>
              <p className="mb-8">
                Every partnership begins with a thorough analysis of your current marketing performance, audience, and competitors. We identify gaps and opportunities that form the foundation of your custom recipe.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-bold mr-3">2</span>
                Strategy Creation
              </h3>
              <p className="mb-8">
                We develop a detailed marketing recipe with all the ingredients, steps, and expected outcomes. Each strategy is tailored to your specific business goals and resources.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-bold mr-3">3</span>
                AI Enhancement
              </h3>
              <p>
                We identify opportunities to integrate AI tools and automation throughout your marketing strategy to improve efficiency, scale operations, and enhance results.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-bold mr-3">4</span>
                Implementation
              </h3>
              <p className="mb-8">
                Our team executes the strategy with precision, handling everything from technical setup to creative development, while keeping you informed at every step.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-bold mr-3">5</span>
                Measurement & Optimization
              </h3>
              <p className="mb-8">
                We continuously monitor performance against established KPIs, providing regular reports and insights while making data-driven adjustments to improve results.
              </p>
              
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-neon text-black flex items-center justify-center font-bold mr-3">6</span>
                Growth & Scaling
              </h3>
              <p>
                As your business grows, we refine your recipe, test new ingredients, and scale successful strategies to achieve sustainable long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction 
        title="Ready to Cook with Our Team?"
        subtitle="Schedule a call to discuss how we can create the perfect recipe for your business growth"
        buttonText="Let's Talk"
      />
    </>
  );
};

export default About;
