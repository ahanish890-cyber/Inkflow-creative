import { useState } from 'react'
import '../styles/PremiumContactForm.css'

const TRUST_METRICS = [
  { number: '500+', label: 'Projects Delivered' },
  { number: '98%', label: 'Client Retention' },
  { number: '24/7', label: 'Support' },
  { number: '15+', label: 'Years Experience' }
]

export default function PremiumContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState(null)
  const [formHovered, setFormHovered] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      })
      
      setTimeout(() => setSubmitted(false), 5000)
    }, 1000)
  }

  return (
    <section className="enterprise-contact-experience">
      <div className="contact-experience-container">
        {/* Background Elements */}
        <div className="contact-bg-element contact-bg-1"></div>
        <div className="contact-bg-element contact-bg-2"></div>

        {/* Hero Statement */}
        <div className="contact-hero-statement">
          <div className="statement-divider"></div>
          <h2 className="editorial-heading">Let's Build Exceptional Customer Experiences</h2>
          <p className="editorial-description">
            Partner with us to transform customer flow management into a luxury brand experience. We design premium queue management solutions for enterprises that demand excellence.
          </p>
          <p className="enterprise-trust-line">
            Trusted by airports, retail brands, luxury hotels, exhibition venues and corporate headquarters across India.
          </p>
          <div className="statement-divider"></div>
        </div>

        {/* Main Content Grid */}
        <div className="contact-experience-grid">
          {/* Left: Brand Metrics Panel */}
          <div className="brand-metrics-column">
            <div className="metrics-grid">
              {TRUST_METRICS.map((metric, idx) => (
                <div key={idx} className="metric-card">
                  <div className="metric-value">{metric.number}</div>
                  <div className="metric-caption">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="brand-narrative">
              <h3>Why Partner With Us</h3>
              <p>We bring decades of enterprise experience to every project. Our solutions are engineered for scale, designed for luxury, and built to elevate your brand presence.</p>
            </div>
          </div>

          {/* Right: Floating Glass Inquiry Panel */}
          <div 
            className={`floating-glass-panel ${formHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setFormHovered(true)}
            onMouseLeave={() => setFormHovered(false)}
          >
            {submitted ? (
              <div className="inquiry-success">
                <div className="success-icon">✓</div>
                <h4>Inquiry Received</h4>
                <p>We'll review your message and connect within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="enterprise-inquiry-form">
                <div className="form-intro">
                  <span className="form-label">BEGIN THE CONVERSATION</span>
                </div>

                <div className="inquiry-fields">
                  <div className="luxury-input-field">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="name">Full Name</label>
                    <span className="input-accent"></span>
                  </div>

                  <div className="luxury-input-field">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      required
                    />
                    <label htmlFor="email">Email Address</label>
                    <span className="input-accent"></span>
                  </div>

                  <div className="luxury-input-field">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('company')}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                    />
                    <label htmlFor="company">Company / Organization</label>
                    <span className="input-accent"></span>
                  </div>

                  <div className="luxury-input-field">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                    />
                    <label htmlFor="phone">Phone Number</label>
                    <span className="input-accent"></span>
                  </div>

                  <div className="luxury-input-field textarea-input">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder=" "
                      rows="5"
                      required
                    ></textarea>
                    <label htmlFor="message">Tell us about your project</label>
                    <span className="input-accent"></span>
                  </div>
                </div>

                <button type="submit" className="enterprise-cta-button" disabled={loading}>
                  {loading ? 'Connecting...' : 'Begin the Conversation'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
