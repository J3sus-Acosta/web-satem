# Tasks

## 1. Implementación Frontend del Campo Honeypot

- [x] 1.1 Insertar el input trampa `website` en `views/soporte.ejs` con estilos off-screen (`aria-hidden="true"`, `tabindex="-1"`, `autocomplete="off"`) y verificar visualmente que no aparece en pantalla ni recibe foco por teclado.
- [x] 1.2 Recompilar el sitio estático ejecutando `node build.js` y verificar que el campo señuelo esté presente en `dist/soporte/index.html`.

## 2. Lógica de Interceptación en Backend

- [x] 2.1 Implementar la detección de `req.body.website` en `controllers/supportController.js` antes de la validación de Turnstile y Nodemailer.
- [x] 2.2 Implementar descarte silencioso: si `req.body.website` contiene texto, registrar log de advertencia y redirigir a `/soporte-exito.html` sin enviar correos.
- [x] 2.3 Verificar funcionamiento: probar un envío con campo `website` vacío para asegurar que las solicitudes legítimas continúan procesándose con normalidad.
