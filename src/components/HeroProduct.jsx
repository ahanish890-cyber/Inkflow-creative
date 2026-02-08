import React from 'react'
import '../styles/HeroProduct.css'
import { CheckCircle, Zap, Star } from 'lucide-react'
import TextType from './TextType'

export default function HeroProduct() {
  return (
    <section className="hero-product">
      <div className="hero-product-container">
        {/* Left Side - Product Image with Heading */}
        <div className="hero-product-left">
          <div className="hero-product-left-heading">
            <TextType
              text={['Premium Printing Quality', 'Advanced Manufacturing Solutions', 'Enterprise-Grade Products']}
              typingSpeed={35}
              pauseDuration={2500}
              deletingSpeed={20}
              showCursor={true}
              cursorCharacter="|"
              cursorBlinkDuration={0.7}
            />
          </div>
          <div className="product-image-wrapper">
            <img src="/Hero-main.png" alt="Advanced Printing Technology" className="product-image" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="hero-product-right">
          <div className="hero-product-content">
            <p className="hero-product-label">Focus on</p>
            
            <h2 className="hero-product-heading">
              Core Design & Components
            </h2>
            
            <p className="hero-product-intro">
              Gain comprehensive knowledge of advanced robotic system architecture, along with a thorough understanding of the individual components that make up a quadruped robot
            </p>

            <p className="hero-product-description">
              Dive deep into the engineering behind autonomous systems exploring the intricate hardware, advanced AI, and integrated sensors that power our quadruped robots.
            </p>

            <div className="hero-product-features">
              <div className="feature-item">
                <CheckCircle size={20} strokeWidth={2} />
                <span>Enterprise-Grade Quality</span>
              </div>

              <div className="feature-item">
                <Zap size={20} strokeWidth={2} />
                <span>Lightning-Fast Production</span>
              </div>

              <div className="feature-item">
                <Star size={20} strokeWidth={2} />
                <span>Sustainable Solutions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
