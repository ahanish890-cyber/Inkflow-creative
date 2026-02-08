import React from 'react'
import { Zap, Shield, Award, History, ArrowUpRight } from 'lucide-react'
import CoreValues from './CoreValues'
import '../styles/AboutUs.css'

const legacyStats = [
  { label: 'Founded', value: '2009' },
  { label: 'Enterprise Clients', value: '500+' },
  { label: 'Annual Throughput', value: '50M+' },
  { label: 'SLA Quality', value: '99.9%' }
]

const valuesMatrix = [
  {
    icon: <Zap size={20} />,
    title: "In-House Velocity",
    desc: "From concept to pan-India deployment in under 72 hours. Our vertically integrated chain removes the bottleneck of third-party vendors."
  },
  {
    icon: <Shield size={20} />,
    title: "Absolute Precision",
    desc: "Every component is calibrated to a 0.01mm tolerance. We don't just assemble; we engineer physical experiences."
  },
  {
    icon: <Award size={20} />,
    title: "Sustainability Leader",
    desc: "First in India to implement a circular lifecycle for queue barriers, using 100% recyclable 304 Stainless Steel."
  }
]

export default function AboutUs() {
  return (
    <div className="about-us-page">
      {/* Main Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          {/* Left Content */}
          <div className="about-hero-content">
            <div className="about-label">
              <History size={16} />
              <span>Company Heritage</span>
            </div>
            
            <h2 className="about-hero-title">
              Redefining <br />
              <span className="about-highlight">Enterprise</span> <br />
              Presence.
            </h2>

            <div className="about-hero-text">
              <p>Since 2009, Inkflow Creative has been India's trusted partner for organizations demanding absolute excellence. We serve 500+ enterprise clients including retail chains, multinational corporations, and government agencies.</p>
              
              <p>Our ISO-certified processes and cutting-edge technology ensure consistent excellence at scale. From the first spark in our Bengaluru facility to final deployment at IGI Airport, our legacy is built on the pursuit of 100% reliability.</p>

              <div className="about-stats-grid">
                {legacyStats.map((stat, i) => (
                  <div key={i} className="about-stat-item">
                    <span className="about-stat-label">{stat.label}</span>
                    <span className="about-stat-value">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="about-hero-image">
            <img 
              src="https://images.unsplash.com/photo-1565034946487-077786996e27?auto=format&fit=crop&q=90&w=1200" 
              alt="Precision Industrial Detail"
              className="about-image"
            />
            <div className="about-image-overlay"></div>
            
            {/* Blueprint Lines */}
            <div className="blueprint-overlay">
              <div className="blueprint-line horizontal"></div>
              <div className="blueprint-line vertical"></div>
              <div className="blueprint-circle large"></div>
              <div className="blueprint-circle small"></div>
            </div>

            {/* Callout Labels */}
            <div className="callout top-right">
              <div className="callout-dot"></div>
              <span className="callout-label">Cap_Tolerance</span>
              <span className="callout-value">± 0.012 MICRON</span>
            </div>

            <div className="callout bottom-left">
              <div className="callout-dot"></div>
              <span className="callout-label">Structure_Integrity</span>
              <span className="callout-value">SS-304 / AIRCRAFT GRADE</span>
            </div>

            <div className="doc-id">DOC_ID: INK_2009_VISUAL</div>
          </div>
        </div>
      </section>

      {/* Values Matrix */}
      <section className="about-values-section">
        <div className="about-values-container">
          {valuesMatrix.map((item, i) => (
            <div key={i} className="about-value-card">
              <div className="about-value-icon">
                {item.icon}
              </div>
              <h3 className="about-value-title">{item.title}</h3>
              <p className="about-value-desc">{item.desc}</p>
              <div className="about-value-link">
                <span>View Documentation</span>
                <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Component */}
      <CoreValues />

      {/* Closing Statement */}
      <section className="about-closing-section">
        <div className="about-closing-content">
          <h3>Built for <br /><span>Permanent Performance.</span></h3>
          <p>99.8% customer retention since 2012. We build relationships as durable as our hardware.</p>
        </div>
      </section>
    </div>
  )
}
