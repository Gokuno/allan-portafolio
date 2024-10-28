"use client"

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '1',
    title: 'Desarrollo Web',
    description: 'Cuento con más de 10 años de experiencia en el desarrollo web, creando y manteniendo sitios web y aplicaciones en línea que combinan un alto atractivo visual con funcionalidad y seguridad robusta. He trabajado en proyectos que van desde sitios informativos sencillos hasta plataformas de comercio electrónico complejas y escalables. Mi experiencia abarca el uso de diversas tecnologías, incluyendo Wordpress, Shopify, PHP, JavaScript, TypeScript, React, Next.js, Node.js, Three.js, Python, Convex, MySQL y MongoDB, entre otras, permitiéndome abordar soluciones completas y adaptativas según las necesidades del cliente.',
    href: '',
  },
  {
    num: '2',
    title: 'Gestion de proyectos',
    description: 'He liderando equipos y asegurando la entrega exitosa de soluciones digitales que cumplen con altos estándares de calidad, funcionalidad y seguridad. He coordinado proyectos que van desde sitios informativos hasta plataformas de comercio electrónico complejas, supervisando desde la planificación inicial y la asignación de recursos hasta la implementación y el seguimiento de resultados. Mi enfoque en la gestión se basa en metodologías ágiles y herramientas de gestion, lo que permite una comunicación efectiva, la adaptación a cambios y el cumplimiento de plazos.',
    href: '',
  },
  {
    num: '3',
    title: 'Diseñador de Logos',
    description: 'Cuento con experiencia creando logos, he desarrollado identidades visuales únicas que capturan la esencia y los valores de cada marca. Mi enfoque en el diseño va más allá de lo estético, buscando crear logos que no solo sean memorables y adaptables, sino que también fortalezcan el posicionamiento de la marca en un mercado competitivo. Trabajo de cerca con el cliente en un proceso colaborativo, desde la investigación inicial hasta la fase final de entrega, asegurando que cada detalle refleje la personalidad y visión de la marca. Mis herramientas de diseño incluyen Adobe Illustrator, Photoshop, Canva y Figma.',
    href: '',
  },
  {
    num: '4',
    title: 'SEO',
    description: 'Tengo experiencia en optimización para motores de búsqueda (SEO), he ayudado a numerosas empresas a mejorar su visibilidad en línea y atraer tráfico cualificado a sus sitios web. Mi enfoque se basa en una comprensión profunda de las mejores prácticas de SEO y el análisis de datos para implementar estrategias efectivas que abarcan desde la investigación de palabras clave y la optimización on-page hasta la creación de contenido de calidad y la construcción de enlaces. Utilizo herramientas como Google Analytics, SEMrush y Moz para monitorear el rendimiento y ajustar las tácticas según sea necesario, asegurando que cada cliente no solo cumpla con los estándares actuales de SEO.',
    href: '',
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-between p-6 rounded-lg border border-white/20 bg-[#232329] min-h-[800px] group"
              >
                {/*top*/}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-bold text-outline text-transparent group-hover:text-outline-hover transition-all duration-200">{service.num}</div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-200 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*title*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-200 ">{service.title}</h2>
                {/*description*/}
                <p className="text-white/60 mb-4">{service.description}</p>
                {/*border*/}
                <div className="border-b border-white/20 w-full mb-4"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )

}

export default Services