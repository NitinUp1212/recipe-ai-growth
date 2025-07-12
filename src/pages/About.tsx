
import { Users, Target, Award, TrendingUp, MessageSquare, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "150+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  const values = [
    {
      icon: <Target size={32} />,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that directly impact your business growth and revenue."
    },
    {
      icon: <Users size={32} />,
      title: "Client-Centric",
      description: "Your success is our priority. We work closely with you to understand and achieve your goals."
    },
    {
      icon: <Award size={32} />,
      title: "Quality Excellence",
      description: "We maintain the highest standards in everything we do, from strategy to execution."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Innovation",
      description: "We stay ahead of trends and leverage cutting-edge technologies to give you a competitive edge."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About UnKnownHat</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a digital marketing and web development agency dedicated to helping businesses grow through innovative online strategies and cutting-edge technology solutions.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              To empower businesses of all sizes with comprehensive digital marketing and web development solutions that drive growth, increase visibility, and deliver measurable results in today's competitive digital landscape.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-primary mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Founder</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary/80 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">NR</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Nitin Raghav</h3>
              <p className="text-primary font-medium mb-4">Founder & CEO</p>
              <p className="text-muted-foreground mb-6">
                With over 5 years of experience in digital marketing and web development, Nitin leads UnKnownHat with a passion for helping businesses succeed in the digital world. His expertise spans across performance marketing, SEO, and modern web technologies.
              </p>
              
              <div className="flex justify-center gap-4">
                <a 
                  href="https://wa.me/918791363283" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
                >
                  <MessageSquare size={18} />
                  WhatsApp
                </a>
                <a 
                  href="mailto:officialunknownhat@gmail.com"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
                >
                  <Mail size={18} />
                  Email
                </a>
                <a 
                  href="tel:+918791363283"
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded transition-colors"
                >
                  <Phone size={18} />
                  Call
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose UnKnownHat?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p className="text-muted-foreground">500+ successful projects with measurable results across various industries.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">Skilled professionals with deep expertise in digital marketing and development.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">Round-the-clock support to ensure your business never stops growing.</p>
            </div>
          </div>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default About;
