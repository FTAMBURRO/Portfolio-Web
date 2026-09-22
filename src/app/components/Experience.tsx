import { ArrowUpRight, BrainCircuit, Database, Layers3 } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/app/LanguageContext";

const experienceEs = [
  {
    period: "Experiencia destacada",
    title: "Microservicio de rendimiento académico",
    context: "CREUS · Municipio de Coronel Suárez",
    description: "Desarrollé un módulo independiente para centralizar evidencias y evaluaciones. El microservicio se instaló en el Municipio de Coronel Suárez, llevando el trabajo desde la arquitectura hasta una implementación real.",
    tags: ["Flask", "PostgreSQL", "Redis", "Docker", "API REST"],
    icon: Database,
    featured: true,
  },
  {
    period: "1 año de experiencia",
    title: "Desarrollo y bases de datos",
    context: "Universidad de Buenos Aires · UBA",
    description: "Durante un año trabajé en desarrollo y bases de datos en la UBA, fortaleciendo mi experiencia con información real, lógica de negocio, consistencia de datos y trabajo dentro de una organización.",
    tags: ["Desarrollo", "Bases de datos", "SQL", "Trabajo en equipo"],
    icon: Layers3,
  },
  {
    period: "Actualidad",
    title: "Full Stack y evolución constante",
    context: "Proyectos propios · formación continua",
    description: "Sigo construyendo sitios, APIs y herramientas digitales mientras incorporo IA y automatización. Me adapto a los cambios para convertir nuevas tecnologías en posibilidades concretas.",
    tags: ["React", "TypeScript", "Python", "IA aplicada"],
    icon: BrainCircuit,
  },
];

const experienceEn = [
  {
    period: "Featured experience",
    title: "Academic performance microservice",
    context: "CREUS · Municipality of Coronel Suárez",
    description: "I developed an independent module to centralize student evidence and assessments. The microservice was deployed at the Municipality of Coronel Suárez, taking the work from architecture to a real-world implementation.",
    tags: ["Flask", "PostgreSQL", "Redis", "Docker", "REST API"],
    icon: Database,
    featured: true,
  },
  {
    period: "1 year of experience",
    title: "Development and databases",
    context: "University of Buenos Aires · UBA",
    description: "I spent a year working in development and databases at UBA, gaining experience with real data, business logic, data consistency, and work within an organization.",
    tags: ["Development", "Databases", "SQL", "Teamwork"],
    icon: Layers3,
  },
  {
    period: "Currently",
    title: "Full Stack and continuous learning",
    context: "Independent projects · ongoing learning",
    description: "I keep building websites, APIs, and digital tools while incorporating AI and automation. I adapt to change to turn new technologies into practical possibilities.",
    tags: ["React", "TypeScript", "Python", "Applied AI"],
    icon: BrainCircuit,
  },
];

export function Experience() {
  const { language } = useLanguage();
  const en = language === "en";
  const experience = en ? experienceEn : experienceEs;
  return (
    <section id="experience" className="section section-paper experience-section">
      <div className="container-width">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">{en ? "Experience" : "Experiencia"}</p>
            <h2>{en ? "From code to real-world use." : "Experiencia que salió del código y llegó a la realidad."}</h2>
          </div>
          <p>
            {en
              ? "My experience includes a microservice deployed at the Municipality of Coronel Suárez and a year of development and database work at UBA. That hands-on work is what I want to lead with."
              : "Mi experiencia incluye un microservicio instalado en el Municipio de Coronel Suárez y un año de desarrollo y trabajo con bases de datos en la UBA. Eso es lo que quiero que se vea primero."}
          </p>
        </div>

        <div className="experience-grid">
          {experience.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08 }}
              className={`experience-card ${item.featured ? "experience-card-featured" : ""}`}
            >
              <div className="experience-card-top">
                <span className="experience-period">{item.period}</span>
                <span className="experience-icon"><item.icon size={18} /></span>
              </div>
              <p className="experience-context">{item.context}</p>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="experience-tags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </motion.article>
          ))}
        </div>

        <a className="experience-link" href="#projects">
          {en ? "Explore the projects behind it" : "Ver los proyectos que lo respaldan"} <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
