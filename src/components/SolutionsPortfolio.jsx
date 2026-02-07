import { Layers3, Cpu, ShieldCheck, Maximize2, Sparkles, CheckCircle2, ArrowRight, Zap, Palette } from 'lucide-react'
import queueBeltImg from '../assets/queue-belt.png'
import printerImg from '../assets/printer.png'

export default function SolutionsPortfolio() {
  return (
    <section className="solutions-portfolio">
      <div className="solutions-container">
        {/* Header */}
        <div className="solutions-header-section">
          <p className="solutions-label">Commercial Systems</p>
          <h2 className="solutions-title">Solutions for the <br />Modern Enterprise.</h2>
          <div className="solutions-divider"></div>
          <p className="solutions-description">We provide specialized infrastructure and branding assets for the world's most high-traffic environments, from airport terminals to financial hubs.</p>
        </div>

        {/* Solutions Grid */}
        <div className="solutions-grid-space">
          {/* Solution 1 */}
          <div className="solution-row">
            <div className="solution-image-wrapper">
              <img src={queueBeltImg} alt="Queue Management" className="solution-img" />
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
              <img src={printerImg} alt="Architectural Printing" className="solution-img" />
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

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="why-choose-inner">
          <div className="why-choose-header-flex">
            <h2 className="why-choose-title">Why Industry Leaders<br />Choose Inkflow.</h2>
            <a href="#solutions" className="why-choose-link">
              Our Solutions <ArrowRight size={16} />
            </a>
          </div>

          <div className="why-choose-cards-grid">
            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Zap size={24} strokeWidth={1.5} />
              </div>
              <h3 className="why-choose-card-title">Fast Turnaround</h3>
              <p className="why-choose-card-desc">High-speed production ensures your materials are delivered exactly when you need them.</p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Sparkles size={24} strokeWidth={1.5} />
              </div>
              <h3 className="why-choose-card-title">Premium Print Quality</h3>
              <p className="why-choose-card-desc">Industry-grade printers producing sharp, vibrant, and durable results.</p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <Palette size={24} strokeWidth={1.5} />
              </div>
              <h3 className="why-choose-card-title">Custom Branding Solutions</h3>
              <p className="why-choose-card-desc">Tailor-made printing designed to elevate your brand presence.</p>
            </div>

            <div className="why-choose-card">
              <div className="why-choose-icon">
                <ShieldCheck size={24} strokeWidth={1.5} />
              </div>
              <h3 className="why-choose-card-title">Trusted by Businesses</h3>
              <p className="why-choose-card-desc">Reliable printing partner for corporates, retail chains, and institutions.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
