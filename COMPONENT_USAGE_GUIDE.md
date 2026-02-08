# 🎬 Complete Apple-Style Scroll Effects Guide

## 🌟 All Components Available

You now have a complete toolkit of Apple-style scroll effects. Here's how to use each one:

---

## 1️⃣ **Lenis Smooth Scroll** (Already Active)

### What it does:
- Provides ultra-smooth, momentum-based scrolling
- Automatically initialized in App.jsx

### Usage:
No code needed! It's already working. Just scroll and experience the smooth physics.

### Customization:
Edit `src/hooks/useLenisScroll.js`:
```js
const lenis = new Lenis({
  duration: 1.2,        // Increase for slower scroll
  smooth: true,
  wheelMultiplier: 1,   // Adjust scroll sensitivity
})
```

---

## 2️⃣ **Text Reveal** (Word-by-word Animation)

### What it does:
- Text appears one word at a time as you scroll into view
- Creates cinematic headline reveals

### Component Location:
`src/components/TextReveal.jsx`

### Basic Usage:
```jsx
import TextReveal from '../components/TextReveal'

<TextReveal 
  text="Enterprise-Grade Printing Solutions"
  delay={0}
/>
```

### Advanced Usage:
```jsx
<TextReveal 
  text="This is a long headline that reveals word by word"
  className="custom-class"
  delay={0.2}
/>
```

### Styling:
```css
/* Customize in src/styles/TextReveal.css */
.text-reveal {
  font-size: 48px;
  font-weight: 700;
}
```

### Best For:
- Main headlines
- Section titles
- Call-to-action text
- Key messages

---

## 3️⃣ **Parallax Image** (Depth Effect)

### What it does:
- Images move at different speeds while scrolling
- Creates 3D depth illusion

### Component Location:
`src/components/ParallaxImage.jsx`

### Basic Usage:
```jsx
import ParallaxImage from '../components/ParallaxImage'

<ParallaxImage 
  src="/image.jpg"
  alt="Product showcase"
  offset={150}
/>
```

### Parameters:
- `src`: Image URL (required)
- `alt`: Alt text for accessibility (optional)
- `offset`: Parallax distance in pixels (default: 150)
- `className`: Custom CSS class (optional)

### Advanced Usage:
```jsx
<div className="image-section">
  <ParallaxImage 
    src="https://images.unsplash.com/photo-1..."
    alt="Manufacturing facility"
    offset={200}
    className="hero-image"
  />
</div>
```

### Best For:
- Hero images
- Product showcases
- Feature images
- Background imagery

---

## 4️⃣ **Scroll Animator** (General Animations)

### What it does:
- Animates elements when they come into view
- Multiple animation types available

### Component Location:
`src/components/ScrollAnimator.jsx`

### Animation Types:
1. **fadeUp** - Fade in + slide up
2. **scale** - Scale from small to normal
3. **slideLeft** - Slide in from left
4. **slideRight** - Slide in from right

### Basic Usage:
```jsx
import ScrollAnimator from '../components/ScrollAnimator'

<ScrollAnimator animation="fadeUp">
  <div className="content">
    <h2>Your Headline</h2>
    <p>Your content here</p>
  </div>
</ScrollAnimator>
```

### Advanced Usage:
```jsx
<ScrollAnimator 
  animation="scale"
  duration={1.2}
  delay={0.3}
  className="custom-class"
>
  <img src="product.jpg" alt="Product" />
</ScrollAnimator>
```

### Properties:
- `animation`: Type of animation (required)
- `duration`: Animation length in seconds (default: 0.8)
- `delay`: Delay before animation (default: 0)
- `className`: Custom CSS class (optional)

### Best For:
- Card animations
- Content blocks
- Feature reveals
- Section highlights

---

## 5️⃣ **Sticky Scroll** (Pinned Sections)

### What it does:
- Pins content while scrolling through sections
- Classic Apple technique

### Component Location:
`src/components/StickyScroll.jsx`

### Basic Usage:
```jsx
import StickyScroll from '../components/StickyScroll'

<StickyScroll>
  <div className="sticky-content">
    <h2>This stays visible</h2>
    <p>As you scroll down</p>
  </div>
</StickyScroll>
```

### Advanced Usage:
```jsx
<StickyScroll className="hero-section">
  <div className="sticky-wrapper">
    <img src="hero-image.jpg" />
    <h1>Product Name</h1>
  </div>
</StickyScroll>
```

### Best For:
- Full-screen storytelling
- Product showcases
- Image galleries
- Video presentations

---

## 6️⃣ **Video Scroll Control** (Video Playback)

### What it does:
- Plays/controls video based on scroll position
- Creates scrubbing effect like Apple demos

### Component Location:
`src/components/VideoScroll.jsx`

### Basic Usage:
```jsx
import VideoScroll from '../components/VideoScroll'

<VideoScroll src="/product-demo.mp4" />
```

### Advanced Usage:
```jsx
<VideoScroll 
  src="https://example.com/video.mp4"
  className="demo-video"
/>
```

### How it works:
- Scroll down = Video plays forward
- Scroll up = Video plays backward
- Pause while scrolling = Pauses video
- Perfect scrubbing control

### Best For:
- Product demonstrations
- Feature showcases
- Tutorial videos
- Before/after transitions

---

## 🎯 Practical Examples

### Example 1: Hero Section with Parallax
```jsx
<section>
  <div style={{ height: '100vh' }}>
    <ParallaxImage 
      src="/hero.jpg" 
      offset={200}
    />
    <div style={{ position: 'absolute', color: 'white' }}>
      <TextReveal text="Welcome to Inkflow Creative" />
    </div>
  </div>
</section>
```

### Example 2: Feature Cards with Animations
```jsx
<section>
  <ScrollAnimator animation="fadeUp">
    <h2>Our Features</h2>
  </ScrollAnimator>
  
  {features.map((feature, i) => (
    <ScrollAnimator 
      key={i}
      animation="scale"
      delay={i * 0.1}
    >
      <Card>{feature}</Card>
    </ScrollAnimator>
  ))}
</section>
```

### Example 3: Sticky Product Showcase
```jsx
<StickyScroll>
  <div style={{ display: 'flex' }}>
    <VideoScroll src="/product-demo.mp4" />
    <ScrollAnimator animation="slideRight">
      <div className="product-info">
        <TextReveal text="Revolutionary Design" />
        <p>Features and benefits...</p>
      </div>
    </ScrollAnimator>
  </div>
</StickyScroll>
```

### Example 4: Combined Effects
```jsx
<section>
  <div className="container">
    <ScrollAnimator animation="fadeUp">
      <TextReveal text="Industry Leading Solutions" />
    </ScrollAnimator>
    
    <ParallaxImage 
      src="/facility.jpg"
      offset={150}
    />
    
    <ScrollAnimator animation="slideLeft" delay={0.2}>
      <p className="description">Full description here</p>
    </ScrollAnimator>
  </div>
</section>
```

---

## 🎨 CSS Customization

### Override Animation Duration:
```css
.text-reveal {
  animation-duration: 1.5s !important;
}
```

### Custom Colors:
```css
.parallax-image {
  filter: brightness(0.9) saturate(1.2);
}
```

### Add Shadow Effects:
```css
.parallax-container {
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3) !important;
}
```

---

## ⚙️ Performance Tips

1. **Limit animations**: Don't animate everything
2. **Use offsets wisely**: Larger offsets = more movement
3. **Stagger delays**: Prevents simultaneous animations
4. **Lazy load images**: Use `loading="lazy"` attribute
5. **Test on mobile**: Ensure smooth 60fps

---

## 🚀 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | ✅ 90+ |
| Firefox | ✅ 88+ |
| Safari | ✅ 14+ |
| Edge | ✅ 90+ |
| Mobile | ✅ All modern |

---

## 📱 Mobile Considerations

All components automatically:
- Scale animations for smaller screens
- Reduce parallax offset on mobile
- Respect reduced-motion preferences
- Maintain 60fps performance

---

## 🔧 Troubleshooting

### Lenis not working?
```bash
npm install @studio-freight/lenis
```

### Animations not triggering?
- Ensure components are in viewport
- Check browser console for errors
- Verify ScrollTrigger is initialized

### Performance issues?
- Reduce parallax offset
- Limit number of animated elements
- Check for transform bottlenecks

---

## 📚 Additional Resources

- GSAP Docs: https://gsap.com
- Lenis Docs: https://github.com/studio-freight/lenis
- ScrollTrigger Guide: https://gsap.com/docs/v3/Plugins/ScrollTrigger

---

## ✅ Checklist for Implementation

- [ ] Run `npm install @studio-freight/lenis`
- [ ] Components are created and ready to use
- [ ] CSS files are linked and loaded
- [ ] Home page imports are added
- [ ] Test scroll effects on different sections
- [ ] Customize timing and offsets as needed
- [ ] Test on mobile devices
- [ ] Check performance with DevTools

---

## 🎉 You're All Set!

You now have professional Apple-style scroll effects ready to use throughout your Inkflow website. Start using these components in your pages and enjoy premium animations!

Happy scrolling! ✨
