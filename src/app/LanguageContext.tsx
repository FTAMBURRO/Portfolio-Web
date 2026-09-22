import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "es" | "en";

const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const saved = window.localStorage.getItem("portfolio-language");
      if (saved === "es" || saved === "en") return saved;
    } catch {
      // The site remains usable if browser storage is unavailable.
    }
    return navigator.language.toLowerCase().startsWith("en") ? "en" : "es";
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = language === "es"
      ? "Facundo Tamburro — Desarrollador Full Stack"
      : "Facundo Tamburro — Full Stack Developer";
    const description = language === "es"
      ? "Portfolio de Facundo Tamburro, desarrollador Full Stack con experiencia en sistemas, datos e IA aplicada."
      : "Facundo Tamburro's portfolio: Full Stack developer with experience in systems, data, and applied AI.";
    document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    try {
      window.localStorage.setItem("portfolio-language", language);
    } catch {
      // Persisting the preference is optional.
    }
  }, [language]);

  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
