// Animation System & Utilities
// Provides reusable animation patterns, timing constants, and performance-optimized animations

// Animation Timing Constants
export const ANIMATION_TIMING = {
  fast: '150ms',
  medium: '300ms',
  slow: '500ms',
  kinetic: '200ms', // For kinetic UI feedback
} as const;

// Easing Functions
export const EASING = {
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  kinetic: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
} as const;

// Animation Classes (CSS Custom Properties)
export const ANIMATIONS = {
  // Hover Effects
  hoverLift: 'hover:transform hover:scale-105 hover:-translate-y-1',
  hoverGlow: 'hover:shadow-lg hover:shadow-primary/20',
  hoverKinetic: 'hover:transform hover:scale-102 hover:-translate-y-0.5',
  
  // Button States
  buttonPress: 'active:scale-95 active:transform',
  buttonKinetic: 'transition-all duration-200 hover:scale-105 hover:-translate-y-1 active:scale-95',
  
  // Entrance Animations
  fadeInUp: 'animate-in slide-in-from-bottom-4 fade-in duration-300',
  fadeInScale: 'animate-in zoom-in-95 fade-in duration-200',
  slideInRight: 'animate-in slide-in-from-right-4 fade-in duration-300',
  
  // Loading States
  pulse: 'animate-pulse',
  spin: 'animate-spin',
  
  // XP & Gamification
  xpGain: 'animate-in zoom-in-110 fade-in duration-500',
  levelUp: 'animate-in zoom-in-125 fade-in duration-700',
  
  // Interactive Elements
  tagHover: 'hover:scale-105 hover:shadow-md transition-all duration-150',
  cardHover: 'hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-200',
} as const;

// Animation Utility Functions
export const createKineticTransition = (property: string = 'all', duration: string = ANIMATION_TIMING.kinetic) => {
  return `transition-${property} duration-[${duration}] ease-[${EASING.kinetic}]`;
};

export const createHoverEffect = (scale: number = 1.05, translateY: number = -4) => {
  return `hover:scale-[${scale}] hover:translate-y-[${translateY}px] transition-transform duration-200`;
};

// Performance-Optimized Animation Hooks
export const useReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

// Animation Component Props
export interface AnimationProps {
  animate?: boolean;
  delay?: number;
  duration?: keyof typeof ANIMATION_TIMING;
  easing?: keyof typeof EASING;
}

// Keyframe Definitions for CSS
export const KEYFRAMES = {
  kineticPulse: {
    '0%, 100%': { transform: 'scale(1)', opacity: '1' },
    '50%': { transform: 'scale(1.05)', opacity: '0.8' },
  },
  
  xpGain: {
    '0%': { transform: 'scale(0.8) translateY(10px)', opacity: '0' },
    '50%': { transform: 'scale(1.1) translateY(-5px)', opacity: '1' },
    '100%': { transform: 'scale(1) translateY(0)', opacity: '1' },
  },
  
  levelUpCelebration: {
    '0%': { transform: 'scale(0.5) rotate(-10deg)', opacity: '0' },
    '50%': { transform: 'scale(1.2) rotate(5deg)', opacity: '1' },
    '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
  },
  
  glowPulse: {
    '0%, 100%': { boxShadow: '0 0 20px rgba(var(--primary-rgb), 0.3)' },
    '50%': { boxShadow: '0 0 30px rgba(var(--primary-rgb), 0.6)' },
  },
} as const;

// CSS-in-JS Animation Styles
export const animationStyles = {
  kineticButton: {
    transition: `all ${ANIMATION_TIMING.kinetic} ${EASING.kinetic}`,
    '&:hover': {
      transform: 'translateY(-2px) scale(1.02)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    },
    '&:active': {
      transform: 'translateY(0) scale(0.98)',
    },
  },
  
  cardHover: {
    transition: `all ${ANIMATION_TIMING.medium} ${EASING.smooth}`,
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    },
  },
  
  progressFill: {
    transition: `width ${ANIMATION_TIMING.slow} ${EASING.smooth}`,
  },
} as const;

// Accessibility: Respect reduced motion preferences
export const getAnimation = (animation: string, reducedMotion?: boolean) => {
  if (reducedMotion) {
    return 'transition-opacity duration-200'; // Minimal animation for accessibility
  }
  return animation;
};

// Export animation class combinations for common patterns
export const ANIMATION_COMBOS = {
  kineticCard: `${ANIMATIONS.cardHover} ${ANIMATIONS.fadeInScale}`,
  energyButton: `${ANIMATIONS.buttonKinetic} ${ANIMATIONS.hoverGlow}`,
  gameElement: `${ANIMATIONS.fadeInUp} ${ANIMATIONS.hoverKinetic}`,
  achievementPopup: `${ANIMATIONS.xpGain} ${ANIMATIONS.levelUp}`,
} as const;