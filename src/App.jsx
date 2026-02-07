import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero">
          <div className="hero-background">
            <img src="/Hero-section.png" alt="Printing Services" className="hero-bg-img" />
            <div className="hero-overlay"></div>
          </div>
          
          <div className="hero-content">
            <h1>Professional <span className="highlight">Queue Management</span> Solutions</h1>
            <p className="hero-subtitle">Premium printing belts for queue management systems and high-quality marketing collaterals that streamline operations and enhance customer</p>
            
            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">✓</span>
                <span>Durable Materials</span>
              </div>
              <div className="feature">
                <span className="feature-icon">⚡</span>
                <span>Fast Turnaround</span>
              </div>
              <div className="feature">
                <span className="feature-icon">⭐</span>
                <span>Premium Quality</span>
              </div>
            </div>

            <div className="hero-buttons">
              <button className="btn btn-primary">Get Your Quote Now <span>→</span></button>
              <button className="btn btn-secondary">Explore Products <span>👁</span></button>
            </div>
          </div>
        </section>

        <section className="solutions">
          <div className="solutions-header">
            <p className="solutions-label">Our Specialized Solutions</p>
            <h2>Engineered for excellence.</h2>
          </div>

          <div className="solutions-grid">
            <div className="solution-card solution-card-featured">
              <img src="/queue-belt.png" alt="Queue Belt" className="solution-image" />
              <div className="solution-overlay">
                <p className="solution-category">queue management</p>
                <h3>Professional Queue Belts</h3>
                <p>High-quality printing belts designed for queue management systems. Durable, weather-resistant materials ensure long-lasting performance in high-traffic environments</p>
                <a href="#" className="learn-more">Learn more <span>›</span></a>
              </div>
            </div>

            <div className="solution-card solution-card-featured">
              <img src="/printer.png" alt="Printer" className="solution-image" />
              <div className="solution-overlay">
                <p className="solution-category">Marketing Materials</p>
                <h3>Marketing Collaterals</h3>
                <p>Professional printing services for all your marketing needs. From brochures to banners, we deliver high-quality materials that make your brand stand out.</p>
                <a href="#" className="learn-more">Learn more <span>›</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="industries">
          <div className="industries-container">
            <div className="industries-header">
              <h2>Industries We Serve</h2>
              <p>Trusted by leading organizations across diverse sectors</p>
            </div>

            <div className="industries-grid">
              <div className="industry-card">
                <div className="industry-image">
                  <img src="/airports.jpg" alt="Airports" />
                </div>
                <div className="industry-content">
                  <div className="industry-icon">✈️</div>
                  <h3>Airports</h3>
                  <p>Seamless passenger flow and navigational branding.</p>
                  <a href="#" className="industry-link">Explore Sector →</a>
                </div>
              </div>

              <div className="industry-card">
                <div className="industry-image">
                  <img src="/banks.jpg" alt="Banks" />
                </div>
                <div className="industry-content">
                  <div className="industry-icon">🏦</div>
                  <h3>Banks</h3>
                  <p>Professional solutions for financial institutions.</p>
                  <a href="#" className="industry-link">Explore Sector →</a>
                </div>
              </div>

              <div className="industry-card">
                <div className="industry-image">
                  <img src="/hospitals.jpg" alt="Hospitals" />
                </div>
                <div className="industry-content">
                  <div className="industry-icon">🏥</div>
                  <h3>Hospitals</h3>
                  <p>Healthcare-grade printing for medical facilities.</p>
                  <a href="#" className="industry-link">Explore Sector →</a>
                </div>
              </div>

              <div className="industry-card">
                <div className="industry-image">
                  <img src="/retail.jpg" alt="Retail" />
                </div>
                <div className="industry-content">
                  <div className="industry-icon">🛍️</div>
                  <h3>Retail</h3>
                  <p>Eye-catching displays and promotional materials.</p>
                  <a href="#" className="industry-link">Explore Sector →</a>
                </div>
              </div>

              <div className="industry-card">
                <div className="industry-image">
                  <img src="/events.jpg" alt="Events" />
                </div>
                <div className="industry-content">
                  <div className="industry-icon">🎵</div>
                  <h3>Events</h3>
                  <p>Dynamic printing solutions for memorable experiences.</p>
                  <a href="#" className="industry-link">Explore Sector →</a>
                </div>
              </div>

              <div className="industry-card">
                <div className="industry-image">
                  <img src="/government.jpg" alt="Government" />
                </div>
                <div className="industry-content">
                  <div className="industry-icon">🏛️</div>
                  <h3>Government</h3>
                  <p>Compliant printing for public sector organizations.</p>
                  <a href="#" className="industry-link">Explore Sector →</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
