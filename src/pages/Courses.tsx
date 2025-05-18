
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NavLink } from "react-router-dom";
import CallToAction from "@/components/CallToAction";

interface CoursesProps {
  openBrochureForm: (courseName: string) => void;
}

const Courses = ({ openBrochureForm }: CoursesProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Mock data for courses
  const allCourses = [
    {
      id: "digital-marketing",
      title: "Digital Marketing Mastery",
      category: "marketing",
      level: "Beginner to Advanced",
      duration: "12 weeks",
      students: "2,500+",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      description: "Comprehensive digital marketing course covering SEO, SEM, social media, content marketing, and analytics.",
      featured: true,
      price: "₹24,999"
    },
    {
      id: "ai-agent",
      title: "AI Agent Development",
      category: "development",
      level: "Intermediate",
      duration: "14 weeks",
      students: "1,200+",
      image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      description: "Learn to build intelligent AI agents for customer service, sales, and business automation.",
      featured: true,
      price: "₹29,999"
    },
    {
      id: "ai-marketing",
      title: "AI for Marketing",
      category: "marketing",
      level: "Beginner to Intermediate",
      duration: "10 weeks",
      students: "1,800+",
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      description: "Harness the power of AI to create data-driven marketing strategies and campaigns.",
      featured: true,
      price: "₹19,999"
    },
    {
      id: "web-development",
      title: "Full-Stack Web Development",
      category: "development",
      level: "Beginner to Advanced",
      duration: "16 weeks",
      students: "3,200+",
      image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      description: "Comprehensive web development bootcamp covering front-end, back-end, and database technologies.",
      featured: false,
      price: "₹39,999"
    },
    {
      id: "social-media",
      title: "Social Media Marketing",
      category: "marketing",
      level: "Beginner",
      duration: "8 weeks",
      students: "4,100+",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      description: "Master social media platforms and create engaging content strategies for business growth.",
      featured: false,
      price: "₹16,999"
    },
    {
      id: "data-science",
      title: "Data Science Fundamentals",
      category: "analytics",
      level: "Intermediate",
      duration: "12 weeks",
      students: "1,500+",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      description: "Learn data analysis, visualization, and machine learning for business insights.",
      featured: false,
      price: "₹27,999"
    }
  ];
  
  // Filter courses based on active filter and search query
  const filteredCourses = allCourses.filter(course => {
    const matchesFilter = activeFilter === "all" || course.category === activeFilter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  
  // Function to filter courses
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Upgrade Your Skills with <br/><span className="gradient-text">Expert-Led Courses</span>
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Industry-relevant training designed to help you master the latest tools and technologies in marketing and AI development
          </motion.p>
          
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md">
              <Input 
                type="text" 
                placeholder="Search courses..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            </div>
            <Button onClick={() => openBrochureForm("All Courses")}>
              Download Course Catalog
            </Button>
          </motion.div>
          
          <motion.div
            className="bg-white p-1 rounded-lg shadow-sm inline-flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button 
              variant={activeFilter === "all" ? "default" : "ghost"} 
              onClick={() => handleFilterChange("all")}
            >
              All
            </Button>
            <Button 
              variant={activeFilter === "marketing" ? "default" : "ghost"} 
              onClick={() => handleFilterChange("marketing")}
            >
              Marketing
            </Button>
            <Button 
              variant={activeFilter === "development" ? "default" : "ghost"} 
              onClick={() => handleFilterChange("development")}
            >
              Development
            </Button>
            <Button 
              variant={activeFilter === "analytics" ? "default" : "ghost"} 
              onClick={() => handleFilterChange("analytics")}
            >
              Analytics
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Courses */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Featured Courses</h2>
            <Button variant="ghost" size="sm" className="flex items-center gap-2">
              <Filter size={16} />
              <span>Filter</span>
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.filter(course => course.featured).map((course) => (
              <motion.div
                key={course.id}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-3 right-3 bg-primary/90">{course.category}</Badge>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex flex-wrap gap-y-3 mb-4">
                    <div className="w-1/2 flex items-center">
                      <Clock size={16} className="mr-2 text-primary" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="w-1/2 flex items-center">
                      <Award size={16} className="mr-2 text-primary" />
                      <span className="text-sm">{course.level}</span>
                    </div>
                    <div className="w-1/2 flex items-center">
                      <Users size={16} className="mr-2 text-primary" />
                      <span className="text-sm">{course.students} Students</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-primary">{course.price}</div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => openBrochureForm(course.title)}
                      >
                        Brochure
                      </Button>
                      <Button size="sm" asChild>
                        <NavLink to={`/courses/${course.id}`}>Details</NavLink>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredCourses.filter(course => course.featured).length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-muted-foreground">No courses found matching your criteria</h3>
              <p className="mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </section>
      
      {/* All Courses Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">All Courses</h2>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full flex justify-start mb-6 bg-white p-1 rounded-lg overflow-x-auto">
              <TabsTrigger value="all" className="flex-1">All Courses</TabsTrigger>
              <TabsTrigger value="marketing" className="flex-1">Marketing</TabsTrigger>
              <TabsTrigger value="development" className="flex-1">Development</TabsTrigger>
              <TabsTrigger value="analytics" className="flex-1">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="relative h-48 bg-gray-100">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 right-3 bg-primary/90">{course.category}</Badge>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                      
                      <div className="flex flex-wrap gap-y-3 mb-4">
                        <div className="w-1/2 flex items-center">
                          <Clock size={16} className="mr-2 text-primary" />
                          <span className="text-sm">{course.duration}</span>
                        </div>
                        <div className="w-1/2 flex items-center">
                          <Award size={16} className="mr-2 text-primary" />
                          <span className="text-sm">{course.level}</span>
                        </div>
                        <div className="w-1/2 flex items-center">
                          <Users size={16} className="mr-2 text-primary" />
                          <span className="text-sm">{course.students} Students</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-primary">{course.price}</div>
                        <div className="flex gap-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => openBrochureForm(course.title)}
                          >
                            Brochure
                          </Button>
                          <Button size="sm" asChild>
                            <NavLink to={`/courses/${course.id}`}>Details</NavLink>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="marketing">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses
                  .filter(course => course.category === "marketing")
                  .map((course) => (
                    <motion.div
                      key={course.id}
                      className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative h-48 bg-gray-100">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-3 right-3 bg-primary/90">{course.category}</Badge>
                      </div>
                      
                      <div className="p-5">
                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                        
                        <div className="flex flex-wrap gap-y-3 mb-4">
                          <div className="w-1/2 flex items-center">
                            <Clock size={16} className="mr-2 text-primary" />
                            <span className="text-sm">{course.duration}</span>
                          </div>
                          <div className="w-1/2 flex items-center">
                            <Award size={16} className="mr-2 text-primary" />
                            <span className="text-sm">{course.level}</span>
                          </div>
                          <div className="w-1/2 flex items-center">
                            <Users size={16} className="mr-2 text-primary" />
                            <span className="text-sm">{course.students} Students</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-xl font-bold text-primary">{course.price}</div>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => openBrochureForm(course.title)}
                            >
                              Brochure
                            </Button>
                            <Button size="sm" asChild>
                              <NavLink to={`/courses/${course.id}`}>Details</NavLink>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="development">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses
                  .filter(course => course.category === "development")
                  .map((course) => (
                    <motion.div
                      key={course.id}
                      className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative h-48 bg-gray-100">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-3 right-3 bg-primary/90">{course.category}</Badge>
                      </div>
                      
                      <div className="p-5">
                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                        
                        <div className="flex flex-wrap gap-y-3 mb-4">
                          <div className="w-1/2 flex items-center">
                            <Clock size={16} className="mr-2 text-primary" />
                            <span className="text-sm">{course.duration}</span>
                          </div>
                          <div className="w-1/2 flex items-center">
                            <Award size={16} className="mr-2 text-primary" />
                            <span className="text-sm">{course.level}</span>
                          </div>
                          <div className="w-1/2 flex items-center">
                            <Users size={16} className="mr-2 text-primary" />
                            <span className="text-sm">{course.students} Students</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-xl font-bold text-primary">{course.price}</div>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => openBrochureForm(course.title)}
                            >
                              Brochure
                            </Button>
                            <Button size="sm" asChild>
                              <NavLink to={`/courses/${course.id}`}>Details</NavLink>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="analytics">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses
                  .filter(course => course.category === "analytics")
                  .map((course) => (
                    <motion.div
                      key={course.id}
                      className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative h-48 bg-gray-100">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-3 right-3 bg-primary/90">{course.category}</Badge>
                      </div>
                      
                      <div className="p-5">
                        <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                        <p className="text-muted-foreground mb-4 line-clamp-2">{course.description}</p>
                        
                        <div className="flex flex-wrap gap-y-3 mb-4">
                          <div className="w-1/2 flex items-center">
                            <Clock size={16} className="mr-2 text-primary" />
                            <span className="text-sm">{course.duration}</span>
                          </div>
                          <div className="w-1/2 flex items-center">
                            <Award size={16} className="mr-2 text-primary" />
                            <span className="text-sm">{course.level}</span>
                          </div>
                          <div className="w-1/2 flex items-center">
                            <Users size={16} className="mr-2 text-primary" />
                            <span className="text-sm">{course.students} Students</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-xl font-bold text-primary">{course.price}</div>
                          <div className="flex gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => openBrochureForm(course.title)}
                            >
                              Brochure
                            </Button>
                            <Button size="sm" asChild>
                              <NavLink to={`/courses/${course.id}`}>Details</NavLink>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default Courses;
