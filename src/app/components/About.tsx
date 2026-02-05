import { MapPin, Briefcase, Heart, Target, Users } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const sections = [
    {
      title: "Quién soy",
      icon: Briefcase,
      content: "Me formé como Técnico Universitario en Programación y hoy trabajo desarrollando soluciones para sistemas reales. Disfruto trabajar con datos, backend y lógica de negocio, pero también encarar el frontend cuando es necesario. Busco siempre soluciones simples, bien pensadas y fáciles de mantener.",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Cómo trabajo",
      icon: Heart,
      content: "Creo que la puntualidad y el compromiso no son opcionales. Prefiero preguntar cuando algo no está claro antes que asumir. Me gusta que mi código hable por sí mismo: limpio, documentado, fácil de mantener. Aprendo rápido y me adapto, porque en este rubro quedarse quieto no es una opción.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Qué busco",
      icon: Target,
      content: "Ambiente colaborativo donde pueda crecer profesionalmente. Proyectos desafiantes que impulsen mis habilidades técnicas. Trabajar con equipos que valoren la excelencia y la innovación. Oportunidades para aportar y aprender en cada desafío.",
      color: "from-orange-500 to-amber-600"
    }
  ];

  return (
    <section id="about" className="pt-20 pb-12 bg-gradient-to-br from-white via-cyan-50/40 to-emerald-50/40 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 right-20 w-40 h-40 bg-orange-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-teal-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-gray-900 mb-4 text-center font-bold"
        >
          Sobre mí
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center gap-4 mb-12 text-gray-600 justify-center"
        >
          <div className="flex items-center gap-2">
            <MapPin size={20} className="text-emerald-600" />
            <span>Buenos Aires, Argentina</span>
          </div>
          <div className="hidden md:block w-2 h-2 bg-orange-400 rounded-full"></div>
          <div className="flex items-center gap-2">
            <Users size={20} className="text-cyan-600" />
            <span>Full Stack Developer</span>
          </div>
        </motion.div>

        {/* Three sections */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${section.color}`}></div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${section.color} rounded-xl`}>
                    <section.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed text-base">
                  {section.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Qualities section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl text-white font-bold mb-4">Lo que me define como profesional:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="text-white/90">Puntualidad en entregas y cumplimiento de objetivos</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="text-white/90">Asumo responsabilidad sobre mi trabajo</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="text-white/90">Comunicación clara y colaboración efectiva</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="text-white/90">Disposición constante para aprender y mejorar</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="text-white/90">Código limpio, documentado y escalable</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">✓</span>
                </div>
                <p className="text-white/90">Enfoque en soluciones efectivas y sostenibles</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}