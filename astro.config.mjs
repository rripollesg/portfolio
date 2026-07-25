import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://rripollesg.github.io/portfolio/
// For a custom domain or own server, set base: '/' and update site.
export default defineConfig({
  site: 'https://rripollesg.github.io',
  base: '/portfolio/',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
