import MotionSection from './ui/MotionSection'
import Section from './ui/Section'

const About = () => {
  const pharagraphs = [
    'Soy un desarrollador Full Stack con experiencia en la construcción de soluciones completas, participando en todo el ciclo de vida del software, desde la planeación hasta la implementación y mantenimiento. Me especializo en tecnologías del ecosistema JavaScript, principalmente React, Next.js y Node.js con Express, complementando con MongoDB y desarrollo móvil multiplataforma con Flutter.',
    'Actualmente me desempeño como gerente del departamento de TI, liderando un equipo de desarrollo y coordinando la planificación y ejecución de proyectos. Esta experiencia me ha permitido desarrollar una visión integral sobre arquitectura de software, toma de decisiones técnicas y construcción de sistemas escalables y eficientes.',
    'He trabajado en el desarrollo de sistemas empresariales complejos, incluyendo un ERP con funcionalidades de CRM, plataformas para clientes con gestión de cartera y pagos en línea, así como aplicaciones en tiempo real utilizando WebSockets. Entre mis principales aportaciones se encuentran la integración de pasarelas de pago seguras con suscripciones y almacenamiento de métodos de pago, así como la implementación de sistemas de facturación electrónica, incluyendo procesos avanzados como el manejo de XML firmado, certificados digitales y lógica fiscal para nómina.',
    'También he participado en la resolución de incidentes críticos deseguridad, fortaleciendo la infraestructura y garantizando lacontinuidad operativa de los sistemas. Mi enfoque está en resolverproblemas complejos, optimizar procesos técnicos y asegurar ladisponibilidad de las plataformas.',
    'Fuera del ámbito profesional, disfruto mantener un estilo de vidaactivo, entrenando en el gimnasio, además de interesarme por losvideojuegos, la música, el cine y viajar.    '
  ]

  return (
    <Section title="Sobre Mi" section="SOBRE MI" id="about">
      <div className="w-full flex gap-10">
        <div className="w-full md:w-3/4 flex flex-col gap-5">
          <MotionSection className="text-justify text-muted-foreground">
            {pharagraphs.map((p, i) => (
              <p key={i} className="mb-4">
                {p}
              </p>
            ))}
          </MotionSection>
        </div>
        <div className="hidden md:block w-1/4 relative group cursor-pointer">
          <MotionSection className="h-64 w-64 rounded-lg border-2 border-primary/20 bg-secondary transition-all duration-300 group-hover:border-primary/40" />
          <MotionSection className="absolute top-3 left-3 h-64 w-64 rounded-lg border-2 border-primary/40 transition-all duration-300 group-hover:top-4 group-hover:left-4 items-center justify-center flex">
            {/* Imagen pendiente */}
          </MotionSection>
        </div>
      </div>
    </Section>
  )
}

export default About
