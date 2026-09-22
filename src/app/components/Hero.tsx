import { ArrowDownRight, ArrowUpRight, BrainCircuit, Github, Linkedin, MapPin } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const challenges = [
  {
    label: "Una idea",
    title: "Que deje de ser solo una idea.",
    description: "Definimos qué vale la pena construir, lanzamos una primera versión y aprendemos de su uso.",
    path: ["Objetivo", "Producto", "Evolución"],
  },
  {
    label: "Datos dispersos",
    title: "Que los datos cuenten algo.",
    description: "Conectamos fuentes, ordenamos la información y la volvemos útil para tomar decisiones.",
    path: ["Fuentes", "Modelo", "Decisiones"],
  },
  {
    label: "Tareas repetidas",
    title: "Que el sistema haga su parte.",
    description: "Detectamos pasos manuales y diseñamos una solución que le devuelva tiempo al equipo.",
    path: ["Proceso", "Automatización", "Tiempo"],
  },
];

export function Hero() {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const selectedChallenge = challenges[activeChallenge];

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
            Ese «¿y si…?» que te da vueltas. <em>Hagámoslo posible.</em>
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
          className="hero-console"
        >
          <div className="hero-console-top">
            <span className="hero-console-signal" aria-hidden="true" />
            <span>UN PUNTO DE PARTIDA</span>
            <span className="hero-console-count">0{activeChallenge + 1} / 03</span>
          </div>
          <div className="hero-console-intro">
            <span>HAGAMOS EL EJERCICIO</span>
            <h2>¿Qué querés destrabar?</h2>
          </div>
          <div className="hero-console-options" role="group" aria-label="Elegí un desafío">
            {challenges.map((challenge, index) => (
              <button
                key={challenge.label}
                className={`hero-console-option${activeChallenge === index ? " is-active" : ""}`}
                type="button"
                aria-pressed={activeChallenge === index}
                onClick={() => setActiveChallenge(index)}
              >
                <span>0{index + 1}</span>
                <strong>{challenge.label}</strong>
                <ArrowUpRight size={17} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div className="hero-console-result" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChallenge}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18 }}
              >
                <span className="hero-console-result-label">UN POSIBLE CAMINO</span>
                <h3>{selectedChallenge.title}</h3>
                <p>{selectedChallenge.description}</p>
                <div className="hero-console-path" aria-label={selectedChallenge.path.join(" a ")}>
                  {selectedChallenge.path.map((step, index) => (
                    <span key={step}>{step}{index < 2 && <ArrowUpRight size={13} aria-hidden="true" />}</span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="hero-console-bottom">
            <a href="#contact">¿Y el tuyo? Hablemos <ArrowUpRight size={16} /></a>
            <div className="hero-console-socials" aria-label="Redes sociales">
              <a href="https://github.com/FTAMBURRO" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={17} />
              </a>
              <a href="https://www.linkedin.com/in/facundo-tamburro" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={17} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-width hero-footer-line">
        <span>FULL STACK</span><i /> <span>BACKEND</span><i /> <span>DATOS</span><i /> <span>IA APLICADA</span>
      </div>
    </section>
  );
}
