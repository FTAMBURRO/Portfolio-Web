import { Github, ExternalLink, Star } from "lucide-react";
import { motion } from "motion/react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  gradient: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Sistema de Rendimiento Académico",
      description:
        "Microservicio desarrollado para un municipio que gestiona el rendimiento académico de estudiantes. Incluye módulos de registro, evaluación y generación de reportes estadísticos.",
      technologies: ["Python", "Flask", "PostgreSQL", "REST API"],
      github: "https://github.com/FTAMBURRO/creus-rendimiento",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    },
    {
      title: "Carrito de Compras Java",
      description:
        "Aplicación cliente-servidor desarrollada en Java que implementa un sistema de carrito de compras con gestión de inventario, autenticación de usuarios y procesamiento de órdenes.",
      technologies: ["Java", "Swing", "JDBC", "MySQL"],
      github: "https://github.com/FTAMBURRO/TP-TecnologiaJava-SistemaDeCompras",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
    },
    {
      title: "IntegraLe VG - Sitio Web",
      description:
        "Sitio web corporativo en producción desarrollado con WordPress. Incluye gestión de contenido personalizado, formularios de contacto y optimización SEO.",
      technologies: ["WordPress", "PHP", "MySQL", "CSS"],
      demo: "https://integralevg.com.ar/",
      gradient: "from-purple-500 via-fuchsia-500 to-pink-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-orange-50/50 to-yellow-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-40 left-40 w-60 h-60 bg-emerald-300 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-40 w-60 h-60 bg-orange-300 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl text-gray-900 mb-4 font-bold">
            Proyectos
          </h2>
          <p className="text-gray-600 text-lg">
            Algunos de mis trabajos más destacados
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all overflow-hidden group"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl text-gray-900 font-bold">{project.title}</h3>
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Star className="text-yellow-500 fill-yellow-500" size={20} />
                  </motion.div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg shadow-lg flex-1 justify-center`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      GitHub
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} text-white rounded-lg shadow-lg flex-1 justify-center`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      Ver Sitio
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">¿Querés ver más proyectos?</p>
          <motion.a
            href="https://github.com/FTAMBURRO?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-xl hover:shadow-lg transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            Ver todos en GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
