import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="relative px-6 py-10 border-t border-border">
      <div className="mx-auto max-w-4xl text-center flex flex-col items-center gap-4">
        <div className="flex justify-center items-center gap-4 mb-4 text-muted-foreground">
          <Link
            href="https://github.com/ctpablocesar"
            target="_blank"
            className="hover:text-primary/50 transition-all"
          >
            <Github />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ctpablocesar/"
            target="_blank"
            className="hover:text-primary/50 transition-all"
          >
            <Linkedin />
          </Link>
        </div>
        <p className="text-muted-foreground text-xs">
          &copy; {new Date().getFullYear()} Pablo Cesar. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
