// /components/sections/Header.jsx
"use client";

// 1. Importa useState, useEffect y los nuevos iconos
import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Menu, X } from "lucide-react"; // <-- Nuevos iconos

const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  // 2. Estado para controlar el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efecto para el scroll del header (ya lo tenías)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // 3. Nuevo efecto para bloquear el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Limpieza al desmontar el componente
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl z-50 transition-all duration-300",
          scrolled
            ? "rounded-2xl border border-card-background/20 bg-background/80 backdrop-blur-lg"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="font-bold text-xl transition-colors">
            {siteConfig.title}
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {siteConfig.navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground/80">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="#pricing" className="hidden sm:block bg-foreground text-background px-4 py-2 rounded-full font-semibold text-sm hover:opacity-80 transition-opacity">
              Get Started
            </a>
            
            {/* 4. Botón de Hamburguesa (solo visible en móvil) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-card-background transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* 5. Panel del Menú Móvil (pantalla completa) */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-lg transition-opacity duration-300 ease-in-out",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container mx-auto flex flex-col items-center justify-center h-full gap-8">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              // Al hacer clic en un enlace, cerramos el menú
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-semibold transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
          <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="bg-foreground text-background px-6 py-3 rounded-full font-semibold text-lg hover:opacity-80 transition-opacity">
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}