
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Book, Check, Clock, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import CallToAction from "@/components/CallToAction";

interface CourseDetailProps {
  openBrochureForm: (courseName: string) => void;
}

const CourseDetail = ({ openBrochureForm }: CourseDetailProps) => {
  const { courseId } = useParams();
  
  // Mock data for course details
  const courseDetails = {
    "digital-marketing": {
      title: "Digital Marketing Mastery",
      description: "Learn cutting-edge digital marketing strategies and tools to drive growth and conversions.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      students: "2,500+",
      rating: 4.8,
      price: "₹24,999",
      instructor: "Rahul Sharma",
      instructorTitle: "Former Marketing Director, Google India",
      mainImage: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Performance Marketing Fundamentals",
        "SEO & Content Strategy Development",
        "Social Media Marketing Campaigns",
        "Analytics & Data-Driven Decision Making",
        "AI Tools for Marketing Automation",
        "Campaign Optimization Techniques"
      ],
      modules: [
        {
          title: "Module 1: Digital Marketing Landscape",
          lessons: [
            "The Modern Marketing Ecosystem",
            "Key Digital Channels and Platforms",
            "Understanding Customer Journey Mapping",
            "Setting Campaign Objectives and KPIs"
          ]
        },
        {
          title: "Module 2: Performance Marketing",
          lessons: [
            "Google Ads Fundamentals",
            "Meta Ads Platform Mastery",
            "Bidding Strategies and Budget Allocation",
            "Audience Targeting and Segmentation"
          ]
        },
        {
          title: "Module 3: Content & SEO",
          lessons: [
            "SEO Fundamentals and Algorithm Updates",
            "Content Strategy Development",
            "Keyword Research and Optimization",
            "Technical SEO Auditing"
          ]
        },
        {
          title: "Module 4: AI-Powered Marketing",
          lessons: [
            "Introduction to Marketing AI Tools",
            "AI for Content Generation and Optimization",
            "Predictive Analytics for Campaign Planning",
            "Chatbots and Automated Customer Service"
          ]
        }
      ],
      outcomes: [
        "Create and manage successful digital marketing campaigns",
        "Optimize website content for search engines",
        "Analyze campaign data to make informed decisions",
        "Leverage AI tools for marketing automation",
        "Develop comprehensive digital marketing strategies"
      ]
    },
    "ai-agent": {
      title: "AI Agent Development",
      description: "Build intelligent conversational agents and automation systems for business applications.",
      duration: "14 weeks",
      level: "Intermediate to Advanced",
      students: "1,200+",
      rating: 4.7,
      price: "₹29,999",
      instructor: "Priya Patel",
      instructorTitle: "AI Research Lead, Former Microsoft",
      mainImage: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "Natural Language Processing Fundamentals",
        "Dialogue System Architecture",
        "Agent Training and Optimization",
        "CRM and Business Tool Integration",
        "Multimodal Agent Development",
        "Deployment and Scaling Strategies"
      ],
      modules: [
        {
          title: "Module 1: AI Agent Foundations",
          lessons: [
            "Introduction to Conversational AI",
            "NLP and Language Understanding",
            "Agent Architecture and Components",
            "Ethics in AI Development"
          ]
        },
        {
          title: "Module 2: Dialogue Systems",
          lessons: [
            "Dialogue Flow Design",
            "Intent Recognition Systems",
            "Entity Extraction Techniques",
            "Context Management in Conversations"
          ]
        },
        {
          title: "Module 3: Integration & APIs",
          lessons: [
            "CRM System Integration",
            "API Development for Agent Connections",
            "Data Exchange Protocols",
            "Webhook Implementation"
          ]
        },
        {
          title: "Module 4: Deployment & Optimization",
          lessons: [
            "Scaling Agent Infrastructure",
            "Performance Monitoring Tools",
            "A/B Testing for Agent Responses",
            "Continuous Learning Systems"
          ]
        }
      ],
      outcomes: [
        "Design and build sophisticated conversational agents",
        "Implement NLP techniques for language understanding",
        "Integrate agents with business systems and CRMs",
        "Optimize agent performance and response accuracy",
        "Deploy scalable agent solutions for enterprise use"
      ]
    },
    "ai-marketing": {
      title: "AI for Marketing",
      description: "Harness the power of artificial intelligence to create data-driven marketing campaigns.",
      duration: "10 weeks",
      level: "Beginner to Intermediate",
      students: "1,800+",
      rating: 4.9,
      price: "₹19,999",
      instructor: "Vikram Malhotra",
      instructorTitle: "AI Marketing Specialist, Former Adobe",
      mainImage: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80",
      features: [
        "AI-Powered Customer Segmentation",
        "Predictive Analytics for Campaign Planning",
        "Content Generation with AI",
        "Personalization Strategies",
        "Marketing Automation Workflows",
        "AI Ethics for Marketers"
      ],
      modules: [
        {
          title: "Module 1: AI Marketing Fundamentals",
          lessons: [
            "Introduction to AI in Marketing",
            "Data Collection and Management",
            "Machine Learning for Marketers",
            "Key AI Marketing Tools"
          ]
        },
        {
          title: "Module 2: Customer Insights",
          lessons: [
            "AI-Powered Customer Segmentation",
            "Predictive Behavior Modeling",
            "Customer Journey Analytics",
            "Sentiment Analysis Techniques"
          ]
        },
        {
          title: "Module 3: Content and Creativity",
          lessons: [
            "AI Content Generation Tools",
            "Creative Optimization",
            "A/B Testing with Machine Learning",
            "Visual Content Analysis"
          ]
        },
        {
          title: "Module 4: Campaign Automation",
          lessons: [
            "Building Automated Marketing Flows",
            "Dynamic Content Personalization",
            "Trigger-Based Campaign Management",
            "Performance Measurement Systems"
          ]
        }
      ],
      outcomes: [
        "Implement AI-powered customer segmentation",
        "Create predictive marketing models",
        "Develop automated marketing campaigns",
        "Generate optimized content using AI tools",
        "Build personalized customer experiences at scale"
      ]
    }
  };

  // Find the course by ID or show default content if not found
  const course = courseDetails[courseId as keyof typeof courseDetails] || {
    title: "Course Not Found",
    description: "The requested course could not be found.",
    duration: "",
    level: "",
    students: "",
    rating: 0,
    price: "",
    instructor: "",
    instructorTitle: "",
    mainImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    features: [],
    modules: [],
    outcomes: []
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-primary" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star size={20} className="mr-2 text-primary" />
                  <span>{course.rating}/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="mr-2 text-primary" />
                  <span>{course.students} Students</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-2xl md:text-3xl font-bold mb-2">{course.price}</div>
                <div className="text-sm text-muted-foreground">Includes lifetime access & certificate</div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Enroll Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => openBrochureForm(course.title)}
                >
                  Download Syllabus
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src={course.mainImage} 
                  alt={course.title} 
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium mb-1">Instructor</div>
                <div className="text-primary font-bold">{course.instructor}</div>
                <div className="text-xs text-muted-foreground">{course.instructorTitle}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Course Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            What You'll Learn
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                    <Check size={16} className="text-primary" />
                  </div>
                  <p>{feature}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Course Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Course Curriculum
          </motion.h2>
          
          <motion.p 
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Our comprehensive curriculum is designed by industry experts to give you practical skills you can apply immediately.
          </motion.p>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {course.modules.map((module, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">{module.title}</h3>
                <ul className="space-y-3">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <li key={lessonIndex} className="flex items-center">
                      <Book size={16} className="mr-3 text-primary flex-shrink-0" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Course Outcomes */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Course Outcomes
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {course.outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mr-4 mt-1 bg-primary/10 p-2 rounded-full">
                  <Check size={16} className="text-primary" />
                </div>
                <p>{outcome}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => openBrochureForm(course.title)}
            >
              <span>Enroll in this Course</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default CourseDetail;
