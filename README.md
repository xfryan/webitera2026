# Blog de Itera — POC

Prueba de concepto de un blog para itera.cl construido con [Eleventy](https://www.11ty.dev/) y pensado para vivir en el mismo repo/host que el sitio nuevo (`webitera2026`), respetando la estructura de idioma que ya definieron los home:

- `itera.cl/` → home en español (default) + `itera.cl/posts/` → listado de posts en español.
- `itera.cl/en/` → home en inglés + `itera.cl/en/posts/` → listado de posts en inglés.

Reutiliza tal cual el diseño de `index.html` / `index-en.html`: mismas fuentes, mismos colores, mismo nav y footer. Lo único que cambia es que las fuentes y el CSS (antes pegados enteros dentro de cada home, ~200KB duplicados por página) ahora viven en `src/assets/css/` y se cargan una sola vez, cacheados, en todas las páginas del sitio — home ES, home EN, y cada post.

Las páginas de blog **no** cargan la escena 3D (el túnel de iteración) que sí tienen los home — es un script de ~600KB, decorativo, pensado para una pantalla de bienvenida. Los posts usan el fondo degradado liviano (`#fallback-bg`) que el sitio ya trae como respaldo cuando WebGL no está disponible. Esto es intencional: mantiene los posts livianos sin perder la paleta ni la identidad visual.

## Estructura

```
src/
  index.html              → home ES (copia de tu index.html, con el <style> externalizado)
  en/index.html            → home EN
  posts/
    index.njk               → listado de posts ES        → /posts/
    la-ia-que-tu-....md      → un post ES                 → /posts/la-ia-que-tu-.../
  en/posts/
    index.njk               → listado de posts EN         → /en/posts/
  _includes/
    base.njk                 → layout base (head, nav, footer, scripts)
    post.njk                 → layout de post individual
    nav-es.njk / nav-en.njk       → nav extraído de tu sitio, con los links arreglados
    footer-es.njk / footer-en.njk
  assets/
    css/fonts.css             → @font-face (Archivo Black, Inter) — extraído de tu index.html
    css/site.css              → variables, nav, botones, panels — extraído de tu index.html
    css/blog.css              → estilos propios del blog (tipografía de artículo, tarjetas)
    js/site.js                → menú mobile + reveal-on-scroll (sin la parte 3D)
    img/blog/                 → imágenes destacadas de cada post
```

## Cómo crear un post nuevo — opción "tipo WordPress" (recomendada)

Este repo trae un archivo `.pages.yml` que configura [Pages CMS](https://pagescms.org) — un admin visual, gratis, que se conecta directo a este repo de GitHub. Es lo más parecido a "Nuevo → Post" de WordPress que existe para un sitio en GitHub, sin instalar ni mantener nada:

1. Entra a **app.pagescms.org**, inicia sesión con tu cuenta de GitHub y autoriza la app sobre este repo (una sola vez).
2. Se detecta `.pages.yml` solo y te aparecen dos colecciones: "Blog — Español" y "Blog — English".
3. Click en "New" → escribes el título, la bajada, arrastras la imagen destacada, y escribes el cuerpo en un editor de texto con formato (negrita, títulos, listas, links) — igual que el editor de WordPress.
4. Click en "Publish" (o "Save as draft" si quieren revisar antes). Eso hace un commit directo a este repo con el `.md` y la imagen ya copiada a `src/assets/img/blog/`.
5. Ese commit dispara el GitHub Action (`.github/workflows/deploy.yml`), que buildea y publica solo. En 1-2 minutos está en línea.

No hay servidor propio que mantener ni credenciales que guardar aparte de tu login de GitHub — Pages CMS es gratis y de código abierto. Esto es lo que instalaríamos una sola vez cuando creemos el repo real; después de eso, escribir un post es: entrar, escribir, publicar.

## Alternativa para quien prefiera texto/terminal

Si en algún momento prefieres escribir en markdown directo (por ejemplo para pegar contenido ya formateado, o hacer cambios más finos), el repo también trae un scaffold de línea de comandos:

1. `npm run new-post-es` (o `new-post-en`) — pregunta título, bajada y nombre de la imagen, y deja un `.md` listo con el front matter armado en `src/posts/` (o `src/en/posts/`).
2. Copia la imagen a `src/assets/img/blog/`.
3. Escribe el cuerpo en markdown normal — títulos con `##`, negrita, listas, citas.
4. `npm run serve` para previsualizar en `http://localhost:8080` antes de publicar.
5. `git add`, `git commit`, `git push` a `main` — el mismo GitHub Action se encarga del resto.

Ambos caminos terminan escribiendo el mismo tipo de archivo (`.md` con front matter) en el mismo repo, así que se pueden combinar sin problema: un post por Pages CMS y el siguiente a mano, da lo mismo.

No hace falta commitear `_site/` (el HTML generado) — el `.gitignore` ya lo excluye; lo genera GitHub Actions en cada push.

## Front matter de un post

```yaml
---
layout: post.njk
title: "Título del post"
date: 2026-07-30
dateDisplay: "30 de julio de 2026"
lang: es
image: /assets/img/blog/mi-imagen.png
imageAlt: "Descripción de la imagen"
excerpt: "Una línea que aparece en la tarjeta del listado."
tags:
  - posts_es
  - Otra-Categoría
---
```

Lo que hace que un post aparezca en `/posts/` o en `/en/posts/` es **la carpeta donde vive el archivo** (`src/posts/` vs `src/en/posts/`), no un campo dentro del front matter — así que no hay forma de "publicarlo en el idioma equivocado" por accidente. `tags` es solo para las categorías que se muestran como chip al final del post (`AI-First`, etc.); Pages CMS ya te preselecciona `posts_es`/`posts_en` ahí por prolijidad, pero no es lo que determina el idioma.

## Primer post — proof of concept

`src/posts/la-ia-que-tu-presupuesto-no-esta-comprando.md` es el post más reciente de itera.cl ("La IA que tu presupuesto no está comprando", 30 jul 2026), migrado a mano para esta prueba: texto y foto destacada traídos desde WordPress. Sirve como ejemplo real de cómo se ve un post migrado.

## Pendiente para cuando se traiga todo WordPress

- Script de migración masiva (WordPress export XML o API REST → un `.md` por post + descarga de imágenes a `assets/img/blog/`).
- Redirects 301 desde las URLs viejas de WordPress (`itera.cl/2026/07/30/slug/`) hacia las nuevas (`itera.cl/posts/slug/`), para no perder SEO ni links ya compartidos.
- Traducciones EN de los posts existentes (hoy `/en/posts/` muestra un estado vacío).
