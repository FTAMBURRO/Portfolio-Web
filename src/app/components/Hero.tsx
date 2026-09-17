import { ArrowDownRight, ArrowUpRight, BrainCircuit, Github, Linkedin, MapPin } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container-width hero-layout">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="hero-copy"
        >
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-dot" />
            Full Stack Developer · IT · IA aplicada
          </div>

          <h1>
            Del backend a la interfaz. Del problema al <em>producto.</em>
          </h1>

          <p className="hero-lead">
            Soy desarrollador Full Stack con base en programación, datos y arquitectura.
            Construyo soluciones digitales de punta a punta y exploro cómo la IA puede abrir
            nuevas posibilidades para personas, equipos y negocios.
          </p>

          <div className="hero-actions">
            <a className="button button-accent" href="#contact">
              Contame tu proyecto <ArrowUpRight size={18} />
            </a>
            <a className="text-link text-link-light" href="#projects">
              Ver casos de trabajo <ArrowDownRight size={18} />
            </a>
          </div>

          <div className="hero-meta">
            <span><MapPin size={15} /> Buenos Aires, Argentina</span>
            <span><BrainCircuit size={15} /> Siempre aprendiendo y adaptándome</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, x: 18 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          className="hero-visual"
        >
          <div className="hero-visual-backdrop" aria-hidden="true" />
          <div className="hero-orbit-label" aria-hidden="true">CODE · DATA · AI ·</div>
          <div className="photo-frame">
            <img src="/portfolio.jpeg" alt="Facundo Tamburro trabajando en su notebook" />
          </div>

          <div className="hero-note hero-note-top">
            <span className="note-label">Enfoque</span>
            <strong>Soluciones con criterio</strong>
          </div>
          <motion.div
            className="hero-system-card"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            aria-label="Resumen de enfoque técnico"
          >
            <div className="system-card-top">
              <span className="system-pulse" />
              <span>FT / FULL STACK SYSTEM</span>
              <span className="system-index">01—04</span>
            </div>
            <div className="system-card-title">Ideas <em>→</em> posibilidades</div>
            <div className="system-card-track"><span /></div>
            <div className="system-card-footer">
              <span><small>CODE</small><strong>READY</strong></span>
              <span><small>DATA</small><strong>READY</strong></span>
              <span><small>AI</small><strong>EXPLORING</strong></span>
            </div>
          </motion.div>

          <div className="hero-socials" aria-label="Redes sociales">
            <a href="https://github.com/FTAMBURRO" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={17} />
            </a>
            <a href="https://www.linkedin.com/in/facundo-tamburro" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={17} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="container-width hero-footer-line">
        <span>FULL STACK</span><i /> <span>BACKEND</span><i /> <span>DATOS</span><i /> <span>IA APLICADA</span>
      </div>
    </section>
  );
}
