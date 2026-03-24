import { Mail } from 'lucide-react'
import MotionSection from './ui/MotionSection'

const Contact = () => {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <MotionSection className="flex justify-center items-center gap-4 mb-14">
          <div className="h-px flex-1 bg-border max-w-20" />
          <p className="text-primary text-sm">CONTACTO</p>
          <div className="h-px flex-1 bg-border max-w-20" />
        </MotionSection>
        <MotionSection>
          <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground text-center">
            Ponte en Contacto
          </h2>
        </MotionSection>
        <MotionSection>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
            Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas
            una pregunta o solo quieras saludar, hare lo posible por
            responderte.
          </p>
        </MotionSection>
        <MotionSection>
          <button className="flex justify-center w-full">
            <a
              href="mailto:ctpablocesar@gmail.com"
              className="px-6 py-3 bg-transparent flex gap-3 rounded-md hover:bg-primary/90 transition-colors duration-300 border border-primary text-primary
            hover:text-foreground"
            >
              <Mail />
              Saludar
            </a>
          </button>
        </MotionSection>
      </div>
    </section>
  )
}

export default Contact
