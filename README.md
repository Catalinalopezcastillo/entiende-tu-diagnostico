# Entiende Tu Diagnóstico® — sitio web

Landing pública estática (HTML + CSS + un poco de JS). Sin frameworks, sin costos, sin build.
Se publica gratis en **GitHub Pages**. Todos los archivos van sueltos (sin carpetas), para que la
subida por navegador sea sencilla incluso desde Safari.

## Archivos

```
index.html       Inicio
servicios.html   Catálogo de servicios (4 pilares)
contacto.html    WhatsApp + correo + LinkedIn
recursos.html    Biblioteca "Próximamente"
styles.css       Todo el diseño (colores y tipografía en variables, arriba del archivo)
menu.js          Menú móvil
favicon.svg      Ícono de la pestaña
.nojekyll        Evita que GitHub Pages procese el sitio con Jekyll (archivo oculto)
README.md        Este archivo
```

## Ver el sitio en tu computador (opcional)

En la app Terminal, dentro de esta carpeta:

```bash
python3 -m http.server 8123
```

Luego abre <http://localhost:8123> en el navegador. (Ctrl+C para detenerlo.)

## Editar lo más común

- **WhatsApp / correo / LinkedIn:** están repetidos en las 4 páginas. Para cambiarlos, busca y
  reemplaza en todos los `.html`:
  - WhatsApp: `573115520337`
  - Correo: `catalinalopezcastillo1@gmail.com`
  - LinkedIn: `catalina-lopez-md`
- **Colores y tipografía:** al inicio de `styles.css`, sección "Tokens de diseño".
- **Textos:** directamente en cada archivo `.html`.

## Publicar en GitHub Pages (gratis)

1. Entra a tu repositorio: <https://github.com/catalinalopezcastillo/entiende-tu-diagnostico>
2. **Add file → Upload files**.
3. Arrastra **todos los archivos sueltos** de esta carpeta (los 4 `.html`, `styles.css`,
   `menu.js`, `favicon.svg`, `README.md`). Espera a que se listen todos.
4. Clic en **Commit changes**.
5. **Settings → Pages**. En **Source** deja "Deploy from a branch"; en **Branch** elige `main`
   y `/ (root)`. Guarda.
6. Espera ~1–2 min. Tu sitio quedará en:
   **<https://catalinalopezcastillo.github.io/entiende-tu-diagnostico/>**

> Dominio propio (opcional, ~$10–15 USD/año): Settings → Pages → Custom domain.

## Pendientes sugeridos (cuando quieras)

- [ ] Reemplazar el placeholder de iniciales por una **foto** en la sección "Sobre la fundadora"
      del `index.html`.
- [ ] Cambiar el correo temporal de Gmail por el **correo de dominio** cuando exista.
- [ ] Llenar la **Biblioteca de recursos** con las guías reales (hoy va como "Próximamente").
