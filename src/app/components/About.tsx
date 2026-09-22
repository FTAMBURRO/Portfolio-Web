import { ArrowUpRight, Check, Compass, HeartHandshake, Lightbulb } from "lucide-react";
import { motion } from "motion/react";

const values = [
  { icon: Compass, title: "Visión de punta a punta", text: "Conecto interfaz, lógica, datos y operación para que el resultado tenga sentido completo." },
  { icon: Lightbulb, title: "Curiosidad y adaptación", text: "Aprendo, pruebo herramientas nuevas y busco posibilidades donde otros ven límites." },
  { icon: HeartHandshake, title: "Responsabilidad y colaboración", text: "Cumplo objetivos, comunico con claridad y trabajo para que cada entrega sea sostenible." },
];

export function About() {
  return (
    <section id="about" className="section section-paper about-section">
      <div className="container-width about-layout">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          className="about-copy"
        >
          <div className="about-identity">
            <img src="/portfolio.jpeg" alt="Facundo Tamburro" loading="lazy" />
            <div>
              <strong>Facundo Tamburro</strong>
              <span>Full Stack Developer · Buenos Aires</span>
            </div>
          </div>
          <p className="eyebrow">Sobre mí</p>
          <h2>Full Stack por naturaleza. Curioso por necesidad.</h2>
          <p>
            Soy Facundo, Técnico Universitario en Programación y desarrollador Full Stack de Buenos Aires.
            Me muevo entre frontend, backend, datos, infraestructura y producto porque me interesa entender
            cómo funciona el sistema completo, no solo una pantalla aislada.
          </p>
          <p>
            La tecnología cambia rápido y eso me entusiasma: estoy incorporando IA, automatización y nuevas
            formas de construir para adaptarme a los cambios y convertirlos en oportunidades concretas.
            Busco desafíos que me permitan aportar, crecer y seguir convirtiendo ideas en código útil.
          </p>
          <a className="button button-dark" href="#contact">Conocer próximos pasos <ArrowUpRight size={17} /></a>
        </motion.div>

        <div className="values-list">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.08 }}
              className="value-item"
            >
              <span className="value-icon"><value.icon size={18} /></span>
              <div><h3>{value.title}</h3><p>{value.text}</p></div>
              <Check className="value-check" size={17} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
