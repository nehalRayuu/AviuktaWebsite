import { useEffect, useRef } from 'react';

const Hero = () => {
  const parallaxRef1 = useRef<HTMLDivElement>(null);
  const parallaxRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (parallaxRef1.current && parallaxRef2.current) {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;
        
        parallaxRef1.current.style.transform = `translate(${x}px, ${y}px)`;
        parallaxRef2.current.style.transform = `translate(${-x}px, ${-y}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const techIcons = [
    { name: "SHOPIFY", src: "https://cdn.worldvectorlogo.com/logos/shopify.svg", animClass: "animate-float" },
    { name: "SHOPIFY PLUS", src: "https://cdn.worldvectorlogo.com/logos/shopify-plus.svg", animClass: "animate-pulse-slow" },
    { name: "REACT", src: "https://cdn.worldvectorlogo.com/logos/react-2.svg", animClass: "animate-float" },
    { name: "NODE.JS", src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg", animClass: "animate-pulse-slow" }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="gradient-bg absolute inset-0 opacity-50"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div ref={parallaxRef1} className="parallax absolute w-64 h-64 rounded-full bg-purple-600 bg-opacity-10 blur-3xl -top-20 -left-20"></div>
        <div ref={parallaxRef2} className="parallax absolute w-96 h-96 rounded-full bg-purple-900 bg-opacity-30 blur-3xl bottom-0 right-0"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 relative" data-text="Aviukta">
            <span className="relative inline-block">Futuristic Shopify</span>
            <span className="text-purple-600">Development</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto font-sans">
            We craft cutting-edge eCommerce experiences with Shopify and Shopify Plus for fashion and lifestyle brands.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a href="#portfolio" className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/30 text-center">
              View Our Work
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border-2 border-white hover:border-purple-600 hover:text-purple-600 text-white font-bold rounded-md transition-all duration-300 transform hover:-translate-y-1 text-center">
              Get in Touch
            </a>
          </div>
          
          {/* Tech icons with animation */}
          <div className="flex justify-center gap-8 mt-16 items-center flex-wrap">
            {techIcons.map((icon) => (
              <div key={icon.name} className="flex flex-col items-center">
                <img src={icon.src} alt={icon.name} className={`h-8 mb-2 ${icon.animClass}`} />
                <span className="text-xs text-gray-400 font-tech">{icon.name}</span>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll to Explore</span>
            <div className="h-10 w-6 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
