const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Shopify Development", href: "#" },
      { name: "Shopify Plus Development", href: "#" },
      { name: "UI/UX Design", href: "#" },
      { name: "Custom App Development", href: "#" },
      { name: "Performance Optimization", href: "#" },
      { name: "SEO & Marketing", href: "#" }
    ],
    quickLinks: [
      { name: "Home", href: "#" },
      { name: "About Us", href: "#" },
      { name: "Portfolio", href: "#" },
      { name: "Testimonials", href: "#" },
      { name: "Innovation", href: "#" },
      { name: "Contact", href: "#" }
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
    <footer className="bg-gray-900 pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <img src="/attached_assets/Aviukta_2.png" alt="Aviukta Logo" className="h-10 mb-6" />
            <p className="text-gray-400 mb-6">
              India's leading Shopify and Shopify Plus development agency specializing in fashion and lifestyle eCommerce.
            </p>
            <div className="flex space-x-4">
              {footerLinks.social.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-400 hover:text-purple-600 transition-colors">
                  <i className={`fab ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-600 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full bg-black bg-opacity-50 border border-purple-600 border-opacity-30 rounded-l-md p-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
                />
                <button 
                  type="submit" 
                  className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-4 rounded-r-md transition-colors"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <p className="text-gray-500 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Aviukta. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {footerLinks.policies.map((link, index) => (
                <a key={index} href={link.href} className="text-gray-500 hover:text-purple-600 text-sm transition-colors">
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
