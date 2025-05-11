
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <NavLink to="/" className="flex items-center">
          <span className="text-2xl font-display font-bold">
            FlavorDish<span className="text-neon">.</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              isActive ? "font-medium text-primary" : "text-foreground hover:text-primary transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => 
              isActive ? "font-medium text-primary" : "text-foreground hover:text-primary transition-colors"
            }
          >
            Recipe Book
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
          className="lg:hidden text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "font-medium text-primary py-2" : "text-foreground py-2"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "font-medium text-primary py-2" : "text-foreground py-2"
              }
            >
              Recipe Book
            </NavLink>
            <NavLink 
              to="/ai-agent" 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "font-medium text-primary py-2" : "text-foreground py-2"
              }
            >
              AI Agent
            </NavLink>
            <NavLink 
              to="/case-studies" 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "font-medium text-primary py-2" : "text-foreground py-2"
              }
            >
              Taste Test
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "font-medium text-primary py-2" : "text-foreground py-2"
              }
            >
              Meet the Chef
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={() => setMobileMenuOpen(false)}
              className={({isActive}) => 
                isActive ? "font-medium text-primary py-2" : "text-foreground py-2"
              }
            >
              Contact
            </NavLink>
            <Button className="btn-primary w-full">Get Your Free Audit</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
