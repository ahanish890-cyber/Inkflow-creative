import React from 'react'
import '../styles/Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      quote: "Inkflow Creative has been our trusted partner for 5 years. Their queue management solutions transformed our passenger experience.",
      author: "Rajesh Kumar",
      company: "Airport Operations India",
      avatar: "RK"
    },
    {
      id: 2,
      rating: 5,
      quote: "The quality of their marketing materials is exceptional. Our brand visibility increased significantly after partnering with them.",
      author: "Priya Sharma",
      company: "Metro Retail",
      avatar: "PS"
    },
    {
      id: 3,
      rating: 5,
      quote: "Fast turnaround, excellent support, and outstanding results. Inkflow Creative sets the bar for our entire industry.",
      author: "Amit Patel",
      company: "Healthcare Solutions",
      avatar: "AP"
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>What Our Clients Say</h2>
          <p>Trusted by leading organizations</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="star" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
