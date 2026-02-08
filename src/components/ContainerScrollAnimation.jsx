import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../styles/ContainerScrollAnimation.css'

gsap.registerPlugin(ScrollTrigger)

export function ContainerScrollAnimation({ titleComponent, children }) {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 0.5,
          markers: false,
        },
      }
    )

    // Image animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'top 10%',
          scrub: 0.5,
          markers: false,
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="container-scroll" ref={containerRef}>
      <div className="scroll-container">
        <div className="scroll-title-wrapper">
          <div className="scroll-title" ref={titleRef}>
            {titleComponent}
          </div>
        </div>
        
        <div className="scroll-image-wrapper" ref={imageRef}>
          {children}
        </div>
      </div>
    </div>
  )
}
