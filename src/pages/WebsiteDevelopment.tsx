
import { Code, Smartphone, Zap, Shield, Globe, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';

const WebsiteDevelopment = () => {
  const services = [
    {
      icon: <Globe size={24} />,
      title: "Custom Websites",
      description: "Fully customized websites built from scratch to match your brand and requirements"
    },
    {
      icon: <Smartphone size={24} />,
      title: "Responsive Design",
      description: "Mobile-first design that looks perfect on all devices and screen sizes"
    },
    {
      icon: <Zap size={24} />,
      title: "Performance Optimized",
      description: "Fast-loading websites optimized for speed and user experience"
    },
    {
      icon: <Shield size={24} />,
      title: "Secure & Reliable",
      description: "Built with security best practices and reliable hosting solutions"
    },
    {
      icon: <Code size={24} />,
      title: "Modern Technologies",
      description: "Latest web technologies including React, Node.js, and cloud platforms"
    },
    {
      icon: <BarChart size={24} />,
      title: "SEO Ready",
      description: "SEO-optimized structure for better search engine visibility"
    }
  ];

  const technologies = [
    "React.js",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "AWS/Vercel"
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Code size={64} className="text-primary mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Website Development</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional websites and web applications built with modern technologies to help your business stand out online and convert visitors into customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="text-primary mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technologies We Use</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center font-medium shadow-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Development Process</h2>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-bold mb-2">Planning</h3>
              <p className="text-sm text-muted-foreground">Requirements analysis and project planning</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-bold mb-2">Design</h3>
              <p className="text-sm text-muted-foreground">UI/UX design and wireframe creation</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-bold mb-2">Development</h3>
              <p className="text-sm text-muted-foreground">Code development and functionality implementation</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-bold mb-2">Testing</h3>
              <p className="text-sm text-muted-foreground">Quality assurance and cross-browser testing</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">5</div>
              <h3 className="font-bold mb-2">Launch</h3>
              <p className="text-sm text-muted-foreground">Deployment and ongoing support</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a professional website that represents your brand and drives results
          </p>
          <a href="https://wa.me/918791363283" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-8 py-3">
              Start Your Project
            </Button>
          </a>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default WebsiteDevelopment;
