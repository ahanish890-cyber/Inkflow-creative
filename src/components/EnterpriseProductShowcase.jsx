import { useState, useEffect } from 'react'
import { CheckCircle2, ArrowRight, TrendingUp, Users, Zap, Shield } from 'lucide-react'
import '../styles/EnterpriseProductShowcase.css'

const PRODUCTS = [
  {
    id: 1,
    category: 'QUEUE MANAGEMENT PLATFORM',
    name: 'Premium Queue Manager',
    description: `Enterprise-grade queue management solution designed for high-volume operations. Our Premium Queue Manager delivers real-time visibility across multiple locations with intelligent routing algorithms that reduce wait times by up to 40%. Built for enterprises managing thousands of daily transactions with predictive analytics and customer satisfaction metrics.`,
    description2: `Seamlessly integrate with your existing infrastructure. Our cloud-native platform scales from single-location operations to pan-India deployments without performance degradation. Advanced reporting gives you actionable insights to optimize every customer touchpoint.`,
    features: [
      'Real-Time Queue Monitoring',
      'Multi-Branch Management',
      'Advanced Analytics Engine',
      'Customer Notifications',
      'Smart Token Allocation',
      'Cloud Dashboard'
    ],
    metrics: [
      { label: 'Uptime SLA', value: '99.9%' },
      { label: 'Transactions/Year', value: '50M+' },
      { label: 'Enterprise Clients', value: '500+' },
      { label: 'Support', value: '24/7' }
    ],
    image: '/queue-belt.png'
  },
  {
    id: 2,
    category: 'DIGITAL SIGNAGE SOLUTION',
    name: 'Innova Manager',
    description: `Transform customer communication with our intelligent digital signage platform. Innova Manager enables dynamic content delivery across networks of displays, with centralized management and real-time updates. Perfect for retail, hospitality, and corporate environments requiring synchronized messaging at scale.`,
    description2: `Control millions of touchpoints from a single dashboard. Our platform supports 4K displays, interactive kiosks, and immersive experiences with zero downtime deployments. Template-based content creation ensures consistent branding while allowing local customization.`,
    features: [
      'Centralized Content Management',
      'Real-Time Updates',
      'Network-wide Synchronization',
      'Interactive Experiences',
      'Remote Monitoring',
      'Template Library'
    ],
    metrics: [
      { label: 'Display Density', value: '10K+' },
      { label: 'Network Uptime', value: '99.95%' },
      { label: 'Content Types', value: '50+' },
      { label: 'Deployment Regions', value: 'Pan-India' }
    ],
    image: '/printer.png'
  },
  {
    id: 3,
    category: 'ENTERPRISE DISPLAY SYSTEM',
    name: 'Signage Design System',
    description: `Enterprise-grade design system for premium visual experiences. Signage Design System provides pre-built, enterprise-optimized components that reduce deployment time while maintaining luxury-brand aesthetics. Designed for organizations demanding pixel-perfect consistency across global operations.`,
    description2: `Accelerate go-to-market with component libraries, design tokens, and accessibility standards built-in. Maintain brand integrity while enabling local teams to create stunning customer experiences. Full integration with your CMS and analytics platforms.`,
    features: [
      'Pre-Built Components',
      'Design Tokens System',
      'A/B Testing Framework',
      'Accessibility Standards',
      'Brand Governance',
      'Performance Optimized'
    ],
    metrics: [
      { label: 'Component Library', value: '200+' },
      { label: 'Load Time', value: '<1.5s' },
      { label: 'Accessibility', value: 'WCAG AAA' },
      { label: 'Teams Using', value: '100+' }
    ],
    image: '/manufacture-img.png'
  },
  {
    id: 4,
    category: 'PREMIUM DISPLAY SOLUTIONS',
    name: 'Premium Display Solutions',
    description: `Luxury display technology for mission-critical environments. Our Premium Display Solutions combine cutting-edge hardware with enterprise software for uncompromised visual performance. Built for airports, luxury retail, and corporate headquarters demanding 99.9% reliability.`,
    description2: `From immersive video walls to precision-engineered kiosks, every solution is crafted for enterprise deployment. Redundant systems, automated failover, and predictive maintenance ensure your brand never goes dark. White-glove support and custom integration included.`,
    features: [
      '4K/8K Display Support',
      'Redundant Architecture',
      'Predictive Maintenance',
      'Ambient Light Sensing',
      'Failover Systems',
      'Climate Control'
    ],
    metrics: [
      { label: 'Brightness', value: '5000 nits' },
      { label: 'Uptime Guarantee', value: '99.95%' },
      { label: 'MTBF', value: '100K hours' },
      { label: 'Response Time', value: '<2ms' }
    ],
    image: '/Hero-section.png'
  }
]

export default function EnterpriseProductShowcase() {
  const [visibleProducts, setVisibleProducts] = useState(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleProducts((prev) => new Set([...prev, entry.target.dataset.productId]))
          }
        })
      },
      { threshold: 0.2 }
    )

    document.querySelectorAll('[data-product-id]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="enterprise-product-showcase">
      <div className="showcase-header">
        <h2>Enterprise Product Suite</h2>
        <p>Purpose-built solutions for premium operations at scale</p>
      </div>

      {PRODUCTS.map((product, index) => (
        <div
          key={product.id}
          data-product-id={product.id}
          className={`product-section ${index % 2 === 0 ? 'image-left' : 'image-right'} ${
            visibleProducts.has(String(product.id)) ? 'visible' : ''
          }`}
        >
          {/* Image Side */}
          <div className="product-visual">
            <div className="visual-container">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="visual-overlay"></div>
            </div>
          </div>

          {/* Content Side */}
          <div className="product-content">
            {/* Category Label */}
            <div className="product-category">
              <span className="category-line"></span>
              <span className="category-text">{product.category}</span>
            </div>

            {/* Product Name */}
            <h3 className="product-name">{product.name}</h3>

            {/* Description */}
            <div className="product-description">
              <p>{product.description}</p>
              <p>{product.description2}</p>
            </div>

            {/* Features Grid */}
            <div className="features-grid">
              {product.features.map((feature, idx) => (
                <div key={idx} className="feature-item">
                  <CheckCircle2 size={18} className="feature-icon" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="metrics-grid">
              {product.metrics.map((metric, idx) => (
                <div key={idx} className="metric-card">
                  <div className="metric-value">{metric.value}</div>
                  <div className="metric-label">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="cta-group">
              <button className="btn-primary">
                Request Demo
                <ArrowRight size={18} />
              </button>
              <button className="btn-secondary">
                View Specifications
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
