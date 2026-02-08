import { Layers3, Cpu, ShieldCheck, Maximize2, Sparkles, CheckCircle2, ArrowRight, Zap, Palette } from 'lucide-react'
import TextType from './TextType'
import HorizontalScrollCarousel from './HorizontalScrollCarousel'

export default function SolutionsPortfolio() {
  const portfolioImages = [
    "https://images.unsplash.com/photo-1572099606223-6e29045d7de3?q=80&w=2070",
    "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2070",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070",
    "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2070",
    "https://images.unsplash.com/photo-1559056169-641ef0c8f41f?q=80&w=2070",
    "https://images.unsplash.com/photo-1541745537411-b8046dc7f58b?q=80&w=2070",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070",
    "https://images.unsplash.com/photo-1559056199-641a0ac8b3d4?q=80&w=2070",
  ]

  return (
    <section className="solutions-portfolio">
      <div className="solutions-container">
        {/* Header */}
        <div className="solutions-header-section">
          <p className="solutions-label">Commercial Systems</p>
          <h2 className="solutions-title">
            <TextType 
              text="Solutions for the Modern Enterprise."
              typingSpeed={50}
              pauseDuration={2500}
              showCursor={false}
            />
          </h2>
          <div className="solutions-divider"></div>
          <p className="solutions-description">We provide specialized infrastructure and branding assets for the world's most high-traffic environments, from airport terminals to financial hubs.</p>
        </div>

        {/* Solutions Grid */}
        <div className="solutions-grid-space">
          {/* Solution 1 */}
          <div className="solution-row">
            <div className="solution-image-wrapper">
              <img src="/queue-belt.png" alt="Queue Management" className="solution-img" />
              <div className="solution-badge">
                <span>Hardware Engineering</span>
              </div>
              <div className="solution-hover-info">
                <div className="info-box">
                  <div className="info-label">Load Rating</div>
                  <div className="info-value">900kg+</div>
                  <div className="info-desc">Break tension certified</div>
                </div>
              </div>
            </div>

            <div className="solution-content">
              <h3 className="solution-content-title">Kinetic Queue Systems</h3>
              <p className="solution-content-desc">Our flagship stanchions are engineered for durability. Features include magnetic base integration, low-resistance belt retraction, and anti-tamper locking mechanisms.</p>
              
              <ul className="solution-features">
                <li>
                  <div className="feature-icon">
                    <Layers3 size={20} />
                  </div>
                  <span>High-Tensile Poly-Belts</span>
                </li>
                <li>
                  <div className="feature-icon">
                    <Cpu size={20} />
                  </div>
                  <span>Magnetic Flooring Integration</span>
                </li>
                <li>
                  <div className="feature-icon">
                    <ShieldCheck size={20} />
                  </div>
                  <span>ASTM Safety Certified</span>
                </li>
              </ul>

              <button className="solution-btn">
                View Hardware Specs <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="solution-row solution-row-reverse">
            <div className="solution-content">
              <h3 className="solution-content-title">Architectural Wraps</h3>
              <p className="solution-content-desc">High-fidelity graphics for wide-scale environmental branding. We use UV-cured inks on non-porous substrates to ensure color depth that lasts for years in direct sunlight.</p>
              
              <ul className="solution-features">
                <li>
                  <div className="feature-icon">
                    <Maximize2 size={20} />
                  </div>
                  <span>Grand Format Print (5m+)</span>
                </li>
                <li>
                  <div className="feature-icon">
                    <Sparkles size={20} />
                  </div>
                  <span>UV-Resistant Shielding</span>
                </li>
                <li>
                  <div className="feature-icon">
                    <CheckCircle2 size={20} />
                  </div>
                  <span>Zero-VOC Eco Solutions</span>
                </li>
              </ul>

              <button className="solution-btn">
                Print Capability Guide <ArrowRight size={18} />
              </button>
            </div>

            <div className="solution-image-wrapper">
              <img src="/printer.png" alt="Architectural Printing" className="solution-img" />
              <div className="solution-badge solution-badge-right">
                <span>Advanced Print Tech</span>
              </div>
              <div className="solution-hover-info solution-hover-info-right">
                <div className="info-box">
                  <div className="info-label">Ink Depth</div>
                  <div className="info-value">8-Layer UV</div>
                  <div className="info-desc">Industrial grade cured</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    
      </section>

  )
}
