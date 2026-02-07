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

        <section className="solutions">
          <div className="solutions-header">
            <h2 className="solutions-label">Our Specialized Solutions</h2>
            <p>From queue management systems to marketing materials, we deliver precision printing solutions that enhance operational efficiency and brand presence.</p>
          </div>

          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">
                <img src="/stanchion-icon.svg" alt="Stanchion" />
              </div>
              <h3>Signature Stanchions</h3>
              <p>Precision engineering for silent crowd control.</p>
              <a href="#" className="learn-more">Learn more <span>›</span></a>
            </div>

            <div className="solution-card solution-card-featured">
              <img src="/hd-sublimation.jpg" alt="HD Sublimation" className="solution-image" />
              <div className="solution-overlay">
                <h3>HD Sublimation</h3>
                <p>Vibrant colors and precision printing on any surface.</p>
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
