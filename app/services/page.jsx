"use client"

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num:'1',
    title: 'Desarrollo Web',
    description: 'El desarrollo web es el proceso de crear y mantener sitios web y aplicaciones en línea que no solo sean visualmente atractivos, sino también altamente funcionales y seguros. Un desarrollador web puede construir desde simples páginas informativas hasta complejas plataformas de comercio electrónico, asegurándose de que el sitio sea rápido, responsivo y fácil de navegar en cualquier dispositivo. Al contar con un sitio web profesional, su negocio puede alcanzar una audiencia más amplia, mejorar la interacción con los clientes y aumentar la credibilidad y visibilidad en el mercado digital.',
    href: '',
  },
  {
    num:'2',
    title: 'Diseñador UI/UX',
    description: 'Un diseñador UI/UX se enfoca en crear experiencias de usuario excepcionales y diseños de interfaz que no solo sean estéticamente agradables, sino también intuitivos y funcionales. Mediante una comprensión profunda del comportamiento del usuario y las mejores prácticas de diseño, un diseñador UI/UX puede optimizar la interacción de los clientes con su producto o servicio. Esto no solo mejora la satisfacción del usuario, sino que también puede aumentar las conversiones y la lealtad del cliente, impulsando así el éxito de su negocio.',
    href: '',
  },
  {
    num:'3',
    title: 'Diseñador de Logos',
    description: 'Un diseñador de logos crea identidades visuales únicas y memorables que capturan la esencia y los valores de su marca. Un logo bien diseñado es fundamental para el reconocimiento y la coherencia de la marca, ayudando a diferenciar su negocio en un mercado competitivo. Un logo efectivo transmite profesionalismo y confianza, dejando una impresión duradera en sus clientes y estableciendo una base sólida para toda su estrategia de branding.',
    href: '',
  },
  {
    num:'4',
    title: 'SEO',
    description: 'La optimización para motores de búsqueda (SEO) es una estrategia crucial para mejorar la visibilidad de su sitio web en los resultados de búsqueda orgánica. Mediante técnicas de SEO, su negocio puede atraer más tráfico cualificado, aumentar las oportunidades de conversión y, en última instancia, generar más ingresos. Un buen especialista en SEO se asegura de que su sitio web cumpla con las mejores prácticas y se mantenga actualizado con los algoritmos de búsqueda, ayudándole a mantenerse por delante de la competencia y a alcanzar sus objetivos comerciales en el entorno digital.',
    href: '',
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return  (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div 
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/*top*/}
               <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-bold text-outline text-transparent group-hover:text-outline-hover transition-all duration-200">{service.num}</div>
                <Link 
                  href={service.href} 
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-200 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl"/>
                </Link>
               </div>
               {/*title*/}
               <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-200">{service.title}</h2>
               {/*description*/}
               <p className="text-white/60">{service.description}</p>
               {/*border*/}
               <div className="border-b border-white/20 w-full"></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
  
}

export default Services