# Proposal: Auditoría Técnica, Casos de Uso y Humanización de Textos

## Why

El sitio web de SATEM Soluciones Inteligentes está dirigido a dueños de empresas, gerentes de operaciones y colaboradores que no necesariamente cuentan con formación en tecnologías de la información. Actualmente, diversas secciones utilizan tecnicismos abstractos ("infraestructura escalable", "análisis predictivo", "flujos de trabajo", "gestión de tickets en mesa de ayuda") que generan una barrera de entrada cognitiva y distanciamiento emocional. 

Humanizar el tono de comunicación, centrar el mensaje en dolores reales cotidianos (ahorro de tiempo, tranquilidad operativa, no duplicar trabajo) y explicar cada solución con ejemplos palpables incrementará la empatía de marca, la retención de visitantes y la tasa de conversión a llamadas y solicitudes de soporte.

## What Changes

- **Auditoría Técnica y Mapeo de Casos de Uso**: Documentación de la arquitectura actual y tipificación de los 3 perfiles principales de visitantes (El Dueño de PYME sobrecargado, El Responsable Operativo atrapado en planillas Excel, y El Usuario con urgencia técnica).
- **Reemplazo de Jerga en Landing Page (`index.ejs`)**:
  - Transformación del Hero y propuesta de valor de un enfoque técnico a uno de beneficios inmediatos y alivio operativo.
  - Reescribe la sección de "El Problema / La Solución" para hablar de frustraciones cotidianas ("perder horas copiando datos a mano", "sistemas que se quedan pegados").
  - Simplificación de los 4 servicios clave (Consultoría TI, Automatización IA, Mesa de Ayuda, Integraciones) con analogías directas y comprensibles para cualquier persona.
- **Humanización del Formulario y Mesa de Ayuda (`soporte.ejs` y `soporte-exito.ejs`)**:
  - Sustitución de etiquetas frías como "requerimiento", "asunto del ticket" o "descripción detallada" por preguntas empáticas y orientadas a la acción ("¿Qué problema tienes hoy?", "Cuéntanos con tus propias palabras qué pasó").
  - Modificación del panel lateral "¿Cómo funciona?" para ofrecer calma y claridad sobre los tiempos de respuesta reales.
- **Coherencia en Navegación y Footer (`layout.ejs`)**:
  - Revisión de microtextos, botones y eslóganes para consolidar una voz cercana, profesional y accesible ("Si no existe, lo creamos para ti").

## Capabilities

### New Capabilities
- `content/humanized-copywriting`: Pautas de voz, estilo comunicativo humanizado y especificación de textos orientados a beneficios cotidianos sin tecnicismos para todo el ecosistema de SATEM.

### Modified Capabilities

## Impact

- **Archivos afectados**:
  - `views/index.ejs`: Textos de Hero, Soluciones, Servicios, Automatización IA y Llamados a la Acción (CTA).
  - `views/soporte.ejs`: Textos descriptivos, pasos, etiquetas de campos y placeholders.
  - `views/soporte-exito.ejs`: Mensaje de confirmación y expectativas de atención.
  - `views/layout.ejs`: Navegación, botones principales y pie de página.
  - `dist/`: Recompilación de todas las páginas estáticas mediante `node build.js`.
- **Experiencia de usuario (UX)**: Aumento drástico de la accesibilidad cognitiva y la confianza de clientes no técnicos.
