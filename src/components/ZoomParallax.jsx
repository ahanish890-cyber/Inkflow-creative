'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '../styles/ZoomParallax.css'

gsap.registerPlugin(ScrollTrigger)

export function ZoomParallax({ children, className = '' }) {
  const containerRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return

    // Create zoom parallax effect
    gsap.to(contentRef.current, {
      scale: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
    })

    // Add opacity fade effect
    gsap.to(contentRef.current, {
      opacity: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className={`zoom-parallax-container ${className}`}>
      <div ref={contentRef} className="zoom-parallax-content">
        {children}
      </div>
    </div>
  )
}

export default ZoomParallax
