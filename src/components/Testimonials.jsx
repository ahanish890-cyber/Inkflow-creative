import React, { useState } from 'react'
import '../styles/Testimonials.css'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      quote: "Inkflow Creative has been our trusted partner for 5 years. Their queue management solutions transformed our passenger experience dramatically.",
      author: "Rajesh Kumar",
      role: "Airport Operations India",
      company: "Airport Operations",
      rating: 5,
      image: "👔"
    },
    {
      id: 2,
      quote: "The quality of their marketing materials is exceptional. Our brand visibility increased significantly after partnering with them.",
      author: "Priya Sharma",
      role: "Metro Retail",
      company: "Retail Management",
      rating: 5,
      image: "💼"
    },
    {
      id: 3,
      quote: "Fast turnaround, excellent support, and outstanding results. Inkflow Creative sets the bar for our entire industry.",
      author: "Amit Patel",
      role: "Healthcare Solutions",
      company: "Healthcare",
      rating: 5,
      image: "🏥"
    },
    {
      id: 4,
      quote: "Professional service combined with innovative thinking. They understood our requirements perfectly and delivered beyond expectations.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Digital Marketing",
      rating: 5,
      image: "📱"
    }
  ]

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="header-top">
            <h2>Client Success Stories</h2>
            <p>Hear what industry leaders say about working with us</p>
          </div>
        </div>

        <div className="testimonials-carousel">
          <div className="carousel-content">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}
              >
                <div className="testimonial-card-premium">
                  <div className="card-header">
                    <div className="client-info">
                      <div className="client-avatar">{testimonial.image}</div>
                      <div className="client-details">
                        <p className="client-name">{testimonial.author}</p>
                        <p className="client-company">{testimonial.company}</p>
                      </div>
                    </div>
                    <div className="rating-badge">
                      <div className="stars">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={16} className="star-icon" />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="quote-mark-large">"</div>
                    <p className="testimonial-text">{testimonial.quote}</p>
                  </div>

                  <div className="card-footer">
                    <span className="role-tag">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="carousel-controls">
            <button className="carousel-btn prev" onClick={handlePrev} aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-btn next" onClick={handleNext} aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
