// /components/sections/FAQ.jsx
"use client";

import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  // Estado para saber qué ítem del acordeón está abierto.
  // -1 significa que ninguno está abierto.
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="container mx-auto px-4 py-24 sm:py-32">
      {/* Título y subtítulo */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {siteConfig.faq.title}
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          {siteConfig.faq.subtitle}
        </p>
      </div>

      {/* Contenedor del Acordeón */}
      <div className="mt-12 max-w-3xl mx-auto">
        {siteConfig.faq.items.map((item, index) => (
          <div key={index} className="border-b border-gray-200 dark:border-gray-800 py-6">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center text-left"
            >
              <h3 className="text-lg font-medium">{item.question}</h3>
              <span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5" />
                ) : (
                  <Plus className="w-5 h-5" />
                )}
              </span>
            </button>
            
            {/* Contenido de la Respuesta (se muestra condicionalmente) */}
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}