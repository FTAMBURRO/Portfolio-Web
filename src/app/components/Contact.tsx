import { Mail, Github, Linkedin, MapPin, Send, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-60 h-60 bg-orange-400 rounded-full filter blur-3xl opacity-30"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-400 rounded-full filter blur-3xl opacity-30"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-60 h-60 bg-pink-400 rounded-full filter blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <MessageCircle className="mx-auto mb-4 text-white" size={48} />
          <h2 className="text-5xl text-white mb-4 font-bold">Contacto</h2>
          <p className="text-cyan-100 text-lg">
            ¿Tenés un proyecto en mente? ¡Hablemos!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
        >
          <p className="text-lg text-white text-center mb-8">
            Estoy abierto a nuevas oportunidades y colaboraciones. 
            No dudes en contactarme por cualquiera de estos medios.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.a
              href="mailto:tamburrofacundo@gmail.com"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all group border border-white/30"
            >
              <div className="p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl group-hover:rotate-12 transition-transform">
                <Mail size={24} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-cyan-200">Email</div>
                <div className="text-white font-semibold">tamburrofacundo@gmail.com</div>
              </div>
            </motion.a>

            <motion.a
              href="https://github.com/FTAMBURRO"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all group border border-white/30"
            >
              <div className="p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl group-hover:rotate-12 transition-transform">
                <Github size={24} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-cyan-200">GitHub</div>
                <div className="text-white font-semibold">github.com/FTAMBURRO</div>
              </div>
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/facundo-tamburro"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl hover:bg-white/30 transition-all group border border-white/30"
            >
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl group-hover:rotate-12 transition-transform">
                <Linkedin size={24} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-cyan-200">LinkedIn</div>
                <div className="text-white font-semibold">linkedin.com/in/facundo-tamburro</div>
              </div>
            </motion.a>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-4 p-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30"
            >
              <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl">
                <MapPin size={24} className="text-white" />
              </div>
              <div>
                <div className="text-sm text-cyan-200">Ubicación</div>
                <div className="text-white font-semibold">Buenos Aires, Argentina</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
