
import { Calendar, Download, Monitor, Award, Briefcase, Users, GraduationCap, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

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

  // Previous completed batches with detailed information
  const completedBatches = [
    {
      id: 1,
      courseName: "Digital Marketing Mastery",
      batchPeriod: "Jan - March 2025",
      studentsEnrolled: 25,
      placementRate: "92%",
      topCompanies: ["TechGrow", "MarketEase", "DigitalPulse"],
      topPerformers: [
        { name: "Rahul Sharma", rank: 1, placedAt: "TechGrow", package: "14 LPA" },
        { name: "Priya Verma", rank: 2, placedAt: "MarketEase", package: "12 LPA" },
        { name: "Amit Kumar", rank: 3, placedAt: "DigitalPulse", package: "11.5 LPA" }
      ]
    },
    {
      id: 2,
      courseName: "AI for Marketing",
      batchPeriod: "Feb - April 2025",
      studentsEnrolled: 20,
      placementRate: "95%",
      topCompanies: ["AITech", "Innovision", "FutureSmart"],
      topPerformers: [
        { name: "Neha Singh", rank: 1, placedAt: "AITech", package: "16 LPA" },
        { name: "Vikram Joshi", rank: 2, placedAt: "FutureSmart", package: "15 LPA" },
        { name: "Deepak Patel", rank: 3, placedAt: "Innovision", package: "14 LPA" }
      ]
    },
    {
      id: 3,
      courseName: "AI Agent Development",
      batchPeriod: "March - May 2025",
      studentsEnrolled: 18,
      placementRate: "90%",
      topCompanies: ["AgentAI", "BotMakers", "IntelliTech"],
      topPerformers: [
        { name: "Ananya Reddy", rank: 1, placedAt: "AgentAI", package: "18 LPA" },
        { name: "Rohan Gupta", rank: 2, placedAt: "IntelliTech", package: "16.5 LPA" },
        { name: "Shweta Kapoor", rank: 3, placedAt: "BotMakers", package: "15 LPA" }
      ]
    }
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
        
        {/* Previous Batches Success Stories as Carousel */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Previous Batch Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our track record of excellence and placement success speaks volumes about our quality of education
            </p>
          </div>
          
          <div className="relative px-12">
            <Carousel className="w-full">
              <CarouselContent>
                {completedBatches.map((batch) => (
                  <CarouselItem key={batch.id} className="md:basis-4/5 lg:basis-3/4">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 h-full">
                      <div className="bg-primary/10 p-5">
                        <div className="flex flex-wrap gap-4 justify-between items-center">
                          <h3 className="text-xl font-bold text-primary">
                            {batch.courseName} 
                            <span className="text-muted-foreground text-sm font-normal ml-2">({batch.batchPeriod})</span>
                          </h3>
                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <Users size={18} className="text-primary" />
                              <span>{batch.studentsEnrolled} Students</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Briefcase size={18} className="text-green-600" />
                              <span className="font-semibold text-green-700">{batch.placementRate} Placed</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5 space-y-6">
                        <div>
                          <h4 className="flex items-center gap-2 text-lg font-semibold mb-3">
                            <GraduationCap className="text-primary" size={20} />
                            Top Performers & Placements
                          </h4>
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>Rank</TableHead>
                                <TableHead>Student Name</TableHead>
                                <TableHead>Placed At</TableHead>
                                <TableHead>Package</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              {batch.topPerformers.map((performer, index) => (
                                <TableRow key={index}>
                                  <TableCell className="font-medium">#{performer.rank}</TableCell>
                                  <TableCell>{performer.name}</TableCell>
                                  <TableCell className="font-medium text-primary">{performer.placedAt}</TableCell>
                                  <TableCell>{performer.package}</TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                        </div>
                        
                        <div>
                          <h4 className="flex items-center gap-2 font-semibold mb-3">
                            <CheckCircle className="text-primary" size={18} />
                            Top Recruiting Companies
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {batch.topCompanies.map((company, index) => (
                              <Badge key={index} variant="outline" className="bg-primary/5 border-primary/20 text-primary">
                                {company}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
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
