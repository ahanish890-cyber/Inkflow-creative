import { CheckCircle, Zap, Star, Plane, Building2, Hospital, ShoppingBag, Music, Shield } from 'lucide-react'
import WhyChooseInkflow from '../components/WhyChooseInkflow'
import SolutionsPortfolio from '../components/SolutionsPortfolio'
import { ContainerScrollAnimation } from '../components/ContainerScrollAnimation'
import Testimonials from '../components/Testimonials'
import FAQSection from '../components/FAQSection'
import TextType from '../components/TextType'
import TextReveal from '../components/TextReveal'
import ParallaxImage from '../components/ParallaxImage'
import ScrollAnimator from '../components/ScrollAnimator'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-background">
          <img src="/Hero-section.png" alt="Printing Services" className="hero-bg-img" />
          <div className="hero-overlay"></div>
        </div>
        
        <div className="hero-content">
          <h1>Professional <span className="highlight">Queue Management</span> Solutions</h1>
          <div className="hero-subtitle">
            <TextType 
              text={['Premium printing belts for queue management systems', 'High-quality marketing collaterals that streamline operations']}
              typingSpeed={40}
              pauseDuration={2500}
              deletingSpeed={25}
              showCursor={true}
              cursorCharacter="|"
              cursorBlinkDuration={0.7}
            />
          </div>
          
          <div className="hero-features">
            <div className="feature">
              <span className="feature-icon">
                <CheckCircle size={20} strokeWidth={2} />
              </span>
              <span>Durable Materials</span>
            </div>
            <div className="feature">
              <span className="feature-icon">
                <Zap size={20} strokeWidth={2} />
              </span>
              <span>Fast Turnaround</span>
            </div>
            <div className="feature">
              <span className="feature-icon">
                <Star size={20} strokeWidth={2} />
              </span>
              <span>Premium Quality</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary">Get Your Quote Now <span>→</span></button>
            <button className="btn btn-secondary">Explore Products <span>👁</span></button>
          </div>
        </div>

        <div className="stats-card-overlay">
          <div className="stats-card">
            <div className="stat-item">
              <span className="stat-number">12yr</span>
          
              <span className="stat-desc">Industry Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-desc">Trusted Clients</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">1.2M</span>
              <span className="stat-desc">Products Shipped</span>
            </div>
            
           
          </div>
        </div>
      </section>

      <ContainerScrollAnimation
        titleComponent={
          <>
            <h1>
              Experience the <br />
              <TextType 
                text="Power of Premium Printing"
                typingSpeed={45}
                pauseDuration={2500}
                showCursor={false}
              />
            </h1>
          </>
        }
      >
        <img src="/Hero-section.png" alt="Premium Printing Services" />
      </ContainerScrollAnimation>

      <section className="solutions">
        <div className="solutions-header">
          <p className="solutions-label">Our Specialized Solutions</p>
          <h2>
            <TextType 
              text="Engineered for excellence."
              typingSpeed={50}
              pauseDuration={2000}
              showCursor={false}
            />
          </h2>
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
    <div className="industry-image" style={{ backgroundImage: 'url(/Airport.png)' }}></div>
    <div className="industry-content">
      <div className="industry-icon">
        <Plane size={32} strokeWidth={1.5} />
      </div>
      <h3>Airports</h3>
      <p>Managing passenger flow efficiently with durable, weather-resistant queue management systems designed for high-traffic environments.</p>
      <a href="#" className="industry-link">Explore Sector →</a>
    </div>
  </div>

          <div className="industry-card">
            <div className="industry-image" style={{ backgroundImage: 'url(/Bank.jpeg)' }}></div>
            <div className="industry-content">
              <div className="industry-icon">
                <Building2 size={32} strokeWidth={1.5} />
              </div>
              <h3>Banks</h3>
              <p>Professional queue management solutions that enhance customer experience while maintaining security and organization in financial institutions.</p>
              <a href="#" className="industry-link">Explore Sector →</a>
            </div>
          </div>

          <div className="industry-card">
            <div className="industry-image" style={{ backgroundImage: 'url(/Hospital.png)' }}></div>
            <div className="industry-content">
              <div className="industry-icon">
                <Hospital size={32} strokeWidth={1.5} />
              </div>
              <h3>Hospitals</h3>
              <p>Patient flow management solutions that ensure orderly, comfortable waiting experiences in hospitals, clinics, and medical facilities.</p>
              <a href="#" className="industry-link">Explore Sector →</a>
            </div>
          </div>

          <div className="industry-card">
            <div className="industry-image" style={{ backgroundImage: 'url(/Retail.png)' }}></div>
            <div className="industry-content">
              <div className="industry-icon">
                <ShoppingBag size={32} strokeWidth={1.5} />
              </div>
              <h3>Retail</h3>
              <p>Queue management systems for retail stores, shopping centers, and checkout areas that improve customer satisfaction and reduce wait times.</p>
              <a href="#" className="industry-link">Explore Sector →</a>
            </div>
          </div>

          <div className="industry-card">
            <div className="industry-image" style={{ backgroundImage: 'url(/Event.png)' }}></div>
            <div className="industry-content">
              <div className="industry-icon">
                <Music size={32} strokeWidth={1.5} />
              </div>
              <h3>Events</h3>
              <p>Crowd control solutions for concerts, exhibitions, theme parks, and special events ensuring safe and organized guest experiences.</p>
              <a href="#" className="industry-link">Explore Sector →</a>
            </div>
          </div>

          <div className="industry-card">
            <div className="industry-image" style={{ backgroundImage: 'url(/Goverment.png)' }}></div>
            <div className="industry-content">
              <div className="industry-icon">
                <Shield size={32} strokeWidth={1.5} />
              </div>
              <h3>Government</h3>
              <p>Efficient crowd control and queue management systems for public services, elections, and government facilities.</p>
              <a href="#" className="industry-link">Explore Sector →</a>
            </div>
          </div>
          </div>
        </div>
      </section>

      <WhyChooseInkflow />
      <SolutionsPortfolio />
      <Testimonials />
      
      <section className="manufacturing">
        <div className="manufacturing-container">
          <div className="manufacturing-header">
            <p className="manufacturing-label">Vertical Integration</p>
            <h2>The Forge of <span className="manufacturing-highlight">Precision.</span></h2>
            <p className="manufacturing-description">Unlike competitors, we own the entire stack. From the first spark of the weld to the final stitch of the belt, every Inkflow product is born in our specialized Bengaluru facility.</p>
          </div>

          <div className="manufacturing-image-wrapper">
            <img src="/facility.jpg" alt="Bengaluru Manufacturing Facility" className="manufacturing-image" />
            <div className="manufacturing-overlay"></div>
            <div className="facility-badge">
              <p className="facility-label">Facility 01 / Bengaluru</p>
              <h4>50,000 Sq. Ft. of pure engineering potential.</h4>
              <div className="facility-stats">
                <div className="stat">
                  <p className="stat-label">ISO 9001</p>
                  <p className="stat-value">Certified</p>
                </div>
                <div className="stat-divider"></div>
                <div className="stat">
                  <p className="stat-label">24/7</p>
                  <p className="stat-value">Production</p>
                </div>
              </div>
            </div>
          </div>

          <div className="capabilities-grid">
            <div className="capability-card">
              <div className="capability-icon">🔧</div>
              <h3>Precision Machining</h3>
              <p>Our CNC-controlled milling ensures every stanchion cap and base fits with a 0.01mm tolerance. No rattles, no gaps—just solid engineering.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">🎨</div>
              <h3>HD Sublimation</h3>
              <p>In-house industrial printing using heat-transfer technology that fuses ink into the fabric fibers, ensuring zero fading even in outdoor sunlight.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">🤖</div>
              <h3>Robotic Assembly</h3>
              <p>The retraction springs are wound and tested by automated systems to ensure consistent tension across every single unit delivered.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">🔬</div>
              <h3>Metallurgy Lab</h3>
              <p>We test every batch of raw aluminum and stainless steel for tensile strength and corrosion resistance before it enters the production line.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
  )
}
