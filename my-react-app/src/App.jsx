import Navbar from './components/Navbar'
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

        <section className="stats">
          <div className="stats-container">
            <div className="stat-item">
              <p className="stat-number">12yr</p>
              <p className="stat-label">Industry Experience</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">500+</p>
              <p className="stat-label">Happy Clients</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">1.2M</p>
              <p className="stat-label">Units Printed</p>
            </div>
            <div className="stat-item">
              <p className="stat-number">48hr</p>
              <p className="stat-label">Turnaround Time</p>
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
      </main>
    </>
  )
}

export default App
