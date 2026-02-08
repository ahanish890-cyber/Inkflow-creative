import { CheckCircle, Zap, Star, Plane, Building2, Hospital, ShoppingBag, Music, Shield, Wrench, ShieldCheck, Leaf, Clock } from 'lucide-react'
import WhyChooseInkflow from '../components/WhyChooseInkflow'
import SolutionsPortfolio from '../components/SolutionsPortfolio'
import { ContainerScrollAnimation } from '../components/ContainerScrollAnimation'
import Testimonials from '../components/Testimonials'
import FAQSection from '../components/FAQSection'
import TextType from '../components/TextType'

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
            <h2>State-of-the-Art <span className="manufacturing-highlight">Manufacturing.</span></h2>
            <p className="manufacturing-description">Our advanced printing facilities and cutting-edge technology ensure precision, consistency, and quality in every product we deliver across all industries.</p>
          </div>

          <div className="manufacturing-image-wrapper">
            <img src="/manufacture-img.png" alt="Bengaluru Manufacturing Facility" className="manufacturing-image" />
            <div className="manufacturing-overlay"></div>
            <div className="facility-badge">
              <p className="facility-label">Bengaluru</p>
              <h4>3,000 Sq. Ft. of Pure Printing Services.</h4>
              <div className="facility-stats">
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
              <div className="capability-icon">
                <Wrench size={32} strokeWidth={1.5} />
              </div>
              <h3>Industrial Grade Equipment</h3>
              <p>We operate state-of-the-art machinery engineered for precision, durability, and consistent output — enabling us to deliver flawless products at scale without compromising on quality.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <ShieldCheck size={32} strokeWidth={1.5} />
              </div>
              <h3>Quality Assured</h3>
              <p>Every product undergoes rigorous quality checks and controlled production processes to ensure exceptional performance, reliability, and long-term durability.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <Leaf size={32} strokeWidth={1.5} />
              </div>
              <h3>Eco-Friendly Materials</h3>
              <p>Sustainability is built into our workflow. We use responsibly sourced materials and environmentally conscious printing processes to reduce impact while maintaining superior results.</p>
            </div>

            <div className="capability-card">
              <div className="capability-icon">
                <Clock size={32} strokeWidth={1.5} />
              </div>
              <h3>Fast Production</h3>
              <p>Our optimized manufacturing pipeline and advanced automation allow us to meet tight deadlines with speed and accuracy — ensuring your projects are delivered on time, every time.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
    </main>
  )
}
