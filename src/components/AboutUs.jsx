import React from 'react'
import '../styles/AboutUs.css'
import TextType from './TextType'

export default function AboutUs() {
  const values = [
    {
      icon: '⚙️',
      title: 'Excellence in Execution',
      description: 'Precision engineering meets creative vision in every print we produce.'
    },
    {
      icon: '🤝',
      title: 'Client-Centric Approach',
      description: 'Your success is our success. We listen, collaborate, and deliver beyond expectations.'
    },
    {
      icon: '♻️',
      title: 'Sustainable Practices',
      description: 'Eco-conscious printing solutions that protect our planet without compromising quality.'
    },
    {
      icon: '⚡',
      title: 'Innovation & Speed',
      description: 'Cutting-edge technology with rapid turnaround—your deadlines are our priorities.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '2M+', label: 'Products Delivered' },
    { number: '15+', label: 'Years Experience' },
    { number: '99.8%', label: 'Quality Rate' }
  ]

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Inkflow Creative</h1>
          <div style={{ fontSize: '1.2rem', color: '#fff' }}>
            <TextType 
              text="Where precision printing meets creative excellence"
              typingSpeed={50}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-section about-intro">
        <div className="section-container">
          <div className="intro-layout">
            <div className="intro-text">
              <h2>
                <TextType 
                  text="Redefining Professional Printing"
                  typingSpeed={60}
                  pauseDuration={2000}
                  showCursor={false}
                />
              </h2>
              <p className="intro-lead">
                Since 2009, Inkflow Creative has been the trusted printing partner for businesses across India. We combine traditional craftsmanship with modern technology to deliver printing solutions that elevate brands and drive results.
              </p>
              <p>
                From queue management systems to premium marketing collaterals, our commitment to quality, reliability, and innovation has made us the go-to choice for corporates, retail chains, educational institutions, and growing businesses.
              </p>
            </div>
            <div className="intro-image">
              <div className="image-placeholder">
                <svg viewBox="0 0 400 300" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="20" y="20" width="360" height="260" rx="8" />
                  <circle cx="200" cy="100" r="30" fill="currentColor" opacity="0.1" />
                  <rect x="60" y="150" width="280" height="8" rx="4" fill="currentColor" opacity="0.1" />
                  <rect x="60" y="170" width="240" height="8" rx="4" fill="currentColor" opacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-section about-stats">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-section about-mission">
        <div className="section-container">
          <div className="mission-grid">
            <div className="mission-card">
              <h3>Our Mission</h3>
              <p>
                To empower businesses with exceptional printing solutions that combine quality, reliability, and innovation. We believe great printing is more than ink on paper—it's about translating your vision into tangible success.
              </p>
            </div>
            <div className="mission-card">
              <h3>Our Vision</h3>
              <p>
                To be India's most trusted and innovative printing partner, recognized for our unwavering commitment to excellence, sustainability, and customer success across every industry we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section about-values">
        <div className="section-container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-section about-why">
        <div className="section-container">
          <h2 className="section-title">Why Choose Inkflow Creative?</h2>
          <div className="why-content">
            <div className="why-item">
              <h3>Industry-Leading Technology</h3>
              <p>State-of-the-art printing equipment combined with expert craftsmanship ensures every project exceeds expectations.</p>
            </div>
            <div className="why-item">
              <h3>Custom Solutions</h3>
              <p>We understand that every business is unique. Our tailored approach ensures your printing solutions reflect your brand perfectly.</p>
            </div>
            <div className="why-item">
              <h3>Guaranteed Turnaround</h3>
              <p>Strict timeline commitments and rapid production mean your materials arrive when you need them, without compromise on quality.</p>
            </div>
            <div className="why-item">
              <h3>Complete Support</h3>
              <p>From concept to delivery, our dedicated team guides you through every step, offering design expertise and strategic insights.</p>
            </div>
            <div className="why-item">
              <h3>Competitive Pricing</h3>
              <p>Premium quality doesn't have to break the bank. We offer transparent pricing with flexible options for all business sizes.</p>
            </div>
            <div className="why-item">
              <h3>Proven Track Record</h3>
              <p>Trusted by industry leaders and backed by years of consistent delivery. Our clients are our best testimonials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-section about-cta">
        <div className="section-container">
          <div className="cta-content">
            <h2>Ready to Transform Your Printing?</h2>
            <p>Let's create something exceptional together. Our team is ready to discuss your printing needs.</p>
            <div className="cta-buttons">
              <button className="btn btn-primary">Get Your Quote Now</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
