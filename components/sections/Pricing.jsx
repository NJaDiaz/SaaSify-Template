"use client";

import { useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Check } from "lucide-react";

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="container mx-auto px-4 py-24 sm:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {siteConfig.pricing.title}
        </h2>
        <p className="mt-4 text-lg text-foreground/80"> {/* Usamos opacidad para el subtítulo */}
          {siteConfig.pricing.subtitle}
        </p>
      </div>

      {/* 1. TOGGLE MEJORADO ✨ */}
      <div className="mt-12 flex items-center justify-center gap-4">
        <span className={`font-medium ${!isYearly ? 'text-indigo-600' : 'text-[#777d91]/60'}`}>
          Mensual
        </span>
        <button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out
                     ${isYearly ? 'bg-indigo-500' : 'bg-gray-200'}`} // Cambio de color al activar
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isYearly ? "translate-x-5" : "translate-x-0"}`}
          />
        </button>
        <span className={`font-medium ${isYearly ? 'text-indigo-500' : 'text-[#777d91]/60'}`}>
          Anual (Ahorra 20%)
        </span>
      </div>

      {/* Grid de Planes */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
        {siteConfig.pricing.plans.map((plan) => {
          const monthlySavings = (plan.monthlyPrice * 12) - plan.yearlyPrice;

          return (
            <div
              key={plan.name}
              className={`group relative p-8 rounded-2xl transition-all duration-300
                         ${plan.isFeatured 
                           ? "shadow-lg shadow-indigo-500/20 dark:shadow-indigo-500/10 border-2 border-indigo-500" 
                           : "border border-foreground/10 hover:-translate-y-1"}`}
            >
              {/* 2. DISEÑO DE TARJETA 🎨 */}
              <div className="absolute inset-0 bg-card-background rounded-2xl -z-10"></div>
              
              {plan.isFeatured && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
                    Más Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-foreground/80">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-bold">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-foreground/60">/{isYearly ? "año" : "mes"}</span>
                {/* 3. INSIGNIA DE AHORRO 💰 */}
                {isYearly && monthlySavings > 0 && (
                  <span className="text-xs font-semibold text-green-600 bg-green-100 dark:bg-green-900/50 dark:text-green-400 px-2 py-1 rounded-full">
                    Ahorra ${monthlySavings}
                  </span>
                )}
              </div>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-indigo-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 block w-full rounded-full px-4 py-3 text-center font-semibold transition-transform duration-200 group-hover:scale-105
                           ${plan.isFeatured 
                             ? "bg-indigo-500 text-white hover:bg-indigo-600" 
                             : "bg-yellow-500 text-background hover:opacity-80"}`}
              >
                {plan.ctaText}
              </a>
            </div>
          )
        })}
      </div>
    </section>
  );
}