import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Testimonial {
  rating: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    rating: 5.0,
    quote: "Aviukta transformed our online presence completely. Their team's expertise in Shopify Plus development helped us increase our conversion rate by 45% within three months of launch.",
    name: "Priya Sharma",
    title: "CEO",
    company: "Elegance Avenue",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    rating: 5.0,
    quote: "Working with Aviukta was a game-changer for our jewelry brand. Their attention to detail and innovative approach to product visualization significantly improved our customer experience.",
    name: "Raj Mehta",
    title: "Founder",
    company: "Lumina Jewels",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  },
  {
    rating: 4.5,
    quote: "The team at Aviukta delivered beyond our expectations. They created a seamless shopping experience with innovative features that have set us apart from competitors.",
    name: "Anita Desai",
    title: "Marketing Director",
    company: "Pure Essence",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const isHalfStar = testimonial.rating % 1 !== 0;
  const fullStars = Math.floor(testimonial.rating);
  
  return (
    <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg p-6 border border-purple-600 border-opacity-20 relative">
      <div className="absolute -top-4 -right-4 text-5xl text-purple-600 opacity-20">
        <i className="fas fa-quote-right"></i>
      </div>
      
      <div className="flex items-center mb-6">
        <div className="flex text-purple-600">
          {[...Array(fullStars)].map((_, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
          {isHalfStar && <i className="fas fa-star-half-alt"></i>}
        </div>
        <span className="ml-2 text-gray-400 text-sm">{testimonial.rating.toFixed(1)}</span>
      </div>
      
      <p className="text-gray-300 mb-6 italic">
        "{testimonial.quote}"
      </p>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.title}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  return (
    <section ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="gradient-bg absolute inset-0 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Client <span className="text-purple-600">Testimonials</span>
          </h2>
          <p className="text-gray-300">
            Here's what our clients have to say about working with Aviukta.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
