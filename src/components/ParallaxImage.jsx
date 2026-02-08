'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '../styles/ParallaxImage.css'

gsap.registerPlugin(ScrollTrigger)

export function ParallaxImage({ src, alt = '', offset = 150, className = '' }) {
  const containerRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return

    gsap.to(imageRef.current, {
      y: -offset,
      ease: 'none',
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
  }, [offset])

  return (
    <div ref={containerRef} className={`parallax-container ${className}`}>
      <img ref={imageRef} src={src} alt={alt} className="parallax-image" loading="lazy" />
    </div>
  )
}

export default ParallaxImage
