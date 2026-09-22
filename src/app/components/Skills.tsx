import { ArrowUpRight, Braces, BrainCircuit, Database, Layers3, ServerCog } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/app/LanguageContext";

const groupsEs = [
  { title: "Frontend", icon: Layers3, technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend", icon: ServerCog, technologies: ["Python", "Flask", "Java", "Spring Boot", ".NET", "APIs REST"] },
  { title: "Datos", icon: Database, technologies: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "Redis"] },
  { title: "Entrega", icon: Braces, technologies: ["Git", "GitHub", "Docker", "Vercel", "Postman"] },
  { title: "IA & Productividad", icon: BrainCircuit, technologies: ["IA aplicada", "APIs de IA", "ChatGPT", "Claude", "Gemini", "GitHub Copilot"] },
];

const groupsEn = [
  { title: "Frontend", icon: Layers3, technologies: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend", icon: ServerCog, technologies: ["Python", "Flask", "Java", "Spring Boot", ".NET", "REST APIs"] },
  { title: "Data", icon: Database, technologies: ["PostgreSQL", "MySQL", "SQL Server", "SQLite", "Redis"] },
  { title: "Delivery", icon: Braces, technologies: ["Git", "GitHub", "Docker", "Vercel", "Postman"] },
  { title: "AI & Productivity", icon: BrainCircuit, technologies: ["Applied AI", "AI APIs", "ChatGPT", "Claude", "Gemini", "GitHub Copilot"] },
];

export function Skills() {
  const { language } = useLanguage();
  const en = language === "en";
  const groups = en ? groupsEn : groupsEs;
  return (
    <section id="skills" className="section section-mist">
      <div className="container-width skills-layout">
        <div className="skills-intro">
          <p className="eyebrow">{en ? "Tools" : "Herramientas"}</p>
          <h2>{en ? "The technology serves the goal, not the other way around." : "La tecnología acompaña al objetivo, no al revés."}</h2>
          <p>
            {en
              ? "I choose the stack based on what the product needs. I'm especially at home in backend development, data modeling, and systems integration, without neglecting the user experience. I'm also exploring applied AI as a new layer for building and automating."
              : "Elijo el stack según lo que el producto necesita. Me siento especialmente cómodo en backend, modelado de datos e integración de sistemas, sin descuidar la experiencia de uso. También estoy explorando IA aplicada como una nueva capa para crear y automatizar."}
          </p>
          <a className="text-link" href="#contact">{en ? "Let's talk about your challenge" : "Hablemos de tu desafío"} <ArrowUpRight size={17} /></a>
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
