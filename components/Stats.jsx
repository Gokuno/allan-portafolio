"use client"

import { useContext } from "react";
import CountUp from "react-countup";
import { LanguageContext } from "@/components/Header";

const statsContent = {
    es: [
        { num: 10, text: "Años de Experiencia" },
        { num: 67, text: "Proyectos Completados" },
        { num: 9, text: "Tecnologias Implementadas" },
        { num: 500, text: "Contribuciones" },
    ],
    en: [
        { num: 10, text: "Years of Experience" },
        { num: 67, text: "Projects Completed" },
        { num: 9, text: "Technologies Implemented" },
        { num: 500, text: "Contributions" },
    ],
};

const Stats = () => {
    const { lang } = useContext(LanguageContext);
    const stats = statsContent[lang];

    return (
        <section className="pt-4 pb-12 xl:pb-0 xl:pt-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-bold"
                            />
                            <p
                                className={`${
                                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                                } leading-snug text-white/80`}
                            >
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;