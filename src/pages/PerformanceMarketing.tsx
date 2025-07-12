
import { BarChart3, Target, TrendingUp, Users, DollarSign, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CallToAction from '@/components/CallToAction';

const PerformanceMarketing = () => {
  const features = [
    {
      icon: <Target size={24} />,
      title: "Targeted Campaigns",
      description: "Precision targeting to reach your ideal customers across all major platforms"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "ROI Optimization",
      description: "Continuous optimization to maximize your return on advertising spend"
    },
    {
      icon: <Users size={24} />,
      title: "Audience Analysis",
      description: "Deep insights into your audience behavior and preferences"
    },
    {
      icon: <DollarSign size={24} />,
      title: "Cost Management",
      description: "Strategic budget allocation to minimize costs while maximizing results"
    },
    {
      icon: <Eye size={24} />,
      title: "Real-time Monitoring",
      description: "24/7 campaign monitoring with instant alerts and adjustments"
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Detailed Analytics",
      description: "Comprehensive reporting with actionable insights and recommendations"
    }
  ];

  const platforms = [
    "Google Ads",
    "Meta Ads (Facebook & Instagram)",
    "LinkedIn Ads",
    "YouTube Ads",
    "Microsoft Ads",
    "Twitter Ads"
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <BarChart3 size={64} className="text-primary mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Performance Marketing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Drive qualified traffic, generate high-quality leads, and maximize your ROI with our data-driven performance marketing campaigns across all major platforms.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Platforms Section */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Platforms We Master</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center font-medium shadow-sm">
                {platform}
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-bold mb-2">Audit & Analysis</h3>
              <p className="text-sm text-muted-foreground">Comprehensive analysis of your current marketing efforts and competitors</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-bold mb-2">Strategy Development</h3>
              <p className="text-sm text-muted-foreground">Custom strategy creation based on your goals and target audience</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-bold mb-2">Campaign Launch</h3>
              <p className="text-sm text-muted-foreground">Professional campaign setup and launch across selected platforms</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-bold mb-2">Optimize & Scale</h3>
              <p className="text-sm text-muted-foreground">Continuous optimization and scaling of successful campaigns</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Business?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create high-converting campaigns that drive real results for your business
          </p>
          <a href="https://wa.me/918791363283" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-8 py-3">
              Start Your Campaign Today
            </Button>
          </a>
        </div>
      </div>

      <CallToAction />
    </div>
  );
};

export default PerformanceMarketing;
