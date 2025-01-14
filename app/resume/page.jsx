"use client";
import { useContext } from "react";
import { LanguageContext } from "@/components/Header";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaLaravel, FaPhp, FaVuejs } from "react-icons/fa";
import { SiMongodb, SiMysql, SiNextdotjs, SiPostgresql, SiTailwindcss } from "react-icons/si";
import Image from "next/image";


// about data
const about = {
  es: {
    title: 'Acerca de mi',
    description: 'Mi experiencia profesional se ha centrado en la administración de proyectos, resolver problemas, programación y desarrollo web. Motivado por el constante aprendizaje que ofrece la evolución de las herramientas de programacion.',
    info: [
      {
        fieldName: "Nombre",
        fieldValue: "Jorge Allan Paz Garza",
      },
      {
        fieldName: "Telefono",
        fieldValue: "+52 6621 82 64 50",
      },
      {
        fieldName: "Experiencia",
        fieldValue: "10 Años",
      },
      {
        fieldName: "Email",
        fieldValue: "jallanpazg@gmail.com",
      },
      {
        fieldName: "Idiomas",
        fieldValue: "Ingles y Español",
      },
    ],
  },
  en: {
    title: 'About Me',
    description: 'My professional experience has focused on project management, problem-solving, programming, and web development. I am motivated by the continuous learning opportunities provided by the evolution of programming tools.',
    info: [
      {
        fieldName: "Name",
        fieldValue: "Jorge Allan Paz Garza",
      },
      {
        fieldName: "Phone",
        fieldValue: "+52 6621 82 64 50",
      },
      {
        fieldName: "Experience",
        fieldValue: "10 Years",
      },
      {
        fieldName: "Email",
        fieldValue: "jallanpazg@gmail.com",
      },
      {
        fieldName: "Languages",
        fieldValue: "Ingles y Español",
      },
    ],
  }
};

// experience data
const experience = {
  es:{
    icon: "",
    title: 'Experience Profesional',
    description: 'Cuento con 10 años de experiencia en programacion y desarrollo web',
    items: [
      {
        company: "1UP Web Designs",
        position: "Desarrollador web y diseño",
        duration: "Marzo 2020 - Diciembre 2024",
      },
      {
        company: "Consultor Externo",
        position: "Desarrollador Full stack, Programacion y Diseñador Web",
        duration: "Diciembre 2014 - A la fecha",
      },
      {
        company: "ISEA (Instituto Sonorense de Educacion para los Adultos)",
        position: "Vinculacion y Sistemas",
        duration: "Octubre 2015 - Diciembre 2019",
      },
      {
        company: "IGATEK",
        position: "Tecnico en Instalacion, Programacion y Webmaster",
        duration: "Febrero 2010 - Septiembre 2015",
      },
    ]
  },
  en: {
    icon: "",
    title: 'Profesional Experience',
    description: 'I have 10 years of experience in programming and web development.',
    items: [
      {
        company: "1UP Web Designs",
        position: "Web Development and Design",
        duration: "March 2020 - Diciembre 2024",
      },
      {
        company: "External Consultant",
        position: "Full stack Developer, programming and Web Designer",
        duration: "Since December 2014",
      },
      {
        company: "ISEA (Instituto Sonorense de Educacion para los Adultos)",
        position: "Linkage Coordinator and Systems",
        duration: "October 2015 - December 2019",
      },
      {
        company: "IGATEK",
        position: "Installation, Programming and Webmaster",
        duration: "Febuary 2010 - September 2015",
      },
    ]
  }
};

// education data
const education = {
  es: {
    icon: "",
    title: 'Mi Educacion',
    description: 'Carreras Universitarias.',
    items: [
      {
        institution: "Universidad Tecnologica de Hermosillo",
        degree: "Titulo en Ingenieria en Mecatronica",
        duration: "2013 ",
      },
      {
        institution: "Universidad Tecnologica de Hermosillo",
        degree: "Titulo en Tecnico en Electronica y Automatizacion",
        duration: "2010 ",
      },
    ]
  },
  en: {
    icon: "",
    title: 'My Education',
    description: 'University Degrees.',
    items: [
      {
        institution: "Universidad Tecnologica de Hermosillo",
        degree: "Bachelor's Degree in Mechatronics Engineering",
        duration: "2013 ",
      },
      {
        institution: "Universidad Tecnologica de Hermosillo",
        degree: "Technical Degree in Electronics and Automation",
        duration: "2010 ",
      },
    ]
  },
};

// certificates data
const certificates = {
  es: {
    icon: "",
    title: 'Mis Certificados',
    description: 'Estos son algunos de los certificados y diplomas que tengo actualmente.',
    items: [
      {
        certificate: "Masters en Javscript",
        institution: "Udemy",
        image: "/assets/resume/MastersjsEng.png",
      },
      {
        certificate: "SEO para sitios web",
        institution: "Udemy",
        image: "/assets/resume/seo.jpg",
      },
      {
        certificate: "Experto en Shopify",
        institution: "Udemy",
        image: "/assets/resume/shopify.jpg",
      },
      {
        certificate: "Diseño Web Responsivo",
        institution: "freeCodeCamp",
        image: "/assets/resume/responsiveweb.png",
      },
      {
        certificate: "Algoritmos y Estructura de Datos",
        institution: "freeCodeCamp",
        image: "/assets/resume/javascript.png",
      },
    ]
  },
  en: {
    icon: "",
    title: 'My Certificates',
    description: 'Some of the current certificates and diplomas I have.',
    items: [
      {
        certificate: "Masters in Javscript",
        institution: "Udemy",
        image: "/assets/resume/MastersjsEng.png",
      },
      {
        certificate: "SEO for websites",
        institution: "Udemy",
        image: "/assets/resume/seo.jpg",
      },
      {
        certificate: "Shopify Expert",
        institution: "Udemy",
        image: "/assets/resume/shopify.jpg",
      },
      {
        certificate: "Responsive Web Designs",
        institution: "freeCodeCamp",
        image: "/assets/resume/responsiveweb.png",
      },
      {
        certificate: "Algorithms and Data Structure",
        institution: "freeCodeCamp",
        image: "/assets/resume/javascript.png",
      },
    ]
  },
};

// skills data
const skills = {
  es: {
    title: 'Mis Abilidades',
    description: 'Estas son algunas de los lenguajes, frameworks, librerias y abilidades con las que he trabajado.',
    SkillList: [
      {
        icon: <FaHtml5 />,
        name: 'html 5',
      },
      {
        icon: <FaCss3 />,
        name: 'css 3',
      },
      {
        icon: <FaJs />,
        name: 'javascript',
      },
      {
        icon: <FaReact />,
        name: 'react.js',
      },
      {
        icon: <FaVuejs />,
        name: 'vue.js',
      },
      {
        icon: <SiNextdotjs />,
        name: 'next.js',
      },
      {
        icon: <SiTailwindcss />,
        name: 'tailwind.css',
      },
      {
        icon: <FaNodeJs />,
        name: 'node.js',
      },
      {
        icon: <SiMongodb />,
        name: 'mongodb',
      },
      {
        icon: <SiPostgresql />,
        name: 'postgresql',
      },
      {
        icon: <SiMysql />,
        name: 'mysql',
      },
      {
        icon: <FaPhp />,
        name: 'php',
      },
      {
        icon: <FaLaravel />,
        name: 'laravel',
      },
      {
        icon: <FaFigma />,
        name: 'figma',
      },
    ]
  },
  en: {
    title: 'My Skills',
    description: 'Here are some of the languages, frameworks, libraries, and skills I have worked with.',
    SkillList: [
      {
        icon: <FaHtml5 />,
        name: 'html 5',
      },
      {
        icon: <FaCss3 />,
        name: 'css 3',
      },
      {
        icon: <FaJs />,
        name: 'javascript',
      },
      {
        icon: <FaReact />,
        name: 'react.js',
      },
      {
        icon: <FaVuejs />,
        name: 'vue.js',
      },
      {
        icon: <SiNextdotjs />,
        name: 'next.js',
      },
      {
        icon: <SiTailwindcss />,
        name: 'tailwind.css',
      },
      {
        icon: <FaNodeJs />,
        name: 'node.js',
      },
      {
        icon: <SiMongodb />,
        name: 'mongodb',
      },
      {
        icon: <SiPostgresql />,
        name: 'postgresql',
      },
      {
        icon: <SiMysql />,
        name: 'mysql',
      },
      {
        icon: <FaPhp />,
        name: 'php',
      },
      {
        icon: <FaLaravel />,
        name: 'laravel',
      },

      {
        icon: <FaFigma />,
        name: 'figma',
      },
    ]
  },
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  const tabsContent = {
    es: {
      about: "Acerca de Mi",
      education: "Educacion",
      experience: "Experiencia Laboral",
      certificates: "Certificados",
      skills: "Abilidades",
    },
    en: {
      about: "About Me",
      education: "Education",
      experience: "Work Experience",
      certificates: "Certificates",
      skills: "Skills",
    },
  };
  
  const { lang } = useContext(LanguageContext);
  const currentTabs = tabsContent[lang];
  const currentAbout = about[lang];
  const currentEducation = education[lang];
  const currentExperience = experience[lang];
  const currentCertificates = certificates[lang];
  const currentSkills = skills[lang];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto mb-10">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">{currentTabs.about}</TabsTrigger>
            <TabsTrigger value="education">{currentTabs.education}</TabsTrigger>
            <TabsTrigger value="experience">{currentTabs.experience}</TabsTrigger>
            <TabsTrigger value="certificates">{currentTabs.certificates}</TabsTrigger>
            <TabsTrigger value="skills">{currentTabs.skills}</TabsTrigger>
            
          </TabsList>

          {/*content*/}
          <div className="min-h-[70vh] w-full">
            {/*experience*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{currentExperience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{currentExperience.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {currentExperience.items.map((items, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] rounded-lg border border-white/20 h-[184px] py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <div>
                            <span className="text-accent text-sm">{items.company}</span>
                            <h3 className="text-xl max-w-[300px] min-h-[60px] text-center justify-center lg:text-left md:text-sm mt-2">{items.position}</h3>
                          </div>
                          <div className="flex items-center gap-3">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm">{items.duration}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*education*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{currentEducation.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{currentEducation.description}</p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {currentEducation.items.map((items, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] border border-white/20 h-[184px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start"
                        >
                          <div>
                            <span className="text-accent text-sm">{items.institution}</span>
                            <h3 className="text-lg max-w-[300px] min-h-[60px] text-center justify-center lg:text-left md:text-sm mt-2">{items.degree}</h3>
                          </div>
                          <div className="flex items-center gap-3 mb-2">
                            {/*dot*/}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 text-sm">{items.duration}</p>
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*certificates*/}
            <TabsContent value="certificates" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{currentCertificates.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{currentCertificates.description}</p>
                <ScrollArea className="h-[500px]">
                  <ul className="grid grid-cols-1 gap-[30px]">
                    {currentCertificates.items.map((items, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] border border-white/20 h-[260px] py-6 px-10 rounded-lg flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{items.institution}</span>
                          <h3 className="text-xl max-w-[350px] min-h-[40px] text-center lg:text-left">{items.certificate}</h3>
                          <div className="flex justify-center items-start h-[200px] w-[200px] mx-auto">
                            {items.image && (
                              <Image
                                src={items.image}
                                width={200}
                                height={200}
                                className="object-cover"
                                alt={`${items.certificate} image`}
                              />
                            )}
                          </div>
                        </li>
                      )
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/*skills*/}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{currentSkills.title}</h3>
                  <p className="nax-w-[600px] text-white/60 mx-auto xl:mx-0">{currentSkills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {currentSkills.SkillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-lg border border-white/20 flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-200">{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/*about*/}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px] p-1">
                <h3 className="text-4xl font-bold">{currentAbout.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{currentAbout.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {currentAbout.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;