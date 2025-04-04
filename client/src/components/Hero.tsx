import { useEffect, useRef } from 'react';
import { ABTestComponent, useABTest } from '../context/ABTestContext';

const Hero = () => {
  const parallaxRef1 = useRef<HTMLDivElement>(null);
  const parallaxRef2 = useRef<HTMLDivElement>(null);
  const { recordConversion } = useABTest();

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

  // Track conversion when user clicks CTA button
  const handleWorkButtonClick = () => {
    recordConversion('ctaButton');
  };

  const handleContactButtonClick = () => {
    recordConversion('heroHeadline');
  };

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
          {/* A/B Test for headline */}
          <ABTestComponent 
            testName="heroHeadline"
            renderA={() => (
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 relative" data-text="Aviukta">
                <span className="relative inline-block">Future of</span>
                <span className="text-purple-600"> eCommerce</span>
              </h1>
            )}
            renderB={() => (
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 relative" data-text="Aviukta">
                <span className="relative inline-block">Revolutionizing</span>
                <span className="text-purple-600"> Digital Commerce</span>
              </h1>
            )}
          />
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto font-sans">
            We craft cutting-edge digital experiences that transform your brand and elevate your online presence.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            {/* A/B Test for CTA button */}
            <ABTestComponent
              testName="ctaButton"
              renderA={() => (
                <a 
                  href="#portfolio" 
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/30 text-center"
                  onClick={handleWorkButtonClick}
                >
                  View Our Work
                </a>
              )}
              renderB={() => (
                <a 
                  href="#portfolio" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/30 text-center flex items-center justify-center"
                  onClick={handleWorkButtonClick}
                >
                  <span>Explore Projects</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            />
            <a 
              href="#contact" 
              className="px-8 py-4 bg-transparent border-2 border-white hover:border-purple-600 hover:text-purple-600 text-white font-bold rounded-md transition-all duration-300 transform hover:-translate-y-1 text-center"
              onClick={handleContactButtonClick}
            >
              Get in Touch
            </a>
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
