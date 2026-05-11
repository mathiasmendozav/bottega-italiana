import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
