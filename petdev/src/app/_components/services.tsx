"use client";

import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import useEmblaCarousel from "embla-carousel-react";
import {
  Bath,
  Stethoscope,
  Dog,
  Hotel,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const services = [
  {
    title: "Banho e Tosa",
    description:
      "Mantenha seu pet limpo e saudável com nossos serviços de banho e tosa profissionais.",
    duration: "1h",
    price: "R$ 50,00",
    icon: <Bath />,
    linkText: "Agendar serviço",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Cuide da saúde do seu pet com consultas especializadas e atendimento de qualidade.",
    duration: "1h",
    price: "R$ 120,00",
    icon: <Stethoscope />,
    linkText: "Marcar consulta",
  },
  {
    title: "Adestramento",
    description:
      "Treinamento personalizado para melhorar o comportamento e obediência do seu pet.",
    duration: "10 dias",
    price: "A partir de R$ 200,00",
    icon: <Dog />,
    linkText: "Saiba mais",
  },
  {
    title: "Hospedagem Pet",
    description:
      "Deixe seu pet em um ambiente seguro e confortável enquanto viaja.",
    duration: "Diária",
    price: "R$ 80,00 por noite",
    icon: <Hotel />,
    linkText: "Reservar estadia",
  },
];

export function Services() {
  const [emblaRef, emplaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emplaApi?.scrollPrev();
  }

  function scrollNext() {
    emplaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-center justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>

                      <a
                        href="#"
                        className="flex item-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300"
                      >
                        <WhatsappLogo className="w-5 h-5" />
                        Entrar em Contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6 text-hray-600 " />
          </button>

          <button
            className=" bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6 text-hray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
