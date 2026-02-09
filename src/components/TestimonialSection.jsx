import React from 'react'
import { Star } from 'lucide-react'
import './TestimonialSection.css'

function TestimonialSection() {
  const testimonialData = [
    {
      name: "Rajesh Malhotra",
      role: "COO, Terminal Ops",
      company: "IGI Airport",
      quote: "Inkflow re-engineered our passenger flow dynamics during the peak season. It was a transformation that set a new standard for our terminals.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
      rating: 5
    },
    {
      name: "Sneha Kapur",
      role: "VP Brand Experience",
      company: "Westfield Retail",
      quote: "The Stealth Matte series is a dream come true for our architects. Zero glare and impeccable finish that perfectly aligns with our brand.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
      rating: 5
    },
    {
      name: "Vikram Singh",
      role: "Head of Infrastructure",
      company: "Metro Rail",
      quote: "In transit hubs, equipment takes extreme abuse. These units show zero wear after 24 months. Truly a world-class engineering feat.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
      rating: 5
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={18}
        className={`star ${i < rating ? 'filled' : ''}`}
        strokeWidth={2}
      />
    ))
  }

  return (
    <section id="testimonials" className="testimonial-section">
      <div className="testimonial-bg-glow"></div>
      
      <div className="testimonial-container">
        <div className="testimonial-header">
          <h2 className="testimonial-title">
            What Our <span className="testimonial-accent">Clients</span> Say
          </h2>
          <div className="testimonial-divider"></div>
        </div>
        <div className="testimonial-grid">
          {testimonialData.map((item, index) => (
            <div key={index} className="testimonial-card-wrapper">
              <div className="testimonial-card">
                <div className="quote-icon">"</div>
                
                <div className="star-rating">
                  {renderStars(item.rating)}
                </div>

                <div className="testimonial-content">
                  <p className="testimonial-quote">{item.quote}</p>
                </div>

                <div className="testimonial-footer">
                  <div className="testimonial-profile">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="testimonial-profile-img"
                    />
                  </div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{item.name}</h4>
                    <p className="testimonial-role">{item.role}, {item.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection

