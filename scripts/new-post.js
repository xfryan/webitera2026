#!/usr/bin/env node
/*
 * Crea un nuevo post desde cero.
 * Uso:  npm run new-post-es   (o new-post-en)
 * Pide título + copia de la imagen destacada, y deja un .md
 * listo para editar en src/posts/ (o src/en/posts/).
 */
const fs = require("fs");
const path = require("path");
const readline = require("readline");

const lang = process.argv[2] === "en" ? "en" : "es";
const dir = lang === "en" ? "src/en/posts" : "src/posts";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

const slugify = (s) =>
  s
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

(async () => {
  const title = await ask(lang === "en" ? "Post title: " : "Título del post: ");
  const excerpt = await ask(lang === "en" ? "One-line excerpt (for the card): " : "Bajada de una línea (para la tarjeta): ");
  const imagePath = await ask(
    lang === "en"
      ? "Path to the cover image inside src/assets/img/blog/ (e.g. my-post.png): "
      : "Ruta de la imagen destacada dentro de src/assets/img/blog/ (ej: mi-post.png): "
  );

  const slug = slugify(title);
  const today = new Date();
  const isoDate = today.toISOString().slice(0, 10);
  const dateDisplayEs = today.toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" });
  const dateDisplayEn = today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  const frontMatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: ${isoDate}
dateDisplay: "${lang === "en" ? dateDisplayEn : dateDisplayEs}"
lang: ${lang}
image: /assets/img/blog/${imagePath.trim()}
imageAlt: ""
excerpt: "${excerpt.replace(/"/g, '\\"')}"
tags:
  - posts_${lang}
---

Escribe aquí el cuerpo del post en Markdown.

## Un subtítulo

Párrafos normales, **negrita**, _cursiva_, [links](https://itera.cl), listas, blockquotes — todo el markdown estándar funciona y hereda el estilo tipográfico del sitio.
`;

  const outPath = path.join(dir, `${slug}.md`);
  if (fs.existsSync(outPath)) {
    console.error(`Ya existe ${outPath} — elige otro título o bórralo primero.`);
    process.exit(1);
  }
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(outPath, frontMatter, "utf-8");
  console.log(`\nListo → ${outPath}`);
  console.log(`Copia la imagen a src/assets/img/blog/${imagePath.trim()}, escribe el post, y corre "npm run build" (o "npm run serve" para verlo en vivo).`);
  rl.close();
})();
