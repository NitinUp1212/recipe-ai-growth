
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import ServicesIndex from "./pages/ServicesIndex";
import ServiceDetail from "./pages/ServiceDetail";
import AIAgent from "./pages/AIAgent";
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
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Index openBrochureForm={openBrochureForm} />} />
              <Route path="/services" element={<ServicesIndex />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/ai-agent" element={<AIAgent />} />
              <Route path="/about" element={<About />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:caseStudyId" element={<CaseStudyDetail />} />
              <Route path="/courses" element={<Courses openBrochureForm={openBrochureForm} />} />
              <Route path="/courses/:courseId" element={<CourseDetail openBrochureForm={openBrochureForm} />} />
              <Route path="/contact" element={<Contact />} />
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
