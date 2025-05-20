
import React from 'react';
import { motion } from 'framer-motion';
import { Book, Check, Clock, Star, Users, Award, Calendar, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseModule {
  title: string;
  lessons: string[];
}

interface CourseDetailContentProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  students: string;
  rating: number;
  price: string;
  instructor: string;
  instructorTitle: string;
  mainImage: string;
  features: string[];
  modules: CourseModule[];
  outcomes: string[];
  certifications?: string[];
  startDates?: string[];
  openBrochureForm: (courseName: string) => void;
}

const CourseDetailContent: React.FC<CourseDetailContentProps> = ({
  title,
  description,
  duration,
  level,
  students,
  rating,
  price,
  instructor,
  instructorTitle,
  mainImage,
  features,
  modules,
  outcomes,
  certifications = [],
  startDates = [],
  openBrochureForm
}) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="container-custom">
          <div className="bg-neon/20 text-black rounded-lg p-3 max-w-2xl mx-auto mb-8 animate-pulse border border-neon/30">
            <p className="font-medium">📢 IMPORTANT NOTICE:</p>
            <p className="text-sm mt-1">All courses are conducted 100% virtually through our online platform. Learn from anywhere with our flexible schedule options!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{description}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center">
                  <Clock size={20} className="mr-2 text-primary" />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center">
                  <Star size={20} className="mr-2 text-primary" />
                  <span>{rating}/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="mr-2 text-primary" />
                  <span>{students} Students</span>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="text-2xl md:text-3xl font-bold mb-2">{price}</div>
                <div className="text-sm text-muted-foreground">Includes lifetime access & certificate</div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Enroll Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => openBrochureForm(title)}
                >
                  <Download size={16} className="mr-2" />
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
                  src={mainImage} 
                  alt={title} 
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium mb-1">Instructor</div>
                <div className="text-primary font-bold">{instructor}</div>
                <div className="text-xs text-muted-foreground">{instructorTitle}</div>
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
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
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
      
      {/* Upcoming Batches */}
      {startDates.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Upcoming Virtual Batches
            </motion.h2>
            
            <motion.p 
              className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Choose the batch that fits your schedule - all sessions are conducted online
            </motion.p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {startDates.map((date, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Calendar size={28} className="mx-auto mb-2 text-primary" />
                  <h3 className="font-bold text-lg mb-1">Batch {index + 1}</h3>
                  <p className="text-muted-foreground mb-4">{date}</p>
                  <p className="text-sm text-neon font-medium mb-4">Limited Seats Available!</p>
                  <Button variant="outline" size="sm">Reserve Seat</Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
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
            {modules.map((module, index) => (
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
      
      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.h2 
              className="text-3xl font-bold text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              Certifications
            </motion.h2>
            
            <motion.p 
              className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Upon completion, you'll receive these industry-recognized certifications
            </motion.p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Award className="text-primary mr-3 flex-shrink-0" size={24} />
                  <span className="font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
      
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
            {outcomes.map((outcome, index) => (
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
              onClick={() => openBrochureForm(title)}
            >
              <span>Enroll in this Course</span>
              <Download size={16} className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CourseDetailContent;
