
import { Search, TrendingUp, FileText, Code, BarChart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';

const SEOServices = () => {
  const services = [
    {
      icon: <FileText size={24} />,
      title: "On-Page SEO",
      description: "Complete optimization of your website's content, meta tags, and structure"
    },
    {
      icon: <Code size={24} />,
      title: "Technical SEO",
      description: "Website speed optimization, mobile responsiveness, and technical fixes"
    },
    {
      icon: <Globe size={24} />,
      title: "Off-Page SEO",
      description: "Quality link building and authority building strategies"
    },
    {
      icon: <FileText size={24} />,
      title: "Content Strategy",
      description: "SEO-optimized content creation and optimization"
    },
    {
      icon: <BarChart size={24} />,
      title: "Local SEO",
      description: "Google My Business optimization and local search visibility"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "SEO Analytics",
      description: "Comprehensive tracking and reporting of SEO performance"
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <Search size={64} className="text-primary mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SEO Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Boost your organic rankings and drive sustainable traffic with our comprehensive SEO strategies that deliver long-term results.
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

        {/* Benefits Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Our SEO Services?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Proven Results</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Average 150% increase in organic traffic</li>
                <li>• 85% improvement in keyword rankings</li>
                <li>• 60% boost in qualified leads</li>
                <li>• Long-term sustainable growth</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Our Approach</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• White-hat SEO techniques only</li>
                <li>• Data-driven strategy development</li>
                <li>• Regular performance monitoring</li>
                <li>• Transparent monthly reporting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dominate Search Results?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create an SEO strategy that drives consistent organic traffic to your website
          </p>
          <a href="https://wa.me/918791363283" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-8 py-3">
              Get SEO Audit Today
            </Button>
          </a>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default SEOServices;
