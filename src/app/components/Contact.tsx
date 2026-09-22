import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "@/app/LanguageContext";

export function Contact() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid-lines" aria-hidden="true" />
      <div className="container-width contact-layout">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="contact-intro"
        >
          <p className="eyebrow eyebrow-light">{en ? "Next step" : "Siguiente paso"}</p>
          <h2>{en ? "What would you like to improve?" : "¿Qué querés mejorar?"}</h2>
          <p>
            {en
              ? "Tell me about the context, your goal, and an approximate timeline. I'll reply with an initial perspective and clear next steps."
              : "Contame el contexto, el objetivo y el plazo aproximado. Te respondo con una mirada inicial y próximos pasos claros."}
          </p>
          <a className="button button-accent" href={en ? "mailto:tamburrofacundo@gmail.com?subject=Let%27s%20talk%20about%20a%20project" : "mailto:tamburrofacundo@gmail.com?subject=Hablemos%20de%20un%20proyecto"}>
            {en ? "Email me" : "Escribirme por email"} <ArrowUpRight size={18} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.12 }}
          className="contact-panel"
        >
          <a href="mailto:tamburrofacundo@gmail.com" className="contact-row">
            <span className="contact-icon"><Mail size={18} /></span>
            <span><small>Email</small><strong>tamburrofacundo@gmail.com</strong></span>
            <ArrowUpRight size={17} />
          </a>
          <a href="https://www.linkedin.com/in/facundo-tamburro" target="_blank" rel="noopener noreferrer" className="contact-row">
            <span className="contact-icon"><Linkedin size={18} /></span>
            <span><small>LinkedIn</small><strong>/in/facundo-tamburro</strong></span>
            <ArrowUpRight size={17} />
          </a>
          <a href="https://github.com/FTAMBURRO" target="_blank" rel="noopener noreferrer" className="contact-row">
            <span className="contact-icon"><Github size={18} /></span>
            <span><small>GitHub</small><strong>/FTAMBURRO</strong></span>
            <ArrowUpRight size={17} />
          </a>
          <div className="contact-row contact-row-static">
            <span className="contact-icon"><MapPin size={18} /></span>
            <span><small>{en ? "Location" : "Ubicación"}</small><strong>{en ? "Buenos Aires · Remote" : "Buenos Aires · Remoto"}</strong></span>
          </div>
          <a
            className="contact-cv"
            href={en ? "/Facundo-Tamburro-CV-EN.pdf" : "/CV%20-%20TAMBURRO,%20Facundo%20(24).pdf"}
            download={en ? "Facundo-Tamburro-CV-EN.pdf" : "CV - TAMBURRO, Facundo (24).pdf"}
          >
            <Download size={16} /> {en ? "Download CV (English)" : "Descargar CV (español)"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
