'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import '../styles/VideoScroll.css'

gsap.registerPlugin(ScrollTrigger)

export function VideoScroll({ src, className = '' }) {
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!videoRef.current || !containerRef.current) return

    const video = videoRef.current

    // Make sure video is loaded
    video.addEventListener('loadedmetadata', () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onUpdate: (self) => {
          if (video.duration) {
            video.currentTime = self.progress * video.duration
          }
        },
        markers: false,
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [src])

  return (
    <div ref={containerRef} className={`video-scroll-container ${className}`}>
      <video
        ref={videoRef}
        src={src}
        className="video-scroll-element"
        preload="metadata"
      />
    </div>
  )
}

export default VideoScroll
