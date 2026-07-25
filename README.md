# Portfolio — Astro + i18n

Sitio estático con **español** (`/`) e **inglés** (`/en/`), listo para GitHub Pages o cualquier servidor estático.

## Editar contenido

Todo el texto vive en:

- `src/i18n/es.ts` — español
- `src/i18n/en.ts` — inglés

Ahí cambias perfil, experiencia, certificados, proyectos, habilidades, etc.

## Añadir un idioma (ej. italiano)

1. Copia `src/i18n/es.ts` → `src/i18n/it.ts` y traduce.
2. En `src/i18n/index.ts`, registra `'it'` en `locales` y en `dictionaries`.
3. En `astro.config.mjs`, añade `'it'` a `i18n.locales`.
4. Crea `src/pages/it/index.astro` igual que `en/index.astro` con `locale="it"`.
5. Ajusta el selector de idioma en los diccionarios (`nav.switchLangHref` / flag).

## Desarrollo local

```bash
npm install
npm run dev
```

Abre la URL que indique Astro (con base `/portfolio/`).

## Build

```bash
npm run build
npm run preview
```

La carpeta `dist/` es lo que se publica.

## GitHub Pages

1. Repo Settings → Pages → Source: **GitHub Actions**
2. Push a `main` (o `master`): el workflow `.github/workflows/deploy.yml` construye y publica.

`astro.config.mjs` usa `base: '/portfolio'` para `https://rripollesg.github.io/portfolio/`.

## Servidor propio / dominio propio

En `astro.config.mjs`:

```js
site: 'https://tudominio.com',
base: '/',
```

Vuelve a hacer `npm run build` y sube `dist/`.

## Legacy

El HTML antiguo está en `_legacy/` por si quieres consultar algo.
