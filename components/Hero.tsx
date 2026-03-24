'use client'

import { motion } from 'framer-motion'
import { ArrowDown, FileText } from 'lucide-react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      {/* 3D Scene background */}
      {/* <HeroScene /> */}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-sm font-medium tracking-widest uppercase text-primary"
        >
          HOLA, SOY
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-2 text-5xl font-bold tracking-tight text-foreground md:text-7xl text-balance"
        >
          Pablo Cesar Cordova Tapia
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 text-2xl font-medium text-primary md:text-3xl"
        >
          Desarrollador Full Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg text-pretty"
        >
          Desarrollador Full Stack enfocado en el desarrollo de soluciones
          escalables de extremo a extremo, con experiencia liderando equipos y
          construyendo sistemas empresariales, pagos en línea y aplicaciones en
          tiempo real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 hover:shadow-[0_0_24px_rgba(79,209,197,0.3)]"
          >
            Ver mi trabajo
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1UrMMmmPmlmLlWKkwLPXkX8_NSklff7AQ/view?usp=sharing"
            target="_blank"
            className="group inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-6 py-3 text-sm font-medium text-secondary-foreground transition-all hover:bg-muted hover:border-primary/40"
          >
            <FileText className="h-4 w-4" />
            Descargar CV
          </Link>
        </motion.div>
      </div>

      {/* Scroll icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border-2 border-muted-foreground/30 p-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="h-2 w-1 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
