import { ArrowUp, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-width footer-inner">
        <div>
          <a href="#home" className="footer-brand">FT<span>.</span></a>
          <p>Full Stack, IT e IA aplicada desde Buenos Aires.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/FTAMBURRO" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={17} /></a>
          <a href="https://www.linkedin.com/in/facundo-tamburro" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a>
          <a href="#home" aria-label="Volver arriba"><ArrowUp size={17} /></a>
        </div>
      </div>
      <div className="container-width footer-bottom">
        <span>© {new Date().getFullYear()} Facundo Tamburro</span>
        <span>Hecho con React + TypeScript</span>
      </div>
    </footer>
  );
}
