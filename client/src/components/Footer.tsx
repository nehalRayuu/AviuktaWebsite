const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "eCommerce Development", href: "#services" },
      { name: "Enterprise Solutions", href: "#services" },
      { name: "UI/UX Design", href: "#services" },
      { name: "Performance Optimization", href: "#services" },
      { name: "SEO & Marketing", href: "#services" }
    ],
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "About Us", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Innovation", href: "#innovation" },
      { name: "Contact", href: "#contact" }
    ],
    policies: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" }
    ],
    social: [
      { name: "facebook", icon: "fa-facebook-f", href: "#" },
      { name: "twitter", icon: "fa-twitter", href: "#" },
      { name: "instagram", icon: "fa-instagram", href: "#" },
      { name: "linkedin", icon: "fa-linkedin-in", href: "#" }
    ]
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-black opacity-90 z-0"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-900 via-purple-600 to-purple-900"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-800 opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-purple-800 opacity-10 blur-3xl"></div>
      
      {/* Particles Effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-pulse-slow animation-delay-1500"></div>
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-purple-500 rounded-full animate-pulse-slow animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Footer Top with Logo and Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 bg-purple-900/20 p-8 rounded-xl backdrop-blur-sm border border-purple-500/20">
          <div className="mb-8 md:mb-0">
            <img src="./attached_assets/Aviukta_2.png" alt="Aviukta Logo" className="h-12 mb-4" />
            <p className="text-gray-300 max-w-md">
              Transforming fashion and lifestyle brands with cutting-edge digital solutions. 
              Elevate your eCommerce experience with our innovative approach.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <h4 className="font-bold text-white text-xl mb-4">Join Our Newsletter</h4>
            <form className="mb-2">
              <div className="flex flex-col sm:flex-row">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-black/50 backdrop-blur-md border border-purple-500/30 rounded-l-md p-3 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/50 transition-colors"
                />
                <button 
                  type="submit" 
                  className="mt-2 sm:mt-0 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 text-white font-bold py-3 px-6 rounded-r-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="text-gray-400 text-sm">
              Stay updated with our latest innovations and offers.
            </p>
          </div>
        </div>
        
        {/* Main Footer Links */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative">
              About Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-purple-500"></span>
            </h4>
            <p className="text-gray-300 mb-6">
              A forward-thinking digital agency focused on creating exceptional eCommerce experiences for fashion and lifestyle brands.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-purple-800/30 text-white hover:bg-purple-600 hover:scale-110 transition-all duration-300"
                >
                  <i className={`fab ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative">
              Services
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-purple-500"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-purple-500"></span>
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-purple-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-purple-500"></span>
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-800/30 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="fas fa-map-marker-alt text-purple-400"></i>
                </div>
                <span className="text-gray-300">
                  Mumbai, India
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-800/30 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="fas fa-envelope text-purple-400"></i>
                </div>
                <span className="text-gray-300">
                  contact@aviukta.com
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-purple-800/30 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <i className="fas fa-phone text-purple-400"></i>
                </div>
                <span className="text-gray-300">
                  +91 98765 43210
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright and Policies */}
        <div className="border-t border-purple-900/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} <span className="text-purple-400">Aviukta</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {footerLinks.policies.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
