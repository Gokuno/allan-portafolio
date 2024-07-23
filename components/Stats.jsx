"use client"

import CountUp from "react-countup";

const stats = [
    {
        num: 5,
        text: "Años de Experiencia",
    },
    {
        num: 33,
        text: "Proyectos Completados",
    },
    {
        num: 9,
        text: "Tecnologias Implementadas",
    },
    {
        num: 150,
        text: "Codigos Subidos",
    },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pb-0 xl:pt-0">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return (
                        <div 
                            key={index} 
                            className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                            <CountUp 
                                end={item.num} 
                                duration={5} 
                                delay={2} 
                                className="text-4xl xl:text-6xl font-bold" 
                            />
                            <p className={`${
                                item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                            } leading-snug text-white/80`}
                            >
                                {item.text}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats