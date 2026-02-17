import { Variants } from 'framer-motion';

// Transition presets
export const transitions = {
  spring: {
    type: 'spring',
    stiffness: 100,
    damping: 15,
  } as const,
  smooth: {
    type: 'tween',
    ease: 'easeInOut',
    duration: 0.5,
  } as const,
  fast: {
    type: 'tween',
    ease: 'easeOut',
    duration: 0.3,
  } as const,
};

// Reusable Variants
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: transitions.smooth,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: transitions.smooth, 
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: transitions.spring,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const slideInRight: Variants = {
  hidden: { x: 20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: transitions.fast,
  },
};

export const slideInLeft: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: transitions.fast,
  },
};

// Navbar specific
export const navbarVariants: Variants = {
  visible: { y: 0, opacity: 1, transition: transitions.fast },
  hidden: { y: -100, opacity: 0, transition: transitions.fast },
};

// Accordion/FAQ specific
export const accordionVariants: Variants = {
  collapsed: { height: 0, opacity: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  expanded: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
};
