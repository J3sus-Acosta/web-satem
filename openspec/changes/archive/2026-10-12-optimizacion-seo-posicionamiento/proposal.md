# Proposal

## Why

El sitio web de SATEM carece actualmente de optimizaciones clave para motores de búsqueda (SEO técnico y on-page): no cuenta con archivo `robots.txt`, `sitemap.xml`, etiquetas Open Graph completas, etiquetas canonical ni datos estructurados JSON-LD (Schema.org). Implementar estas mejoras aumentará significativamente la visibilidad orgánica en Google para búsquedas de automatización con IA, consultoría tecnológica y soporte para PYMEs en Chile y Latinoamérica.

## What Changes

- **Archivos de Rastreo e Indexación**: Creación de `robots.txt` y `sitemap.xml` para orientar a los motores de búsqueda (Googlebot, Bingbot) e integrarlos en el proceso de compilación `build.js`.
- **Metadatos y Etiquetas Sociales (Head)**: Incorporación de URLs canónicas dinámicas, metaetiquetas de indexación avanzada, Open Graph (Facebook/LinkedIn) y Twitter Cards en `layout.ejs` y `layout-gracias.ejs`.
- **Datos Estructurados (JSON-LD)**: Inserción de marcado semántico Schema.org (`Organization`, `ProfessionalService` y `WebSite`) con información comercial, geolocalización (Chile), contacto y catálogo de servicios.
- **Optimización Semántica On-Page**: Auditoría y ajuste de jerarquías de encabezados (`<h1>`, `<h2>`), atributos `alt` con palabras clave descriptivas en imágenes, y atributos de rendimiento (`loading="lazy"`).
- **Soporte en Controladores y Build**: Inyección de metadatos SEO específicos (`canonical`, `description`, `ogImage`) en `controllers/mainController.js` y `build.js` para cada página.

## Capabilities

### New Capabilities
- `seo/search-engine-optimization`: Gestión integral de SEO técnico, metadatos sociales (Open Graph / Twitter), datos estructurados Schema.org, y archivos de rastreo (`robots.txt`, `sitemap.xml`).

### Modified Capabilities

## Impact

- `views/layout.ejs` y `views/layout-gracias.ejs`: Enriquecimiento del `<head>` con metadatos y scripts JSON-LD.
- `public/robots.txt` y `public/sitemap.xml`: Nuevos archivos estáticos.
- `build.js` y `controllers/mainController.js`: Suministro de variables SEO por ruta (`canonicalUrl`, `metaDescription`, `pageType`).
- Sin impacto negativo ni rotura de funcionalidades existentes de backend o diseño CSS.
