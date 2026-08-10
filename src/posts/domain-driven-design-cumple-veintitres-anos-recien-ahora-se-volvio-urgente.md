---
layout: post.njk
title: "Domain-Driven Design cumple veintitrés años y recién ahora se volvió urgente"
date: 2026-07-29
dateDisplay: "29 de julio de 2026"
lang: es
image: /assets/img/blog/domain-driven-design-cumple-veintitres-anos-recien-ahora-se-volvio-urgente.png
imageAlt: "Ilustración generada por IA sobre Domain-Driven Design y lenguaje compartido en las organizaciones"
excerpt: "Cinco áreas respondieron qué es un 'cliente activo' y las cinco tenían razón. El problema no es la ambigüedad — es que ningún agente de IA la va a notar antes de actuar sobre ella."
tags:
  - posts_es
  - AI-First
  - Prácticas Ágiles
  - Transformación Organizacional
---

**La pregunta se hizo en una reunión de tablero, casi como trámite, porque dos reportes mostraban cifras distintas: ¿qué es un cliente activo?**

Respondieron cinco áreas y las cinco tenían razón. Para Ventas, un cliente activo es el que compró en los últimos doce meses, porque así se calculan la cuota y las comisiones. Para Finanzas es el que tiene contrato vigente y facturación en curso, porque de eso depende cómo se reconoce el ingreso. Para Operaciones es el que usó el servicio en los últimos treinta días, porque con eso se dimensiona la capacidad. Para Marketing es el que abrió un correo o entró a la aplicación en noventa días, porque nadie segmenta campañas sobre gente que no da señales. Para Soporte es el que tiene la cuenta al día, porque un moroso se atiende distinto.

Ninguna definición está mal. Cada una es exacta para lo que fue hecha. El problema es que en ningún lado estaba escrito que eran distintas.

## Lo que cambió no es el argumento

Las consecuencias de lo anterior no viven en una discusión conceptual, viven en la operación. La fórmula de fuga toma el numerador de un área y el denominador de otra, así que el indicador que se reporta hacia arriba todos los meses no mide nada, aunque se calcule sin errores. La campaña de reactivación se arma con la definición de Marketing, y entonces le escribe "te extrañamos" a alguien que usó el servicio esa misma mañana; el cliente lo publica y el equipo se entera por ahí. El modelo de propensión se entrenó con la definición de Operaciones pero la lista de contacto se generó con la de Ventas, de modo que llama tarde, cuando la decisión ya se tomó. Un vendedor cobra comisión por una cuenta que Finanzas no cuenta, y esa diferencia se arregla a mano, todos los meses, en una planilla que alguien mantiene y nadie documentó.

Nada de esto es un error de sistema. Son cinco verdades conviviendo, como conviven hace quince años, sostenidas por gente que en cada cruce se da cuenta y traduce.

Durante dos décadas, el argumento a favor de DDD fue el mismo que el de tantas prácticas: calidad, mantenibilidad, costo futuro. Todo cierto y todo postergable. Y postergarlo era racional, porque la organización absorbía el costo con personas. Alguien preguntaba. Alguien sabía que en Cobranzas "cliente activo" quiere decir otra cosa. Alguien conocía el contexto, o al menos sabía a quién llamar.

Un agente de IA no hace nada de eso. No pregunta, no infiere, no conoce el pasillo. Ejecuta sobre la definición que encuentra, a velocidad de máquina y sin testigos. Por eso el artículo de McKinsey *Building the foundations for agentic AI at scale* (2 de abril de 2026) advierte que, sin una base semántica compartida, los agentes pueden actuar sobre interpretaciones incompletas o contradictorias del mismo dato, y que el error y el riesgo operacional crecen a medida que se escala. El mismo artículo aporta el número que ordena la conversación: cerca de dos tercios de las empresas del mundo ya experimentaron con agentes, pero menos del diez por ciento logró escalarlos hasta generar valor tangible.

Dicho de otro modo: la ambigüedad de significado dejó de ser deuda tolerable y se volvió riesgo operacional. Y eso ocurre justo cuando le pedimos a los agentes que resuelvan procesos punta a punta, no tareas dentro de un silo. Un proceso punta a punta cruza fronteras de área todo el tiempo. Antes, cada cruce tenía un humano que traducía. Ahora no.

## De dónde viene todo esto

En agosto de 2003, Eric Evans publicó *Domain-Driven Design: Tackling Complexity in the Heart of Software* (Addison-Wesley), conocido en la comunidad como "el libro azul". Evans venía de proyectos complejos donde el problema nunca era la tecnología: era que el modelo que vivía en la cabeza de la gente de negocio y el modelo que vivía en el sistema eran distintos, y nadie lo notaba hasta que era carísimo.

Su tesis es que el mayor valor de un modelo de negocio bien hecho es que provee *"un lenguaje ubicuo que une a los expertos del dominio con los técnicos"*. El instrumento de DDD no es una tecnología ni una arquitectura. Es el lenguaje.

## Los cinco conceptos de DDD cuya ausencia van a confundir mortalmente a un agente

1. **Lenguaje ubicuo** (*ubiquitous language*). Un solo vocabulario, usado igual por el negocio, por el equipo y por el código. Si en la reunión se dice "matrícula" y en la base de datos la tabla se llama otra cosa con otra regla, hay dos verdades conviviendo. *Por qué importa ahora:* ese lenguaje es, literalmente, lo que el agente lee para decidir.

2. **Contexto delimitado** (*bounded context*). La idea más contraintuitiva y la más valiosa. DDD dice que no hay que forzar una definición única para toda la empresa, porque la misma palabra legítimamente significa cosas distintas en áreas distintas: el "cliente" de Ventas no es el "cliente" de Soporte ni el de Finanzas, y está bien que así sea. Lo que hay que hacer es delimitar dónde vale cada significado y hacerlo explícito. *Por qué importa ahora:* es la respuesta directa al instinto de construir una única fuente de verdad, un modelo central que sirva para todo. Zhamak Dehghani, creadora de data mesh, lo dice sin rodeos en su libro: no esperes una única fuente de verdad.

3. **Mapa de contextos** (*context map*). El documento que muestra cómo se relacionan esos contextos y qué se traduce al pasar de uno a otro. *Por qué importa ahora:* es exactamente el mapa que un agente necesita para cruzar de un área a otra sin romper nada, y es lo que casi ninguna organización tiene escrito.

4. **Capa anticorrupción** (*anti-corruption layer*). Una capa de traducción que protege tu modelo cuando te integras con un sistema que tiene otro modelo —típicamente uno heredado o uno que llegó con una adquisición— para que su lógica no contamine la tuya. *Por qué importa ahora:* es la herramienta específica para convivir con lo viejo sin quedar preso de sus definiciones.

5. **Dominio central y subdominios** (*core domain*). No todo merece el mismo esfuerzo. El dominio central es aquello en lo que la organización compite de verdad; el resto es soporte o commodity. *Por qué importa ahora:* responde la pregunta que llega después de entender todo lo anterior, que es por dónde empezar. Y coincide con lo que el propio artículo de McKinsey recomienda: elegir unos pocos flujos de alto valor, no rediseñar todo a la vez.

## Y cómo se hace, en la práctica

La técnica más usada para esto es **EventStorming**, creada por Alberto Brandolini en 2013 a partir de experimentos que había presentado el año anterior. Es un taller de bajísima tecnología: papel en la pared, notas adhesivas de colores y las personas que saben —negocio y técnicos juntos— reconstruyendo el proceso como una secuencia de eventos, en orden cronológico, hasta que aparecen las inconsistencias.

Vale la pena notar lo que esto significa. Cuando el marco de McKinsey pide, en su primer paso, mapear flujos de trabajo punta a punta antes de agentificarlos, no explica cómo hacerlo. EventStorming es una respuesta probada a ese "cómo", disponible hace más de una década.

## Por qué acá cuesta más

En organizaciones que crecieron rápido, o que pasaron por adquisiciones, absorciones o cambios de dirección, el desafío es mayor y conviene decirlo sin eufemismos. La asimilación de tantas tecnologías distintas rara vez dio tiempo para una mirada estructural, y se sobrevivió con soluciones puente. La arquitectura terminó siendo un plan grande que vive en alguna presentación; muchas veces varios planes, ninguno profundizado ni seguido del todo, siempre por razones de urgencia legítimas.

En esas organizaciones el problema no es que falte el mapa. Es que sobran mapas que nadie siguió. Y ahí DDD tiene una ventaja concreta sobre cualquier plan maestro: no exige unificar nada antes de empezar. Permite delimitar un contexto, ponerle lenguaje explícito, protegerlo con una capa de traducción y avanzar. Es incremental por diseño, que es la única forma en que estas cosas efectivamente ocurren.

Este linaje, además, ya llegó a los datos. Cuando Dehghani propuso data mesh en 2019, tomó explícitamente el dominio y el contexto delimitado de Evans y los llevó al mundo de los datos, con dueño de dominio y datos como producto. Buena parte del vocabulario que hoy circula en los comités de tecnología viene de ahí.

## Dónde estamos trabajando

Si mañana un agente tuviera que resolver punta a punta uno de los procesos de tu área…

> ¿sobre qué definición de tus términos clave estaría decidiendo?

Esa es la conversación que nos interesa tener.

En Itera venimos acompañando este recorrido completo: cultura de equipo, prácticas técnicas de clase mundial y, cuando el trabajo empieza a salirse de las fronteras del equipo, diseño guiado por el dominio. No como un proyecto de arquitectura, sino como lo que es: la forma de que la organización se ponga de acuerdo en qué significan las cosas, respetando que en cada lugar signifiquen algo distinto.
