import React, { useState } from 'react'
import '../styles/ContactUs.css'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const [submitStatus, setSubmitStatus] = useState(null)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitStatus('success')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: ''
    })
    setTimeout(() => setSubmitStatus(null), 3000)
  }

  const contactInfo = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Phone',
      content: '+91 (555) 123-4567',
      link: 'tel:+915551234567'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 4L12 13 2 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Email',
      content: 'hello@inkflowcreative.com',
      link: 'mailto:hello@inkflowcreative.com'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: 'Address',
      content: '123 Creative Lane, Design City, India',
      link: '#'
    }
  ]

  return (
    <div className="contact-us-page">
      {/* Hero Section */}
      <section className="contact-hero" data-snap>
        <div className="contact-hero-content">
          <h1>Get in Touch</h1>
          <p>We're here to partner with you on your printing needs. Reach out with any questions or project requirements.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-section contact-info scroll-container" data-snap>
        <div className="section-container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.link} className="contact-info-card" data-card-hover>
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section contact-form-section scroll-container" data-snap>
        <div className="section-container">
          <div className="contact-form-wrapper">
            <div className="form-header">
              <h2>Send us Your Inquiry</h2>
              <p>Fill out the form below and our team will respond within 24 business hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 555-1234567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Organization"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Inquiry Type *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="E.g., Custom Printing Quote, Partnership Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please provide details about your project, requirements, and timeline."
                  rows="6"
                />
              </div>

              <div className="form-footer">
                {submitStatus === 'success' && (
                  <div className="success-message">Message sent successfully. We'll be in touch shortly.</div>
                )}
                <button type="submit" className="btn btn-primary">Send Inquiry</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Response Time Section */}
      <section className="contact-section response-time scroll-container" data-snap>
        <div className="section-container">
          <div className="response-grid">
            <div className="response-card" data-card-hover>
              <div className="response-number">24hrs</div>
              <h3>Average Response Time</h3>
              <p>Business days</p>
            </div>
            <div className="response-card" data-card-hover>
              <div className="response-number">99.8%</div>
              <h3>Project On-Time Delivery</h3>
              <p>Consistently</p>
            </div>
            <div className="response-card" data-card-hover>
              <div className="response-number">500+</div>
              <h3>Satisfied Clients</h3>
              <p>Partnerships</p>
            </div>
            <div className="response-card" data-card-hover>
              <div className="response-number">15+</div>
              <h3>Years of Experience</h3>
              <p>Industry</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-section contact-faq scroll-container" data-snap>
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item" data-card-hover>
              <h3>What information do you need for a quote?</h3>
              <p>We typically need print specifications, quantity, materials, finish options, and your timeline to provide an accurate quote.</p>
            </div>
            <div className="faq-item" data-card-hover>
              <h3>Do you offer custom design services?</h3>
              <p>Yes. Our design team can assist with design concepts, revisions, and production-ready file preparation for your projects.</p>
            </div>
            <div className="faq-item" data-card-hover>
              <h3>What are your business hours?</h3>
              <p>Monday to Friday, 9:00 AM - 6:00 PM IST. We're closed on weekends and national holidays.</p>
            </div>
            <div className="faq-item" data-card-hover>
              <h3>What file formats do you accept?</h3>
              <p>We accept PDF, AI, PSD, EPS, and high-resolution JPEG files. CMYK color mode is recommended for print projects.</p>
            </div>
            <div className="faq-item" data-card-hover>
              <h3>Do you offer bulk corporate printing?</h3>
              <p>Absolutely. We specialize in high-volume corporate printing with volume-based pricing and dedicated account management.</p>
            </div>
            <div className="faq-item" data-card-hover>
              <h3>How long are typical project timelines?</h3>
              <p>Standard turnaround is 5-7 business days. Rush services are available with expedited rates. Custom projects vary.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-section contact-cta scroll-container" data-snap>
        <div className="section-container">
          <div className="cta-content">
            <h2>Ready to Start Your Project?</h2>
            <p>Get a detailed quote and let's bring your vision to life with premium printing solutions.</p>
            <button className="btn btn-primary">Request a Quote</button>
          </div>
        </div>
      </section>
    </div>
  )
}
