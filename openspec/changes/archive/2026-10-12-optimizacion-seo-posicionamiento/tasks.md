# Tasks

## 1. Archivos de Rastreo e Indexación

- [x] 1.1 Crear `public/robots.txt` con directivas para motores de búsqueda, enlace al sitemap y bloqueo de `/soporte/exito` y `/gracias`.
- [x] 1.2 Crear `public/sitemap.xml` con las URLs canónicas del sitio (`https://satemsoluciones.com/`, `/soporte`, `/policy`), prioridades y frecuencias.

## 2. Metadatos y Marcado Estructurado en Plantillas

- [x] 2.1 Enriquecer `views/layout.ejs` con `<link rel="canonical">`, `<meta name="robots">`, `<meta name="keywords">`, Open Graph y Twitter Cards.
- [x] 2.2 Inyectar datos estructurados JSON-LD Schema.org (`Organization`, `ProfessionalService`, `WebSite`) en `views/layout.ejs`.
- [x] 2.3 Actualizar `views/layout-gracias.ejs` con directivas `noindex, follow` y metadatos alineados.

## 3. Controladores, Optimización On-Page y Compilación

- [x] 3.1 Actualizar `controllers/mainController.js` y `build.js` para pasar variables SEO (`canonicalUrl`, `metaDescription`, `robotsDirectives`) por cada vista.
- [x] 3.2 Verificar y ajustar la jerarquía semántica (`<h1>`, `<h2>`) y atributos `alt` de imágenes en `views/index.ejs` y `views/soporte.ejs`.
- [x] 3.3 Ejecutar `node build.js` y verificar que los archivos en `dist/` contengan los metadatos SEO, datos estructurados, `robots.txt` y `sitemap.xml` válidos.
