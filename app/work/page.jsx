"use client"

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, } from "react-icons/bs";

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
      {name: 'Javascript'},
      {name: 'React.js'},
      {name: 'Tailwind.css'},
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
      {name: 'Html 5'},
      {name: 'Css 3'},
      {name: 'React.js'},
      {name: 'Tailwind.css'},
    ],
    image: "/assets/work/gymapp.png",
    live: 'https://appdegym.netlify.app/',
    github: 'https://github.com/Gokuno/gym-app',
  },
  {
    num: "3",
    category: 'frontend',
    title: 'TalkScribe',
    description: 'Applicacion web en React que te permite transcribir y traducir grabaciones o audios. Esta applicacion usas "web workers" para correr models Machine Learning en el motor de busqueda.',
    stack: [
      {name: 'Javascript'},
      {name: 'React.js'},
      {name: 'Tailwind.css'},
    ],
    image: "/assets/work/talkscribe.png",
    live: 'https://talkscribe.netlify.app/',
    github: 'https://github.com/Gokuno/machinelearning-app',
  },
  {
    num: "4",
    category: 'frontend',
    title: 'Portafolio con graficos 3D(No compatible con mobile)',
    description: 'Portafolio con graficos 3D dinamico. Este portafolio se creo con React, ThreeJs, React Three Fiber y Framer Motion. Tambien emplementa el mandar correo electronico de confirmacion en el formulario de contacto.',
    stack: [
     
      {name: 'React.js'},
      {name: 'Three.js'},
      {name: 'React Three Fiber'},
      {name: 'Framer-Motion'},
    ],
    image: "/assets/work/portafolio3d.png",
    live: 'http://portafolio.1upwebdesigns.com/',
    github: 'https://github.com/Gokuno/3d-portafolio',
  },
  {
    num: "5",
    category: 'frontend',
    title: 'Agencia 1UP Web Designs',
    description: 'Agencia de servicios web, creada en Wordpress, Elementor y Javascript.',
    stack: [
     
      {name: 'Wordpress'},
      {name: 'Elementor'},
      {name: 'Javascript'},
      
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
      initial={{opacity:0}}
      animate={{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn" }}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/*outline num*/}
              <div className="text-8xl leading-none font-bold text-outline text-transparent">
                {project.num}
              </div>
              {/*project category*/}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-200 capitalize">
                {project.title}
              </h2>
              {/*project description*/}
              <p className="text-white/60">{project.description}</p>
              {/*stack*/}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/*remove the last comma*/}
                      {index !==project.stack.length - 1&& ","}
                    </li>
                  )
                })}
              </ul>
              {/*border*/}
              <div className="border border-white/20"></div>
              {/*butttons*/}
              <div className="flex items-center gap-4">
                {/*live proyect button*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Proyecto en Vivo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*github proyect button*/}
                <Link href={project.github}>
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
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12" 
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-blue-50/20">
                      {/*overlay*/}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/*image*/}
                      <div className="relative w-full h-full">
                        <Image src={project.image} fill className="object-cover" alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              {/* slider buttons */}
              <WorkSliderBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work
