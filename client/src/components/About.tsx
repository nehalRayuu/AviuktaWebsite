import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  const visionPoints = [
    {
      icon: "fa-lightbulb",
      title: "Innovation-First Approach",
      description: "We blend cutting-edge technology with creative design to create unforgettable eCommerce experiences."
    },
    {
      icon: "fa-gem",
      title: "Fashion & Lifestyle Focus",
      description: "Specialized expertise in helping fashion and lifestyle brands stand out in the digital marketplace."
    },
    {
      icon: "fa-bolt",
      title: "Performance Driven",
      description: "Every decision we make is guided by data and focused on maximizing your conversion rates and ROI."
    },
    {
      icon: "fa-handshake",
      title: "Client Partnership",
      description: "We don't just build stores—we build lasting relationships as your dedicated eCommerce partner."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      
      {/* Animated background elements */}
      <div className="absolute w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-3xl -top-48 -right-48 animate-pulse-slow"></div>
      <div className="absolute w-96 h-96 rounded-full bg-purple-600 opacity-10 blur-3xl -bottom-48 -left-48 animate-pulse-slow animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            About <span className="text-purple-600">Aviukta</span>
          </h2>
          <div className="h-1 w-24 bg-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="backdrop-blur-sm bg-black bg-opacity-40 p-8 rounded-lg border border-purple-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight">
              A <span className="text-purple-500">New Vision</span> for Shopify Development 
              <span className="inline-block ml-2 animate-pulse">
                <i className="fas fa-rocket text-purple-500"></i>
              </span>
            </h3>
            
            <p className="text-gray-300 mb-6 text-lg">
              Founded in 2023, Aviukta is a fresh, forward-thinking Shopify development agency with a mission to transform how fashion and lifestyle brands connect with their customers online.
            </p>
            
            <p className="text-gray-300 mb-8">
              We combine technical expertise with creative vision to build beautiful, high-converting eCommerce experiences. While we're new to the scene, our team brings together seasoned developers and designers ready to make your Shopify store stand out in a crowded marketplace.
            </p>
            
            <div className="mt-8 flex flex-wrap">
              <div className="w-1/2 mb-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-purple-500"></i>
                </div>
                <span className="text-gray-300">Mumbai, India</span>
              </div>
              <div className="w-1/2 mb-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mr-4">
                  <i className="fas fa-users text-purple-500"></i>
                </div>
                <span className="text-gray-300">Small-but-mighty team</span>
              </div>
              <div className="w-1/2 mb-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mr-4">
                  <i className="fas fa-store text-purple-500"></i>
                </div>
                <span className="text-gray-300">Shopify Specialized</span>
              </div>
              <div className="w-1/2 mb-6 flex items-center">
                <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center mr-4">
                  <i className="fas fa-tshirt text-purple-500"></i>
                </div>
                <span className="text-gray-300">Fashion & Lifestyle Focus</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="grid grid-cols-1 gap-6">
              {visionPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="p-6 backdrop-blur-sm bg-black bg-opacity-40 rounded-lg border border-purple-500/20 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-600/30 flex items-center justify-center mr-4">
                      <i className={`fas ${point.icon} text-purple-400`}></i>
                    </div>
                    <h4 className="text-xl font-bold">{point.title}</h4>
                  </div>
                  <p className="text-gray-300 pl-16">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
