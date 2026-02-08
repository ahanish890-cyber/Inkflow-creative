import { useEffect, useRef } from 'react'

export function useParallax(speed = 0.5) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const handleScroll = () => {
      const element = ref.current
      if (!element) return

      const elementRect = element.getBoundingClientRect()
      const elementTop = elementRect.top
      const elementHeight = elementRect.height
      const windowHeight = window.innerHeight

      // Only animate when element is in viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const progress = 1 - (elementTop / windowHeight)
        const offset = progress * 100 * speed
        element.style.transform = `translateY(${offset}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return ref
}

export default useParallax
