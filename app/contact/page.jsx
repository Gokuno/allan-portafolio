"use client"
import { useRef, useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { LanguageContext } from "@/components/Header"; 

const translations = {
  en: {
    formTitle: "Let's Work Together",
    formDescription:
      "Do you have a project you'd like to get started? I can help. Let's work together to bring your personal or business project to life.",
    namePlaceholder: "First Name",
    lastNamePlaceholder: "Last Name",
    emailPlaceholder: "Email",
    phonePlaceholder: "Phone",
    messagePlaceholder: "Write your message or comment.",
    sendButton: "Send",
    successMessage: "The form was successfully sent!",
    info: [
      { icon: <FaPhoneAlt />, title: "Phone", description: "6621 82 64 50" },
      { icon: <FaEnvelope />, title: "Email", description: "jallanpazg@gmail.com" },
      { icon: <FaMapMarkedAlt />, title: "Location", description: "Hermosillo, Sonora" },
    ],
  },
  es: {
    formTitle: "Trabajemos juntos",
    formDescription:
      "¿Tienes algún proyecto que quieres echar andar? Puedo ayudarte. Trabajemos juntos para concretar tu proyecto personal o de negocios.",
    namePlaceholder: "Nombre",
    lastNamePlaceholder: "Apellido",
    emailPlaceholder: "Correo Electrónico",
    phonePlaceholder: "Teléfono",
    messagePlaceholder: "Escribe tu mensaje o comentario.",
    sendButton: "Enviar",
    successMessage: "El formulario fue enviado con éxito",
    info: [
      { icon: <FaPhoneAlt />, title: "Teléfono", description: "6621 82 64 50" },
      { icon: <FaEnvelope />, title: "Email", description: "jallanpazg@gmail.com" },
      { icon: <FaMapMarkedAlt />, title: "Locacion", description: "Hermosillo, Sonora" },
    ],
  },
};

const Contact = () => {
  const { lang } = useContext(LanguageContext); // Access the current language
  const { formTitle, formDescription, namePlaceholder, lastNamePlaceholder, emailPlaceholder, phonePlaceholder, messagePlaceholder, sendButton, successMessage, info } = translations[lang];

  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_m4i9s0a", "template_yfnchmc", form.current, {
        publicKey: "dlAo230zbPdXgTCbL",
      })
      .then(
        () => {
          setMessage(successMessage);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#232326] rounded-xl" ref={form} onSubmit={sendEmail}>
              <h3 className="text-4xl text-accent">{formTitle}</h3>
              <p className="text-white/60">{formDescription}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder={namePlaceholder} name="firstname" />
                <Input type="text" placeholder={lastNamePlaceholder} name="lastname" />
                <Input type="email" placeholder={emailPlaceholder} name="email" />
                <Input type="tel" placeholder={phonePlaceholder} name="phone" />
              </div>
              <Textarea className="h-[200px]" placeholder={messagePlaceholder} name="message" />
              <Button size="md" className="max-w-40">
                {sendButton}
              </Button>
            </form>
            {message && (
              <div className="mt-4 p-4 bg-green-500 text-white rounded">
                {message}
              </div>
            )}
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#232326] text-accent rounded-md flex items-center justify-center">
                    <div>{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;