# content/humanized-copywriting Specification

## Purpose
Definir los estándares de copywriting, tono de voz y sustitución de jerga técnica por lenguaje humano, claro y enfocado en la tranquilidad del cliente para todo el sitio web de SATEM.

## Requirements

### Requirement: Propuesta de valor y servicios orientados a beneficios cotidianos
Los textos informativos y de servicios de la web SHALL expresarse en términos de alivio de trabajo, ahorro de tiempo y reducción de estrés, evitando siglas y terminología técnica abstracta sin contexto.

#### Scenario: Visitante no técnico revisa los servicios
- **WHEN** un dueño de negocio o colaborador lee la sección de servicios en la página principal
- **THEN** cada servicio explica con un ejemplo cotidiano qué problema concreto resuelve y cómo le ahorra horas de trabajo en su día a día

#### Scenario: Visitante examina las soluciones de Inteligencia Artificial
- **WHEN** un usuario consulta la sección de automatización e inteligencia artificial
- **THEN** la solución se presenta como "asistentes que hacen el trabajo repetitivo y aburrido" y no como conceptos teóricos de machine learning o algoritmos predictivos

### Requirement: Formulario de soporte con acompañamiento empático
El formulario de mesa de ayuda y sus pantallas de confirmación SHALL utilizar un tono humano, comprensible y paciente, guiando al usuario sin exigir vocabulario técnico para reportar un problema.

#### Scenario: Cliente reporta una falla en sus sistemas
- **WHEN** el usuario ingresa al formulario de ayuda en `/soporte`
- **THEN** las instrucciones y etiquetas invitan a explicar lo ocurrido en palabras sencillas sin tecnicismos obligatorios

#### Scenario: Cliente visualiza la confirmación de recepción
- **WHEN** el usuario completa su solicitud y llega a la pantalla de éxito
- **THEN** el mensaje confirma en lenguaje tranquilizador que su mensaje está en manos del equipo y especifica claramente cuándo recibirá respuesta

### Requirement: Llamados a la acción transparentes y sin ambigüedades
Los botones y enlaces principales SHALL indicar con exactitud qué sucederá al hacer clic, eliminando términos vagos o intimidantes.

#### Scenario: Usuario evalúa agendar una reunión o escribir por WhatsApp
- **WHEN** el usuario visualiza los botones de llamada a la acción
- **THEN** los textos clarifican que la conversación es gratuita, personalizada y orientada a entender su negocio sin compromiso
