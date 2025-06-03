# 🎨 Builder Games Design System

## Overview

The Builder Games design system provides a comprehensive set of components, colors, and patterns that create a kinetic, energy-focused user experience aligned with our "gamified startup arena" vision.

## 🎯 Design Principles

1. **Kinetic Energy**: Every interaction should feel alive and responsive
2. **Brand Colors**: Bold use of our semantic color palette
3. **Achievement Focus**: Gamification elements feel rewarding
4. **Modern UI**: Contemporary design patterns and micro-interactions
5. **Accessibility**: WCAG AA compliance throughout

## 🌈 Color System

### Brand Colors

```css
--color-primary: oklch(0.78 0.19 330);          /* Vibrant Pink */
--color-progression: oklch(0.7 0.25 280);       /* Rich Purple */
--color-live: oklch(0.65 0.22 12);              /* Bright Red */
--color-success: oklch(0.65 0.15 145);          /* Energetic Green */
--color-discovery: oklch(0.6 0.20 240);         /* Vivid Blue */
--color-momentum: oklch(0.7 0.15 65);           /* Bold Orange */
```

### Semantic Mapping

| Color | Usage | Context |
|-------|-------|---------|
| **Primary (Pink)** | Main CTAs, brand elements | User engagement, main features |
| **Progression (Purple)** | XP bars, level advancement | User advancement, achievements |
| **Live (Red)** | Help requests, urgent actions | Crisis moments, real-time activity |
| **Success (Green)** | Completed actions, props | Achievements, positive outcomes |
| **Discovery (Blue)** | Learning, updates | Knowledge sharing, discoveries |
| **Momentum (Orange)** | Testing, progress | Active development, testing phases |

## 🧩 Component Library

### Core Components

#### KineticButton
Energy-focused buttons with hover animations and brand color variants.

```tsx
import { KineticButton } from "@/components/ui/kinetic-button"

<KineticButton variant="primary" size="lg">Enter the Arena</KineticButton>
<KineticButton variant="help">Cry for Help</KineticButton>
<KineticButton variant="props">Give Props</KineticButton>
```

**Available Variants**: `primary`, `help`, `props`, `discovery`, `outline`, `secondary`, `ghost`, `destructive`

#### XPProgressBar
Animated progress bars with level-based gradients for gamification.

```tsx
<XPProgressBar currentXP={2420} nextLevelXP={3000} level={3} />
```

#### LevelBadge
Achievement-style badges with glow effects and tier-based styling.

```tsx
<LevelBadge level={5} />
```

#### ColorfulTag
Pill-style tags with brand colors, icons, and interactive states.

```tsx
<ColorfulTag variant="discovery">Update</ColorfulTag>
<ColorfulTag variant="live" icon="AlertTriangle">Cry for Help</ColorfulTag>
```

#### ModernCard
Base card component with modern styling, animations, and variants.

```tsx
<ModernCard variant="interactive" animation="kinetic">
  <ModernCardHeader>
    <ModernCardTitle>Card Title</ModernCardTitle>
  </ModernCardHeader>
</ModernCard>
```

## 🎭 Animation System

### Animation Constants

```tsx
import { ANIMATION_TIMING, EASING, ANIMATIONS } from "@/lib/animations"

ANIMATION_TIMING.kinetic   // 200ms for kinetic UI feedback
EASING.kinetic            // cubic-bezier(0.25, 0.46, 0.45, 0.94)
```

### Animation Classes

```tsx
className={ANIMATIONS.hoverLift}      // Scale + lift on hover
className={ANIMATIONS.fadeInUp}       // Slide up with fade
className={ANIMATIONS.xpGain}         // XP gain celebration
```

## ♿ Accessibility

- WCAG AA color contrast compliance
- Keyboard navigation support
- Reduced motion preferences respected
- Screen reader compatible

## 🚀 Usage Guidelines

1. **Buttons**: Use `KineticButton` for all interactive actions
2. **Cards**: Use `ModernCard` for content containers
3. **Progress**: Use `XPProgressBar` for any progress indication
4. **Tags**: Use `ColorfulTag` for categorization and status
5. **Badges**: Use `LevelBadge` for achievements and levels

## 📈 Performance

- Tree-shaking for unused components
- CSS custom properties for runtime theming
- Optimized animation performance using transform/opacity
- Bundle size optimization with component composition

---

*This design system provides the foundation for all Builder Games development, creating a consistent, accessible, and delightful user experience that embodies our gamified startup arena vision!* 🎨⚡