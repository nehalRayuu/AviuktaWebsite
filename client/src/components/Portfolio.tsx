import { useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
}

const projects: Project[] = [
  {
    title: "Elegance Avenue",
    description: "Premium fashion boutique with custom product visualization and virtual try-on features.",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1",
    tags: ["Fashion", "Shopify Plus"],
    category: "Fashion"
  },
  {
    title: "Lumina Jewels",
    description: "Luxury jewelry store with 3D product visualization and customization options.",
    image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956",
    tags: ["Jewelry", "Shopify Plus"],
    category: "Jewelry"
  },
  {
    title: "Pure Essence",
    description: "Organic beauty brand with ingredient transparency and personalized recommendation engine.",
    image: "https://images.unsplash.com/photo-1576426863848-c21f53c60b19",
    tags: ["Beauty", "Shopify"],
    category: "Beauty"
  },
  {
    title: "Urban Nest",
    description: "Modern home decor store with augmented reality room visualization feature.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2",
    tags: ["Lifestyle", "Shopify"],
    category: "Lifestyle"
  },
  {
    title: "Nova Athletics",
    description: "Premium athleisure brand with size recommendation and fitness tracking integration.",
    image: "https://images.unsplash.com/photo-1525562723836-dca67a71d5f1",
    tags: ["Fashion", "Shopify Plus"],
    category: "Fashion"
  },
  {
    title: "Sole Journey",
    description: "Premium footwear store with 3D model viewing and customization options.",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    tags: ["Fashion", "Shopify"],
    category: "Fashion"
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All Projects");
  const sectionRef = useRef<HTMLElement>(null);
  useScrollAnimation(sectionRef);

  const filters = ["All Projects", "Fashion", "Lifestyle", "Jewelry", "Beauty"];

  const filteredProjects = filter === "All Projects" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 relative">
      <div className="absolute inset-0 bg-black bg-opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            Our <span className="text-purple-600">Portfolio</span>
          </h2>
          <p className="text-gray-300">
            Explore our carefully crafted eCommerce solutions for fashion and lifestyle brands.
          </p>
        </div>
        
        {/* Project Filters */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filters.map((filterName, index) => (
            <button
              key={index}
              className={`
                px-6 py-3 rounded-lg relative overflow-hidden group
                ${filter === filterName 
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30' 
                  : 'bg-gray-900 text-white hover:bg-gray-800'
                }
                transition-all duration-300 transform hover:-translate-y-1
              `}
              onClick={() => setFilter(filterName)}
            >
              <span className="relative z-10">{filterName}</span>
              <span className={`
                absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300
                ${filter === filterName ? 'opacity-100' : ''}
              `}></span>
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <img 
                src={`${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} 
                alt={`${project.title} Project`} 
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-purple-600 bg-opacity-20 text-white px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-600/30">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
