# Spec Delta

## Purpose

Detectar y descartar de forma temprana y desatendida las solicitudes automatizadas de bots en el formulario de soporte técnico para evitar spam y consumo de recursos.

## ADDED Requirements

### Requirement: Formulario incluye campo trampa señuelo
El formulario de soporte técnico SHALL incluir un campo señuelo llamado "website" que permanece inaccesible e invisible para personas, pero detectable en el DOM por bots y scrapers.

#### Scenario: Usuario legítimo interactúa con el formulario
- **WHEN** un usuario humano visualiza el formulario o navega con teclado
- **THEN** el campo "website" no se muestra visualmente, no recibe foco con tabulador y no es leído por tecnologías de asistencia

#### Scenario: Bot rellena todos los inputs detectables
- **WHEN** un bot automatizado inspecciona el formulario HTML y completa todos los campos de texto
- **THEN** el campo "website" recibe un valor en la carga útil enviada al servidor

### Requirement: Interceptación y descarte silencioso de envíos con honeypot
El backend SHALL verificar el contenido del campo "website" al recibir solicitudes POST de soporte y descartar el procesamiento si dicho campo contiene datos.

#### Scenario: Envío limpio sin campo trampa
- **WHEN** se envía una solicitud donde el campo "website" está vacío o ausente
- **THEN** el sistema continúa normalmente con las validaciones de negocio y el envío del ticket

#### Scenario: Envío malicioso con campo trampa completado
- **WHEN** se envía una solicitud donde el campo "website" contiene texto
- **THEN** el sistema descarta la petición sin enviar correos ni consultar servicios externos, respondiendo con redirección exitosa para simular procesamiento
