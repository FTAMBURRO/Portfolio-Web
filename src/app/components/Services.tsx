import { ArrowUpRight, BrainCircuit, Blocks, Database, LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface Service {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  icon: LucideIcon;
}

const services: Service[] = [
  {
    number: "01",
    title: "Productos digitales",
    description: "Interfaces, sitios y experiencias digitales que traducen una idea en algo claro, útil y listo para crecer.",
    bullets: ["Frontend responsive", "React y TypeScript", "Experiencias con intención"],
    icon: Blocks,
  },
  {
    number: "02",
    title: "Backend, APIs y datos",
    description: "La lógica y la información de tu negocio, ordenadas en servicios confiables, escalables y documentados.",
    bullets: ["APIs REST", "Modelado de datos", "Autenticación y roles"],
    icon: Database,
  },
  {
    number: "03",
    title: "IA aplicada y automatización",
    description: "Exploro cómo integrar IA y automatizaciones para ahorrar tiempo, descubrir oportunidades y trabajar mejor.",
    bullets: ["Flujos inteligentes", "Integración con APIs", "Herramientas internas"],
    icon: BrainCircuit,
  },
];

export function Services() {
  return (
    <section id="services" className="section section-paper">
      <div className="container-width">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">Servicios</p>
            <h2>Una mirada completa para resolver problemas reales.</h2>
          </div>
          <p>
            No me encierro en una sola capa ni en una sola herramienta. Entiendo el problema,
            propongo el formato correcto y construyo con una mirada que conecta producto, código y negocio.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08 }}
              className="service-card"
            >
              <div className="service-card-top">
                <span className="service-number">{service.number}</span>
                <span className="service-icon"><service.icon size={19} /></span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <a href="#contact" className="card-link">Consultar <ArrowUpRight size={16} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
