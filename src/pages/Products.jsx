import TextType from '../components/TextType'
import '../styles/Products.css'

export default function Products() {
  return (
    <main className="products-page">
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
              <h3>Professional Queue Belts</h3>
              <p>Industry-leading queue management solutions with premium materials for maximum durability in high-traffic environments.</p>
              <ul className="feature-list">
                <li>Weather-resistant design</li>
                <li>0.01mm tolerance precision</li>
                <li>24/7 production capability</li>
                <li>ISO 9001 certified</li>
              </ul>
              <button className="learn-btn">Learn More →</button>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="solution-row solution-row-reverse">
            <div className="solution-image-wrapper">
              <img src="/printer.png" alt="Printing Services" className="solution-img" />
              <div className="solution-badge">
                <span>HD Sublimation</span>
              </div>
              <div className="solution-hover-info">
                <div className="info-box">
                  <div className="info-label">Color Range</div>
                  <div className="info-value">16M+</div>
                  <div className="info-desc">Full spectrum available</div>
                </div>
              </div>
            </div>
            <div className="solution-content">
              <h3>Marketing Collaterals</h3>
              <p>Professional printing services with advanced heat-transfer technology for vibrant, fade-resistant branding materials.</p>
              <ul className="feature-list">
                <li>Zero fading guarantee</li>
                <li>On-demand printing</li>
                <li>Premium paper stocks</li>
                <li>Custom finishes available</li>
              </ul>
              <button className="learn-btn">Learn More →</button>
            </div>
          </div>

          {/* Solution 3 */}
          <div className="solution-row">
            <div className="solution-image-wrapper">
              <img src="/facility.jpg" alt="Manufacturing" className="solution-img" />
              <div className="solution-badge">
                <span>Full-Stack Manufacturing</span>
              </div>
              <div className="solution-hover-info">
                <div className="info-box">
                  <div className="info-label">Facility Size</div>
                  <div className="info-value">50,000 Sq.Ft</div>
                  <div className="info-desc">State-of-the-art equipment</div>
                </div>
              </div>
            </div>
            <div className="solution-content">
              <h3>Vertical Integration</h3>
              <p>Complete end-to-end manufacturing from raw materials to finished products in our ISO 9001 certified Bengaluru facility.</p>
              <ul className="feature-list">
                <li>In-house metallurgy lab</li>
                <li>Robotic assembly systems</li>
                <li>Precision CNC machining</li>
                <li>Real-time quality control</li>
              </ul>
              <button className="learn-btn">Learn More →</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
