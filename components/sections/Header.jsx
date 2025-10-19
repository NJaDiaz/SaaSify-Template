"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import  ThemeToggle  from "@/components/ui/ThemeToggle";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Una pequeña función de utilidad para combinar las clases
const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export function Header() {
  // Estado para saber si el usuario ha hecho scroll
  const [scrolled, setScrolled] = useState(false);

  // useEffect para añadir un listener de scroll cuando el componente se monta
  useEffect(() => {
    const handleScroll = () => {
      // Si el scroll en el eje Y es mayor a 10px, marcamos como scrolled
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    // Es importante limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 transition-all duration-300",
        // Clases que cambian con el scroll
        scrolled
          ? "rounded-2xl border backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl transition-colors">
          {siteConfig.title}
        </Link>

        {/* Links de Navegación (para pantallas medianas y grandes) */}
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botones de la derecha */}
        <div className="flex items-center gap-4">
          <ThemeToggle className="transition-colors" />
          <button className="hidden sm:block bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:opacity-80 transition-opacity">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}