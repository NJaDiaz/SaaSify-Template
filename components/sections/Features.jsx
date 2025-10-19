"use client"

import { siteConfig } from "@/config/siteConfig";
import { useEffect, useState } from "react";



export function Features() {
  return (
    <section
      id="features"
      className="container mx-auto px-4 py-24 sm:py-32"
    >
      {/* Título y subtítulo */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {siteConfig.features.title}
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          {siteConfig.features.subtitle}
        </p>
      </div>

      {/* Grid de características */}
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {siteConfig.features.list.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
}

const FeatureCard = ({ feature }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    // Para evitar saltos de layout (CLS), renderizamos un esqueleto invisible
    return <div className="h-[250px] rounded-2xl" />; 
  }

  const Icon = feature.icon;

  return (
    // El "group" permite que el hover en este div controle los estilos de sus hijos
    <div className="group relative rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]">
      
      {/* 1. EL AURA MÁGICA ✨ */}
      {/* Un gradiente radial borroso que aparece en el fondo al hacer hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                   opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30 dark:group-hover:opacity-50 -z-10"
      />

      {/* El contenido de la tarjeta */}
      <div
        className="relative z-10 h-full p-6 rounded-2xl
                   border border-white/10 dark:border-white/20
                   shadow-lg dark:shadow-black/30
                   transition-colors duration-300"
      >
        {/* 2. ICONO INTERACTIVO 🚀 */}
        <div
          className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-lg
                     transition-transform duration-300 group-hover:-translate-y-1"
        >
          <Icon className="w-6 h-6" />
        </div>
        
        <h3 className="text-lg font-semibold">{feature.title}</h3>
        <p className="mt-2 opacity-80">{feature.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;