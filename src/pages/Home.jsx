import { useState, useEffect } from 'react'
import { CheckCircle, Zap, Star, Plane, Building2, Hospital, ShoppingBag, Music, Shield } from 'lucide-react'
import WhyChooseInkflow from '../components/WhyChooseInkflow'
import { ContainerScrollAnimation } from '../components/ContainerScrollAnimation'
import AboutUs from '../components/AboutUs'
import TestimonialSection from '../components/TestimonialSection'
import ManufacturingCapabilities from '../components/ManufacturingCapabilities'
import ContactUs from '../components/ContactUs'
import FAQSection from '../components/FAQSection'
import ServicesShowcase from '../components/ServicesShowcase'
import TextType from '../components/TextType'

const HERO_IMAGES = [
  {
    url: "/PP-110.jpg",
    title: "Precision Manufacturing Lines"
  },
  {
    url: "/PP-103.jpg",
    title: "Premium Terminal Layouts"
  },
  {
    url: "/PP-110.jpg",
    title: "Robust Quality Standards"
  },
  {
    url: "/PP-111.jpg",
    title: "Vivid Graphics Technology"
  }
]

export default function Home() {
  const [currentBg, setCurrentBg] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % HERO_IMAGES.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <main>
      <section className="hero">
        {/* Background Image Slider Container */}
        <div className="hero-background-wrapper">
          {/* Crossfading background images */}
          {HERO_IMAGES.map((image, index) => (
            <div
              key={index}
              className="hero-bg-slide"
              style={{
                backgroundImage: `url('${image.url}')`,
                opacity: index === currentBg ? 1 : 0,
                transition: 'opacity 1500ms ease-in-out'
              }}
            />
          ))}

          {/* Dark overlay */}
          <div className="hero-overlay"></div>

          {/* Slide Indicators */}
          <div className="hero-slide-indicators">
            {HERO_IMAGES.map((image, index) => (
              <button
                key={index}
                className={`slide-dot ${index === currentBg ? 'active' : ''}`}
                onClick={() => setCurrentBg(index)}
                title={image.title}
              />
            ))}
            <span className="slide-title">{HERO_IMAGES[currentBg].title}</span>
          </div>
        </div>

        <div className="hero-content">
          <h1>Professional <span className="highlight">Queue Management</span> Solutions</h1>
          <div className="hero-subtitle">
            <TextType
              text={['Premium printing belts for queue management systems', 'High-quality marketing collaterals that streamline operations']}
              typingSpeed={40}
              pauseDuration={2500}
              deletingSpeed={25}
              showCursor={true}
              cursorCharacter="|"
              cursorBlinkDuration={0.7}
            />
          </div>

          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">
                <CheckCircle size={20} strokeWidth={2} />
              </span>
              <span>Durable Materials</span>
            </div>
            <div className="feature">
              <span className="feature-icon">
                <Zap size={20} strokeWidth={2} />
              </span>
              <span>Fast Turnaround</span>
            </div>
            <div className="feature">
              <span className="feature-icon">
                <Star size={20} strokeWidth={2} />
              </span>
              <span>Premium Quality</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">Get Your Quote Now <span>→</span></button>
            <button className="btn btn-secondary">Explore Products <span>👁</span></button>
          </div>
        </div>


      </section>

      <AboutUs />

      <ServicesShowcase />
      <ContactUs />

      <FAQSection />
    </main>
  )
}
