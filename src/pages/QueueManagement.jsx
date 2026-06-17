import { useState, useEffect } from 'react'
import { CheckCircle2 } from 'lucide-react'
import PremiumContactForm from '../components/PremiumContactForm'
import FAQSection from '../components/FAQSection'
import '../styles/QueueManagementShowcase.css'

const QUEUE_PRODUCTS = [
  {
    id: 1,
    category: 'PREMIUM QUEUE BARRIER SYSTEM',
    name: 'Inkflow Premium Barrier',
    description: 'Our Inflow Premium Barrier is engineered with high-quality stainless steel construction, delivering professional queue management solutions for enterprises of all sizes. Freestanding or floor-fixed stations with versatile colour webbings and fitting options organize small to large flows of people efficiently, safely, and rapidly.',
    description2: 'Built for high-traffic environments requiring durability and modern aesthetics, the Inflow barrier features an external retractable belt cassette with 2.75 metres of premium tape. Customize post and base cover colors, select from extensive belt tape options, and leverage individually printable belts for complete brand integration across your queue management infrastructure.',
    features: ['Stainless Steel SS 202 Grade', 'Easy Assembly & Installation', 'Durable Long-Lasting Construction', 'Retractable Belt Cassette 2.75M', 'Multiple Color Options', 'Individually Printable Belts'],
    metrics: [
      { label: 'Total Height', value: '980 MM' },
      { label: 'Weight per Unit', value: '10 KGS' },
      { label: 'Tape Length', value: '2.75 MTR' },
      { label: 'Tape Width', value: '48 MM' }
    ],
    images: ['/preminum-quemanager.JPG', '/Black-coated.jpeg'],
    catalogueImage: '/Barrier-open.png',
    accessories: [
      { id: 1, name: 'Aluminium 6MTR Cassette', image: '/Base.JPG' },
      { id: 2, name: 'Premium Mounting Bracket', image: '/Barrier-open.png' },
      { id: 3, name: 'Steel Base Plate', image: '/Double-barrier.png' }
    ]
  },
  {
    id: 2,
    category: 'RETRACTABLE BARRIER SYSTEM',
    name: 'Innova Barrier',
    description: 'The Innova Barrier delivers professional queue management through high-quality stainless steel construction with a lightweight, durable base. Retractable belt stanchions provide one of the most popular and cost-effective solutions for controlling crowds and forming organized queues across banks, hospitals, government offices, and commercial facilities.',
    description2: 'Engineered for easy assembly and long-lasting performance, the Innova Barrier features a retractable belt cassette with 2.25 metres of premium tape and three receiving connectors. Choose from extensive color options, individually printable belts, and flexible installation systems including fixed, screwed-down multifunctional, wall-mounted, and post-mounted solutions.',
    features: ['High-Quality Stainless Steel SS 202', 'Lightweight Durable Base', 'Easy Assembly & Installation', 'Retractable Belt 2.25M Cassette', 'Large Selection Colored Belts', 'Individually Printable Belts'],
    metrics: [
      { label: 'Total Height', value: '910 MM' },
      { label: 'Weight per Unit', value: '9 KGS' },
      { label: 'Tape Length', value: '2.25 MTR' },
      { label: 'Installation Options', value: '4+' }
    ],
    images: ['/preminum-quemanager.JPG', '/queue-stand.webp'],
    catalogueImage: '/black-finish-stanchion.jpg',
    accessories: [
      { id: 1, name: 'Wall Mount Kit', image: '/Base.JPG' },
      { id: 2, name: 'Extension Cassette', image: '/Barrier-open.png' },
      { id: 3, name: 'Connector Set', image: '/Ball-head.JPG' }
    ]
  },
  {
    id: 3,
    category: 'ENTERPRISE DISPLAY SYSTEM',
    name: 'Ball-Head Barrier',
    description: 'Luxury display technology for mission-critical environments. Premium Display Solutions combine cutting-edge hardware with enterprise software for uncompromised visual performance.',
    description2: 'Built for airports, luxury retail, and corporate headquarters demanding 99.9% reliability. From immersive video walls to precision-engineered kiosks, every solution is crafted for enterprise deployment. Redundant systems, automated failover, and predictive maintenance included.',
    features: ['4K/8K Display Support', 'Redundant Architecture', 'Predictive Maintenance', 'Ambient Light Sensing', 'Failover Systems', 'Climate Control'],
    metrics: [
      { label: 'Brightness', value: '5000 nits' },
      { label: 'Uptime Guarantee', value: '99.95%' },
      { label: 'MTBF', value: '100K hours' },
      { label: 'Response Time', value: '<2ms' }
    ],
    images: ['/IMG_8970.JPG', '/Ball-head.JPG'],
    catalogueImage: '/retractable-belt-stanchion.jpg',
    accessories: [
      { id: 1, name: 'Display Mount Arm', image: '/Gold-ball.JPG' },
      { id: 2, name: 'Power Supply Unit', image: '/Gold-base.JPG' },
      { id: 3, name: 'Cable Management', image: '/Ball-head.JPG' }
    ]
  }
]

export default function QueueManagement() {
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
          <span className="queue-hero-label">PREMIUM CROWD CONTROL SYSTEMS</span>
          <h1>Queue Management Solutions</h1>
          <p>Professional queue management systems engineered for airports, retail environments, corporate facilities and high-traffic public spaces.</p>
        </div>
      </section>

      {/* Premium Product Showcase */}
      <section className="premium-showcase">
        {QUEUE_PRODUCTS.map((product, index) => (
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
                {product.images && product.images.map((img, idx) => (
                  <div key={idx} className="product-image-wrapper">
                    <img src={img} alt={`${product.name} - View ${idx + 1}`} className="showcase-image" />
                  </div>
                ))}
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

                {/* Accessories Section */}
                <div className="product-accessories">
                  <div className="accessories-grid">
                    {product.accessories.map((accessory) => (
                      <div key={accessory.id} className="accessory-card">
                        <div className="accessory-image-wrapper">
                          <img src={accessory.image} alt={accessory.name} className="accessory-image" />
                        </div>
                        <h4 className="accessory-label">{accessory.name}</h4>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
