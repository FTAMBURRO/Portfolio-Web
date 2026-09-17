import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const links = [
  { href: "#services", label: "Servicios" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Experiencia" },
  { href: "#education", label: "Formación" },
  { href: "#about", label: "Sobre mí" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="site-header"
    >
      <nav className="container-width nav-shell" aria-label="Navegación principal">
        <a className="brand" href="#home" onClick={() => setMobileMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">FT</span>
          <span className="brand-copy">
            <strong>Facundo Tamburro</strong>
            <small>Full Stack Developer</small>
          </span>
        </a>

        <div className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <a className="header-cta" href="#contact">
          Hablemos <ArrowUpRight size={16} />
        </a>

        <button
          className="mobile-menu-trigger"
          type="button"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav"
          >
            <div className="container-width mobile-nav-inner">
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  {link.label}
                </a>
              ))}
              <a className="mobile-nav-cta" href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Hablemos de tu proyecto <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
