import { ArrowRight, Compass, MessagesSquare, Rocket } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/app/LanguageContext";

const stepsEs = [
  { number: "01", title: "Entender", description: "Alineamos objetivo, usuarios, alcance y prioridades antes de escribir código.", icon: Compass },
  { number: "02", title: "Construir", description: "Diseño una base clara, avanzo por entregas y mantengo la comunicación simple.", icon: MessagesSquare },
  { number: "03", title: "Entregar", description: "Dejo el producto listo para usar, documentado y preparado para seguir creciendo.", icon: Rocket },
];

const stepsEn = [
  { number: "01", title: "Understand", description: "We align on goals, users, scope, and priorities before writing code.", icon: Compass },
  { number: "02", title: "Build", description: "I design a clear foundation, deliver in stages, and keep communication straightforward.", icon: MessagesSquare },
  { number: "03", title: "Deliver", description: "I leave the product ready to use, documented, and prepared to keep growing.", icon: Rocket },
];

export function Process() {
  const { language } = useLanguage();
  const en = language === "en";
  const steps = en ? stepsEn : stepsEs;
  return (
    <section id="process" className="section section-paper process-section">
      <div className="container-width">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">{en ? "How I work" : "Cómo trabajo"}</p>
            <h2>{en ? "Clarity at every step, from our first conversation." : "Claridad en cada paso, desde la primera conversación."}</h2>
          </div>
          <p>
            {en
              ? "The process adapts to the project's size, but it always starts the same way: understand the problem before choosing the tool."
              : "El proceso se adapta al tamaño del proyecto, pero siempre parte de lo mismo: entender el problema antes de elegir la herramienta."}
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.08 }}
              className="process-step"
            >
              <div className="process-step-top"><span>{step.number}</span><step.icon size={21} /></div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < steps.length - 1 && <ArrowRight className="process-arrow" size={19} aria-hidden="true" />}
            </motion.div>
          ))}
        </div>

        <div className="credential-row">
          <div>
            <span className="credential-label">{en ? "Working style" : "Forma de trabajo"}</span>
            <strong>{en ? "Direct, clear, and focused on results" : "Directa, clara y orientada a resultados"}</strong>
            <span>{en ? "Visible scope, explained decisions, and usable deliverables" : "Alcance visible, decisiones explicadas y entregas que se pueden usar"}</span>
          </div>
          <div>
            <span className="credential-label">{en ? "I also work with" : "También trabajo con"}</span>
            <strong>{en ? "Teams that need to move forward" : "Equipos que necesitan avanzar"}</strong>
            <span>{en ? "Independent projects, collaborations, and custom solutions" : "Proyectos propios, colaboraciones y soluciones a medida"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
