import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGSAPAnimations() {
  useEffect(() => {
    // Wait for page to be fully loaded
    const timeout = setTimeout(() => {
      // ✅ PREMIUM SCROLL CONTAINER ANIMATION (Fade + Scale + Y)
      gsap.utils.toArray('.scroll-container').forEach((container) => {
        gsap.fromTo(
          container,
          {
            opacity: 0,
            y: 80,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: container,
              start: 'top 80%',
              markers: false,
              toggleActions: 'play none none reverse',
            },
          }
        )
      })

      // ✅ STAGGER INNER ELEMENTS (Extra Polish)
      gsap.utils.toArray('.scroll-container').forEach((container) => {
        gsap.from(container.children, {
          opacity: 0,
          y: 30,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
            markers: false,
          },
        })
      })

      // ✅ BLUR REVEAL EFFECT (Luxury Touch)
      gsap.utils.toArray('[data-blur-in]').forEach((element) => {
        gsap.to(element, {
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            markers: false,
          },
        })
      })

      // Universal fade-up for all sections (fallback)
      gsap.utils.toArray('section:not(.scroll-container)').forEach(section => {
        if (!section.classList.contains('hero') && !section.classList.contains('scroll-container')) {
          gsap.from(section, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
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
