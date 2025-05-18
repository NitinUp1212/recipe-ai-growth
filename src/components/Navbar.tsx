
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "./Logo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive ? "font-medium text-primary" : "text-foreground hover:text-primary transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/ai-agent" 
            className={({isActive}) => 
              isActive ? "font-medium text-primary" : "text-foreground hover:text-primary transition-colors"
            }
          >
            AI Agent
          </NavLink>
          <NavLink 
            to="/case-studies" 
            className={({isActive}) => 
              isActive ? "font-medium text-primary" : "text-foreground hover:text-primary transition-colors"
            }
          >
            Taste Test
          </NavLink>
          <NavLink 
            to="/courses" 
            className={({isActive}) => 
              isActive ? "font-medium text-primary" : "text-foreground hover:text-primary transition-colors"
            }
          >
            Institute
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              isActive ? "font-medium text-primary" : "text-foreground hover:text-primary transition-colors"
            }
          >
            Meet the Chef
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              isActive ? "font-medium text-primary" : "text-foreground hover:text-primary transition-colors"
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className="hidden lg:block">
          <Button className="btn-primary">Get Your Free Audit</Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-foreground p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation - Improved for better mobile UX */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 right-0 bg-white shadow-lg py-4 px-4 animate-fade-in max-h-[80vh] overflow-y-auto z-50">
          <nav className="flex flex-col space-y-3">
            <NavLink 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "font-medium text-primary py-3 px-4 rounded-lg bg-primary/10" : "text-foreground py-3 px-4 rounded-lg hover:bg-gray-100"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/ai-agent" 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "font-medium text-primary py-3 px-4 rounded-lg bg-primary/10" : "text-foreground py-3 px-4 rounded-lg hover:bg-gray-100"
              }
            >
              AI Agent
            </NavLink>
            <NavLink 
              to="/case-studies" 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "font-medium text-primary py-3 px-4 rounded-lg bg-primary/10" : "text-foreground py-3 px-4 rounded-lg hover:bg-gray-100"
              }
            >
              Taste Test
            </NavLink>
            <NavLink 
              to="/courses" 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "font-medium text-primary py-3 px-4 rounded-lg bg-primary/10" : "text-foreground py-3 px-4 rounded-lg hover:bg-gray-100"
              }
            >
              Institute
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "font-medium text-primary py-3 px-4 rounded-lg bg-primary/10" : "text-foreground py-3 px-4 rounded-lg hover:bg-gray-100"
              }
            >
              Meet the Chef
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "font-medium text-primary py-3 px-4 rounded-lg bg-primary/10" : "text-foreground py-3 px-4 rounded-lg hover:bg-gray-100"
              }
            >
              Contact
            </NavLink>
            <div className="pt-2">
              <Button className="btn-primary w-full py-3">Get Your Free Audit</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
