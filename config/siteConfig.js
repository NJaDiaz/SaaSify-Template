import { Rocket, Zap, ShieldCheck, Twitter, Github, Linkedin } from "lucide-react"; // <-- Importa los íconos que usarás


export const siteConfig = {
  // Información General del Sitio
  title: "SaaSify",
  description: "Una landing page moderna y minimalista para startups, SaaS y productos digitales.",
  url: "https://tudominio.com", // Reemplaza con la URL de tu demo en Vercel cuando la tengas

  // Links del Navbar
  navLinks: [
    { href: "#features", label: "Características" },
    { href: "#pricing", label: "Precios" },
    { href: "#faq", label: "FAQ" },
  ],

  // ===== SECCIÓN HERO =====
  hero: {
    title: "Lanza tu próximo proyecto SaaS en minutos.",
    subtitle: "SaaSify te da una base de código moderna, optimizada y lista para desplegar, para que te enfoques en lo que realmente importa: tu producto.",
    cta: {
      primary: {
        text: "Empezar ahora",
        href: "#pricing",
      },
      secondary: {
        text: "Ver en GitHub",
        href: "https://github.com/tuusuario/saasify-template", // Actualiza este link
      },
    },
  },
  // ============================

  // =====SECCIÓN FEATURES =====
  features: {
    title: "Todo lo que necesitas para lanzar. Ni más, ni menos.",
    subtitle: "Diseñado para ser la base perfecta, SaaSify incluye características pensadas para la velocidad y la escalabilidad.",
    list: [
      {
        title: "Hecho con Next.js",
        description: "Aprovecha el poder del App Router, Server Components y la última tecnología de React para un rendimiento excepcional.",
        icon: Rocket, // Usamos la referencia al componente del ícono
      },
      {
        title: "Despliegue Instantáneo",
        description: "Conecta tu repositorio y despliega tu landing en segundos en plataformas como Vercel o Netlify. Sin configuración.",
        icon: Zap,
      },
      {
        title: "SEO Optimizado",
        description: "Metadata generada estáticamente y etiquetas Open Graph para asegurar que tu sitio se vea perfecto al compartirlo.",
        icon: ShieldCheck,
      },
      // Puedes añadir más características aquí...
    ],
  },
  // =================================

  // =====SECCIÓN PRICING =====

  pricing: {
    title: "Precios Flexibles",
    subtitle: "Elige el plan que se adapte a tus necesidades. Comienza gratis y escala cuando estés listo.",
    plans: [
      {
        name: "Básico",
        description: "Para proyectos personales y MVPs.",
        monthlyPrice: 20,
        yearlyPrice: 200, // Ahorro de $40
        features: [
          "1 Proyecto",
          "Uso comercial",
          "Actualizaciones de por vida",
        ],
        ctaText: "Comprar Básico",
        isFeatured: false,
      },
      {
        name: "Pro",
        description: "Para startups y profesionales.",
        monthlyPrice: 45,
        yearlyPrice: 450, // Ahorro de $90
        features: [
          "Proyectos ilimitados",
          "Uso comercial",
          "Actualizaciones de por vida",
          "Soporte prioritario (30 días)",
        ],
        ctaText: "Comprar Pro",
        isFeatured: true, // <-- Este plan se destacará
      },
    ],
  },
  // =================================

  // =====SECCIÓN FAQ =====
  faq: {
    title: "Preguntas Frecuentes",
    subtitle: "¿Tienes dudas? Aquí encontrarás las respuestas a las preguntas más comunes.",
    items: [
      {
        question: "¿Qué recibo exactamente cuando compro la plantilla?",
        answer: "Recibes un archivo .zip que contiene todo el código fuente del proyecto en Next.js y Tailwind CSS, junto con la documentación para que puedas empezar a personalizarlo y desplegarlo en minutos.",
      },
      {
        question: "¿Puedo usar la plantilla en proyectos para clientes?",
        answer: "¡Sí! Ambas licencias (Básica y Pro) te permiten usar la plantilla para crear sitios web comerciales, tanto para tus propios proyectos como para los de tus clientes.",
      },
      {
        question: "¿Qué incluye el soporte de la Licencia Pro?",
        answer: "Con la Licencia Pro, tienes 30 días de soporte por correo electrónico para resolver dudas sobre la configuración inicial, personalización de contenido y el despliegue de la plantilla.",
      },
      {
        question: "¿Recibiré futuras actualizaciones?",
        answer: "Sí, todos los compradores reciben acceso a las futuras actualizaciones de la plantilla de por vida sin costo adicional.",
      },
    ],
  },
  // ============================

 // ===== NUEVA Y MEJORADA SECCIÓN FOOTER =====
  footer: {
    // Columnas de enlaces del sitemap
    links: [
      {
        title: "Producto",
        items: [
          { label: "Características", href: "#features" },
          { label: "Precios", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ],
      },
      {
        title: "Legal",
        items: [
          { label: "Política de Privacidad", href: "/privacy" },
          { label: "Términos de Servicio", href: "/terms" },
        ],
      },
      // Puedes añadir más columnas aquí si lo necesitas
    ],
    // Iconos de redes sociales
    socials: [
      {
        name: "Twitter",
        href: "https://twitter.com/tuusuario",
        icon: Twitter,
      },
      {
        name: "GitHub",
        href: "https://github.com/tuusuario/saasify-template",
        icon: Github,
      },
      {
        name: "LinkedIn",
        href: "https://linkedin.com/in/tuusuario",
        icon: Linkedin,
      }
    ],
  },
  // ===========================================
};