import { ArrowUpRight, Braces, BrainCircuit, Database, Layers3, ServerCog } from "lucide-react";
import { motion } from "motion/react";

const groups = [
  { title: "Frontend", icon: Layers3, technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend", icon: ServerCog, technologies: ["Python", "Flask", "Java", "Spring Boot", ".NET", "APIs REST"] },
  { title: "Datos", icon: Database, technologies: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "Redis"] },
  { title: "Entrega", icon: Braces, technologies: ["Git", "GitHub", "Docker", "Vercel", "Postman"] },
  { title: "IA & Productividad", icon: BrainCircuit, technologies: ["IA aplicada", "APIs de IA", "ChatGPT", "Claude", "Gemini", "GitHub Copilot"] },
];

export function Skills() {
  return (
    <section id="skills" className="section section-mist">
      <div className="container-width skills-layout">
        <div className="skills-intro">
          <p className="eyebrow">Herramientas</p>
          <h2>La tecnología acompaña al objetivo, no al revés.</h2>
          <p>
            Elijo el stack según lo que el producto necesita. Me siento especialmente cómodo
            en backend, modelado de datos e integración de sistemas, sin descuidar la experiencia de uso.
            También estoy explorando IA aplicada como una nueva capa para crear y automatizar.
          </p>
          <a className="text-link" href="#contact">Hablemos de tu desafío <ArrowUpRight size={17} /></a>
        </div>

        <div className="skills-groups">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.06 }}
              className="skill-group"
            >
              <div className="skill-group-heading"><span className="skill-group-icon"><group.icon size={17} /></span><h3>{group.title}</h3></div>
              <div className="skill-pills">{group.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
