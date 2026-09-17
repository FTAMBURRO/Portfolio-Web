import { ArrowUpRight, Github, Globe2 } from "lucide-react";
import { motion } from "motion/react";

interface Project {
  category: string;
  title: string;
  description: string;
  outcome: string;
  technologies: string[];
  github: string;
  demo?: string;
  visual: string;
}

const projects: Project[] = [
  {
    category: "Microservicio implementado · Municipio de Coronel Suárez",
    title: "Rendimiento académico",
    description: "Módulo independiente del sistema CREUS para centralizar evidencias y evaluaciones de estudiantes, instalado en el Municipio de Coronel Suárez.",
    outcome: "Arquitectura de dominio, API REST, permisos por rol y una implementación en un contexto institucional real.",
    technologies: ["Flask", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/FTAMBURRO/creus-rendimiento",
    visual: "project-visual-api",
  },
  {
    category: "Web comercial · 2026",
    title: "IMAG AGRO",
    description: "Web comercial y editorial para una empresa argentina de soluciones agropecuarias.",
    outcome: "Servicios organizados para iniciar consultas con contexto.",
    technologies: ["React", "TypeScript", "Vite", "WhatsApp"],
    github: "https://github.com/FTAMBURRO/imag-agro-web",
    demo: "https://imag-agro-web.vercel.app",
    visual: "project-visual-agro",
  },
  {
    category: "E-commerce · 2026",
    title: "Integrale VG",
    description: "Sitio comercial y catálogo para una panadería artesanal de Gualeguaychú.",
    outcome: "Catálogo de productos y pedidos conectados con WhatsApp.",
    technologies: ["React", "TypeScript", "Tailwind", "Vercel"],
    github: "https://github.com/FTAMBURRO/integrale-vg",
    demo: "https://integrale-vg.vercel.app",
    visual: "project-visual-bakery",
  },
  {
    category: "Web industrial · 2026",
    title: "TS Sopletes",
    description: "Sitio institucional para un fabricante argentino de equipos de corte y regulación.",
    outcome: "Catálogo, información técnica y caminos claros hacia la cotización.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    github: "https://github.com/FTAMBURRO/ts-sopletes",
    demo: "https://ts-sopletes.vercel.app",
    visual: "project-visual-industrial",
  },
];

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={`project-preview ${project.visual}`} aria-hidden="true">
      <div className="preview-browser">
        <span /><span /><span />
        <small>facundo.dev / {project.title.toLowerCase().replaceAll(" ", "-")}</small>
      </div>
      <div className="preview-body">
        <div className="preview-kicker">{project.category.split(" · ")[0]}</div>
        <div className="preview-title">{project.title}</div>
        <div className="preview-lines"><i /><i /><i /></div>
        <div className="preview-button">explorar <ArrowUpRight size={12} /></div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="section section-ink">
      <div className="container-width">
        <div className="section-heading section-heading-projects">
          <div>
            <p className="eyebrow eyebrow-light">Trabajo implementado y productos recientes</p>
            <h2>Código que llega al mundo real.</h2>
          </div>
          <p>
            Desde un microservicio instalado en un municipio hasta productos web para negocios,
            cada proyecto muestra una parte distinta de mi recorrido Full Stack.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.07 }}
              className={`project-card ${index === 0 ? "project-card-featured" : ""}`}
            >
              <ProjectPreview project={project} />
              <div className="project-card-content">
                <div className="project-card-heading">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <p className="project-outcome"><strong>Enfoque:</strong> {project.outcome}</p>
                <div className="project-tags">
                  {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
                </div>
                <div className="project-links">
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer"><Globe2 size={15} /> Ver sitio</a>}
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={15} /> Código <ArrowUpRight size={13} /></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="projects-footer">
          <span>Más código y experimentos en</span>
          <a className="text-link text-link-light" href="https://github.com/FTAMBURRO?tab=repositories" target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
