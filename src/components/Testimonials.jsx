import React from 'react'
import '../styles/Testimonials.css'
import TextType from './TextType'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Inkflow Creative has been our trusted partner for 5 years. Their queue management solutions transformed our passenger experience.",
      author: "Rajesh Kumar",
      role: "Airport Operations India"
    },
    {
      id: 2,
      quote: "The quality of their marketing materials is exceptional. Our brand visibility increased significantly after partnering with them.",
      author: "Priya Sharma",
      role: "Metro Retail"
    },
    {
      id: 3,
      quote: "Fast turnaround, excellent support, and outstanding results. Inkflow Creative sets the bar for our entire industry.",
      author: "Amit Patel",
      role: "Healthcare Solutions"
    }
  ]

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>
            <TextType 
              text="What Our Clients Say"
              typingSpeed={50}
              pauseDuration={2000}
              showCursor={false}
            />
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-mark">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5C5.5 0 3 2.75 3 4c0 1 0 1 1 3 1 2 1 4 1 6s0 5-1 6c-1 2-1 2-1 3s1.008 3 3 3z" />
                </svg>
              </div>
              
              <p className="testimonial-quote">{testimonial.quote}</p>
              
              <div className="testimonial-footer">
                <div className="author-name">{testimonial.author}</div>
                <div className="author-role">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
