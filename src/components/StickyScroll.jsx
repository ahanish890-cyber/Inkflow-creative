'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '../styles/StickyScroll.css'

gsap.registerPlugin(ScrollTrigger)

export function StickyScroll({ children, className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create a pin animation
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: true,
      pinSpacing: true,
      markers: false,
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className={`sticky-scroll-section ${className}`}>
      {children}
    </div>
  )
}

export default StickyScroll
