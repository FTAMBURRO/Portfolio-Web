import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "@/app/LanguageContext";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const en = language === "en";
  const links = [
    { href: "#services", label: en ? "Services" : "Servicios" },
    { href: "#projects", label: en ? "Projects" : "Proyectos" },
    { href: "#experience", label: en ? "Experience" : "Experiencia" },
    { href: "#education", label: en ? "Education" : "Formación" },
    { href: "#about", label: en ? "About me" : "Sobre mí" },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="site-header"
    >
      <nav className="container-width nav-shell" aria-label={en ? "Main navigation" : "Navegación principal"}>
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

        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={en ? "Choose language" : "Elegir idioma"}>
            <button type="button" lang="es" aria-pressed={!en} onClick={() => setLanguage("es")}>ES</button>
            <button type="button" lang="en" aria-pressed={en} onClick={() => setLanguage("en")}>EN</button>
          </div>
          <a className="header-cta" href="#contact">
            {en ? "Let's talk" : "Hablemos"} <ArrowUpRight size={16} />
          </a>
        </div>

        <button
          className="mobile-menu-trigger"
          type="button"
          aria-label={mobileMenuOpen ? (en ? "Close menu" : "Cerrar menú") : (en ? "Open menu" : "Abrir menú")}
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
                {en ? "Let's talk about your project" : "Hablemos de tu proyecto"} <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
