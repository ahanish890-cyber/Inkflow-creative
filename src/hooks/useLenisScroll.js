import { useEffect } from 'react'

export function useLenisScroll() {
  useEffect(() => {
    // Dynamic import for Lenis to avoid SSR issues
    const initializeLenis = async () => {
      try {
        const Lenis = (await import('@studio-freight/lenis')).default
        
        const lenis = new Lenis({
          duration: 1.1,
          smoothWheel: true,
          smoothTouch: false,
          wheelMultiplier: 0.9,
          lerp: 0.08,
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
