// /components/sections/Footer.jsx
import { siteConfig } from "@/config/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-foreground/10 bg-gray-800/20">
      <div className="container mx-auto px-4">
        
        {/* Cuerpo Principal del Footer (Grilla de Enlaces) */}
        <div className="grid grid-cols-2 text-center gap-8 py-16">
          {siteConfig.footer.links.map((column) => (
            <div key={column.title}>
              <h4 className="font-semibold text-foreground mb-4">{column.title}</h4>
              <ul className="space-y-3">
                {column.items.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Barra Inferior del Footer */}
        <div className="py-8 border-t border-foreground/10 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          
          {/* Copyright */}
          <p className="text-sm text-foreground/60 text-center md:text-left">
             {siteConfig.title}
          </p>
            <p className="text-sm text-foreground/60 text-center md:text-left">
            © {currentYear} Todos los derechos reservados.
          </p>

          {/* Iconos de Redes Sociales */}
          <div className="flex items-center gap-4">
            {siteConfig.footer.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-foreground/80 hover:text-foreground transition-all duration-300 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}