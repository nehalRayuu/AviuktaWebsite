import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Innovation from '@/components/Innovation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import ParticleBackground from '@/components/ParticleBackground';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Top Shopify & Shopify Plus Development Agency in India | Fashion eCommerce Experts</title>
        <meta name="description" content="Looking to hire a Shopify expert from India? We specialize in fashion & lifestyle eCommerce design and development. Based in Mumbai, Delhi, Chennai & more." />
        <meta name="keywords" content="Shopify, Shopify Plus, eCommerce, Development, Fashion, India" />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Innovation />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
