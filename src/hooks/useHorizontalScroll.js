import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useHorizontalScroll(selector = '.horizontal') {
  const containerRef = useRef(null)

  useEffect(() => {
    const element = document.querySelector(selector)
    if (!element) return

    const proxy = { skew: 0, skewSetter(value) {
      this.skew = value
      gsap.set(element, { skewY: value })
    }, skewGetter() {
      return Math.min(this.skew, 0)
    }, onPress() {
      this.isPressed = true
    }, onRelease() {
      this.isPressed = false
    } },
    smokeFlick = gsap.quickSetter(element, 'skewY', 'deg'),
    clamp = gsap.utils.clamp(-20, 20)

    gsap.set(element, { transformOrigin: 'center center', force3D: true })

    ScrollTrigger.create({
      onUpdate: (self) => {
        let skew = clamp(self.getVelocity() / 300)
        // only do something if it's MORE different than the last value
        if (Math.abs(skew) > Math.abs(proxy.skew)) {
          proxy.skewSetter(skew)
        }
      }
    })

    gsap.set(element, { skewY: 0, force3D: true }, 0.1)

    gsap.to(element, {
      skewY: 0,
      duration: 1,
      ease: 'power1.inOut',
      scrollTrigger: { trigger: element, start: 'center center' }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [selector])

  return containerRef
}

export default useHorizontalScroll
