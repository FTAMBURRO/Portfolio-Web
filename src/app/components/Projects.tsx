import { ArrowUpRight, Github, Globe2 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/app/LanguageContext";

interface Project {
  kind: "system" | "web";
  category: string;
  title: string;
  description: string;
  outcome: string;
  technologies: string[];
  github: string;
  demo?: string;
  visual: string;
  image?: string;
}

const projectsEs: Project[] = [
  {
    kind: "system",
    category: "Microservicio implementado · Municipio de Coronel Suárez",
    title: "Rendimiento académico",
    description: "Módulo independiente del sistema CREUS para centralizar evidencias y evaluaciones de estudiantes, instalado en el Municipio de Coronel Suárez.",
    outcome: "Arquitectura de dominio, API REST, permisos por rol y una implementación en un contexto institucional real.",
    technologies: ["Flask", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/FTAMBURRO/creus-rendimiento",
    visual: "project-visual-api",
  },
  {
    kind: "web",
    category: "Web comercial · 2026",
    title: "IMAG AGRO",
    description: "Web comercial y editorial para una empresa argentina de soluciones agropecuarias.",
    outcome: "Servicios organizados para iniciar consultas con contexto.",
    technologies: ["React", "TypeScript", "Vite", "WhatsApp"],
    github: "https://github.com/FTAMBURRO/imag-agro-web",
    demo: "https://imag-agro-web.vercel.app",
    visual: "project-visual-agro",
    image: "/projects/imag-agro.png",
  },
  {
    kind: "web",
    category: "E-commerce · 2026",
    title: "Integrale VG",
    description: "Sitio comercial y catálogo para una panadería artesanal de Gualeguaychú.",
    outcome: "Catálogo de productos y pedidos conectados con WhatsApp.",
    technologies: ["React", "TypeScript", "Tailwind", "Vercel"],
    github: "https://github.com/FTAMBURRO/integrale-vg",
    demo: "https://integrale-vg.vercel.app",
    visual: "project-visual-bakery",
    image: "/projects/integrale-vg.png",
  },
  {
    kind: "web",
    category: "Web industrial · 2026",
    title: "TS Sopletes",
    description: "Sitio institucional para un fabricante argentino de equipos de corte y regulación.",
    outcome: "Catálogo, información técnica y caminos claros hacia la cotización.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    github: "https://github.com/FTAMBURRO/ts-sopletes",
    demo: "https://ts-sopletes.vercel.app",
    visual: "project-visual-industrial",
    image: "/projects/ts-sopletes.png",
  },
];

const projectsEn: Project[] = [
  {
    kind: "system",
    category: "Deployed microservice · Municipality of Coronel Suárez",
    title: "Academic performance",
    description: "An independent module for the CREUS system to centralize student evidence and assessments, deployed at the Municipality of Coronel Suárez.",
    outcome: "Domain architecture, REST API, role-based permissions, and deployment in a real institutional setting.",
    technologies: ["Flask", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com/FTAMBURRO/creus-rendimiento",
    visual: "project-visual-api",
  },
  {
    kind: "web",
    category: "Business website · 2026",
    title: "IMAG AGRO",
    description: "Business and editorial website for an Argentine agricultural solutions company.",
    outcome: "Organized services that help visitors start informed conversations.",
    technologies: ["React", "TypeScript", "Vite", "WhatsApp"],
    github: "https://github.com/FTAMBURRO/imag-agro-web",
    demo: "https://imag-agro-web.vercel.app",
    visual: "project-visual-agro",
    image: "/projects/imag-agro.png",
  },
  {
    kind: "web",
    category: "E-commerce · 2026",
    title: "Integrale VG",
    description: "Commercial website and catalog for an artisan bakery in Gualeguaychú, Argentina.",
    outcome: "Product catalog and orders connected through WhatsApp.",
    technologies: ["React", "TypeScript", "Tailwind", "Vercel"],
    github: "https://github.com/FTAMBURRO/integrale-vg",
    demo: "https://integrale-vg.vercel.app",
    visual: "project-visual-bakery",
    image: "/projects/integrale-vg.png",
  },
  {
    kind: "web",
    category: "Industrial website · 2026",
    title: "TS Sopletes",
    description: "Company website for an Argentine manufacturer of cutting and pressure-regulation equipment.",
    outcome: "A catalog, technical information, and clear paths to request a quote.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Motion"],
    github: "https://github.com/FTAMBURRO/ts-sopletes",
    demo: "https://ts-sopletes.vercel.app",
    visual: "project-visual-industrial",
    image: "/projects/ts-sopletes.png",
  },
];

function ProjectPreview({ project, en }: { project: Project; en: boolean }) {
  const target = project.demo ?? project.github;

  if (project.image) {
    return (
      <a
        className="project-preview project-preview-real"
        href={target}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${en ? "Open" : "Abrir"} ${project.title}`}
      >
        <img src={project.image} alt={`${en ? "Homepage of" : "Página de inicio de"} ${project.title}`} loading="lazy" />
        <span className="project-preview-shade" aria-hidden="true" />
        <span className="project-preview-action">
          {en ? "View live project" : "Explorar proyecto"} <ArrowUpRight size={15} />
        </span>
      </a>
    );
  }

  return (
    <a
      className={`project-preview project-preview-system ${project.visual}`}
      href={target}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${en ? "Open code for" : "Abrir código de"} ${project.title}`}
    >
      <div className="preview-browser">
        <span /><span /><span />
        <small>CREUS / {en ? "academic-performance" : "rendimiento-academico"}</small>
      </div>
      <div className="preview-body">
        <div className="preview-kicker">{project.category.split(" · ")[0]}</div>
        <div className="preview-title">{project.title}</div>
        <div className="preview-system-flow" aria-hidden="true">
          <span>{en ? "Evidence" : "Evidencias"}</span><i />
          <span>{en ? "Assessment" : "Evaluación"}</span><i />
          <span>{en ? "Tracking" : "Seguimiento"}</span>
        </div>
        <div className="preview-button">{en ? "Explore system" : "Explorar sistema"} <ArrowUpRight size={12} /></div>
      </div>
    </a>
  );
}

function ProjectCard({ project, index, en, featured = false }: { project: Project; index: number; en: boolean; featured?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.07 }}
      className={`project-card ${featured ? "project-card-featured" : ""}`}
    >
      <ProjectPreview project={project} en={en} />
      <div className="project-card-content">
        <div className="project-card-heading">
          <p className="project-category">{project.category}</p>
          <h3>{project.title}</h3>
        </div>
        <p className="project-description">{project.description}</p>
        <p className="project-outcome"><strong>{en ? "Focus:" : "Enfoque:"}</strong> {project.outcome}</p>
        <div className="project-tags">
          {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
        <div className="project-links">
          {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer"><Globe2 size={15} /> {en ? "Live site" : "Ver sitio"}</a>}
          <a href={project.github} target="_blank" rel="noopener noreferrer"><Github size={15} /> {en ? "Code" : "Código"} <ArrowUpRight size={13} /></a>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { language } = useLanguage();
  const en = language === "en";
  const projects = en ? projectsEn : projectsEs;
  const systems = projects.filter((project) => project.kind === "system");
  const websites = projects.filter((project) => project.kind === "web");
  return (
    <section id="projects" className="section section-ink">
      <div className="container-width">
        <div className="section-heading section-heading-projects">
          <div>
            <p className="eyebrow eyebrow-light">{en ? "Deployed work and recent products" : "Trabajo implementado y productos recientes"}</p>
            <h2>{en ? "Code that makes it into the real world." : "Código que llega al mundo real."}</h2>
          </div>
          <p>
            {en
              ? "From a microservice deployed at a municipality to digital products for businesses, each project shows a different side of my Full Stack work."
              : "Desde un microservicio instalado en un municipio hasta productos web para negocios, cada proyecto muestra una parte distinta de mi recorrido Full Stack."}
          </p>
        </div>

        <div className="project-group">
          <div className="project-group-heading">
            <span>01</span>
            <div><h3>{en ? "Systems & backend" : "Sistemas y backend"}</h3><p>{en ? "Architecture, data, and logic built for real-world use." : "Arquitectura, datos y lógica construidos para funcionar en contextos reales."}</p></div>
          </div>
          <div className="projects-grid projects-grid-systems">
            {systems.map((project, index) => <ProjectCard key={project.title} project={project} index={index} en={en} featured />)}
          </div>
        </div>

        <div className="project-group project-group-websites">
          <div className="project-group-heading">
            <span>02</span>
            <div><h3>{en ? "Websites & digital presence" : "Sitios web y presencia digital"}</h3><p>{en ? "Real products with their own identity, purpose, and audience." : "Productos reales con identidad, propósito y públicos diferentes."}</p></div>
          </div>
          <div className="projects-grid projects-grid-websites">
            {websites.map((project, index) => <ProjectCard key={project.title} project={project} index={index} en={en} />)}
          </div>
        </div>

        <div className="projects-footer">
          <span>{en ? "More code and experiments on" : "Más código y experimentos en"}</span>
          <a className="text-link text-link-light" href="https://github.com/FTAMBURRO?tab=repositories" target="_blank" rel="noopener noreferrer">
            GitHub <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
