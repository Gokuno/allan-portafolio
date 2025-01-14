"use client"
import { useState, createContext, useContext } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

// Create a context for language state
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("es");

  const toggleLanguage = () => {
    const newLang = lang === "es" ? "en" : "es";
    setLang(newLang);
    document.documentElement.lang = newLang;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const Header = () => {
  const { lang, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            <span className="text-accent">Al</span>lan
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav lang={lang} />
          <Button onClick={toggleLanguage}>
            {lang === "es" ? "English" : "Español"}
          </Button>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav lang={lang} toggleLanguage={toggleLanguage} />
        </div>
      </div>
    </header>
  );
};

export default Header;