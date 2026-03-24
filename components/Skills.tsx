import MotionSection from './ui/MotionSection'
import Section from './ui/Section'

interface SkillItem {
  category: string
  skills: string[]
}

const Skills = () => {
  const skillItems: SkillItem[] = [
    {
      category: 'Lenguajes de programación',
      skills: ['TypeScript', 'JavaScript', 'PHP', 'Dart', 'Python']
    },
    {
      category: 'Librerías y Frameworks',
      skills: [
        'Tailwind',
        'Bootstrap',
        'NodeJs',
        'ExpressJs',
        'NextJs',
        'ReactJs',
        'VueJs',
        'Redux',
        'Zustand',
        'Laravel',
        'React Native',
        'Ionic',
        'Flutter',
        'Git',
        'Docker',
        'HTML5',
        'CSS3'
      ]
    },
    {
      category: 'Bases de datos y otras herramientas',
      skills: [
        'MongoDB',
        'MySQL',
        'PostgreSQL',
        'Firebase',
        'Linux',
        'Ubuntu Server',
        'Nginx',
        'Apache',
        'AWS'
      ]
    }
  ]

  return (
    <Section
      title="Tecnologias y Herramientas"
      section="HABILIDADES"
      id="skills"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-10">
        {skillItems.map((skill, i) => (
          <SkillCard key={i} skill={skill} delay={i * 0.2} />
        ))}
      </div>
    </Section>
  )
}

const SkillCard = ({ skill, delay }: { skill: SkillItem; delay: number }) => (
  <MotionSection
    delay={delay}
    className="p-5 bg-card border border-border rounded-md text-center flex flex-col justify-start items-start group hover:border-primary/40 transition-all"
  >
    <p className="text-md font-medium text-primary text-left">
      {skill.category}
    </p>
    <ol className="mt-2 space-y-1 text-sm text-muted-foreground list-disc pl-6 text-left marker:text-primary group-hover:text-white transition-colors duration-300">
      {skill.skills.map((s, i) => (
        <li key={i}>{s}</li>
      ))}
    </ol>
  </MotionSection>
)

export default Skills
