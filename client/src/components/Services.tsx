import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ABTestComponent, useABTest } from '../context/ABTestContext';

interface ServiceProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

// Standard service card (Variation A)
const ServiceCard = ({ icon, title, description, features }: ServiceProps) => {
  return (
    <div className="service-card bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg p-6 border border-purple-600 border-opacity-20 h-full">
      <div className="bg-purple-600 bg-opacity-20 w-16 h-16 flex items-center justify-center rounded-lg mb-6">
        <i className={`fas ${icon} text-2xl text-purple-600`}></i>
      </div>
      <h3 className="text-xl font-bold font-heading mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">
        {description}
      </p>
      <ul className="text-gray-400 text-sm mb-6 space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <i className="fas fa-check text-purple-600 mt-1 mr-2"></i>
            {feature}
          </li>
        ))}
      </ul>
      <a href="#contact" className="inline-block text-purple-600 hover:text-purple-500 font-medium transition-colors">
        Learn More <i className="fas fa-arrow-right ml-1"></i>
      </a>
    </div>
  );
};

// Alternative service card design (Variation B)
const ServiceCardAlternative = ({ icon, title, description, features }: ServiceProps) => {
  return (
    <div className="service-card relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-6 h-full border-l-4 border-purple-600 shadow-xl hover:shadow-purple-600/10 transition-all duration-300 hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-20 h-20 bg-purple-600 opacity-10 rounded-bl-full"></div>
      <div className="flex items-center mb-6">
        <div className="mr-4 text-purple-600 text-2xl">
          <i className={`fas ${icon}`}></i>
        </div>
        <h3 className="text-xl font-bold font-heading">{title}</h3>
      </div>
      <p className="text-gray-300 mb-6 pl-2 border-l border-purple-600">
        {description}
      </p>
      <div className="space-y-3 mb-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center bg-gray-800 bg-opacity-50 p-2 rounded">
            <i className="fas fa-check-circle text-purple-600 mr-2"></i>
            <span className="text-gray-300 text-sm">{feature}</span>
          </div>
        ))}
      </div>
      <a href="#contact" className="inline-block px-6 py-2 bg-purple-600 bg-opacity-10 hover:bg-opacity-20 text-purple-600 rounded-full font-medium transition-colors">
        Learn More <i className="fas fa-long-arrow-alt-right ml-1"></i>
      </a>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);
  const { recordConversion } = useABTest();

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
      <div className="gradient-bg absolute inset-0 opacity-30"></div>
      
      {/* Animated shapes */}
      <div className="absolute -right-40 top-20 w-80 h-80 bg-purple-600 bg-opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -left-40 bottom-20 w-80 h-80 bg-purple-900 bg-opacity-20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Our <span className="text-purple-600">Services</span>
          </h2>
          <p className="text-gray-300">
            We offer comprehensive digital solutions to elevate your brand's online presence and drive business growth.
          </p>
        </div>
        
        {/* A/B Test for services layout */}
        <ABTestComponent
          testName="serviceLayout"
          renderA={() => (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              ))}
            </div>
          )}
          renderB={() => (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {services.map((service, index) => (
                <ServiceCardAlternative
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
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
