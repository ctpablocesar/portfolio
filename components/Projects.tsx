'use client'
import {
  ArrowUpRight,
  CheckCircle,
  ExternalLink,
  Folder,
  Github,
  Lock,
  Rocket,
  Target,
  Wrench,
  X,
  Zap
} from 'lucide-react'
import { useState } from 'react'
import MotionSection from './ui/MotionSection'
import Section from './ui/Section'

interface ExperienceItem {
  id: string
  title: string
  description: string
  technologies: string[]

  // Navegación
  href?: string
  repoUrl?: string
  liveUrl?: string
  isPrivate?: boolean

  // Drawer / detalle
  problem?: string
  solution?: string
  responsibilities?: string
  features?: string[]
  challenges?: string[]
  impact?: string[]

  // Extra
  category?: 'web' | 'mobile' | 'backend' | 'fullstack'
}

const Projects = () => {
  const projects: ExperienceItem[] = [
    {
      id: 'erp-vecinos',
      title: 'Sistema ERP Empresarial',
      description:
        'Plataforma interna para la gestión de operaciones, finanzas, recursos humanos y atención a clientes con funcionalidades en tiempo real.',
      technologies: [
        'Next.js',
        'Node.js',
        'MongoDB',
        'Socket.IO',
        'Firebase',
        'OpenPay'
      ],
      isPrivate: true,

      problem:
        'Centralizar múltiples procesos empresariales en un solo sistema escalable y seguro.',

      solution:
        'Desarrollo de un sistema modular basado en Next.js con control de roles y funcionalidades en tiempo real.',

      responsibilities:
        'Liderazgo técnico, desarrollo full stack, arquitectura del sistema y gestión del equipo.',

      features: [
        'Sistema multi-rol con control de acceso',
        'Generación de más de 50 tipos de PDFs',
        'Notificaciones en tiempo real',
        'Integración de pagos',
        'Exportación a Excel'
      ],

      challenges: [
        'Manejo de roles complejos',
        'Generación de documentos fiscales',
        'Sincronización en tiempo real'
      ],

      impact: [
        '+50 usuarios activos diarios',
        'Automatización de procesos internos',
        'Mejora en eficiencia operativa'
      ],
      category: 'fullstack'
    },
    {
      id: 'tic-tac-toe-realtime',

      title: 'Tic-Tac-Toe Multijugador en Tiempo Real',

      description:
        'Juego multijugador en tiempo real con salas privadas, sincronización mediante WebSockets y arquitectura basada en monorepo.',

      technologies: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'Socket.IO',
        'Zustand',
        'Turborepo'
      ],

      repoUrl: 'https://github.com/ctpablocesar/tic-tac-toe-realtime',
      isPrivate: false,

      problem:
        'Construir una experiencia multijugador en tiempo real donde dos jugadores puedan interactuar de forma sincronizada, manteniendo el estado del juego consistente entre clientes.',

      solution:
        'Desarrollo de un juego cliente-servidor utilizando WebSockets con Socket.IO, implementando salas privadas, sincronización de estado en tiempo real y lógica centralizada en el backend.',

      responsibilities:
        'Desarrollo full stack del proyecto, incluyendo diseño de arquitectura en monorepo, implementación de lógica de juego en backend y sincronización en tiempo real entre clientes.',

      features: [
        'Partidas multijugador en tiempo real',
        'Creación de salas con código único',
        'Unión a partidas mediante código compartido',
        'Detección automática de ganador y empate',
        'Sistema de revancha con confirmación de ambos jugadores',
        'Marcador de victorias por sesión',
        'Notificación de desconexión de oponentes',
        'Interfaz visual con tema neón'
      ],

      challenges: [
        'Sincronización consistente del estado del juego entre múltiples clientes',
        'Manejo de eventos en tiempo real y reconexiones',
        'Separación de responsabilidades entre frontend y backend en monorepo',
        'Gestión de salas y estados compartidos en tiempo real'
      ],

      impact: [
        'Demostración de arquitectura en tiempo real con WebSockets',
        'Implementación de comunicación cliente-servidor eficiente',
        'Base reutilizable para aplicaciones multijugador en tiempo real'
      ],

      category: 'fullstack'
    },
    {
      id: 'vecinos-administracion',

      title: 'Sistema de Administración para Condominios (SaaS Multi-Tenant)',

      description:
        'Plataforma integral para la gestión de fraccionamientos y condominios, con módulos financieros, operativos y comunitarios, arquitectura multi-tenant y soporte bilingüe.',

      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Redux Toolkit',
        'Firebase',
        'OpenPay',
        'JWT',
        'Axios'
      ],

      isPrivate: true,

      problem:
        'La administración de fraccionamientos requería centralizar procesos financieros, operativos y comunitarios en una sola plataforma, con soporte para múltiples residenciales y control de acceso por roles.',

      solution:
        'Desarrollo de un sistema web multi-tenant basado en Next.js que permite gestionar residencias, finanzas, seguridad, comunicación y operaciones desde un solo panel administrativo, con arquitectura escalable y modular.',

      responsibilities:
        'Desarrollo full stack, implementación de módulos clave (finanzas, residentes, seguridad), integración de servicios externos y diseño de arquitectura para manejo multi-tenant y control de acceso.',

      features: [
        'Sistema multi-tenant para múltiples fraccionamientos',
        'Control de acceso basado en roles (admin, vigilancia, concierge, comité)',
        'Gestión de residentes, propiedades y vehículos',
        'Módulos financieros completos (ingresos, egresos, reportes, morosidad)',
        'Generación de documentos PDF (CFDI, reportes, recibos)',
        'Integración de pagos con OpenPay',
        'Notificaciones push (Firebase)',
        'Sistema de reservas de áreas comunes',
        'Control de acceso vehicular y seguridad (QR, rondines)',
        'Comunicación con residentes (WhatsApp y avisos)',
        'Soporte bilingüe (ES / EN)'
      ],

      challenges: [
        'Diseño de arquitectura multi-tenant para aislar datos por fraccionamiento',
        'Implementación de lógica financiera compleja (intereses, morosidad, reportes)',
        'Integración con sistemas externos (OpenPay, SAT CFDI)',
        'Manejo de múltiples roles con permisos dinámicos',
        'Generación dinámica de documentos PDF para distintos procesos'
      ],

      impact: [
        'Centralización de operaciones administrativas en una sola plataforma',
        'Automatización de procesos financieros y operativos',
        'Mejora en la comunicación entre administración y residentes',
        'Base escalable para múltiples fraccionamientos'
      ],

      category: 'web'
    },
    {
      id: 'vecinos-mobile-app',

      title: 'App Móvil para Gestión de Condominios',

      description:
        'Aplicación móvil para residentes que centraliza pagos, accesos, incidencias y comunicación comunitaria, con integración de servicios en tiempo real y despliegue en iOS y Android.',

      technologies: [
        'Flutter',
        'Dart',
        'Riverpod',
        'Firebase',
        'OpenPay',
        'Socket.IO',
        'Google Maps',
        'Dio'
      ],

      liveUrl:
        'https://apps.apple.com/mx/app/vecinos-comprometidos/id6468266806',
      isPrivate: true,

      problem:
        'Los residentes necesitaban una forma centralizada y accesible de gestionar pagos, accesos, incidencias y comunicación con la administración desde dispositivos móviles.',

      solution:
        'Desarrollo de una aplicación móvil multiplataforma con Flutter que integra módulos financieros, operativos y comunitarios, permitiendo a los usuarios gestionar todos los aspectos de su residencial desde una sola app.',

      responsibilities:
        'Desarrollo móvil multiplataforma, implementación de módulos clave (pagos, accesos, incidencias), integración con servicios externos y participación en todo el ciclo de vida de la aplicación.',

      features: [
        'Autenticación con soporte biométrico (Face ID / huella)',
        'Gestión de pagos con tarjeta e integración con OpenPay / BBVA',
        'Generación de accesos mediante códigos QR para invitados',
        'Notificaciones push en tiempo real (Firebase)',
        'Marketplace con cashback y compras dentro de la app',
        'Reporte y seguimiento de incidencias',
        'Reservación de áreas comunes',
        'Gestión de mascotas, vehículos y perfil del residente',
        'Consumo de contenido (cursos, publicaciones, encuestas)',
        'Soporte multilenguaje (Español / Inglés)'
      ],

      challenges: [
        'Integración de múltiples servicios externos (pagos, mapas, notificaciones)',
        'Manejo de estado complejo en aplicación móvil',
        'Sincronización de datos en tiempo real',
        'Optimización de experiencia de usuario en múltiples dispositivos',
        'Implementación de arquitectura escalable por módulos'
      ],

      impact: [
        'Aplicación publicada en App Store y Google Play',
        'Mejora en la experiencia del usuario para residentes',
        'Centralización de múltiples servicios en una sola app móvil',
        'Incremento en la eficiencia de pagos y comunicación'
      ],

      category: 'mobile'
    }
  ]

  return (
    <Section title="Lo que He Construido" section="PROYECTOS" id="projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} delay={i * 0.1} />
        ))}
      </div>
    </Section>
  )
}

const ProjectCard = ({
  project,
  delay
}: {
  project: ExperienceItem
  delay: number
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MotionSection delay={delay}>
      <button
        onClick={() => setIsOpen(true)}
        className="group flex h-full flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(79,209,197,0.08)] text-left cursor-pointer"
      >
        <div className="mb-4 flex items-center justify-between">
          <Folder className="h-10 w-10 text-primary transition-transform duration-300 group-hover:scale-110" />
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((item, i) => (
            <Chip key={i} label={item} />
          ))}
        </div>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-card p-6 rounded-lg w-full max-w-md border border-border">
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => setIsOpen(false)}
            >
              <div
                className="bg-card border border-border rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-start justify-between z-10">
                  <div className="flex items-center gap-3">
                    <Folder className="h-8 w-8 text-primary shrink-0" />
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-xl font-bold text-foreground">
                          {project.title}
                        </h2>
                        {project.isPrivate && (
                          <span className="flex items-center gap-1 text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                            <Lock className="h-3 w-3" /> Privado
                          </span>
                        )}
                        {project.category && (
                          <span className="text-xs text-primary bg-primary/10 px-2 py-0.5 rounded-full capitalize">
                            {project.category}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="ml-4 shrink-0 p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="px-6 py-5 space-y-6">
                  {/* Links */}
                  {(project.liveUrl || project.repoUrl) && (
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-primary border border-primary/30 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" /> Ver en vivo
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium text-muted-foreground border border-border px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
                        >
                          <Github className="h-4 w-4" /> Repositorio
                        </a>
                      )}
                    </div>
                  )}

                  {/* Problema / Solución */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.problem && (
                      <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="h-4 w-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">
                            Problema
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {project.problem}
                        </p>
                      </div>
                    )}
                    {project.solution && (
                      <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="h-4 w-4 text-primary" />
                          <span className="text-sm font-semibold text-foreground">
                            Solución
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {project.solution}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Responsabilidades */}
                  {project.responsibilities && (
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Wrench className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">
                          Mi Rol
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground pl-6">
                        {project.responsibilities}
                      </p>
                    </div>
                  )}

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-foreground">
                          Funcionalidades
                        </span>
                      </div>
                      <ul className="space-y-2 pl-6">
                        {project.features.map((f, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Challenges & Impact */}
                  {((project.challenges && project.challenges.length > 0) ||
                    (project.impact && project.impact.length > 0)) && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.challenges && project.challenges.length > 0 && (
                        <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                          <div className="mb-3 flex items-center gap-1">
                            <Zap className="text-primary w-5" />
                            <span className="text-sm font-semibold text-foreground">
                              Desafíos
                            </span>
                          </div>
                          <ol className="mt-2 space-y-3 text-sm text-muted-foreground list-disc pl-6 text-left marker:text-primary group-hover:text-white transition-colors duration-300">
                            {project.challenges.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                      {project.impact && project.impact.length > 0 && (
                        <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                          <div className="mb-3 flex items-center gap-1">
                            <Rocket className="text-primary w-5" />
                            <span className="text-sm font-semibold text-foreground block">
                              Impacto
                            </span>
                          </div>
                          <ol className="mt-2 space-y-3 text-sm text-muted-foreground list-disc pl-6 text-left marker:text-primary group-hover:text-white transition-colors duration-300">
                            {project.impact.map((imp, i) => (
                              <li key={i}>{imp}</li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <span className="text-sm font-semibold text-foreground block mb-3">
                      Stack Tecnológico
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Chip key={i} label={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MotionSection>
  )
}

const Chip = ({ label }: { label: string }) => (
  <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
    {label}
  </span>
)

export default Projects
