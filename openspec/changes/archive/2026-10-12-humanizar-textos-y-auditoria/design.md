# Design: Auditoría Técnica, Casos de Uso y Humanización de Textos

## Context

El proyecto actual de SATEM está construido sobre Express 5 y EJS, empleando un diseño oscuro corporativo (dark mode) con estilos en CSS Vanilla y generación estática opcional para EasyPanel. Aunque la estructura técnica y estética es moderna y sólida, la redacción actual heredó terminología técnica propia de desarrolladores y consultores de TI. Esta brecha lingüística reduce la empatía con el cliente final (dueños de PYME, gerentes comerciales y administrativos) que buscan resolver problemas sin enredos.

## Auditoría Técnica del Proyecto

### 1. Arquitectura y Componentes
- **Motor de Renderizado**: Express 5 + plantillas EJS (`views/`) envueltas en `views/layout.ejs`.
- **Compilador Estático**: `build.js` que procesa las vistas a la carpeta `dist/` para despliegue en EasyPanel / Nginx.
- **Flujos de Conversión**:
  - `Hero & CTA`: Botón a modal de Calendly (`index.ejs`) para agendamiento directo.
  - `WhatsApp Directo`: Botón flotante y enlaces en Hero para contacto inmediato.
  - `Mesa de Ayuda`: Formulario `/soporte` con subida de adjuntos (Multer en memoria), Turnstile y Honeypot, despachando correos vía Nodemailer a FreeScout.
  - `Páginas de Confirmación`: `/gracias` (post-agendamiento) y `/soporte/exito` (post-ticket).

---

## Casos de Uso y Perfiles de Usuario (Personas)

### Caso de Uso 1: El Dueño de Negocio Desbordado ("Rodrigo, 46 años, Gerente General")
- **Su Dolor**: "Mi empresa creció, pero siento que apagamos incendios todo el día. Mis colaboradores pasan horas pasando datos de un Excel a otro. Escucho hablar de Inteligencia Artificial todos los días, pero nadie me explica qué diablos hace por mi empresa en la práctica."
- **Lo que busca en la web**: Entender en 10 segundos cómo SATEM le hace ganar tiempo, reducir errores y ahorrar dinero, sin promesas futuristas vacías.
- **Acción esperada**: Agendar una consultoría gratuita de 20 minutos para que analicen su caso.

### Caso de Uso 2: La Jefa de Administración Abrumada ("Camila, 34 años, Operaciones")
- **Su Dolor**: "Uso tres plataformas diferentes (el correo, el sistema de facturación y planillas compartidas). Tengo que copiar y pegar pedidos a mano y me da pánico equivocarme en una coma."
- **Lo que busca en la web**: Sentir alivio al saber que sus programas actuales pueden conectarse entre sí para no tener que hacer doble trabajo.
- **Acción esperada**: Escribir por WhatsApp a un especialista o solicitar que le automaticen el traspaso de información.

### Caso de Uso 3: El Usuario con Falla Técnica Urgente ("Esteban, 29 años, Ventas")
- **Su Dolor**: "El sistema de facturación se cayó, el correo no me abre y no puedo emitir cotizaciones a mis clientes. No sé qué es un 'log' ni qué versión de servidor tengo, solo necesito que funcione."
- **Lo que busca en la web**: Un formulario simple donde pueda decir qué le pasa con sus propias palabras, sin que le exijan datos técnicos complejos, y saber cuándo le van a responder.
- **Acción esperada**: Enviar una solicitud de ayuda en 1 minuto.

---

## Propuesta Detallada de Textos Humanizados (Antes vs Después)

### 1. Hero Principal (`index.ejs`)
- **Antes**:
  - *Título*: "Transformamos tu empresa con tecnología e inteligencia artificial"
  - *Subtítulo*: "Automatizamos procesos, optimizamos tu infraestructura y elevamos tu productividad al siguiente nivel."
- **Propuesta Humanizada**:
  - *Título*: "Hacemos que la tecnología trabaje para ti, no al revés"
  - *Subtítulo*: "Automatizamos las tareas repetitivas de tu negocio, arreglamos lo que no funciona y te devolvemos el tiempo para enfocarte en vender y crecer."

### 2. Sección Problema / Solución (`index.ejs`)
- **Antes**:
  - "Procesos manuales: Tareas repetitivas que consumen tiempo valioso."
  - "Sistemas desconectados: Información dispersa y falta de integración."
  - "Solución: Automatización inteligente de flujos de trabajo. Integración total de tus sistemas actuales. Infraestructura optimizada y escalable."
- **Propuesta Humanizada**:
  - *El Problema*:
    - **"Demasiadas horas en tareas aburridas"**: Pasar datos de un sistema a otro, llenar planillas a mano y responder lo mismo una y otra vez.
    - **"Tus programas no se hablan entre sí"**: La información queda repartida en WhatsApps, correos y archivos sueltos, provocando olvidos y errores.
  - *La Solución*:
    - **"Flujos automáticos"**: Lo que antes tomaba horas a mano, ahora se hace solo en segundos.
    - **"Todo conectado"**: Tu web, tu correo, tus planillas y tu facturación funcionando como un solo equipo.
    - **"Tecnología confiable"**: Sistemas rápidos que no se caen justo cuando más los necesitas.

### 3. Servicios (`index.ejs`)
- **Antes**:
  - *Consultoría TI*: "Te ayudamos a elegir y usar la tecnología correcta para que tu negocio crezca sin complicaciones..."
  - *Automatización IA*: "Automatizamos tareas repetitivas para que tu equipo trabaje menos y produzca más..."
  - *Mesa de Ayuda*: "Solucionamos los problemas técnicos de tu equipo para que no pierdan tiempo ni productividad..."
  - *Integraciones*: "Hacemos que tus sistemas 'hablen entre sí' para evitar trabajo duplicado..."
- **Propuesta Humanizada (Más cercana y orientada al beneficio)**:
  - **Asesoría Tecnológica sin Enredos**: "Te decimos qué herramientas necesitas de verdad y cuáles son un gasto innecesario. Analizamos cómo trabajas y te proponemos mejoras prácticas para vender más y gastar menos."
  - **Asistentes Digitales y Automatización**: "Ponemos a la inteligencia artificial a hacer el trabajo rutinario: responder consultas de clientes a cualquier hora, agendar reuniones o generar reportes automáticos."
  - **Soporte Técnico Rápido**: "Tu tranquilidad informática. Cuando un computador falla, el correo no sale o un programa se pega, nuestro equipo lo resuelve para que no detengas tu negocio."
  - **Conexión de tus Sistemas**: "Elimina el copiar y pegar. Hacemos que los datos de un cliente pasen solos desde tu web o formulario a tu sistema de gestión y facturación, sin errores humanos."

### 4. Sección IA Avanzada (`index.ejs`)
- **Antes**:
  - "Tecnología de Vanguardia" / "Análisis predictivo de datos: Convierte tus datos en información útil..."
- **Propuesta Humanizada**:
  - "Tecnología que te hace la vida más fácil"
  - **"Entiende tus números en segundos"**: "Descubre fácilmente qué productos se venden más, qué clientes están por comprar de nuevo o dónde se escapa el dinero, explicado con claridad y sin rodeos."

### 5. Formulario de Soporte (`soporte.ejs`)
- **Antes**:
  - *Hero*: "Mesa de Ayuda · SATEM / Soporte al Cliente / Completa el formulario con tu requerimiento..."
  - *Pasos*: "Tu solicitud se convierte automáticamente en un ticket de Soporte. Nuestro equipo analiza y gestiona tu caso en la mesa de ayuda."
  - *Campos*: "Asunto del ticket *", "Descripción detallada *"
- **Propuesta Humanizada**:
  - *Hero*: "Centro de Ayuda y Soporte · SATEM / ¿En qué te podemos ayudar hoy? / Cuéntanos qué sucede y nuestro equipo te responderá hoy mismo."
  - *Pasos*:
    1. "Escríbenos qué falla o qué necesitas (con tus propias palabras)."
    2. "Tu caso se asigna de inmediato a un especialista técnico."
    3. "Revisamos el problema y te contactamos directamente a tu correo."
  - *Campos*:
    - **"¿Cuál es el problema o solicitud?"** (en vez de "Asunto del ticket").
    - **"Explícanos con detalle qué ocurrió"** (en vez de "Descripción detallada"). Placeholder: *"Ej: Al intentar abrir el sistema de facturación aparece un mensaje de error y no me deja ingresar..."*

---

## Decisions

1. **Mantener ejemplos prácticos en cada tarjeta**: Conservar la fórmula *"Ejemplo concreto"* pero expresada de forma aún más coloquial.
2. **Priorizar el tiempo y la tranquilidad del cliente**: Sustituir palabras como *"escalabilidad"*, *"procesos"*, *"infraestructura"* por *"ahorrar horas"*, *"sistemas que no fallan"*, *"no trabajar de más"*.
3. **No alterar la estructura HTML/CSS base**: La modernización de textos es 100% compatible con los componentes, clases e iconos existentes, sin romper estilos visuales ni lógica de JavaScript.

## Risks / Trade-offs

- **[Riesgo: Sonar informal en exceso]** → *Mitigación*: Se mantiene el rigor profesional y la seriedad técnica, pero redactado en un español claro, respetuoso y empático (estilo "asesor experto de confianza").
