import React from 'react'
import './TestimonialSection.css'

function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: "Inkflow Creative has been our trusted partner for 5 years. Their queue management solutions transformed our passenger experience.",
      author: "Rajesh Kumar",
      role: "Airport Operations India"
    },
    {
      id: 2,
      rating: 5,
      quote: "The quality of their marketing materials is exceptional. Our brand visibility increased significantly after partnering with them.",
      author: "Priya Sharma",
      role: "Metro Retail"
    },
    {
      id: 3,
      rating: 5,
      quote: "Fast turnaround, excellent support, and outstanding results. Inkflow Creative sets the bar for our entire industry.",
      author: "Amit Patel",
      role: "Healthcare Solutions"
    }
  ]

  return (
    <section className="testimonial-section">
      <div className="testimonial-eyebrow">PROVEN AUTHORITY</div>
      <h2>What Our<br /><span>Clients Say</span></h2>
      <div className="testimonials-wrapper">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="quote-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5C5.5 0 3 2.75 3 4c0 1 0 1 1 3 1 2 1 4 1 6s0 5-1 6c-1 2-1 2-1 3s1.008 3 3 3z" />
              </svg>
            </div>

            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <svg key={i} className="star" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            
          
            
            <div className="testimonial-footer">
              <div className="author-name">{testimonial.author}</div>
              <div className="author-role">{testimonial.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection

