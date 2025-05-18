
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, Book, Brain, Rocket, Lightbulb, Zap, Code, GraduationCap, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CallToAction from "@/components/CallToAction";

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  image: string;
  icon: JSX.Element;
}

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  
  const courses: Course[] = [
    {
      id: "digital-marketing-mastery",
      title: "Digital Marketing Mastery",
      description: "Complete guide to digital marketing strategies across platforms for driving business growth.",
      category: "Marketing",
      level: "Intermediate",
      duration: "8 weeks",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      icon: <Rocket size={24} />
    },
    {
      id: "ai-agent-development",
      title: "AI Agent Development",
      description: "Learn to build and deploy intelligent conversational agents for business applications.",
      category: "AI Development",
      level: "Advanced",
      duration: "12 weeks",
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b",
      icon: <Brain size={24} />
    },
    {
      id: "ai-marketing-automation",
      title: "AI for Marketing Automation",
      description: "Implement AI-driven marketing campaigns that optimize for conversions.",
      category: "Marketing",
      level: "Intermediate",
      duration: "6 weeks",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      icon: <Lightbulb size={24} />
    },
    {
      id: "content-marketing-strategy",
      title: "Content Marketing Strategy",
      description: "Create and execute content strategies that attract and engage your target audience.",
      category: "Marketing",
      level: "Beginner",
      duration: "4 weeks",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173",
      icon: <Book size={24} />
    },
    {
      id: "machine-learning-marketing",
      title: "Machine Learning for Marketing",
      description: "Apply machine learning techniques to optimize marketing campaigns and user experiences.",
      category: "AI Development",
      level: "Advanced",
      duration: "10 weeks",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      icon: <Code size={24} />
    },
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      description: "Master the art of social media engagement and conversion across platforms.",
      category: "Marketing",
      level: "Beginner",
      duration: "6 weeks",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf",
      icon: <Users size={24} />
    }
  ];
  
  const categories = [...new Set(courses.map(course => course.category))];
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !categoryFilter || course.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          {/* Decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-neon/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Marketing & AI <span className="gradient-text">Courses</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8"
            >
              Transform your career with our industry-leading courses in digital marketing and AI development.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative max-w-md mx-auto"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                type="text" 
                placeholder="Search courses..." 
                className="pl-10 pr-4 py-6 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button 
              variant={categoryFilter === null ? "default" : "outline"}
              onClick={() => setCategoryFilter(null)}
              className="rounded-full"
            >
              All Courses
            </Button>
            
            {categories.map((category) => (
              <Button 
                key={category}
                variant={categoryFilter === category ? "default" : "outline"}
                onClick={() => setCategoryFilter(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Courses Grid */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <motion.div 
                  key={course.id}
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 bg-white p-2 rounded-md shadow-sm">
                      {course.icon}
                    </div>
                    <div className="absolute top-4 right-4 bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded-full">
                      {course.level}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-neon bg-neon/10 px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {course.duration}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{course.description}</p>
                    
                    <NavLink to={`/courses/${course.id}`}>
                      <Button variant="outline" className="w-full">View Course Details</Button>
                    </NavLink>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <GraduationCap size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-medium mb-2">No courses found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                <Button onClick={() => {setSearchQuery(""); setCategoryFilter(null);}}>
                  Reset Filters
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default Courses;
