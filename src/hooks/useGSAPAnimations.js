import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGSAPAnimations() {
  useEffect(() => {
    // Wait for page to be fully loaded
    const timeout = setTimeout(() => {
      // Universal fade-up for all sections
      gsap.utils.toArray('section').forEach(section => {
        if (!section.classList.contains('hero')) {
          gsap.from(section, {
            opacity: 0,
            y: 80,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              markers: false,
            },
          })
        }
      })

      // Hero title animation - sticky zoom effect
      const heroH1 = document.querySelector('.hero h1')
      if (heroH1) {
        gsap.to(heroH1, {
          scale: 0.85,
          opacity: 0,
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
            markers: false,
          },
        })
      }

      // Parallax effect for images with data attribute
      gsap.utils.toArray('[data-parallax]').forEach(element => {
        gsap.to(element, {
          y: -120,
          scrollTrigger: {
            trigger: element,
            scrub: 0.6,
            markers: false,
          },
        })
      })

      // Text reveal animation - line by line
      gsap.utils.toArray('[data-reveal]').forEach(element => {
        const chars = element.querySelectorAll('span')
        if (chars.length > 0) {
          gsap.from(chars, {
            y: 80,
            opacity: 0,
            stagger: 0.05,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: element,
              start: 'top 80%',
              markers: false,
            },
          })
        }
      })

      // Hover stagger effect for cards
      document.querySelectorAll('[data-card-hover]').forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -12,
            duration: 0.4,
            ease: 'power2.out',
          })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.4,
            ease: 'power2.out',
          })
        })
      })
    }, 100)

    return () => {
      clearTimeout(timeout)
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}

export default useGSAPAnimations
