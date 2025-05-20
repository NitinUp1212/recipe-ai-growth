
import React from 'react';
import { ArrowLeft, Clock, Users, BarChart3, Award, Check } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CaseStudyDetailProps {
  id: string;
  title: string;
  industry: string;
  service: string;
  client: string;
  duration: string;
  team: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  image?: string;
  approach: string[];
  technologies: string[];
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({
  title,
  industry,
  service,
  client,
  duration,
  team,
  challenge,
  solution,
  results,
  testimonial,
  image,
  approach,
  technologies
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="relative">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 md:h-80 object-cover"
          />
        ) : (
          <div className="w-full h-64 md:h-80 bg-gradient-to-r from-primary/20 to-neon/20"></div>
        )}
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container-custom">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs bg-primary/80 text-white rounded-full px-3 py-1">
                {industry}
              </span>
              <span className="text-xs bg-neon/80 text-black rounded-full px-3 py-1">
                {service}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
            <p className="text-white/90 text-lg">Client: {client}</p>
          </div>
        </div>
      </div>
      
      <div className="container-custom py-8">
        <div className="flex flex-wrap justify-between mb-8 gap-4">
          <NavLink to="/case-studies" className="inline-flex items-center text-primary hover:underline">
            <ArrowLeft size={16} className="mr-2" />
            Back to all case studies
          </NavLink>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-gray-50 rounded-lg">
              <Clock size={20} className="mx-auto mb-1 text-gray-500" />
              <p className="text-xs text-gray-500">Duration</p>
              <p className="font-medium">{duration}</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <Users size={20} className="mx-auto mb-1 text-gray-500" />
              <p className="text-xs text-gray-500">Team</p>
              <p className="font-medium">{team}</p>
            </div>
            
            <div className="p-3 bg-gray-50 rounded-lg">
              <BarChart3 size={20} className="mx-auto mb-1 text-gray-500" />
              <p className="text-xs text-gray-500">Service</p>
              <p className="font-medium">{service}</p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-xl font-bold mb-3">The Challenge</h2>
            <p className="text-gray-700">{challenge}</p>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-3">Our Solution</h2>
            <p className="text-gray-700">{solution}</p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-xl mb-12">
          <h2 className="text-xl font-bold mb-6 flex items-center">
            <Award className="mr-2 text-primary" />
            Results Achieved
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {results.map((result, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 mb-1">{result.label}</p>
                <p className="text-2xl font-bold text-primary">{result.value}</p>
              </div>
            ))}
          </div>
        </div>
        
        {testimonial && (
          <div className="mb-12 bg-primary/10 rounded-xl p-6 border-l-4 border-primary">
            <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
            <p className="font-medium">{testimonial.author}</p>
            <p className="text-sm text-gray-600">{testimonial.position}</p>
          </div>
        )}
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-4">Our Approach</h2>
            <ul className="space-y-3">
              {approach.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                    <Check size={14} className="text-primary" />
                  </div>
                  <span>{step}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-gray-200">
          <h3 className="text-xl font-bold mb-4">Ready to achieve similar results?</h3>
          <NavLink to="/contact">
            <Button className="bg-primary hover:bg-primary/90">
              Contact Us Today
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetail;
