import { useParams } from "react-router-dom";
import { ArrowRight, Check, HelpCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";
import { motion } from "framer-motion";
import RecipeCard from "@/components/RecipeCard";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  // Mock data for service details
  const serviceDetails = {
    "performance-marketing": {
      title: "Performance Marketing Pie",
      description: "A delicious mix of paid ads across platforms to drive high-quality leads and sales.",
      features: [
        "AI-powered campaign optimization",
        "Real-time performance tracking",
        "Custom audience segmentation",
        "Multi-channel ad management",
      ],
      benefits: [
        "Increased lead generation",
        "Improved conversion rates",
        "Higher ROI on ad spend",
        "Data-driven decision making",
      ],
      whyChooseUs:
        "We combine cutting-edge AI technology with proven marketing strategies to deliver exceptional results.",
      icon: <ArrowRight size={40} />,
    },
    seo: {
      title: "SEO Spice Mix",
      description:
        "Organic ranking booster with a perfect blend of on-page and off-page techniques.",
      features: [
        "Keyword research and analysis",
        "On-page optimization",
        "Link building",
        "Content marketing",
      ],
      benefits: [
        "Increased organic traffic",
        "Higher search engine rankings",
        "Improved brand visibility",
        "Sustainable long-term growth",
      ],
      whyChooseUs:
        "Our SEO experts stay ahead of the curve with the latest algorithm updates and best practices.",
      icon: <ArrowRight size={40} />,
    },
    "social-media": {
      title: "Social Media Sizzler",
      description: "Engaging content strategy that keeps your audience craving for more.",
      features: [
        "Content creation and curation",
        "Social media management",
        "Community engagement",
        "Influencer marketing",
      ],
      benefits: [
        "Increased brand awareness",
        "Improved customer loyalty",
        "Higher engagement rates",
        "Expanded reach",
      ],
      whyChooseUs:
        "We create compelling content that resonates with your target audience and drives meaningful interactions.",
      icon: <ArrowRight size={40} />,
    },
    messaging: {
      title: "WhatsApp & Email Masala",
      description:
        "Perfectly timed messaging that nurtures leads and builds lasting relationships.",
      features: [
        "WhatsApp API integration",
        "Email marketing automation",
        "Personalized messaging",
        "Lead nurturing",
      ],
      benefits: [
        "Improved lead qualification",
        "Higher conversion rates",
        "Stronger customer relationships",
        "Increased sales",
      ],
      whyChooseUs:
        "We craft personalized messaging campaigns that deliver the right message at the right time.",
      icon: <ArrowRight size={40} />,
    },
    "ai-agent": {
      title: "AI Agent Sauce",
      description:
        "Intelligent conversation flows that qualify leads and provide 24/7 support.",
      features: [
        "AI-powered chatbot",
        "Lead qualification",
        "Customer support",
        "CRM integration",
      ],
      benefits: [
        "Improved lead generation",
        "Reduced customer support costs",
        "24/7 availability",
        "Personalized customer experience",
      ],
      whyChooseUs:
        "Our AI agents provide intelligent and personalized interactions that drive results.",
      icon: <ArrowRight size={40} />,
    },
    "website-funnel": {
      title: "Website Funnel Delight",
      description:
        "Conversion-optimized web experiences that turn visitors into customers.",
      features: [
        "Landing page optimization",
        "A/B testing",
        "Conversion tracking",
        "User experience design",
      ],
      benefits: [
        "Increased conversion rates",
        "Improved user engagement",
        "Higher ROI on marketing spend",
        "Data-driven website improvements",
      ],
      whyChooseUs:
        "We create conversion-optimized web experiences that turn visitors into customers.",
      icon: <ArrowRight size={40} />,
    },
  };

  const service = serviceDetails[serviceId as keyof typeof serviceDetails] || {
    title: "Service Not Found",
    description: "The requested service could not be found.",
    features: [],
    benefits: [],
    whyChooseUs: "",
    icon: <AlertCircle size={40} />,
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {service.title}
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Features List */}
            <div>
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Key Features
              </motion.h2>
              <motion.ul
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, staggerChildren: 0.2 }}
              >
                {service.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-lg"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Check className="w-6 h-6 mr-2 text-primary" />
                    {feature}
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Benefits List */}
            <div>
              <motion.h2
                className="text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Key Benefits
              </motion.h2>
              <motion.ul
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4, staggerChildren: 0.2 }}
              >
                {service.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center text-lg"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Check className="w-6 h-6 mr-2 text-primary" />
                    {benefit}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Why Choose FlavorDish for {service.title}?
            </motion.h2>
            <motion.p
              className="text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {service.whyChooseUs}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <Button size="lg" className="btn-primary">
                Get Started Now
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default ServiceDetail;
