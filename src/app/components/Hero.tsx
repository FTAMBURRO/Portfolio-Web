import { Github, Linkedin, ChevronDown, Terminal, Sparkles, Download } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-[100svh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-cyan-50 to-orange-50 pt-24 pb-20 md:pt-20 md:pb-0 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 mb-4"
          >
            <Sparkles className="text-emerald-600" size={24} />
            <span className="text-emerald-600 font-semibold">Full Stack Developer</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl text-gray-900 mb-4 font-bold"
          >
            Facundo
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600 bg-clip-text text-transparent">
              Tamburro
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-2 mb-6 text-gray-700"
          >
            <Terminal size={20} className="text-orange-600" />
            <span className="text-lg">Técnico Universitario en Programación</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            Transformando ideas en código. Especializado en backend, bases de datos 
            y arquitectura de sistemas, preparándome para esta nueva era de IA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Proyectos
            </motion.button>
            <motion.a
              href="https://github.com/FTAMBURRO"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-gray-700 rounded-xl hover:shadow-lg border-2 border-gray-200 hover:border-emerald-400 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              GitHub
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/facundo-tamburro"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-gray-700 rounded-xl hover:shadow-lg border-2 border-gray-200 hover:border-cyan-400 transition-all flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              LinkedIn
            </motion.a>
            <motion.a
              href="/CV%20-%20TAMBURRO,%20Facundo%20(24).pdf"
              download="CV - TAMBURRO, Facundo (24).pdf"
              className="px-5 py-2.5 bg-emerald-50 text-emerald-700 rounded-lg hover:shadow-lg border border-emerald-300 hover:border-emerald-500 hover:bg-emerald-100 transition-all flex items-center gap-1.5 text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={16} />
              CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side - Photo */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-sm mx-auto"
        >
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-cyan-600 rounded-3xl blur-2xl opacity-30"></div>
            <img
              src="/portfolio.jpeg"
              alt="Facundo Tamburro"
              className="relative rounded-3xl shadow-2xl w-full aspect-square object-cover border-4 border-white"
            />
          </motion.div>

          {/* Floating badges */}
          <motion.div
            className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-emerald-200"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-sm font-semibold text-emerald-600">🚀 Disponible</p>
          </motion.div>

          <motion.div
            className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-xl shadow-lg border border-orange-200"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          >
            <p className="text-sm font-semibold text-orange-600">📍 Buenos Aires</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={32} className="text-emerald-600" />
      </motion.div>
    </section>
  );
}