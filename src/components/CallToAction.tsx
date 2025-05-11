
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

interface CTAProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonUrl?: string;
  variant?: "primary" | "secondary" | "neon";
  className?: string;
}

const CallToAction = ({
  title = "Ready to Cook Your Growth Strategy?",
  subtitle = "Get a free audit and recipe recommendation for your business",
  buttonText = "Get My Strategy Now",
  buttonUrl = "/contact",
  variant = "primary",
  className = ""
}: CTAProps) => {
  const getBtnClass = () => {
    switch(variant) {
      case "neon": return "btn-neon";
      case "secondary": return "btn-secondary";
      default: return "btn-primary";
    }
  };
  
  return (
    <section className={`py-16 ${className}`}>
      <div className="container-custom">
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-200">{subtitle}</p>
          <NavLink to={buttonUrl}>
            <Button className={`${getBtnClass()} text-lg px-8 py-6`}>
              {buttonText}
            </Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
