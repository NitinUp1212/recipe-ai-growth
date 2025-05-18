
import { Calendar, Download, Monitor, Award, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface UpcomingBatchesProps {
  openBrochureForm: (courseName: string) => void;
}

const UpcomingBatches = ({ openBrochureForm }: UpcomingBatchesProps) => {
  const batches = [
    {
      id: 1,
      courseName: "Digital Marketing Mastery",
      startDate: "June 10, 2025",
      duration: "12 weeks",
      mode: "Online",
      seats: 15,
      seatsLeft: 3,
      timing: "Weekend (Sat-Sun 10AM-1PM)",
      certificationIncluded: true,
      jobPlacement: "85% placement rate",
    },
    {
      id: 2,
      courseName: "AI for Marketing",
      startDate: "June 15, 2025",
      duration: "8 weeks",
      mode: "Online",
      seats: 20,
      seatsLeft: 7,
      timing: "Weekday Evenings (Mon-Wed 6PM-8PM)",
      certificationIncluded: true,
      jobPlacement: "90% placement rate",
    },
    {
      id: 3,
      courseName: "AI Agent Development",
      startDate: "July 5, 2025",
      duration: "10 weeks",
      mode: "Online",
      seats: 12,
      seatsLeft: 5,
      timing: "Weekday (Tue-Thu 11AM-1PM)",
      certificationIncluded: true,
      jobPlacement: "95% placement rate",
    }
  ];

  // Previous batch images
  const previousBatchImages = [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.1&auto=format&fit=crop&w=1200&q=80"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Batches</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our next batch of <span className="font-semibold text-primary">100% online</span> courses and begin your journey towards expertise
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {batches.map((batch) => (
            <div 
              key={batch.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-100"
            >
              <div className="bg-primary/10 p-4 flex items-center justify-between">
                <h3 className="font-bold text-lg text-primary">{batch.courseName}</h3>
                <Badge variant="secondary" className="bg-primary/20 text-primary">
                  {batch.seatsLeft} seats left
                </Badge>
              </div>
              
              <div className="p-5 space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-primary" />
                  <span>Starting: <strong>{batch.startDate}</strong></span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-gray-50 p-2 rounded-md">
                    <div className="text-muted-foreground">Duration</div>
                    <div className="font-medium">{batch.duration}</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded-md flex items-center gap-1">
                    <Monitor size={14} className="text-primary" />
                    <div className="font-medium">{batch.mode} Only</div>
                  </div>
                  <div className="col-span-2 bg-gray-50 p-2 rounded-md">
                    <div className="text-muted-foreground">Timing</div>
                    <div className="font-medium">{batch.timing}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {batch.certificationIncluded && (
                    <div className="flex items-center gap-1 bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full">
                      <Award size={12} />
                      <span>Certification Included</span>
                    </div>
                  )}
                  {batch.jobPlacement && (
                    <div className="flex items-center gap-1 bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                      <Briefcase size={12} />
                      <span>{batch.jobPlacement}</span>
                    </div>
                  )}
                </div>
                
                <Button 
                  onClick={() => openBrochureForm(batch.courseName)}
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 mt-4"
                >
                  <Download size={16} />
                  Download Brochure
                </Button>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 px-5 py-3 text-sm">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Batch fills fast</span>
                  <span className="text-primary font-medium">Enroll now!</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Previous Batches Gallery */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-6">Previous Successful Batches</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {previousBatchImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={image} 
                  alt={`Previous batch ${index + 1}`} 
                  className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" onClick={() => openBrochureForm("All Courses")}>
            Get Information About All Batches
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingBatches;
