import React, { useState } from 'react'
import '../styles/FAQSection.css'
import TextType from './TextType'

export default function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const faqsLeft = [
    {
      question: "What printing services does Inkflow Creative offer?",
      answer: "We specialize in queue management printing belts, marketing collaterals, and custom printing solutions. Our in-house facility in Bengaluru handles everything from design to production with premium quality standards."
    },
    {
      question: "What is your typical turnaround time?",
      answer: "Our standard turnaround is 5-7 business days. We also offer rush services with expedited rates. Custom projects and large bulk orders may have different timelines—contact us for specific quotes."
    },
    {
      question: "Do you offer custom design services?",
      answer: "Absolutely. Our design team can assist with design concepts, revisions, and production-ready file preparation. We work closely with you to ensure your vision comes to life perfectly."
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept PDF, AI, PSD, EPS, and high-resolution JPEG files. CMYK color mode is recommended for print projects. We also offer pre-print consultation to ensure optimal quality."
    },
    {
      question: "Is there a minimum order quantity?",
      answer: "We accommodate orders of all sizes, from small institutional printing to large bulk corporate orders. Volume-based pricing is available for quantities above 1000 units."
    }
  ]

  const faqsRight = [
    {
      question: "What materials do you use for queue management belts?",
      answer: "We use premium durable materials including weather-resistant fabrics and high-grade aluminum. All materials are tested for tensile strength and corrosion resistance before production."
    },
    {
      question: "Can you handle large bulk orders?",
      answer: "Yes, we specialize in high-volume corporate printing. We have dedicated account managers for bulk orders and offer volume-based pricing with flexible delivery schedules."
    },
    {
      question: "Do you offer different finish options?",
      answer: "Yes, we offer matte, glossy, and specialty finishes. We also provide HD sublimation printing for vibrant colors that won't fade, even in outdoor environments."
    },
    {
      question: "What is your quality assurance process?",
      answer: "Every batch undergoes rigorous testing including color accuracy checks, material strength verification, and print quality inspection. Our ISO 9001 certification ensures consistent excellence."
    },
    {
      question: "How do I request a quote?",
      answer: "Simply contact us through our website or call our sales team. We'll need details about your project specifications, quantity, materials, and timeline. We provide detailed quotes within 24 business hours."
    }
  ]

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-wrapper">
        <div className="faq-title">
          <h2>
            <TextType 
              text="Frequently Asked Questions"
              typingSpeed={50}
              pauseDuration={2000}
              showCursor={false}
            />
          </h2>
        </div>

        <div className="faq-button-container">
          <button className="faq-help-button">See Full Help Center →</button>
        </div>

        <div className="faq-content">
          <div className="faq-column">
            {faqsLeft.map((faq, index) => (
              <div key={index} className="accordion-item">
                <button
                  className={`accordion-trigger ${expandedFAQ === index ? 'open' : ''}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={expandedFAQ === index}
                >
                  <span className="trigger-text">{faq.question}</span>
                  <svg 
                    className="trigger-icon"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`accordion-content ${expandedFAQ === index ? 'visible' : ''}`}>
                  <div className="content-inner">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="faq-column">
            {faqsRight.map((faq, index) => (
              <div key={index + 5} className="accordion-item">
                <button
                  className={`accordion-trigger ${expandedFAQ === index + 5 ? 'open' : ''}`}
                  onClick={() => toggleFAQ(index + 5)}
                  aria-expanded={expandedFAQ === index + 5}
                >
                  <span className="trigger-text">{faq.question}</span>
                  <svg 
                    className="trigger-icon"
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                <div className={`accordion-content ${expandedFAQ === index + 5 ? 'visible' : ''}`}>
                  <div className="content-inner">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
