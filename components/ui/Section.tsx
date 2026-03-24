'use client'
import React from 'react'
import MotionSection from './MotionSection'

const Section = ({
  section,
  title,
  children,
  id
}: {
  section: string
  title: string
  children: React.ReactNode
  id: string
}) => {
  return (
    <section id={id} className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <MotionSection className="flex items-center gap-4 mb-8">
          <p className="text-primary text-sm">{section}</p>
          <div className="h-px flex-1 bg-border" />
        </MotionSection>
        <MotionSection>
          <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground">
            {title}
          </h2>
        </MotionSection>
        {children}
      </div>
    </section>
  )
}

export default Section
