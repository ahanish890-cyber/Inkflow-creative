'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '../styles/TextReveal.css'

gsap.registerPlugin(ScrollTrigger)

export function TextReveal({ text, className = '', delay = 0 }) {
  const textRef = useRef(null)

  useEffect(() => {
    if (!textRef.current) return

    // Split text into spans
    const words = text.split(' ')
    textRef.current.innerHTML = words
      .map(word => `<span class="reveal-word">${word}</span>`)
      .join(' ')

    // Animate each word
    gsap.from('.reveal-word', {
      opacity: 0,
      y: 80,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      delay: delay,
      scrollTrigger: {
        trigger: textRef.current,
        start: 'top 80%',
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [text, delay])

  return (
    <div ref={textRef} className={`text-reveal ${className}`}>
      {text}
    </div>
  )
}

export default TextReveal
