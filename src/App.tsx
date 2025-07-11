import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import ServicesIndex from "./pages/ServicesIndex";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import BrochureForm from "./components/BrochureForm";
import ScrollToTop from "./components/ScrollToTop";
import AllServices from "./pages/AllServices";
import LaptopServices from "./pages/LaptopServices";
import PropertyDealing from "./pages/PropertyDealing";
import SystemAccessories from "./pages/SystemAccessories";
import Portfolio from "./pages/Portfolio";
import DisclaimerPopup from "./components/DisclaimerPopup";
import PerformanceMarketing from "./pages/PerformanceMarketing";
import SEOServices from "./pages/SEOServices";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";

const App = () => {
  // Create a new instance of QueryClient inside the component
  const [queryClient] = useState(() => new QueryClient());
  const [isBrochureFormOpen, setIsBrochureFormOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openBrochureForm = (courseName: string) => {
    setSelectedCourse(courseName);
    setIsBrochureFormOpen(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <DisclaimerPopup />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index openBrochureForm={openBrochureForm} />} />
              <Route path="/services" element={<ServicesIndex />} />
              <Route path="/all-services" element={<AllServices />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
              <Route path="/services/seo" element={<SEOServices />} />
              <Route path="/services/website-development" element={<WebsiteDevelopment />} />
              <Route path="/services/laptop-services" element={<LaptopServices />} />
              <Route path="/services/property-dealing" element={<PropertyDealing />} />
              <Route path="/services/system-accessories" element={<SystemAccessories />} />
              <Route path="/about" element={<About />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:caseStudyId" element={<CaseStudyDetail />} />
              <Route path="/courses" element={<Courses openBrochureForm={openBrochureForm} />} />
              <Route path="/courses/:courseId" element={<CourseDetail openBrochureForm={openBrochureForm} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
          <BrochureForm 
            isOpen={isBrochureFormOpen} 
            onClose={() => setIsBrochureFormOpen(false)}
            courseName={selectedCourse}
          />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
