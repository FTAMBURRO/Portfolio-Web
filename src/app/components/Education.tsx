import { GraduationCap, Award, BookOpen, Globe } from "lucide-react";
import { motion } from "motion/react";

export function Education() {
  const education = [
    {
      title: "Tecnicatura en Programación de Computadores",
      institution: "Universidad Nacional de Lomas de Zamora",
      period: "2022 - 2025",
      icon: GraduationCap,
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Cursos y Certificaciones",
      institution: "",
      details: [
        "WordPress - Coderhouse",
        "Introducción a Inteligencia Artificial - Santander Academy",
        "BigQuery ML - Google Cloud Skills Boost"
      ],
      period: "",
      icon: Award,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Estudios de Inglés",
      institution: "Instituto “My English School”",
      period: "(2010-2018)",
      icon: Globe,
      color: "from-orange-500 to-amber-600"
    }
  ];

  return (
    <section id="education" className="pt-12 pb-20 bg-gradient-to-br from-emerald-50/50 via-cyan-50/50 to-teal-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-25">
        <div className="absolute top-20 left-10 w-48 h-48 bg-emerald-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-56 h-56 bg-cyan-300 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-teal-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-gray-900 mb-4 text-center font-bold"
        >
          Formación
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Mi trayectoria académica y aprendizaje continuo
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${item.color}`}></div>
              
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 bg-gradient-to-br ${item.color} rounded-2xl`}>
                    <item.icon size={32} className="text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                  {item.title}
                </h3>
                
                {item.institution && (
                  <p className="text-gray-600 text-center mb-1 text-sm">
                    {item.institution}
                  </p>
                )}

                {item.details && (
                  <ul className="text-gray-600 text-sm space-y-2 mt-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="text-center">
                        {detail}
                      </li>
                    ))}
                  </ul>
                )}
                
                {item.period && (
                  <p className="text-gray-500 text-center text-sm mt-2">
                    {item.period}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
