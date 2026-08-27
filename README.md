# Raúl Ripollés García

Portfolio personal: consultor HIS / QA e implantador en el sector sanitario, con desarrollo web y apps.

**Sitio en vivo:** [rripollesg.github.io/portfolio](https://rripollesg.github.io/portfolio/)

## Qué incluye

- Perfil, experiencia y formación
- Certificados y cursos
- Proyectos (Pills, Saltapalabra, herramienta anti-IA, …)
- Habilidades
- Versión en **español** (`/`) e **inglés** (`/en/`)
- CV descargable en ambos idiomas

## Contenido

El texto del sitio está en:

- [`src/i18n/es.ts`](src/i18n/es.ts)
- [`src/i18n/en.ts`](src/i18n/en.ts)

Imágenes, certificados y CVs van en `public/`.

## Desarrollo

```bash
npm install
npm run dev
```

```bash
npm run build
npm run preview
```

Hecho con [Astro](https://astro.build/). La publicación en GitHub Pages sale de la rama `main` (workflow en `.github/workflows/`). El trabajo activo suele ir en `v6.0` y se mergea a `main` cuando quieras publicarlo.
