export const metadata = {
  title: "Términos de Servicio | SaaSify",
  description: "Lee nuestros términos y condiciones de uso.",
};

export default function TermsOfServicePage() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 py-16 md:py-24">
        <article className="prose dark:prose-invert max-w-4xl mx-auto">
          <h1>Términos de Servicio</h1>
          {/* 👇 Placeholder para la fecha */}
          <p className="lead">Última actualización: [Fecha de última actualización]</p>
          
          <p>
            {/* 👇 Placeholders para el sitio y la empresa */}
            Por favor, lee estos Términos de Servicio cuidadosamente antes de usar el sitio web [tudominio.dominio] (el "Servicio") operado por [Nombre de tu Empresa/Producto] ("nosotros", "nuestro").
          </p>

          <p>
            Tu acceso y uso del Servicio está condicionado a tu aceptación y cumplimiento de estos Térmnos. Estos Términos se aplican a todos los visitantes, usuarios y otras personas que accedan o utilicen el Servicio. Al acceder o utilizar el Servicio, aceptas estar sujeto a estos Términos. Si no estás de acuerdo con alguna parte de los términos, no podrás acceder al Servicio.
          </p>

          <h2>1. Cuentas de Usuario</h2>
          <p>
            Cuando creas una cuenta con nosotros, debes proporcionarnos información precisa, completa y actualizada en todo momento. El incumplimiento de esta obligación constituye una violación de los Términos, que puede resultar en la terminación inmediata de tu cuenta en nuestro Servicio.
          </p>
          <p>
            Eres responsable de salvaguardar la contraseña que utilizas para acceder al Servicio y de cualquier actividad o acción bajo tu contraseña. Aceptas no revelar tu contraseña a terceros y debes notificarnos inmediatamente al tomar conocimiento de cualquier violación de seguridad o uso no autorizado de tu cuenta.
          </p>

          <h2>2. Propiedad Intelectual</h2>
          <p>
            {/* 👇 Placeholder para la empresa */}
            El Servicio y su contenido original (excluyendo el contenido proporcionado por los usuarios), características y funcionalidad son y seguirán siendo propiedad exclusiva de [Nombre de tu Empresa/Producto] y sus licenciantes. El Servicio está protegido por derechos de autor, marcas comerciales y otras leyes tanto de [Tu País] como de países extranjeros. Nuestras marcas comerciales no pueden ser utilizadas en conexión con ningún producto o servicio sin el consentimiento previo por escrito de [Nombre de tu Empresa/Producto].
          </p>
          
          <h2>3. Compras y Pagos</h2>
          <p>
            Si deseas comprar cualquier producto o servicio puesto a disposición a través del Servicio ("Compra"), se te puede pedir que suministres cierta información relevante para tu Compra, incluyendo, entre otros, los detalles de tu tarjeta de crédito, tu dirección de facturación y tu información de envío.
          </p>
          <p>
            {/* 👇 Placeholder para el procesador de pagos */}
            Aseguramos que todos los pagos son procesados de forma segura a través de nuestro proveedor de pasarela de pago, [Nombre del procesador, ej: Stripe].
          </p>
          <p>Nos reservamos el derecho de rechazar o cancelar tu pedido en cualquier momento por ciertas razones, incluyendo pero no limitado a: disponibilidad del producto o servicio, errores en la descripción o precio del producto o servicio, o error en tu pedido.</p>

          <h2>4. Terminación</h2>
          {/* ... (el resto del texto se mantiene igual, ya que es genérico) ... */}
          <p>
            Podemos terminar o suspender tu cuenta inmediatamente, sin previo aviso ni responsabilidad, por cualquier motivo, incluyendo, sin limitación, si incumples los Términos.
          </p>
          <p>
            Tras la terminación, tu derecho a utilizar el Servicio cesará inmediatamente. Si deseas terminar tu cuenta, puedes simplemente dejar de utilizar el Servicio.
          </p>

          <h2>5. Limitación de Responsabilidad</h2>
          <p>
            {/* 👇 Placeholder para la empresa */}
            En ningún caso [Nombre de tu Empresa/Producto], ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables por daños indirectos, incidentales, especiales, consecuentes o punitivos...
          </p>

          <h2>6. Cambios a estos Términos</h2>
          {/* ... (texto genérico) ... */}
          <p>
            Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, intentaremos proporcionar un aviso de al menos 30 días antes de que los nuevos términos entren en vigor. Lo que constituye un cambio material se determinará a nuestra sola discreción.
          </p>
          <p>
            Al continuar accediendo o utilizando nuestro Servicio después de que esas revisiones se hagan efectivas, aceptas estar sujeto a los términos revisados.
          </p>

          <h2>7. Contacto</h2>
          <p>
            {/* 👇 Placeholder para el email */}
            Si tienes alguna pregunta sobre estos Términos, por favor contáctanos en [tu-email@dominio.com].
          </p>
        </article>
      </main>
    </div>
  );
}