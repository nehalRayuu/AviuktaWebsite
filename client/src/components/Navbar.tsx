import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#innovation", label: "Innovation" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80' : 'bg-transparent'} backdrop-blur-sm border-b border-purple-600/20`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center cursor-pointer animate-float">
            <img src="/assets/Aviukta_2.png" alt="Aviukta Logo" className="h-8 md:h-10" />
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a 
              key={link.href}
              href={link.href} 
              className="nav-link text-white hover:text-purple-600 transition-colors font-futuristic letter-spacing-wider"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-white hover:text-purple-500 transition-colors focus:outline-none p-2"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-gray-900/95 backdrop-blur-md z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-end">
          <button 
            onClick={toggleMobileMenu}
            className="text-white hover:text-purple-500 focus:outline-none p-2"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="container mx-auto px-4 pt-10">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <a 
                key={link.href}
                href={link.href} 
                className={`text-white hover:text-purple-600 transition-all font-title text-2xl border-b border-gray-800 pb-2 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 50}ms`,
                  transitionDuration: '300ms'
                }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          <div className={`mt-10 p-4 border border-purple-800/30 rounded-lg bg-black/20 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`} style={{ transition: 'opacity 300ms ease 400ms' }}>
            <p className="text-gray-400 font-futuristic">
              Need help with your next digital project? Reach out to us for a free consultation.
            </p>
            <a 
              href="#contact" 
              className="mt-4 inline-block px-6 py-2 bg-purple-600 text-white rounded-md font-bold hover:bg-purple-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
