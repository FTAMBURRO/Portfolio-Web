import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-cyan-100 shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.button
            onClick={() => scrollToSection("home")}
            className="h-14 w-14 hover:opacity-80 transition-opacity bg-white rounded-lg flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/logo.png" alt="FT Logo" className="h-10 w-10 object-contain" />
          </motion.button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {["about", "skills", "projects", "contact"].map((section) => (
              <li key={section}>
                <motion.button
                  onClick={() => scrollToSection(section)}
                  className="text-gray-600 hover:text-emerald-600 transition-colors capitalize relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section === "about" ? "Sobre mí" : section === "skills" ? "Tecnologías" : section === "projects" ? "Proyectos" : "Contacto"}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
                </motion.button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-600 hover:text-emerald-600 p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-3 pb-4 overflow-hidden"
            >
              {["about", "skills", "projects", "contact"].map((section, index) => (
                <motion.li
                  key={section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(section)}
                    className="block w-full text-left text-gray-600 hover:text-emerald-600 transition-colors py-2 px-4 rounded-lg hover:bg-emerald-50 capitalize"
                  >
                    {section === "about" ? "Sobre mí" : section === "skills" ? "Tecnologías" : section === "projects" ? "Proyectos" : "Contacto"}
                  </button>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}