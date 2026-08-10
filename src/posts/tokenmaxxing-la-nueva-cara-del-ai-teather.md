---
layout: post.njk
title: "Tokenmaxxing: la nueva cara del AI Teather"
date: 2026-05-28
dateDisplay: "28 de mayo de 2026"
lang: es
image: /assets/img/blog/tokenmaxxing-la-nueva-cara-del-ai-teather.png
imageAlt: "Ilustración generada por IA sobre tokenmaxxing y el teatro de adopción de inteligencia artificial"
excerpt: "Un equipo consumió 40% más tokens este trimestre. Nadie preguntó qué se hizo con ellos. Tokenmaxxing es la nueva cara del AI Theater — y tiene tres antipatrones detrás."
tags:
  - posts_es
  - AI-First
  - Nuevas Formas de Trabajo
  - Nuevos Paradigmas
---

**Escena uno.**
Comité ejecutivo, último jueves del mes. El gerente de transformación proyecta un dashboard: el equipo de operaciones consumió 2,3 millones de tokens este mes, un 40% más que el trimestre anterior. Hay sonrisas alrededor de la mesa. Alguien dice "vamos por buen camino". Nadie pregunta qué se hizo con esos tokens. Nadie pregunta si algún proceso se acortó, si algún cliente notó algo, si alguna decisión fue mejor. La métrica de consumo de tokens subió. Eso bastó.

**Escena dos.**
Un analista del área de datos recibe la directiva: "úsalo en tu día a día". Empieza a pasarle por la herramienta los correos antes de enviarlos, le pide que le resuma documentos que igual va a leer entero, le pregunta cosas que ya sabe. Su flujo de trabajo no cambió. Sus criterios no cambiaron. Sus entregables no cambiaron. Solo agregó un paso intermedio que le permite reportar uso. La herramienta entró a su rutina sin tocar su criterio.

**Escena tres.**
Un equipo de desarrollo adopta agentic coding. La velocidad de producción de código se triplica. Las features llegan a revisión a un ritmo que el equipo de QA no puede sostener. Uno de los desarrolladores empieza a generar más bugs que antes — no por falta de talento, sino porque el volumen acelerado expone cada decisión de juicio que antes pasaba sin ser examinada. El reporte mensual celebra el ship rate. El producto sigue siendo el mismo, o lo que es lo peor… se degrada silenciosamente…

¿Qué tienen en común estas tres historias? Mucho más de lo que parece.

## El síntoma tiene nombre, los antipatrones no

Hace pocos días, **Jeff Gothelf** publicó un texto que está circulando con razón en los círculos de transformación. Lo tituló *The rise of performative AI work*. En él nombra un fenómeno:

> empleados de Amazon estarían elevando su consumo de tokens sin razones reales, solo porque la empresa empezó a medir uso de AI como Indicador de Desempeño.

*Tokenmaxxing* es la práctica de inflar artificialmente el consumo de tokens de inteligencia artificial — creando agentes innecesarios, generando consultas superfluas, o forzando flujos donde la herramienta no aporta — para cumplir métricas internas de adopción. La métrica se volvió el objetivo. El objetivo se volvió teatro.

Gothelf describe el síntoma con precisión y enumera tres señales que cualquier líder puede usar para diagnosticar a su organización:

1. Medir adopción en lugar de impacto,
2. Presionar el uso sin preguntar el porqué, y
3. No tener línea base de qué significa "mejor".

Hasta ahí, el análisis es nítido. Lo que nos pone a pensar inmediatamente: ¿qué prácticas organizacionales producen esas señales?

Porque *tokenmaxxing* no es una anomalía de Amazon. Es la consecuencia previsible de tres antipatrones que llevan décadas instalados en cómo las grandes organizaciones intentan transformarse, ahora aplicados a la inteligencia artificial.

La urgencia del momento es real. El último *State of AI* de McKinsey, publicado a fines de 2025, reporta que el 88% de las organizaciones usa AI regularmente en al menos una función de negocio. Sin embargo, solo el 6% logra capturar un impacto significativo en su EBIT. Esa brecha — entre adopción universal e impacto material — no se cierra con más uso. Se cierra entendiendo qué prácticas la están produciendo.

## Antipatrón uno: AI Theater

Hace quince años acuñamos en el mundo ágil el término *Agile Theater* para describir organizaciones que instalaban ceremonias visibles — *Daily, Sprint, Retro* — sin tocar los valores o principios que las sostienen. Era teatro: daba ilusión de transformación mientras blindaba la resistencia al cambio.

Lo que la escena uno muestra es exactamente la misma película con distinta tecnología. *AI Theater* es el dashboard de adopción presentado como evidencia de transformación. Es la métrica de uso confundida con métrica de impacto. Es el ritual que reemplaza la pregunta incómoda: ¿qué cambió para nuestros clientes desde que empezamos esto?

La señal que Gothelf nombra — medir adopción en lugar de impacto — es el síntoma visible. El antipatrón debajo es estructural: instalamos los rituales y esperamos que la transformación emerja sola. Nunca emergió con Agile. No va a emerger con AI.

## Antipatrón dos: confundir adopción con apropiación

*Adoptar* una herramienta significa incorporarla al flujo. *Apropiarse* de una herramienta significa que tu criterio cambia por usarla. Son dos cosas distintas.

La escena dos describe *adopción sin apropiación*. El analista usa la herramienta, pero su forma de pensar el trabajo no se movió. Reporta uso, no transformación. Y eso es exactamente lo que pasa cuando la organización presiona el verbo equivocado: empuja a *usar* sin acompañar el cambio de criterio sobre *cuándo conviene usar*, *qué problema resuelve*, *qué decisión se vuelve mejor por usarla*.

La señal que Gothelf nombra — presión por usar AI más fuerte que el por qué — produce este antipatrón con precisión clínica. Cuando "¿estás usando AI?" se convierte en pregunta de desempeño, deja de hacerse la pregunta que importa: ¿debería usar AI para esto?. Y la mejor decisión muchas veces es no usarlo. Esa distinción desaparece el día que el uso se vuelve el objetivo.

## Antipatrón tres: trasladar el cuello de botella sin moverse con él

Cuando la velocidad de ejecución se triplica con AI, el cuello de botella se traslada. Ya no está en cuánto código produces, cuántos correos respondes, cuántos reportes generas. Está en el juicio: ¿estamos construyendo lo correcto? ¿esto resuelve algo real? ¿qué decisión está implícita en este output que acabo de generar?

La escena tres describe a un equipo que vio su ejecución acelerar pero no movió su capacidad de juicio con ella. Más volumen significa más decisiones de juicio por unidad de tiempo, y cada decisión que antes pasaba sin examen ahora se vuelve visible — a veces como bug, a veces como producto que no resuelve nada.

La señal que Gothelf nombra — no tener línea base de qué es mejor — no es un olvido. Es la consecuencia de no haber migrado cognitivamente cuando el bottleneck migró. Si tu equipo sigue midiendo lo que medía antes de AI, está midiendo la parte del trabajo que ya andaba. La parte que ahora importa quedó huérfana.

## La pregunta antes de la respuesta

Hay una tentación predecible al terminar un texto como este: ofrecer la receta. Tres pasos para evitar el AI Theater, cinco principios para la apropiación real, un framework para mover el juicio con el bottleneck.

Nosotros no la vamos a ofrecer. Por una razón epistemológica: la solución no es genérica. Depende del iceberg que cada organización tenga debajo del agua, de la historia previa de su transformación, del estado real de sus equipos. Y por una razón práctica: si ya sabes qué hacer leyendo un post, no necesitas a nadie.

La pregunta que sí queremos dejarte es la siguiente. Releé las tres escenas del comienzo. ¿Reconociste alguna? ¿Una y media? ¿Las tres? Esa es la primera información útil. La segunda es esta: ¿sabe tu equipo de liderazgo que las está viviendo, o las está reportando como éxito de adopción?

## Itera ya está abordándolo

En Itera estamos acompañando a equipos que empiezan a notar la diferencia entre estar usando AI y estar transformándose con AI. No traemos un manual ni una metodología empaquetada. Traemos la mirada que viene de haber visto el iceberg al revés muchas veces antes, ahora aplicada a esta nueva ola.

Si alguna de las tres escenas te resultó incómodamente familiar, conversemos. La conversación misma suele ser donde empieza a moverse algo.
