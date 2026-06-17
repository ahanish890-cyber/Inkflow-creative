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
           
          </div>
          <div className="product-image-wrapper">
            <img src="/IFC.png" alt="Advanced Printing Technology" className="product-image" />
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="hero-product-right">
          <div className="hero-product-content">
            <p className="hero-product-label">Built for Precision</p>
            
            <h3 className="hero-product-heading">
            Inkflow Creative
            </h3>
            
            <p className="hero-product-intro">
              Powered by state-of-the-art industrial printers and automated production lines, our facility delivers exceptional clarity, color accuracy, and consistency at scale.
            </p>

            <p className="hero-product-description">
              From high-volume commercial jobs to specialized custom prints, our technology-driven workflow ensures faster turnaround times, superior material quality, and flawless finishing — helping brands make a lasting impression.
            </p>

            <div className="hero-product-features">
              <div className="feature-item">
                <CheckCircle size={20} strokeWidth={2} />
                <span>Industrial-Grade Printing Technology</span>
              </div>

              <div className="feature-item">
                <Zap size={20} strokeWidth={2} />
                <span>High-Speed, Scalable Production</span>
              </div>

              <div className="feature-item">
                <Star size={20} strokeWidth={2} />
                <span>Precision Color & Premium Finishes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
