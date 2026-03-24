import MotionSection from './ui/MotionSection'
import Section from './ui/Section'

interface ExperienceItem {
  title: string
  company: string
  date: string
  description: string
  skills: string[]
}

const Experience = () => {
  const experience: ExperienceItem[] = [
    {
      title: 'Gerente de TI y Líder Técnico',
      company: 'Vecinos Comprometidos',
      date: 'Septiembre 2022 - Presente',
      description:
        'Dirijo el departamento de TI, combinando desarrollo Full Stack con gestión de infraestructura y soporte. He trabajado en la evolución de un ERP (MERN) y mantenimiento de sistemas legacy, además de desarrollar APIs para facturación y pagos. También participé en el desarrollo de una app móvil con Flutter y en la administración de servidores Ubuntu, asegurando rendimiento, disponibilidad y seguridad.',
      skills: [
        'ReactJs',
        'NextJs',
        'Flutter',
        'NodeJs',
        'Express',
        'MongoDB',
        'Linux'
      ]
    },
    {
      title: 'Desarrollador Frontend',
      company: 'CPC Durango',
      date: 'Febrero 2022 - Septiembre 2022',
      description:
        'Lideré el desarrollo de la página web para el Consejo de Participación Ciudadana de Durango (CPC Durango), coordinando un equipo de desarrollo y asegurando la entrega oportuna y de calidad del proyecto. Me encargué del mantenimiento continuo de la página web, realizando actualizaciones periódicas y asegurando su funcionalidad óptima. Realicé tareas de diseño multimedia, incluyendo la creación de un video de presentación del trabajo realizado durante el año, destacando los logros y servicios ofrecidos.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'PHP']
    }
  ]

  return (
    <Section title="Donde He Trabajado" section="EXPERIENCIA" id="experience">
      <div className="w-full flex flex-col gap-10">
        {experience.map((item, i) => (
          <ExperienceCard key={i} item={item} />
        ))}
      </div>
    </Section>
  )
}

const ExperienceCard = ({ item }: { item: ExperienceItem }) => (
  <MotionSection className="group flex gap-4 rounded-lg border border-transparent p-5 transition-all duration-300 hover:border-border hover:bg-card hover:shadow-[0_0_30px_rgba(79,209,197,0.04)]">
    <div className="w-1/4 text-sm text-muted-foreground">{item.date}</div>
    <div className="w-3/4 space-y-2">
      <h3 className="text-lg font-semibold">
        {item.title} ·<span className="text-primary"> {item.company}</span>
      </h3>
      <p className="text-sm text-justify text-muted-foreground">
        {item.description}
      </p>
      <div className="space-x-2 pt-3">
        {item.skills.map((skill) => (
          <Chip key={skill} label={skill} />
        ))}
      </div>
    </div>
  </MotionSection>
)

const Chip = ({ label }: { label: string }) => (
  <div className="inline-flex items-center gap-2 rounded-md bg-primary/30 px-3 py-1 text-xs font-medium text-primary border border-primary/60">
    {label}
  </div>
)

export default Experience
