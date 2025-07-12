
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import ClientRegistrationForm from "@/components/ClientRegistrationForm";
import Index from "./pages/Index";
import About from "./pages/About";
import ServicesIndex from "./pages/ServicesIndex";
import AllServices from "./pages/AllServices";
import ServiceDetail from "./pages/ServiceDetail";
import Contact from "./pages/Contact";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Portfolio from "./pages/Portfolio";
import PropertyDealing from "./pages/PropertyDealing";
import SystemAccessories from "./pages/SystemAccessories";
import LaptopServices from "./pages/LaptopServices";
import AIAgent from "./pages/AIAgent";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState("");

  const openRegistrationForm = (type: string) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  const closeRegistrationForm = () => {
    setIsFormOpen(false);
    setFormType("");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index openBrochureForm={openRegistrationForm} />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<ServicesIndex />} />
                <Route path="/all-services" element={<AllServices />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
                <Route path="/courses" element={<Courses openBrochureForm={openRegistrationForm} />} />
                <Route path="/courses/:courseId" element={<CourseDetail openBrochureForm={openRegistrationForm} />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/property-dealing" element={<PropertyDealing />} />
                <Route path="/system-accessories" element={<SystemAccessories />} />
                <Route path="/laptop-services" element={<LaptopServices />} />
                <Route path="/ai-agent" element={<AIAgent />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <ScrollToTop />
            <Chatbot />
            <ClientRegistrationForm
              isOpen={isFormOpen}
              onClose={closeRegistrationForm}
              formType={formType}
            />
          </div>
          <Toaster />
          <Sonner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
