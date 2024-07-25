"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaLaravel, FaPhp } from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// about data

const about ={
  title: 'Acerca de mi',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros libero, posuere nec nisi in, scelerisque facilisis nulla. Donec imperdiet rutrum nulla, auctor tristique augue molestie a. ',
  info: [
    {
      fieldName: "Nombre",
      fieldValue: "Allan Paz",
    },
    {
      fieldName: "Telefono",
      fieldValue: "6621 82 64 50",
      href: ""
    },
    {
      fieldName: "Experiencia",
      fieldValue: "6+ Años",
    },
    {
      fieldName: "Email",
      fieldValue: "jallanpazg@gmail.com",
    },
    {
      fieldName: "Idiomas",
      fieldValue: "Ingles y Español",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Disponible",
    },
  ]
};

// experience data
const experience = {
  icon: "",
  title: 'Mi Experiencia',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros libero, posuere nec nisi in, scelerisque facilisis nulla. Donec imperdiet rutrum nulla, auctor tristique augue molestie a. ',
  items: [
    {
      company: "1UP Web Designs",
      position: "Desarrollador Full Stack",
      duration: "Marzo 2020 - A la fecha",
    },
    {
      company: "Freelancer",
      position: "Desarrollador y Diseñador Web",
      duration: "Diciembre 2017 - A la fecha",
    },
    {
      company: "ISEA",
      position: "Vinculacion y Sistemas",
      duration: "Octubre 2015 - Diciembre 2019",
    },
    {
      company: "IGATEK",
      position: "Tecnico en Instalacion y programacion",
      duration: "Febrero 2011 - Septiembre 2015",
    },
  ]
};

// education data
const education = {
  icon: "",
  title: 'Mi Educacion',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros libero, posuere nec nisi in, scelerisque facilisis nulla. Donec imperdiet rutrum nulla, auctor tristique augue molestie a. ',
  items: [
    {
      institution: "Universidad Tecnologica de Hermosillo",
      degree: "Ingeniero en Mecatronica",
      duration: "2013 ",
    },
    {
      institution: "Universidad Tecnologica de Hermosillo",
      degree: "Tecnico en Electronica y Automatizacion",
      duration: "2010 ",
    },
  ]
};

// certificates data
const certificates = {
  icon: "",
  title: 'Mis Certificados',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros libero, posuere nec nisi in, scelerisque facilisis nulla. Donec imperdiet rutrum nulla, auctor tristique augue molestie a. ',
  items: [
    {
      certificate: "Masters en Javscript",
      institution: "Udemy",
      href: "",
    },
    {
      certificate: "Ultimate SEO training for websites",
      institution: "Udemy",
      href: "",
    },
    {
      certificate: "Shopify Expert",
      institution: "Udemy",
      href: "",
    },
    {
      certificate: "Responsive Web Designs",
      institution: "freeCodeCamp",
      href: "",
    },
    {
      certificate: "Legacy Javascript Algorithms and Data Structure",
      institution: "Udemy",
      href: "",
    },
  ]
};

// skills data
const skills = {
  title: 'Mis Abilidades',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros libero, posuere nec nisi in, scelerisque facilisis nulla. Donec imperdiet rutrum nulla, auctor tristique augue molestie a. ',
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
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, 
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
    <div className="container mx-auto mb-10">
      <Tabs
        defaultValue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
      >
        <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
          <TabsTrigger value="experience">Experiencia Laboral</TabsTrigger>
          <TabsTrigger value="education">Educacion</TabsTrigger>
          <TabsTrigger value="certificates">Certificados</TabsTrigger>
          <TabsTrigger value="skills">Abilidades</TabsTrigger>
          <TabsTrigger value="about">Acerca de Mi</TabsTrigger>
        </TabsList>

        {/*content*/}
        <div className="min-h-[70vh] w-full">
          {/*experience*/}
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold">{experience.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
              <ScrollArea className="j-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((items, index) => {
                    return (
                      <li 
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{items.duration}</span>
                        <h3 className="text-xl max-w-[300px] min-h-[80px] text-center lg:text-left">{items.position}</h3>
                        <div className="flex items-center gap-3">
                          {/*dot*/}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{items.company}</p>
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
              <h3 className="text-4xl font-bold">{education.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              <ScrollArea className="j-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((items, index) => {
                    return (
                      <li 
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{items.duration}</span>
                        <h3 className="text-xl max-w-[300px] min-h-[80px] text-center lg:text-left">{items.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/*dot*/}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm">{items.institution}</p>
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
              <h3 className="text-4xl font-bold">{certificates.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{certificates.description}</p>
              <ScrollArea className="j-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {certificates.items.map((items, index) => {
                    return (
                      <li 
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent"></span>
                        <h3 className="text-xl max-w-[300px] min-h-[80px] text-center lg:text-left">{items.certificate}</h3>
                        <div className="flex items-center gap-3">
                          {/*dot*/}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{items.institution}</p>
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
              <h3 className="text-4xl font-bold">{skills.title}</h3>
              <p className="nax-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
              {skills.SkillList.map((skill, index) => {
                return (
                  <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
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
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => {
                  return (
                    <li 
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
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
  )
}

export default Resume