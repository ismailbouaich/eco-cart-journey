
import { useEffect, useState } from 'react';

interface AnimationProps {
  duration?: number;
  delay?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
}

// Animation variants for components
export const fadeIn = (direction: string, { delay = 0, duration = 0.5 }: { delay?: number; duration?: number } = {}) => {
  return {
    hidden: {
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
      opacity: 0
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
};

export const scaleIn = ({ delay = 0, duration = 0.5 }: { delay?: number; duration?: number } = {}) => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.95
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'tween',
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren || 0.1,
        delayChildren: delayChildren || 0
      }
    }
  };
};

// Hook to trigger animations on scroll
export const useOnScroll = ({
  duration = 0.8,
  delay = 0,
  distance = 50,
  once = true,
  threshold = 0.1
}: AnimationProps = {}) => {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(ref);
        } else if (!once) {
          setVisible(false);
        }
      },
      {
        threshold
      }
    );

    observer.observe(ref);
    
    return () => {
      if (ref) observer.unobserve(ref);
    };
  }, [ref, once, threshold]);

  const style = {
    opacity: 0,
    transform: `translateY(${distance}px)`,
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    ...(visible && {
      opacity: 1,
      transform: 'translateY(0px)'
    })
  };

  return { ref: setRef, style, visible };
};
