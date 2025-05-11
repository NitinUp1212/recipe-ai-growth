
import { NavLink } from "react-router-dom";
import { ChevronRight, Rocket, TrendingUp, CheckCircle, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const StartupPackage = () => {
  const packageIncludes = [
    "Performance Marketing Setup (Meta + Google)",
    "AI-Powered Lead Generation",
    "Brand Positioning & Messaging",
    "Website Conversion Optimization",
    "WhatsApp Business API Integration",
    "Weekly Performance Reports",
    "Dedicated Growth Manager",
    "A/B Testing & Optimization",
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-neon/5">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Startup Growth Recipe</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive package designed exclusively for startups and new businesses
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
                <Rocket size={16} />
                <span>New Business Accelerator</span>
              </div>
              
              <h3 className="text-3xl font-bold">Achieve 4x Sales Growth in 4 Months</h3>
              
              <p className="text-lg text-muted-foreground">
                Our comprehensive marketing recipe designed specifically for startups and new businesses. We'll take you from scratch to advanced marketing, with a focus on rapid, sustainable growth.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-2 text-neon font-medium">
                  <Award size={20} />
                  <span>Money-Back Guarantee</span>
                </div>
                <p className="text-muted-foreground">
                  If we don't achieve the promised growth targets within the timeframe, you get your money back. We're that confident in our recipe.
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div>
                  <div className="text-3xl font-bold">4x</div>
                  <div className="text-muted-foreground">Sales Growth</div>
                </div>
                
                <div className="h-12 w-px bg-gray-200"></div>
                
                <div>
                  <div className="text-3xl font-bold">4</div>
                  <div className="text-muted-foreground">Months</div>
                </div>
                
                <div className="h-12 w-px bg-gray-200"></div>
                
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-muted-foreground">Guaranteed</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <NavLink to="/contact">
                  <Button className="btn-primary">Get Started Today</Button>
                </NavLink>
                <NavLink to="/services">
                  <Button variant="outline" className="flex items-center gap-1">
                    Learn More <ChevronRight size={16} />
                  </Button>
                </NavLink>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="border-neon/20 bg-white shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardHeader className="bg-primary/5 border-b border-neon/10">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="text-neon" />
                  Growth Recipe Package
                </CardTitle>
                <CardDescription>
                  Everything you need to grow your startup from scratch
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="text-3xl font-bold">
                    From ₹75,000<span className="text-lg text-muted-foreground font-normal">/month</span>
                  </div>
                  <p className="text-muted-foreground">
                    4-month minimum commitment with performance guarantee
                  </p>
                  
                  <div className="py-4">
                    <h4 className="font-semibold mb-3">Package Includes:</h4>
                    <ul className="space-y-3">
                      {packageIncludes.map((item, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 * i }}
                        >
                          <CheckCircle size={18} className="text-neon mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-gray-100 pt-6 pb-4 flex-col items-stretch gap-4">
                <Button className="w-full text-lg" size="lg">
                  Book a Free Strategy Call
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Only 5 spots available this month!
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StartupPackage;
