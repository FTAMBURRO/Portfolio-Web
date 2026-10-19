import { Header } from "@/app/components/Header";
import { Hero } from "@/app/components/Hero";
import { Services } from "@/app/components/Services";
import { Projects } from "@/app/components/Projects";
import { Experience } from "@/app/components/Experience";
import { Education } from "@/app/components/Education";
import { Process } from "@/app/components/Process";
import { Skills } from "@/app/components/Skills";
import { About } from "@/app/components/About";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { LanguageProvider } from "@/app/LanguageContext";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <LanguageProvider><div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Experience />
        <Education />
        <Process />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div></LanguageProvider>
  );
}
