import { useEffect, RefObject } from 'react';

export const useScrollAnimation = (
  sectionRef: RefObject<HTMLElement>,
  threshold: number = 0.1
) => {
  useEffect(() => {
    const animateCards = () => {
      if (!sectionRef.current) return;
      
      const cards = sectionRef.current.querySelectorAll('.service-card');
      const parallaxElements = sectionRef.current.querySelectorAll('.parallax');
      
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardPosition = cardElement.getBoundingClientRect().top;
        const triggerPosition = window.innerHeight * 0.8;
        
        if (cardPosition < triggerPosition) {
          cardElement.classList.add('animate');
        }
      });
      
      parallaxElements.forEach((element) => {
        const parallaxElement = element as HTMLElement;
        const scrolled = window.scrollY;
        const rate = scrolled * 0.05;
        parallaxElement.style.transform = `translate3d(${rate}px, ${rate / 2}px, 0)`;
      });
    };
    
    // Run once on mount to check for elements already in view
    animateCards();
    
    window.addEventListener('scroll', animateCards);
    window.addEventListener('resize', animateCards);
    
    return () => {
      window.removeEventListener('scroll', animateCards);
      window.removeEventListener('resize', animateCards);
    };
  }, [sectionRef, threshold]);
};
