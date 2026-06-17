import { useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import '../styles/ServicesShowcase.css'

const SERVICES = [
  {
    id: 1,
    category: 'Queue Management',
    title: 'Professional Queue Belts',
    description: 'High-quality printing belts designed for queue management systems. Durable, weather-resistant materials.',
    image: '/queue-belt.png',
    products: [
      { name: 'Standard Queue Belts', desc: 'Durable and cost-effective' },
      { name: 'Premium Queue Belts', desc: 'Enhanced durability and finish' },
      { name: 'Retractable Systems', desc: 'Modern crowd management' }
    ]
  },
  {
    id: 2,
    category: 'Marketing Materials',
    title: 'Marketing Collaterals',
    description: 'Professional printing services for all your marketing needs. Brochures to banners with quality.',
    image: '/printer.png',
    products: [
      { name: 'Brochures & Flyers', desc: 'Eye-catching materials' },
      { name: 'Banners & Signage', desc: 'Large format printing' },
      { name: 'Business Cards', desc: 'Premium collaterals' }
    ]
  },
  {
    id: 3,
    category: 'Custom Solutions',
    title: 'Specialized Printing',
    description: 'Custom printing solutions for unique business requirements. Prototypes to production runs.',
    image: '/manufacture-img.png',
    products: [
      { name: 'Prototype Services', desc: 'Quick turnaround samples' },
      { name: 'Bulk Production', desc: 'High-volume at scale' },
      { name: 'Specialty Materials', desc: 'Unique substrates' }
    ]
  }
]

export default function ServicesShowcase() {
  const [hoveredId, setHoveredId] = useState(null)

  const getFlexValue = (id) => {
    if (!hoveredId) return 1
    if (id === hoveredId) return 1.8
    return 0.9
  }

  return (
    <section className="services-showcase">
      <div className="services-header">
        <p className="services-label">Our Specialized Solutions</p>
        <h2>Our Services</h2>
      </div>

      <LayoutGroup>
        <motion.div
          className="services-grid"
          layout
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              className="service-card-wrapper"
              layout
              initial={false}
              animate={{
                flex: getFlexValue(service.id)
              }}
              transition={{
                type: "spring",
                stiffness: 90,
                damping: 20,
                mass: 0.9,
                duration: 0.7
              }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="service-card">
                {/* Background Image */}
                <motion.div
                  className="service-image"
                  style={{
                    backgroundImage: `url('${service.image}')`
                  }}
                  animate={{
                    scale: hoveredId === service.id ? 1.04 : 1
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 20,
                    mass: 0.9
                  }}
                />

                {/* Dark Overlay */}
                <div className="service-overlay" />

                {/* Content Container */}
                <div className="service-content">
                  {/* Badge */}
                  <motion.div
                    className="service-badge"
                    animate={{
                      opacity: hoveredId === service.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {service.category}
                  </motion.div>

                  {/* Title & Description */}
                  <div className="service-header-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                  </div>

                  {/* Products List - Animated on Hover */}
                  <div className="service-products">
                    {service.products.map((product, idx) => (
                      <motion.div
                        key={idx}
                        className="product-row"
                        initial={{ opacity: 0, y: 10 }}
                        animate={hoveredId === service.id ? {
                          opacity: 1,
                          y: 0
                        } : {
                          opacity: 0,
                          y: 10
                        }}
                        transition={{
                          duration: 0.4,
                          delay: hoveredId === service.id ? 0.15 + idx * 0.08 : 0,
                          ease: [0.23, 1, 0.32, 1]
                        }}
                      >
                        <div className="product-info">
                          <span className="product-name">{product.name}</span>
                          <span className="product-desc">{product.desc}</span>
                        </div>
                        <motion.div
                          className="product-arrow"
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <motion.a
                    href="#"
                    className="service-link"
                    animate={{
                      opacity: hoveredId === service.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.4 }}
                    whileHover={{ gap: '12px' }}
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </LayoutGroup>
    </section>
  )
}
