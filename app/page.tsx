import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Navbar from '@/components/ui/Navbar'
import ParticleBackground from '@/components/ui/ParticleBackground'

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main className="relative z-10 w-full h-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
