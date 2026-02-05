import { motion } from "motion/react";
import { Heart, Code } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-900 text-gray-400 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-40 h-40 bg-emerald-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-orange-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-3"
        >
          <span>Hecho con</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="text-red-500 fill-red-500" size={20} />
          </motion.div>
          <span>y</span>
          <Code className="text-cyan-400" size={20} />
          <span>por Facundo Tamburro</span>
        </motion.div>
        <p className="text-gray-500">© {currentYear} Todos los derechos reservados</p>
        <p className="mt-2 text-sm text-gray-600">
          Full Stack Developer | Buenos Aires, Argentina 🇦🇷
        </p>
      </div>
    </footer>
  );
}