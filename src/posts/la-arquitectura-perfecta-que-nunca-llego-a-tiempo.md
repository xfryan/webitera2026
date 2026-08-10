---
layout: post.njk
title: "La arquitectura perfecta que nunca llegó a tiempo"
date: 2026-06-03
dateDisplay: "3 de junio de 2026"
lang: es
image: /assets/img/blog/la-arquitectura-perfecta-que-nunca-llego-a-tiempo.png
imageAlt: "Ilustración generada por IA sobre arquitecturas evolutivas y plataformas construidas de forma incremental"
excerpt: "Meses de diseño, comités de revisión, documentación exhaustiva — y cuando el proyecto por fin tiene algo que mostrar, el negocio ya está en otro lugar. Por qué la arquitectura perfecta casi nunca llega a tiempo."
tags:
  - posts_es
  - Estrategia Ágil
  - Pensamiento Ágil
---

En 2017, durante una de las primeras presentaciones públicas del concepto de arquitecturas evolutivas, Rebecca Parsons — Chief Technology Officer de ThoughtWorks — fue abordada por un asistente al finalizar su charla. El mensaje fue directo: lo que estaba proponiendo era profesionalmente irresponsable. La arquitectura de software, le dijo, es la cosa que nunca cambia. Diseñarla para que evolucione era, en su lectura, una invitación al caos.

Parsons escuchó. Y probablemente reconoció algo en ese momento: la persona frente a ella no era un mal arquitecto. Era un buen arquitecto con un paradigma equivocado.

Desde itera hemos escuchado variantes de esa conversación más veces de las que podemos contar. No siempre en conferencias. Muchas veces en salas de reuniones, en kickoffs de proyecto, en conversaciones donde alguien propone construir una plataforma tecnológica y la primera respuesta es: "Primero necesitamos definir la arquitectura completa." Lo que sigue es conocido: meses de diseño, comités de revisión, documentación exhaustiva, y un proyecto que cuando finalmente tiene algo que mostrar, el negocio ya está en otro lugar.

## El mamotreto y el paradigma que lo produce

En América Latina hemos sido testigos de una generación entera de proyectos de infraestructura tecnológica que comparten el mismo destino. Buses de integración empresarial diseñados para conectar toda la organización de una vez. Plataformas de microservicios concebidas para reemplazar sistemas legacy en un solo movimiento. Arquitecturas de datos que prometían ser la base de todo análisis futuro. La mayoría terminó de la misma forma: inconclusa, desactualizada al momento de salir, o completamente abandonada antes de entregar valor real.

El patrón tiene una causa precisa. No es falta de talento técnico — los equipos que construyen estos sistemas suelen ser de alta competencia. Es un sesgo cognitivo documentado que opera bajo la apariencia de rigor profesional: la creencia de que un sistema que no está completo está mal hecho, y que existe una forma correcta de construirlo que debe respetarse antes de poder usar cualquier parte de él.

Lo llamamos Completeness Fallacy y Correctness Bias. Y a su expresión arquitectónica le damos su nombre propio: Big Architecture Up Front. El equivalente, en el dominio de las plataformas, del Big Design Up Front que el mundo del desarrollo de software tardó décadas en superar.

El problema no es solo que estos proyectos lleguen tarde. Es que llegan tarde habiendo construido cosas que nadie va a usar. La investigación acumulada del Standish Group durante más de dos décadas muestra que entre el 64% y el 80% de las funcionalidades construidas en sistemas de software raramente o nunca son utilizadas. Eso significa que la mitad del esfuerzo invertido en diseñar algo "perfecto y completo" se destina a funcionalidad que no genera valor. Y mientras se construye ese todo, el mundo sigue moviéndose. Los paradigmas tecnológicos cambian cada tres a cinco años. Lo que era el estándar cuando arrancó el diseño puede ser obsoleto cuando el sistema está listo para operar. Si es que llega a estarlo.

## Una forma diferente de entender la solidez

En 2010, el ingeniero de software George Fairbanks publicó un libro que debería ser lectura obligatoria para cualquier equipo que diseña plataformas: Just Enough Software Architecture. Su argumento central es incómodo para quienes cargan el paradigma de la completitud: el nivel de rigor arquitectónico debe ser proporcional al riesgo real del sistema, no a un estándar abstracto de perfección. Suficiente no es lo opuesto de sólido. Es lo opuesto de desperdicio. Y de desperdicio de tiempo, que es el peor desperdicio.

Ese mismo año, Neal Ford, Rebecca Parsons y Patrick Kua estaban desarrollando lo que publicarían en 2017 como arquitecturas evolutivas: el principio de que una arquitectura bien diseñada no es aquella que anticipa todo, sino aquella que preserva lo que importa mientras el resto evoluciona. El mecanismo central son las fitness functions — criterios medibles y automatizables que el sistema debe satisfacer en cada iteración. No "la arquitectura es segura". Sino "la arquitectura pasa estos criterios de seguridad en cada cambio". La diferencia no es semántica. Es la diferencia entre una promesa hecha al inicio y una propiedad verificada continuamente.

Estos dos marcos, leídos juntos, disuelven la falsa dicotomía entre solidez e incrementalismo. No es "hacemos todo bien" versus "avanzamos rápido". Es "definimos qué debe preservarse siempre, y tomamos el resto de las decisiones cuando tenemos la información para tomarlas bien".

## El primer lego es la plataforma

Cuando una organización necesita construir una capa de capacidades digitales — de datos, de servicios, de integración — la tentación natural es ir directo al core. A la fuente más completa, más autoritativa. El problema es que ese camino crea acoplamiento directo entre los sistemas que necesitan datos y los sistemas más críticos de la organización, sin protección, sin governance, sin una arquitectura que pueda crecer.

La alternativa no es esperar a tener la plataforma perfecta. Es construir el primer building block de esa plataforma con la necesidad que ya está sobre la mesa. Resolver el problema real del momento. Dejar establecidos los elementos esenciales de la capa intermedia. Y desde ahí, crecer con criterio — no con apuro, pero tampoco con la parálisis de quien no puede entregar nada hasta que todo esté listo.

Zhamak Dehghani, en su trabajo sobre Data Mesh, y Matthew Skelton y Manuel Pais, en Team Topologies, describen este principio desde ángulos distintos y llegan al mismo lugar: una plataforma no se termina y luego se usa. Se construye siendo usada. Y el criterio de éxito no es "¿está completa?" sino "¿está entregando valor a sus usuarios hoy?"

## Lo que ya estamos construyendo

En itera llevamos tiempo acompañando a organizaciones que enfrentan exactamente esta tensión. La presión de hacerlo bien desde el inicio existe — y es legítima. Lo que proponemos no es ignorarla sino reencuadrarla: la solidez real no se diseña toda de una vez. Se construye iteración a iteración, con mecanismos que garantizan que lo que importa se preserve mientras el sistema crece.

Hemos visto la diferencia entre equipos que esperan tener la arquitectura perfecta y equipos que comienzan con la arquitectura suficiente. Los primeros llegan tarde, si llegan. Los segundos aprenden, ajustan, y construyen algo que el negocio puede usar — y que puede seguir creciendo cuando el paradigma cambie. Porque el paradigma siempre cambia.

Si tu organización está en ese momento de decisión — construir la plataforma completa primero, o comenzar a entregarla desde el primer building block — nos interesa esa conversación.
