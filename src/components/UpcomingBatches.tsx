
import { Calendar, Download, Monitor, Award, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface UpcomingBatchesProps {
  openBrochureForm: (courseName: string) => void;
}

const UpcomingBatches = ({ openBrochureForm }: UpcomingBatchesProps) => {
  const currentBatch = {
    id: 1,
    courseName: "Digital Marketing with AI",
    startDate: "August 04, 2025",
    duration: "3 months",
    mode: "Online",
    timing: "Monday to Friday (11:00 AM - 1:00 PM)",
    certificationIncluded: true,
    jobPlacement: "85% placement rate",
  };

  const comingSoonBatches = [
    "Advanced Performance Marketing",
    "Social Media Marketing Mastery", 
    "E-commerce Marketing Strategies"
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Upcoming Batch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our next batch of <span className="font-semibold text-primary">100% online</span> course and begin your journey towards expertise
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-primary/10 p-4">
              <h3 className="font-bold text-lg text-primary text-center">{currentBatch.courseName}</h3>
            </div>
            
            <div className="p-5 space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Calendar size={18} className="text-primary" />
                <span>Starting: <strong>{currentBatch.startDate}</strong></span>
              </div>
              
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 p-3 rounded-md text-center">
                  <div className="text-gray-600 text-xs">Duration</div>
                  <div className="font-medium">{currentBatch.duration}</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md flex items-center justify-center gap-1">
                  <Monitor size={14} className="text-primary" />
                  <div className="font-medium text-sm">{currentBatch.mode}</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-md text-center">
                <div className="text-gray-600 text-xs">Timing</div>
                <div className="font-medium text-sm">{currentBatch.timing}</div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {currentBatch.certificationIncluded && (
                  <div className="flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                    <Award size={12} />
                    <span>Certification</span>
                  </div>
                )}
                {currentBatch.jobPlacement && (
                  <div className="flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                    <Briefcase size={12} />
                    <span>{currentBatch.jobPlacement}</span>
                  </div>
                )}
              </div>
              
              <Button 
                onClick={() => openBrochureForm(currentBatch.courseName)}
                className="w-full flex items-center justify-center gap-2 mt-4"
              >
                <Download size={16} />
                Download Brochure
              </Button>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-3 text-sm text-center">
              <span className="font-medium text-primary">Enroll now for this exclusive batch!</span>
            </div>
          </div>
        </div>

        {/* Coming Soon Batches */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-center mb-6">Coming Soon</h3>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {comingSoonBatches.map((course, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                <h4 className="font-medium text-gray-800 mb-2">{course}</h4>
                <Badge variant="outline" className="bg-gray-50">Coming Soon</Badge>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <Button onClick={() => openBrochureForm("All Courses")}>
            Get Information About All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;
