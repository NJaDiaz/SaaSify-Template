// /app/privacy/page.jsx

export const metadata = {
  title: "Política de Privacidad | SaaSify",
  description: "Conoce cómo manejamos tus datos en nuestro sitio.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <article className="prose dark:prose-invert max-w-4xl mx-auto">
          <h1>Política de Privacidad</h1>
          <p className="lead">Última actualización: [Fecha de última actualización]</p>
          
          <p>
            Bienvenido a [Nombre de tu Empresa/Producto] ("nosotros", "nuestro"). Nos comprometemos a proteger tu información personal y tu derecho a la privacidad. Si tienes alguna pregunta o inquietud sobre esta política o nuestras prácticas con respecto a tu información personal, por favor contáctanos en [tu-email@dominio.com].
          </p>

          <p>
            Esta política de privacidad se aplica a toda la información recopilada a través de nuestro sitio web (tudominio.dominio), y/o cualquier servicio relacionado, ventas, marketing o eventos (nos referimos a ellos colectivamente en esta política como los "Servicios").
          </p>

          <h2>1. ¿Qué información recopilamos?</h2>
          <h3>Información que nos proporcionas directamente</h3>
          <p>
            Recopilamos información personal que tú nos proporcionas voluntariamente cuando te registras en los Servicios, expresas interés en obtener información sobre nosotros o nuestros productos, participas en actividades en los Servicios o te pones en contacto con nosotros.
          </p>
          <ul>
            <li><strong>Información de la cuenta:</strong> Nombre, dirección de correo electrónico, contraseña.</li>
            <li><strong>Información de pago:</strong> Cuando realizas una compra, recopilamos la información necesaria para procesar tu pago, como los detalles de tu tarjeta de crédito, que son manejados de forma segura por nuestro procesador de pagos [Nombre del procesador, ej: Stripe].</li>
          </ul>

          <h3>Información que recopilamos automáticamente</h3>
          <p>
            Recopilamos automáticamente cierta información cuando visitas, usas o navegas por los Servicios. Esta información no revela tu identidad específica pero puede incluir información del dispositivo y de uso, como tu dirección IP, características del navegador y del dispositivo, sistema operativo, preferencias de idioma, URL de referencia, nombre del dispositivo, país, ubicación e información sobre cómo y cuándo usas nuestros Servicios.
          </p>
          
          <h2>2. ¿Cómo usamos tu información?</h2>
          <p>
            Usamos la información personal recopilada a través de nuestros Servicios para una variedad de propósitos comerciales que se describen a continuación:
          </p>
          <ul>
            <li><strong>Para facilitar la creación de cuentas y el proceso de inicio de sesión.</strong></li>
            <li><strong>Para procesar tus transacciones</strong> y gestionar tus pedidos.</li>
            <li><strong>Para enviarte comunicaciones administrativas,</strong> como información sobre tu cuenta, cambios en nuestros términos y políticas.</li>
            <li><strong>Para proteger nuestros Servicios,</strong> incluyendo la prevención de fraudes y la monitorización de la seguridad.</li>
            <li><strong>Para responder a tus consultas</strong> y ofrecer soporte a nuestros usuarios.</li>
          </ul>

          <h2>3. ¿Se compartirá tu información con alguien?</h2>
          <p>
            Solo compartimos información con tu consentimiento, para cumplir con las leyes, para proporcionarte servicios, para proteger tus derechos o para cumplir con obligaciones comerciales. Podemos procesar o compartir datos con los siguientes terceros:
          </p>
          <ul>
            <li><strong>Proveedores de servicios:</strong> Terceros que realizan servicios para nosotros o en nuestro nombre, como procesamiento de pagos, análisis de datos, alojamiento de sitios web y servicio al cliente.</li>
            <li><strong>Requerimientos legales:</strong> Podemos divulgar tu información cuando estemos legalmente obligados a hacerlo para cumplir con la ley aplicable.</li>
          </ul>
          <p><strong>Nunca venderemos tu información personal a terceros.</strong></p>

          <h2>4. ¿Cómo mantenemos tu información segura?</h2>
          <p>
            Hemos implementado medidas de seguridad técnicas y organizativas apropiadas diseñadas para proteger la seguridad de cualquier información personal que procesamos. Sin embargo, a pesar de nuestras salvaguardas y esfuerzos, ninguna transmisión electrónica por Internet o tecnología de almacenamiento de información puede garantizarse como 100% segura.
          </p>

          <h2>5. ¿Cuáles son tus derechos de privacidad?</h2>
          <p>
            Dependiendo de tu ubicación, tienes ciertos derechos con respecto a tu información personal. Estos pueden incluir el derecho a (i) solicitar acceso y obtener una copia de tu información personal, (ii) solicitar la rectificación o el borrado; y (iii) oponerte al procesamiento de tu información personal. Para realizar dicha solicitud, por favor utiliza los datos de contacto que se proporcionan a continuación.
          </p>

          <h2>6. Contacto</h2>
          <p>
            Si tienes preguntas o comentarios sobre esta política, puedes enviarnos un correo electrónico a [tu-email@dominio.com] o por correo postal a:
          </p>
          <p>
            [Nombre de tu Empresa]<br />
            [Tu Dirección Postal]<br />
            [Ciudad, Código Postal]<br />
            [País]
          </p>
        </article>
      </main>
    </div>
  );
}