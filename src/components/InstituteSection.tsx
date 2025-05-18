
import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { ArrowRight, Book, Lightbulb, Brain, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseCard {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
  popular?: boolean;
}

const InstituteSection = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const courses: CourseCard[] = [
    {
      id: "digital-marketing",
      title: "Digital Marketing Mastery",
      description: "Learn cutting-edge digital marketing strategies and tools to drive growth and conversions.",
      icon: <Rocket size={32} className="text-pink-500" />,
      features: [
        "Performance Marketing",
        "SEO & Content Strategy",
        "Analytics & Optimization",
        "Social Media Management"
      ],
      popular: true
    },
    {
      id: "ai-agent",
      title: "AI Agent Development",
      description: "Build intelligent conversational agents and automation systems for business applications.",
      icon: <Brain size={32} className="text-purple-500" />,
      features: [
        "NLP & Dialogue Systems",
        "Agent Architecture",
        "Integration with CRMs",
        "Lead Qualification Models"
      ]
    },
    {
      id: "ai-marketing",
      title: "AI for Marketing",
      description: "Harness the power of artificial intelligence to create data-driven marketing campaigns.",
      icon: <Lightbulb size={32} className="text-blue-500" />,
      features: [
        "Predictive Analytics",
        "Content Generation",
        "Customer Segmentation",
        "Marketing Automation"
      ]
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 overflow-hidden relative bg-gradient-to-br from-gray-50 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-40 blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/4 w-80 h-80 bg-pink-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-neon/20 text-gray-800 mb-4">
            LEARN WITH US
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">FlavorDish Institute</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Transform your career with our industry-leading courses in digital marketing and AI development.
          </p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={itemVariants}
              className="relative"
              onMouseEnter={() => setHoveredCard(course.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={`h-full bg-white rounded-2xl p-6 border transition-all duration-300 relative z-10
                ${hoveredCard === course.id ? 'shadow-xl scale-[1.02] border-neon' : 'shadow border-border'}
              `}>
                {course.popular && (
                  <div className="absolute -top-3 -right-3 bg-neon text-black text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="p-3 inline-block rounded-lg bg-gray-50 mb-4">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                </div>
                
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Book size={16} className="mr-2 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 mt-auto">
                  <NavLink to={`/courses/${course.id}`} className="block">
                    <Button variant="outline" className="w-full justify-between group">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </NavLink>
                </div>
              </div>
              
              {/* Animated background effect on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r from-primary/5 to-neon/10 rounded-2xl transition-opacity duration-300 z-0
                  ${hoveredCard === course.id ? 'opacity-100' : 'opacity-0'}
                `}
                style={{ 
                  transform: 'translateY(8px) scale(0.98)',
                }}
              ></div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <NavLink to="/courses">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <span>Explore All Courses</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default InstituteSection;
