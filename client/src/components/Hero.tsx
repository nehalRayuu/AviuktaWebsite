
import { useEffect, useRef } from 'react';
import { ABTestComponent, useABTest } from '../context/ABTestContext';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const parallaxRef1 = useRef<HTMLDivElement>(null);
  const parallaxRef2 = useRef<HTMLDivElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);
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

    const handleScroll = () => {
      if (parallaxBgRef.current) {
        const scrollPosition = window.scrollY;
        parallaxBgRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleWorkButtonClick = () => {
    recordConversion('ctaButton');
  };

  const handleContactButtonClick = () => {
    recordConversion('heroHeadline');
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div ref={parallaxBgRef} className="gradient-bg absolute inset-0 opacity-50 parallax-layer-back"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div ref={parallaxRef1} className="parallax absolute w-64 h-64 rounded-full bg-purple-600 bg-opacity-10 blur-3xl -top-20 -left-20"></div>
        <div ref={parallaxRef2} className="parallax absolute w-96 h-96 rounded-full bg-purple-900 bg-opacity-30 blur-3xl bottom-0 right-0"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-20 parallax-layer-base">
        <div className="max-w-4xl mx-auto text-center">
          <ABTestComponent 
            testName="heroHeadline"
            renderA={() => (
              <h1 className="font-bold font-heading mb-6 relative" data-text="Aviukta">
                <span className="relative inline-block text-4xl md:text-6xl lg:text-7xl animate-typewriter">Innovation in</span>
                <br />
                <span className="text-purple-600 text-4xl md:text-6xl lg:text-7xl animate-typewriter animation-delay-1000">Technology</span>
                <span className="animate-glitch animation-delay-3000 absolute top-0 left-0 right-0 text-blue-400 opacity-30">Innovation in Technology</span>
              </h1>
            )}
            renderB={() => (
              <h1 className="font-bold font-heading mb-6 relative" data-text="Aviukta">
                <span className="relative inline-block text-4xl md:text-6xl lg:text-7xl animate-fadeIn">Transforming</span>
                <br />
                <span className="text-purple-600 text-4xl md:text-6xl lg:text-7xl animate-scaleUp animation-delay-1000">Digital Future</span>
                <div className="h-1 w-40 bg-purple-600 mx-auto mt-5 animate-spotlight"></div>
              </h1>
            )}
          />
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto font-sans slide-in-from-bottom animation-delay-2000">
            Creating next-generation solutions that redefine the boundaries of digital innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10 slide-in-from-bottom animation-delay-3000">
            <ABTestComponent
              testName="ctaButton"
              renderA={() => (
                <a 
                  href="#portfolio" 
                  className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/30 text-center animate-pulse-slow"
                  onClick={handleWorkButtonClick}
                >
                  View Our Work
                </a>
              )}
              renderB={() => (
                <a 
                  href="#portfolio" 
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/30 text-center flex items-center justify-center animate-float"
                  onClick={handleWorkButtonClick}
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
