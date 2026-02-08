import React from 'react'
import '../styles/WhyChooseInkflow.css'

export default function WhyChooseInkflow() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M32 8V4M32 60v-4M56 32h4M4 32h4" strokeLinecap="round" />
          <circle cx="32" cy="32" r="20" strokeLinecap="round" />
          <path d="M32 32V18M32 32L42 42" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Fast Turnaround',
      description: 'High-speed production ensures your materials are delivered exactly when you need them.'
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="10" y="14" width="44" height="36" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 22H46M18 30H46M18 38H46" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 48L28 54L40 42" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Premium Print Quality',
      description: 'Industry-grade printers producing sharp, vibrant, and durable results.'
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="32" cy="28" r="12" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18 46C18 38.27 24.37 32 32 32C39.63 32 46 38.27 46 46" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="52" cy="52" r="8" fill="currentColor" opacity="0.2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="52" cy="52" r="2" fill="currentColor" />
        </svg>
      ),
      title: 'Custom Branding Solutions',
      description: 'Tailor-made printing designed to elevate your brand presence.'
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 32V18C18 14.69 20.69 12 24 12H40C43.31 12 46 14.69 46 18V46C46 49.31 43.31 52 40 52H24C20.69 52 18 49.31 18 46" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 32L36 40L50 20" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Trusted by Businesses',
      description: 'Reliable printing partner for corporates, retail chains, and institutions.'
    }
  ]

  return (
    <section className="why-choose-inkflow scroll-container">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-headline">Why Businesses<br />Choose Inkflow Creative.</h2>
          <a href="#" className="section-cta">View Products <span>→</span></a>
        </div>

        <div className="cards-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="card-icon">{feature.icon}</div>
              <h3 className="card-title">{feature.title}</h3>
              <p className="card-description">{feature.description}</p>
              <button className="card-plus" aria-label="More info">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" strokeLinecap="round" />
                  <line x1="5" y1="12" x2="19" y2="12" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
