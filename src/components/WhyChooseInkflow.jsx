import React, { useState } from 'react'
import '../styles/WhyChooseInkflow.css'

export default function WhyChooseInkflow() {
  const [expandedId, setExpandedId] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  const features = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8V4M32 60v-4M56 32h4M4 32h4" strokeLinecap="round" />
          <circle cx="32" cy="32" r="20" strokeLinecap="round" />
          <path d="M32 32V18M32 32L42 42" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Fast Turnaround',
      summary: 'High-speed production ensures your materials are delivered exactly when you need them.',
      details: 'We guarantee rapid turnaround times without compromising on quality.'
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="10" y="14" width="44" height="36" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 22H46M18 30H46M18 38H46" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 48L28 54L40 42" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Premium Print Quality',
      summary: 'Industry-grade printers producing sharp, vibrant, and durable results.',
      details: 'Our state-of-the-art printing technology ensures exceptional quality on every project.'
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="32" cy="28" r="12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 46C18 38.27 24.37 32 32 32C39.63 32 46 38.27 46 46" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="52" cy="52" r="8" fill="currentColor" opacity="0.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="52" cy="52" r="2" fill="currentColor" />
        </svg>
      ),
      title: 'Custom Branding Solutions',
      summary: 'Tailor-made printing designed to elevate your brand presence.',
      details: 'We work with your brand identity to create customized printing solutions.'
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 32V18C18 14.69 20.69 12 24 12H40C43.31 12 46 14.69 46 18V46C46 49.31 43.31 52 40 52H24C20.69 52 18 49.31 18 46" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 32L36 40L50 20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Trusted by Businesses',
      summary: 'Reliable printing partner for corporates, retail chains, and institutions.',
      details: 'Over 500+ satisfied clients trust us with their printing needs.'
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 24L28 32L44 16M32 8C19.85 8 10 17.85 10 30V50C10 54.41 13.59 58 18 58H46C50.41 58 54 54.41 54 50V30C54 17.85 44.15 8 32 8Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Secure & Compliant',
      summary: 'Your data and projects are handled with complete confidentiality and security.',
      details: 'We maintain the highest standards of data protection and compliance.'
    },
    {
      id: 6,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 12C22.06 12 14 20.06 14 30C14 45 32 58 32 58S50 45 50 30C50 20.06 41.94 12 32 12Z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="30" r="4" fill="currentColor" />
        </svg>
      ),
      title: 'Expert Local Team',
      summary: 'Dedicated team providing personalized support and local expertise.',
      details: 'Our skilled professionals are ready to help with your printing projects.'
    }
  ]

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  const handlePrev = () => {
    const container = document.querySelector('.cards-carousel')
    if (container) {
      container.scrollBy({ left: -360, behavior: 'smooth' })
    }
  }

  const handleNext = () => {
    const container = document.querySelector('.cards-carousel')
    if (container) {
      container.scrollBy({ left: 360, behavior: 'smooth' })
    }
  }

  return (
    <section className="why-choose-inkflow scroll-container">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-headline">Why Businesses<br />Choose Inkflow<br />Creative.</h2>
          <a href="#" className="section-cta">View Products <span>→</span></a>
        </div>

        <div className="carousel-wrapper">
          <div className="cards-carousel">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className={`feature-card ${expandedId === feature.id ? 'expanded' : ''}`}
              >
                <div className="card-header">
                  <div className="card-icon">{feature.icon}</div>
                  <button 
                    className="card-button"
                    onClick={() => toggleExpand(feature.id)}
                    aria-label="More info"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" />
                      <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{feature.title}</h3>
                  <p className="card-summary">{feature.summary}</p>
                  {expandedId === feature.id && (
                    <p className="card-details">{feature.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-button prev" onClick={handlePrev} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="carousel-button next" onClick={handleNext} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
