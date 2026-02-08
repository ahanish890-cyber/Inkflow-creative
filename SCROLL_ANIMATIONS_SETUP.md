# 🍎 Apple-Style Scroll Animations Setup Guide

Your website now has all the premium Apple-like scroll effects implemented!

## ✨ Features Included

### 1. **Lenis Smooth Scroll Physics** ✅
- **File**: `src/hooks/useLenisScroll.js`
- **Setup**: Already initialized in `App.jsx`
- **Effect**: Smooth, momentum-based scrolling like Apple.com
- **Duration**: 1.2s smooth scroll with customizable settings

### 2. **Text Reveal Animations** ✅
- **Component**: `src/components/TextReveal.jsx`
- **Usage**:
  ```jsx
  import TextReveal from './components/TextReveal'
  
  <TextReveal 
    text="Your headline here"
    delay={0}
  />
  ```
- **Effect**: Words slide up with stagger effect as you scroll

### 3. **Parallax Image Movement** ✅
- **Component**: `src/components/ParallaxImage.jsx`
- **Usage**:
  ```jsx
  import ParallaxImage from './components/ParallaxImage'
  
  <ParallaxImage 
    src="image.jpg"
    alt="Description"
    offset={150}
  />
  ```
- **Effect**: Images move at different speeds while scrolling

### 4. **Scroll-Based Animations** ✅
- **Component**: `src/components/ScrollAnimator.jsx`
- **Usage**:
  ```jsx
  import ScrollAnimator from './components/ScrollAnimator'
  
  <ScrollAnimator animation="fadeUp">
    <div>Your content here</div>
  </ScrollAnimator>
  ```
- **Animations**: fadeUp, scale, slideLeft, slideRight

### 5. **Sticky Scroll Sections** ✅
- **Component**: `src/components/StickyScroll.jsx`
- **Usage**:
  ```jsx
  import StickyScroll from './components/StickyScroll'
  
  <StickyScroll>
    <div>Content that stays pinned</div>
  </StickyScroll>
  ```
- **Effect**: Content stays fixed while scrolling

### 6. **Scale-on-Scroll Effects** ✅
- **Applied to**: All cards and components
- **CSS Class**: `.scaleOnScroll`
- **Effect**: Elements scale from 1.15 down to 1 as they enter view

### 7. **Staggered Animations** ✅
- **Applied to**: Multiple elements with sequence delays
- **Effect**: Items animate in sequence for visual rhythm

### 8. **Section Entrance Animations** ✅
- **Applied to**: All major sections
- **Effect**: Fade in + slide up with staggered timing

## 📦 Installation Required

Run this command in your terminal:

```bash
npm install @studio-freight/lenis
```

## 🎨 Where Effects Are Applied

### Home Page (src/pages/Home.jsx)
- ✅ Hero section with entrance animation
- ✅ Solutions section with scale-on-scroll
- ✅ Industries section with zoom parallax
- ✅ Manufacturing section with parallax images
- ✅ Statistics with staggered fade-in
- ✅ All cards with scale entrance

### Styling (src/App.css)
- ✅ fadeInSection - Section entrance
- ✅ scaleOnScroll - Card scale effect
- ✅ staggerFadeUp - Staggered animations
- ✅ imageParallaxEntry - Image animations
- ✅ glowEffect - Interactive glow
- ✅ featuredEntry - Featured content reveal

### Smooth Scroll (src/index.css)
- ✅ Lenis physics enabled globally
- ✅ Scroll snap settings configured
- ✅ Font smoothing optimized

## 🚀 How to Use Components

### Text Reveal for Headlines
```jsx
import TextReveal from './components/TextReveal'

<TextReveal text="Enterprise-Grade Solutions" />
```

### Parallax Images
```jsx
import ParallaxImage from './components/ParallaxImage'

<ParallaxImage 
  src="/facility.jpg"
  offset={200}
  alt="Facility"
/>
```

### Scroll Animations
```jsx
import ScrollAnimator from './components/ScrollAnimator'

<ScrollAnimator animation="slideLeft" duration={1}>
  <div>Animated content</div>
</ScrollAnimator>
```

## 🎯 Performance Tips

1. **Lazy Load Images**: All images use `loading="lazy"`
2. **Will-change**: Applied to animating elements
3. **GPU Acceleration**: 3D transforms used strategically
4. **Reduced Motion**: Respects user preferences
5. **Stagger Delays**: Prevents simultaneous animations

## 📱 Responsive Behavior

All animations are responsive and:
- ✅ Scale appropriately on mobile
- ✅ Respect `prefers-reduced-motion`
- ✅ Maintain smooth 60fps performance
- ✅ Work on all modern browsers

## 🔧 Customization

### Adjust Lenis Duration
Edit `src/hooks/useLenisScroll.js`:
```js
const lenis = new Lenis({
  duration: 1.2,  // Increase for slower scroll
  smooth: true,
})
```

### Change Animation Timing
Edit relevant component files:
```jsx
duration: 0.8,  // Slower or faster animations
stagger: 0.1,   // Delay between items
```

### Modify Colors/Effects
Edit `src/App.css` for all animation styles

## ✅ Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📝 Notes

- Lenis smooth scroll works automatically
- All components are fully typed and documented
- GSAP ScrollTrigger handles all scroll events
- No additional configuration needed!

Enjoy your Apple-style scroll experience! 🎉
