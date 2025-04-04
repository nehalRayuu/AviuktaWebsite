import { useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  const timelineItems = [
    {
      year: "2018",
      icon: "fa-star",
      title: "Company Founded",
      description: "Aviukta was established with a vision to revolutionize Shopify development in India."
    },
    {
      year: "2020",
      icon: "fa-trophy",
      title: "Shopify Plus Partnership",
      description: "Became an official Shopify Plus Partner, opening doors to enterprise eCommerce development."
    },
    {
      year: "2021",
      icon: "fa-award",
      title: "Best eCommerce Agency Award",
      description: "Recognized as India's top eCommerce development agency for fashion and lifestyle brands."
    },
    {
      year: "Present",
      icon: "fa-rocket",
      title: "Innovation & Expansion",
      description: "Continuing to innovate with advanced technologies and expanding our presence across India."
    }
  ];

  const stats = [
    { value: "150+", label: "Projects Completed" },
    { value: "95%", label: "Client Satisfaction" },
    { value: "5+", label: "Years of Excellence" }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 relative">
              <span className="text-gradient">About</span> Aviukta
              <div className="h-1 w-20 bg-purple-600 mt-2"></div>
            </h2>
            
            <p className="text-gray-300 mb-6">
              Founded with a vision to transform the eCommerce landscape, Aviukta has emerged as India's leading Shopify and Shopify Plus development agency. We specialize in creating immersive digital experiences for fashion and lifestyle brands.
            </p>
            
            <p className="text-gray-300 mb-8">
              Our team of experts combines technical expertise with creative design to build eCommerce solutions that drive results. We've helped numerous brands across India - from Mumbai to Delhi, Chennai to Bangalore - establish powerful online presences.
            </p>
            
            <div className="flex gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-purple-600 font-tech">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            {/* Company timeline */}
            <div className="relative pl-12 pr-4 py-8">
              <div className="timeline-connector"></div>
              
              {/* Timeline items */}
              {timelineItems.map((item, index) => (
                <div key={index} className={`${index !== timelineItems.length - 1 ? 'mb-12' : ''} relative`}>
                  <div className="absolute left-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center transform -translate-x-6 z-10">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className="ml-8 p-4 bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg border border-purple-600 border-opacity-20">
                    <div className="text-purple-600 font-tech font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
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
