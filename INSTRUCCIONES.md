# Cómo subir esto a `xfryan/webitera2026`

Preparado contra el repo real (verifiqué que `index.html` e `index-en.html` de este paquete son idénticos, byte a byte, a los que hoy están en `main`). Pensado para no tener downtime: la home actual sigue viva hasta que el nuevo build se publique con éxito.

## 1. Copiar los archivos nuevos a tu clon local

En tu clon de `webitera2026`, copia (sin borrar nada todavía) desde este paquete:

```
src/
.github/
scripts/
package.json
package-lock.json
eleventy.config.js
.pages.yml
.gitignore
README.md
```

`CNAME` no lo toques — el que ya está en el repo sirve tal cual.

**No borres** `index.html` ni `index-en.html` del root todavía — quedan ahí como red de seguridad mientras confirmamos que el build nuevo funciona (Pages los ignora en cuanto actives el paso 3).

## 2. Commit y push

```bash
cd ruta/a/tu/clon/webitera2026
git add -A
git commit -m "Agrega blog bilingüe (Eleventy) con deploy vía GitHub Actions"
git push origin main
```

Esto va a disparar el workflow (`.github/workflows/deploy.yml`), pero **va a fallar la primera vez** — es esperado, porque Pages todavía está configurado como "Deploy from a branch" y no acepta despliegues de Actions hasta que cambies eso en el paso 3.

## 3. Cambiar el origen de Pages a GitHub Actions

En GitHub: `xfryan/webitera2026` → **Settings** → **Pages** → sección "Build and deployment" → **Source**: cambiar de "Deploy from a branch" a **"GitHub Actions"**. Guardar.

## 4. Volver a correr el workflow

`Actions` (pestaña del repo) → el workflow "Deploy blog to GitHub Pages" → si quedó en rojo por el paso 2, click en **"Re-run all jobs"**. Si prefieres, también podés dispararlo manual: `Actions` → "Deploy blog to GitHub Pages" → **"Run workflow"**.

Esperá 1-2 minutos y debería quedar en verde.

## 5. Verificar en goitera.com

Con el build ya publicado, revisar:

- `https://goitera.com/` — home ES (debería verse igual que antes)
- `https://goitera.com/en/` — home EN (nueva ruta)
- `https://goitera.com/posts/` — listado del blog ES
- `https://goitera.com/en/posts/` — listado del blog EN (vacío por ahora, con el mensaje "coming soon")
- `https://goitera.com/posts/la-ia-que-tu-presupuesto-no-esta-comprando/` — el post migrado

## 6. (Opcional, cuando confirmes que todo anda) Limpieza

```bash
git rm index.html index-en.html
git commit -m "Limpieza: elimina HTML estático viejo (reemplazado por src/ + build)"
git push origin main
```

Ya no se sirven (Pages solo mira lo que publica el Action), pero no hacen daño si te da paja borrarlos ahora — se puede dejar para después.

## Después de esto

- **Pages CMS** (hito 6 del plan): entrar a app.pagescms.org, autorizar sobre este repo, y ya se puede crear posts con editor visual — `.pages.yml` ya está commiteado.
- El scaffold de terminal (`npm run new-post-es` / `new-post-en`) también funciona apenas tengas el repo clonado y `npm install` corrido localmente.
