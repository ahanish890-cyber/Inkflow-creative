# 🚀 Apple Scroll Effects - Quick Reference

## 📦 Installation Required

```bash
npm install @studio-freight/lenis
```

## 🎯 Components Quick Reference

| Component | Import | Usage | Best For |
|-----------|--------|-------|----------|
| **TextReveal** | `TextReveal from '.../TextReveal'` | `<TextReveal text="Headline" />` | Headlines, titles |
| **ParallaxImage** | `ParallaxImage from '.../ParallaxImage'` | `<ParallaxImage src="img" />` | Images, backgrounds |
| **ScrollAnimator** | `ScrollAnimator from '.../ScrollAnimator'` | `<ScrollAnimator animation="fadeUp">` | Cards, content |
| **StickyScroll** | `StickyScroll from '.../StickyScroll'` | `<StickyScroll>` | Full-screen sections |
| **VideoScroll** | `VideoScroll from '.../VideoScroll'` | `<VideoScroll src="video" />` | Videos, demos |

## ⚡ Animation Types

```jsx
// Scroll Animator animation options:
"fadeUp"      // Fade in + slide up (default)
"scale"       // Scale from small to normal
"slideLeft"   // Slide in from left
"slideRight"  // Slide in from right
```

## 📝 Code Snippets

### Text Reveal
```jsx
<TextReveal 
  text="Your headline here"
  delay={0}
/>
```

### Parallax Image
```jsx
<ParallaxImage 
  src="/image.jpg"
  alt="Description"
  offset={150}
/>
```

### Scroll Animation
```jsx
<ScrollAnimator animation="fadeUp" duration={1}>
  <div>Content</div>
</ScrollAnimator>
```

### Sticky Section
```jsx
<StickyScroll>
  <div>Pinned content</div>
</StickyScroll>
```

### Video Control
```jsx
<VideoScroll src="/video.mp4" />
```

## 🎨 CSS Effects Applied

- ✅ Fade-in animations
- ✅ Scale zoom effects
- ✅ Parallax movement
- ✅ Text reveals
- ✅ Staggered delays
- ✅ Hover effects
- ✅ Glow animations

## 🔧 Props Reference

### TextReveal Props
- `text` (string) - Text to reveal
- `className` (string) - CSS class
- `delay` (number) - Animation delay in seconds

### ParallaxImage Props
- `src` (string) - Image URL
- `alt` (string) - Alt text
- `offset` (number) - Parallax distance in px
- `className` (string) - CSS class

### ScrollAnimator Props
- `children` (node) - Content to animate
- `animation` (string) - Animation type
- `duration` (number) - Duration in seconds
- `delay` (number) - Delay in seconds
- `className` (string) - CSS class

### StickyScroll Props
- `children` (node) - Pinned content
- `className` (string) - CSS class

### VideoScroll Props
- `src` (string) - Video URL
- `className` (string) - CSS class

## 📂 File Locations

```
src/
├── hooks/
│   └── useLenisScroll.js
├── components/
│   ├── TextReveal.jsx
│   ├── ParallaxImage.jsx
│   ├── ScrollAnimator.jsx
│   ├── StickyScroll.jsx
│   └── VideoScroll.jsx
├── styles/
│   ├── TextReveal.css
│   ├── ParallaxImage.css
│   ├── StickyScroll.css
│   └── VideoScroll.css
└── App.jsx (Lenis hook initialized)
```

## ⏱️ Default Timings

- Section Fade: 1s
- Scale On Scroll: 1s
- Stagger Fade: 0.8s
- Image Entry: 1.2s
- Text Reveal Stagger: 0.1s between words

## 🎯 Animation Stagger Delays

```css
.solution-card:nth-child(1) { animation-delay: 0s; }
.solution-card:nth-child(2) { animation-delay: 0.1s; }
.solution-card:nth-child(3) { animation-delay: 0.2s; }
.solution-card:nth-child(4) { animation-delay: 0.3s; }
```

## 🌐 Where Effects Are Active

- ✅ Hero Section
- ✅ Solutions Section
- ✅ Industries Section
- ✅ Manufacturing Section
- ✅ Why Choose Section
- ✅ All Cards and Components

## 📊 Performance

- 60fps maintained ✅
- GPU accelerated ✅
- Mobile optimized ✅
- Respects prefers-reduced-motion ✅
- Lazy loading enabled ✅

## 🆘 Common Issues

| Issue | Solution |
|-------|----------|
| Lenis not smooth | Run `npm install @studio-freight/lenis` |
| Animations skip | Check browser console |
| Chopped performance | Reduce parallax offset values |
| Mobile issues | Test with DevTools mobile emulator |

## 💡 Pro Tips

1. **Combine effects** for more impact
2. **Stagger delays** for rhythm
3. **Use moderate offsets** (100-200px)
4. **Test on mobile** before deploying
5. **Use preload="metadata"** for videos

## 🎓 Learning Resources

- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Lenis Smooth Scroll: https://github.com/studio-freight/lenis
- CSS Animations: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations

## ✅ Pre-configured

- ✅ Lenis initialized
- ✅ GSAP + ScrollTrigger setup
- ✅ All CSS animations added
- ✅ Components ready to use
- ✅ No additional setup needed!

---

**Start using these components now and create amazing Apple-style animations!** 🎉
