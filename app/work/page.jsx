"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsPlayCircleFill } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "1",
    category: 'frontend',
    title: 'Nasa React Web App',
    description: 'Application web creada con React.js, Tailwind.css y con API de la NASA. Muestra la "Foto Astronomica del Dia" actual que sube la NASA en su portal web.',
    stack: [
      { name: 'Javascript' },
      { name: 'React.js' },
      { name: 'Tailwind.css' },
    ],
    image: "/assets/work/nasaapp.png",
    live: 'https://nasa-apod-reacjs-app.netlify.app/',
    github: 'https://github.com/Gokuno/nasa-react-app',
  },
  {
    num: "2",
    category: 'frontend',
    title: 'FitnessHelper',
    description: 'Aplicacion de entrenamiento gym creada con React.js y Tailwind.css. Esta aplicacion te permite seleccionar el tipo de entrenamiento, zona muscular y el objectivo que se desea obtener, en base a tus selecciones te da los mejores entrenamientos y la cantidad de sets. Tambien cuenta con su contador de sets manual.',
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'React.js' },
      { name: 'Tailwind.css' },
    ],
    image: "/assets/work/gymapp.png",
    live: 'https://appdegym.netlify.app/',
    github: 'https://github.com/Gokuno/gym-app',
  },
  {
    num: "3",
    category: 'fullstack',
    title: 'Clon de Airbnb',
    description: 'Aplicacion web fullstack clon de Airbnb, esta aplicacion fue creada usando tecnologias de desarrollo web como, Next.js 14, React, Tailwind, Prisma, MongoDB y NextAuth.',
    stack: [
      { name: 'Next.js' },
      { name: 'Typescript' },
      { name: 'Prisma' },
      { name: 'MongoDB' },
    ],
    image: "/assets/work/airbnb-clon.png",
    live: 'https://airbnb-clone-bay-one.vercel.app/',
    github: 'https://github.com/Gokuno/airbnb-clone',
  },
  {
    num: "4",
    category: 'frontend',
    title: 'TalkScribe',
    description: 'Applicacion web en React que te permite transcribir y traducir grabaciones o audios. Esta applicacion usas "web workers" para correr models Machine Learning en el motor de busqueda.',
    stack: [
      { name: 'Javascript' },
      { name: 'React.js' },
      { name: 'Tailwind.css' },
    ],
    image: "/assets/work/talkscribe.png",
    live: 'https://talkscribe.netlify.app/',
    github: 'https://github.com/Gokuno/machinelearning-app',
  },
  {
    num: "5",
    category: 'frontend',
    title: 'Portafolio con graficos 3D(No compatible con mobile)',
    description: 'Portafolio con graficos 3D dinamico. Este portafolio se creo con React, ThreeJs, React Three Fiber y Framer Motion. Tambien emplementa el mandar correo electronico de confirmacion en el formulario de contacto.',
    stack: [

      { name: 'React.js' },
      { name: 'Three.js' },
      { name: 'React Three Fiber' },
      { name: 'Framer-Motion' },
    ],
    image: "/assets/work/portafolio3d.png",
    live: 'http://portafolio.1upwebdesigns.com/',
    github: 'https://github.com/Gokuno/3d-portafolio',
  },
  {
    num: "6",
    category: 'frontend',
    title: 'Agencia 1UP Web Designs',
    description: 'Agencia de servicios web, creada en Wordpress, Elementor y Javascript.',
    stack: [

      { name: 'Wordpress' },
      { name: 'Elementor' },
      { name: 'Javascript' },

    ],
    image: "/assets/work/1upwebdesigns.png",
    live: 'https://1upwebdesigns.com/',
    github: 'https://github.com/Gokuno/',
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index 
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 p-6 rounded-lg shadow-lg flex flex-col md:flex-row md:gap-8"
            >
              <div className="w-full md:w-1/2 h-[300px] relative">
                <Image src={project.image} fill className="object-cover rounded-lg" alt="" />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="text-8xl leading-none font-bold text-outline text-transparent mb-5">
                    { /* {project.num}*/}
                  </div>
                  <h2 className="text-[32px] font-bold leading-none text-white group-hover:text-accent transition-all duration-200 capitalize mb-5">
                    {project.title}
                  </h2>
                  <p className="text-white/60">{project.description}</p>
                  <ul className="flex gap-4 mt-4">
                    {project.stack.map((item, index) => (
                      <li key={index} className="text-md text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-white/20 pt-4 mt-4 flex items-center gap-4">
                  <Link href={project.live}>
                    {/* Live project button */}
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsPlayCircleFill className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Proyecto en Vivo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  <Link href={project.github}>
                    {/* GitHub project button */}
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Work
