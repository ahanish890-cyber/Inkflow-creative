import React, { useRef, useEffect, useState } from 'react'
import '../styles/ContainerScrollAnimation.css'

export function ContainerScrollAnimation({ titleComponent, children }) {
  const containerRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className={`container-scroll ${isInView ? 'in-view' : ''}`} ref={containerRef}>
      <div className="scroll-container">
        <div className="scroll-title-wrapper">
          <div className="scroll-title">
            {titleComponent}
          </div>
        </div>
        
        <div className="scroll-image-wrapper">
          {children}
        </div>
      </div>
    </div>
  )
}
