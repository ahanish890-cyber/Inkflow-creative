import { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenisScroll() {
  useEffect(() => {
    // Dynamic import for Lenis to avoid SSR issues
    const initializeLenis = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default
        
        const lenis = new Lenis({
          duration: 0.6,
          smooth: true,
          direction: 'vertical',
          gestureDirection: 'vertical',
          wheelMultiplier: 1.3,
          smoothTouch: true,
          touchMultiplier: 1.5,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        })

        function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        return () => {
          lenis.destroy()
        }
      } catch (error) {
        console.log('Lenis not available, using default scroll')
      }
    }

    const cleanup = initializeLenis()
    return () => {
      cleanup.then(c => c?.())
    }
  }, [])
}

export default useLenisScroll
