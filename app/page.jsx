"use client"
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { LanguageContext } from "@/components/Header";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const { lang } = useContext(LanguageContext);

  const content = {
    es: {
      title: "Desarrollador Web",
      greeting: "Hola, soy",
      description: "Soy ingeniero especializado en el desarrollo de sitios, aplicaciones web y programacion.",
      resumeButton: "Descargar CV",
      resumeLink: "/assets/cv/Jorge Allan Paz ES.pdf",
    },
    en: {
      title: "Web Developer",
      greeting: "Hi, I am",
      description: "I am an engineer specializing in the development of websites, web applications, and programming.",
      resumeButton: "Download Resume",
      resumeLink: "/assets/cv/Jorge Allan Paz EN.pdf",
    },
  };

  const currentContent = content[lang];

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">{currentContent.title}</span>
            <h1 className="h1 mb-6">
              {currentContent.greeting} <br />
              <span className="text-accent">Allan Paz</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              {currentContent.description}
            </p>
            {/* Button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <div className="gap-2">
                <div className="mb-4">
                  <a href={currentContent.resumeLink} download>
                    <Button
                      variant="outline"
                      size="lg"
                      className="uppercase flex items-center gap-2"
                    >
                      <span>{currentContent.resumeButton}</span>
                      <FiDownload className="text-xl" />
                    </Button>
                  </a>
                </div>
              </div>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-200"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;