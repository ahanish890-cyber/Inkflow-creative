import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useTextReveal(triggerSelector) {
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return

    const text = ref.current
    const lines = text.querySelectorAll('span')
    
    if (lines.length === 0) return

    gsap.from(lines, {
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: triggerSelector || text,
        start: 'top 75%',
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [triggerSelector])

  return ref
}

export default useTextReveal
