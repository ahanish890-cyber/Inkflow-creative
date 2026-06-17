import React, { useState } from 'react'
import '../styles/ContactUs.css'
import { Phone, Mail, MapPin, Clock, CheckCircle, Users, Zap, Award, ArrowRight, MessageSquare, Calendar } from 'lucide-react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    budget: '',
    timeline: '',
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
      serviceType: '',
      budget: '',
      timeline: '',
      message: ''
    })
    setTimeout(() => setSubmitStatus(null), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 (555) 123-4567',
      link: 'tel:+915551234567',
      subtitle: 'Mon-Fri, 9 AM - 6 PM IST'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'hello@inkflowcreative.com',
      link: 'mailto:hello@inkflowcreative.com',
      subtitle: 'Response within 24 hours'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Creative Lane',
      link: '#',
      subtitle: 'Design City, India 560001'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9 AM - 6 PM',
      link: '#',
      subtitle: 'Sat - Sun: Closed'
    }
  ]

  const serviceTypes = [
    'Digital Printing',
    'Offset Solutions',
    'Packaging & Branding',
    'Queue Management Systems',
    'Direct Mail',
    'Design Services',
    'Other'
  ]

  const budgetRanges = [
    '₹10,000 - ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹5,00,000',
    '₹5,00,000 - ₹10,00,000',
    '₹10,00,000+'
  ]

  const timelineOptions = [
    'ASAP (1-2 weeks)',
    'Short Term (2-4 weeks)',
    'Medium Term (1-3 months)',
    'Long Term (3+ months)'
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Guaranteed Quality',
      description: 'ISO 9001:2015 certified with 99.8% quality assurance on every project'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Express delivery available with 24-48 hour rush service options'
    },
    {
      icon: Award,
      title: 'Expert Team',
      description: 'Dedicated specialists with 15+ years of printing industry experience'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: '24/7 customer support and dedicated account management for all clients'
    }
  ]

  const faqItems = [
    {
      question: 'What information do you need for a quote?',
      answer: 'We need print specifications (size, quantity, materials), final artwork or design requirements, preferred finishes, and your project timeline to provide an accurate quote.'
    },
    {
      question: 'Do you offer custom design services?',
      answer: 'Yes! Our in-house design team can assist with concept development, revisions, and production-ready file preparation for your printing projects.'
    },
    {
      question: 'What file formats do you accept?',
      answer: 'We accept PDF, AI, PSD, EPS, and high-resolution JPEG files. CMYK color mode is recommended for optimal print quality.'
    },
    {
      question: 'What are your business hours?',
      answer: 'Monday to Friday, 9:00 AM - 6:00 PM IST. We\'re closed on weekends and national holidays but offer 24/7 email support.'
    },
    {
      question: 'Do you offer bulk or corporate printing?',
      answer: 'Absolutely! We specialize in high-volume corporate printing with volume-based discounts and dedicated account management.'
    },
    {
      question: 'What are typical project timelines?',
      answer: 'Standard turnaround is 5-7 business days. Rush services with 24-48 hour delivery are available. Custom projects timelines vary.'
    },
    {
      question: 'Can you handle urgent projects?',
      answer: 'Yes! We offer express turnaround for urgent projects. Contact us for rush service rates and availability.'
    },
    {
      question: 'Do you provide samples?',
      answer: 'We can provide samples of previous work and material samples. Contact our team to request specific samples for your project.'
    }
  ]

  return (
    <div className="contact-us-page">

      {/* Main Contact Form Section */}
      <section className="contact-section contact-form-section">
        <div className="section-container">
          <div className="form-wrapper">
            <div className="form-header">
              <h2>Get in <span className="contact-heading-gold">Touch</span></h2>
              <p>Fill out the form below with your details and requirements. Our team will review your inquiry and respond within 24 business hours with a customized proposal.</p>
            </div>

            <div className="form-content">
              <form onSubmit={handleSubmit} className="contact-form">
                {/* Name and Email Row */}
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
                      placeholder="Your full name"
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
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone and Company Row */}
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
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                {/* Service Type Selection */}
                <div className="form-group">
                  <label htmlFor="serviceType">Primary Service Needed *</label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Budget and Timeline Row */}
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="budget">Estimated Budget *</label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="timeline">Project Timeline *</label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="form-group">
                  <label htmlFor="message">Project Details & Requirements *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project. Include specifications, quantities, materials, design notes, and any specific requirements..."
                    rows="6"
                  />
                </div>

                {/* Form Footer */}
                <div className="form-footer">
                  {submitStatus === 'success' && (
                    <div className="success-message">
                      <CheckCircle size={20} />
                      <span>Thank you! We've received your inquiry and will respond within 24 business hours.</span>
                    </div>
                  )}
                  <button type="submit" className="btn btn-primary">
                    <span>Submit Inquiry</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </form>

              {/* Contact Info Sidebar */}
              <div className="form-benefits contact-info-sidebar">
                <div className="sidebar-logo">
                  <img src="/inkflow-logo.jpeg" alt="Inkflow Creative" className="sidebar-logo-img" />
                </div>

                <div className="sidebar-contact-info">
                  <div className="contact-block">
                    <h4 className="contact-label">Phone</h4>
                    <p className="contact-value">+91 (555) 123-4567</p>
                    <p className="contact-note">Mon-Fri, 9 AM - 6 PM IST</p>
                  </div>

                  <div className="contact-block">
                    <h4 className="contact-label">Email</h4>
                    <p className="contact-value">hello@inkflowcreative.com</p>
                    <p className="contact-note">Response within 24 hours</p>
                  </div>

                  <div className="contact-block">
                    <h4 className="contact-label">Address</h4>
                    <p className="contact-value">123 Creative Lane</p>
                    <p className="contact-note">Design City, India 560001</p>
                  </div>

                  <div className="contact-block">
                    <h4 className="contact-label">Business Hours</h4>
                    <p className="contact-value">Mon - Fri: 9 AM - 6 PM</p>
                    <p className="contact-note">Sat - Sun: Closed</p>
                  </div>
                </div>

                <div className="sidebar-map">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6718267717255!2d77.60451!3d12.972701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1681c1111111%3A0x1111111111111111!2s123%20Creative%20Lane%2C%20Design%20City!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%" 
                    height="280" 
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Inkflow Creative Location"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* REMOVED - Stats section moved to home page only */}
    </div>
  )
}
