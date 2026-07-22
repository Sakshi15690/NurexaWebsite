import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function AnimatedSection({ children, className = '', delay = 0, direction = 'up', duration = 0.6, once = true }) {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) {
      setInView(true)
      return undefined
    }

    const node = ref.current
    if (!node) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          if (once) observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [once, shouldReduceMotion])

  const directionOffset = direction === 'left' ? -20 : direction === 'right' ? 20 : 20

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: directionOffset, x: direction === 'left' ? -12 : direction === 'right' ? 12 : 0 }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: directionOffset, x: direction === 'left' ? -12 : direction === 'right' ? 12 : 0 }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
