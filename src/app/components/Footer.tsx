import { ArrowUp, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/app/LanguageContext";

export function Footer() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <footer className="site-footer">
      <div className="container-width footer-inner">
        <div>
          <a href="#home" className="footer-brand">FT<span>.</span></a>
          <p>{en ? "Full Stack, IT, and applied AI from Buenos Aires." : "Full Stack, IT e IA aplicada desde Buenos Aires."}</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/FTAMBURRO" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/facundo-tamburro" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href="#home" aria-label={en ? "Back to top" : "Volver arriba"}><ArrowUp size={17} /></a>
        </div>
      </div>
      <div className="container-width footer-bottom">
        <span>© {new Date().getFullYear()} Facundo Tamburro</span>
        <span>{en ? "Built with React + TypeScript" : "Hecho con React + TypeScript"}</span>
      </div>
    </footer>
  );
}
