import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-24"
    >
      {/* Fondo con gradiente radial */}
      <div 
        aria-hidden="true" 
        className="absolute inset-0 top-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]"
      />

      {/* Título principal con efecto de gradiente */}
      <h1 className="text-5xl md:text-7xl font-bold bg-clip-text">
        {siteConfig.hero.title}
      </h1>

      {/* Subtítulo */}
      <p className="sub-hero mt-6 text-lg max-w-2xl ">
        {siteConfig.hero.subtitle}
      </p>

      {/* Botones de Llamada a la Acción (CTA) */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
        <Link
          href={siteConfig.hero.cta.primary.href}
          className="boton-hero w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-lg hover:opacity-80 transition-opacity"
        >
          {siteConfig.hero.cta.primary.text}
        </Link>
        <Link
          href={siteConfig.hero.cta.secondary.href}
          target="_blank" // Abre en una nueva pestaña
          rel="noopener noreferrer" // Buenas prácticas de seguridad
          className="boton2-hero w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-lg border border-gray-700 hover:bg-gray-800 hover:text-white transition-colors"
        >
          {siteConfig.hero.cta.secondary.text}
        </Link>
      </div>
    </section>
  );
}