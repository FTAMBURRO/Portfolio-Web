import { ArrowUp, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/app/LanguageContext";
import DinoGame from "@/app/components/DinoGame";
import "@/styles/dino.css";

export function Footer() {
  const { language } = useLanguage();
  const en = language === "en";
  return (
    <footer className="site-footer">
      <div className="container-width footer-playground">
        <div className="footer-playground-heading">
          <span>{en ? "A LITTLE BREAK" : "UN PEQUEÑO RECREO"}</span>
          <p>{en ? "Made it this far? One more jump." : "¿Llegaste hasta acá? Un salto más."}</p>
        </div>
        <div className="footer-dino">
          <DinoGame autoStart={false} showScore background="#f7f7f7"
            label={en ? "Dinosaur game. Click or tap to start and jump. Focus the game to use Space or Arrow Up. Click after a crash to restart." : "Juego del dinosaurio. Hacé clic o tocá para empezar y saltar. Enfocá el juego para usar Espacio o Flecha arriba. Tocá después de chocar para reiniciar."} />
        </div>
        <p className="footer-playground-help">{en ? "Click or tap to play · Space / ↑ to jump · Click outside to pause" : "Clic o toque para jugar · Espacio / ↑ para saltar · Clic afuera para pausar"}</p>
      </div>
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
