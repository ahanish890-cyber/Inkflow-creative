import { useState, useEffect } from 'react'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import PremiumContactForm from '../components/PremiumContactForm'
import FAQSection from '../components/FAQSection'
import '../styles/QueueManagementShowcase.css'

const SPORTS_PRODUCTS = [
  {
    id: 1,
    category: 'PREMIUM CRICKET APPAREL',
    name: 'Cricket Jerseys',
    description: 'Professional cricket apparel engineered for performance excellence. Advanced moisture-management technology keeps players dry and focused during intense matches.',
    description2: 'Tournament-grade jerseys from grassroots clubs to international teams. Our manufacturing standards ensure durability through repeated wear, washing, and high-performance conditions across any climate.',
    features: ['Advanced Moisture Management', 'Custom Team Design', 'Tournament-Grade Quality', 'Durable Stitching', 'UV Protection', 'Rapid Team Orders'],
    metrics: [
      { label: 'Teams Outfitted', value: '5K+' },
      { label: 'Quality Rating', value: '4.95/5' },
      { label: 'Durability Test', value: '500+ washes' },
      { label: 'Turnaround', value: '7 days' }
    ],
    image: '/queue-belt.png'
  },
  {
    id: 2,
    category: 'PROFESSIONAL FOOTBALL',
    name: 'Football Jerseys',
    description: 'Professional football uniforms combining durability with elite performance. Premium breathable materials ensure comfort during matches and training.',
    description2: 'From amateur leagues to professional tournaments, our football jerseys meet rigorous performance standards. Custom team colors and logos ensure unified brand identity while maintaining premium quality consistency.',
    features: ['Breathable Premium Fabric', 'Durable Construction', 'Custom Team Logos', 'Machine Washable', 'Flexible Fit', 'Bulk Team Packages'],
    metrics: [
      { label: 'Teams Served', value: '8K+' },
      { label: 'Satisfaction Score', value: '4.93/5' },
      { label: 'Annual Production', value: '500K+' },
      { label: 'Customization Options', value: '100+' }
    ],
    image: '/printer.png'
  },
  {
    id: 3,
    category: 'HIGH-PERFORMANCE BASKETBALL',
    name: 'Basketball Jerseys',
    description: 'High-performance basketball apparel designed for competitive athletes. Moisture-wicking technology combined with flexible fit enables unrestricted movement.',
    description2: 'Elite-level jerseys trusted by professional and amateur teams. Engineered with performance research, each jersey delivers comfort and durability through intense gameplay and rigorous training schedules.',
    features: ['Moisture-Wicking Technology', 'Flexible Performance Fit', 'Bold Design Options', 'Lightweight Material', 'Premium Comfort', 'Team Coordination'],
    metrics: [
      { label: 'Performance Specs', value: 'NCAA' },
      { label: 'Team Accounts', value: '10K+' },
      { label: 'Quality Rating', value: '4.96/5' },
      { label: 'Comfort Score', value: '98%' }
    ],
    image: '/manufacture-img.png'
  },
  {
    id: 4,
    category: 'COMPETITIVE VOLLEYBALL',
    name: 'Volleyball Jerseys',
    description: 'Lightweight and comfortable volleyball uniforms designed for competitive play. Premium knit technology provides optimal breathability and flexibility.',
    description2: 'Engineered for both indoor and outdoor competition, our volleyball jerseys maintain performance standards across all conditions. Full customization options ensure team identity while maintaining production excellence.',
    features: ['Premium Knit Fabric', 'Full Customization', 'Rapid Production', 'Lightweight Design', 'Moisture Control', 'Tournament-Ready'],
    metrics: [
      { label: 'Competition Level', value: 'All' },
      { label: 'Team Packages', value: '15K+' },
      { label: 'On-Time Delivery', value: '99.9%' },
      { label: 'Customization Speed', value: '3 days' }
    ],
    image: '/Hero-section.png'
  },
  {
    id: 5,
    category: 'UNIFIED TEAM SOLUTIONS',
    name: 'Team Uniforms',
    description: 'Complete uniform packages delivering cohesive team identity. Coordinated design across all apparel ensures professional presentation.',
    description2: 'Enterprise-scale uniform coordination supports teams of all sizes. Our integrated approach manages multi-item orders with unified creative direction, consistent quality, and synchronized delivery.',
    features: ['Coordinated Design', 'Bulk Pricing', 'Professional Quality', 'Material Options', 'Design Support', 'Scalable Production'],
    metrics: [
      { label: 'Total Teams', value: '20K+' },
      { label: 'Satisfaction Rating', value: '4.97/5' },
      { label: 'Uniform Sets/Year', value: '100K+' },
      { label: 'On-Time Rate', value: '99.95%' }
    ],
    image: '/queue-belt.png'
  },
  {
    id: 6,
    category: 'BESPOKE SPORTSWEAR',
    name: 'Custom Sports Wear',
    description: 'Tailored sports apparel solutions for specialized requirements. Expert consultation transforms performance needs into production-ready specifications.',
    description2: 'From experimental prototypes to limited-edition production runs, custom sportswear accommodates non-standard requirements. Full-service support includes design engineering, material testing, and quality assurance.',
    features: ['Full Customization', 'Premium Materials', 'Expert Consultation', 'Design Support', 'Quality Testing', 'Production Scaling'],
    metrics: [
      { label: 'Custom Projects/Year', value: '5K+' },
      { label: 'Design Support', value: '24/7' },
      { label: 'Material Types', value: '50+' },
      { label: 'Success Rate', value: '99.8%' }
    ],
    image: '/printer.png'
  }
]

export default function SportsJersey() {
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
          <h1>Sports Jersey & Apparel</h1>
          <p>Premium sports uniforms and custom apparel for professional and recreational teams</p>
        </div>
      </section>

      {/* Premium Product Showcase */}
      <section className="premium-showcase">
        {SPORTS_PRODUCTS.map((product, index) => (
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
