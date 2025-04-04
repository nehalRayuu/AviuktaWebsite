import { RefObject } from 'react';

/**
 * Animates an element with a glitch effect
 * @param element The element to animate
 * @param duration Duration of the animation in ms
 */
export const glitchAnimation = (element: HTMLElement, duration: number = 300) => {
  const originalPosition = { x: 0, y: 0 };
  const glitchPositions = [
    { x: -2, y: 2 },
    { x: -2, y: -2 },
    { x: 2, y: 2 },
    { x: 2, y: -2 }
  ];
  
  let i = 0;
  const interval = setInterval(() => {
    if (i >= glitchPositions.length) {
      clearInterval(interval);
      element.style.transform = `translate(${originalPosition.x}px, ${originalPosition.y}px)`;
      return;
    }
    
    const pos = glitchPositions[i];
    element.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    i++;
  }, duration / glitchPositions.length);
  
  return () => clearInterval(interval);
};

/**
 * Creates a smooth parallax effect on scroll
 * @param ref Reference to the element
 * @param speed Parallax speed factor
 * @param direction Direction of the parallax effect
 */
export const parallaxEffect = (
  ref: RefObject<HTMLElement>,
  speed: number = 0.2,
  direction: 'vertical' | 'horizontal' = 'vertical'
) => {
  if (!ref.current) return;
  
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const element = ref.current;
    
    if (!element) return;
    
    const elementTop = element.getBoundingClientRect().top + scrollY;
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;
    
    // Check if element is in viewport
    if (
      scrollY + windowHeight > elementTop &&
      scrollY < elementTop + elementHeight
    ) {
      const scrolled = scrollY - elementTop;
      const factor = scrolled * speed;
      
      if (direction === 'vertical') {
        element.style.transform = `translateY(${factor}px)`;
      } else {
        element.style.transform = `translateX(${factor}px)`;
      }
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  
  // Run once to initialize
  handleScroll();
  
  return () => window.removeEventListener('scroll', handleScroll);
};

/**
 * Creates a typing animation effect
 * @param element Element to apply the effect to
 * @param text Text to type
 * @param speed Typing speed in ms
 */
export const typeText = (
  element: HTMLElement,
  text: string,
  speed: number = 100
) => {
  let i = 0;
  element.textContent = '';
  
  const typing = setInterval(() => {
    if (i >= text.length) {
      clearInterval(typing);
      return;
    }
    
    element.textContent += text.charAt(i);
    i++;
  }, speed);
  
  return () => clearInterval(typing);
};
