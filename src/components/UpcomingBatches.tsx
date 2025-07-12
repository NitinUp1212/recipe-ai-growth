
import { Calendar, Download, Monitor, Award, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface UpcomingBatchesProps {
  openBrochureForm: (courseName: string) => void;
}

const UpcomingBatches = ({ openBrochureForm }: UpcomingBatchesProps) => {
  const upcomingBatch = {
    id: 1,
    courseName: "Digital Marketing With AI",
    startDate: "August 4, 2025",
    duration: "3 months",
    mode: "Online",
    timing: "Monday to Friday (11:00 AM - 1:00 PM)",
    certificationIncluded: true,
    jobPlacement: "85% placement rate",
  };

  const comingSoonBatches = [
    "Advanced Performance Marketing",
    "Social Media Marketing Mastery", 
    "SEO & Content Marketing",
    "E-commerce Marketing"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Batch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our next batch of <span className="font-semibold text-primary">100% online</span> course and begin your journey towards expertise
          </p>
        </div>
        
        {/* Current Batch */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
            <div className="bg-primary/10 p-4 flex items-center justify-between">
              <h3 className="font-bold text-lg text-primary">{upcomingBatch.courseName}</h3>
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                Enrolling Now
              </Badge>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-primary" />
                <span>Starting: <strong>{upcomingBatch.startDate}</strong></span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-muted-foreground">Duration</div>
                  <div className="font-medium">{upcomingBatch.duration}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md flex items-center gap-1">
                  <Monitor size={14} className="text-primary" />
                  <div className="font-medium">{upcomingBatch.mode} Only</div>
                </div>
                <div className="col-span-2 bg-gray-50 p-3 rounded-md">
                  <div className="text-muted-foreground">Schedule</div>
                  <div className="font-medium">{upcomingBatch.timing}</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {upcomingBatch.certificationIncluded && (
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full">
                    <Award size={12} />
                    <span>Certification Included</span>
                  </div>
                )}
                {upcomingBatch.jobPlacement && (
                  <div className="flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full">
                    <Briefcase size={12} />
                    <span>{upcomingBatch.jobPlacement}</span>
                  </div>
                )}
              </div>
              
              <Button 
                onClick={() => openBrochureForm(upcomingBatch.courseName)}
                className="w-full flex items-center justify-center gap-2 mt-6"
              >
                <Download size={16} />
                Enroll Now - Download Brochure
              </Button>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="font-medium">Limited Seats Available</span>
                <span className="text-primary font-medium">Register Today!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Batches */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Coming Soon</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {comingSoonBatches.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 border border-gray-100">
                <h4 className="font-semibold text-gray-800 mb-2">{course}</h4>
                <Badge variant="outline" className="text-xs">
                  Coming Soon
                </Badge>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" onClick={() => openBrochureForm("All Courses")}>
            Get Information About All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;
