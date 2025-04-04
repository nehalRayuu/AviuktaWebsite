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
import ABTestingDashboard from '@/components/ABTestingDashboard';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Aviukta | Leading eCommerce Development Agency in India | Digital Commerce Experts</title>
        <meta name="description" content="India's leading digital agency specializing in fashion and lifestyle eCommerce solutions. We craft cutting-edge digital experiences that transform brands. Based in Mumbai, Delhi, Chennai & Bangalore." />
        <meta name="keywords" content="eCommerce, Digital Commerce, Development, Fashion, Lifestyle, India, UI/UX, Web Design" />
      </Helmet>
      
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Innovation />
      <ABTestingDashboard />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
