import { useState, useEffect } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import PremiumContactForm from '../components/PremiumContactForm'
import FAQSection from '../components/FAQSection'
import '../styles/QueueManagementShowcase.css'

const WEB_PRINTING_PRODUCTS = [
  {
    id: 1,
    category: 'PREMIUM PRINTING SERVICE',
    name: 'Business Cards',
    description: 'Professional business cards that leave lasting impressions. Our premium finishes elevate your brand identity with sophisticated presentation.',
    description2: 'From embossed metallic to matte luxury finishes, each card reflects corporate excellence. Bulk ordering with competitive enterprise pricing ensures consistency across your entire organization.',
    features: ['Custom Design & Layout', 'Multiple Premium Finishes', 'Fast Turnaround Time', 'Bulk Ordering Discounts', 'Quality Assurance', 'Eco-Friendly Options'],
    metrics: [
      { label: 'Card Varieties', value: '50+' },
      { label: 'Turnaround', value: '48hrs' },
      { label: 'Quality Rating', value: '4.9/5' },
      { label: 'Bulk Orders', value: '10K+' }
    ],
    image: '/queue-belt.png'
  },
  {
    id: 2,
    category: 'PROFESSIONAL MARKETING',
    name: 'Brochures',
    description: 'Compelling brochures that tell your brand story with impact. Professional design templates combined with premium paper stock create powerful marketing tools.',
    description2: 'Enterprise-grade brochures delivered with consistent color management and finishing. Multi-format support accommodates diverse marketing strategies from direct mail to event distribution.',
    features: ['Professional Design', 'Multiple Formats', 'Premium Paper Options', 'Color Management', 'Finishing Services', 'Rapid Production'],
    metrics: [
      { label: 'Format Options', value: '20+' },
      { label: 'Monthly Orders', value: '5K+' },
      { label: 'Quality Score', value: '4.95/5' },
      { label: 'Delivery Speed', value: '3-5 days' }
    ],
    image: '/printer.png'
  },
  {
    id: 3,
    category: 'PROMOTIONAL SOLUTIONS',
    name: 'Flyers',
    description: 'Eye-catching promotional flyers designed to maximize campaign impact. High-resolution printing ensures every detail captures attention.',
    description2: 'Unlimited design revisions and fast turnaround make flyer distribution effortless. From single-run prototypes to massive campaigns, our production scale meets enterprise demand.',
    features: ['High Resolution Print', 'Custom Sizes Available', 'Bulk Pricing', 'Design Support', 'Fast Delivery', 'Waste Reduction'],
    metrics: [
      { label: 'Size Options', value: '15+' },
      { label: 'Annual Production', value: '100M+' },
      { label: 'On-Time Delivery', value: '99.8%' },
      { label: 'Min. Order', value: '100' }
    ],
    image: '/manufacture-img.png'
  },
  {
    id: 4,
    category: 'GRAND FORMAT PRINTING',
    name: 'Banners',
    description: 'Large-format banners that dominate retail and corporate spaces. UV-resistant printing ensures vibrant color retention even in outdoor environments.',
    description2: 'From retail banners to outdoor signage, our grand format capability supports enterprise-scale installations. Multiple material options provide flexibility for any deployment scenario.',
    features: ['UV-Resistant Ink', 'Multiple Material Options', 'Weather-Proof', 'Rapid Production', 'Custom Sizing', 'Professional Finishing'],
    metrics: [
      { label: 'Max Width', value: '4.8m' },
      { label: 'Material Types', value: '8+' },
      { label: 'Durability', value: '5+ years' },
      { label: 'Annual Deployment', value: '50K+' }
    ],
    image: '/Hero-section.png'
  },
  {
    id: 5,
    category: 'INTEGRATED MARKETING',
    name: 'Marketing Materials',
    description: 'Complete marketing collateral packages delivering brand consistency across all channels. Coordinated design ensures seamless customer experience.',
    description2: 'Comprehensive solutions spanning digital and print touchpoints. Enterprise-grade production management coordinates complex multi-item projects with unified creative direction.',
    features: ['Brand Consistency', 'Multi-Channel Design', 'Integrated Planning', 'Bulk Coordination', 'Quality Control', 'Project Management'],
    metrics: [
      { label: 'Material Types', value: '30+' },
      { label: 'Campaigns/Year', value: '1K+' },
      { label: 'On-Time Rate', value: '99.9%' },
      { label: 'Client Satisfaction', value: '4.98/5' }
    ],
    image: '/queue-belt.png'
  },
  {
    id: 6,
    category: 'BESPOKE SOLUTIONS',
    name: 'Custom Printing',
    description: 'Tailored printing solutions for unique business requirements. Expert consultation transforms your vision into production-ready specifications.',
    description2: 'From experimental prototypes to limited-edition production runs, custom printing accommodates non-standard requirements. Full-service support includes design, engineering, and quality verification.',
    features: ['Custom Specifications', 'Rapid Prototyping', 'Expert Consultation', 'Full Design Support', 'Quality Assurance', 'Flexible Scaling'],
    metrics: [
      { label: 'Custom Projects/Year', value: '2K+' },
      { label: 'Design Support Hours', value: '24/7' },
      { label: 'Prototype Turnaround', value: '24hrs' },
      { label: 'Success Rate', value: '99.7%' }
    ],
    image: '/printer.png'
  }
]

export default function WebPrinting() {
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
      { threshold: 0.15 }
    )

    document.querySelectorAll('[data-product-id]').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="queue-hero">
        <div className="queue-hero-content">
          <h1>Web Printing Services</h1>
          <p>Professional printing solutions for all your marketing and communication needs at enterprise scale</p>
        </div>
      </section>

      {/* Premium Product Showcase */}
      <section className="premium-showcase">
        {WEB_PRINTING_PRODUCTS.map((product, index) => (
          <div
            key={product.id}
            data-product-id={product.id}
            className={`product-showcase ${index % 2 === 0 ? 'image-left' : 'image-right'} ${
              visibleProducts.has(String(product.id)) ? 'visible' : ''
            }`}
          >
            {/* Product Visual */}
            <div className="showcase-visual">
              <div className="visual-container">
                <img src={product.image} alt={product.name} className="showcase-image" />
                <div className="visual-overlay"></div>
              </div>
            </div>

            {/* Product Content */}
            <div className="showcase-content">
              {/* Category Label */}
              <div className="product-category">
                <span className="category-line"></span>
                <span className="category-text">{product.category}</span>
              </div>

              {/* Product Name */}
              <h2 className="product-showcase-name">{product.name}</h2>

              {/* Description */}
              <div className="product-showcase-description">
                <p>{product.description}</p>
                <p>{product.description2}</p>
              </div>

              {/* Features Grid */}
              <div className="features-showcase-grid">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="showcase-feature">
                    <CheckCircle2 size={18} className="showcase-feature-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Metrics */}
              <div className="showcase-metrics">
                {product.metrics.map((metric, idx) => (
                  <div key={idx} className="showcase-metric">
                    <div className="metric-value">{metric.value}</div>
                    <div className="metric-label">{metric.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="showcase-ctas">
                <button className="btn-showcase-primary">
                  Request Demo
                  <ArrowRight size={18} />
                </button>
                <button className="btn-showcase-secondary">
                  View Specifications
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
