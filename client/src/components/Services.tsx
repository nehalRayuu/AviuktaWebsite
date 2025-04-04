import { useRef, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ABTestComponent, useABTest } from '../context/ABTestContext';
import { ShoppingCart, Crown, PaintBucket, Rocket, Search, ArrowRight, Check, ChevronRight } from 'lucide-react';

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  index: number;
}

// Helper function to get the Lucide icon based on icon name
const getIconComponent = (icon: string) => {
  switch (icon) {
    case "fa-shopping-cart": return <ShoppingCart className="text-purple-600" size={24} />;
    case "fa-crown": return <Crown className="text-purple-600" size={24} />;
    case "fa-paint-brush": return <PaintBucket className="text-purple-600" size={24} />;
    case "fa-rocket": return <Rocket className="text-purple-600" size={24} />;
    case "fa-search": return <Search className="text-purple-600" size={24} />;
    default: return <ShoppingCart className="text-purple-600" size={24} />;
  }
};

// Standard service card (Variation A)
const ServiceCard = ({ icon, title, description, features, index }: ServiceProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const animateOnScroll = () => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;
      
      if (isVisible) {
        setTimeout(() => {
          card.classList.add('animate');
        }, index * 100);
      }
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="service-card bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg p-6 border border-purple-600 border-opacity-20 h-full transform transition-all duration-500"
    >
      <div className="bg-purple-600 bg-opacity-20 w-16 h-16 flex items-center justify-center rounded-lg mb-6 animate-float">
        {getIconComponent(icon)}
      </div>
      <h3 className="text-xl font-bold font-heading mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">
        {description}
      </p>
      <ul className="text-gray-400 text-sm mb-6 space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start group">
            <Check className="text-purple-600 mt-1 mr-2 flex-shrink-0 group-hover:animate-pulse" size={16} />
            <span className="group-hover:text-white transition-colors">{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className="inline-flex items-center text-purple-600 hover:text-purple-500 font-medium transition-all hover:translate-x-1">
        Learn More <ArrowRight className="ml-1" size={16} />
      </a>
    </div>
  );
};

// Alternative service card design (Variation B)
const ServiceCardAlternative = ({ icon, title, description, features, index }: ServiceProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const animateOnScroll = () => {
      const rect = card.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8;
      
      if (isVisible) {
        setTimeout(() => {
          card.classList.add('animate');
        }, index * 150);
      }
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', animateOnScroll);
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="service-card relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 h-full border-l-4 border-purple-600 shadow-xl hover:shadow-purple-600/10 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="absolute top-0 right-0 w-20 h-20 bg-purple-600 opacity-10 rounded-bl-full"></div>
      <div className="flex flex-col sm:flex-row sm:items-center mb-6">
        <div className="mr-4 text-purple-600 text-2xl mb-4 sm:mb-0 animate-float">
          {getIconComponent(icon)}
        </div>
        <h3 className="text-xl font-bold font-heading">{title}</h3>
      </div>
      <p className="text-gray-300 mb-6 pl-2 border-l border-purple-600">
        {description}
      </p>
      <div className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center bg-gray-800 bg-opacity-50 p-2 rounded group hover:bg-gray-700 transition-colors">
            <Check className="text-purple-600 mr-2 flex-shrink-0 group-hover:animate-pulse" size={16} />
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <a href="#contact" className="inline-flex items-center px-6 py-2 bg-purple-600 bg-opacity-10 hover:bg-opacity-20 text-purple-600 rounded-full font-medium transition-all hover:translate-x-1">
        Learn More <ChevronRight className="ml-1" size={16} />
      </a>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);
  const { recordConversion } = useABTest();
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (title) {
      title.classList.add('slide-in-from-bottom');
    }
  }, []);

  const handleServiceClick = () => {
    // Record a conversion for the service layout test when a user interacts with it
    recordConversion('serviceLayout');
  };

  const services = [
    {
      icon: "fa-shopping-cart",
      title: "eCommerce Development",
      description: "Custom online store development with responsive design, intuitive navigation, and seamless checkout experiences.",
      features: [
        "Custom theme development",
        "Mobile-optimized layouts",
        "Performance optimization"
      ]
    },
    {
      icon: "fa-crown",
      title: "Enterprise Solutions",
      description: "Enterprise-grade solutions for high-volume merchants and complex business requirements with advanced features.",
      features: [
        "Custom checkout experiences",
        "Advanced integrations",
        "Multi-currency support"
      ]
    },
    {
      icon: "fa-paint-brush",
      title: "UI/UX Design",
      description: "User-centric design that enhances engagement, simplifies navigation, and increases conversion rates.",
      features: [
        "Wireframing & prototyping",
        "User journey mapping",
        "Conversion-focused layouts"
      ]
    },
    {
      icon: "fa-rocket",
      title: "Performance Optimization",
      description: "Speed up your online store to improve user experience, SEO rankings, and conversion rates.",
      features: [
        "Page speed optimization",
        "Code optimization",
        "Asset management"
      ]
    },
    {
      icon: "fa-search",
      title: "SEO & Marketing",
      description: "Drive traffic and boost sales with our specialized eCommerce SEO and marketing strategies.",
      features: [
        "Technical SEO",
        "Content optimization",
        "Conversion rate optimization"
      ]
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 relative overflow-hidden" onClick={handleServiceClick}>
      <div className="gradient-bg absolute inset-0 opacity-30 parallax-layer-back"></div>
      
      {/* Animated shapes */}
      <div className="absolute -right-40 top-20 w-80 h-80 bg-purple-600 bg-opacity-10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute -left-40 bottom-20 w-80 h-80 bg-purple-900 bg-opacity-20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10 parallax-layer-base">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 ref={titleRef} className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Our <span className="text-purple-600 animate-pulse-slow">Services</span>
          </h2>
          <p className="text-gray-300 slide-in-from-bottom">
            We offer comprehensive digital solutions to elevate your brand's online presence and drive business growth.
          </p>
        </div>
        
        {/* A/B Test for services layout */}
        <ABTestComponent
          testName="serviceLayout"
          renderA={() => (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  index={index}
                />
              ))}
            </div>
          )}
          renderB={() => (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <ServiceCardAlternative
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  index={index}
                />
              ))}
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Services;
