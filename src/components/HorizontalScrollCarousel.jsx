'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '../styles/HorizontalScrollCarousel.css'

gsap.registerPlugin(ScrollTrigger)

export function HorizontalScrollCarousel({ images = [] }) {
  const containerRef = useRef(null)
  const carouselRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !carouselRef.current || images.length === 0) return

    // Create the horizontal scroll animation
    gsap.to(carouselRef.current, {
      x: () => -(carouselRef.current.scrollWidth - window.innerWidth),
      ease: 'sine.inOut',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: () => '+=' + (carouselRef.current.scrollWidth - window.innerWidth),
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [images])

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div ref={containerRef} className="horizontal-scroll-container">
      <div ref={carouselRef} className="horizontal-scroll-carousel">
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="carousel-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default HorizontalScrollCarousel
