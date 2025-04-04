import { useState, FormEvent, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfoItems = [
    {
      icon: "fa-map-marker-alt",
      title: "Our Locations",
      content: "Mumbai | Delhi | Chennai | Bangalore"
    },
    {
      icon: "fa-envelope",
      title: "Email Us",
      content: "contact@aviukta.com"
    },
    {
      icon: "fa-phone-alt",
      title: "Call Us",
      content: "+91 98765 43210"
    }
  ];

  const socialLinks = [
    { icon: "fa-facebook-f", url: "#" },
    { icon: "fa-twitter", url: "#" },
    { icon: "fa-instagram", url: "#" },
    { icon: "fa-linkedin-in", url: "#" }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative overflow-hidden">
      <div className="gradient-bg absolute inset-0 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
              Let's <span className="text-purple-600">Connect</span>
            </h2>
            <p className="text-gray-300 mb-8">
              Ready to elevate your brand's online presence with our Shopify expertise? Reach out to discuss your project requirements.
            </p>
            
            <div className="space-y-6">
              {contactInfoItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-600 bg-opacity-20 flex items-center justify-center mr-4">
                    <i className={`fas ${item.icon} text-purple-600`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-300">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Media Links */}
            <div className="mt-12">
              <h4 className="font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    className="w-10 h-10 rounded-full bg-purple-600 bg-opacity-20 flex items-center justify-center hover:bg-purple-600 transition-colors"
                  >
                    <i className={`fab ${link.icon} text-white`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-lg p-8 border border-purple-600 border-opacity-20">
              <h3 className="text-2xl font-bold mb-6 font-heading">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black bg-opacity-50 border border-purple-600 border-opacity-30 rounded-md p-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black bg-opacity-50 border border-purple-600 border-opacity-30 rounded-md p-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="company" className="block text-gray-300 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-black bg-opacity-50 border border-purple-600 border-opacity-30 rounded-md p-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="service" className="block text-gray-300 mb-2">Service Interested In</label>
                  <select 
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black bg-opacity-50 border border-purple-600 border-opacity-30 rounded-md p-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="shopify">Shopify Development</option>
                    <option value="shopify-plus">Shopify Plus Development</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="app-development">Custom App Development</option>
                    <option value="performance">Performance Optimization</option>
                    <option value="seo">SEO & Marketing</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-black bg-opacity-50 border border-purple-600 border-opacity-30 rounded-md p-3 text-white focus:outline-none focus:border-purple-600 transition-colors"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-4 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/30 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
