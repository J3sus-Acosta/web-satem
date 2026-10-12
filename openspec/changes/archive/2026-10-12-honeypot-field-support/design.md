# Design: Campo Trampa (Honeypot) en Soporte

## Context

El formulario de soporte técnico gestionado en `views/soporte.ejs` y procesado en `controllers/supportController.js` remite tickets hacia FreeScout mediante Nodemailer. Actualmente cuenta con protección de Cloudflare Turnstile. No obstante, bots automatizados envían peticiones directas rellenando todos los campos detectados, lo que genera gasto de recursos innecesario.

## Goals / Non-Goals

**Goals:**
- Agregar un input señuelo imperceptible para usuarios reales y herramientas de accesibilidad.
- Interceptar inmediatamente envíos de bots en el backend antes de Turnstile y SMTP.
- Descartar silenciosamente solicitudes fraudulentas con simulación de éxito para frenar reintentos.

**Non-Goals:**
- No reemplaza Cloudflare Turnstile, sino que actúa como primera línea de filtrado rápido.
- No almacena listas negras de IPs en base de datos.

## Decisions

### 1. Nombre del campo señuelo: `website`
- **Decisión**: Utilizar `name="website"` y `id="website"`.
- **Alternativas consideradas**: Nombres como `honeypot` o `bot_check` (descartados porque los bots los evaden al detectar la palabra clave). El término `website` o `url` es un objetivo clásico de autofill para bots de spam.

### 2. Técnica de ocultamiento: CSS Off-Screen
- **Decisión**: Ocultar el contenedor mediante posicionamiento absoluto fuera de pantalla (`position: absolute; left: -9999px; top: -9999px; width: 0; height: 0; opacity: 0; z-index: -1; pointer-events: none;`) con atributos `aria-hidden="true"`, `tabindex="-1"` y `autocomplete="off"`.
- **Alternativas consideradas**: `display: none` o `visibility: hidden` (descartadas porque bots modernos detectan esas propiedades CSS y no rellenan el input).

### 3. Respuesta del servidor: Descarte silencioso (Silent Drop)
- **Decisión**: Responder con redirección a `/soporte-exito.html` sin procesar el ticket.
- **Alternativas consideradas**: Responder con error `400 Bad Request` (descartado porque informa al bot de la trampa y provoca que reintente excluyendo el campo).

## Risks / Trade-offs

- **[Riesgo: Autofill accidental del navegador del usuario]** → *Mitigación*: Se especifican los atributos `autocomplete="off"` y `tabindex="-1"` para que el navegador no sugiera URLs ni permita enfocar el campo mediante teclado.
- **[Riesgo: Impacto en accesibilidad para lectores de pantalla]** → *Mitigación*: El contenedor incluye `aria-hidden="true"` y `pointer-events: none`.
