'use client'
import { motion, useInView } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface MotionSectionProps {
  children?: ReactNode
  className?: string
  delay?: number
}

const MotionSection = ({
  children,
  className,
  delay = 0
}: MotionSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default MotionSection
