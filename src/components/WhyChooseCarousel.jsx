import { useEffect, useRef, useState } from 'react'

export default function WhyChooseCarousel() {
  const carouselRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 400
      carouselRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })
      setTimeout(checkScroll, 400)
    }
  }

  return (
    <>
      <div 
        className="why-choose-carousel" 
        id="whyChooseCarousel"
        ref={carouselRef}
        onScroll={checkScroll}
      >
        <div className="why-card">
          <div className="why-card-icon">✨</div>
          <h3>Premium Quality</h3>
          <p>We use only the finest materials and state-of-the-art printing technology to ensure every product meets the highest standards of durability and visual appeal.</p>
          <button className="why-card-btn">+</button>
        </div>

        <div className="why-card">
          <div className="why-card-icon">⚡</div>
          <h3>Rapid Delivery</h3>
          <p>Our streamlined production process and efficient workflow management ensure quick turnaround times without compromising on quality.</p>
          <button className="why-card-btn">+</button>
        </div>

        <div className="why-card">
          <div className="why-card-icon">🎨</div>
          <h3>Custom Solutions</h3>
          <p>Every project is unique. We work closely with clients to develop tailored solutions that perfectly match their specific requirements and branding needs.</p>
          <button className="why-card-btn">+</button>
        </div>

        <div className="why-card">
          <div className="why-card-icon">👥</div>
          <h3>Expert Team</h3>
          <p>Our experienced professionals bring years of industry knowledge to every project, ensuring optimal results and innovative solutions.</p>
          <button className="why-card-btn">+</button>
        </div>

        <div className="why-card">
          <div className="why-card-icon">💰</div>
          <h3>Fair Pricing</h3>
          <p>We offer competitive, transparent pricing with no hidden costs, providing excellent value for premium quality printing services.</p>
          <button className="why-card-btn">+</button>
        </div>

        <div className="why-card">
          <div className="why-card-icon">🎧</div>
          <h3>24/7 Support</h3>
          <p>Our dedicated customer support team is always available to assist you throughout the entire process, from initial consultation to final delivery.</p>
          <button className="why-card-btn">+</button>
        </div>
      </div>

      <div className="why-choose-pagination">
        <button 
          className="pagination-btn prev" 
          onClick={() => scroll('prev')}
          disabled={!canScrollLeft}
        >
          ‹
        </button>
        <button 
          className="pagination-btn next" 
          onClick={() => scroll('next')}
          disabled={!canScrollRight}
        >
          ›
        </button>
      </div>
    </>
  )
}
