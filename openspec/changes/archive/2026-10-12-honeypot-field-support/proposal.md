# Proposal: Campo Trampa (Honeypot) en Formulario de Soporte

## Why

Los bots automatizados suelen rellenar todos los campos de los formularios web para distribuir spam, consumiendo recursos de procesamiento, cuotas de la API de Cloudflare Turnstile y límites diarios del servidor SMTP de FreeScout. Implementar un campo trampa (honeypot) invisible para humanos pero atractivo para bots permite interceptar y descartar envíos maliciosos inmediatamente sin generar fricción en la experiencia de usuario de clientes reales.

## What Changes

- **Inclusión de campo señuelo en Frontend**: Añadir un campo de texto denominado `website` dentro del formulario de soporte en `views/soporte.ejs`, posicionado fuera de pantalla mediante técnicas CSS accesibles (`tabindex="-1"`, `aria-hidden="true"`, `autocomplete="off"`).
- **Interceptación temprana en Backend**: Validar el valor de `req.body.website` en `controllers/supportController.js` antes de verificar Cloudflare Turnstile o procesar correos electrónicos con Nodemailer.
- **Estrategia de descarte silencioso**: Si el campo contiene cualquier texto, registrar el evento en logs y responder inmediatamente simulando éxito (redirección a `/soporte-exito.html`) para desincentivar reintentos por parte de los bots sin crear tickets ni enviar correos.

## Capabilities

### New Capabilities
- `support-form/honeypot-anti-spam`: Mecanismo de defensa pasiva que detecta y descarta envíos automatizados rellenados por bots mediante campos ocultos señuelo en el formulario de soporte.

### Modified Capabilities

## Impact

- **Código modificado**:
  - `views/soporte.ejs`: Integración del elemento HTML con estilos off-screen.
  - `controllers/supportController.js`: Lógica de detección e interrupción inmediata del flujo.
  - `build.js`: Regeneración del archivo estático compilado `dist/soporte/index.html`.
- **Dependencias**: No introduce librerías externas.
- **Rendimiento y seguridad**: Reduce la carga en el servidor y protege las credenciales y cuotas del servicio SMTP.
