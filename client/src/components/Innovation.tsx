import { useRef, useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface InnovationFeature {
  icon: string;
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
}

const innovationFeatures: InnovationFeature[] = [
  {
    icon: "fa-vr-cardboard",
    title: "AR/VR Integration",
    description: "We integrate augmented and virtual reality solutions that allow customers to visualize products in their space or on themselves before purchasing, significantly enhancing the shopping experience."
  },
  {
    icon: "fa-robot",
    title: "AI-Powered Personalization",
    description: "Our AI-driven recommendation engines analyze customer behavior to provide personalized product suggestions, enhancing user experience and increasing average order value."
  },
  {
    icon: "fa-bolt",
    title: "High-Performance Optimization",
    description: "We fine-tune every aspect of your Shopify store to ensure lightning-fast load times, smooth interactions, and exceptional performance on all devices."
  }
];

const Innovation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  
  useScrollAnimation(sectionRef);
  
  // Animation effect for header
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-from-bottom');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);
  
  // Auto-rotate through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeatureIndex(prev => (prev + 1) % innovationFeatures.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const stats: StatItem[] = [
    { value: "35%", label: "Higher Conversion Rate" },
    { value: "3x", label: "Engagement Increase" },
    { value: "42%", label: "Lower Bounce Rate" },
    { value: "28%", label: "Higher Order Value" }
  ];

  return (
    <section id="innovation" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 opacity-0 transform translate-y-8 transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Future-Focused <span className="text-purple-600">Innovation</span>
          </h2>
          <p className="text-gray-300">
            Leveraging cutting-edge technologies to create exceptional eCommerce experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12 relative">
            {/* Feature Slider */}
            <div className="relative overflow-hidden h-64">
              {innovationFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className={`absolute inset-0 transition-all duration-700 transform ${
                    index === activeFeatureIndex 
                      ? 'translate-x-0 opacity-100' 
                      : index < activeFeatureIndex 
                        ? '-translate-x-full opacity-0' 
                        : 'translate-x-full opacity-0'
                  }`}
                >
                  <div className="bg-gray-900 bg-opacity-40 backdrop-blur-sm p-8 rounded-xl border border-purple-600 border-opacity-20 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-purple-600 bg-opacity-20 flex items-center justify-center mr-6">
                        <i className={`fas ${feature.icon} text-2xl text-purple-600`}></i>
                      </div>
                      <h3 className="text-2xl font-bold font-heading">{feature.title}</h3>
                    </div>
                    <p className="text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {innovationFeatures.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeatureIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeFeatureIndex 
                      ? 'bg-purple-600 scale-125' 
                      : 'bg-gray-600 hover:bg-purple-400'
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Interactive 3D element */}
            <div className="w-full h-96 bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden relative perspective transform transition-all duration-700 hover:scale-105">
              <div id="innovation3D" className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 relative animate-float">
                  <div className="absolute inset-0 bg-purple-600 opacity-10 rounded-full blur-xl"></div>
                  <div className="absolute inset-8 bg-purple-600 opacity-20 rounded-full blur-lg"></div>
                  <div className="absolute inset-16 bg-purple-600 opacity-30 rounded-full blur-md"></div>
                  <div className="absolute inset-24 bg-purple-600 opacity-40 rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className={`fas ${innovationFeatures[activeFeatureIndex].icon} text-5xl text-white`}></i>
                  </div>
                </div>
              </div>
              
              {/* Tech dots */}
              <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-purple-600 rounded-full animate-pulse-slow"></div>
              <div className="absolute top-3/4 left-1/3 w-2 h-2 bg-purple-600 rounded-full animate-pulse-slow animation-delay-1000"></div>
              <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-purple-600 rounded-full animate-pulse-slow animation-delay-2000"></div>
              <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-purple-600 rounded-full animate-pulse-slow animation-delay-3000"></div>
            </div>
            
            {/* Innovation stats with sliding animation */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-gray-900 bg-opacity-50 rounded-lg p-4 backdrop-blur-sm border border-purple-600 border-opacity-20 transform transition-all duration-500 hover:scale-105 hover:bg-opacity-70"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="text-3xl font-bold text-purple-600 font-tech mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Innovation;
