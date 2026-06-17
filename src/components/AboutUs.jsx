import React, { useState, useEffect } from 'react'
import { Zap, Zap as Lightning, Star, CheckCircle2 } from 'lucide-react'
import CoreValues from './CoreValues'
import Capabilities from './Capabilities'
import '../styles/AboutUs.css'

const premiumFeatures = [
  {
    icon: <CheckCircle2 size={20} />,
    title: "Industrial-Grade Printing Technology",
    description: "Advanced machinery ensuring unmatched precision"
  },
  {
    icon: <Lightning size={20} />,
    title: "High-Speed Production",
    description: "Optimized workflows for rapid delivery"
  },
  {
    icon: <Star size={20} />,
    title: "Premium Quality Standards",
    description: "Every product passes strict quality inspection"
  }
]

export default function AboutUs() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('.premium-about-section')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      const section = document.querySelector('.premium-about-section')
      if (!section) return

      const rect = section.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Calculate parallax offset - very subtle
      const offsetX = (x - rect.width / 2) * 0.01
      const offsetY = (y - rect.height / 2) * 0.01

      setMousePosition({ x: offsetX, y: offsetY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="about-us-page">
      {/* Premium About Section */}
      <section className={`premium-about-section ${isVisible ? 'visible' : ''}`}>
        {/* Background Watermark Layer */}
        <div 
          className="watermark-bg"
          style={{
            transform: `translateY(-50%) translateX(${mousePosition.x * 8}px) translateY(${mousePosition.y * 4}px)`
          }}
        >
          <img 
            src="/inkflow-logo-hero.jpeg" 
            alt="Brand Watermark"
            className="watermark-image"
          />
        </div>

        {/* Watermark Overlay */}
        <div className="watermark-overlay"></div>

        <div className="premium-about-container">
          {/* Left Side - Logo */}
          <div className="about-logo-side">
            <div className={`about-logo-wrapper ${isVisible ? 'fade-in-left' : ''}`}>
              <img 
                src="/inkflow-logo-hero.jpeg" 
                alt="Inkflow Creative" 
                className="about-logo-image"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="about-divider"></div>

          {/* Right Side - Content */}
          <div className="about-content-side">
            {/* Label */}
            <div className={`about-label-premium ${isVisible ? 'fade-in-right' : ''}`}>
              <span className="label-line"></span>
              <span className="label-text">ABOUT US</span>
            </div>

            {/* Main Heading */}
            <h2 className={`about-heading-premium ${isVisible ? 'fade-in-right' : ''}`}>
              Inkflow<span className="heading-gold"> Creative</span>
            </h2>

            {/* Description Paragraphs */}
            <div className={`about-description ${isVisible ? 'fade-in-right' : ''}`}>
              <p>Powered by state-of-the-art industrial printers and automated production lines, our facility delivers exceptional clarity, color accuracy, and consistency at scale.</p>
              
              <p>From high-volume commercial jobs to specialized custom prints, our technology-driven workflow ensures faster turnaround times, superior material quality, and flawless finishing.</p>
            </div>

            {/* Premium Feature List */}
            <div className={`about-features-list ${isVisible ? 'features-visible' : ''}`}>
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="feature-row" style={{ animationDelay: `${index * 0.12}s` }}>
                  <div className="feature-icon-wrapper">
                    {feature.icon}
                  </div>
                  <div className="feature-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  
    </div>
  )
}
