import { Award, BookOpen, GraduationCap, Languages } from "lucide-react";
import { motion } from "motion/react";

const education = [
  {
    period: "2022—2025",
    title: "Tecnicatura en Programación de Computadores",
    institution: "Universidad Nacional de Lomas de Zamora",
    detail: "Base sólida en programación, bases de datos, arquitectura y desarrollo de sistemas.",
    icon: GraduationCap,
  },
  {
    period: "Formación continua",
    title: "IA, datos y herramientas digitales",
    institution: "Santander Academy · Google Cloud Skills Boost · Coderhouse",
    detail: "Formación en inteligencia artificial, BigQuery ML y WordPress, junto con aprendizaje práctico constante.",
    icon: Award,
  },
  {
    period: "2010—2018",
    title: "Inglés",
    institution: "Instituto My English School",
    detail: "Formación sostenida para seguir aprendiendo y trabajar con documentación técnica.",
    icon: Languages,
  },
];

export function Education() {
  return (
    <section id="education" className="section section-mist education-section">
      <div className="container-width">
        <div className="section-heading section-heading-split">
          <div>
            <p className="eyebrow">Formación</p>
            <h2>Una base técnica para seguir creciendo sin ponerme techo.</h2>
          </div>
          <p>
            La formación me dio fundamentos. La práctica, la curiosidad y la capacidad de adaptarme
            me permiten llevarlos a proyectos cada vez más ambiciosos.
          </p>
        </div>

        <div className="education-grid">
          {education.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: index * 0.08 }}
              className="education-card"
            >
              <div className="education-card-top">
                <span className="education-card-icon"><item.icon size={19} /></span>
                <span className="education-period">{item.period}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="education-institution">{item.institution}</p>
              <p>{item.detail}</p>
            </motion.article>
          ))}
        </div>

        <div className="education-note">
          <BookOpen size={18} />
          <span>Lo que sé hoy es una base; lo que estoy construyendo recién empieza.</span>
        </div>
      </div>
    </section>
  );
}
