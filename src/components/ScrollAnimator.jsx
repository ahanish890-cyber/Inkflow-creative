'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ScrollAnimator({ 
  children, 
  animation = 'fadeUp', // fadeUp, scale, slideLeft, slideRight
  duration = 0.8,
  delay = 0,
  className = ''
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const getAnimationConfig = () => {
      const baseConfig = {
        duration,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          markers: false,
        },
      }

      switch (animation) {
        case 'fadeUp':
          return { ...baseConfig, from: { opacity: 0, y: 60 } }
        case 'scale':
          return { ...baseConfig, from: { opacity: 0, scale: 0.8 } }
        case 'slideLeft':
          return { ...baseConfig, from: { opacity: 0, x: -60 } }
        case 'slideRight':
          return { ...baseConfig, from: { opacity: 0, x: 60 } }
        default:
          return { ...baseConfig, from: { opacity: 0 } }
      }
    }

    const config = getAnimationConfig()
    gsap.from(ref.current, { ...config.from, ...config })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animation, duration, delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default ScrollAnimator
