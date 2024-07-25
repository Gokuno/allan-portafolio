"use client"
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";


const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Telefono',
    description: '6621 82 64 50',

  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'jallanpazg@gmail.com',

  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Ciudad',
    description: 'Hermosillo, Sonora',

  },
];

import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_m4i9s0a', 'template_yfnchmc', form.current, {
        publicKey: 'dlAo230zbPdXgTCbL',
      })
      .then(
        () => {
          setSuccessMessage("El formulario fue enviado con éxito");
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  return (
   <motion.section 
   initial={{opacity:0}}
   animate={{
    opacity: 1, 
    transition: {delay: 2.4, duration: 0.4, ease: "easeIn" },
  }}
  className="py-6"
   >
    <div className="container mx-auto"> 
      <div className="flex flex-col xl:flex-row gap-[30px]">
        {/*form*/}
        <div className="xl:w-[54%] order-2 xl:order-none">
          <form className="flex flex-col gap-6 p-10 bg-[#232326] rounded-xl" ref={form} onSubmit={sendEmail}>
            <h3 className="text-4xl text-accent">Trabajemos juntos</h3>
            <p className="text-white/60">
              Tienes algun proyecto que quieres hechar andar, te puedo ayudar, trabajemos juntos para concretar tu proyecto personal o de negocios.
            </p>
            {/*input*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="firstname" placeholder="Nombre" name="firstname" />
              <Input type="lastname" placeholder="Apellido" name='lastname'/>
              <Input type="email" placeholder="Correo Electronico" name='email'/>
              <Input type="phone" placeholder="Telefono" name='phone'/>
            </div>
            {/*textarea*/}
            <Textarea 
              className="h-[200px]" 
              placeholder="Escribe tu mensaje o comentario."
              name="message"
            />
            <Button size="md" className="max-w-40">Enviar</Button>
          </form>
          {successMessage && (
            <div className="mt-4 p-4 bg-green-500 text-white rounded">
              {successMessage}
            </div>
          )}
        </div>
        {/*info*/}
        <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
          <ul className="flex flex-col gap-10">
            {info.map((item, index) => {
              return (
                <li 
                  key={index}
                  className="flex items-center gap-6"
                >
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#232326] text-accent rounded-md flex items-center justify-center">
                    <div>{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>

   </motion.section>
  )
}

export default Contact;