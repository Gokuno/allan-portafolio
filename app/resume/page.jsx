"use client"

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaLaravel, FaPhp } from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

// about data

const about ={
  title: 'Acerca de mi',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros libero, posuere nec nisi in, scelerisque facilisis nulla. Donec imperdiet rutrum nulla, auctor tristique augue molestie a. ',
  info: [
    {
      fieldName: "Name",
      fieldValue: "Allan Paz",
    },
    {
      fieldName: "Phone",
      fieldValue: "6621 82 64 50",
      href: ""
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ Años",
    },
    {
      fieldName: "Email",
      fieldValue: "jallanpazg@gmail.com",
    },
    {
      fieldName: "Languages",
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
      institucion: "Universidad Tecnologica de Hermosillo",
      degree: "Tecnico en Electronica y Automatizacion",
      duration: "2010 ",
    },
  ]
};

// certificates data
const certificate = {
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
    <div> Resume page</div>
  )
}

export default Resume