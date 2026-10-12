# Design

## Context

El proyecto SATEM combina un servidor dinámico Express con un generador de archivos estáticos `build.js` para producción (`dist/`). Las vistas EJS comparten una plantilla maestra `views/layout.ejs`. Hasta ahora, solo se incluía un `<title>` y `<meta name="description">` básico, careciendo de archivos de rastreo (`robots.txt`, `sitemap.xml`), etiquetas canónicas dinámicas, Open Graph y datos enriquecidos Schema.org.

## Goals / Non-Goals

**Goals:**
- Proporcionar archivos estáticos `robots.txt` y `sitemap.xml` servidos tanto en Express como en la compilación estática (`dist/`).
- Enriquecer `views/layout.ejs` y `views/layout-gracias.ejs` con metadatos completos: canonical, robots, keywords geo-orientadas a Chile/Latam, Open Graph y Twitter Cards.
- Integrar marcado JSON-LD Schema.org (`Organization`, `ProfessionalService`, `WebSite`) válido y comprobable en el Rich Results Test de Google.
- Ajustar jerarquía semántica (`<h1>`, `<h2>`) y atributos `alt` de accesibilidad y SEO en todas las vistas.
- Configurar variables SEO personalizadas en controladores Express (`controllers/mainController.js`) y en `build.js`.

**Non-Goals:**
- Configuración de campañas pagadas (Google Ads).
- Modificación de la lógica de negocio o bases de datos del sistema de soporte.

## Decisions

1. **Ubicación de `robots.txt` y `sitemap.xml` en `public/`**:
   - *Decisión*: Ubicar ambos archivos directamente en `public/robots.txt` y `public/sitemap.xml`.
   - *Motivo*: Al estar en `public/`, Express los sirve de forma transparente mediante `express.static('public')`, y `build.js` ya realiza `fs.copy(publicDir, distDir)`, garantizando sincronía absoluta entre desarrollo y producción.
   - *Alternativa descartada*: Generarlos dinámicamente con rutas en Express, lo que requeriría sincronización manual extra en el generador estático.

2. **Inyección de metadatos SEO mediante variables en EJS**:
   - *Decisión*: Extender `views/layout.ejs` para consumir `canonicalUrl`, `metaDescription`, `pageTitle`, y `ogImage` con valores por defecto inteligentes cuando no se pasen explícitamente.
   - *Motivo*: Evita código redundante y garantiza que páginas existentes no fallen si alguna variable no se define.

3. **Esquema JSON-LD Unificado (`@graph`)**:
   - *Decisión*: Agrupar `Organization`, `ProfessionalService` y `WebSite` dentro de un único bloque JSON-LD con `@graph`.
   - *Motivo*: Es el estándar moderno recomendado por Google para relacionar la entidad corporativa, su sitio web y sus servicios profesionales sin duplicar información.

4. **Meta Robots y Prevención de Indexación en páginas transaccionales**:
   - *Decisión*: Marcar `/soporte/exito` y `/gracias` como `noindex, follow` para evitar indexar páginas de confirmación vacías o privadas, reservando la indexación máxima (`index, follow`) para portada, soporte y política.

## Risks / Trade-offs

- **[Riesgo] Indexación accidental de páginas de prueba o confirmación** → *Mitigación*: Se agregan directivas `Disallow: /soporte/exito` y directivas `<meta name="robots" content="noindex, follow">` específicas para vistas de confirmación.
- **[Riesgo] Discrepancia entre la URL del dominio de producción y local** → *Mitigación*: Se usa como base absoluta canónica `https://satemsoluciones.com` como constante de producción configurada.
