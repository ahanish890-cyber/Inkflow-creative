import React from 'react'
import '../styles/AboutUs.css'
import TextType from './TextType'
import { 
  Zap, 
  Users, 
  Leaf, 
  Rocket, 
  Award, 
  Shield, 
  TrendingUp, 
  CheckCircle,
  Gauge,
  HeartHandshake,
  Lightbulb,
  Clock,
  Printer,
  Sparkles,
  Target,
  Building2,
  Send,
  Boxes
} from 'lucide-react'

export default function AboutUs() {
  const whatWeDo = [
    {
      icon: Printer,
      title: 'Digital Printing Excellence',
      description: 'High-speed, high-quality digital printing for on-demand marketing materials, personalized communications, and short-run jobs with exceptional color accuracy.'
    },
    {
      icon: Boxes,
      title: 'Packaging & Branding',
      description: 'Custom packaging solutions that elevate your brand. From concept to delivery, we create packaging that protects your product and captivates your customers.'
    },
    {
      icon: Building2,
      title: 'Queue Management Systems',
      description: 'Integrated queue management solutions for retail, healthcare, and service industries. Improve customer experience and operational efficiency.'
    },
    {
      icon: Send,
      title: 'Direct Mail Campaigns',
      description: 'Complete direct mail production and fulfillment. Personalized, trackable campaigns that drive real results and measurable ROI.'
    },
    {
      icon: Sparkles,
      title: 'Creative Design Services',
      description: 'In-house design team ready to bring your vision to life. From concept development to pre-press preparation, we handle the complete creative process.'
    },
    {
      icon: Target,
      title: 'Business Collaterals',
      description: 'Professional business cards, letterheads, envelopes, brochures, and promotional materials that represent your brand with impact.'
    }
  ]

  const whyInkflow = [
    {
      number: '15+',
      title: 'Years of Excellence',
      description: 'Since 2009, we\'ve been printing with passion and precision for thousands of satisfied clients across diverse industries.'
    },
    {
      number: '99.8%',
      title: 'Quality Guarantee',
      description: 'ISO 9001:2015 certified processes ensure consistent, superior quality on every project, every single time.'
    },
    {
      number: '24/7',
      title: 'Customer Support',
      description: 'Dedicated account managers and round-the-clock support ensure your concerns are addressed instantly.'
    },
    {
      number: '50M+',
      title: 'Annual Production',
      description: 'We print 50+ million products annually with consistent excellence. Scale with confidence.'
    }
  ]

  const values = [
    {
      icon: Gauge,
      title: 'Excellence in Execution',
      description: 'Precision engineering meets creative vision. We maintain 99.8% quality standards across all projects with rigorous quality control protocols.'
    },
    {
      icon: HeartHandshake,
      title: 'Client-Centric Partnership',
      description: 'Your success drives ours. Dedicated account managers, personalized solutions, and transparent communication at every stage.'
    },
    {
      icon: Leaf,
      title: 'Sustainable Excellence',
      description: 'Eco-conscious printing innovations using sustainable materials and processes. Environmental responsibility without quality compromise.'
    },
    {
      icon: Zap,
      title: 'Innovation & Velocity',
      description: 'Cutting-edge technology platform with AI-driven workflows. Rapid turnaround without sacrificing precision or quality.'
    }
  ]

  const whyChooseReasons = [
    {
      icon: Award,
      title: 'Industry-Leading Technology',
      description: 'State-of-the-art printing infrastructure with enterprise-grade quality assurance. ISO certified processes and continuous innovation.'
    },
    {
      icon: Lightbulb,
      title: 'Custom Enterprise Solutions',
      description: 'Scalable solutions for SMEs to Fortune 500 companies. API integrations, white-label options, and customizable workflows.'
    },
    {
      icon: Clock,
      title: 'Guaranteed SLA Delivery',
      description: 'Industry-leading turnaround times with 99.9% on-time delivery guarantee. Real-time tracking and proactive notifications.'
    },
    {
      icon: Shield,
      title: 'Complete Enterprise Support',
      description: 'Dedicated account teams, 24/7 support, and strategic consulting. From design to delivery, we handle the entire workflow.'
    },
    {
      icon: TrendingUp,
      title: 'Volume Discounts & Flexibility',
      description: 'Transparent pricing with tiered discounts. Flexible payment terms, bulk printing options, and recurring service packages.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Enterprise Track Record',
      description: 'Trusted by 500+ leading brands. Certified printing partner for retail, corporate, and institutional sectors.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Enterprise Clients', subLabel: 'Across India' },
    { number: '50M+', label: 'Products Delivered', subLabel: 'Annually' },
    { number: '15+', label: 'Years Excellence', subLabel: 'Industry Leadership' },
    { number: '99.8%', label: 'Quality Rate', subLabel: 'Certified' }
  ]

  const capabilities = [
    { 
      icon: Printer,
      label: 'Digital Printing', 
      value: '500+',
      description: 'High-speed color and monochrome printing with exceptional quality'
    },
    { 
      icon: Boxes,
      label: 'Offset Solutions', 
      value: '1000+',
      description: 'Large-scale offset printing for high-volume production runs'
    },
    { 
      icon: Sparkles,
      label: 'Packaging & Branding', 
      value: '250+',
      description: 'Custom packaging solutions that elevate your brand presence'
    },
    { 
      icon: Gauge,
      label: 'Queue Management Systems', 
      value: '100+',
      description: 'Integrated queue management solutions for retail and service sectors'
    }
  ]

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Inkflow Creative</h1>
          <div className="about-hero-subtitle">
            <TextType 
              text="Enterprise-Grade Printing Solutions for Modern Businesses"
              typingSpeed={50}
              pauseDuration={3000}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="about-section about-intro scroll-container">
        <div className="section-container">
          <div className="intro-layout">
            <div className="intro-text">
              <h2>
                <TextType 
                  text="Redefining Enterprise Printing"
                  typingSpeed={60}
                  pauseDuration={2000}
                  showCursor={false}
                />
              </h2>
              <p className="intro-lead">
                Since 2009, Inkflow Creative has been India's trusted printing partner for organizations demanding excellence. We deliver enterprise-grade solutions combining precision, reliability, and innovation.
              </p>
              <p>
                From queue management systems to premium marketing collaterals, mission-critical business documents to large-scale packaging solutions—we serve 500+ enterprise clients including retail chains, multinational corporations, educational institutions, and government agencies. Our ISO-certified processes and cutting-edge technology ensure consistent excellence at scale.
              </p>
              <div className="intro-highlights">
                <div className="highlight-item">
                  <Rocket size={20} />
                  <span>99.9% SLA Delivery</span>
                </div>
                <div className="highlight-item">
                  <Shield size={20} />
                  <span>ISO 9001:2015 Certified</span>
                </div>
                <div className="highlight-item">
                  <TrendingUp size={20} />
                  <span>Scalable Growth</span>
                </div>
              </div>
            </div>
            <div className="intro-image">
              <div className="image-placeholder">
                <svg viewBox="0 0 400 300" fill="none" stroke="currentColor" strokeWidth="1">
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#0071e3', stopOpacity: 0.1}} />
                      <stop offset="100%" style={{stopColor: '#0071e3', stopOpacity: 0.2}} />
                    </linearGradient>
                  </defs>
                  <rect x="20" y="20" width="360" height="260" rx="8" fill="url(#grad1)" stroke="#0071e3" strokeWidth="2"/>
                  <circle cx="200" cy="100" r="40" fill="none" stroke="#0071e3" strokeWidth="2" opacity="0.6" />
                  <rect x="60" y="150" width="280" height="12" rx="6" fill="#0071e3" opacity="0.1" />
                  <rect x="60" y="170" width="240" height="12" rx="6" fill="#0071e3" opacity="0.1" />
                  <rect x="60" y="190" width="260" height="12" rx="6" fill="#0071e3" opacity="0.1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-section about-stats">
        <div className="section-container">
          <h3 className="stats-subtitle">By The Numbers</h3>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-sublabel">{stat.subLabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Inkflow Section */}
      <section className="about-section about-what-is">
        <div className="section-container">
          <div className="what-is-layout">
            <div className="what-is-content">
              <h2 className="section-title">What is Inkflow Creative?</h2>
              <p className="what-is-lead">
                Inkflow Creative is India's premier printing partner for businesses that demand excellence. We're not just a print shop—we're your strategic printing partner, innovation hub, and quality guardian all rolled into one.
              </p>
              <div className="what-is-features">
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <div className="feature-text">
                    <h4>Complete Printing Solutions</h4>
                    <p>From concept to execution, we handle every aspect of your printing needs with expertise and precision.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <div className="feature-text">
                    <h4>Trusted by 500+ Brands</h4>
                    <p>Corporate giants, retail chains, startups, and government agencies rely on us for mission-critical printing.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <div className="feature-text">
                    <h4>Cutting-Edge Technology</h4>
                    <p>Latest printing equipment combined with AI-driven workflows for superior quality and faster turnaround.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <div className="feature-text">
                    <h4>Certified Excellence</h4>
                    <p>ISO 9001:2015 certified with 99.8% quality guarantee and 99.9% on-time delivery rate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="about-section about-what-we-do scroll-container">
        <div className="section-container">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle-text">Comprehensive printing solutions tailored to your business needs</p>
          <div className="what-we-do-grid">
            {whatWeDo.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div key={index} className="service-card">
                  <div className="service-icon">
                    <IconComponent size={36} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <a href="#" className="service-link">Learn More →</a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Inkflow Section */}
      <section className="about-section about-why-inkflow scroll-container">
        <div className="section-container">
          <h2 className="section-title">Why Inkflow Creative?</h2>
          <p className="section-subtitle-text">The numbers tell our story of excellence and trust</p>
          <div className="why-inkflow-grid">
            {whyInkflow.map((reason, index) => (
              <div key={index} className="why-inkflow-card">
                <div className="why-number">{reason.number}</div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="about-section about-mission scroll-container">
        <div className="section-container">
          <div className="mission-grid">
            <div className="mission-card mission-card-primary">
              <Rocket className="mission-icon" size={40} />
              <h3>Our Mission</h3>
              <p>
                To empower organizations with enterprise-grade printing solutions that drive measurable business impact. We're committed to delivering exceptional quality, reliability, and innovation—transforming complex printing challenges into competitive advantages.
              </p>
            </div>
            <div className="mission-card mission-card-secondary">
              <Lightbulb className="mission-icon" size={40} />
              <h3>Our Vision</h3>
              <p>
                To be India's most trusted and innovative printing technology partner, recognized for operational excellence, sustainability leadership, and transformative solutions that scale businesses from startups to enterprises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section about-values scroll-container">
        <div className="section-container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div key={index} className="value-card">
                  <div className="value-icon-wrapper">
                    <IconComponent className="value-icon" size={32} />
                  </div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-section about-why">
        <div className="section-container">
          <h2 className="section-title">Why Choose Inkflow Creative?</h2>
          <div className="why-content">
            {whyChooseReasons.map((reason, index) => {
              const IconComponent = reason.icon
              return (
                <div key={index} className="why-item">
                  <div className="why-icon-wrapper">
                    <IconComponent className="why-icon" size={28} />
                  </div>
                  <h3>{reason.title}</h3>
                  <p>{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="about-section about-capabilities scroll-container">
        <div className="section-container">
          <h2 className="section-title">Our Capabilities</h2>
          <p className="section-subtitle-text">Comprehensive solutions across all printing domains with proven expertise</p>
          <div className="capabilities-grid">
            {capabilities.map((cap, index) => {
              const IconComponent = cap.icon
              return (
                <div key={index} className="capability-card">
                  <div className="capability-icon">
                    <IconComponent size={40} />
                  </div>
                  <div className="capability-header">
                    <h4>{cap.label}</h4>
                    <span className="capability-badge">{cap.value}</span>
                  </div>
                  <p className="capability-description">{cap.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
    </div>
  )
}
