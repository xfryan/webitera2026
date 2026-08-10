---
layout: post.njk
title: "La pared siempre estuvo ahí"
date: 2026-06-13
dateDisplay: "13 de junio de 2026"
lang: es
image: /assets/img/blog/la-pared-siempre-estuvo-ahi.png
imageAlt: "Ilustración generada por IA sobre deuda técnica y colapso de sistemas"
excerpt: "El equipo técnico avisó. El negocio priorizó el roadmap. Seis meses después, en el peor momento posible, el sistema colapsó. La deuda técnica no es el problema — el sistema de incentivos que la produce, sí."
tags:
  - posts_es
  - Gestión de Producto Digital
  - Transformación Organizacional
---

Imaginemos que es marzo. El equipo de producto tiene sobre la mesa dos opciones para el siguiente sprint:

- Refactorizar el módulo de procesamiento de pagos —que acumula tres años de parches encima de parches— o
- Lanzar el flujo de checkout exprés que el área comercial lleva dos meses pidiendo.

El CCO mira el roadmap comprometido con el directorio. El Product Manager comenta, con la paciencia de quien ya lo explicó antes, que el módulo de pagos va a colapsar bajo carga si no se interviene. El comercial asiente… pero elige el checkout exprés.

No porque sea ignorante. Porque su *bono depende del roadmap.* Porque el directorio mide features entregados, no deuda gestionada. Porque decirle al CEO *"este trimestre no entregamos nada visible"* es una conversación que nadie quiere tener. La decisión es racionalmente correcta dentro del sistema de incentivos que existe.

Y así, sprint tras sprint, la deuda *crece*. Seis meses después, en el *Black Friday* o en el *pico de matrículas* o en el momento exactamente peor, el **sistema colapsa**.

Y entonces ocurre algo predecible: el negocio se asusta, busca culpables, y señala a lo técnico. "El equipo de tecnología no nos avisó." "La plataforma no está a la altura." El equipo técnico, que avisó múltiples veces y tiene los tickets para demostrarlo, guarda silencio con la mandíbula apretada.

## La deuda no es el problema. El sistema que la produce, sí.

Lo que acabamos de describir no es un caso aislado de mala gestión. Es un patrón tan extendido que tiene nombre propio desde hace décadas. **Ward Cunningham**, uno de los firmantes originales del **Manifiesto Ágil**, acuñó la metáfora de la *deuda técnica* en 1992 precisamente para que el negocio pudiera entender algo que hasta entonces era invisible: *que tomar atajos en el desarrollo es como pedir un préstamo*. A veces tiene sentido hacerlo. El problema no es la deuda; es el interés no pagado.

Lo que Cunningham no anticipó —o quizás sí, con pesimismo— es que la metáfora sería capturada por el mismo sistema que debía corregir. Hoy "deuda técnica" es el eufemismo que usan los equipos para justificar código que nadie quiere tocar, y el término que el negocio usa para decir *"problema de los ingenieros"*. La metáfora financiera se pervirtió: si fuera realmente una deuda, habría un acreedor, una tasa, una fecha de vencimiento. En cambio, se acumula *silenciosamente* hasta que el interés supera la capacidad de pago, y en ese momento ya no es deuda: es insolvencia.

Según **McKinsey** (2022), el 30% de los CIOs reconoce que más de una quinta parte de su presupuesto "de innovación" termina absorbido por deuda técnica. El **CISQ** — Consortium for Information & Software Quality, el organismo de estándares de la industria cofundado por Carnegie Mellon — estimó que la deuda técnica global superaba el billón de dólares en 2020 y crece al 14% anual.

Es decir, no es un problema de ingeniería. Es un problema de *balance sheet*.

## El incentivo que nadie quiere cambiar

El problema real no está en el código. Está en que el sistema de incentivos de la mayoría de las organizaciones digitales premia exactamente el comportamiento que produce colapso.

Los ciclos de planificación miden *features entregados*, no *salud arquitectónica*. Los bonos se calculan sobre el *roadmap cumplido*, únicamente. Las conversaciones con el directorio giran alrededor de *velocity* y *time-to-market*. No existe una métrica de *"deuda gestionada este trimestre"* en el dashboard ejecutivo. En ese contexto, pedirle al negocio que priorice *refactorización* sobre *features nuevos* es pedirle que tome una decisión que lo perjudica *dentro de las reglas del juego vigentes*. Y la mayoría no lo hará, no porque sea cortoplacista o irresponsable, sino porque el sistema los *empuja* en esa dirección con fuerza.

El colapso, cuando llega, produce un diagnóstico falso: **"el equipo técnico falló".** Pero el equipo técnico construyó exactamente lo que el sistema de incentivos les pidió que construyeran, a la velocidad que ese sistema exigió, con los compromisos que ese sistema celebró. La pared no apareció de repente. Estaba creciendo en cada sprint donde el negocio eligió racionalmente el corto plazo.

Lo que se estrella contra la pared no es la plataforma. Es el modelo de gobierno del producto.

## La salida: hacer visible lo invisible

No existe una solución técnica para un problema de incentivos. La deuda técnica no se resuelve con mejores ingenieros ni con más sprints de "limpieza". Se resuelve cuando el negocio y la tecnología comparten un lenguaje que hace visible el costo real de cada decisión en el momento en que se toma, no seis meses después cuando ya es demasiado tarde.

Eso implica, en la práctica, tres movimientos:

- Primero, traducir la deuda a términos financieros concretos: no "el módulo de pagos está degradado", sino "cada mes que no intervenimos, el costo de intervención crece un 15% y el riesgo de falla bajo carga aumenta al doble".
- Segundo, integrar la salud técnica como criterio de priorización explícito —no como ítem de backlog que compite con features, sino como condición que habilita o inhibe el escalamiento.
- Tercero, construir la conversación con el directorio antes del colapso, con datos que los ejecutivos reconozcan como propios: riesgo de negocio, costo de oportunidad, ventana de intervención.

Sin esos movimientos, el ciclo se repite. Con ellos, la deuda técnica vuelve a ser lo que Cunningham quiso que fuera: una herramienta de decisión consciente, no una bomba de tiempo con cuenta regresiva invisible.

## En Itera ya estamos teniendo esa conversación

Una parte importante del trabajo que hacemos con equipos de producto es exactamente esta: construir el puente entre la arquitectura y la sala de directorio. No para defender a los ingenieros ni para frenar el roadmap, sino para que la organización pueda tomar decisiones con el costo real sobre la mesa.

Hemos visto cómo plataformas que llevaban años funcionando "bien" llegan a un punto de escalamiento y simplemente no pueden seguir. Y hemos visto también cómo equipos que lograron instalar esa conversación antes del colapso convirtieron la gestión de deuda en una ventaja competitiva real: plataformas que escalan sin drama, porque alguien tuvo la conversación incómoda en el momento correcto.

¿En tu organización esa conversación ya está ocurriendo, o todavía está esperando al próximo Black Friday para detonarse?
