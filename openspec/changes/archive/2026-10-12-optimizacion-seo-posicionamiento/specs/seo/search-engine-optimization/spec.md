# Spec Delta

## Purpose

Proveer optimización integral para motores de búsqueda (SEO) y redes sociales mediante metadatos técnicos, archivos de rastreo y marcado semántico estructurado.

## ADDED Requirements

### Requirement: Archivos de rastreo e indexación
El sistema SHALL proveer y servir archivos estándar de rastreo (`robots.txt` y `sitemap.xml`) en la raíz del sitio web público y en la carpeta de distribución para orientar la indexación de motores de búsqueda.

#### Scenario: Consulta de robots.txt
- **WHEN** un motor de búsqueda solicita la ruta `/robots.txt`
- **THEN** el sistema entrega un archivo válido indicando directivas de rastreo permitidas, rutas no indexables de confirmación y la ubicación absoluta del `sitemap.xml`

#### Scenario: Consulta de sitemap.xml
- **WHEN** un motor de búsqueda solicita la ruta `/sitemap.xml`
- **THEN** el sistema entrega un documento XML válido con las URLs canónicas del sitio, prioridades y frecuencias de actualización

### Requirement: Metadatos canónicos y etiquetas sociales en cabecera
El sistema SHALL incluir en el elemento `<head>` de todas las páginas etiquetas canónicas dinámicas, metaetiquetas de indexación avanzada y metadatos Open Graph y Twitter Cards acordes a la página visualizada.

#### Scenario: Visualización de página pública
- **WHEN** un usuario o crawler inspecciona el código HTML de cualquier página
- **THEN** el documento contiene `<link rel="canonical">`, `<meta name="robots">`, etiquetas `og:title`, `og:description`, `og:url`, `og:image`, `og:site_name`, `og:locale` y `twitter:card` con datos específicos de la vista

### Requirement: Datos estructurados JSON-LD Schema.org
El sistema SHALL inyectar bloques JSON-LD con vocabularios de Schema.org (`Organization`, `ProfessionalService` y `WebSite`) que certifiquen la identidad comercial, ubicación en Chile, teléfono y servicios ofrecidos por SATEM Soluciones Inteligentes.

#### Scenario: Detección de datos estructurados por Google
- **WHEN** un analizador de datos enriquecidos procesa la página principal
- **THEN** detecta un bloque `<script type="application/ld+json">` válido con información de la empresa, servicios, datos de contacto y logotipo corporativo

### Requirement: Optimización semántica y accesibilidad on-page
El sistema SHALL garantizar que la estructura HTML de cada página mantenga un único encabezado `<h1>`, jerarquía semántica ordenada de títulos (`<h2>`, `<h3>`), atributos `alt` descriptivos con palabras clave en imágenes y atributos de rendimiento (`loading="lazy"`).

#### Scenario: Inspección de accesibilidad y SEO On-Page
- **WHEN** se audita el árbol DOM de una página
- **THEN** existe exactamente un encabezado `<h1>` principal, las imágenes críticas contienen textos alternativos contextuales y no se registran encabezados vacíos o desordenados
